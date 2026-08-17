Prior open reasoning-SFT releases had already demonstrated teacher-trace distillation, large synthetic corpora, verification heuristics, and student fine-tuning. Sky-T1 and the earlier OpenThoughts releases are direct precursors; Bespoke-Stratos-17k, OpenCodeReasoning, and math-data synthesis work provide nearby examples of domain-specific teacher-data construction. OpenThoughts does not introduce SFT, chain-of-thought distillation, LLM judging, lexical decontamination, repeated sampling, or scaling curves.

The concrete change is the experimental unit. Instead of presenting one opaque “high-quality data” mixture, the paper compares the following stages through repeated student training:

- question source and within-domain source mixing;
- prompt-quality proxies for code, math, and science;
- deduplication and repeated sampling of questions;
- several answer-verification/filtering strategies;
- teacher model choice;
- dataset scale up to 1.2M responses.

This makes the student trained from a fixed base model the utility probe for each curation choice. It also produces unusually useful negative evidence: more sources need not help, the tested GPT and unit-test answer filters can underperform unfiltered samples, and verification can help 32B-generated data while hurting 7B-generated data. The important novelty is not “verification is bad,” but that verifier benefit is empirically conditional on generator scale, filter design, sample count, and evaluation surface.

OpenThoughts3 also combines recipe disclosure with live code, data, model, and project artifacts. That is an engineering integration and scale contribution, not a new optimization algorithm. The final student is trained by conventional full SFT, and the released record is still a two-message answer-level object rather than a new process-supervision schema.

For reasoning-data research, the direction signal is that curation variables should be evaluated as interactions rather than universal quality rules. A source, judge, or filter is valuable only relative to a student, sampling budget, retained data scale, and benchmark set. Before transferring the recipe, reusers must remeasure those interactions on their own base model and target tasks.

The release also exposes a second novelty boundary: experimental transparency is not the same as reuse completeness. The paper is unusually detailed about ablations, yet the data still lacks row-level upstream IDs, rights, verifier outputs, failure records, and an immutable final-run manifest. The official repository's embedded credential makes security hygiene an additional first-class release criterion.
