export const prettify = (v: unknown): string => {
  switch (typeof v) {
    case "string":
      return `"${v}"`;
    case "number":
      return v.toString();
    case "object":
      return JSON.stringify(v);
    case "function":
      return v.toString();
    default:
      return String(v);
  }
};

export const nothings = [null, undefined];
export const empties = [NaN, 0, "", [], {}];
export const values = [1, "value", [1, 2], { a: 1 }, () => true, () => false];

export const id = <T>(t: T): T => t;
