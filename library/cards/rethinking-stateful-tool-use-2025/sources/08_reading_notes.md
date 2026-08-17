Read the ACL paper's Sections 3–5 with Tables 2–5 and Appendices B–D. Table 2 is the reliable source for split counts; the nearby “33k turns” prose conflicts with 329,964 training turns. Table 7 defines state-aware actions, and the prompts show that missing arguments may be emitted as `?`. The results should be read as six component evaluations, not a single end-to-end success rate.

Before reuse, verify:

- official DialogTool/VirtualMobile release URL, immutable version, checksums, artifact license, and upstream SGD/MultiWOZ terms;
- exact source-record mapping, training/evaluation split construction, near-duplicate and contamination audit, and role-rewrite generator/review process;
- App/API schemas, databases, state serialization, reset/transaction/rollback semantics, exception handling, and generated-code sandbox;
- per-model prompt/version, temperature/top-p, seeds, retries, budgets, and complete successful/failed prediction retention;
- turn- and episode-level verifier definitions, recovery scoring, human/GPT-4o judge records, and reconciliation of published count inconsistencies.

Until those materials exist, preserve unknowns and treat VirtualMobile as a paper-described simulation rather than a verified public replay environment.
