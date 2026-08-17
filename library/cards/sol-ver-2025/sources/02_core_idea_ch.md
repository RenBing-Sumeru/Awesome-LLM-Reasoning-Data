Sol-Ver 围绕同一次执行事件耦合两条合成数据流。Solver 接收生成的问题和 function signature，输出候选代码；Verifier 查看问题与候选解，再生成候选输入和期望输出。评分是代码通过生成测试的比例。

默认配方在“至少一个生成 solution 通过全部生成 test”时，把该 solution-test tuple 视为 chosen。Solver SFT 把通过代码作为正向目标，Verifier SFT 把相应测试生成 trace 作为正向目标。Solver DPO 把未通过 chosen tests 的其他代码作为 rejected response；Verifier DPO 则把 test-output 采样空间中的其他 expected outputs 作为 rejected response。同一条执行记录由此同时生成 answer-level 监督示例和按角色区分的 pairwise preference。

更新后的模型在下一轮重新生成两侧数据。Sol-Ver 共运行三轮 SFT-then-DPO；第三轮结合 Iter 1 与 Iter 2 的测试，并选择同时通过两轮测试的 solution。不同于固定 execution filter 或 CodeDPO 的纯代码偏好构建，verifier 本身也会刷新并生成下一轮监督。核心主张是共同演化的数据构建配方，而不是开放数据集发布，也不是经独立认证的 verifier。
