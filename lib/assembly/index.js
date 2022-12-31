"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeu64 = exports.encodei64 = exports.encodeu32 = exports.encodei32 = exports.encodeu16 = exports.encodei16 = exports.encodeu8 = exports.encodei8 = void 0;
function encodei8(data) {
    store(0, data);
}
exports.encodei8 = encodei8;
function encodeu8(data) {
    store(0, data);
}
exports.encodeu8 = encodeu8;
function encodei16(data) {
    store(0, data);
}
exports.encodei16 = encodei16;
function encodeu16(data) {
    store(0, data);
}
exports.encodeu16 = encodeu16;
function encodei32(data) {
    store(0, data);
}
exports.encodei32 = encodei32;
function encodeu32(data) {
    store(0, data);
}
exports.encodeu32 = encodeu32;
function encodei64(data1, data2) {
    store(0, data1);
    store(4, data2);
}
exports.encodei64 = encodei64;
function encodeu64(data1, data2) {
    store(0, data1);
    store(4, data2);
}
exports.encodeu64 = encodeu64;
