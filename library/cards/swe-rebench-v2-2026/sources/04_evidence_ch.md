最直接的规模证据来自构造漏斗：29,511,758 个 PR、145,306 个仓库，缩减为 8,593,722 个修改测试的 PR、805,598 个关联 issue 且修改测试的 PR、583,809 个仓库筛选后候选、41,349 个成功抽取 F2P 的任务，最终经过 issue 文本筛选得到 32,079 个任务。主发布覆盖 3,617 个仓库和 20 种语言，任务时间为 2014–2025；patch 中位数为 3 个文件/34 行，90 分位为 9 个文件/181 行。这些是作者报告的 pipeline 与发布统计，不是逐条质量证书。（论文 §§3.6–3.7，表 1）

setup 消融覆盖 10 种语言的 103 个任务/仓库。Qwen3-Coder-480B-A35B-Instruct 在 mini-SWE-agent 下，以 32k budget 报告 pass@1 25.8，以 128k 报告 pass@10 62.7；非交互 setup baseline 的 pass@1 为 12.1。这支持 closed-loop setup 与重试在对应 budget 下的价值，但主生产 pipeline 仍只对每个仓库尝试一次。（论文 §4.1，表 2；附录 A.1，表 8）

issue 清晰度 ensemble 在 1,699 个带三份人工标注的 SWE-bench Verified 实例上校准。对 Verified-E 目标，precision/recall/F1 报告为 0.83/0.10/0.17；对 mixed consensus 则为 0.88/0.06/0.11。因此该筛选在此校准下保守且 precision 较高，但会丢弃大量可接受说明；三模型一致接受不等于对 32,079 条发布记录逐条人工验证。（论文 §4.2，表 3 与表 5）

诊断研究抽取 300 个任务——Python、JavaScript、Go、Rust、Scala 各 60 个——让七个模型对每个任务独立运行三次。表 6 报告 Claude Opus-4.5 的汇总 pass@1 为 25.2、pass@3 为 32.7；附录 C 将其四舍五入为 25% 与 33%。分析还识别出过度限制的测试耦合、隐式命名要求与外部依赖。它只刻画该子集上的模型行为和任务混杂因素，不能验证每条记录，也没有证明用该发布训练会提升智能体。（论文 §4.3，表 6；附录 C）

artifact 证据可独立检查：主 Hugging Face split 有 32,079 条，PR split 有 126,300 条；官方代码包含 prompts、base Dockerfile、镜像 builder、生成 parser 和 `scripts/eval.py`。ICML 摘要中较旧的 36,000+/3,800+/100,000+ 与 arXiv v2 及当前发布数量冲突。该版本漂移、缺少 tagged release，以及缺少训练消融，共同限制了 benchmark 式数字能支持的结论。
