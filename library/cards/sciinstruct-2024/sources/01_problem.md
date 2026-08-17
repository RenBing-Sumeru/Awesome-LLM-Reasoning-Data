# Problem

College-level science question banks often provide a final answer but no reusable derivation, while producing expert rationales manually is expensive. SciInstruct gathers science, mathematics, and Lean proof problems and converts missing solutions into worked instructions through answer-aware generation, reflection, and quality filtering.

The decision boundary is creation and selection of scientific rationale records, not scientific pretraining or a model-only report: each serialized question, worked response, and subject label is consumed by SFT, with known answers, GPT-4 outcome judgment, and a learned classifier providing feedback.

**L4 facts:** official NeurIPS 2024 Datasets and Benchmarks proceedings hash 02ee6b7295f720407b56c457b34c54d5; reported scale 254,051 instructions; open CC BY 4.0 data; `L4_carded` with one Track 01 category.
