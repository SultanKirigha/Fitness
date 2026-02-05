import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSiteData } from "../context/SiteDataContext.jsx";
import { Tag, ShoppingBag, Sparkles, ShoppingCart } from "lucide-react";
import { addToCart } from "../utils/cart.js";

function Shop() {
  const navigate = useNavigate();

  const {
    siteData: { shop },
  } = useSiteData();

  const products = useMemo(() => shop?.items || shop?.products || [], [shop]);

  if (!products || products.length === 0) {
    return (
      <section className="py-10 md:py-16">
        <h1 className="text-2xl md:text-3xl font-semibold mb-3">
          Combatfit shop
        </h1>
        <p className="text-sm text-slate-300">
          No products available yet.
        </p>
      </section>
    );
  }

  return (
    <section className="py-10 md:py-16 space-y-8">
      {/* Header */}
      <header className="space-y-3 max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.26em] text-brand flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" />
          <span>Shop</span>
        </p>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          {shop?.heroTitle || "Combatfit gear"}
        </h1>

        <p className="text-xs md:text-sm text-slate-300">
          {shop?.heroSubtitle ||
            "Functional gear for outdoor training and everyday movement."}
        </p>
      </header>

      {/* Product grid */}
      <div className="grid gap-5 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            onClick={() => navigate(`/shop/${product.id}`)}
            className="group flex flex-col rounded-3xl border border-white/10 bg-[#020617] overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.75)] hover:border-brand/70 transition cursor-pointer"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-xs text-slate-500">
                  Image coming soon
                </div>
              )}

              {/* Badges */}
              <div className="absolute left-3 top-3 flex flex-col gap-2">
                {product.badge && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-[10px] uppercase tracking-wider text-brand border border-brand/40">
                    <Sparkles className="h-3 w-3" />
                    {product.badge}
                  </span>
                )}
                {product.tag && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-wider text-slate-100 border border-white/10">
                    <Tag className="h-3 w-3 text-brand" />
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="absolute right-3 bottom-3 rounded-2xl bg-black/70 px-3 py-2 text-right">
                <p className="text-xs text-slate-400">Price</p>
                <p className="text-sm font-semibold text-slate-50">
                  Ksh {product.priceKsh?.toLocaleString?.()}
                </p>
                {product.priceNote && (
                  <p className="text-[10px] text-slate-400">
                    {product.priceNote}
                  </p>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between px-4 py-4">
              <div className="space-y-2">
                <h2 className="text-sm md:text-base font-semibold text-slate-50">
                  {product.name}
                </h2>

                {product.description && (
                  <p className="text-xs md:text-sm text-slate-300">
                    {product.description}
                  </p>
                )}
              </div>

              {/* Actions */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart({
                      id: product.id,
                      name: product.name,
                      priceKsh: product.priceKsh,
                      imageUrl: product.imageUrl,
                      qty: 1,
                    });
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 bg-brand text-dark text-xs md:text-sm font-semibold hover:bg-brand-dark transition shadow-[0_0_25px_rgba(34,197,94,0.6)]"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to cart
                </button>

                {product.estimatedLeadTime && (
                  <p className="mt-2 text-[10px] text-slate-400 text-center">
                    {product.estimatedLeadTime}
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Shop;
