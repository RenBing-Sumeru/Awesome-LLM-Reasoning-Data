SeRL 围绕同一个当前 policy 耦合两个循环。**Self-Instruction** 在线生成新的领域问题，使 curriculum 能随 learner 变化；**Self-Rewarding** 对这些问题采样多个答案，并把 self-consensus 转成 response-level rewards。随后 Reinforce++ 用生成的 question-response-reward triples 更新 policy，更新后的 policy 再重复两种角色。

问题生成由有限真实数据锚定，并非从零开始。主要数学设置使用 500 条 MATH training questions 提供领域分布。八示例 context 结合 seed questions 与此前 accepted generated questions。论文 Appendix C.4 规定 **四分之一 seed、四分之三 generated examples**，在 generated pool 足够时即两个 seed 加六个 generated examples。公开代码的比例相反：它最多采样两个 generated examples，其余位置用 seed 填充，因此后期 context 最多是两个 generated 加六个 seed；第一次生成则使用八个 seed examples。

Online filter 以质量、多样性和合适难度为目标。它拒绝以下 candidates：相对 seed 与当前 generated batch 的 maximum ROUGE-L 超过 0.7；含配置的 visual/file/programming keywords；以 punctuation 或 non-English character 开头；长度不在 3–150 words。之后对问题采样 16 个答案，只有 majority-agreement reward 比例处于 inclusive range 0.2–0.8 才接纳。该 dual-ended window 可避免 reward 无变化的 groups，但它是 learnability heuristic，不是 truth test。

Math-Verify 提供 equivalence layer。Reward implementation 抽取数学答案、计算 pairwise equivalence、统计每个 response 的 equivalent neighbors、选择 maximum-count response，再对其 equivalence group 赋 reward 1。论文称多个 majority answers 并列时应选择最短答案以减少 verbosity；公开代码却使用 `maj_count.index(max(maj_count))`，直接选择第一个 maximum，没有实现 shortest-answer comparison。

有辨识度的数据对象是 policy-dependent 的 self-generated RL group：question、16 个完整 responses、equivalence graph、majority cluster 与 scalar rewards。推理步骤没有 process-correctness labels。“Limited data”只描述 SeRL 阶段的领域 seeds 与 generated-question labels；它并未移除 pretrained model data、人工设计的 prompt/filter/reward、Math-Verify 行为或 evaluation datasets。
