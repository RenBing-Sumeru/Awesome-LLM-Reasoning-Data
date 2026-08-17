Inputs are Lean4 theorem developments, theorem declarations, extracted dependencies, ground-truth proof material, and prompts given to Lean-capable models. The output is a candidate Lean proof plus per-instance acceptance and theorem-level aggregate metrics.

The construction and evaluation pipeline is:
1. Select formalized classical theorem developments, yielding 83 theorem groups with parent theorems and supporting subtheorems.
2. Parse Lean4 source context, declarations, premises, and ground-truth proofs.
3. Build plain-main and premised task views, keeping enough context for Lean4 checking.
4. Ask models to produce Lean proof terms or tactics under a fixed prompt/scaffold and budget.
5. Compile candidate proofs in the pinned Lean4 environment and aggregate pass@k, fully proved parent theorem rate, subtheorem coverage, and token-efficiency.

The verifier is the Lean4 kernel/elaborator plus the benchmark harness around it. Reuse requires fixing arXiv version, dataset files, Lean4/mathlib versions, prompt template, timeout, sampling budget, kmax, and any postprocessing of generated proof text.
