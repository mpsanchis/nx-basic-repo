import { globAsync, logger, Tree} from "@nx/devkit";
import { addSecondLine } from "./add-second-line";

export default async function update(tree: Tree) {
  const readmeFilesAsync = await globAsync(tree, ["**/README.md"]);

  logger.info(`readme files found: ${readmeFilesAsync}`);

  for (const readmePath of readmeFilesAsync) {
    const readmeContent = tree.read(readmePath, "utf-8");
    const newContent = addSecondLine(readmeContent);

    tree.write(readmePath, newContent);
  }
}