Nemotron-Math generates six supervision modes per source family and packages expected answers and provenance for long-context distillation. Relative to OpenMathReasoning on matched AoPS questions, it changes the reusable target to uuid, problem, expected answers, source, messages, majority-change flag, and use split and makes answer verification, majority-answer correction metadata, source curation, and matched downstream tests the feedback boundary, so the central contribution is Track 01 data rather than a model-only, verifier-only, or benchmark-only artifact.

Open dataset: yes
Dataset name: Nemotron-Math-v2
Official URL: https://huggingface.co/datasets/nvidia/Nemotron-Math-v2
Scale: 7.5 million solution traces over 85,000 AoPS and 262,000 Math StackExchange problems
Record form: uuid, problem, expected answers, source, messages, majority-change flag, and use split
File / storage format: Parquet records
Domains / languages: English competition and community mathematics, with optional Python tool use
Construction and filtering: gpt-oss-120b generates high, medium, and low reasoning modes with and without Python TIR; answer verification, majority-answer correction metadata, source curation, and matched downstream tests
License / access constraints: CC-BY-4.0 and CC-BY-SA-4.0 subsets
Intended use: long-context mathematical reasoning SFT
