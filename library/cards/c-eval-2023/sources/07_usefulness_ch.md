可把 C-Eval 当作静态中文考试 benchmark，也可作为答案键评测 schema 的参考。应保留 question id、subject、level、split、prompt template、options、official answer、model raw output、normalized option、correctness 和 evaluation date。

对 atlas 来说，C-Eval 是带简单 verifier 的 multilingual benchmark surface。它也是污染审计清单项：任何中文能力模型评测都应说明 C-Eval 记录是否出现在预训练、指令微调、benchmark tuning 或 eval-set selection 中。
