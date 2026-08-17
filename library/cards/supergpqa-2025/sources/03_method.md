Inputs are raw expert-level questions, source materials, annotator revisions, LLM responses, and metadata labels. The target instance is a multiple-choice QA record with exactly one correct option and discipline, field, subfield, and difficulty fields.

The pipeline is:

1. expert annotators select credible discipline-specific resources and raw questions;
2. annotators transcribe, translate, or revise questions into multiple-choice form and create distractors when needed;
3. automated and LLM-assisted checks test formatting, option completeness, answer uniqueness, field relevance, and likely ambiguity;
4. SOTA LLM responses and expert feedback identify questions that are too easy, suspicious, or unreliable;
5. expert annotators review suspicious candidates with access to external resources;
6. official inference scripts run models in zero-shot or five-shot modes depending on model type, and evaluation scripts parse responses and score answers.

Outputs are the Hugging Face dataset, evaluation code, leaderboard scores, and released model response/answer records. Reproducibility requires pinning dataset revision, prompt variant, evaluation mode, parser behavior, model snapshot, response records, and leaderboard date.
