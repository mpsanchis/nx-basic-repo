
export function addSecondLine(fileContent: string): string {
  const lines = fileContent.split("\n");

  return [
    lines[0],
    "secondline",
    lines.slice(1)
  ].join("\n");
}