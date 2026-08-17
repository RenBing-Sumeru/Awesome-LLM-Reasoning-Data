合成数据和 LLM-as-a-judge 常被联用，但生成器与 judge 有关联时会产生污染：judge 可能偏向由同一模型、继承模型或同家族模型生成数据训练出的学生模型，在没有明显 benchmark 重叠时虚高质量结论。

论文将此失效命名为 preference leakage，定义三类生成器—judge 关联，并通过受控训练和 LLM judge 评测，以 preference leakage score 量化由此产生的偏袒。
