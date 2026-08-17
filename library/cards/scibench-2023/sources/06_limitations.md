Correctness is relative to the released reference answer or solution and the evaluator version. A wrong score can come from answer normalization, numeric tolerance, unit conversion, equivalent symbolic forms, or a model answer that is correct but outside the parser's expected format.

Versioning is a central limitation. The repository says the dataset has minor changes and that the previous version lives on an `old` branch; the arXiv abstract and current project page report different best overall scores. Any comparison must state the data revision, evaluator revision, prompt setting, model date, and whether the text-only or multimodal subset was used.

The benchmark is public, so contamination is plausible for later models. Textbook-derived items may also carry reuse constraints beyond repository-level MIT metadata. The error-attribution protocol is diagnostically useful but not a stable process label because it depends on annotator summaries, LLM verifier behavior, prompt wording, and API/model versions.

SciBench measures static scientific problem solving. It does not certify research competence, experimental design, tool-use planning, data-analysis workflows, or safe scientific advice.
