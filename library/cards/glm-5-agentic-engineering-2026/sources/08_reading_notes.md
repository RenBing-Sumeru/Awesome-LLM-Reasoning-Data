- Read Sections 2.2–2.3 first for the broad pretraining families, three mid-training context stages, and issue–PR corpus. Then read Sections 3.1–3.5 as five distinct post-training contracts: three-family SFT, four-domain Reasoning RL, asynchronous Agentic RL, General RL, and cross-stage distillation. Do not collapse them into one “post-training dataset.”

- Sections 4.1–4.2 are the most important for agent-data research. Track the boundary between message-list normalization, TITO token capture, environment observations, model-token loss masks, trajectory rewards, and stale/failure filtering. Note which mechanisms are architectural descriptions and which have released artifacts.

- Read evaluation tables together with Section 6 and Appendix B. Record the harness beside every number: OpenHands for SWE-bench, Terminus-2 or Claude Code for Terminal-Bench, tool/context policy for BrowseComp, Gemini 3 Pro judging for MCP-Atlas, and internal tests plus Agent-as-a-Judge for CC-Bench-V2.

- Keep three ledgers while reading: training environments, evaluation scaffolds, and deployment tools. The report's strongest contribution is pipeline visibility; its largest weakness is the absence of record-level data, rewards, overlap audits, and lineage.
