import { createOrderReference } from './orders';

export const buildDraftOrder = (cart: Array<{ id: string; name: string; quantity: number; price: number }>) => {
  const subtotal = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const shipping = cart.length > 0 ? 250 : 0;
  const total = subtotal + shipping;

  return {
    reference: createOrderReference(),
    subtotal,
    shipping,
    total,
  };
};
