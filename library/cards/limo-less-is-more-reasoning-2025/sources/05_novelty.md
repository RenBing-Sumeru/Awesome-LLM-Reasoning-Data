Prior work had already shown that supervised fine-tuning on mathematical reasoning traces can improve a capable base model, and that difficulty, teacher quality, and long-CoT examples matter. LIMO does not introduce SFT, distillation, solve-rate estimation, keyword heuristics, DeepSpeed ZeRO-3, or long-context evaluation.

The concrete change is the allocation of curation effort. Instead of keeping a large fraction of an open corpus, LIMO uses a multi-stage funnel:

- start from tens of millions of mixed mathematics questions;
- remove questions solved within four attempts by a 7B math model;
- retain a 1–3/32 success band under a 32B reasoning model;
- deduplicate against evaluation benchmarks;
- sample multiple solutions from three reasoning teachers;
- score surface characteristics associated with elaboration, self-checking, exploration, and connective structure;
- keep only 800 of 2,125 ranked question-solution pairs.

This reframes sample efficiency. The final SFT set is small, but the construction process is not: repeated model inference, multiple teachers, human examination, and a massive upstream pool are part of the recipe. “Less is more” therefore concerns loss-bearing demonstrations, not total data access, compute, or selection labor.

The paper also makes base-model knowledge an explicit precondition. The same 800 demonstrations work much better for Qwen2.5-32B-Instruct than Qwen1.5-32B-Chat, and the model-scale study spans 3B through 72B. The direction signal is conditional elicitation: strategically selected traces may unlock knowledge already encoded by pretraining, but they do not substitute for missing prerequisite knowledge.

What is new at the data-object level is limited. A released item remains `question` + `solution` + `answer`, and all process metadata is discarded. The lexical quality function is a ranking proxy rather than a learned process reward or mathematical verifier. Its 30% length term and keyword-frequency components can select verbose, stylistically self-reflective traces without verifying the steps.

Before reusing the result as a general recipe, researchers must separate final sample count from search cost, compare the score with length-controlled and step-verified alternatives, test transfer across bases, publish rejected candidates, and align the v2 dataset with the training repository. The 817-row v1/800-row v2 split and current repository mismatch are part of the novelty boundary, not incidental packaging details.
