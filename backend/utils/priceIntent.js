module.exports = (query) => {
  const match = query.match(/(\d+)\s?k/);
  if (match) return parseInt(match[1]) * 1000;
  return null;
};
