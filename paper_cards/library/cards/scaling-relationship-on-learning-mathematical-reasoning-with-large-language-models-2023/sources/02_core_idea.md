Studies rejection-sampling fine-tuning, where multiple generated math rationales are answer-checked and only correct paths become augmented SFT data.

Supervised LMs generate multiple candidate rationales and final answers for each problem. The feedback contract is: Final-answer correctness check retains correct reasoning paths. The terminal condition is: The generated final answer matches the task's expected answer under the paper's normalization procedure.
