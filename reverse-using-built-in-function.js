// The intent of this file is to s
// the string using built in functions.
const reverse = (s) => {
  const strsplit = s.split('');
  const strrev = strsplit.reverse();
  const strjoin = strrev.join('');
  return (strjoin);
};

module.exports = reverse;
