Many hallucination detectors output only response-level labels and cannot identify error spans, types, or corrections. Different NLG tasks also use incompatible taxonomies, limiting transfer across summarisation, QA, and dialogue, while separate detection, localisation, and correction stages compound errors.

HAD defines an eleven-category cross-task taxonomy and trains one model to perform detection, span localisation, and correction in a single inference process.
