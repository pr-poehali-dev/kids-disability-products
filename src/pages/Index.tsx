import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/dbb74ed7-cf29-47db-849a-52a83d20944a/files/d7c07202-2294-4a40-a25a-83067f4afb66.jpg";

const CATEGORIES = [
  { emoji: "🌸", label: "Уход за кожей" },
  { emoji: "💐", label: "Ароматы" },
  { emoji: "🎀", label: "Подарки" },
  { emoji: "🕯️", label: "Свечи" },
  { emoji: "🌿", label: "Натуральное" },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Розовая вода",
    desc: "Тонизирующий спрей для лица с лепестками дамасской розы",
    price: "1 290 ₽",
    oldPrice: "1 590 ₽",
    tag: "Хит",
    tagColor: "bg-pink-100 text-rose-600",
    bg: "from-pink-50 to-rose-50",
    emoji: "🌹",
  },
  {
    id: 2,
    name: "Лавандовый крем",
    desc: "Нежный ночной крем с экстрактом прованской лаванды",
    price: "2 100 ₽",
    tag: "Новинка",
    tagColor: "bg-purple-100 text-purple-600",
    bg: "from-purple-50 to-violet-50",
    emoji: "💜",
  },
  {
    id: 3,
    name: "Персиковый скраб",
    desc: "Мягкий сахарный скраб с маслом персиковых косточек",
    price: "890 ₽",
    tag: "–30%",
    tagColor: "bg-orange-100 text-orange-600",
    bg: "from-orange-50 to-amber-50",
    emoji: "🍑",
  },
  {
    id: 4,
    name: "Свеча «Пион»",
    desc: "Соевая свеча с нотами свежего пиона и белого чая",
    price: "1 450 ₽",
    tag: "Эко",
    tagColor: "bg-green-100 text-green-700",
    bg: "from-green-50 to-emerald-50",
    emoji: "🕯️",
  },
  {
    id: 5,
    name: "Мист для тела",
    desc: "Лёгкий увлажняющий спрей с ароматом жасмина",
    price: "1 190 ₽",
    tag: "Хит",
    tagColor: "bg-pink-100 text-rose-600",
    bg: "from-sky-50 to-blue-50",
    emoji: "✨",
  },
  {
    id: 6,
    name: "Подарочный набор",
    desc: "Набор из трёх миниатюр: роза, лаванда, пион",
    price: "2 990 ₽",
    tag: "Подарок",
    tagColor: "bg-blue-100 text-blue-600",
    bg: "from-pink-50 to-purple-50",
    emoji: "🎁",
  },
];

const FEATURES = [
  { icon: "Leaf", title: "100% натуральный состав", desc: "Только природные ингредиенты без парабенов" },
  { icon: "Heart", title: "Протестировано дерматологами", desc: "Безопасно для чувствительной кожи" },
  { icon: "Package", title: "Бесплатная доставка", desc: "При заказе от 2000 ₽ по всей России" },
  { icon: "RotateCcw", title: "Возврат 14 дней", desc: "Без лишних вопросов" },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => setCartCount((c) => c + 1);

  return (
    <div className="min-h-screen" style={{ background: "hsl(340, 30%, 98%)" }}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌸</span>
            <span className="font-display text-2xl font-light tracking-wide text-rose-800">
              Petal
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Каталог", "О нас", "Доставка", "Контакты"].map((item) => (
              <button
                key={item}
                className="font-body text-sm text-rose-700/70 hover:text-rose-800 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-rose-50 rounded-full transition-colors">
              <Icon name="ShoppingBag" size={20} className="text-rose-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-400 text-white text-xs rounded-full flex items-center justify-center font-body">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="p-2 hover:bg-rose-50 rounded-full transition-colors">
              <Icon name="Search" size={20} className="text-rose-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-body font-medium tracking-widest uppercase mb-6"
            style={{ background: "hsl(340, 60%, 88%)", color: "#be185d" }}
          >
            Новая коллекция 2026
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-light leading-tight text-rose-900 mb-6">
            Забота о себе —<br />
            <em>это искусство</em>
          </h1>
          <p className="font-body text-base text-rose-700/70 leading-relaxed mb-10 max-w-md">
            Натуральная косметика с деликатными ароматами и нежными текстурами. Создано для тех, кто ценит красоту в мелочах.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              className="px-8 py-3.5 rounded-2xl font-body text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ background: "hsl(340, 45%, 65%)" }}
            >
              Смотреть каталог
            </button>
            <button className="px-8 py-3.5 rounded-2xl font-body text-sm font-medium text-rose-700 border border-rose-200 hover:border-rose-300 hover:bg-rose-50 transition-all duration-200">
              Подборки
            </button>
          </div>
        </div>

        <div className="animate-fade-in-up delay-300 relative">
          <div
            className="absolute inset-0 rounded-[2.5rem]"
            style={{ background: "hsl(270, 40%, 88%)", transform: "rotate(-3deg)", opacity: 0.5 }}
          />
          <img
            src={HERO_IMAGE}
            alt="Нежные продукты"
            className="relative rounded-[2.5rem] w-full object-cover shadow-xl animate-float"
            style={{ height: "420px" }}
          />
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-lg border border-rose-100">
            <div className="flex items-center gap-2">
              <span className="text-xl">⭐</span>
              <div>
                <div className="font-display text-lg font-semibold text-rose-900">4.9</div>
                <div className="font-body text-xs text-rose-500">2 400+ отзывов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex gap-3 flex-wrap">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(activeCategory === cat.label ? null : cat.label)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl font-body text-sm transition-all duration-200 hover:scale-105 border animate-fade-in-up"
              style={{
                animationDelay: `${i * 0.07}s`,
                background: activeCategory === cat.label ? "hsl(340, 45%, 65%)" : "white",
                color: activeCategory === cat.label ? "white" : "hsl(340, 25%, 40%)",
                borderColor: activeCategory === cat.label ? "transparent" : "hsl(340, 25%, 90%)",
              }}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-6 py-8 pb-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-4xl font-light text-rose-900">Популярное</h2>
          <button className="font-body text-sm text-rose-500 hover:text-rose-700 transition-colors underline underline-offset-4">
            Все товары
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <div
              key={product.id}
              className={`animate-scale-in group relative bg-gradient-to-br ${product.bg} rounded-3xl p-6 border border-white/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-body font-medium ${product.tagColor} mb-4`}>
                {product.tag}
              </span>

              <div className="flex items-center justify-center h-28 text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {product.emoji}
              </div>

              <h3 className="font-display text-xl font-medium text-rose-900 mb-1">{product.name}</h3>
              <p className="font-body text-sm text-rose-700/60 leading-relaxed mb-4">{product.desc}</p>

              <div className="flex items-center justify-between mt-auto">
                <div>
                  <span className="font-body text-lg font-medium text-rose-800">{product.price}</span>
                  {product.oldPrice && (
                    <span className="font-body text-sm text-rose-400 line-through ml-2">{product.oldPrice}</span>
                  )}
                </div>
                <button
                  onClick={addToCart}
                  className="w-10 h-10 rounded-2xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95 shadow-md"
                  style={{ background: "hsl(340, 45%, 65%)" }}
                >
                  <Icon name="Plus" size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white/60 py-16 border-t border-rose-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="animate-fade-in-up text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: "hsl(340, 60%, 88%)" }}
                >
                  <Icon name={f.icon} size={22} className="text-rose-600" />
                </div>
                <h4 className="font-body text-sm font-medium text-rose-900 mb-1">{f.title}</h4>
                <p className="font-body text-xs text-rose-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div
          className="rounded-3xl p-10 md:p-14 text-center"
          style={{
            background: "linear-gradient(135deg, hsl(340,50%,90%), hsl(270,40%,88%), hsl(25,60%,88%))",
          }}
        >
          <p className="font-body text-xs tracking-widest uppercase text-rose-600 mb-3">Особое предложение</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-rose-900 mb-4">
            Скидка 15% на первый заказ
          </h2>
          <p className="font-body text-sm text-rose-700/70 mb-8 max-w-md mx-auto">
            Введите промокод <strong>PETAL15</strong> при оформлении заказа
          </p>
          <button
            className="px-10 py-3.5 rounded-2xl font-body text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ background: "hsl(340, 45%, 58%)" }}
          >
            Воспользоваться предложением
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-rose-100 py-10 bg-white/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌸</span>
            <span className="font-display text-xl font-light text-rose-800">Petal</span>
          </div>
          <p className="font-body text-xs text-rose-400">© 2026 Petal. Натуральная косметика с любовью.</p>
          <div className="flex gap-6">
            {["Instagram", "Telegram", "VK"].map((s) => (
              <button key={s} className="font-body text-xs text-rose-400 hover:text-rose-600 transition-colors">
                {s}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}