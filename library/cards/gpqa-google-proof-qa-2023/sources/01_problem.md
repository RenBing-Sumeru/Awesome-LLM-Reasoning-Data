GPQA provides 448 expert-written Google-proof science multiple-choice questions for scalable oversight and hard-domain reasoning evaluation. The primary sources are arXiv 2311.12022 and the official idavidrein/gpqa repository.

The concrete problem is how to evaluate systems on science questions that are hard even for skilled non-experts with web access. The decision boundary is expert-written multiple-choice evaluation, not an open-ended proof benchmark or training trace release.

The data object or evaluation surface is 448 multiple-choice questions written by domain experts in biology, physics, and chemistry, with gold answer options and validation metadata. This is useful for the atlas because it makes the feedback contract explicit: exact match against the gold multiple-choice answer.
