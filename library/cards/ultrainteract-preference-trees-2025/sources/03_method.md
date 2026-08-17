# Method

Step 1 - Select difficult, checkable instructions.
Input: Twelve math, coding, and logic datasets with answers, rationales, tests, or other ground-truth signals.
Operation: Retain diverse task forms, emphasize questions that GPT-3.5-Turbo fails, and stratify or difficulty-filter MathQA, NumGLUE, and TabMWP as described in Appendix A.1.
Output and transition: 85,918 instruction roots enter preference-tree construction with their source labels and oversight material.
Check / stop rule: A source must support a stated reasoning pattern and, except Magicoder-Evol-Instruct, objective correctness checking; otherwise it is not used for preference pairs.

Step 2 - Generate diverse correct and incorrect actions.
Input: An instruction, a sampled CoT or modular-programming schema, GPT-3.5-Turbo as the default actor, alternative open actors, tools, and ground-truth annotations.
Operation: The actor decomposes the problem and writes marked text or code actions; the pipeline samples 20 actions per attempt, retries up to three rounds with stronger actors, and then uses task-specific ground-truth access to elicit remaining hard correct actions.
Output and transition: Syntax-valid candidate actions, including at least one correct action when construction succeeds, are available for pairing and branch expansion.
Check / stop rule: Dataset answers, test cases, or execution decide correctness; Python syntax failures are removed, and GPT-4 Turbo judgments on Magicoder records are not treated as rigorous preference labels.

Step 3 - Expand failed actions into a preference tree.
Input: A paired correct and incorrect action plus the interaction history.
Operation: A Python environment returns output or traceback and a binary correctness signal; GPT-4 receives the history and ground-truth reference, locates the error, and writes a critique before the actor retries from the failed branch.
Output and transition: Each instruction accumulates a root-to-leaf interaction trajectory and turn-level correct/incorrect branches.
Check / stop rule: A correct action closes its branch, an incorrect action may continue, and construction stops after at most five turns.

Step 4 - Filter, decontaminate, and serialize training records.
Input: Completed trees, source metadata, correctness labels, and evaluation test sets.
Operation: Export correct actions and correct-ending trajectories to the SFT schema, export paired branches to the preference schema, exact-match LeetCode, run 8-gram matching on other same-task tests, and remove overlaps.
Output and transition: Public Parquet releases expose 288,579 SFT rows and 219,522 preference rows in their current revisions.
Check / stop rule: Only objectively accepted actions enter preference pairs; current file schemas and one SFT row must be readable, and the unexplained release-versus-paper count delta remains an audit note.

Step 5 - Train and compare Eurus consumers.
Input: Mistral-7B or CodeLLaMA-70B, UltraInteract correct actions, and a smaller UltraChat/ShareGPT/OpenOrca mixture.
Operation: Run one SFT epoch, then optionally apply DPO, KTO, or NCA to the preference data and train a reward model on UltraInteract plus companion feedback datasets.
Output and transition: Eurus SFT/preference models, Eurus-RM-7B, and fixed reasoning, instruction-following, and multi-turn evaluation results.
Check / stop rule: Benchmark accuracy or success rate measures the consumers; the SFT data ablation must compare the full recipe with ground-truth replacement, open-source-only, and UltraInteract-only variants.

**Reproducibility:** verify the ICLR/OpenReview record, the exact Hugging Face revisions, both Parquet schemas, the twelve source revisions, prompt templates, actor and critique model versions, ground-truth adapters, syntax/decontamination scripts, and one-epoch mixture. Fix actor sampling order, 20-action attempts, five-turn cap, SFT mixture sizes, learning rates, and benchmark splits. Actor temperatures, total generation cost, per-source license reconciliation, the cause of the 1,600-row SFT count delta, and a step-level semantic audit are not disclosed.
