最直接的证据针对学习后的验证行为，而不是数据行本身的内在质量。在 ProcessBench 上，论文报告 FOVER-40K 训练后，Llama 3.1 8B backbone 的平均 AUROC 从 67.4 变为 77.3，Qwen 2.5 7B 从 75.9 变为 85.8；按论文阈值，paired bootstrap 把每个领域的改进标为显著。

Best-of-7 在单项 benchmark 上结果混合，但报告的平均值为正向变化：

| Backbone 与设置 | Logic 平均 | Math 平均 |
|---|---:|---:|
| Llama 3.1 8B baseline | 48.9 | 53.0 |
| FOVER-Llama3.1-8B-PRM | 50.6 | 54.7 |
| Qwen 2.5 7B baseline | 54.2 | 64.8 |
| FOVER-Qwen2.5-7B-PRM | 56.6 | 66.2 |

Qwen 的 FOLIO 单项从 64.0 降到 63.5，AIME 从 12.4 降到 12.0；Llama 的 MATH 从 54.4 降到 53.6。在 unseen-task 平均值上，FOVER-Llama 的 NLI 从 47.8 提升到 55.6，BBH 从 74.0 提升到 80.0；FOVER-Qwen 的 NLI 与 base 同为 58.4，BBH 从 69.7 提升到 70.7。这些结果支持该生成与排序协议下存在一定迁移，但不支持“所有任务都占优”。

任务消融在五个选定任务上报告 Llama baseline 平均 75.3，仅用 formal logic 为 79.4，仅用 theorem proving 为 80.4，两者合用为 80.8。论文还报告 10K 训练子集已与完整 40K 相当，但该图不能建立普适的数据效率规律。

一个负面案例尤其有诊断价值：FOVER PRM 会降低把 5.44444… 四舍五入为 5.44 的中间步骤分数，作者将其解释为形式标签可能导致的过度严格。硬件与运行时间报告有助于评估可行性——四张 A100 SXM4 80GB GPU、每个 8B 训练运行约一小时、单个 Z3 进程验证全部形式逻辑数据少于十分钟、每个 Isabelle 步骤约三秒——但不能替代公开的失败 manifest。
