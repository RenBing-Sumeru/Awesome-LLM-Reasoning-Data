The authors construct atomic rationales from human checklist explanations and evaluate reward-model reasoning against them. They then form a hybrid reward that combines rationale consistency with outcome accuracy, and use the combined signal in group-relative policy optimization.

The construction keeps the judgement claim and the justification claim distinct: a reward model must make the right decision and substantiate it with matched reasons. That distinction lets the training objective penalize a plausible-looking explanation that does not correspond to the annotated evaluation basis.
