Step 1 — Build task instructions.
Input: Training splits from four existing agent tasks plus operating-system and database domains without suitable instruction sets.
Operation: Reuse source training instructions where available; apply Task Derivation and GPT-4 Self-Instruct to create OS and database tasks and reference solutions.
Output and transition: A pool of 35,341 candidate task instructions enters environment interaction.
Check / stop rule: Keep derived instructions only when independent execution or reference-answer comparison is consistent; otherwise discard them.

Step 2 — Generate interaction demonstrations.
Input: One candidate instruction, a successful one-shot example, GPT-4-0613 or GPT-3.5-turbo-0613, and the task environment.
Operation: The teacher alternates a ReAct thought and one action with environment observations; GPT-4 adds thoughts to derived trajectories that originally lack them.
Output and transition: A conversation history with a final task reward is sent to filtering.
Check / stop rule: Stop on success, token limit, or three identical consecutive outputs; invalid action strings are aligned to available actions with BLEU.

Step 3 — Filter and serialize AgentInstruct.
Input: Generated conversations and task-specific reward functions.
Operation: Apply the completion threshold, preserve speaker turns and loss masks, and package accepted traces by domain.
Output and transition: Six public Parquet splits totaling 1,866 SFT demonstrations enter mixture training.
Check / stop rule: Require reward 1 for most tasks and reward >= 2/3 for Mind2Web; reject lower-scoring episodes.

Step 4 — Train and evaluate AgentLM.
Input: AgentInstruct, English ShareGPT conversations, and Llama-2-chat at 7B, 13B, or 70B.
Operation: Optimize the mixed next-token objective with an agent/general ratio chosen by grid search, then evaluate six held-in, six held-out, and four general tasks.
Output and transition: AgentLM checkpoints and controlled evidence about transfer and retained general ability.
Check / stop rule: Model selection uses held-in, held-out, and general-task behavior; the paper does not define a single automatic early-stop threshold.

Reproducibility: verify the ACL version, six Parquet revisions, source-task versions, GPT API snapshots, reward definitions, ShareGPT snapshot, mixture ratio, context truncation, and environment versions. Total teacher calls, token cost, random seeds for generation, and one aggregate compute budget are not reported.
