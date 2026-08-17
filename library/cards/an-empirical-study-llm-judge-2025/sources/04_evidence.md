Claim — high in-domain judge scores do not demonstrate format-robust evaluation ability.

Setup — the authors cross-evaluated four released fine-tuned judges on one another’s tests and MT-Bench, comparing them with GPT-3.5 and GPT-4 after only minimal prompt adaptation. JudgeLM-test, PandaLM-test, and Auto-J-test use pairwise selection, whereas Prometheus-test uses pointwise grading.

Result — each judge was strongest on its native scheme, but transfer degraded sharply: JudgeLM-7B obtained 82.39% accuracy on JudgeLM-test yet 48.7% on Prometheus-test; Prometheus-13B reached Pearson 0.864/0.869 on its own in-/out-of-domain test, but only 24.58% accuracy on JudgeLM-test. GPT-4-1106 remained comparatively stable, scoring 84.24%, 75.78%, and 56.9% on the three pairwise tests.

Boundary — this establishes failure for the four studied checkpoints and adaptations, not a universal impossibility result for every training recipe or future judge.

The comparison controls the released checkpoint and changes the evaluation contract, so it supports a transfer-risk finding rather than attributing every difference to parameter count or data volume.
