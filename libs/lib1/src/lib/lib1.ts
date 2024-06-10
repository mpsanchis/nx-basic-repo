import { HELLO } from "@nx-basic/commons";

export function modifyTitle(title: string): string {
  return `${HELLO} ${title}`;
}
