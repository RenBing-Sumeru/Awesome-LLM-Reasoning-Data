Step 1 — Assemble source medical QA.
Input: Training records from MedQA, MedMCQA, PubMedQA, MMLU, MedXpert, HuatuoGPT-o1, and medical HLE.
Operation: Select source training examples and preserve question, options where present, and ground-truth answer; reserve remaining MedXpert and HLE items for evaluation.
Output and transition: 55,071 candidate QA records enter entity extraction.
Check / stop rule: Do not use source test examples for generation; retain source identifiers so the mixture can be audited.

Step 2 — Map question and answer entities to PrimeKG.
Input: One question-answer pair, GPT-4o, and PrimeKG nodes.
Operation: Extract medical entities, search exact and semantic node candidates, and ask the teacher to choose the contextually relevant mapping.
Output and transition: Sets of mapped question and answer nodes enter graph search.
Check / stop rule: Drop QA records when either side lacks usable mapped entities; this reduces 55,071 candidates to 45,725 generatable examples.

Step 3 — Retrieve and prune thinking paths.
Input: Mapped question/answer nodes and the PrimeKG graph.
Operation: Find shortest paths for each node pair, then ask GPT-4o to keep up to three paths most relevant to the question.
Output and transition: A compact set of question-to-answer medical relations guides rationale writing.
Check / stop rule: Prefer shortest connections to limit overthinking; path relevance is teacher-judged rather than independently clinician-verified at this stage.

Step 4 — Generate and filter rationales.
Input: The question, original answer, selected KG paths, GPT-4o-0806, and the published generation/evaluation messages.
Operation: Generate a detailed medical explanation, then ask the teacher to answer the question using only that explanation and compare the result with the source answer.
Output and transition: Accepted records serialize source metadata, question, options, answer, paths, reasoning process, and conclusion into the public JSONL file.
Check / stop rule: Keep only answer-matching rationales; 32,682 of 45,725 generated records pass.

Step 5 — Train and evaluate consumers.
Input: MedReason records and 7B-8B instruction or reasoning models.
Operation: Run three SFT epochs at learning rate 5e-6 and batch size 128 with ZeRO-3, then evaluate common and challenging medical QA sets; clinicians also compare sampled rationales against HuatuoGPT-o1.
Output and transition: Fine-tuned models and accuracy/expert-preference evidence estimate data utility and explanation quality.
Check / stop rule: Use fixed benchmark splits and model-specific baselines; final-answer accuracy and small clinician samples do not prove every intermediate step is valid.

Reproducibility: Pin all seven source revisions and terms, PrimeKG snapshot, entity-retrieval embeddings, GPT-4o-0806 endpoint version 2024-12-01-preview, all generation/evaluation messages, answer normalizer, JSONL revision, SFT base checkpoint, and evaluation splits. The paper reports about $3,600 of API use and eight-GPU SFT, but not exact token totals, generation seeds, or complete cross-source deduplication.
