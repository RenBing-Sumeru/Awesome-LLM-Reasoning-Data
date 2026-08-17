Orca 2 changes teacher imitation from copying one generic style to supervising task-conditioned strategy behavior: authors select a strategy, GPT-4 writes the corresponding answer trace, and Prompt Erasing removes the strategy instruction so SFT must learn both the behavior and when to invoke it. Compared with Orca 1's general explanation tuning, the closest change is the hidden task-strategy decision rather than a new optimizer.

Google Scholar citations: 259（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Orca+2%3A+Teaching+Small+Language+Models+How+to+Reason&author=Arindam+Mitra&hl=en）

Open dataset: no. The paper describes approximately 817K new Orca 2 training instances, but does not release those records, their file format, or a dataset license. The official entry at https://aka.ms/orca-lm provides model weights; weights are not a substitute for the underlying task-prompt-answer dataset.
