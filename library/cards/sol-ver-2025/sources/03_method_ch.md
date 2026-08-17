论文描述了以下流程。

1. 问题来源。Llama 3.1 8B 接收 OSS-Instruct 的开源 snippet，以及改编自 MBPP、APPS 和 CodeContests 训练集的 problem-format template，先生成 Python problem description，再生成 function signature；去重后保留 103,280 条。精确 source revision、mixture weight 与 deduplication algorithm 未披露。

2. Solver 生成。给定问题和 signature，模型生成代码，并按要求在注释中解释推理。代码候选数量和主生成解码设置没有在论文中统一披露。

3. Verifier 生成。模型先为一般、边界和困难情况生成 test input，再通过带 reasoning 的生成预测 expected output；期望输出阶段使用 majority voting 与 CoT。随后从候选测试中选择能够最大化 solution branch coverage 且 output value 更丰富的子集，降低恒定输出代码投机通过的可能性。

4. 执行与数据构建。代码在生成 suite 上执行，得分为通过比例。默认二值门控要求至少一个 solution 通过全部生成 test。Full-pass solution-test tuple 进入 Solver/Verifier 混合 SFT 数据；在 chosen test suite 上失败的代码成为 Solver DPO negative，其他 expected output 成为 Verifier DPO negative。Iter 1 中只有 45% 样本形成这种一致 pair。

5. 迭代。每轮对两个角色先做 SFT 再做 DPO，然后用更新后的权重重新生成数据。Sol-Ver 报告三轮训练。Iter 1 与 Iter 2 测试输出在 MBPP 上一致率为 75.14%，在 LiveCodeBench 上为 72.38%；第三轮数据生成组合两轮测试。

训练使用 fairseq2，推理使用 vLLM；代码评估采用 greedy pass@1。仅在 false-positive 评估中，每题用 temperature 0.6、top-p 0.9 采样 20 个候选代码，再由 gold tests 在每个 benchmark 各识别 400 个错误示例。这些设置不能误写成未披露的主合成生成配置。未核实到作者关联代码、生成语料、checkpoint 或可执行 sandbox specification。
