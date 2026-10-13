// Renders profile.js into the markdown knowledge base the AI twin reads.
// Pure + deterministic: the output must be byte-identical between requests
// so the Worker's prompt cache keeps hitting.
import {
  certifications,
  education,
  experiences,
  techStack,
  twinNotes,
} from "./profile.js";

export function buildProfileContext(data = {
  certifications,
  education,
  experiences,
  techStack,
  twinNotes,
}) {
  const n = data.twinNotes;
  const lines = [
    `# ${n.name}`,
    n.headline,
    "",
    n.summary,
    "",
    `- Working in software since ${n.careerStart}`,
    `- Speaks: ${n.languages.join(", ")}`,
    `- GitHub: ${n.github}`,
    `- Contact: ${n.contact}`,
    "",
    "## Experience",
  ];

  for (const e of data.experiences) {
    lines.push(
      `### ${e.title} — ${e.company} (${e.duration})`,
      e.description,
      `Skills: ${e.skills.join(", ")}`,
      ""
    );
  }

  const ed = data.education;
  lines.push(
    "## Education",
    `- ${ed.degree}, ${ed.school}, ${ed.location} (${ed.period})`,
    "",
    "## Certifications"
  );
  for (const c of data.certifications) {
    lines.push(`- ${c.title} — ${c.level} (${c.issuer})`);
  }

  lines.push("", "## Tech stack");
  for (const [category, items] of Object.entries(data.techStack)) {
    lines.push(`- ${category}: ${items.map((i) => i.title).join(", ")}`);
  }

  return lines.join("\n");
}
