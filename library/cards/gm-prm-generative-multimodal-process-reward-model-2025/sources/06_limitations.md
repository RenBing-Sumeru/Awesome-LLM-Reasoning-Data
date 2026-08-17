Strong VLMs can misread images and rationalize errors. OCR, geometry, and dense tables are high-risk. Reuse should audit by image type and avoid treating one correction as uniquely correct.

These limitations directly affect reuse: verifier false positives convert erroneous steps into positive supervision, while false negatives remove difficult but valuable processes. Before reuse, labels should be audited by task type, error position, and source, with agreement, unverifiable rates, duplication, and replayability reported under fixed tool or environment versions.
