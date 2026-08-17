# Limitations

- **Author-stated limitation:** only about 1M multi-image/video samples enter Stage 3 because of compute limits, leaving a gap to Qwen2-VL-7B; test reuse separately by modality instead of extrapolating single-image gains.
- **Curator audit risk:** InternVL2-Llama3-76B often both rewrites and judges a record, and the human-agreement check covers only 60 items; independently audit hallucinations by category and report false accepts.
- **Curator audit risk:** 153 upstream datasets create heterogeneous license and contamination boundaries; preserve source IDs/terms and run media, text, and semantic overlap checks against every evaluation set.
