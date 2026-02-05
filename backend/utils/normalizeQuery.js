module.exports = (query) => {
  return query
    .toLowerCase()
    .replace("sastha", "cheap")
    .replace("sasta", "cheap")
    .replace("ifone", "iphone");
};
