Newly collected benchmark items can still encode knowledge already present in a model's training set, inflating evaluation; manual refresh is also expensive. AntiLeakBench automatically constructs question-answering benchmarks from real-world facts that changed after a declared model cutoff.

It uses updated Wikidata claims and post-cutoff Wikipedia revisions to build evidence-grounded single-hop and multi-hop items. The paper is an evaluation-contamination audit, not a method for detecting whether a particular model trained on a particular document.
