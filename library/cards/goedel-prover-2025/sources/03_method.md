Step 1:
Input: Numina informal problems and informal/formal pairs from Lean Workbook or Claude-generated annotations.
Operation: Train two Qwen2.5-Coder-32B formalizers so the same source problem can be expressed in different Lean styles.
Output and transition: Each informal problem receives candidate Lean 4 statements from both formalizers.
Check / stop rule: Discard candidates that do not compile with the proof replaced by `by sorry`.

Step 2:
Input: Compiling formal statements paired with their informal sources.
Operation: Ask Qwen2.5-72B-Instruct for four faithfulness/completeness judgments and compute the fraction marked appropriate.
Output and transition: Valid statements enter the 1.78M-statement expert-iteration pool.
Check / stop rule: Retain only statements with faithfulness/completeness score at least 0.5; drop a formalizer's outputs if none pass.

Step 3:
Input: The current formal-statement pool and DeepSeek-Prover-V1.5-RL for the initial round or the iter-k prover thereafter.
Operation: Sample 16 complete proofs per statement and compile every candidate in Lean.
Output and transition: Randomly retain one valid proof for each newly solved statement and add it to the cumulative SFT set.
Check / stop rule: A statement contributes supervision only when at least one sampled proof compiles.

Step 4:
Input: All accumulated statement-proof pairs.
Operation: Fine-tune DeepSeek-Prover-V1.5-Base, producing iter-(k+1), and repeat for eight expert iterations before evaluating under fixed Pass@N budgets.
Output and transition: The final SFT prover, public statement data, and 29,750 Lean Workbook proofs form the reusable bundle.
Check / stop rule: Track compiler-verified held-out performance and stop after the planned iteration budget; do not promote DPO/RL shortcuts as proof quality.
