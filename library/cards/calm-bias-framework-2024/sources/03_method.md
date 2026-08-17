1. Inputs: base evaluation examples, candidate responses or scoring prompts, a target bias definition, judge models, and output-parsing rules.
2. Perturbation: CALM applies automated, principle-guided modifications intended to introduce the bias cue while preserving the quality-relevant answer content.
3. Judging: the same or comparable judge model scores or compares the original and perturbed versions.
4. Measurement: score shifts, preference flips, or instability under the targeted cue are aggregated into bias indicators across tasks and models.
5. Output: per-bias and per-model bias measurements, qualitative examples, and recommendations for reliable LLM-as-a-Judge use.

The verifier is not an external truth oracle; it is a consistency audit over judge behavior under controlled perturbations. Reproducibility requires the exact source examples, perturbation templates or generation prompts, judge model versions, sampling parameters, score parser, bias metric formula, and any manual quality checks for semantic preservation.
