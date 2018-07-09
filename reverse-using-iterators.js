// The intent of this file is to s the string using iterators (for, foreach)
const reverse = (s) => {
  let i;
  let revStr = '';
  // let str = prompt("Please enter the string", "default");
  const strsplit = s.split('');
  const strlen = s.length;
  for (i = strlen - 1; i >= 0; i = i - 1) {
    revStr += strsplit[i];
  }
  return (revStr);
};

module.exports = reverse;
