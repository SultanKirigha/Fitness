// src/pages/Shop.jsx
import { useState } from "react";
import { useSiteData } from "../context/SiteDataContext.jsx";
import {
  Tag,
  ShoppingBag,
  Shirt,
  Package,
  X,
  Sparkles,
} from "lucide-react";

const SHOP_REQUEST_URL = import.meta.env.VITE_SHOP_REQUEST_URL;

function Shop() {
  const {
    siteData: { shop },
  } = useSiteData();

  const initialProducts = shop?.items || shop?.products || [];

  const [products, setProducts] = useState(
    initialProducts.map((p) => ({ ...p }))
  );

  const [activeProductId, setActiveProductId] = useState(null);
  const [submittedForProductId, setSubmittedForProductId] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const activeProduct = products.find((p) => p.id === activeProductId);

  const handleOpenRequest = (product) => {
    setActiveProductId(product.id);
    setSubmitted(false);
  };

  const handleCloseRequest = () => {
    setActiveProductId(null);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    // don’t preventDefault – we want the form to actually POST
    const formData = new FormData(e.target);
    const productId = formData.get("productId");
    const quantity = Number(formData.get("quantity") || "1");

    setSubmitted(true);
    setSubmittedForProductId(productId || null);

    if (productId) {
      setProducts((prev) =>
        prev.map((p) =>
          (p.id || p.name) === productId
            ? { ...p, lastRequestedQuantity: quantity }
            : p
        )
      );
    }

    setTimeout(() => setSubmitted(false), 6000);
  };

  if (!products || products.length === 0) {
    return (
      <section className="py-10 md:py-16">
        <h1 className="text-2xl md:text-3xl font-semibold mb-3">
          Combatfit shop
        </h1>
        <p className="text-sm text-slate-300">
          No products available yet. Add items via your data / dashboard and
          they will appear here.
        </p>
      </section>
    );
  }

  return (
    <>
      <section className="py-10 md:py-16 space-y-8">
        {/* Header */}
        <header className="space-y-3 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.26em] text-brand flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            <span>Shop</span>
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            Combatfit gear for outdoor sessions and everyday movement.
          </h1>
          <p className="text-xs md:text-sm text-slate-300">
            Simple, durable pieces that work on trails, in the park, and on
            your way to work. Prices are in Kenyan Shillings (Ksh). Use the
            request button to ask about sizing, availability, or bulk orders.
          </p>
        </header>

        {/* Product grid */}
        <div className="grid gap-5 md:gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch">
          {products.map((product) => {
            const productKey = product.id || product.name;
            const wasRequested = submittedForProductId === productKey;

            return (
              <article
                key={productKey}
                className="group flex flex-col h-full rounded-3xl border border-white/10 bg-[#020617] overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.75)] hover:border-brand/70 hover:shadow-[0_0_50px_rgba(34,197,94,0.45)] transition-all duration-300"
              >
                {/* Image block */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {product.imageUrl ? (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-full w-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-slate-500 text-xs bg-dark-soft">
                      Image coming soon
                    </div>
                  )}

                  {/* Top badges */}
                  <div className="absolute left-3 top-3 flex flex-col gap-2">
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

                  {/* Bottom gradient overlay for readability */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#020617] via-black/40 to-transparent" />

                  {/* Price badge */}
                  <div className="absolute right-3 bottom-3 rounded-2xl bg-black/70 px-3 py-2 text-right">
                    <p className="text-xs text-slate-400">From</p>
                    <p className="text-sm md:text-base font-semibold text-slate-50">
                      Ksh{" "}
                      {product.priceKsh?.toLocaleString?.() ||
                        product.priceKsh}
                    </p>
                    {product.priceNote && (
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        {product.priceNote}
                      </p>
                    )}
                  </div>
                </div>

                {/* Content block */}
                <div className="flex flex-1 flex-col justify-between px-4 py-4 md:px-5 md:py-5 text-xs md:text-sm">
                  {/* Title & description */}
                  <div className="space-y-2">
                    <h2 className="text-sm md:text-base font-semibold text-slate-50">
                      {product.name}
                    </h2>

                    {product.description && (
                      <p className="text-xs md:text-sm text-slate-300">
                        {product.description}
                      </p>
                    )}

                    {product.features && product.features.length > 0 && (
                      <ul className="mt-1 space-y-1 text-[11px] md:text-xs text-slate-400">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex gap-1.5">
                            <span className="mt-[3px] h-1 w-1 rounded-full bg-brand/80" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {product.lastRequestedQuantity && (
                      <p className="text-[11px] md:text-xs text-brand mt-1">
                        Last request: {product.lastRequestedQuantity} piece
                        {product.lastRequestedQuantity > 1 ? "s" : ""}.
                      </p>
                    )}
                  </div>

                  {/* Footer actions */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="button"
                      onClick={() => handleOpenRequest(product)}
                      className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 bg-brand text-dark text-xs md:text-sm font-semibold hover:bg-brand-dark transition w-full sm:w-auto shadow-[0_0_25px_rgba(34,197,94,0.6)]"
                    >
                      <Shirt className="h-4 w-4" />
                      Request this item
                    </button>

                    {product.estimatedLeadTime && (
                      <p className="text-[10px] md:text-xs text-slate-400 text-left sm:text-right">
                        {product.estimatedLeadTime}
                      </p>
                    )}
                  </div>

                  {wasRequested && submitted && (
                    <p className="mt-2 text-[11px] md:text-xs text-brand">
                      Request received. We&apos;ll reach out about this item
                      shortly.
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <p className="text-[11px] md:text-xs text-slate-500">
          Note: These are request-only items for now. Once you submit a request,
          the team will reply with availability, sizing, and payment details.
        </p>
      </section>

      {/* Request modal */}
      {activeProduct && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#020617] shadow-[0_0_80px_rgba(0,0,0,0.9)] relative overflow-hidden">
            {/* Close button */}
            <button
              type="button"
              onClick={handleCloseRequest}
              className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-slate-300 hover:text-slate-100"
              aria-label="Close request form"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            <div className="px-5 pt-5 pb-3 border-b border-white/10">
              <p className="text-[11px] uppercase tracking-[0.22em] text-brand flex items-center gap-2">
                <Package className="h-4 w-4" />
                <span>Item request</span>
              </p>
              <h2 className="mt-1 text-base md:text-lg font-semibold text-slate-50">
                {activeProduct.name}
              </h2>
              <p className="text-[11px] md:text-xs text-slate-300">
                Ksh{" "}
                {activeProduct.priceKsh?.toLocaleString?.() ||
                  activeProduct.priceKsh}{" "}
                {activeProduct.tag ? `· ${activeProduct.tag}` : ""}
              </p>
            </div>

            {/* Form */}
            <div className="px-5 py-4 md:px-6 md:py-5">
              <form
                action={SHOP_REQUEST_URL}
                method="POST"
                target="shopRequestFrame"
                onSubmit={handleSubmit}
                className="space-y-4 text-xs md:text-sm"
              >
                {/* Hidden product details */}
                <input
                  type="hidden"
                  name="productId"
                  value={activeProduct.id || activeProduct.name || ""}
                />
                <input
                  type="hidden"
                  name="productName"
                  value={activeProduct.name || ""}
                />
                <input
                  type="hidden"
                  name="productPrice"
                  value={
                    activeProduct.priceKsh
                      ? `Ksh ${activeProduct.priceKsh}`
                      : ""
                  }
                />
                <input
                  type="hidden"
                  name="productTag"
                  value={activeProduct.tag || ""}
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="shop-name"
                      className="block text-[11px] md:text-xs text-slate-200"
                    >
                      Full name
                    </label>
                    <input
                      id="shop-name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="shop-email"
                      className="block text-[11px] md:text-xs text-slate-200"
                    >
                      Email address
                    </label>
                    <input
                      id="shop-email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-1.5 md:col-span-1">
                    <label
                      htmlFor="shop-phone"
                      className="block text-[11px] md:text-xs text-slate-200"
                    >
                      Phone / WhatsApp
                    </label>
                    <input
                      id="shop-phone"
                      name="phone"
                      type="text"
                      className="w-full rounded-xl bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                      placeholder="+254 7xx xxx xxx"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="shop-size"
                      className="block text-[11px] md:text-xs text-slate-200"
                    >
                      Size
                    </label>
                    <input
                      id="shop-size"
                      name="size"
                      type="text"
                      className="w-full rounded-xl bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                      placeholder="S, M, L, XL..."
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="shop-quantity"
                      className="block text-[11px] md:text-xs text-slate-200"
                    >
                      Quantity
                    </label>
                    <input
                      id="shop-quantity"
                      name="quantity"
                      type="number"
                      min="1"
                      defaultValue="1"
                      required
                      className="w-full rounded-xl bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="shop-note"
                    className="block text-[11px] md:text-xs text-slate-200"
                  >
                    Anything we should know?
                  </label>
                  <textarea
                    id="shop-note"
                    name="note"
                    rows={4}
                    className="w-full rounded-xl bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand resize-none"
                    placeholder="Colour preference, deadlines, group orders, delivery questions..."
                  />
                </div>

                <div className="pt-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full px-7 py-2.5 bg-brand text-dark text-sm md:text-base font-semibold hover:bg-brand-dark transition w-full md:w-auto shadow-[0_0_30px_rgba(34,197,94,0.7)]"
                  >
                    Send request
                  </button>
                  <p className="text-[11px] md:text-xs text-slate-400">
                    We&apos;ll email you back with availability, sizing, and
                    payment details.
                  </p>
                </div>

                {submitted && (
                  <p className="mt-1 text-[11px] md:text-xs text-brand">
                    Request sent. Check your email soon – we&apos;ll follow up
                    with next steps.
                  </p>
                )}
              </form>

              {/* Hidden iframe so the page does not reload */}
              <iframe
                name="shopRequestFrame"
                title="Combatfit shop request"
                className="hidden"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Shop;
