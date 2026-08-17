The strongest evidence is artifact-level. NVIDIA publishes BF16 weights and separate FP8 and NVFP4-QAD checkpoints, Nemotron VLM Dataset V2, and NVPDFTex within NVIDIA-NeMo/Curator. The dataset card enumerates 51 released subdatasets and 8,147,599 samples, documents human-, Qwen-, GLM-, rule-, public-, and synthetic-processing tags, and explains when media is bundled versus separately acquired. This verifies a substantial release, but not the complete training mixture.

Three quantitative disclosures do not reconcile automatically:

- The paper reports consumption by five stages, with deliberate reuse between stages.
- The model card inventories 39,486,703 samples across 270 datasets and 27.7 TB: 24,544,290 public, 463,687 private, 368,946 crawled/scraped, and 14,109,780 self-sourced synthetic samples.
- The public release contains 8,147,599 samples across 51 subdatasets. Its composition table totals 4,470.46 GB, while its quantification section reports 4,301.82 GB.

Stage ablations provide evidence for scheduling effects. LiveCodeBench falls from 70.0 before broad multimodal SFT to 50.9 after Stage 1, then returns to 69.8 after Stage 3; RULER falls from 77.9 to 8.8 and reaches 72.1 after Stage 4. Vision results remain mostly stable around the recovery stages. These measurements support the authors' motivation for capability-repair stages, but they do not validate individual labels, provenance, licensing, or decontamination.

Evaluation spans 45 multimodal benchmarks in seven categories plus text tasks, inference-budget experiments, EVS efficiency ablations, image-processing ablations, and quantization comparisons. They are behavior evidence under reported settings, not evidence that the released rows equal all training rows or that the data are correct.
