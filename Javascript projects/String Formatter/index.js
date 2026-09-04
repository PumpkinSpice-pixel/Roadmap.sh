// My code
function cleanText(text) {
  text = text.trim();
  return text;
}
function capitalize(text) {
  return (text = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
}
function formatDisplayName(firstName, lastName) {
  return (
    capitalize(cleanText(firstName)) + " " + capitalize(cleanText(lastName))
  );
}
console.log(formatDisplayName("  ava", "STONE  "));
console.log(formatDisplayName("nOAh", "  kim"));
console.log(formatDisplayName("  mINA  ", "pATEL"));

// Roadmap.sh code
// function cleanText(text) {
//   return text.trim();
// }
// function capitalize(text) {
//   const cleaned = cleanText(text).toLowerCase();
//   if (cleaned.length === 0) {
//     return '';
//   }
//   return cleaned[0].toUpperCase() + cleaned.slice(1);
// }
// function formatDisplayName(firstName, lastName) {
//   const cleanFirstName = capitalize(firstName);
//   const cleanLastName = capitalize(lastName);
//   return `${cleanFirstName} ${cleanLastName}`;
// }
// console.log(formatDisplayName('  ava', 'STONE  '));
// console.log(formatDisplayName('nOAh', '  kim'));
// console.log(formatDisplayName('  mINA  ', 'pATEL'));
