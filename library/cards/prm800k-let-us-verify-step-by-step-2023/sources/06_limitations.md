# 06 Limitations

Correctness is only relative to the annotation instructions, annotator judgments, and answer grader. A positive step label does not prove a formal derivation, and a final correct answer does not prove every intermediate step is valid. The dataset is built around MATH problems and generated solutions, so transfer to other domains or to formal proof checking is not automatic.

The official repository is archived and uses large LFS data files; exact data version and split choices must be pinned. The paper uses a nonstandard MATH test split because part of the original test set was in the training distribution. Public release creates contamination risk. The release provides data and tooling, but not a complete reproduction of every internal model, sampling run, or annotation operation.
