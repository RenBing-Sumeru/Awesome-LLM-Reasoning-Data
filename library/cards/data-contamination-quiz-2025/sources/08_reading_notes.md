1. Positioning: DCQ estimates verbatim benchmark leakage from a model's recognition choice, without corpus, weights, or logits.
2. Method handle: generate four word variants, find non-preferred positions with BDQ, then permute the original through BCQs.
3. Artifact handle: the Apache-2.0 repository ships scripts, input CSVs, intermediate outputs, and contamination reports for paper settings.
4. Evidence anchor: under 100% injected MeetingBank contamination, GPT-3.5 DCQ reports 85.87–87.00%, while replication reports 1%.
5. Reuse decision: suitable for black-box audits; first inspect perturbation fidelity and remeasure every target model's position bias.
