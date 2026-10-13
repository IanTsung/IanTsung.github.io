import { describe, expect, it } from "vitest";
import { buildProfileContext } from "./profile-context.js";
import { experiences, techStack } from "./profile.js";

describe("buildProfileContext", () => {
  it("is deterministic (prompt cache depends on it)", () => {
    expect(buildProfileContext()).toBe(buildProfileContext());
  });

  it("includes every experience entry", () => {
    const ctx = buildProfileContext();
    for (const e of experiences) {
      expect(ctx).toContain(e.company);
      expect(ctx).toContain(e.title);
    }
  });

  it("lists tech stack titles without UI-only fields", () => {
    const ctx = buildProfileContext();
    for (const items of Object.values(techStack)) {
      for (const i of items) expect(ctx).toContain(i.title);
    }
    expect(ctx).not.toContain("#E34F26");
    expect(ctx).not.toContain("html5-plain");
  });

  it("renders from injected data", () => {
    const ctx = buildProfileContext({
      twinNotes: {
        name: "Test",
        headline: "h",
        summary: "s",
        careerStart: 2020,
        languages: ["English"],
        github: "g",
        contact: "c",
      },
      experiences: [],
      education: { degree: "BSc", school: "Uni", location: "X", period: "2019" },
      certifications: [],
      techStack: { Backend: [{ title: "Go" }] },
    });
    expect(ctx).toContain("# Test");
    expect(ctx).toContain("- BSc, Uni, X (2019)");
    expect(ctx).toContain("- Backend: Go");
  });
});
