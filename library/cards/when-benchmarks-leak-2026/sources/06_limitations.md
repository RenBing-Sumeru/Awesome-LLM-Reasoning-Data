DeconIEP is white-box: generating and applying the perturbation requires input embeddings and, during training, gradients. It is therefore not directly usable with closed APIs; test an approximation before treating it as an API-evaluation remedy.

It needs a same-architecture reference that is less contaminated. The paper finds stability up to 30% reference contamination, but warns that heavy contamination, distribution mismatch, or different alignment behavior can degrade results; audit the reference before deployment.

Bounded perturbations show high cosine similarity empirically, not a formal guarantee of preserved semantics or difficulty. It also adds generator and reference overhead, which must be measured for large evaluation runs. The experiments inject benchmark items during fine-tuning, which is a useful controlled condition but may differ from pretraining leakage, repeated web exposure, or unknown data mixtures in deployed models.
