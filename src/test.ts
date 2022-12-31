import Long from "long";
import * as LEB128 from ".";

const U64_MAX_VALUE = Long.fromString("18446744073709551615");
const arr = new Array(1);
const num = -10309;
LEB128.setInt16(arr, num, 0);
console.log(arr);

for (const n of arr) {
    console.log(n.toString(2))
}
console.log(num.toString(2))