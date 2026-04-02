import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, it, expect, beforeAll } from "vitest";

const filePath = resolve(
  import.meta.dirname,
  "../getting-started.mdx"
);

let content: string;

beforeAll(() => {
  content = readFileSync(filePath, "utf-8");
});

describe("getting-started.mdx – invitation caution aside", () => {
  /**
   * PR change: "サーバー管理者" → "サーバー管理" (招待に必要な権限)
   * The word 者 was removed, so the required permission for invitation is
   * now "サーバー管理" (Manage Server), not "サーバー管理者" (Server Admin).
   */

  it("contains the updated invitation permission text (サーバー管理)", () => {
    expect(content).toContain(
      "Bot の招待には、そのサーバーの **サーバー管理** 権限が必要です。"
    );
  });

  it("does NOT contain the old invitation permission text (サーバー管理者)", () => {
    // Regression: the old text incorrectly used サーバー管理者 for invitation.
    expect(content).not.toContain(
      "Bot の招待には、そのサーバーの **サーバー管理者** 権限が必要です。"
    );
  });

  it("contains the new second line clarifying that 管理者 is required for normal operation", () => {
    expect(content).toContain(
      "ただし、Botの正常な動作には **管理者** 権限が必要です。"
    );
  });

  it("both permission levels are mentioned in the caution aside", () => {
    // Extract the Aside block content
    const asideMatch = content.match(
      /<Aside type="caution">([\s\S]*?)<\/Aside>/
    );
    expect(asideMatch).not.toBeNull();
    const asideContent = asideMatch![1];

    // Invitation requires "サーバー管理"
    expect(asideContent).toContain("サーバー管理");
    // Normal operation requires "管理者"
    expect(asideContent).toContain("管理者");
  });

  it("the caution aside contains exactly two distinct permission requirements", () => {
    const asideMatch = content.match(
      /<Aside type="caution">([\s\S]*?)<\/Aside>/
    );
    expect(asideMatch).not.toBeNull();
    const asideContent = asideMatch![1];

    const boldPermissions = asideContent.match(/\*\*[^*]+\*\*/g) ?? [];
    // Should have **サーバー管理** and **管理者**
    expect(boldPermissions).toHaveLength(2);
    expect(boldPermissions).toContain("**サーバー管理**");
    expect(boldPermissions).toContain("**管理者**");
  });

  it("the caution aside type attribute is preserved", () => {
    expect(content).toContain('<Aside type="caution">');
  });
});

describe("getting-started.mdx – frontmatter and structure", () => {
  it("has valid YAML frontmatter block", () => {
    expect(content).toMatch(/^---\n[\s\S]+?\n---/);
  });

  it("includes the Astro Starlight component import", () => {
    expect(content).toContain(
      'import { Aside, Steps, Card, CardGrid } from "@astrojs/starlight/components";'
    );
  });
});