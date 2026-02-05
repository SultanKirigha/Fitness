// src/utils/cart.js
// LocalStorage cart helpers (v1)
// Usage:
//   import { addToCart, getCartCount, getCart, setCart, removeFromCart, updateCartQty, clearCart } from "../utils/cart";
//   addToCart({ id, name, priceKsh, imageUrl, qty });

export const CART_KEY = "combatfit_cart_v1";

function safeParse(json) {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export function getCart() {
  const raw = localStorage.getItem(CART_KEY);
  if (!raw) return { items: [] };

  const parsed = safeParse(raw);
  if (!parsed || !Array.isArray(parsed.items)) return { items: [] };

  // Normalize items
  const items = parsed.items
    .filter(Boolean)
    .map((it) => ({
      id: String(it.id || ""),
      name: String(it.name || ""),
      priceKsh: Number(it.priceKsh || 0),
      imageUrl: it.imageUrl || "",
      qty: Math.max(1, Number(it.qty || 1)),
    }))
    .filter((it) => it.id);

  return { items };
}

export function setCart(cart) {
  const items = Array.isArray(cart?.items) ? cart.items : [];
  localStorage.setItem(CART_KEY, JSON.stringify({ items }));
  // Update navbar in same tab
  window.dispatchEvent(new Event("cart:updated"));
}

export function getCartCount() {
  const { items } = getCart();
  return items.reduce((sum, it) => sum + Number(it.qty || 0), 0);
}

export function addToCart({ id, name, priceKsh, imageUrl, qty }) {
  const safeQty = Math.max(1, Number(qty || 1));
  const safeId = String(id || "");
  if (!safeId) return;

  const cart = getCart();
  const items = Array.isArray(cart.items) ? [...cart.items] : [];

  const idx = items.findIndex((it) => String(it.id) === safeId);

  if (idx >= 0) {
    items[idx] = {
      ...items[idx],
      qty: Number(items[idx].qty || 0) + safeQty,
    };
  } else {
    items.push({
      id: safeId,
      name: String(name || ""),
      priceKsh: Number(priceKsh || 0),
      imageUrl: imageUrl || "",
      qty: safeQty,
    });
  }

  setCart({ items });
}

export function updateCartQty(id, qty) {
  const safeId = String(id || "");
  if (!safeId) return;

  const safeQty = Math.max(1, Number(qty || 1));

  const { items } = getCart();
  const next = items.map((it) =>
    String(it.id) === safeId ? { ...it, qty: safeQty } : it
  );

  setCart({ items: next });
}

export function removeFromCart(id) {
  const safeId = String(id || "");
  if (!safeId) return;

  const { items } = getCart();
  const next = items.filter((it) => String(it.id) !== safeId);

  setCart({ items: next });
}

export function clearCart() {
  setCart({ items: [] });
}
