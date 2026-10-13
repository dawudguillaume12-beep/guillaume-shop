export type OrderStatus = 'pending_payment' | 'payment_submitted' | 'payment_under_review' | 'payment_confirmed' | 'payment_rejected' | 'preparing' | 'ready_to_ship' | 'shipped' | 'delivered' | 'cancelled';

export type CheckoutFormValues = {
  fullName: string;
  phone: string;
  department: string;
  commune: string;
  address: string;
  landmark: string;
  paymentReference: string;
  amount: string;
};

export const NATCASH_NUMBER = '43367217';

export const createOrderReference = () => {
  const date = new Date();
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `GS-${y}${m}${d}-${rand}`;
};

export const formatCurrency = (value: number) => `${new Intl.NumberFormat('fr-FR').format(value)} HTG`;

export const normalizeOrderStatus = (status: string): string => {
  const map: Record<string, string> = {
    pending_payment: 'Paiement attendu',
    payment_submitted: 'Preuve soumise',
    payment_under_review: 'Vérification du paiement',
    payment_confirmed: 'Paiement confirmé',
    payment_rejected: 'Paiement refusé',
    preparing: 'Préparation',
    ready_to_ship: 'Prêt à expédier',
    shipped: 'Expédiée',
    delivered: 'Livrée',
    cancelled: 'Annulée',
  };

  return map[status] ?? status;
};
