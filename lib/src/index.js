"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUint32 = exports.getInt16 = exports.getUint16 = exports.getUint8 = exports.setUint64Long = exports.setUint32 = exports.setInt16 = exports.setUint16 = exports.setInt8 = exports.setUint8 = void 0;
const long_1 = __importDefault(require("long"));
const I8_MAX_VALUE = 127;
const I8_MIN_VALUE = -128;
const U8_MAX_VALUE = 255;
const U8_MIN_VALUE = 0;
const I16_MAX_VALUE = 32767;
const I16_MIN_VALUE = -32768;
const U16_MAX_VALUE = 65535;
const U16_MIN_VALUE = 0;
const I32_MAX_VALUE = 2147483647;
const I32_MIN_VALUE = -2147483648;
const U32_MAX_VALUE = 65535;
const U32_MIN_VALUE = 0;
const I64_MAX_VALUE = long_1.default.fromString("9223372036854775807");
const I64_MIN_VALUE = long_1.default.fromString("-9223372036854775808");
const U64_MAX_VALUE = long_1.default.fromString("18446744073709551615");
const U64_MIN_VALUE = 0;
function setUint8(buffer, value, byteOffset = 0) {
    buffer[byteOffset] = value;
}
exports.setUint8 = setUint8;
function setInt8(buffer, value, byteOffset = 0) {
    if (value < 0) {
        // I think this is faster than flipping the bits and adding one for 2s complement
        buffer[byteOffset] = 256 + value;
    }
    else {
        buffer[byteOffset] = value;
    }
}
exports.setInt8 = setInt8;
function setUint16(buffer, value, byteOffset = 0, littleEndian = true) {
    if (littleEndian) {
        buffer[byteOffset] = value & 0x00FF;
        buffer[byteOffset + 1] = value >>> 8;
    }
    else {
        buffer[byteOffset] = value >>> 8;
        buffer[byteOffset + 1] = value & 0x00FF;
    }
}
exports.setUint16 = setUint16;
function setInt16(buffer, value, byteOffset = 0, littleEndian = true) {
    if (littleEndian) {
        if (value < 0) {
            //const v = 32768 + value;
            buffer[byteOffset] = value & 0x00FF;
            buffer[byteOffset + 1] = (~value >>> 8) ^ 0x00FF;
        }
        else {
            buffer[byteOffset] = value & 0x00FF;
            buffer[byteOffset + 1] = value >>> 8;
        }
    }
    else {
        buffer[byteOffset + 0] = value >>> 8;
        buffer[byteOffset + 1] = value & 0x00FF;
    }
}
exports.setInt16 = setInt16;
function setUint32(buffer, value, byteOffset = 0, littleEndian = true) {
    if (littleEndian) {
        buffer[byteOffset] = value & 0x00FF;
        buffer[byteOffset + 1] = (value >>> 8) & 0x00FF;
        buffer[byteOffset + 2] = (value >>> 16) & 0x00FF;
        buffer[byteOffset + 3] = value >>> 24;
    }
    else {
        buffer[byteOffset] = value >>> 24;
        buffer[byteOffset + 1] = (value >>> 16) & 0x00FF;
        buffer[byteOffset + 2] = (value >>> 8) & 0x00FF;
        buffer[byteOffset + 3] = value & 0x00FF;
    }
}
exports.setUint32 = setUint32;
function setUint64Long(buffer, value, byteOffset = 0, littleEndian = true) {
    if (littleEndian) {
        buffer[byteOffset] = value.and(0x00FF).toInt();
        buffer[byteOffset + 1] = value.shiftRightUnsigned(8).and(0x00FF).toInt();
        buffer[byteOffset + 2] = value.shiftRightUnsigned(16).and(0x00FF).toInt();
        buffer[byteOffset + 3] = value.shiftRightUnsigned(24).and(0x00FF).toInt();
        buffer[byteOffset + 4] = value.shiftRightUnsigned(32).and(0x00FF).toInt();
    }
    else {
        buffer[byteOffset + 4] = value.and(0x00FF).toInt();
        buffer[byteOffset + 3] = value.shiftRightUnsigned(8).and(0x00FF).toInt();
        buffer[byteOffset + 2] = value.shiftRightUnsigned(16).and(0x00FF).toInt();
        buffer[byteOffset + 1] = value.shiftRightUnsigned(24).and(0x00FF).toInt();
        buffer[byteOffset] = value.shiftRightUnsigned(32).and(0x00FF).toInt();
    }
}
exports.setUint64Long = setUint64Long;
function getUint8(buffer, byteOffset = 0) {
    return buffer[byteOffset];
}
exports.getUint8 = getUint8;
function getUint16(buffer, byteOffset = 0, littleEndian = true) {
    if (littleEndian) {
        return (buffer[byteOffset + 1] << 8) | buffer[byteOffset];
    }
    else {
        return (buffer[byteOffset] << 8) | buffer[byteOffset + 1];
    }
}
exports.getUint16 = getUint16;
function getInt16(buffer, byteOffset = 0, littleEndian = true) {
    if (littleEndian) {
        return (buffer[byteOffset + 1] << 8) | buffer[byteOffset];
    }
    else {
        return (buffer[byteOffset] << 8) | buffer[byteOffset + 1];
    }
}
exports.getInt16 = getInt16;
function getUint32(buffer, byteOffset, littleEndian = true) {
    if (littleEndian) {
        return (buffer[byteOffset] + (buffer[byteOffset + 1] << 8) + (buffer[byteOffset + 2] << 16) + (buffer[byteOffset + 3] << 24)) >>> 0;
    }
    else {
        return ((buffer[byteOffset] << 24) >>> 1) + ((buffer[byteOffset + 1] << 16) | (buffer[byteOffset + 2] << 8) | buffer[byteOffset + 3]);
    }
}
exports.getUint32 = getUint32;
