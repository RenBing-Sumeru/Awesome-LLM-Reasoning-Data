Inputs are crowd-authored twin-style commonsense sentences, two candidate referents, answer labels, and split metadata. The official release format is JSONL with fields such as `qID`, `sentence`, `option1`, `option2`, and `answer` for labeled splits; separate `.lst` files hold labels for train and dev in version 1.1.

The construction pipeline is:

1. Crowd workers write WSC-inspired twin sentences, primed by randomly selected WikiHow anchor words and constrained by length and word-overlap guidelines.
2. Three separate validators answer each question and check that one option is clearly plausible and that the local context alone does not make the answer obvious.
3. Validated examples are embedded with a RoBERTa model fine-tuned on a small subset.
4. AFLite repeatedly trains random-partition linear classifiers over the embeddings and removes high-confidence, easy-to-predict examples.
5. The release exposes multiple training sizes, dev labels, unlabeled test questions, sample submission format, and an evaluation script for dev accuracy and normalized learning-curve AUC.

Outputs are benchmark splits, labels for non-test splits, a hidden-label test protocol, and reported baseline scores. The verifier is not semantic proof of commonsense: it is exact agreement with the released or leaderboard-held label. Reproducibility requires pinning version 1.1, the selected train subset, model prompt or fine-tuning scaffold, prediction-file column order, and whether evaluation is dev-script accuracy or leaderboard test accuracy.
