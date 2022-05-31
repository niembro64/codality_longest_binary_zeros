// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    var n_string = dec2bin(N);
    var max_length = 0;
    var one_length = 0;

    for (let i = 0; i < n_string.length; i++) {
        if (n_string[i] == "1") {
            max_length = max_length < one_length ? one_length : max_length;
            one_length = 0;
        } else {
            one_length++;
        }
    }
    return max_length;
}
