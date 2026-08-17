The strongest evidence is the machine-human gap measured on the new suite. Table 3 reports test-set baselines: CBoW averages 44.3, BERT averages 69.0, and BERT++ averages 71.5 on the main SuperGLUE score. The paper states that BERT++ still trails human performance by nearly 20 points on average, with the largest gap on WSC.

Task scale and scoring are explicit in Table 1: BoolQ, CB, COPA, MultiRC, ReCoRD, RTE, WiC, and WSC have published train/dev/test counts and distinct metrics. For example, MultiRC uses F1 over answer options and exact match over each question's answer set; ReCoRD uses F1/EM; CB reports accuracy and macro-F1.

The instance-level evidence is the reference label and task scorer, not a subjective judge. The evidence boundary is that these numbers are tied to the 2019 task release, official rules, BERT-style baselines, and private-test submission infrastructure; later model scores or prompt-only evaluations need their own scorer and contamination audit.
