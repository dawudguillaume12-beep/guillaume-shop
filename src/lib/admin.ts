export type AdminOrder = {
  id: string;
  reference: string;
  customer: string;
  phone: string;
  total: number;
  shippingFee: number;
  status: 'payment_submitted' | 'payment_under_review' | 'payment_confirmed' | 'payment_rejected' | 'preparing' | 'shipped' | 'delivered';
  paymentMethod: 'NatCash';
  date: string;
  natcashReference: string;
  proofLabel: string;
  note?: string;
};

export const adminOrders: AdminOrder[] = [
  {
    id: 'o1',
    reference: 'GS-20261013-001',
    customer: 'Guillaume Dawudson',
    phone: '+509 33 00 00 00',
    total: 7520,
    shippingFee: 250,
    status: 'payment_submitted',
    paymentMethod: 'NatCash',
    date: '2026-10-13',
    natcashReference: 'NATCASH-REF-001',
    proofLabel: 'Preuve reçue / vérification en cours',
    note: 'Paiement soumis pour vérification manuelle.',
  },
  {
    id: 'o2',
    reference: 'GS-20261010-112',
    customer: 'Luc Bernard',
    phone: '+509 44 00 00 00',
    total: 4300,
    shippingFee: 250,
    status: 'payment_confirmed',
    paymentMethod: 'NatCash',
    date: '2026-10-10',
    natcashReference: 'NATCASH-REF-045',
    proofLabel: 'Paiement confirmé',
    note: 'Commande validée et en préparation.',
  },
  {
    id: 'o3',
    reference: 'GS-20260925-032',
    customer: 'Marie Joseph',
    phone: '+509 22 00 00 00',
    total: 6800,
    shippingFee: 250,
    status: 'preparing',
    paymentMethod: 'NatCash',
    date: '2026-09-25',
    natcashReference: 'NATCASH-REF-110',
    proofLabel: 'Paiement validé',
    note: 'Produits emballés et prêts à expédier.',
  },
  {
    id: 'o4',
    reference: 'GS-20260918-298',
    customer: 'Emile Sam',
    phone: '+509 42 00 00 00',
    total: 5200,
    shippingFee: 250,
    status: 'shipped',
    paymentMethod: 'NatCash',
    date: '2026-09-18',
    natcashReference: 'NATCASH-REF-213',
    proofLabel: 'Expédition lancée',
    note: 'Commande déjà en cours de livraison.',
  },
];

export const adminOrderStatusLabel: Record<AdminOrder['status'], string> = {
  payment_submitted: 'Preuve soumise',
  payment_under_review: 'Sous vérification',
  payment_confirmed: 'Paiement confirmé',
  payment_rejected: 'Paiement refusé',
  preparing: 'En préparation',
  shipped: 'Expédiée',
  delivered: 'Livrée',
};

export const adminOrderStatusClass: Record<AdminOrder['status'], string> = {
  payment_submitted: 'warning',
  payment_under_review: 'warning',
  payment_confirmed: 'tag',
  payment_rejected: 'danger',
  preparing: 'warning',
  shipped: 'tag',
  delivered: 'tag',
};
