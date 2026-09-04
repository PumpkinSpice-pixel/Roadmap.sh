// My code
function cleanText(text) {
  text = text.trim();
  return text;
}
function capitalize(text) {
  return (text = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
}
function formatDisplayName(firstName, lastName) {
  let Name = cleanText(firstName);
  let first = capitalize(Name);
  let Surname = cleanText(lastName);
  let last = capitalize(Surname);
  return first + " " + last;
}
console.log(formatDisplayName("  ava", "STONE  "));
console.log(formatDisplayName("nOAh", "  kim"));
console.log(formatDisplayName("  mINA  ", "pATEL"));

// Roadmap.sh code
