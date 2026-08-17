PubMedQA is useful as a compact biomedical reasoning evaluation surface. It gives a clear schema for tasks where the passage is fixed, the answer space is small, and the scorer is deterministic.

When reusing it, keep the PMID, question, abstract context, removed conclusion or long answer provenance, final label, subset name, split name or split script, and scorer version. Also record whether any weakly labeled or artificial examples were used for training, because that changes the interpretation of test performance.

It is a good audit example for separating benchmark evidence from training data. PQA-L supports answer-level evaluation; PQA-U and PQA-A can support pretraining or augmentation experiments, but they should not be collapsed into a single "PubMedQA score" without describing their different supervision contracts.
