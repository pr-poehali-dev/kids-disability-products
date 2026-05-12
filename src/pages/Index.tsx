import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/dbb74ed7-cf29-47db-849a-52a83d20944a/files/b3341c54-0323-4d35-b172-9a337051f5df.jpg";

const CATEGORIES = [
  { icon: "BookOpen", label: "Права и льготы", color: "hsl(210,55%,93%)", text: "hsl(210,55%,35%)" },
  { icon: "Heart", label: "Психологическая поддержка", color: "hsl(10,60%,90%)", text: "hsl(10,50%,38%)" },
  { icon: "Activity", label: "Реабилитация", color: "hsl(160,40%,88%)", text: "hsl(160,40%,28%)" },
  { icon: "GraduationCap", label: "Образование", color: "hsl(36,60%,88%)", text: "hsl(36,45%,32%)" },
  { icon: "Users", label: "Сообщество", color: "hsl(270,35%,90%)", text: "hsl(270,35%,35%)" },
  { icon: "Stethoscope", label: "Медицина", color: "hsl(190,50%,88%)", text: "hsl(190,45%,30%)" },
];

const ARTICLES = [
  {
    id: 1,
    cat: "Права и льготы",
    catColor: "hsl(210,55%,93%)",
    catText: "hsl(210,55%,35%)",
    title: "Какие льготы положены семьям с детьми-инвалидами в 2026 году",
    desc: "Полный список федеральных и региональных льгот: транспорт, коммунальные услуги, санаторно-курортное лечение и многое другое.",
    time: "8 мин",
    date: "10 мая 2026",
  },
  {
    id: 2,
    cat: "Психологическая поддержка",
    catColor: "hsl(10,60%,90%)",
    catText: "hsl(10,50%,38%)",
    title: "Как говорить с ребёнком о его диагнозе: советы психолога",
    desc: "Открытый разговор помогает детям принять себя и строить доверие с родителями. Практические рекомендации от детских психологов.",
    time: "6 мин",
    date: "7 мая 2026",
  },
  {
    id: 3,
    cat: "Реабилитация",
    catColor: "hsl(160,40%,88%)",
    catText: "hsl(160,40%,28%)",
    title: "Лучшие методики реабилитации для детей с ДЦП в 2026 году",
    desc: "Обзор современных подходов: Войта-терапия, иппотерапия, АФК и нейростимуляция. Что выбрать и как получить бесплатно.",
    time: "12 мин",
    date: "3 мая 2026",
  },
  {
    id: 4,
    cat: "Образование",
    catColor: "hsl(36,60%,88%)",
    catText: "hsl(36,45%,32%)",
    title: "Инклюзивное образование: права ребёнка в школе",
    desc: "Как добиться создания специальных условий обучения, что такое АООП и как работать с педагогами и администрацией школы.",
    time: "9 мин",
    date: "28 апр 2026",
  },
  {
    id: 5,
    cat: "Сообщество",
    catColor: "hsl(270,35%,90%)",
    catText: "hsl(270,35%,35%)",
    title: "«Мы не одни»: истории семей, которые нашли поддержку",
    desc: "Три истории родителей из разных городов России о том, как родительские сообщества помогли им справиться с трудностями.",
    time: "7 мин",
    date: "22 апр 2026",
  },
  {
    id: 6,
    cat: "Медицина",
    catColor: "hsl(190,50%,88%)",
    catText: "hsl(190,45%,30%)",
    title: "Как получить технические средства реабилитации бесплатно",
    desc: "Пошаговая инструкция: от направления врача до получения кресла-коляски или протеза через ФСС. Что делать при отказе.",
    time: "10 мин",
    date: "15 апр 2026",
  },
];

const RESOURCES = [
  { icon: "Phone", title: "Горячая линия", desc: "8-800-2000-122 — бесплатно для детей и родителей", color: "hsl(160,40%,88%)" },
  { icon: "FileText", title: "Образцы документов", desc: "Заявления, жалобы, согласия — готовые шаблоны", color: "hsl(210,55%,93%)" },
  { icon: "Map", title: "Реабилитационные центры", desc: "Карта центров по всей России с отзывами", color: "hsl(36,60%,88%)" },
  { icon: "MessageCircle", title: "Группы поддержки", desc: "Онлайн-сообщества для родителей по диагнозам", color: "hsl(10,60%,90%)" },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? ARTICLES.filter((a) => a.cat === activeCategory)
    : ARTICLES;

  return (
    <div className="min-h-screen" style={{ background: "hsl(36, 30%, 97%)" }}>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b" style={{ borderColor: "hsl(210,20%,90%)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold"
              style={{ background: "hsl(210,55%,48%)" }}>
              ОР
            </div>
            <div>
              <div className="font-display text-base font-bold leading-tight" style={{ color: "hsl(220,20%,18%)" }}>
                Особый ребёнок
              </div>
              <div className="font-body text-xs" style={{ color: "hsl(220,10%,55%)" }}>
                портал для родителей
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-7">
            {["Статьи", "Льготы", "Реабилитация", "Сообщество"].map((item) => (
              <button
                key={item}
                className="font-body text-sm transition-colors duration-200 hover:text-blue-600"
                style={{ color: "hsl(220,15%,40%)" }}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="font-body text-sm px-5 py-2 rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: "hsl(210,55%,48%)" }}
          >
            Задать вопрос
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-14 items-center">
        <div className="animate-fade-in-up">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-body text-xs font-medium tracking-wide uppercase mb-6"
            style={{ background: "hsl(160,40%,88%)", color: "hsl(160,40%,25%)" }}
          >
            <Icon name="Heart" size={13} /> Вы не одни в этом пути
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-5 leading-snug"
            style={{ color: "hsl(220,20%,16%)" }}>
            Всё необходимое —<br />
            <span style={{ color: "hsl(210,55%,48%)" }}>в одном месте</span>
          </h1>
          <p className="font-body text-base leading-relaxed mb-8 max-w-md"
            style={{ color: "hsl(220,12%,42%)" }}>
            Практические советы, актуальная информация о льготах, методиках реабилитации и правах ваших детей — доступно и без лишних слов.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              className="font-body text-sm px-7 py-3 rounded-xl text-white font-medium transition-all duration-200 hover:opacity-90 hover:scale-105 shadow-md"
              style={{ background: "hsl(210,55%,48%)" }}
            >
              Найти статью
            </button>
            <button
              className="font-body text-sm px-7 py-3 rounded-xl font-medium border transition-all duration-200 hover:bg-blue-50"
              style={{ color: "hsl(210,55%,42%)", borderColor: "hsl(210,45%,78%)" }}
            >
              Задать вопрос юристу
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10">
            {[
              { val: "1 200+", label: "статей" },
              { val: "48 000", label: "читателей" },
              { val: "12", label: "экспертов" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold" style={{ color: "hsl(210,55%,42%)" }}>
                  {s.val}
                </div>
                <div className="font-body text-xs" style={{ color: "hsl(220,10%,55%)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-in-up delay-300 relative">
          <div
            className="absolute inset-0 rounded-3xl"
            style={{ background: "hsl(210,55%,88%)", transform: "rotate(2deg)", opacity: 0.4 }}
          />
          <img
            src={HERO_IMAGE}
            alt="Родитель с ребёнком"
            className="relative rounded-3xl w-full object-cover shadow-xl"
            style={{ height: "400px" }}
          />
          <div
            className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-5 py-3.5 shadow-lg border"
            style={{ borderColor: "hsl(210,20%,90%)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "hsl(160,40%,88%)" }}>
                <Icon name="ShieldCheck" size={20} className="text-green-700" />
              </div>
              <div>
                <div className="font-body text-sm font-semibold" style={{ color: "hsl(220,20%,18%)" }}>
                  Проверено юристом
                </div>
                <div className="font-body text-xs" style={{ color: "hsl(220,10%,55%)" }}>
                  Все материалы актуальны
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => setActiveCategory(null)}
            className="font-body text-sm px-5 py-2.5 rounded-xl border transition-all duration-200 hover:scale-105"
            style={{
              background: !activeCategory ? "hsl(210,55%,48%)" : "white",
              color: !activeCategory ? "white" : "hsl(220,15%,40%)",
              borderColor: !activeCategory ? "transparent" : "hsl(210,20%,88%)",
            }}
          >
            Все темы
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(activeCategory === cat.label ? null : cat.label)}
              className="flex items-center gap-2 font-body text-sm px-5 py-2.5 rounded-xl border transition-all duration-200 hover:scale-105"
              style={{
                background: activeCategory === cat.label ? "hsl(210,55%,48%)" : "white",
                color: activeCategory === cat.label ? "white" : "hsl(220,15%,40%)",
                borderColor: activeCategory === cat.label ? "transparent" : "hsl(210,20%,88%)",
              }}
            >
              <Icon name={cat.icon} size={14} />
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-6xl mx-auto px-6 py-8 pb-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl font-bold" style={{ color: "hsl(220,20%,16%)" }}>
            {activeCategory ?? "Последние статьи"}
          </h2>
          <button className="font-body text-sm underline underline-offset-4 transition-colors hover:opacity-70"
            style={{ color: "hsl(210,55%,48%)" }}>
            Все статьи
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article, i) => (
            <article
              key={article.id}
              className="animate-scale-in bg-white rounded-2xl p-6 border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              style={{ borderColor: "hsl(210,20%,90%)", animationDelay: `${i * 0.07}s` }}
            >
              <span
                className="inline-block font-body text-xs font-medium px-3 py-1 rounded-full mb-4"
                style={{ background: article.catColor, color: article.catText }}
              >
                {article.cat}
              </span>
              <h3 className="font-display text-base font-bold leading-snug mb-3 group-hover:text-blue-600 transition-colors"
                style={{ color: "hsl(220,20%,18%)" }}>
                {article.title}
              </h3>
              <p className="font-body text-sm leading-relaxed mb-5"
                style={{ color: "hsl(220,10%,48%)" }}>
                {article.desc}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-body text-xs" style={{ color: "hsl(220,10%,60%)" }}>{article.date}</span>
                  <span className="font-body text-xs flex items-center gap-1" style={{ color: "hsl(220,10%,60%)" }}>
                    <Icon name="Clock" size={12} /> {article.time}
                  </span>
                </div>
                <Icon name="ArrowRight" size={16} className="text-blue-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="border-t py-16" style={{ background: "white", borderColor: "hsl(210,20%,90%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold mb-3" style={{ color: "hsl(220,20%,16%)" }}>
              Быстрая помощь
            </h2>
            <p className="font-body text-sm" style={{ color: "hsl(220,10%,50%)" }}>
              Самые нужные ресурсы — под рукой
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RESOURCES.map((r, i) => (
              <div
                key={r.title}
                className="animate-fade-in-up rounded-2xl p-6 cursor-pointer hover:scale-105 transition-all duration-200 border border-white/60"
                style={{ background: r.color, animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-11 h-11 rounded-xl bg-white/60 flex items-center justify-center mb-4">
                  <Icon name={r.icon} size={22} className="text-slate-700" />
                </div>
                <h4 className="font-body text-sm font-semibold mb-1" style={{ color: "hsl(220,20%,18%)" }}>
                  {r.title}
                </h4>
                <p className="font-body text-xs leading-relaxed" style={{ color: "hsl(220,15%,38%)" }}>
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div
          className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-8"
          style={{ background: "linear-gradient(135deg, hsl(210,55%,93%), hsl(160,40%,88%))" }}
        >
          <div className="flex-1">
            <h2 className="font-display text-3xl font-bold mb-3" style={{ color: "hsl(220,20%,16%)" }}>
              Остались вопросы?
            </h2>
            <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(220,15%,38%)" }}>
              Наши юристы и специалисты по социальной защите ответят бесплатно. Просто опишите свою ситуацию.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <button
              className="font-body text-sm px-8 py-3.5 rounded-xl text-white font-medium transition-all duration-200 hover:opacity-90 hover:scale-105 shadow-md whitespace-nowrap"
              style={{ background: "hsl(210,55%,48%)" }}
            >
              Задать вопрос бесплатно
            </button>
            <button
              className="font-body text-sm px-8 py-3 rounded-xl font-medium border bg-white/60 hover:bg-white transition-all duration-200 whitespace-nowrap"
              style={{ color: "hsl(210,55%,40%)", borderColor: "hsl(210,40%,78%)" }}
            >
              Вступить в сообщество
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10" style={{ borderColor: "hsl(210,20%,90%)", background: "white" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
              style={{ background: "hsl(210,55%,48%)" }}>
              ОР
            </div>
            <span className="font-display text-base font-bold" style={{ color: "hsl(220,20%,18%)" }}>
              Особый ребёнок
            </span>
          </div>
          <p className="font-body text-xs" style={{ color: "hsl(220,10%,58%)" }}>
            © 2026 — информационный портал для семей с детьми с инвалидностью
          </p>
          <div className="flex gap-5">
            {["Политика конфиденциальности", "Контакты"].map((l) => (
              <button key={l} className="font-body text-xs hover:underline" style={{ color: "hsl(210,55%,48%)" }}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
