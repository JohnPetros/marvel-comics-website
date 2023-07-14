export function formatDate(date: Date) {
  console.log(date);

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
}
