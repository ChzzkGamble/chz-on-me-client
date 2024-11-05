export const transformObjectTokens = (object: Record<string, Record<string, string>>) => {
  const result: Record<string, { value: string }> = {};
  Object.entries(object).forEach(([colorName, shades]) => {
    Object.entries(shades).forEach(([shade, value]) => {
      result[`${colorName}_${shade}`] = { value };
    });
  });
  return result;
};