module.exports = function check(str, bracketsConfig) {
    // function check(str, bracketsConfig) {
    let bool = true;
    while (str.length != 0 && bool == true) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            let test = bracketsConfig[i].join('');
            if (str.includes(test)) {
                bool = true;
                str = str.replace(test, '');
                break;
            } else
                bool = false;
        }
    }
    return bool;
}
