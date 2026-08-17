SCALE uses self-generated structure as an allocation signal. It samples eight decompositions, asks a model to choose one, scores every selected sub-problem in [0,1] with prior context, and compares that score with a threshold. Scores above the threshold use System 2; the rest use System 1. Each later step receives preceding steps and solutions as context.

Feedback is mixed. Outline quality and difficulty are model self-evaluations; the terminal filter is final-answer agreement with LIMOPro; benchmark evaluation is answer accuracy and token-derived metrics. A score is not a verified process label, and final-answer agreement cannot validate all intermediate reasoning.

Compared with CoT, InftyThink, and majority voting, the operative change is within-problem routing rather than uniform reasoning depth or whole-answer sampling. The release supplies fields needed to inspect the selected trace, but not all evidence needed to audit why an outline was selected or how much each route cost.
