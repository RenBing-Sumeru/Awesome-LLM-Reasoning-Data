构造效果是在固定模型与实时网页 scaffold 下测量的，并不是对每条记录做人工核验。Table 1 中，Claude-4-Sonnet 在 Initial QA 上的 accuracy 为 86.6%，在 Evolved QA 上降至 67.1%；平均 tool-calling turns 则从 7.9 升至 9.9。论文将其解释为 5 轮线索删除与模糊化提高了搜索难度。但这不能证明每条 QA 的事实正确性、答案唯一性或训练价值；Figure 4 还显示 Evolved QA 仍比 BrowseComp-en 更容易（论文 §2.4、Table 1、Figure 4）。

Table 2 在同一 8B 模型 SFT 前后报告 Avg@4 accuracy，并用 DeepSeek-V3 作为 LLM-as-Judge。SFT→RL 的变化分别为：BrowseComp-en 7.9→15.7、BrowseComp-zh 21.3→32.0、GAIA 43.7→50.0、WebWalkerQA 59.8→62.7、FRAMES 72.6→75.7、XBench-DeepSearch 47.5→53.7、HLE 16.0→17.3。这些都是论文 scaffold 下的作者报告结果，尚未独立复现，也不能直接当作数据集质量估计（论文 Table 2，pp.9–11）。

Figure 5 显示，RL 过程中每条 trajectory 的平均 tool call 从约 11 增长到超过 16，平均 trajectory length 超过 40K tokens，同时 BrowseComp-en/zh 的 Avg@4 也上升。这支持训练进程、轨迹变长与分数提升之间存在相关性，但没有隔离 QA 数据、GRPO、reward design、逐步 context budget、额外 sampling 或实时工具行为中的哪一项是原因（论文 Figure 5 与 §4.2，pp.10–11）。

Artifact 证据比论文证据更窄。官方 GitHub 宣布发布 100 条 QA，并含一个 100 行的 `data/data_sample.jsonl`；Hugging Face dataset card 给出 `id/query/answer` schema，说明因 company policy 只公开 100 条，并将数据标为 auto-gated、Apache-2.0。WebExplorer-8B 权重和 inference/evaluation 代码已公开。官方发布中未找到约 40K 条 QA 全集、约 13K 条 SFT 轨迹、约 12K 条 RL 集合、reward log、合成代码或训练代码。
