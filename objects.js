function getKeys(obj) {
  return Object.keys(obj);
}
function getValues(obj) {
  return Object.values(obj);
}
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
function hasKey(obj, key) {
  return obj.hasOwnProperty(key);
}
function filterByValue(obj, threshold) {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value > threshold)
  );
}
module.exports = { getKeys, getValues, mergeObjects, hasKey, filterByValue };
