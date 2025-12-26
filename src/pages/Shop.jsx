// src/pages/Shop.jsx
import { ShoppingBag, ArrowRight } from "lucide-react";
import resistantsband from "../assets/resistanceband.avif";
import speedrop from "../assets/speed-rop.jpg";
import tee from "../assets/tee.avif";
import cap from "../assets/cap.avif";

const products = [
  {
    id: "bands",
    name: "Combatfit Resistance Band Set",
    description:
      "Five loop bands from extra light to extra heavy, plus a mesh carry bag. Perfect for warm ups, glute work, and strength sessions in the park.",
    price: "Ksh 2,400",
    badge: "Most popular",
    status: "In stock",
    imageUrl: resistantsband,
  },
  {
    id: "rope",
    name: "Speed Jump Rope",
    description:
      "Adjustable coated cable rope with bearing handles. Built for high cadence work, engine sessions, and stay-at-home conditioning.",
    price: "Ksh 1,200",
    badge: "Engine builder",
    status: "In stock",
    imageUrl: speedrop,
  },
  {
    id: "tee",
    name: "Combatfit Training Tee",
    description:
      "Lightweight unisex tee with the Combatfit mark on the chest and back. Works for sessions, hikes, and casual wear.",
    price: "Ksh 2,000",
    badge: "Community gear",
    status: "Limited",
    imageUrl: tee,
  },
  {
    id: "cap",
    name: "Trail Cap",
    description:
      "Quick-drying cap with a low profile fit so you can stay shaded during long outdoor sessions.",
    price: "Ksh 1,800",
    badge: "Outdoor",
    status: "Preorder",
    imageUrl: cap,
  },
];

function Shop() {
  return (
    <main className="py-10 md:py-16 space-y-10">
      {/* Page header */}
      <header className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.26em] text-brand flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" />
          <span>Shop</span>
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold">
          Simple gear for stronger sessions.
        </h1>
        <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
          Start with a few core pieces you will actually use. Bands, ropes, and
          clothing built to live in backpacks, car boots, and gym bags for
          outdoor Combatfit sessions.
        </p>
      </header>

      {/* Products grid */}
      <section className="space-y-4">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.7)] hover:-translate-y-1 hover:border-brand/70 transition-transform"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-brand/30 via-dark-soft to-dark flex items-center justify-center text-xs text-slate-100">
                    Product image
                  </div>
                )}

                {/* Badge pill */}
                <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-brand border border-brand/40">
                  {product.badge}
                </div>

                {/* Status pill */}
                <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[10px] text-slate-100">
                  {product.status}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-2 px-4 py-4 md:px-5 md:py-5 text-xs md:text-sm">
                <h2 className="text-sm md:text-base font-semibold text-slate-50">
                  {product.name}
                </h2>

                <p className="mt-1 flex-1 text-xs md:text-sm text-slate-300">
                  {product.description}
                </p>

                <div className="mt-3 flex items-center justify-between text-xs md:text-sm">
                  <span className="font-semibold text-slate-50">
                    {product.price}
                  </span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-full border border-brand/60 px-3 py-1.5 text-[11px] font-semibold text-brand hover:bg-brand hover:text-dark transition"
                    // TODO: later hook to WhatsApp or a proper checkout flow
                  >
                    Request item
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Shop;
