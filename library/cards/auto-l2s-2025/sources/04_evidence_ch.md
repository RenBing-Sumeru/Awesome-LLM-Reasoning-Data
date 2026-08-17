对 Qwen2.5-7B-Instruct，表 1 报告 AutoL2S 的平均准确率为 0.573、平均长度为 2,103 token，而 Bespoke-Stratos-7B 为 0.590 和 7,430；即平均长度减少 71.7%，平均准确率绝对下降 1.7 点。3B 设置中，AutoL2S 为 0.415 和 4,803 token，Bespoke-Stratos-3B 为 0.413 和 10,219。逐 benchmark 效果并不一致：部分任务提高，AIME24 等任务则有准确率下降。

消融比较 SFT-only、force-short、force-long、rejection size 0/4/8 及不同 annotation order，支持 adaptive routing 不等同于全局强制一种模式，也表明 rejection sampling 会改变 accuracy-length trade-off。论文还报告额外 teacher 与重复运行分析。

这些测量说明所选解码设置下的 model-level efficiency trade-off，不能证明 shortest correct trace 在语义上完整，也不能证明 paired training data 高质量。ACL Anthology 条目、官方代码和官方模型权重验证了论文与实现路径，但未确认公开完整 paired corpus 或逐样本选择证据。
