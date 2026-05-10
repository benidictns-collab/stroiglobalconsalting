# ──────────────────────────────────────────────
# Dockerfile для APP Platform Timeweb Cloud
# Next.js 16 standalone + Prisma + SQLite
# ──────────────────────────────────────────────

# ─── Stage 1: Зависимости ───
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

COPY package.json package-lock.json* bun.lock* ./

# Устанавливаем зависимости (prod + dev для сборки)
RUN if [ -f bun.lock ]; then \
      npm install --legacy-peer-deps; \
    elif [ -f package-lock.json ]; then \
      npm ci --legacy-peer-deps; \
    else \
      npm install --legacy-peer-deps; \
    fi

# ─── Stage 2: Сборка ───
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Генерируем Prisma клиент
RUN npx prisma generate

# Собираем Next.js
RUN npx next build

# Копируем статику и public в standalone
RUN cp -r .next/static .next/standalone/.next/ && \
    cp -r public .next/standalone/ && \
    cp -r prisma .next/standalone/prisma && \
    cp -r db .next/standalone/db && \
    mkdir -p .next/standalone/node_modules/.prisma && \
    cp -r node_modules/.prisma .next/standalone/node_modules/.prisma && \
    cp -r node_modules/@prisma .next/standalone/node_modules/@prisma

# ─── Stage 3: Production ───
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Минимальные пакеты для SQLite
RUN apk add --no-cache openssl

# Создаём непривилегированного пользователя
RUN addgroup --system --gid 1001 appgroup && \
    adduser --system --uid 1001 appuser

# Копируем только standalone-бандл
COPY --from=builder /app/.next/standalone ./

# Права на запись для SQLite
RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 3000

# Timeweb APP Platform ожидает сервер на 0.0.0.0:3000
CMD ["node", "server.js"]
