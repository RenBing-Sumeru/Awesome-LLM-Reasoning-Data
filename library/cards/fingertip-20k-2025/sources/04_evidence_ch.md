主要训练证据是在作者两个任务上对 Qwen-2.5-VL-7B 做 LoRA 的受控比较。使用全部 16,000 个训练 episode 和 rank 64 时，proactive suggestion 从微调前的 `SR1` 3.1%、`Sim1` 0.25 变为微调后的 26.0% 和 0.55；personalized execution 则从 `SR2` 1.5%、`Sim2` 0.95、step ratio 2.16 变为 15.5%、1.42 和 1.13（论文第 5.4 节、表 5）。这些结果由作者报告；公开发布没有训练脚本或 checkpoint，不能据此独立重建。

Benchmark 同时显示仍有很大差距。在没有初始 screenshot 时，测试过的最佳通用 proactive 系统达到 `SR1` 12.8%，作者报告的人类参照是 30.3%。Execution 上，UI-TARS-1.5-7B 达到 `SR2` 38.5%；多数未微调模型的 `Sim2` 仍接近 1，表示其动作序列相对其他用户类型，并没有明显更接近当前用户的行为（论文第 5.2 节、表 3–4）。这些数字界定的是论文测试的 benchmark surface，不是一般性的移动智能体可靠性。

Execution 微调结果尤其需要保守解释：即使有所上升，`SR2` 仍只有 15.5%，且该指标来自对最终手机状态的人工判断。2.5× 动作长度限制可能把更长但有效的路径判为失败，而 `Sim2` 可能奖励动作字符串相似，却不能证明功能完成。公开 execution 脚本没有复现人工标签，且把 `success` 写成 0，因此单靠该脚本输出无法恢复论文的 `SR2`（论文第 5.1 节；官方 `personalized_execution.py`）。

官方 artifact 的直接检查提供了发布形态的独立审计证据，但不是对模型结果的独立复现。在固定的 GitHub commit 上，`total.csv` 有 20,000 行、83 位用户和 482 个 app 标识；`test_suggestion.csv` 有 1,000 行但只有 996 个唯一 episode key，与 execution test 共享 172 个唯一键。Kaggle version 2 为数据集声明 CC BY 4.0，而代码仓库没有 code license，也没有 tagged release。这些检查说明论文计数、发布行数和唯一评测单元必须分开报告。

因此，证据支持的结论比 benchmark 宣传式解读更窄：在论文设置下，纵向人类 episode 可以用于训练和评测个性化移动行为，full-data SFT 也改善了作者报告的指标。证据不能证明公开子集代表完整论文语料、轨迹本身必然高质量、分数没有 contamination，或 live phone state 可以 reset 与 replay。
