import { modifyTitle } from "@nx-basic/lib1";

export function NxWelcome({ title }: { title: string }) {
  const modifiedTitle = modifyTitle(title);
  return (
    <h1>{modifiedTitle}</h1>
  );
}

export default NxWelcome;
