function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier) {
    return value * multiplier;
  } else {
    if (multiplier === 0) {
      return value * multiplier;
    } else {
      return value * 2;
    }
  }
}

function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
}
