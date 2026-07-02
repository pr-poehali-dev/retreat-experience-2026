import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/1dfdc80b-eebf-4bd0-aec9-6c93f5de1473/bucket/99cc5c3d-3c4e-4a49-8a26-c9764473f323.jpeg';
const BEACH_IMG =
  'https://cdn.poehali.dev/projects/1dfdc80b-eebf-4bd0-aec9-6c93f5de1473/bucket/c97ecb43-cfde-4869-8111-4c5543fc031f.jpeg';
const TURKEY_IMG =
  'https://cdn.poehali.dev/projects/1dfdc80b-eebf-4bd0-aec9-6c93f5de1473/bucket/f3d399b6-764f-4609-a4c9-beaa343c13a9.jpeg';
const IRINA_IMG =
  'https://cdn.poehali.dev/projects/1dfdc80b-eebf-4bd0-aec9-6c93f5de1473/bucket/07544ee5-6211-405e-b2cc-8c0b625eac50.jpeg';
const SLAVA_IMG =
  'https://cdn.poehali.dev/projects/1dfdc80b-eebf-4bd0-aec9-6c93f5de1473/bucket/dd544f8e-b6ff-4aad-868d-8d87df788bfe.png';
const VK_URL = '#';

const benefits = [
  {
    icon: 'Waves',
    title: 'Отдых и расслабление',
    text: 'Умиротворяющая природа, море и тишина. Оставь позади повседневные заботы и восстанови силы.',
  },
  {
    icon: 'Sprout',
    title: 'Внутренний рост',
    text: 'Пространство для самоанализа и личностного развития. Новые осознания и переосмысление целей.',
  },
  {
    icon: 'Sparkles',
    title: 'Знания о себе',
    text: 'Вспомни многое о себе, наполнись энергией и ощути баланс между мужским и женским.',
  },
  {
    icon: 'Users',
    title: 'Знакомства и эмоции',
    text: 'Приятная компания, с которой путь к неизведанному будет лёгким и весёлым.',
  },
];

const practices = [
  { icon: 'Brain', label: 'Психология' },
  { icon: 'Flower2', label: 'Йога' },
  { icon: 'Network', label: 'Расстановки' },
  { icon: 'Hand', label: 'Массаж' },
  { icon: 'HeartPulse', label: 'Телесные практики' },
  { icon: 'Moon', label: 'Медитации' },
];

const hosts = [
  {
    name: 'Ирина Абрамова',
    role: 'Психолог · Расстановщик',
    photo: IRINA_IMG,
    points: [
      'Дипломированный психолог, работа с подсознанием',
      'Создатель практик, медитаций, метафорических карт',
      'Фасилитатор Access, Access Energetic Facelift',
      'Более 2000 консультаций · ретриты в Египте и на Мальдивах',
    ],
  },
  {
    name: 'Вячеслав Домовец',
    role: 'Фитнес-тренер · Йога',
    photo: SLAVA_IMG,
    points: [
      'В йоге с 2011 года, непрерывное обучение',
      'Курс TTC-200, Ришикеш · семинары в Индии и Таиланде',
      'Гимнастика «Хаду», фитнес-тренер',
      'Массаж: классический, тайский, ребозо, функциональный',
    ],
  },
];

const turkey = [
  { icon: 'Sun', title: 'Мягкий климат', text: 'Тёплое сентябрьское солнце и комфортное море для практик и отдыха.' },
  { icon: 'Landmark', title: 'История и культура', text: 'Древние города, легенды и атмосфера, которая раскрывает.' },
  { icon: 'Utensils', title: 'Всё включено', text: 'Отель all inclusive, экскурсия и трансфер — забота на каждом шаге.' },
];

const reviews = [
  { name: 'Мария', text: 'Вернулась другим человеком. Расстановка изменила взгляд на давнюю ситуацию.', place: 'Ретрит, Египет' },
  { name: 'Дмитрий', text: 'Йога на рассвете и вечерние практики — идеальный баланс тела и головы.', place: 'Ретрит, Мальдивы' },
  { name: 'Анна', text: 'Тёплая компания, глубокая работа. Уезжать не хотелось.', place: 'Ретрит, Египет' },
];

const Index = () => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/70 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <span className="font-display text-2xl font-semibold tracking-tight text-primary">
            всё<span className="text-foreground">возможно</span>
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#practices" className="hover:text-primary transition-colors">Практики</a>
            <a href="#hosts" className="hover:text-primary transition-colors">Ведущие</a>
            <a href="#price" className="hover:text-primary transition-colors">Стоимость</a>
            <a href="#register" className="hover:text-primary transition-colors">Регистрация</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={VK_URL} target="_blank" rel="noopener noreferrer" aria-label="ВКонтакте" className="w-9 h-9 rounded-full bg-secondary hover:bg-accent flex items-center justify-center text-primary transition-colors">
              <Icon name="Share2" fallback="Link" size={16} />
            </a>
            <Button asChild size="sm" className="rounded-full">
              <a href="#register">Забронировать</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden pt-16">
        <img src={HERO_IMG} alt="Ретрит в Турции" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b3a3f]/90 via-[#0b3a3f]/30 to-transparent" />
        <div className="relative container pb-20 md:pb-28">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-white text-xs tracking-widest uppercase mb-6">
              <Icon name="Plane" size={14} /> Турция · 6–7 сентября 2026
            </div>
            <h1 className="font-display text-white text-6xl md:text-8xl font-semibold leading-[0.95] mb-6">
              Всё<br />возможно
            </h1>
            <p className="text-white/85 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              Ретрит для тела и души. Психология, йога, расстановки и телесные
              практики в едином потоке — 7 дней у моря.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full text-base px-8 h-14">
                <a href="#register">Забронировать место</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-base px-8 h-14 bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                <a href="#practices">Программа</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Что ты получишь</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Отпуск, который решает, а не откладывает
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="group p-8 rounded-3xl bg-secondary hover:bg-accent transition-colors duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-5 text-primary group-hover:scale-110 transition-transform">
                <Icon name={b.icon} size={22} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICES */}
      <section id="practices" className="py-24 bg-[#0b3a3f] text-white overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm tracking-widest uppercase mb-3">Единый поток</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Все практики вместе
            </h2>
            <p className="text-white/70 leading-relaxed mb-10">
              Мы объединили психологию и тело в одну программу. Утро начинается с
              йоги, день — с работы над установками и расстановками, вечер —
              с телесных практик и медитаций.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {practices.map((p) => (
                <div key={p.label} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <Icon name={p.icon} size={20} className="text-primary" />
                  <span className="text-sm">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={BEACH_IMG} alt="Практики на ретрите" className="rounded-[2rem] w-full object-cover shadow-2xl animate-float-slow" />
          </div>
        </div>
      </section>

      {/* HOSTS */}
      <section id="hosts" className="py-24 container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Ведущие</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Мы объединились ради тебя
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {hosts.map((h) => (
            <div key={h.name} className="overflow-hidden rounded-3xl border border-border hover:border-primary/40 transition-colors">
              <div className="relative h-72 overflow-hidden">
                <img src={h.photo} alt={h.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-5 left-6 text-white">
                  <h3 className="font-display text-3xl font-semibold">{h.name}</h3>
                  <p className="text-primary text-sm">{h.role}</p>
                </div>
              </div>
              <div className="p-8 md:p-10 pt-6">
              <ul className="space-y-3">
                {h.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                    <Icon name="Check" size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TURKEY */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary text-sm tracking-widest uppercase mb-3">Место силы</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">Турция в сентябре</h2>
          </div>
          <div className="rounded-3xl overflow-hidden mb-8 h-[380px] md:h-[460px]">
            <img src={TURKEY_IMG} alt="Пляж ретрита в Турции" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {turkey.map((t) => (
              <div key={t.title} className="bg-white p-8 rounded-3xl text-center hover-scale">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5 text-primary">
                  <Icon name={t.icon} size={26} />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">{t.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section id="price" className="py-24 container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Стоимость</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">Варианты участия</h2>
          <p className="text-muted-foreground mt-4">Вылет 6–7 сентября · 7 дней · места ограничены</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-10 rounded-3xl border border-border flex flex-col">
            <h3 className="font-display text-2xl font-semibold mb-2">Участие</h3>
            <p className="text-muted-foreground text-sm mb-6">Тренинг, телесные практики, участие заместителем</p>
            <div className="font-display text-5xl font-semibold mb-6">40 000 ₽</div>
            <ul className="space-y-3 text-sm text-muted-foreground mb-8 flex-1">
              <li className="flex gap-2"><Icon name="Check" size={18} className="text-primary" /> Тренинг по работе с установками</li>
              <li className="flex gap-2"><Icon name="Check" size={18} className="text-primary" /> Телесные практики и йога</li>
              <li className="flex gap-2"><Icon name="Check" size={18} className="text-primary" /> Участие заместителем в расстановках</li>
            </ul>
            <Button asChild variant="outline" className="rounded-full w-full h-12">
              <a href="#register">Выбрать</a>
            </Button>
          </div>
          <div className="p-10 rounded-3xl bg-[#0b3a3f] text-white flex flex-col relative overflow-hidden">
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-primary text-xs uppercase tracking-wider">Личная работа</div>
            <h3 className="font-display text-2xl font-semibold mb-2">Со своей расстановкой</h3>
            <p className="text-white/60 text-sm mb-6">Всё из тарифа «Участие» + твоя личная расстановка</p>
            <div className="font-display text-5xl font-semibold mb-6">52 000 ₽</div>
            <ul className="space-y-3 text-sm text-white/70 mb-8 flex-1">
              <li className="flex gap-2"><Icon name="Check" size={18} className="text-primary" /> Всё из тарифа «Участие»</li>
              <li className="flex gap-2"><Icon name="Check" size={18} className="text-primary" /> Личная расстановка с Ириной</li>
              <li className="flex gap-2"><Icon name="Check" size={18} className="text-primary" /> Дети до 14 лет — бесплатно</li>
            </ul>
            <Button asChild className="rounded-full w-full h-12">
              <a href="#register">Выбрать</a>
            </Button>
          </div>
        </div>

        <div className="mt-8 max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-6 rounded-2xl bg-accent">
            <Icon name="Wallet" size={22} className="text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-accent-foreground">
              <b>Бронь от 5 000–10 000 ₽.</b> Есть возможность оплаты частями — подробнее в личных сообщениях.
            </p>
          </div>
          <div className="flex items-start gap-3 p-6 rounded-2xl bg-accent">
            <Icon name="Hotel" size={22} className="text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-accent-foreground">
              <b>Отель ~79 000 ₽/чел.</b> — всё включено, перелёт из МСК, экскурсия и трансфер. Зависит от размещения и курса.
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-sm tracking-widest uppercase mb-3">Отзывы</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">Участники прошлых ретритов</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white p-8 rounded-3xl">
                <div className="flex gap-1 mb-4 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">«{r.text}»</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-semibold">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.place}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 container max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Условия</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">Бронь и рассрочка</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="1">
            <AccordionTrigger className="text-left font-display text-xl">Как забронировать место?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Для брони достаточно внести предоплату 5 000–10 000 ₽. Мы связываемся с тобой и обсуждаем детали в личных сообщениях.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger className="text-left font-display text-xl">Можно ли оплатить частями?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Да, есть возможность оплаты частями. Условия обсуждаем индивидуально в личных сообщениях.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger className="text-left font-display text-xl">Что входит в стоимость отеля?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Проживание all inclusive, перелёт из Москвы, экскурсия и трансфер. Из другого города — считаем от твоего города.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="4">
            <AccordionTrigger className="text-left font-display text-xl">Можно с детьми?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Да, дети до 14 лет участвуют бесплатно.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* REGISTER */}
      <section id="register" className="py-24 bg-[#0b3a3f] text-white">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm tracking-widest uppercase mb-3">Регистрация</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Места ограничены
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Оставь заявку — и мы свяжемся с тобой, чтобы забронировать место и
              ответить на все вопросы.
            </p>
            <div className="space-y-4 text-white/80">
              <p className="flex items-center gap-3"><Icon name="Calendar" size={20} className="text-primary" /> Вылет 6–7 сентября 2026 · 7 дней</p>
              <p className="flex items-center gap-3"><Icon name="Send" size={20} className="text-primary" /> Подробности и бронь — в личных сообщениях</p>
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-3xl p-8 text-foreground"
          >
            <h3 className="font-display text-2xl font-semibold mb-6">Оставить заявку</h3>
            <label className="block text-sm text-muted-foreground mb-1">Имя</label>
            <input
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              placeholder="Как к тебе обращаться"
              className="w-full mb-4 h-12 px-4 rounded-xl border border-border focus:outline-none focus:border-primary transition-colors"
            />
            <label className="block text-sm text-muted-foreground mb-1">Телефон или Telegram</label>
            <input
              value={formPhone}
              onChange={(e) => setFormPhone(e.target.value)}
              placeholder="+7 или @username"
              className="w-full mb-6 h-12 px-4 rounded-xl border border-border focus:outline-none focus:border-primary transition-colors"
            />
            <Button type="submit" size="lg" className="w-full rounded-full h-14 text-base">
              Забронировать место
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Нажимая кнопку, ты соглашаешься на обработку данных
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-display text-2xl font-semibold text-primary">
            всё<span className="text-foreground">возможно</span>
          </span>
          <p className="text-sm text-muted-foreground text-center">Ретрит «Всё возможно» · Турция 2026 · Ирина Абрамова &amp; Вячеслав Домовец</p>
          <a href={VK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 h-11 rounded-full bg-[#0077FF] text-white text-sm font-medium hover:opacity-90 transition-opacity">
            <Icon name="Share2" fallback="Link" size={16} /> ВКонтакте
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;