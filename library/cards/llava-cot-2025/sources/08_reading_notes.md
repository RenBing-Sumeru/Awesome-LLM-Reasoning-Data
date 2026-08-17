# Reading notes

- **Positioning:** the main data contribution is 99k four-stage visual reasoning demonstrations, not SWIRES itself.
- **Method handle:** source VQA pair, GPT-4o staged writing, tag parsing, and semantic conclusion checking determine the released record.
- **Data/artifact handle:** public Apache-2.0 JSON records expose summary, caption, reasoning, and conclusion targets; upstream source terms still need review.
- **Evidence anchor:** ordered CoT reaches a 63.1 six-benchmark average versus 57.7 multi-task and 58.2 shuffled-stage supervision in Appendix Table 7.
- **Reuse decision:** use for staged multimodal SFT only after independent rationale, provenance, license, and decontamination audits.
