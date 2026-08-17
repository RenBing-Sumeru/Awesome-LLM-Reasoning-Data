Zebra-CoT serializes both textual thoughts and intermediate images so a model can learn to generate visual aids during multi-step reasoning. Relative to text-only visual-question reasoning traces, it changes the reusable target to question, text reasoning trace, final answer, problem image, and one or more intermediate reasoning images and makes task answer checks, renderer consistency, domain-specific validity rules, and held-out evaluation the feedback boundary, so the central contribution is Track 01 data rather than a model-only, verifier-only, or benchmark-only artifact.

Google Scholar citations: 51（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Zebra-CoT%3A+A+Dataset+for+Interleaved+Vision-Language+Reasoning&author=Ang+Li&hl=en）

Open dataset: yes
Dataset name: Zebra-CoT
Official URL: https://huggingface.co/datasets/multimodal-reasoning-lab/Zebra-CoT
Scale: 182,384 interleaved vision-language reasoning traces across 18 domains and more than 50 tasks
Record form: question, text reasoning trace, final answer, problem image, and one or more intermediate reasoning images
File / storage format: multi-configuration Parquet records with image assets
Domains / languages: geometry, physics, algorithms, 2D and 3D reasoning, embodied planning, logic, games, and visual search
Construction and filtering: task-specific renderers and multimodal teachers create interleaved text and intermediate images; task answer checks, renderer consistency, domain-specific validity rules, and held-out evaluation
License / access constraints: CC-BY-NC-4.0
Intended use: visual chain-of-thought SFT
