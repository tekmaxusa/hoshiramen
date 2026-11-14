import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  addItemToCart,
  calculateCartTotals,
  removeItemFromCart,
  updateItemQuantity,
  type CartItem,
  type CartTotals,
} from '../utils/cartLogic';

const STORAGE_KEY = 'hoshi_ramen_keller_cart_v1';

interface CartContextValue {
  cart: CartItem[];
  totals: CartTotals;
  lastAddedItemName: string | null;
  addToCart: (item: {
    id: string;
    name: string;
    price: number;
    image?: string;
  }) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

function loadInitialCart(): CartItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is CartItem =>
        typeof item?.id === 'string' &&
        typeof item?.name === 'string' &&
        typeof item?.price === 'number' &&
        typeof item?.quantity === 'number' &&
        item.quantity > 0
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(loadInitialCart);
  const [lastAddedItemName, setLastAddedItemName] = useState<string | null>(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Storage unavailable
    }
  }, [cart]);

  useEffect(() => {
    if (!lastAddedItemName) return;
    const timer = window.setTimeout(() => setLastAddedItemName(null), 2400);
    return () => window.clearTimeout(timer);
  }, [lastAddedItemName]);

  const totals = useMemo(() => calculateCartTotals(cart), [cart]);

  const addToCart = (item: {
    id: string;
    name: string;
    price: number;
    image?: string;
  }) => {
    setCart((prev) => addItemToCart(prev, item));
    setLastAddedItemName(item.name);
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    setCart((prev) => updateItemQuantity(prev, itemId, quantity));
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => removeItemFromCart(prev, itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totals,
        lastAddedItemName,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within CartProvider');
  }
  return ctx;
}
