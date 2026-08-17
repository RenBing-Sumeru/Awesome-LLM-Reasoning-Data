For the **Data Construction & Open Release Recipes** track, FoVer is a concrete pattern for turning deterministic or semi-deterministic tool outcomes into reusable process supervision, with several conditions on reuse.

- **PRM training:** use the aligned step labels and conversation fields for binary process-reward modeling, but pin a specific dataset revision and document whether the training loss uses all steps or only the balanced final step.
- **Verifier comparison:** compare local formal checks, end-to-end proof acceptance, rollout-based labels, and semantic LLM judges on the same traces. Preserve tool errors separately from logical false labels.
- **Construction research:** extend the recipe to other formal systems only after defining syntax acceptance, target-step context, dependency semantics, timeout policy, and a structured failure taxonomy.
- **Evaluation and test-time compute:** the trained PRMs can score step sequences and rank candidate solutions, but their transfer should be revalidated for each domain and aggregation rule. They are not ground-truth benchmark labels.
- **Release audit:** publish formalization pairs, every generation attempt, filter decision, verifier version and command, proof log, timeout, final mixture manifest, upstream revision, and license record.

Reuse class: suitable as a reference recipe and conditionally suitable for PRM training after version and semantic-fidelity checks; useful for Best-of-K experiments with domain-specific validation; unsuitable as an automatically clean evaluation set or as evidence that every informal source problem was formalized correctly.
