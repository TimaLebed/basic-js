module.exports = function createDreamTeam(n) {
  if (!Array.isArray(n)) {
    return false;
  }

  const arr = [];

  for (let i = 0; i < n.length; i++) {
    if (typeof n[i] === 'string')  {
      arr.push(n[i].trim()[0].toUpperCase());
    }
  }

  return arr.sort().join('');
};