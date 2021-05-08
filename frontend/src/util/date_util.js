export default function parseDate(data) {
  const date = new Date(data);
  return new Intl.DateTimeFormat("en-US").format(date);
}
