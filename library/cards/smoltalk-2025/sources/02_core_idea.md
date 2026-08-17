SmolTalk combines inherited and newly generated conversations under one message schema, then tunes source weights through ablations and manual mixture review. Relative to using existing small instruction sets without a data-centric mixture study, it changes the reusable target to messages with role and content, plus a source label and makes subset-specific filtering, source balancing, benchmark decontamination, and manual mixture refinement the feedback boundary, so the central contribution is Track 01 data rather than a model-only, verifier-only, or benchmark-only artifact.

Google Scholar citations: 308（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=SmolLM2%3A+When+Smol+Goes+Big+-+Data-Centric+Training+of+a+Small+Language+Model&author=Loubna+Ben+Allal&hl=en）

Open dataset: yes
Dataset name: SmolTalk
Official URL: https://huggingface.co/datasets/HuggingFaceTB/smoltalk
Scale: about 1.1 million instruction-response conversations
Record form: messages with role and content, plus a source label
File / storage format: multi-configuration Parquet records
Domains / languages: primarily English chat, mathematics, code, rewriting, constraints, and everyday instruction following
Construction and filtering: source annotations and synthetic teachers write assistant turns; subset-specific filtering, source balancing, benchmark decontamination, and manual mixture refinement
License / access constraints: new subsets are Apache-2.0; inherited subsets retain their upstream licenses
Intended use: SmolLM2 instruction SFT
