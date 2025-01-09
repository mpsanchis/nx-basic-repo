import { Tree } from "@nx/devkit";
import { createTreeWithEmptyWorkspace } from "@nx/devkit/testing";

import update from "./modify-all-readmes-async";

describe("migrator", () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
  });

  it("should add a new line to root readme in repo", async () => {
    // given
    tree.write("README.md", "root readme");

    // when
    await update(tree);
    const newReadme = tree.read("README.md", "utf-8");

    // then
    const newReadmeLines = newReadme.split("\n");
    expect(newReadmeLines[1]).toEqual("secondline");
  });
});