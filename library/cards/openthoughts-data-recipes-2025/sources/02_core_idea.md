The one-sentence contribution is: turn reasoning-SFT curation into a controlled experimental surface, select a source/filter/sampling/teacher recipe from those experiments, and release its 1.2M QwQ-32B traces together with the Qwen2.5-7B-Instruct student.

The final data and feedback contract is mixed:

| Stage | Behavior or object | Feedback / terminal rule | What the rule cannot establish |
|---|---|---|---|
| Source ablation | Train matched 31.6k-example students from alternative sources and mixtures | Average downstream benchmark performance | Intrinsic rights, provenance, or correctness of each source item |
| Prompt selection | Candidate questions | GPT-4o-mini difficulty for code; GPT-4.1-mini response length for math/science | Whether the generated answer will be correct, faithful, or executable |
| Deduplication / decontamination | Selected prompts | Exact deduplication where applicable; reject normalized Indel similarity ≥75% or any shared tokenizer-level 13-gram with evaluation prompts | Paraphrastic or semantic contamination |
| Answer generation | Sixteen QwQ-32B responses per selected question | Successful generation; no final semantic-correctness filter | Correct reasoning, final-answer correctness, or absence of teacher artifacts |
| Student training | Full assistant reasoning-and-answer message | Token-level SFT loss over the answer-level message | A separate process reward or terminal environment success |

The feedback can rank sources by the behavior of a particular Qwen2.5-7B-Instruct student, label prompt difficulty/length, and detect specified lexical overlap. It cannot certify row-level answer correctness, reasoning faithfulness, legal reusability, or semantic decontamination. Inclusion therefore means “survived the construction pipeline and was successfully generated,” not “verified correct.”

The work continues the Sky-T1/OpenThoughts-114K/OpenThoughts2-1M line but changes the emphasis from one release heuristic to a broad, controlled recipe study spanning math, code, and science. It should also be read beside Bespoke-Stratos-17k, OpenCodeReasoning, and work on advancing math-data synthesis: those releases share teacher-trace distillation or domain-specific construction concerns, whereas OpenThoughts makes cross-stage ablations and scale curves the main object of study.

The direction signal is a recipe-and-audit view of reasoning data: source choice, prompt selection, repeated sampling, and teacher/student interaction are treated as measurable variables, while the final release reveals how easily open artifacts can still lack row-level verification, rights reconciliation, rejection evidence, and secret-safe configuration.
