# Reading notes

- **Positioning:** SciInstruct fills missing scientific worked solutions; it is not a pretraining-corpus paper.
- **Method handle:** generate, outcome-check, reflect, reveal the answer, then quality-rank is the decisive causal chain.
- **Data handle:** the public record is `content`, `summary`, and `subject`; the paper reports 254,051 math, science, and Lean instructions.
- **Evidence anchor:** the same ChatGLM3-6B base moves from 40.34 to 45.32 combined science-plus-math average after SFT.
- **Reuse decision:** use only with per-record provenance, stage-stratified step audits, and explicit overlap checks added.
