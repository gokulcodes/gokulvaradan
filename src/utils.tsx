export function getFormatedTime(date: string) {
  try {
    const tempate = new Intl.DateTimeFormat("en-GB", {
      month: "short",
      year: "numeric",
    });
    return tempate.format(new Date(parseInt(date)));
  } catch {
    return "";
  }
  return "";
}
