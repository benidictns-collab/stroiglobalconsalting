'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import {
  ShieldCheck, Cpu, Flame, Zap, Users,
  CheckCircle, Award, Monitor, Laptop, Building2, Factory, HardHat,
  Clock, Calendar, ChevronRight, Phone, Mail, MapPin, Menu, X,
  ArrowRight, Target, Layers, TrendingUp, Rocket,
  Microscope, Gauge, Beaker, ScanLine,
  ClipboardCheck, Send, Globe, Briefcase,
  Settings, Truck, ShieldAlert
} from 'lucide-react'

/* ─── Intersection Observer Hook ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

/* ─── Section Wrapper with Reveal ─── */
function Section({ id, children, className = '' }: { id: string; children: React.ReactNode; className?: string }) {
  const ref = useReveal()
  return (
    <section id={id} ref={ref} className={`reveal ${className}`}>
      {children}
    </section>
  )
}

/* ─── Data ─── */
const navLinks = [
  { id: 'hero', label: 'Главная' },
  { id: 'about', label: 'О компании' },
  { id: 'principles', label: 'Принципы' },
  { id: 'experience', label: 'Опыт' },
  { id: 'services', label: 'Услуги' },
  { id: 'equipment', label: 'Оборудование' },
  { id: 'team', label: 'Команда' },
  { id: 'advantages', label: 'Преимущества' },
  { id: 'quality', label: 'Качество' },
  { id: 'digital', label: 'Цифровые' },
  { id: 'safety', label: 'Безопасность' },
  { id: 'contact', label: 'Контакты' },
]

const principles = [
  { num: '01', icon: ShieldCheck, title: 'Безопасность прежде всего', desc: 'Нулевой травматизм — наша главная цель. Каждый сотрудник имеет право остановить работу при угрозе безопасности.' },
  { num: '02', icon: Layers, title: 'Полный цикл управления', desc: 'EPC-подряд: от проектирования до пуско-наладки. Единая ответственность за все этапы проекта.' },
  { num: '03', icon: CheckCircle, title: 'Гарантия качества', desc: 'Многоуровневый контроль качества на каждом этапе. Собственные аккредитованные лаборатории.' },
  { num: '04', icon: Users, title: 'Мотивация персонала', desc: 'Инвестиции в обучение и развитие сотрудников. Программа подготовки кадров и наставничества.' },
  { num: '05', icon: Cpu, title: 'Цифровая эффективность', desc: 'Внедрение цифровых решений для управления проектами, контроля качества и документооборота.' },
  { num: '06', icon: Globe, title: 'Приоритет российских технологий', desc: 'Использование отечественного оборудования и программного обеспечения. Импортозамещение.' },
  { num: '07', icon: TrendingUp, title: 'Непрерывное улучшение', desc: 'Система непрерывного совершенствования процессов. Анализ опыта и внедрение лучших практик.' },
  { num: '08', icon: Rocket, title: 'Индустрия 4.0', desc: 'Внедрение технологий четвёртой промышленной революции: автоматизация, IoT, цифровые двойники.' },
]

const projects = [
  { name: 'Сила Сибири', year: '2014–2021', desc: 'Строительство линейной части магистрального газопровода' },
  { name: 'Ямал СПГ', year: '2015–2017', desc: 'Сварочно-монтажные работы на объектах СПГ' },
  { name: 'Бованенково-Ухта', year: '2008–2012', desc: 'Строительство газопровода на полуострове Ямал' },
  { name: 'Ухта-Торжок', year: '2012–2015', desc: 'Магистральный газопровод протяжённостью 970 км' },
  { name: 'Сахалин-1', year: '2005–2007', desc: 'Обустройство нефтегазового проекта на Сахалине' },
  { name: 'Восточная Сибирь — Тихий океан', year: '2009–2013', desc: 'Нефтепровод ВСТО, участки линейной части' },
  { name: 'Южный коридор', year: '2018–2020', desc: 'Строительство газотранспортной системы' },
  { name: 'Сила Сибири — 2', year: '2021–н.в.', desc: 'Проектирование и подготовка к строительству' },
]

const functionalZones = [
  { zone: 'Зона 1', name: 'Сварочное производство', desc: 'Организация и контроль сварочных работ, подбор технологий и сварочных материалов' },
  { zone: 'Зона 2', name: 'Механизация', desc: 'Обеспечение строительной техникой, эксплуатация и ремонт спецтехники' },
  { zone: 'Зона 3', name: 'Контроль качества (КТР)', desc: 'Входной, операционный и приёмочный контроль, лабораторные испытания' },
  { zone: 'Зона 4', name: 'Проектирование', desc: 'Разработка проектной документации, ППР и технологических карт' },
  { zone: 'Зона 5', name: 'Производство работ', desc: 'Организация строительно-монтажных работ на линейных объектах' },
  { zone: 'Зона 6', name: 'Подготовка производства', desc: 'Календарное планирование, логистика, обеспечение фронтом работ' },
  { zone: 'Зона 7', name: 'МТО и логистика', desc: 'Материально-техническое снабжение, складское хозяйство, поставки' },
  { zone: 'Зона 8', name: 'Охрана труда и промбезопасность', desc: 'Обеспечение безопасных условий труда, обучение и инструктажи' },
  { zone: 'Зона 9', name: 'Электротехническая лаборатория', desc: 'Электроизмерения, испытания электрооборудования и кабельных линий' },
  { zone: 'Зона 10', name: 'Цех трубных заготовок', desc: 'Заготовка и сборка трубных секций, изоляция и футеровка' },
  { zone: 'Зона 11', name: 'Автотранспорт', desc: 'Перевозки грузов и персонала, эксплуатация автопарка' },
]

const teamMembers = [
  { name: 'Савчук Сергей Иванович', role: 'Генеральный директор', desc: 'Руководство компанией, стратегическое развитие' },
  { name: 'Комар Василий Александрович', role: 'Первый ЗГД по строительству', desc: 'Управление строительным направлением' },
  { name: 'Кузнецов Сергей Алексеевич', role: 'ЗГД по производству', desc: 'Организация производственных процессов' },
  { name: 'Ибрагимов Магамед Ибрагимович', role: 'ЗГД по стратегии и финансам', desc: 'Финансовое планирование и стратегия' },
  { name: 'Калинин Андрей Сергеевич', role: 'Главный инженер', desc: 'Техническое руководство проектами' },
  { name: 'Кренева Надежда Анатольевна', role: 'ЗГД по правовым и кадровым вопросам', desc: 'Правовое обеспечение и HR-стратегия' },
  { name: 'Бессонов Олег Николаевич', role: 'ЗГД по сварочному производству', desc: 'Управление сварочным направлением' },
  { name: 'Ермаков Сергей Анатольевич', role: 'Технический директор', desc: 'Технологическое развитие и инновации' },
  { name: 'Забалуев Кирилл Игоревич', role: 'ЗГД по механизации', desc: 'Обеспечение техникой и механизмами' },
  { name: 'Илясов Игорь Станиславович', role: 'ЗГД по подготовке и контролю', desc: 'Контроль качества и подготовка работ' },
  { name: 'Карпунин Руслан Линафович', role: 'ЗГД по МТОиЛ', desc: 'Материально-техническое обеспечение' },
  { name: 'Яблонская Кристина Сергеевна', role: 'Директор по персоналу', desc: 'Управление человеческими ресурсами' },
]

const qualityAreas = [
  { icon: Beaker, title: 'Электротехническая лаборатория', desc: 'Измерения и испытания электрооборудования, кабельных линий, заземляющих устройств' },
  { icon: ShieldAlert, title: 'ЭХЗ', desc: 'Контроль электрохимической защиты, мониторинг потенциалов, наладка катодной защиты' },
  { icon: ScanLine, title: 'Неразрушающий контроль', desc: 'Радиография, УЗК, капиллярная дефектоскопия, магнитопорошковый контроль' },
  { icon: Gauge, title: 'Механические испытания', desc: 'Испытания образцов на растяжение, ударный изгиб, измерение твёрдости' },
  { icon: ClipboardCheck, title: 'Строительная лаборатория', desc: 'Контроль сварных соединений, входной контроль материалов, оформление документации' },
]

const equipmentTabs = [
  {
    key: 'welding',
    label: 'Сварочное оборудование',
    icon: Flame,
    hero: '/images/equipment_welding_hero.png',
    items: [
      { title: 'Сварочное оборудование', desc: 'Широкий парк сварочного оборудования для всех видов сварки' },
      { title: 'Автоматическая сварка в стеснённых условиях', desc: 'Специализированное оборудование для работы в ограниченном пространстве' },
      { title: 'Плазменная резка', desc: 'Высокоточная плазменная резка труб и деталей' },
    ]
  },
  {
    key: 'labs',
    label: 'Лаборатории',
    icon: Microscope,
    hero: '/images/equipment_labs_hero.png',
    items: [
      { title: 'Лаборатория неразрушающего контроля', desc: 'Полный спектр методов НК: РК, УЗК, ВИК, ПВК, МПК' },
      { title: 'Механические испытания', desc: 'Разрывные и ударные машины, твёрдомеры' },
      { title: 'Цифровая радиография', desc: 'Современное цифровое радиографическое оборудование' },
      { title: 'Лазерный контроль', desc: 'Лазерные системы измерения и контроля геометрии' },
    ]
  },
  {
    key: 'ktp',
    label: 'Техника КТП',
    icon: Truck,
    hero: '/images/equipment_ktp_hero.png',
    items: [
      { title: 'Транспортные средства КТП', desc: 'Мобильные лаборатории и транспорт для контроля' },
      { title: 'Сварочные машины КТП', desc: 'Передвижные сварочные установки' },
      { title: 'Технологический поток КТП', desc: 'Организация технологического процесса контроля' },
    ]
  },
  {
    key: 'assembly',
    label: 'Цех сборки',
    icon: Factory,
    hero: '/images/equipment_assembly_hero.png',
    items: [
      { title: 'Сборочное оборудование', desc: 'Оборудование для сборки и монтажа конструкций' },
      { title: 'Цех трубных заготовок', desc: 'Производство трубных секций и заготовок' },
    ]
  },
]

/* ─── Helper: Initials ─── */
function getInitials(name: string) {
  return name.split(' ').map(w => w[0]).join('')
}

/* ─── Main Page ─── */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('welding')
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-slate-200">
      {/* ═══ NAVIGATION ═══ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0e1a]/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-[#e8581a] to-[#f0a500] rounded-lg flex items-center justify-center font-heading text-xl text-white group-hover:scale-105 transition-transform">С</div>
              <span className="font-heading text-sm sm:text-base lg:text-xl tracking-wide text-white">СТРОЙГЛОБАЛКОНСАЛТИНГ</span>
            </button>

            {/* Desktop Nav - visible on xl+ */}
            <div className="hidden xl:flex items-center gap-0.5">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="px-2.5 py-2 text-[13px] text-slate-400 hover:text-[#e8581a] transition-colors rounded-md hover:bg-white/5 whitespace-nowrap"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button - visible below xl */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Меню навигации"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - slide-down */}
        <div className={`xl:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-[#0a0e1a]/98 backdrop-blur-xl border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {navLinks.map(link => (
                  <button
                    key={link.id}
                    onClick={() => { scrollTo(link.id); setMobileMenuOpen(false) }}
                    className="text-left px-4 py-3 text-slate-300 hover:text-[#e8581a] hover:bg-white/5 rounded-lg transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ═══ 1. HERO SECTION ═══ */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#e8581a] rounded-full blur-[200px] opacity-15 animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#f0a500] rounded-full blur-[200px] opacity-10 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

        {/* Hero Image Background */}
        <div className="absolute inset-0 hidden lg:block">
          <div className="absolute right-0 top-0 bottom-0 w-1/2">
            <img src="/images/hero_cover.png" alt="" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#0a0e1a]/80 to-transparent" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8581a]/10 border border-[#e8581a]/30 rounded-full mb-8">
              <Zap size={14} className="text-[#e8581a]" />
              <span className="text-sm text-[#e8581a] font-medium">Инновационный российский EPC-подрядчик</span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-wide mb-6">
              <span className="text-white">СТРОИМ</span>{' '}
              <span className="text-gradient-orange">БУДУЩЕЕ</span>
              <br />
              <span className="text-white">ЭНЕРГЕТИКИ</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
              ООО «Стройглобалконсалтинг» — ведущий российский EPC-подрядчик, специализирующийся на строительстве
              магистральных трубопроводов и объектов нефтегазовой инфраструктуры. Полный цикл — от проектирования до пуско-наладки.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <button
                onClick={() => scrollTo('contact')}
                className="px-8 py-4 bg-[#e8581a] hover:bg-[#d14f16] text-white font-semibold rounded-lg transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-[#e8581a]/25"
              >
                Обсудить проект
                <ChevronRight size={18} />
              </button>
              <button
                onClick={() => scrollTo('experience')}
                className="px-8 py-4 border border-white/20 hover:border-[#e8581a]/50 text-white rounded-lg transition-all hover:bg-white/5 flex items-center gap-2"
              >
                Наши проекты
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {[
                { value: '16+', label: 'лет опыта', icon: Calendar },
                { value: '20+', label: 'крупных проектов', icon: Briefcase },
                { value: '2×', label: 'чемпионы мира', icon: Award },
                { value: '11', label: 'функций на площадке', icon: Layers },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-[#e8581a]/30 transition-colors">
                  <stat.icon size={20} className="text-[#e8581a] mb-2" />
                  <div className="font-heading text-3xl sm:text-4xl text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
          <span className="text-xs">Прокрутите вниз</span>
          <div className="w-5 h-8 border-2 border-slate-600 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-slate-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* ═══ 2. PROBLEM / SOLUTION ═══ */}
      <Section id="about" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8581a] font-heading text-lg tracking-wider">ПРОБЛЕМА И РЕШЕНИЕ</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3">Почему выбирают нас</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {/* Problem */}
            <div className="bg-[#0d1b3e]/60 border border-red-500/20 rounded-2xl p-6 lg:p-8 hover:border-red-500/40 transition-colors">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span className="text-red-400 text-sm font-medium">Проблема</span>
              </div>
              <h3 className="font-heading text-2xl text-white mb-4">Разрозненность подрядчиков</h3>
              <p className="text-slate-400 leading-relaxed">
                Привлечение множества субподрядчиков приводит к потере контроля над качеством, увеличению сроков
                и стоимости проектов. Различные стандарты и подходы создают риски на стыках работ. Отсутствие
                единой ответственности снижает эффективность управления проектом.
              </p>
            </div>

            {/* Solution */}
            <div className="bg-[#0d1b3e]/60 border border-emerald-500/20 rounded-2xl p-6 lg:p-8 hover:border-emerald-500/40 transition-colors">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-emerald-400 text-sm font-medium">Решение СГК</span>
              </div>
              <h3 className="font-heading text-2xl text-white mb-4">EPC-подрядчик полного цикла</h3>
              <p className="text-slate-400 leading-relaxed">
                ООО «СГК» объединяет все функции на строительной площадке: от проектирования до пуско-наладки.
                Единая команда, единая ответственность, единый стандарт качества. 11 функциональных зон работают
                как единый механизм для максимальной эффективности.
              </p>
            </div>
          </div>

          {/* Solution Details */}
          <div className="bg-gradient-to-r from-[#e8581a]/10 via-[#0d1b3e]/60 to-[#f0a500]/10 border border-[#e8581a]/20 rounded-2xl p-6 lg:p-8">
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Target, title: 'Единая ответственность', desc: 'Один подрядчик отвечает за все этапы проекта — от проектирования до сдачи объекта' },
                { icon: Layers, title: '11 функций на площадке', desc: 'Все необходимые функции и службы работают в единой команде с общими целями' },
                { icon: TrendingUp, title: 'Оптимизация сроков и бюджета', desc: 'Синхронизация процессов и устранение потерь на стыках между подрядчиками' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-[#e8581a]/10 border border-[#e8581a]/30 rounded-xl flex items-center justify-center">
                    <item.icon size={22} className="text-[#e8581a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ 3. PRINCIPLES ═══ */}
      <Section id="principles" className="py-20 lg:py-28 bg-[#0d1b3e]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8581a] font-heading text-lg tracking-wider">НАШИ ПРИНЦИПЫ</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3">Фундамент нашей работы</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((p, i) => (
              <div
                key={i}
                className="group bg-[#0d1b3e]/60 border border-white/5 rounded-2xl p-6 hover:border-[#e8581a]/30 hover:bg-[#0d1b3e]/80 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-4xl text-[#e8581a]/30 group-hover:text-[#e8581a]/60 transition-colors">{p.num}</span>
                  <div className="w-10 h-10 bg-[#e8581a]/10 rounded-lg flex items-center justify-center group-hover:bg-[#e8581a]/20 transition-colors">
                    <p.icon size={20} className="text-[#e8581a]" />
                  </div>
                </div>
                <h3 className="font-heading text-xl text-white mb-2 tracking-wide">{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══ 4. EXPERTISE / EXPERIENCE ═══ */}
      <Section id="experience" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8581a] font-heading text-lg tracking-wider">ОПЫТ И ЭКСПЕРТИЗА</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3">Крупнейшие проекты</h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Projects List */}
            <div className="lg:col-span-3 space-y-3">
              {projects.map((p, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 bg-[#0d1b3e]/40 border border-white/5 rounded-xl p-4 hover:border-[#e8581a]/30 transition-colors"
                >
                  <div className="shrink-0 w-12 h-12 bg-[#e8581a]/10 rounded-lg flex items-center justify-center group-hover:bg-[#e8581a]/20 transition-colors">
                    <Building2 size={20} className="text-[#e8581a]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-white truncate">{p.name}</h4>
                      <span className="text-xs text-[#e8581a] shrink-0 font-mono">{p.year}</span>
                    </div>
                    <p className="text-sm text-slate-400">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: Tags & Timeline */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#0d1b3e]/60 border border-white/5 rounded-2xl p-6">
                <h4 className="font-heading text-lg text-white mb-4 tracking-wide">Работали с</h4>
                <div className="flex flex-wrap gap-2">
                  {['Gazprom', 'Rosneft', 'Shell', 'ExxonMobil', 'Schlumberger', 'Sakhalin Energy', 'NOVATEK', 'Transneft'].map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 hover:border-[#e8581a]/30 hover:text-[#e8581a] transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline Bar */}
              <div className="bg-[#0d1b3e]/60 border border-white/5 rounded-2xl p-6">
                <h4 className="font-heading text-lg text-white mb-4 tracking-wide">История компании</h4>
                <div className="space-y-3">
                  {[
                    { year: '2005', event: 'Основание компании' },
                    { year: '2008', event: 'Первые крупные проекты на Ямале' },
                    { year: '2012', event: 'Выход на рынок Дальнего Востока' },
                    { year: '2015', event: 'Начало работ по «Силе Сибири»' },
                    { year: '2017', event: 'Золото Arc Cup, Пекин' },
                    { year: '2019', event: 'Золото Arc Cup, Чехия' },
                    { year: '2021', event: 'Завершение «Сила Сибири»' },
                  ].map((t, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="shrink-0 w-14 text-right font-mono text-sm text-[#e8581a]">{t.year}</div>
                      <div className="w-2.5 h-2.5 bg-[#e8581a] rounded-full shrink-0" />
                      <div className="text-sm text-slate-300">{t.event}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Infrastructure Image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/5 group">
                <img src="/images/infrastructure_hero.png" alt="Инфраструктура СГК" className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-sm text-slate-300">Собственная инфраструктура и склады</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ 5. SERVICES / ZONES TABLE ═══ */}
      <Section id="services" className="py-20 lg:py-28 bg-[#0d1b3e]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8581a] font-heading text-lg tracking-wider">ФУНКЦИОНАЛЬНЫЕ ЗОНЫ</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3">11 функций на площадке</h2>
            <p className="text-slate-400 mt-3 max-w-2xl mx-auto">Полный спектр услуг обеспечивает контроль качества на каждом этапе и устраняет риски на стыках между подрядчиками</p>
          </div>

          <div className="bg-[#0d1b3e]/60 border border-white/5 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-6 py-4 font-heading text-sm text-[#e8581a] tracking-wider">ЗОНА</th>
                    <th className="text-left px-6 py-4 font-heading text-sm text-[#e8581a] tracking-wider">НАПРАВЛЕНИЕ</th>
                    <th className="text-left px-6 py-4 font-heading text-sm text-[#e8581a] tracking-wider hidden sm:table-cell">ОПИСАНИЕ</th>
                  </tr>
                </thead>
                <tbody>
                  {functionalZones.map((z, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                      <td className="px-6 py-4">
                        <span className="font-mono text-sm text-[#e8581a]">{z.zone}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-white group-hover:text-[#e8581a] transition-colors">{z.name}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-400 hidden sm:table-cell">{z.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ 6. EQUIPMENT ═══ */}
      <Section id="equipment" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8581a] font-heading text-lg tracking-wider">ОСНАЩЕНИЕ</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3">Оборудование и техника</h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {equipmentTabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-[#e8581a] text-white shadow-lg shadow-[#e8581a]/25'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {(() => {
            const activeEquipment = equipmentTabs.find(t => t.key === activeTab)
            if (!activeEquipment) return null
            return (
              <div className="space-y-8">
                {/* Hero Image */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                  <img
                    src={activeEquipment.hero}
                    alt={activeEquipment.label}
                    className="w-full h-64 sm:h-80 lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-[#e8581a]/20 border border-[#e8581a]/40 flex items-center justify-center">
                        <activeEquipment.icon size={20} className="text-[#e8581a]" />
                      </div>
                      <h3 className="font-heading text-2xl sm:text-3xl text-white tracking-wide">{activeEquipment.label}</h3>
                    </div>
                  </div>
                </div>

                {/* Items Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {activeEquipment.items.map((item, i) => (
                    <div key={`${activeTab}-${i}`} className="group bg-[#0d1b3e]/60 border border-white/5 rounded-xl p-5 hover:border-[#e8581a]/30 transition-all duration-300 hover:bg-[#0d1b3e]/80">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-[#e8581a] shrink-0 group-hover:scale-125 transition-transform" />
                        <div>
                          <h4 className="font-heading text-base text-white mb-1.5 tracking-wide">{item.title}</h4>
                          <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })()}
        </div>
      </Section>

      {/* ═══ 7. TEAM ═══ */}
      <Section id="team" className="py-20 lg:py-28 bg-[#0d1b3e]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8581a] font-heading text-lg tracking-wider">РУКОВОДСТВО</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3">Наша команда</h2>
            <p className="text-slate-400 mt-3 max-w-2xl mx-auto">Профессионалы с многолетним опытом в нефтегазовом строительстве</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {teamMembers.map((m, i) => (
              <div
                key={i}
                className="group bg-[#0d1b3e]/60 border border-white/5 rounded-2xl p-5 hover:border-[#e8581a]/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#e8581a] to-[#f0a500] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <span className="font-heading text-xl text-white">{getInitials(m.name)}</span>
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">{m.name}</h4>
                <p className="text-[#e8581a] text-xs font-medium mb-2">{m.role}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══ 8. ADVANTAGES ═══ */}
      <Section id="advantages" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#f0a500] font-heading text-lg tracking-wider">ДОСТИЖЕНИЯ</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3">Наши преимущества</h2>
          </div>

          {/* Hero Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-[#f0a500]/20 mb-8 group">
            <img src="/images/advantages_hero.png" alt="Наши преимущества" className="w-full h-64 sm:h-80 lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <Award size={28} className="text-[#f0a500]" />
                <span className="text-[#f0a500] font-heading text-2xl tracking-wider">ЧЕМПИОНЫ МИРА</span>
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl text-white mb-3">2× победители Arc Cup</h3>
              <div className="flex gap-4">
                <div className="bg-[#f0a500]/15 border border-[#f0a500]/30 rounded-xl px-5 py-3 text-center backdrop-blur-sm">
                  <div className="font-heading text-3xl text-[#f0a500]">2017</div>
                  <div className="text-xs text-slate-300 mt-1">Пекин, Китай</div>
                </div>
                <div className="bg-[#f0a500]/15 border border-[#f0a500]/30 rounded-xl px-5 py-3 text-center backdrop-blur-sm">
                  <div className="font-heading text-3xl text-[#f0a500]">2019</div>
                  <div className="text-xs text-slate-300 mt-1">Чехия</div>
                </div>
              </div>
            </div>
          </div>

          {/* Advantages Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="group bg-[#0d1b3e]/60 border border-white/5 rounded-2xl p-6 hover:border-[#e8581a]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#e8581a]/10 border border-[#e8581a]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#e8581a]/20 transition-colors">
                <HardHat size={24} className="text-[#e8581a]" />
              </div>
              <h4 className="font-heading text-xl text-white mb-2 tracking-wide">Полный цикл EPC</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Проектирование, закупки, строительство и пуско-наладка — единый подрядчик</p>
            </div>
            <div className="group bg-[#0d1b3e]/60 border border-white/5 rounded-2xl p-6 hover:border-[#e8581a]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#e8581a]/10 border border-[#e8581a]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#e8581a]/20 transition-colors">
                <Settings size={24} className="text-[#e8581a]" />
              </div>
              <h4 className="font-heading text-xl text-white mb-2 tracking-wide">Собственные лаборатории</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Аккредитованные лаборатории НК, механических испытаний и строительного контроля</p>
            </div>
            <div className="group bg-[#0d1b3e]/60 border border-white/5 rounded-2xl p-6 hover:border-[#e8581a]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#e8581a]/10 border border-[#e8581a]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#e8581a]/20 transition-colors">
                <Cpu size={24} className="text-[#e8581a]" />
              </div>
              <h4 className="font-heading text-xl text-white mb-2 tracking-wide">Цифровые технологии</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Собственные программные решения для управления проектами и контроля качества</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ 9. QUALITY CONTROL ═══ */}
      <Section id="quality" className="py-20 lg:py-28 bg-[#0d1b3e]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8581a] font-heading text-lg tracking-wider">КОНТРОЛЬ КАЧЕСТВА</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3">Аккредитованные лаборатории</h2>
            <p className="text-slate-400 mt-3 max-w-2xl mx-auto">Многоуровневая система контроля качества гарантирует соответствие самым высоким стандартам</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {qualityAreas.map((q, i) => (
              <div key={i} className="group bg-[#0d1b3e]/60 border border-white/5 rounded-2xl p-5 text-center hover:border-[#e8581a]/30 transition-all duration-300">
                <div className="w-14 h-14 mx-auto bg-[#e8581a]/10 border border-[#e8581a]/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#e8581a]/20 transition-colors">
                  <q.icon size={24} className="text-[#e8581a]" />
                </div>
                <h4 className="font-heading text-base text-white mb-2 tracking-wide">{q.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══ 10. DIGITAL TECHNOLOGY ═══ */}
      <Section id="digital" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8581a] font-heading text-lg tracking-wider">ЦИФРОВИЗАЦИЯ</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3">Цифровые технологии</h2>
            <p className="text-slate-400 mt-3 max-w-2xl mx-auto">Собственные программные решения для повышения эффективности управления проектами</p>
          </div>

          {/* Hero Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-[#e8581a]/20 mb-8 group">
            <img src="/images/digital_hero.png" alt="Цифровые технологии" className="w-full h-64 sm:h-80 lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#e8581a]/20 border border-[#e8581a]/40 flex items-center justify-center backdrop-blur-sm">
                  <Cpu size={20} className="text-[#e8581a]" />
                </div>
                <span className="text-[#e8581a] font-heading text-xl tracking-wider">СОБСТВЕННЫЕ РАЗРАБОТКИ</span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl">Цифровые решения для управления проектами, контроля качества и автоматизации процессов</p>
            </div>
          </div>

          {/* Digital Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Pipeline Navigator',
                desc: 'Система навигации и управления линейными объектами трубопроводного транспорта в режиме реального времени.',
                tags: ['GPS-мониторинг', '3D-визуализация', 'Реальное время'],
                icon: Monitor,
              },
              {
                title: 'WeldBook',
                desc: 'Электронный журнал сварочных работ с автоматическим формированием документации и контролем качества.',
                tags: ['Электронный документооборот', 'Контроль качества', 'Автоматизация'],
                icon: Laptop,
              },
              {
                title: 'Цифровая радиография',
                desc: 'Система цифровой радиографии для неразрушающего контроля сварных соединений с автоматической расшифровкой.',
                tags: ['Неразрушающий контроль', 'Автоматизация', 'Цифровые данные'],
                icon: ScanLine,
              },
            ].map((d, i) => (
              <div key={i} className="group bg-[#0d1b3e]/60 border border-white/5 rounded-2xl p-6 hover:border-[#e8581a]/30 transition-all duration-300">
                <div className="w-12 h-12 bg-[#e8581a]/10 border border-[#e8581a]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#e8581a]/20 transition-colors">
                  <d.icon size={24} className="text-[#e8581a]" />
                </div>
                <h4 className="font-heading text-xl text-white mb-2 tracking-wide">{d.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{d.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {d.tags.map((tag, j) => (
                    <span key={j} className="px-2.5 py-1 bg-[#e8581a]/10 border border-[#e8581a]/20 rounded-md text-xs text-[#e8581a]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══ 11. SAFETY ═══ */}
      <Section id="safety" className="py-20 lg:py-28 bg-[#0d1b3e]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8581a] font-heading text-lg tracking-wider">БЕЗОПАСНОСТЬ</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3">Безопасность прежде всего</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left - Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8581a]/10 border border-[#e8581a]/30 rounded-full mb-6">
                <ShieldCheck size={16} className="text-[#e8581a]" />
                <span className="text-sm text-[#e8581a] font-medium">Safety First — Наш приоритет №1</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-8">
                Безопасность — не просто правило, а фундамент нашей корпоративной культуры. Каждый сотрудник
                имеет право и обязан остановить работу при обнаружении угрозы. Мы инвестируем в обучение,
                средства защиты и создание безопасной рабочей среды.
              </p>

              {/* Safety Layers */}
              <div className="space-y-3">
                {[
                  { color: 'bg-red-500', title: 'Лидерство в безопасности', desc: 'Руководство лично участвует в программах безопасности и подаёт пример' },
                  { color: 'bg-[#e8581a]', title: 'Программа Safety Ranger', desc: 'Вовлечение каждого сотрудника в выявление и устранение опасностей' },
                  { color: 'bg-[#f0a500]', title: 'Обучение и инструктажи', desc: 'Регулярное обучение, тренинги и аттестация персонала' },
                  { color: 'bg-emerald-500', title: 'Средства индивидуальной защиты', desc: 'Полное обеспечение СИЗ и контроль их применения' },
                  { color: 'bg-blue-500', title: 'Аудиты и инспекции', desc: 'Систематические проверки и мониторинг условий труда' },
                ].map((layer, i) => (
                  <div key={i} className="flex items-start gap-4 bg-[#0a0e1a]/60 rounded-xl p-4 border border-white/5">
                    <div className={`shrink-0 w-1.5 h-full min-h-[40px] ${layer.color} rounded-full`} />
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">{layer.title}</h4>
                      <p className="text-xs text-slate-400">{layer.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/5 group">
                <img src="/images/safety_russian_hero.png" alt="Средства индивидуальной защиты" className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <ShieldCheck size={18} className="text-[#e8581a]" />
                    <span className="text-sm font-medium">Полный комплект СИЗ для каждого сотрудника</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0a0e1a]/60 border border-white/5 rounded-xl p-5 text-center">
                  <div className="font-heading text-4xl text-[#e8581a] mb-1">0</div>
                  <div className="text-xs text-slate-400">Целевой уровень травматизма</div>
                </div>
                <div className="bg-[#0a0e1a]/60 border border-white/5 rounded-xl p-5 text-center">
                  <div className="font-heading text-4xl text-[#f0a500] mb-1">100%</div>
                  <div className="text-xs text-slate-400">Обеспечение СИЗ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ 12. CONTACT ═══ */}
      <Section id="contact" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8581a] font-heading text-lg tracking-wider">СВЯЖИТЕСЬ С НАМИ</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3">Обсудить проект</h2>
            <p className="text-slate-400 mt-3 max-w-2xl mx-auto">Расскажите о вашем проекте, и мы подготовим индивидуальное предложение</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3 bg-[#0d1b3e]/60 border border-white/5 rounded-2xl p-6 lg:p-8">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2" htmlFor="name">Имя</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full bg-[#0a0e1a]/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-[#e8581a]/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-2" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      className="w-full bg-[#0a0e1a]/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-[#e8581a]/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2" htmlFor="phone">Телефон</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-[#0a0e1a]/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-[#e8581a]/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2" htmlFor="message">Сообщение</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Расскажите о вашем проекте..."
                    className="w-full bg-[#0a0e1a]/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-[#e8581a]/50 focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#e8581a] hover:bg-[#d14f16] text-white font-semibold rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-[#e8581a]/25"
                >
                  Отправить заявку
                  <Send size={18} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-[#0d1b3e]/60 border border-white/5 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e8581a]/10 border border-[#e8581a]/20 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-[#e8581a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Адрес</h4>
                    <p className="text-sm text-slate-400">г. Москва, Россия</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#0d1b3e]/60 border border-white/5 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e8581a]/10 border border-[#e8581a]/20 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-[#e8581a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Телефон</h4>
                    <p className="text-sm text-slate-400">+7 (495) 000-00-00</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#0d1b3e]/60 border border-white/5 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e8581a]/10 border border-[#e8581a]/20 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-[#e8581a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-sm text-slate-400">info@sgk-company.ru</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#e8581a]/10 to-[#f0a500]/10 border border-[#e8581a]/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e8581a]/20 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-[#e8581a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Режим работы</h4>
                    <p className="text-sm text-slate-400">Пн-Пт: 9:00 — 18:00</p>
                    <p className="text-xs text-slate-500 mt-1">Строительные площадки работают круглосуточно</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ 13. FOOTER ═══ */}
      <footer className="bg-[#0a0e1a] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Logo & About */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#e8581a] to-[#f0a500] rounded-lg flex items-center justify-center font-heading text-xl text-white">С</div>
                <span className="font-heading text-lg tracking-wide text-white">СГК</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                ООО «Стройглобалконсалтинг» — инновационный российский EPC-подрядчик
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-heading text-sm text-[#e8581a] tracking-wider mb-4">НАВИГАЦИЯ</h4>
              <div className="space-y-2">
                {navLinks.slice(0, 6).map(link => (
                  <button key={link.id} onClick={() => scrollTo(link.id)} className="block text-sm text-slate-400 hover:text-[#e8581a] transition-colors">
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading text-sm text-[#e8581a] tracking-wider mb-4">УСЛУГИ</h4>
              <div className="space-y-2">
                {['EPC-подряд', 'Сварочное производство', 'Проектирование', 'Контроль качества', 'Механизация'].map((s, i) => (
                  <span key={i} className="block text-sm text-slate-400">{s}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading text-sm text-[#e8581a] tracking-wider mb-4">КОНТАКТЫ</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2"><Phone size={14} /> +7 (495) 000-00-00</div>
                <div className="flex items-center gap-2"><Mail size={14} /> info@sgk-company.ru</div>
                <div className="flex items-center gap-2"><MapPin size={14} /> г. Москва, Россия</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} ООО «Стройглобалконсалтинг». Все права защищены.</p>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span>Политика конфиденциальности</span>
              <span>Условия использования</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
