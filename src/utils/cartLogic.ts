export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface CartTotals {
  itemCount: number;
  subtotal: number;
  estimatedTax: number;
  total: number;
}

export const TEXAS_SALES_TAX_RATE = 0.0825;

export function addItemToCart(
  cart: CartItem[],
  item: { id: string; name: string; price: number; image?: string }
): CartItem[] {
  const existing = cart.find((c) => c.id === item.id);
  if (existing) {
    return cart.map((c) =>
      c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
    );
  }
  return [...cart, { ...item, quantity: 1 }];
}

export function updateItemQuantity(
  cart: CartItem[],
  itemId: string,
  quantity: number
): CartItem[] {
  if (quantity <= 0) {
    return cart.filter((c) => c.id !== itemId);
  }
  return cart.map((c) =>
    c.id === itemId ? { ...c, quantity: Math.floor(quantity) } : c
  );
}

export function removeItemFromCart(cart: CartItem[], itemId: string): CartItem[] {
  return cart.filter((c) => c.id !== itemId);
}

export function calculateCartTotals(
  cart: CartItem[],
  taxRate: number = TEXAS_SALES_TAX_RATE
): CartTotals {
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const rawSubtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const subtotal = Math.round(rawSubtotal * 100) / 100;
  const estimatedTax = Math.round(subtotal * taxRate * 100) / 100;
  const total = Math.round((subtotal + estimatedTax) * 100) / 100;

  return {
    itemCount,
    subtotal,
    estimatedTax,
    total,
  };
}

export function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export function formatOrderSummaryText(
  cart: CartItem[],
  serviceType: 'pickup' | 'delivery'
): string {
  const totals = calculateCartTotals(cart);
  const lines = cart.map(
    (item) => `${item.quantity}x ${item.name} (${formatCurrency(item.price * item.quantity)})`
  );
  lines.push(`Service: ${serviceType === 'pickup' ? 'Pickup' : 'Delivery'}`);
  lines.push(`Subtotal: ${formatCurrency(totals.subtotal)}`);
  lines.push(`Est. Total (incl. tax): ${formatCurrency(totals.total)}`);
  return lines.join('\n');
}
