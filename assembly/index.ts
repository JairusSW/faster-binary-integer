export function encodei8(data: i8): void {
  store<i8>(0, data);
}

export function encodeu8(data: u8): void {
  store<u8>(0, data);
}

export function encodei16(data: i16): void {
  store<i16>(0, data);
}

export function encodeu16(data: u16): void {
  store<u16>(0, data);
}

export function encodei32(data: i32): void {
  store<i32>(0, data);
}

export function encodeu32(data: u32): void {
  store<u32>(0, data);
}

export function encodei64(data1: i32, data2: i32): void {
  store<i32>(0, data1);
  store<i32>(4, data2);
}

export function encodeu64(data1: u64, data2: u64): void {
  store<i32>(0, data1);
  store<i32>(4, data2);
}
