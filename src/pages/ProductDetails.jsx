// Example: src/pages/ProductDetails.jsx (only showing a complete minimal version with Add to Cart wired)
// Replace your ProductDetails.jsx with this if you want it working immediately.

import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSiteData } from "../context/SiteDataContext.jsx";
import {
  ArrowLeft,
  Tag,
  Sparkles,
  ShoppingCart,
  CreditCard,
  Plus,
  Minus,
} from "lucide-react";
import { addToCart } from "../utils/cart.js";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { productId } = useParams();

  const {
    siteData: { shop },
  } = useSiteData();

  const products = shop?.items || shop?.products || [];

  const product = useMemo(() => {
    if (!productId) return null;
    return products.find((p) => String(p.id) === String(productId)) || null;
  }, [products, productId]);

  const [qty, setQty] = useState(1);

  if (!shop) {
    return (
      <section className="py-10 md:py-16">
        <p className="text-sm text-slate-300">Loading shop...</p>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="py-10 md:py-16">
        <button
          type="button"
          onClick={() => navigate("/shop")}
          className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to shop
        </button>

        <h1 className="mt-6 text-2xl md:text-3xl font-semibold text-slate-50">
          Product not found
        </h1>

        <p className="mt-2 text-sm text-slate-300">
          Try opening: <span className="text-slate-100">/shop/cf-tee-black</span>
        </p>
      </section>
    );
  }

  const unit = Number(product.priceKsh || 0);
  const total = unit * qty;

  return (
    <section className="py-10 md:py-16">
      <button
        type="button"
        onClick={() => navigate("/shop")}
        className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to shop
      </button>

      <div className="mt-6 grid gap-8 lg:grid-cols-12">
        {/* Image */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-white/10 bg-[#020617] overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.75)]">
            <div className="relative aspect-[4/3] overflow-hidden">
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-slate-500 text-xs bg-dark-soft">
                  Image coming soon
                </div>
              )}

              <div className="absolute left-4 top-4 flex flex-col gap-2">
                {product.badge && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-brand border border-brand/40">
                    <Sparkles className="h-3 w-3" />
                    {product.badge}
                  </span>
                )}
                {product.tag && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-100 border border-white/10">
                    <Tag className="h-3 w-3 text-brand" />
                    {product.tag}
                  </span>
                )}
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#020617] via-black/40 to-transparent" />

              <div className="absolute right-4 bottom-4 rounded-2xl bg-black/70 px-4 py-3 text-right">
                <p className="text-xs text-slate-400">Price</p>
                <p className="text-lg font-semibold text-slate-50">
                  Ksh {product.priceKsh?.toLocaleString?.() || product.priceKsh}
                </p>
                {product.priceNote && (
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {product.priceNote}
                  </p>
                )}
              </div>
            </div>
          </div>

          {product.features?.length > 0 && (
            <div className="mt-5 rounded-3xl border border-white/10 bg-[#020617] p-5">
              <h2 className="text-sm font-semibold text-slate-50">What you get</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {product.features.map((f, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand/80" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Purchase panel */}
        <div className="lg:col-span-5 space-y-5">
          <div className="rounded-3xl border border-white/10 bg-[#020617] p-6">
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-50">
              {product.name}
            </h1>

            {product.description && (
              <p className="mt-2 text-sm md:text-base text-slate-300">
                {product.description}
              </p>
            )}

            <div className="mt-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs text-slate-400">Total</p>
                <p className="text-2xl font-semibold text-slate-50">
                  Ksh {total.toLocaleString()}
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-slate-200 hover:text-white"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>

                <div className="min-w-[2ch] text-center text-sm font-semibold text-slate-50">
                  {qty}
                </div>

                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-slate-200 hover:text-white"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              <button
                type="button"
                onClick={() => {
                  addToCart({
                    id: product.id,
                    name: product.name,
                    priceKsh: product.priceKsh,
                    imageUrl: product.imageUrl,
                    qty,
                  });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-brand text-dark text-sm font-semibold hover:bg-brand-dark transition shadow-[0_0_30px_rgba(34,197,94,0.55)]"
              >
                <ShoppingCart className="h-4 w-4" />
                Add to cart
              </button>

              <button
                type="button"
                onClick={() => alert("Next: Buy Now flow, then Paystack")}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-slate-100 text-slate-900 text-sm font-semibold hover:bg-white transition"
              >
                <CreditCard className="h-4 w-4" />
                Buy now
              </button>
            </div>

            {product.estimatedLeadTime && (
              <p className="mt-4 text-xs text-slate-400">{product.estimatedLeadTime}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
