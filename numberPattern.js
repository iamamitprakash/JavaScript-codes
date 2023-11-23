function pattern(n) {
    for (let row = 1; row <= n; row += 1) {
        let str = "";
        let spaces = n - row;
        for (let i = 1; i <= spaces; i++) {
            str = " ";
        }
        let counter = 1;
        for (let j = 1; j <= row; j++) {
            str += counter;
            counter++;
        }
        let counter2 = row - 1;
        for (let k = 1; k <= row; k++) {
            str += counter2;
            counter2--;
        }
        console.log(str);
    }
}
pattern(4);