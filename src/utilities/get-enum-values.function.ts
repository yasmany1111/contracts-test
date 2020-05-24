export function getEnumValues<T = string>(enumType: { [key: string]: T }): T[] {
  const rawValues: any[] = Object.values(enumType);
  let parsedValues: T[];
  
  if (rawValues.every(v => typeof v === 'string')) {
    parsedValues = rawValues;
  } else {
    parsedValues = rawValues.filter(v => typeof v === 'number');
  }
  
  return parsedValues;
}
