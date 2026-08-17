# 03 Method

Inputs are questions intentionally written around common misconceptions, plus reference true answers and false answers. The construction pipeline groups questions into topical categories, checks that the false answer is plausible for people who hold the misconception, and supplies answer sets for open-ended generation and multiple-choice evaluation.

The outputs are benchmark records and model scores. In generation mode, a model produces free-form answers that are scored for truthfulness and informativeness. In multiple-choice mode, the model scores or selects among true and false answers, producing MC-style metrics. The verifier/judge layer is therefore mixed: human judgments are the strongest evidence, while learned judges and lexical/semantic metrics provide scalable approximations whose exact implementation matters.

The intended use is evaluation and audit, not SFT, preference learning, reward modeling, PRM, RLVR, or agent training. Artifacts to verify are the ACL page, arXiv page, official software/data release, DOI, license, benchmark CSV version, and any evaluator code used in a reported score. Reproducibility notes: pin prompt template, generation settings, multiple-choice formulation, learned-judge checkpoint or API, human annotation protocol, model date, and whether public TruthfulQA items may have appeared in training data.
