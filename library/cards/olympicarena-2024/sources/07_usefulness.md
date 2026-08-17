OlympicArena is useful as a schema and harness reference for multi-discipline expert reasoning benchmarks. Preserve id, problem, prompt, figure URLs, answer, answer type, unit, answer sequence, type sequence, test cases, subject, language, modality, split, source competition, model output, extraction result, scoring method, and submission timestamp.

It is also useful as an audit checklist for heterogeneous feedback contracts: separate rule-based math/science scoring, code execution, model-based judging, hidden leaderboard evaluation, and process-step evaluation. The same paper can support evaluation-surface design, data-leakage checks, and analysis of visual versus text-only reasoning.

For atlas use, it pairs naturally with OlympiadBench: OlympiadBench is narrower and math/physics-heavy; OlympicArena is broader, includes CS code-generation tests, and exposes validation/test infrastructure. Both should remain evaluation-only unless a separate training-data audit is completed.
