export const formatRevenue = (revenue: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(revenue);
};

export const formatDate = (dateString: Date | string) => {
  return new Date(dateString).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
