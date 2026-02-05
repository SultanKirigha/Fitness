// src/pages/Cart.jsx
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import {
  getCart,
  setCart,
  updateCartQty,
  removeFromCart,
  clearCart,
} from "../utils/cart.js";

function CartItemRow({ item, onMinus, onPlus, onRemove }) {
  const unit = Number(item.priceKsh || 0);
  const lineTotal = unit * Number(item.qty || 0);

  return (
    <div className="rounded-3xl border border-white/10 bg-[#020617] p-4 md:p-5">
      <div className="flex gap-4">
        <div className="h-20 w-20 md:h-24 md:w-24 rounded-2xl overflow-hidden border border-white/10 bg-black/20 shrink-0">
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt={item.name}
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-[10px] text-slate-500">
              No image
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm md:text-base font-semibold text-slate-50 truncate">
                {item.name}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Unit: Ksh {unit.toLocaleString()}
              </p>
            </div>

            <button
              type="button"
              onClick={onRemove}
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-black/30 text-slate-200 hover:text-white"
              aria-label={`Remove ${item.name}`}
              title="Remove"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            {/* Qty controls */}
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2">
              <button
                type="button"
                onClick={onMinus}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-slate-200 hover:text-white"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>

              <div className="min-w-[2ch] text-center text-sm font-semibold text-slate-50">
                {item.qty}
              </div>

              <button
                type="button"
                onClick={onPlus}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-slate-200 hover:text-white"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            {/* Line total */}
            <div className="text-right">
              <p className="text-xs text-slate-400">Subtotal</p>
              <p className="text-sm md:text-base font-semibold text-slate-50">
                Ksh {lineTotal.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cart() {
  const navigate = useNavigate();

  const [items, setItems] = useState(() => getCart().items);

  // Keep page in sync with updates from other components
  useEffect(() => {
    const sync = () => setItems(getCart().items);
    window.addEventListener("cart:updated", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("cart:updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const summary = useMemo(() => {
    const subtotal = items.reduce(
      (sum, it) => sum + Number(it.priceKsh || 0) * Number(it.qty || 0),
      0
    );
    const count = items.reduce((sum, it) => sum + Number(it.qty || 0), 0);

    // For now: no shipping/tax calculation
    const shipping = 0;
    const total = subtotal + shipping;

    return { subtotal, shipping, total, count };
  }, [items]);

  const handleMinus = (id, currentQty) => {
    const next = Math.max(1, Number(currentQty || 1) - 1);
    updateCartQty(id, next);
    setItems(getCart().items);
  };

  const handlePlus = (id, currentQty) => {
    const next = Number(currentQty || 1) + 1;
    updateCartQty(id, next);
    setItems(getCart().items);
  };

  const handleRemove = (id) => {
    removeFromCart(id);
    setItems(getCart().items);
  };

  const handleClear = () => {
    clearCart();
    setItems([]);
  };

  // Optional: if you want a single "checkout" flow later
  const handleCheckout = () => {
    alert("Next step: Checkout (we’ll connect this to Paystack)");
  };

  return (
    <section className="py-10 md:py-16">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => navigate("/shop")}
          className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Continue shopping
        </button>

        {items.length > 0 && (
          <button
            type="button"
            onClick={handleClear}
            className="text-xs md:text-sm text-slate-300 hover:text-white underline underline-offset-4"
          >
            Clear cart
          </button>
        )}
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-12">
        {/* Items */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-slate-50">
                Your cart
              </h1>
              <p className="mt-1 text-sm text-slate-300">
                {summary.count > 0
                  ? `${summary.count} item${summary.count === 1 ? "" : "s"}`
                  : "No items yet"}
              </p>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-[#020617] p-6">
              <div className="flex items-center gap-3 text-slate-100">
                <ShoppingBag className="h-5 w-5 text-brand" />
                <p className="text-sm font-semibold">Your cart is empty</p>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Head to the shop and add a few items.
              </p>
              <Link
                to="/shop"
                className="mt-4 inline-flex items-center justify-center rounded-full px-6 py-3 bg-brand text-dark text-sm font-semibold hover:bg-brand-dark transition shadow-[0_0_30px_rgba(34,197,94,0.55)]"
              >
                Go to shop
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <CartItemRow
                key={item.id}
                item={item}
                onMinus={() => handleMinus(item.id, item.qty)}
                onPlus={() => handlePlus(item.id, item.qty)}
                onRemove={() => handleRemove(item.id)}
              />
            ))
          )}
        </div>

        {/* Summary */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-white/10 bg-[#020617] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.55)] sticky top-20">
            <h2 className="text-lg font-semibold text-slate-50">Order summary</h2>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between text-slate-300">
                <span>Subtotal</span>
                <span className="text-slate-100">
                  Ksh {summary.subtotal.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between text-slate-300">
                <span>Shipping</span>
                <span className="text-slate-100">
                  {summary.shipping === 0
                    ? "Calculated later"
                    : `Ksh ${summary.shipping.toLocaleString()}`}
                </span>
              </div>

              <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                <span className="text-slate-300">Total</span>
                <span className="text-slate-50 font-semibold">
                  Ksh {summary.total.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCheckout}
              disabled={items.length === 0}
              className={[
                "mt-5 w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition",
                items.length === 0
                  ? "bg-white/10 text-slate-500 cursor-not-allowed"
                  : "bg-slate-100 text-slate-900 hover:bg-white",
              ].join(" ")}
            >
              Checkout
            </button>

            <p className="mt-3 text-[11px] text-slate-500">
              Checkout will connect to Paystack next. We’ll also ask for delivery details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
