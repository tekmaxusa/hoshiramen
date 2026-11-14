import { useMemo, useState, type FormEvent } from 'react';
import {
  Check,
  Copy,
  ExternalLink,
  Info,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from 'lucide-react';
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  type MenuCategory,
} from '../data/menu';
import { RESTAURANT_INFO } from '../data/restaurant';
import { useCart } from '../context/CartContext';
import {
  formatCurrency,
  formatOrderSummaryText,
} from '../utils/cartLogic';
import {
  validateOrderCustomerForm,
  type OrderCustomerValues,
  type ValidationErrors,
} from '../utils/validation';
import { DishImage } from '../components/DishImage';
import { SeoHead } from '../components/SeoHead';

export function OrderOnlinePage() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('Ramen');
  const { cart, totals, addToCart, updateQuantity, removeFromCart, clearCart } =
    useCart();

  const [customer, setCustomer] = useState<OrderCustomerValues>({
    serviceType: 'pickup',
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [errors, setErrors] = useState<ValidationErrors<OrderCustomerValues>>({});
  const [summaryCopied, setSummaryCopied] = useState(false);
  const [orderPreviewReady, setOrderPreviewReady] = useState(false);

  const visibleItems = useMemo(
    () => MENU_ITEMS.filter((item) => item.category === selectedCategory),
    [selectedCategory]
  );

  const handleCopySummary = async () => {
    if (cart.length === 0) return;
    try {
      await navigator.clipboard.writeText(
        formatOrderSummaryText(cart, customer.serviceType)
      );
      setSummaryCopied(true);
      window.setTimeout(() => setSummaryCopied(false), 2200);
    } catch {
      // Clipboard blocked
    }
  };

  const handlePrepareOrder = (e: FormEvent) => {
    e.preventDefault();
    const validation = validateOrderCustomerForm(customer);
    setErrors(validation);
    if (Object.keys(validation).length === 0 && cart.length > 0) {
      setOrderPreviewReady(true);
    } else {
      setOrderPreviewReady(false);
    }
  };

  return (
    <>
      <SeoHead
        title="Order Online – Hoshi Ramen Keller | Pickup & Delivery"
        description="Build your pickup or delivery order from Hoshi Ramen Keller and continue to our official TekMax online ordering platform."
      />

      {/* Page Header */}
      <section className="bg-[#161412] text-[#FAF7F2] py-12 sm:py-14 border-b border-[#2D2823]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#E5736E]">
              Online Ordering
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              Order Pickup or Delivery
            </h1>
            <p className="text-sm sm:text-base text-[#D4CCC1] leading-relaxed">
              Select dishes below to prepare your order total, or head directly to our
              official TekMax ordering portal to complete payment and submit your kitchen
              ticket.
            </p>
          </div>

          <a
            href={RESTAURANT_INFO.orderingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[46px] rounded-md bg-[#B92B27] hover:bg-[#961F1C] text-[#FAF7F2] text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
          >
            <span>Open Official TekMax Ordering</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Columns: Category Browser & Menu Items */}
          <div className="lg:col-span-7 space-y-6">
            <div
              role="tablist"
              aria-label="Order categories"
              className="flex flex-wrap gap-1.5 pb-4 border-b border-[#E4DDD2]"
            >
              {MENU_CATEGORIES.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 min-h-[38px] rounded-md text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                      active
                        ? 'bg-[#161412] text-[#FAF7F2]'
                        : 'bg-[#F2ECE3] text-[#3A342F] hover:bg-[#E4DDD2]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <div className="space-y-4">
              {visibleItems.map((item) => {
                const inCart = cart.find((c) => c.id === item.id);
                return (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row gap-4 bg-white border border-[#E4DDD2] rounded-lg p-4"
                  >
                    <div className="w-full sm:w-32 aspect-[4/3] sm:aspect-square rounded-md overflow-hidden bg-[#EFE9DF] shrink-0">
                      <DishImage
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between gap-3">
                      <div>
                        <div className="flex items-baseline justify-between gap-3">
                          <h2 className="font-display text-xl font-semibold text-[#161412]">
                            {item.name}
                          </h2>
                          <span className="text-sm font-semibold text-[#161412] tabular-nums shrink-0">
                            {formatCurrency(item.price)}
                          </span>
                        </div>
                        <p className="text-sm text-[#5C554E] mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-end">
                        <button
                          type="button"
                          onClick={() =>
                            addToCart({
                              id: item.id,
                              name: item.name,
                              price: item.price,
                              image: item.image,
                            })
                          }
                          aria-label={`Add ${item.name} to order`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-md bg-[#F2ECE3] hover:bg-[#B92B27] text-[#161412] hover:text-[#FAF7F2] text-xs sm:text-sm font-medium transition-colors"
                        >
                          <Plus className="w-4 h-4" aria-hidden="true" />
                          <span>
                            {inCart ? `Add Another (${inCart.quantity})` : 'Add to Cart'}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right 5 Columns: Cart & Customer Checkout Form */}
          <aside
            aria-label="Order summary and checkout"
            className="lg:col-span-5 lg:sticky lg:top-24 bg-white border border-[#E4DDD2] rounded-lg p-6 space-y-5"
          >
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#E4DDD2]">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#B92B27]" aria-hidden="true" />
                <h2 className="font-display text-2xl font-semibold text-[#161412]">
                  Your Order
                </h2>
              </div>
              {cart.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    clearCart();
                    setOrderPreviewReady(false);
                  }}
                  className="text-xs font-medium text-[#6B625A] hover:text-[#B92B27] underline underline-offset-4"
                >
                  Clear Cart
                </button>
              )}
            </div>

            {/* Pickup / Delivery Toggle */}
            <div className="grid grid-cols-2 gap-1 p-1 bg-[#F2ECE3] rounded-md">
              <button
                type="button"
                onClick={() =>
                  setCustomer((prev) => ({ ...prev, serviceType: 'pickup' }))
                }
                className={`py-2 min-h-[40px] text-sm font-medium rounded-sm transition-colors ${
                  customer.serviceType === 'pickup'
                    ? 'bg-white text-[#161412] shadow-sm'
                    : 'text-[#5C554E] hover:text-[#161412]'
                }`}
              >
                Pickup
              </button>
              <button
                type="button"
                onClick={() =>
                  setCustomer((prev) => ({ ...prev, serviceType: 'delivery' }))
                }
                className={`py-2 min-h-[40px] text-sm font-medium rounded-sm transition-colors ${
                  customer.serviceType === 'delivery'
                    ? 'bg-white text-[#161412] shadow-sm'
                    : 'text-[#5C554E] hover:text-[#161412]'
                }`}
              >
                Delivery
              </button>
            </div>

            {/* Cart Items */}
            {cart.length === 0 ? (
              <div className="py-8 text-center space-y-2 border border-dashed border-[#D6CEC2] rounded-md px-4">
                <p className="text-sm font-medium text-[#161412]">
                  Your order cart is empty
                </p>
                <p className="text-xs text-[#6B625A]">
                  Add dishes from the menu on the left to calculate your subtotal and
                  prepare your order.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <ul className="divide-y divide-[#E4DDD2] max-h-56 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="py-3 flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-[#161412] truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-[#6B625A] tabular-nums">
                          {formatCurrency(item.price)} each
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.name}`}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 inline-flex items-center justify-center rounded border border-[#D6CEC2] text-[#161412] hover:bg-[#F2ECE3]"
                        >
                          <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                        <span
                          aria-label={`Quantity of ${item.name}`}
                          className="w-7 text-center text-sm font-medium tabular-nums"
                        >
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.name}`}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 inline-flex items-center justify-center rounded border border-[#D6CEC2] text-[#161412] hover:bg-[#F2ECE3]"
                        >
                          <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          aria-label={`Remove ${item.name}`}
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 inline-flex items-center justify-center rounded text-[#6B625A] hover:text-[#B92B27] hover:bg-[#F2ECE3]"
                        >
                          <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Totals */}
                <dl className="space-y-2 pt-3 border-t border-[#E4DDD2] text-sm">
                  <div className="flex justify-between text-[#5C554E]">
                    <dt>Subtotal ({totals.itemCount} items)</dt>
                    <dd className="tabular-nums font-medium text-[#161412]">
                      {formatCurrency(totals.subtotal)}
                    </dd>
                  </div>
                  <div className="flex justify-between text-[#5C554E]">
                    <dt>Estimated Tax (8.25%)</dt>
                    <dd className="tabular-nums">{formatCurrency(totals.estimatedTax)}</dd>
                  </div>
                  <div className="flex justify-between text-base font-semibold text-[#161412] pt-2 border-t border-[#E4DDD2]">
                    <dt>Estimated Total</dt>
                    <dd className="tabular-nums">{formatCurrency(totals.total)}</dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full min-h-[38px] px-3 py-1.5 rounded-md border border-[#D6CEC2] hover:bg-[#F2ECE3] text-xs font-medium text-[#3A342F] inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  {summaryCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#161412]" aria-hidden="true" />
                      <span>Order Summary Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy Itemized Order List</span>
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Customer Details Form */}
            <form onSubmit={handlePrepareOrder} noValidate className="space-y-4 pt-3 border-t border-[#E4DDD2]">
              <h3 className="font-display text-xl font-semibold text-[#161412]">
                Customer Details
              </h3>

              <div>
                <label
                  htmlFor="order-name"
                  className="block text-xs font-semibold text-[#3A342F] mb-1"
                >
                  Full Name
                </label>
                <input
                  id="order-name"
                  type="text"
                  value={customer.name}
                  onChange={(e) =>
                    setCustomer((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Alex Rivera"
                  className="w-full min-h-[42px] px-3 py-2 text-sm bg-white border border-[#D6CEC2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B92B27]"
                />
                {errors.name && (
                  <p className="text-xs text-[#B92B27] mt-1">{errors.name}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="order-email"
                    className="block text-xs font-semibold text-[#3A342F] mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="order-email"
                    type="email"
                    value={customer.email}
                    onChange={(e) =>
                      setCustomer((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="you@example.com"
                    className="w-full min-h-[42px] px-3 py-2 text-sm bg-white border border-[#D6CEC2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B92B27]"
                  />
                  {errors.email && (
                    <p className="text-xs text-[#B92B27] mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="order-phone"
                    className="block text-xs font-semibold text-[#3A342F] mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="order-phone"
                    type="tel"
                    value={customer.phone}
                    onChange={(e) =>
                      setCustomer((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    placeholder="(682) 555-0148"
                    className="w-full min-h-[42px] px-3 py-2 text-sm bg-white border border-[#D6CEC2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B92B27]"
                  />
                  {errors.phone && (
                    <p className="text-xs text-[#B92B27] mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {customer.serviceType === 'delivery' && (
                <div>
                  <label
                    htmlFor="order-address"
                    className="block text-xs font-semibold text-[#3A342F] mb-1"
                  >
                    Delivery Street Address
                  </label>
                  <input
                    id="order-address"
                    type="text"
                    value={customer.address}
                    onChange={(e) =>
                      setCustomer((prev) => ({ ...prev, address: e.target.value }))
                    }
                    placeholder="Street, Apt/Suite, Keller, TX"
                    className="w-full min-h-[42px] px-3 py-2 text-sm bg-white border border-[#D6CEC2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B92B27]"
                  />
                  {errors.address && (
                    <p className="text-xs text-[#B92B27] mt-1">{errors.address}</p>
                  )}
                </div>
              )}

              <div>
                <label
                  htmlFor="order-notes"
                  className="block text-xs font-semibold text-[#3A342F] mb-1"
                >
                  Broth Preference or Notes (Optional)
                </label>
                <textarea
                  id="order-notes"
                  rows={2}
                  value={customer.notes}
                  onChange={(e) =>
                    setCustomer((prev) => ({ ...prev, notes: e.target.value }))
                  }
                  placeholder="E.g. Tonkotsu broth, extra chopsticks, no green onion..."
                  className="w-full px-3 py-2 text-sm bg-white border border-[#D6CEC2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B92B27]"
                />
              </div>

              {orderPreviewReady && (
                <div
                  role="status"
                  className="p-3.5 rounded-md bg-[#F2ECE3] border border-[#D6CEC2] text-xs text-[#161412] space-y-1.5"
                >
                  <p className="font-semibold">
                    Order Summary Ready for {customer.name} ({customer.serviceType})
                  </p>
                  <p className="text-[#4A433D]">
                    Your selections are prepared. Click below to complete payment and
                    place your live order directly on Hoshi Ramen Keller’s official TekMax
                    ordering system.
                  </p>
                </div>
              )}

              <div className="space-y-2.5 pt-1">
                <a
                  href={RESTAURANT_INFO.orderingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[46px] px-5 py-3 rounded-md bg-[#B92B27] hover:bg-[#961F1C] text-[#FAF7F2] text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Continue to Official TekMax Checkout</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>

                <button
                  type="submit"
                  disabled={cart.length === 0}
                  className="w-full min-h-[42px] px-4 py-2 rounded-md border border-[#161412]/25 hover:border-[#161412] disabled:opacity-45 disabled:cursor-not-allowed text-xs sm:text-sm font-medium text-[#161412] transition-colors"
                >
                  Validate &amp; Review Order Summary
                </button>
              </div>
            </form>

            {/* Honest Backend Disclosure */}
            <div className="flex items-start gap-2.5 p-3.5 rounded-md bg-[#FAF7F2] border border-[#E4DDD2] text-xs text-[#5C554E]">
              <Info className="w-4 h-4 text-[#B92B27] shrink-0 mt-0.5" aria-hidden="true" />
              <p className="leading-relaxed">
                Live payments and kitchen ticket submissions are handled exclusively on{' '}
                <a
                  href={RESTAURANT_INFO.orderingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium text-[#161412]"
                >
                  hoshiramenkeller.tekmaxorder.com
                </a>
                . No payment is processed or submitted locally on this site.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
