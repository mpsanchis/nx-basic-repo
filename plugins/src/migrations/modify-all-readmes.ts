import { glob, Tree, logger} from "@nx/devkit";
import { addSecondLine } from "./add-second-line";

export default async function update(tree: Tree) {
  const readmeFiles = glob(tree, ["**/README.md"]);

  logger.info(`readme files found: ${readmeFiles}`);

  for (const readmePath of readmeFiles) {
    const readmeContent = tree.read(readmePath, "utf-8");
    const newContent = addSecondLine(readmeContent);

    tree.write(readmePath, newContent);
  }
}