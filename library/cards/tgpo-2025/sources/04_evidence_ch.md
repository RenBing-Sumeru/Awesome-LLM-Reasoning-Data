实验在 300 个 Online-Mind2Web 任务、136 个网站上使用 Browser-use 与 Qwen3-14B，并在 50 个 C-WebShop 任务上使用 SeeAct 与 Qwen2.5-VL-72B。所有对比优化方法均训练 2 epochs、使用 8 张 H20 GPU、learning rate 为 `1e-5`。论文没有披露 random seed 或 uncertainty interval，因此这些数值是单项研究中的作者报告结果，而不是独立复现估计。

Table 1 中，Online-Mind2Web 上 TGPO 的 success 为 38.4%，average steps 为 10.71，redundant steps 为 2.52；同表 DPO 分别为 34.0%、11.53 和 2.88。C-WebShop 上 TGPO 分别为 78.6%、8.66 和 0.97，DPO 分别为 72.1%、9.85 和 1.41。这些比较支持一个较窄结论：在论文设定下，TGPO 系统相对其 DPO 实现提高了成功率和交互效率。

Table 2 报告 raw trajectory label-conflict rate：Online-Mind2Web 为 38.71%，C-WebShop 为 26.95%。这一测量支持 node-level supervision 的动机：相同或 merged state 后的 action 可能位于 terminal outcome 不同的轨迹中。论文没有发布 denominator、冲突记录或 detection implementation，因此这些比例无法独立审计。

KTO-Tree ablation 在两个 dataset 上均优于 KTO。作为 curator interpretation，这一比较提供了一些证据，说明 tree-derived step label 的作用可以与 TGPO dynamic weighting 部分区分；但它没有完全隔离 state merging 与所有其他实现选择，而且底层 tree 与 label 不可用。

证据范围仅限两个 web-agent stack 和总计 350 个报告任务。当前没有代码、trajectory set、tree、process-reward record、chosen/rejected pair 文件、checkpoint、environment snapshot 或独立 rerun。论文也没有报告 state-merge precision/recall、VLM-judge calibration、alpha sensitivity、reward-weight robustness 或 train/evaluation overlap audit。

benchmark 结果不能证明派生数据质量高。它们测量的是作者未完整披露实现下的最终系统。判断数据质量还需要逐记录 lineage、verifier error analysis、split 与 contamination control、失败样本保留、release versioning 和权利信息，而这些项目仍然缺失。
