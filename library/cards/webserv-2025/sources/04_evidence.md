Evidence ledger for material claims:

- **Identity and revision.** arXiv abstract page and v2 PDF: arXiv:2510.16252, first submitted 17 October 2025, revised 17 May 2026; v2 title and thirteen-author list.
- **Earlier venue record.** NeurIPS 2025 virtual page and OpenReview note YHcHQY8TIY: MTI-LLM workshop poster, earlier browser-server title, eight authors.
- **Observation/action contract.** Paper Sections 3.2–3.3 and Appendices A–B: DOM filtering, semantic identifiers, five-part text observation, optional screenshot, browser primitives, and network-aware waiting.
- **Isolation and scaling.** Paper Section 3.4 and Table 2: Incus block-level copy-on-write; 1.78 s versus 8.963 s launch, 28.01 MiB versus 6.78 GiB storage, 1.74 versus 1.63 GiB memory, and 200+ concurrent containers.
- **Evaluation surface.** Paper Section 4.1: 110 Shopping, CMS, and GitLab tasks from WebArena-Lite.
- **RL throughput.** Paper Section 4.3.1: maximum 512 rollout instances, 64 H200 GPUs, 32 rollout workers, about 12 minutes per step, 200 rollouts per step, averages of 11 turns and 77k tokens per trajectory.
- **Training recipe.** Paper Section 4.3.2, Table 5, and Appendix C: Claude 4.5 Sonnet SFT for three epochs, Qwen3-4B/Qwen3-30B-A3B, GRPO dynamic filtering, step-99 reporting, and optimizer/sampling hyperparameters.
- **Explicit paper limitations.** v2 PDF Limitations: text mode drops spatial layout, the work focuses on environment rather than RL-algorithm innovation, and large-scale production-site experiments are absent.
- **Public release inventory.** Paper footnote and anonymous repository README/file API: environment/evaluator/training code, MIT LICENSE, and two SFT data parts; no stable public GitHub or Hugging Face release was confirmed.
- **Released SFT selection.** dependencies/rl_web_agent/scripts/convert_to_sft.py: only successful, positive-score sessions with reasoning are retained; failure and score fields are not serialized.
- **Reward implementation.** web_agent/generate.py and dependencies/rl_web_agent/rl_web_agent/evaluator.py: WebArena task score plus one flat -0.05 format/browser-error penalty; string, URL, and HTML evaluators.
- **Dataset inspection.** Byte-concatenating the two official SFT parts produced 726 valid records with top-level messages and tools, 3–69 messages per record, and 3,583 tool-observation turns. All records end with an assistant tool call; 303 end with terminate and 423 with another browser action. No reward, score, success, result, or task-id field appears in the released records.

