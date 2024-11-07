export const transformObjectSemanticTokens = (object: Record<string, string>) => {
  const result: Record<string, { value: string }> = {};
  Object.entries(object).forEach(([name, value]) => {
      result[`${name}`] = { value };
  });
  return result;
};