1. Treat the task instruction (or translation source) and each response as separate inputs, and generate abstract concept skeletons.
2. Translate instruction and response to English so checklist generation uses the model’s stronger language setting.
3. Generate two descriptive, content-specific checklists in opposite directions, avoiding premature binary judgments.
4. Concatenate the checklists and ask Qwen2.5-7B-Instruct to provide feedback and a pointwise score or direct pairwise winner using original texts.
5. For pairwise evaluation, repeat the first stages for both responses before one comparison. Test on LitEval and MM-Eval; use Kendall’s Tau for pointwise ranking and accuracy for pairwise selection. Prompts and code are available; API translation behavior and exact runtime costs should be rechecked.

The final acceptance check is agreement with human labels or rankings, and the checklist itself is retained as the audit trail for a disputed decision.
