export function formatCurrency(value: number) {
  return `${new Intl.NumberFormat('fr-FR').format(value)} HTG`;
}

export function formatDate(dateValue: string) {
  return new Date(dateValue).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
