Inputs are official contest PDFs or exam materials, image assets, extracted text, and reference solutions or answers. The construction pipeline is:

1. Collect math and physics problems from International Olympiads, Chinese Olympiads, and difficult GaoKao sections.
2. Use Mathpix OCR to parse PDFs, then manually inspect, clean, revise, and deduplicate records with LLM-assisted similarity checks.
3. Annotate problem type, subfield, answer type, and progressive-problem context when later physics questions depend on earlier material.
4. Package data into categorized files whose names encode open-ended versus theorem proving, multimodal versus text-only, subject, language, and competition or GaoKao origin.
5. Run model inference with prompt templates that expose the answer type and required final-answer format but do not add hidden knowledge-point hints.
6. Score automatic-scoring-available open-ended items through the official evaluator; theorem-proving items receive sampled manual analysis rather than full automatic verdicts.

Outputs are benchmark records, model outputs, answer-level scores, and error analyses. The verifier uses floating-point comparison for numeric values, SymPy-style symbolic equivalence for expressions/equations, and elementwise comparison for intervals and tuples. Reproducibility requires pinning the dataset version, prompt template, model access date, evaluator code revision, tolerance policy, and whether multimodal images are supplied to the tested model.
