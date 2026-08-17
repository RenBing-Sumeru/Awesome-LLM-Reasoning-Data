# Limitations

- **Author-stated limitation:** SWIRES can get lost or hallucinate when an image is too complex for the model's visual understanding; audit failures by image complexity and compare no-search versus retracing outputs.
- **Curator audit risk:** the same teacher family writes rationales and judges conclusion alignment, so correlated mistakes can pass; sample intermediate captions/reasoning for independent human or model review.
- **Curator audit risk:** the paper does not report semantic decontamination across ten VQA sources and evaluation sets; compare image hashes, question text, and paraphrase embeddings before training or claiming transfer.
