论文的主要量化证据是 Qwen2.5-32B 上渐进加入组件后的 AIME 2024 avg@32 表格：DeepSeek-R1-Zero-Qwen-32B 为 47，naive GRPO 为 30；随后累计加入 Overlong Filtering 得到 36，加入 Clip-Higher 得到 38，加入 Soft Overlong Punishment 得到 41，加入 Token-level Loss 得到 42，最后加入 Dynamic Sampling 的 DAPO 得到 50（论文 §4.2，表 1）。图 1 还报告 DAPO 用图中 DeepSeek-R1-Zero 对照一半的梯度更新步数达到 50。

实验条件不能省略。论文 §4.1 给出 512 个 prompt、每题 16 条回答、20,480 个最大 response token、0.2/0.28 的 Clip-Higher、1e-6 的 AdamW，以及 temperature 1.0、top-p 0.7、重复集合 32 次的 AIME 评估。表 1 是逐项累计的 progression，不是能独立隔离每个组件的 factorial ablation；最终方法也只在 AIME 2024 上评估，因此没有建立对其他数学集或领域的迁移证据。

官方 verl-recipe 后续另外报告：在 verl commit `4f80e4`、128 张 H800 上，完整 DAPO 的 AIME 2024 为 52%，移除 Dynamic Sampling 后为 50%。这说明固定实现可以运行，但不能证明表 1 最后 8 分差异在不同版本中具有不变因果效应。论文还指出，训练集最终 reward 与验证准确率往往相关性很低；这是不能把 reward 曲线当作质量证据的重要负面结果（论文 §4.3）。

上述分数都没有验证逐条数据、改写忠实性、中间推理、来源权利或去污染。证据只支持该系统在狭窄 benchmark 与特定配置下的报告行为，不能单独证明公开数据可安全用于训练。
