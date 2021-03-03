module.exports = function reverse (n) {
  arr = String(n).split('').reverse();
  return arr.filter(el=>el!=="-").join('');
}
