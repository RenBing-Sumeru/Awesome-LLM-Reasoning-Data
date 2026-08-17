正式论文记录来自 NeurIPS 2025 proceedings，arXiv:2510.04081 提供完整正文与 appendix。本卡还检查了官方 GitHub 仓库 commit `ceb525c57a9fea22dd2d0cf84bfc9dc2f5169375`，以及 2026 年 7 月 21 日可见的官方 Hugging Face dataset revision `664f036126e9b82533c769b74ef27c7c0ccd1398`。元数据保留正式会议页面给出的作者顺序。

Caco 处理的是 reasoning-data construction 的扩展难题。改写已有问题通常只改变表面形式，仍保留原有 reasoning pattern；让大语言模型同时发明新问题和解答，则缺少可靠的 correctness anchor。Caco 把可执行 Python 程序作为中间 reasoning object：先把来源解答统一为程序，再学习一个不接收问题 prompt 的程序生成器，执行并过滤新程序，最后反向构造自然语言问题与解答。

当前 release 只有一个 Hugging Face `train` split，共 1,348,799 行。每行包含四个字符串字段：`instruction`、`output`、`answer` 与 `code`。`instruction` 是反向构造的问题；`output` 是自然语言 chain of thought 与最终回复；`answer` 是抽取出的最终答案；`code` 是用于反向构造该指令的可执行 Code CoT。单一文件 `cacov2_1.3M.jsonl` 大小为 3,130,228,421 bytes，LFS SHA-256 为 `919050aa7495d1811999c1ff0f7eec1675abaf061ffa5eedddc96168d8d5e946`。没有发布 validation/test split。

来源 mixture 包括 MATH（7.5K）、DeepScaleR（40K）、BigMath（251K）与 KodCode（40K）。Qwen2.5-72B-Instruct 把其中的解答转换到共同程序模板；execution 与可用 answer check 留下 146K 个 seed program，其中报告为 122K math 与 24K algorithmic/code record。随后，无条件 Qwen2.5-Coder-7B generator 采样约 5.3M 个程序，结构与执行过滤保留约 4.6M，再经过 problem reversal、language-solution generation 与最终检查，得到公开的 1.3M 规模 corpus。

它直接属于 `data_construction_open_release_recipes`：论文明确给出 data object、synthesis stage、feedback layer、规模 funnel、SFT 用法与开放 artifact。`partial` 状态同样关键。发布物缺少逐行 source/parent lineage、execution log、逐阶段 decision、rejected candidate、完整 generation/reversal/judge code 与 decontamination evidence；因此，虽然最终记录和部分过滤/训练辅助代码已开放，仍不能完整复现或审计构造过程。
