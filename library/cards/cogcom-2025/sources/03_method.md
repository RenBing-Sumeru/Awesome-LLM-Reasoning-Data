# Method

Step 1 - Select source tasks and define operations.
Input: Image-question-answer triples from TextVQA, ST-VQA, and TDIUC, plus graphical math tasks from MathVista and ChartQA.
Operation: Define OCR, Grounding, CropZoomIn, Counting, Calculate, and Line as atomic manipulations and retain the source golden answer as the terminal target.
Output and transition: Each source item becomes an image, question, answer, and manipulation vocabulary ready for planning.
Check / stop rule: Exclude tasks without a stable answer or an operation/evidence path that can be represented in the CoM schema.

Step 2 - Generate linguistic plans.
Input: The question, manipulation definitions, five manually written demonstrations, the output schema, and GPT-4-turbo.
Operation: Ask the language annotator to write stepwise manipulation calls and descriptions while leaving tool results as variables.
Output and transition: A symbolic sequence of operations and dependencies becomes the skeleton of an execution tree.
Check / stop rule: Every step must name an operation, parameters or referenced variables, and a result slot; malformed plans do not proceed to visual execution.

Step 3 - Execute visual operations and search paths.
Input: The image, symbolic plan, GroundingDINO, PaddleOCR, and local implementations of derived crop, count, and calculation operations.
Operation: Instantiate possible boxes, text, images, or numbers, branch on alternative results, and traverse the resulting tree with depth-first search.
Output and transition: Positive paths preserve concrete visual returns and end at the source golden answer; negative branches are omitted from the released training chain.
Check / stop rule: Keep only paths whose final manipulation returns the golden answer; separately audit overly large boxes because answer agreement does not prove every intermediate result.

Step 4 - Add expert math and serialize training targets.
Input: MathVista/ChartQA items, ten experts, automatic positive paths, and the multi-turn VQA adapter.
Operation: Experts write both reasoning and manipulation results for math items; all chains are segmented around derived images into multi-turn image-question-response demonstrations.
Output and transition: About 70K automatic and 7K expert math chains become trainable multi-turn, multi-image records; the current release exposes 80,827/6,998 records plus 4,518 test items.
Check / stop rule: Verify expert results, cap image turns for memory limits, and preserve source/split identity so test chains are not consumed as training data.

Step 5 - Train and evaluate the consumer.
Input: The CoM records, other VQA/grounding/chat mixtures, and a CogVLM-style 17B model.
Operation: Apply staged next-token training, retaining KV memory across turns so later text can condition on earlier images and manipulation outputs; evaluate VQA, grounding, math, hallucination, and CoM-test chain quality.
Output and transition: CogCoM checkpoints and controlled with/without-CoM comparisons test whether the released traces add value.
Check / stop rule: Hold non-CoM data, backbone, and training settings fixed for the data ablation; report token/time overhead and do not treat final-answer accuracy as step-level faithfulness.

**Reproducibility:** verify the ICLR/arXiv paper, official repository, CC-BY-SA-4.0 dataset revision, image archive, and actual Parquet/JSONL schema. Pin source benchmark versions, five demonstrations, GPT-4 snapshot, visual-model checkpoints, manipulation code, DFS rule, answer normalization, split mapping, turn cap, and training mixture. API tokens/cost, complete failed branches, semantic decontamination, component-rights reconciliation, and independent step-accuracy statistics are not fully disclosed.
