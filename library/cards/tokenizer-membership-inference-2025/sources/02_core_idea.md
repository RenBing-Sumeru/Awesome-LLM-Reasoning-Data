The core idea is to use tokenizer construction as a measurable trace of corpus membership. A target tokenizer vocabulary, candidate dataset, and auxiliary datasets form one audit instance. The strongest methods either compare distinctive vocabulary overlap with shadow tokenizers trained on candidate data or estimate whether a candidate is needed for distinctive tokens to enter the target vocabulary.

The detector outputs a membership score and applies a threshold; experiments report AUC and TPR at fixed FPR rather than a learned reward. The official Apache-2.0 repository releases training, attack, defense, and evaluation scripts. This is a tokenizer-level contamination/privacy audit, best compared with output-based LLM MIAs and data-contamination detectors.

It explicitly separates tokenizer membership from full-model corpus attribution.
