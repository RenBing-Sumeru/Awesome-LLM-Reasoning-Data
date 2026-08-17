1. Positioning: CodeJudgeBench audits code judges, not code generators, through verified good-versus-bad response pairs.
2. Method handle: collect frontier outputs, verify correctness, remove one-sided tasks, then randomize a good/bad pair.
3. Artifact handle: the official 6,363-row dataset release exposes codegen, repair, and testgen fields under Apache 2.0; the paper's benchmark subset has 5,352 pairs.
4. Evidence anchor: Gemini-2.5-Pro falls from 98% on JudgeBench code to 81% on this CodeGen task.
5. Reuse decision: test both orders and prompt forms before ranking responses; first validate labels with an independent execution harness.
