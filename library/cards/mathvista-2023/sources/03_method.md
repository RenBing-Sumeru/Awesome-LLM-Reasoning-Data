1. Inputs: existing multimodal QA and math-related visual datasets, plus three newly created datasets: IQTest, FunctionQA, and PaperQA.
2. Curation: convert heterogeneous examples into a unified image-question-answer format, remove or normalize incompatible fields, and annotate task, visual context, answer type, and reasoning requirement.
3. Split/use: release the benchmark through the project, GitHub, and Hugging Face dataset pages for evaluation of foundation models.
4. Model evaluation: run text-only LLMs with captions or OCR-style textual information where applicable and multimodal models directly on images; collect final answer strings.
5. Feedback contract: score model answers against references via official rules and answer extraction/normalization, including LLM-assisted extraction for open responses.
6. Reproducibility notes: pin the dataset version, split, image files, answer-extraction model/version, prompt format, OCR/caption pipeline, and whether a result uses testmini, test, or another leaderboard subset.
