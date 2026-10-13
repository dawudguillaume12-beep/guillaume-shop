import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { CartItem, Product } from '../types';
import { products } from '../data/mockData';

type StoreContextType = {
  cart: CartItem[];
  addToCart: (product: Product, size: string, color: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  removeFromCart: (itemId: string) => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  user: { name: string; email: string } | null;
  login: (name: string, email: string) => void;
  logout: () => void;
};

const defaultContext: StoreContextType = {
  cart: [],
  addToCart: () => undefined,
  updateQuantity: () => undefined,
  removeFromCart: () => undefined,
  wishlist: [],
  toggleWishlist: () => undefined,
  user: null,
  login: () => undefined,
  logout: () => undefined,
};

const StoreContext = createContext<StoreContextType>(defaultContext);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('guillaume-shop-cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('guillaume-shop-wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [user, setUser] = useState<{ name: string; email: string } | null>(() => {
    const saved = localStorage.getItem('guillaume-shop-user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem('guillaume-shop-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('guillaume-shop-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('guillaume-shop-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('guillaume-shop-user');
    }
  }, [user]);

  const addToCart = (product: Product, size: string, color: string) => {
    setCart((current) => {
      const existing = current.find(
        (item) => item.productId === product.id && item.size === size && item.color === color
      );

      if (existing) {
        return current.map((item) =>
          item.productId === product.id && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...current,
        {
          id: `${product.id}-${size}-${color}`,
          productId: product.id,
          name: product.name,
          size,
          color,
          quantity: 1,
          price: product.promoPrice ?? product.price,
        },
      ];
    });
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart((current) =>
      current
        .map((item) => (item.id === itemId ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (itemId: string) => {
    setCart((current) => current.filter((item) => item.id !== itemId));
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((current) =>
      current.includes(productId) ? current.filter((id) => id !== productId) : [...current, productId]
    );
  };

  const login = (name: string, email: string) => setUser({ name, email });
  const logout = () => setUser(null);

  const value = useMemo(
    () => ({ cart, addToCart, updateQuantity, removeFromCart, wishlist, toggleWishlist, user, login, logout }),
    [cart, wishlist, user]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  return useContext(StoreContext);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug) ?? products[0];
}

export function getProductByCategory(categorySlug: string) {
  return products.filter((product) => product.category === categorySlug);
}

export function getPopularProducts(limit = 4) {
  return products.slice(0, limit);
}
