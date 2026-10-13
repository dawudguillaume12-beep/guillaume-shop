export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  accent: string;
};

export type ProductImage = {
  url: string;
  alt: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  price: number;
  promoPrice?: number;
  sku: string;
  stock: number;
  lowStockThreshold: number;
  colors: string[];
  sizes: string[];
  images: ProductImage[];
  featured?: boolean;
  badge?: string;
  isFlash?: boolean;
  flashEndsAt?: string;
  tags?: string[];
};

export type CartItem = {
  id: string;
  productId: string;
  name: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
};

export type StoreSettings = {
  shopName: string;
  natCashNumber: string;
  currency: string;
};
