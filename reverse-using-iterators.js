// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (reverse) => {
    var i;
    var rev_str = "";
    // var str = prompt("Please enter the string", "default");
    var strsplit = reverse.split("");
    var strlen = reverse.length;
    for (i = strlen-1; i >= 0; i--) {
        rev_str = rev_str + strsplit[i];
    }
    return(rev_str)
};

module.exports = reverse;
