最强证据是指定训练与评测设置下的下游行为，而不是通用数据质量或 verifier 质量。

| 条件 | 指标与对比 | 报告结果 | 解读边界 |
| --- | --- | --- | --- |
| Qwen2.5-3B-Instruct 域内 GRPO；3 次运行；相同 50 题留出任务集 | Acc@3，base vs RG-RLVR | 代数 5.0→16.7；算法 52.3→59.7；算术 89.7→96.0；认知 40.3→42.3；游戏 0.0→3.3 | 5 个测试类别都有提升，但游戏仍只有 3.3（表1）。 |
| 同一 base 模型的跨域 GRPO | Acc@3 | 算法训练将代数从 23.83 改为 52.89、几何从 0.83 改为 23.17，但 ARC 从 6.49 降为 4.18 | 迁移具有异质性；ARC 是负结果（表2）。 |
| RG-Math；Qwen2.5-3B-Instruct 训练 800 个 GRPO step | 外部 benchmark 分数 | GSM8K 76.2±1.17→76.7±1.16；MATH 48.5±0.68→58.2±0.66；Big-Bench Hard 8.68±0.30→16.34±0.40 | GSM8K 变化相对其标准误差很小；MATH 和 BBH 变化较大（表3）。 |
| RG-Algorithmic 与 RG-Math 在 MMLU-Pro 各类别上的评测 | Accuracy | RG-Algorithmic 将 Math 从 54.63 改为 53.89，RG-Math 则从 54.63 改为 60.25；两者在其他多个类别有提升 | 算法训练并未改善每个外部类别（表4）。 |
| Curriculum vs 均匀采样；Qwen2.5-3B-Instruct | 固定难度上的 accuracy | Spell Backwards 长度 4：30.00→70.67；Mini Sudoku 8–10 个空格：6.67→20.00；Count Primes 100–500：4.00→30.67 | Curriculum 在所有报告单元格上取胜，但 Count Primes 从未离开初始等级，且有些路径难以形式化（表5、图6）。 |

Zero-shot 研究提供了一项评测表面证据：在 hard 配置上，o3-mini 平均为 63.51%，DeepSeek-R1 为 59.52%，表中最强的 non-reasoning 模型 Llama 4 Maverick 为 41.50%。提高难度会导致很大的类别下降，其中代码类在 o3-mini 与 DeepSeek-R1 上分别下降 71.93 和 61.82 个百分点（图3）。这些数字表明难度配置会改变模型行为，但不能证明各任务 hard 设置获得等价校准。

Reward 曲线需要特别警惕。论文说明训练 reward 是 accuracy 与辅助 format 组成之和，并将早期飙升的一部分归因于学会格式；评测表去掉辅助项，只报 accuracy（论文 §4，图4–5）。因此，不能把 reward 曲线增长直接读成正确率增长。

所有模型结果都由作者报告，本卡未独立复现。作者披露约 1,500 A6000 GPU 小时。没有实验测量逐任务 verifier 的假阳性/假阴性、语义污染、跨任务 reward 校准或每个 generator 的正确性。这些审计缺口阻止将 benchmark 提升视为数据质量证明。
