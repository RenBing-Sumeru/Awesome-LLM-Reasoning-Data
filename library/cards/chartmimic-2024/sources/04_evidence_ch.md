当前 arXiv 版本报告 4,800 个人工整理三元组，并评测了 3 个 proprietary models 和 14 个 open-weight models。论文报告即使强模型也远未满分：GPT-4o 在 Direct Mimic 与 Customized Mimic 任务上的平均分为 82.2，InternVL2-Llama3-76B 在同一设置下为 61.6。

行级证据是可执行的：生成代码要么运行成功，要么失败，渲染输出再与目标图表比较评分。aggregate score 只有在相同 renderer、metric implementation 和 task split 下才可信。证据边界是视觉相似性指标可能漏掉数据值、标签、坐标轴尺度、legend 和 chart convention 的语义错误；可执行代码仍可能画出误导性图表。
