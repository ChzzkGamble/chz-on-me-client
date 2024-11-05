export const transformObjectSemanticTokens = (object: Record<string, string>) => {
  const result: Record<string, { value: string }> = {};
  Object.entries(object).forEach(([colorName, value]) => {
      result[`${colorName}`] = { value };
  });
  return result;
};