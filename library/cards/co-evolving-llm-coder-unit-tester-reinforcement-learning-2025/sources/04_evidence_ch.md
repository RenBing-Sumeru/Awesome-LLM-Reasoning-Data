公开工件证据较强，但完整性并不均衡。官方仓库发布了训练与评测代码、四阶段优化流程、转换后的数据集，以及 ReasonFlux-Coder-4B/7B/14B 权重。公开 CodeContests_train 数据集包含 4,529 行，数据卡声明 MIT 许可证。仓库运行时可以生成临时 rollout 和结果目录，但没有发布一个不可变语料，完整保留论文实验中的每条 coder 轨迹、tester 轨迹、执行矩阵、奖励与失败记录。

在 LiveBench、MBPP、LiveCodeBench、CodeContests 和 CodeForces 上，论文报告 7B 与 14B 模型相对各自基础模型的平均提升：单元测试准确率提高 37.8 个百分点，单次代码准确率提高 5.3 个百分点，16 代码/16 测试 Best-of-N 准确率提高 9.0 个百分点。消融实验显示，只优化 coder 不会提升 tester 准确率，而完整的推导式 tester 奖励优于简化的“通过所有正确代码”奖励。这支持了在所研究设置中显式优化两个角色的重要性。

论文还把 ReasonFlux-Coder-4B 用作 GPT 系列 coder 的 tester，并把其生成测试作为 Qwen2.5-14B-Instruct 强化学习的奖励来源。这些实验说明其在报告流程中的下游用途，但不能证明生成测试普遍正确、私有测试套件覆盖完整，或共演化 episode 已构成高质量的可复用数据集。

在单元测试评测中，CodeContests 和 MBPP 使用可用参考代码；对于 CodeForces、LiveBench 和 LiveCodeBench，论文使用 QwQ-32B 生成且通过全部 gold tests 的程序作为参考。此类参考是操作性代理：通过有限测试并不能证明程序在语义上等价于真实解答。
