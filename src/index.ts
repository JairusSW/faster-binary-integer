import Long from "long";

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

const I64_MAX_VALUE = Long.fromString("9223372036854775807");
const I64_MIN_VALUE = Long.fromString("-9223372036854775808");

const U64_MAX_VALUE = Long.fromString("18446744073709551615");
const U64_MIN_VALUE = 0;

export function setUint8(buffer: Array<number>, value: number, byteOffset: number = 0): void {
    buffer[byteOffset] = value;
}
export function setInt8(buffer: Array<number>, value: number, byteOffset: number = 0): void {
    if (value < 0) {
        // I think this is faster than flipping the bits and adding one for 2s complement
        buffer[byteOffset] = 256 + value;
    } else {
        buffer[byteOffset] = value;
    }
}
export function setUint16(buffer: Array<number>, value: number, byteOffset: number = 0, littleEndian: boolean = true): void {
    if (littleEndian) {
        buffer[byteOffset] = value & 0x00FF;
        buffer[byteOffset + 1] = value >>> 8;
    } else {
        buffer[byteOffset] = value >>> 8;
        buffer[byteOffset + 1] = value & 0x00FF;
    }
}
export function setInt16(buffer: Array<number>, value: number, byteOffset: number = 0, littleEndian: boolean = true): void {
    if (littleEndian) {
        if (value < 0) {
            //const v = 32768 + value;
            buffer[byteOffset] = value & 0x00FF;
            buffer[byteOffset + 1] = (~value >>> 8) ^ 0x00FF;
        } else {
            buffer[byteOffset] = value & 0x00FF;
            buffer[byteOffset + 1] = value >>> 8;
        }
    } else {
        buffer[byteOffset + 0] = value >>> 8;
        buffer[byteOffset + 1] = value & 0x00FF;
    }
}
export function setUint32(buffer: Array<number>, value: number, byteOffset: number = 0, littleEndian: boolean = true): void {
    if (littleEndian) {
        buffer[byteOffset] = value & 0x00FF;
        buffer[byteOffset + 1] = (value >>> 8) & 0x00FF;
        buffer[byteOffset + 2] = (value >>> 16) & 0x00FF;
        buffer[byteOffset + 3] = value >>> 24;
    } else {
        buffer[byteOffset] = value >>> 24;
        buffer[byteOffset + 1] = (value >>> 16) & 0x00FF;
        buffer[byteOffset + 2] = (value >>> 8) & 0x00FF;
        buffer[byteOffset + 3] = value & 0x00FF;
    }
}
export function setUint64Long(buffer: Array<number>, value: Long, byteOffset: number = 0, littleEndian: boolean = true): void {
    if (littleEndian) {
        buffer[byteOffset] = value.and(0x00FF).toInt();
        buffer[byteOffset + 1] = value.shiftRightUnsigned(8).and(0x00FF).toInt();
        buffer[byteOffset + 2] = value.shiftRightUnsigned(16).and(0x00FF).toInt();
        buffer[byteOffset + 3] = value.shiftRightUnsigned(24).and(0x00FF).toInt();
        buffer[byteOffset + 4] = value.shiftRightUnsigned(32).and(0x00FF).toInt();
    } else {
        buffer[byteOffset + 4] = value.and(0x00FF).toInt();
        buffer[byteOffset + 3] = value.shiftRightUnsigned(8).and(0x00FF).toInt();
        buffer[byteOffset + 2] = value.shiftRightUnsigned(16).and(0x00FF).toInt();
        buffer[byteOffset + 1] = value.shiftRightUnsigned(24).and(0x00FF).toInt();
        buffer[byteOffset] = value.shiftRightUnsigned(32).and(0x00FF).toInt();
    }
}
export function getUint8(buffer: Array<number>, byteOffset: number = 0): number {
    return buffer[byteOffset]!;
}
export function getUint16(buffer: Array<number>, byteOffset: number = 0, littleEndian: boolean = true): number {
    if (littleEndian) {
        return (buffer[byteOffset + 1]! << 8) | buffer[byteOffset]!;
    } else {
        return (buffer[byteOffset]! << 8) | buffer[byteOffset + 1]!;
    }
}
export function getInt16(buffer: Array<number>, byteOffset: number = 0, littleEndian: boolean = true): number {
    if (littleEndian) {
        return (buffer[byteOffset + 1]! << 8) | buffer[byteOffset]!;
    } else {
        return (buffer[byteOffset]! << 8) | buffer[byteOffset + 1]!;
    }
}
export function getUint32(buffer: Array<number>, byteOffset: number, littleEndian: boolean = true): number {
    if (littleEndian) {
        return (buffer[byteOffset] + (buffer[byteOffset + 1] << 8) + (buffer[byteOffset + 2] << 16) + (buffer[byteOffset + 3] << 24)) >>> 0;
    } else {
        return ((buffer[byteOffset]! << 24) >>> 1) + ((buffer[byteOffset + 1]! << 16) | (buffer[byteOffset + 2] << 8) | buffer[byteOffset + 3]);
    }
}