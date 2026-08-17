The one-sentence contribution is: use a 405B instruction-tuned teacher, two complementary augmentation branches, and answer-level selection to turn GSM8K/MATH training seeds into an exact 13,972,791-row open SFT release, while measuring how format, teacher strength, filtering, diversity, and scale affect students.

The two construction branches are:

- **Solution augmentation:** keep an original GSM8K or MATH question and sample many alternative Llama-3.1-405B-Instruct solutions. The current official recipe requests 64 solutions per original GSM8K problem and 512 per original MATH problem.
- **Question-solution augmentation:** use five-shot prompts to generate related questions—10 per GSM8K seed and 80 per MATH seed in the current recipe—then sample 32 solutions per new question at temperature 0.7.

The answer-level feedback contract differs by branch:

| Problem type | Reference answer | Selection signal | Unobserved failure |
|---|---|---|---|
| Original GSM8K/MATH | Source ground-truth answer | Extracted final-answer agreement plus format/length rules | Invalid intermediate reasoning that lands on the correct answer |
| Augmented question | Most frequent surface-form answer among 32 teacher solutions | Top answer from non-null extractions; selected minimum vote threshold is **0** | No minimum consensus, equivalent forms may split votes, and a repeated wrong answer may win |
| New-question contamination | Four named benchmark test sets | Top-5 embedding retrieval and bidirectional 405B paraphrase judgments | False-positive/false-negative judge decisions and overlap with unlisted benchmarks |

“Majority vote” therefore means a mode over extracted surface forms, not a proof of correctness. The current aggregation code records `majority_votes` and `total_votes` internally, excludes null extractions, and selects `Counter(...).most_common(1)`; the public four-field rows omit these diagnostics. A threshold of zero means the inclusion rule does not require any fixed minimum agreement count.

The closest conceptual baselines are smaller open teacher-distillation datasets and one-branch solution augmentation. OpenMathInstruct-2 changes the scale and source diversity by adding approximately 592K synthesized questions and combining question diversity with many solutions. It does not introduce SFT, chain-of-thought distillation, nucleus sampling, final-answer checking, majority aggregation, or model-judge decontamination as standalone techniques.

The direction signal is that mathematical SFT utility is jointly controlled by representation, teacher, unique-question coverage, and pair count. The release also demonstrates an audit limit: a rich paper-level pipeline can collapse into a four-string row that no longer exposes the votes, rejected candidates, or selection path needed to evaluate that contract.
