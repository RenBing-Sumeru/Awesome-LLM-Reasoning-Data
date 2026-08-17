# Method

Step 1 - Assemble source questions.
Input: 260K public image-question-answer records from mathematics, figure understanding, word problems, medicine, science, and natural-world VQA.
Operation: Preserve each image, task instruction, and reference answer as a search problem.
Output and transition: A multimodal question becomes a CoMCTS root.
Check / stop rule: Appendix A's six source groups must sum to 260K and each root needs a usable reference answer.

Step 2 - Expand collectively.
Input: The selected root or incomplete reasoning prefix and four policy models.
Operation: GPT-4o, Qwen2-VL-7B, Llama-3.2-11B-Vision-Instruct, and Qwen2-VL-72B each generate one candidate continuation to a terminal answer.
Output and transition: Diverse child paths are added to one question-dependent tree.
Check / stop rule: Skip expansion when the selected node is already terminal.

Step 3 - Score, prune, and select.
Input: New candidate nodes, their prefixes, and the same four models acting as judges.
Operation: Average the model judgments, prune nodes below threshold `t=0` and their descendants, backpropagate value/visit statistics, and choose the surviving leaf with highest UCB.
Output and transition: The chosen leaf starts the next iteration.
Check / stop rule: Stop when a correct path is found or after 20 iterations; otherwise repeat expansion.

Step 4 - Serialize effective and reflective paths.
Input: A successful path `Y` and its tree containing positive and negative siblings.
Operation: Retain `Y`; for reflection data, sample a positive node, select its lower-UCB negative sibling, and insert the negative node, a rethink prompt, and the corrected positive node.
Output and transition: `{Q,Y,S}` or `{Q,Y,Y_reflect,S}` becomes an SFT target, with only 15K questions contributing reflection targets.
Check / stop rule: A reflection record must preserve the final correct path; an unsuccessful search is not admitted.

Step 5 - Train and evaluate consumers.
Input: Mulberry-260K and Qwen2-VL, LLaVA-NeXT, or Llama-3.2-Vision base models.
Operation: Run two-epoch collective SFT on effective and reflective targets, then evaluate on eight visual reasoning benchmarks.
Output and transition: Mulberry checkpoints and benchmark results.
Check / stop rule: Fixed task graders determine final correctness; the paper does not add an RL stage.

**Reproducibility:** verify the NeurIPS/arXiv paper, GitHub search/training code, Apache-2.0 Hugging Face JSON/image files, and released checkpoints. Fix all four teacher revisions, prompts, threshold, UCB constant, maximum 20 iterations, source manifests, random reflection sampling, and SFT hyperparameters. Generation temperature, UCB constant, complete token/cost ledger, semantic decontamination, and a reusable train/validation split are not disclosed.
