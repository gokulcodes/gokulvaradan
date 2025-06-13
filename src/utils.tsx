export function getFormatedTime(date: string) {
  const tempate = new Intl.DateTimeFormat("en-GB", {
    month: "short",
    year: "numeric",
  });
  return tempate.format(new Date(parseInt(date)));
}
