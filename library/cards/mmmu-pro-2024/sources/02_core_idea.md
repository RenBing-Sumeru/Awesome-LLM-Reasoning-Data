The contribution is a harder MMMU successor that reduces shortcut solving by adversarially filtering text-only solvable questions and adding a vision-only setting. The core mechanism is not a new model; it is a benchmark construction and evaluation protocol that changes the information available to the model.

The evaluation surface is a multi-discipline multimodal QA item with domain metadata, visual context, and an official target answer. The feedback contract is answer-level scoring through the released benchmark evaluator or answer key, with aggregate accuracy reported by model and subset.

Closest comparisons are MMMU and other multimodal academic QA benchmarks such as MathVista. The direction label is robust multimodal benchmark auditing: useful when the question is whether a model used visual evidence, not just whether it chose the right option.
