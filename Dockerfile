# ──────────────────────────────────────────────
# Dockerfile для APP Platform Timeweb Cloud
# Next.js 16 standalone
# ──────────────────────────────────────────────

# ─── Stage 1: Зависимости ───
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* bun.lock* ./

RUN if [ -f package-lock.json ]; then \
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

# Собираем Next.js
RUN npx next build

# Копируем статику и public в standalone
RUN cp -r .next/static .next/standalone/.next/ && \
    cp -r public .next/standalone/

# ─── Stage 3: Production ───
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 appgroup && \
    adduser --system --uid 1001 appuser

# Копируем только standalone-бандл
COPY --from=builder /app/.next/standalone ./

RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 3000

CMD ["node", "server.js"]
