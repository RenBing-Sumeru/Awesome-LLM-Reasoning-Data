1. Inputs: task prompt, initial model response or reasoning, domain label, source dataset, and reference answer or judging criterion.
2. Pipeline: evaluate generation, request critique of the response/reasoning, request correction, and compare corrected output against task-specific references or scoring rules.
3. Outputs: generation result, critique text, corrected answer, domain/task metadata, and GQC metrics.
4. Feedback: benchmark labels, answer keys, domain metrics, and model-judgment procedures where disclosed determine scores; there is no universal executable verifier.
5. Reproducibility: pin dataset version, prompt templates, sampled model responses, evaluated model version, decoding settings, scoring scripts, and whether a result is self-critique or inter-model critique.
