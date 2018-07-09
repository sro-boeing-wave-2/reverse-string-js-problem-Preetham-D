// The intent of this file is to reverse
// the string using built in functions.
const reverse = (reverse) => {
    var strsplit = reverse.split("");
    var strrev = strsplit.reverse();
    var strjoin = strrev.join("");
    return(strjoin);
};

module.exports = reverse;
