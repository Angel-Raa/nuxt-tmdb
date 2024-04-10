export const formatRevenue = (revenue: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(revenue);
};
