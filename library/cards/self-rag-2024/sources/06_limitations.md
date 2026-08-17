# Limitations

- **Curator audit risk:** GPT-4 supplies the original reflection judgments and the 7B critic distills them, so critic agreement is not independent proof that a passage is relevant or a claim is supported. Reuse should compare token labels with expert or entailment-based audits on a stratified sample.
- **Curator audit risk:** the 150K release mixes eleven instruction sources and retrieved passages under source-specific terms, while the paper reports no complete semantic decontamination table. Build a component license ledger and measure prompt, answer, and passage overlap against every target evaluation.
- **Curator audit risk:** when no retrieved passage meets the relevance-and-support preference, construction may retain a sampled weaker passage. Audit these fallback records separately because they can teach confident critique tokens around inadequate evidence.
