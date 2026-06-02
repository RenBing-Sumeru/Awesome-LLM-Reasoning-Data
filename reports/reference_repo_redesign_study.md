# Reference Repo Redesign Study

Phase A checked on 2026-06-01 before rewriting the README. Scope: visual and information-architecture patterns only; no category copying.

## Sources studied

- Awesome Dataset Distillation: https://github.com/Guang000/Awesome-Dataset-Distillation
- Awesome LLM Post-training: https://github.com/mbzuai-oryx/awesome-llm-post-training
- Awesome LLM Reasoning: https://github.com/atfortes/Awesome-LLM-Reasoning
- mlabonne/llm-datasets: https://github.com/mlabonne/llm-datasets
- Awesome LLM Reasoning Failures: https://github.com/Peiyang-Song/Awesome-LLM-Reasoning-Failures
- Awesome LLM: https://github.com/Hannibal046/Awesome-LLM
- Microsoft Generative AI for Beginners: https://github.com/microsoft/generative-ai-for-beginners
- Microsoft AI Agents for Beginners: https://github.com/microsoft/ai-agents-for-beginners

## What to copy

| Reference | Useful pattern | Translation for this repo |
|---|---|---|
| Awesome Dataset Distillation | Badge row, short concept primer, Latest Updates, detailed contents, paper/code/BibTeX affordances, maintained-resource feel | Add a strong badge strip, a 60-second explainer, dated updates, and compact paper entries with emoji labels. |
| Awesome LLM Post-training | Taxonomy figure above the lists, section/subsection map, date/venue-like scannability | Put a verifier-anchored taxonomy near the top and organize the README by use case rather than dumping papers. |
| Awesome LLM Reasoning | Clean survey/analysis/technique separation and year-grouped entries | Keep reasoning context visible, but route broad method coverage to paper pages so the homepage remains data-first. |
| mlabonne/llm-datasets | Practical "what makes a good dataset" framing before dataset links | Add build and audit checklists before full atlas links, emphasizing licenses, verifier contracts, and training use. |
| Awesome LLM Reasoning Failures | Paper-companion style, taxonomy visual, BibTeX, structured failure categories | Treat audit and verifier failure as first-class README sections, not an appendix. |
| Awesome LLM | Broad entry-point feel, related resources, timeline/trending rhythm | Use a friendly front door with starter paths and latest updates while staying narrower than generic LLM coverage. |
| Microsoft beginner courses | Lesson table, clear learning path, Learn/Build/Check orientation | Present docs as a mini-course with beginner, builder, auditor, and agent-data routes. |

## What to avoid

- Do not become a generic LLM post-training or reasoning-method list.
- Do not imply completeness or ranking authority.
- Do not copy categories from dataset distillation or generic LLM lists.
- Do not add guessed paper/code/data links. Unknown metadata should stay unknown and route to `reports/needs_search.md`.
- Do not make the README a giant paper dump; route the long atlas to `data/papers.yaml`, `docs/assets/entries.json`, and future `papers/` pages.

## README design decisions

- Lead with identity, badges, hero visual, and the repository promise.
- Use the core mental model: `task/context -> trace/actions -> answer/artifact -> verifier/reward/judge/environment -> metadata`.
- Put Latest Updates near the top so the repo feels alive even while many entries still need metadata.
- Use a contents table with emoji labels and direct local links.
- Include a starter pack of 20 papers with only links already present in local data or public reference pages.
- Expose the category map, construction stack, verifier audit, agent trajectory audit, scaling audit, cards, contribution, and citation sections.
- Keep caveats explicit: this is a living atlas with partial metadata, not a definitive leaderboard.
