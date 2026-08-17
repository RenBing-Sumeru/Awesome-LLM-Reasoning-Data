Zero-to-CAD uses tool-using agents to synthesize, execute, repair, and validate nearly one million CadQuery construction programs without real trajectories. Relative to geometry-only CAD corpora and small executable-code datasets, it makes uuid, CadQuery file, topology counts, operation sequence, latencies, eight renders, STL, and STEP files the reusable target and uses isolated code execution, topology checks, geometric validation, and export validation as the feedback contract, so Track 01 is the correct category.

Google Scholar citations: 1（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Zero-to-CAD%3A+Agentic+Synthesis+of+Interpretable+CAD+Programs+at+Million-Scale+Without+Real+Data&author=Mohammadmehdi+Ataei&hl=en）

Open dataset: yes
Dataset name: Zero-to-CAD 1M
Official URL: https://huggingface.co/datasets/ADSKAILab/Zero-To-CAD-1m
Scale: 999,633 executable CAD construction sequences
Record form: uuid, CadQuery file, topology counts, operation sequence, latencies, eight renders, STL, and STEP files
File / storage format: Parquet metadata plus CadQuery source, operation JSON, images, STL, and STEP assets
Domains / languages: programmatic mechanical CAD generation
Construction and filtering: tool-using agents generate CadQuery code, inspect errors, consult documentation, and repair candidates; isolated code execution, topology checks, geometric validation, and export validation
License / access constraints: Apache-2.0
Intended use: CAD program generation SFT and agent training
