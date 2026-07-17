Its central record couples a user request with one or more responses and an evaluation target, then asks the model to produce deep analysis, an adaptive rubric, detailed evaluation, scores, and a final judgement. The rubric is generated for the particular task rather than treated as a fixed checklist.

The data pipeline supplies this object at scale: MixReward has 64,528 preference examples in 103 languages and six domains, while the supervised release contains 35,749 distilled evaluation traces. This turns evaluation reasoning itself into trainable supervision.
