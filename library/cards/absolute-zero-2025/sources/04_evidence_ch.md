下列模型结果均由作者报告，未经过独立复现。

| 问题 | 条件与结果 | 来源 |
|---|---|---|
| 主要 7B 系统报告了什么结果？ | AZR-Coder-7B 的 code average 为 61.6、math average 为 39.1、combined average 为 50.4；同表此前最高 combined 结果是 ORZ 的 48.6。 | 论文 Table 1、§4.2 |
| 报告增益是否随规模变化？ | Qwen2.5-Coder-3B、7B、14B 从 base 到 AZR 的 overall gain 分别为 +5.7、+10.2、+13.2。 | Appendix Table 5、§D.2 |
| 报告的消融中哪些组件有影响？ | 完整 AZR 的 combined score 为 46.8；deduction-only 为 43.3，去掉 induction 为 43.8，去掉 reference conditioning 为 43.8，仅训练 solver 为 45.4。 | 论文 Table 2、RQ7 |
| 公开 seed 计数是否符合论文设置？ | 论文规定每个初始 7B buffer 有 `64 × 4 = 256` 个有效样本；已检查的 deduction/abduction 与 induction 7B seed JSONL 都有 256 行。 | Appendix §A.1.1；固定仓库 `data/` |
| 报告了哪些统计证据？ | NeurIPS checklist 说明没有 error bar，并把 greedy evaluation 描述为 deterministic。 | 最终 PDF checklist item 7 |

Table 1 支持的是作者完整 AZR 训练与评测栈的性能主张。它没有隔离增益究竟来自任务生成、privileged executor output、proposer reward、role-relative normalization、模型规模、checkpoint 选择还是其他实现细节；也不能证明未发布的 self-play record 干净、新颖、安全或可复用。

消融结果提示，在作者设置中 induction、历史 reference 和 proposer 训练都有贡献，而仅训练 solver 仍保留部分增益。但论文没有用独立 RL 重跑、seed-level variance 或 error bar 量化训练稳定性。固定 checkpoint 上的 greedy decoding 可使评测确定，但不能消除在线任务生成、RL 优化或 checkpoint 选择中的随机性。

Artifact 证据比论文运行证据更窄。代码、seed 文件、五个 checkpoint 页面、项目样例和日志入口确实存在，但支撑这些表格的精确演化 buffer 与完整 proposer/solver episode 并未打包成不可变 release。
