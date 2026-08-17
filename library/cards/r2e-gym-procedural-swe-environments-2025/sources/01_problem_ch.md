开放权重 SWE agent 的训练受两类瓶颈限制：真实 GitHub issue 和可执行环境数量不足，且推理时即使采样多个补丁，也缺少可靠 verifier 选择答案。仅用回归测试往往区分度低，生成测试可能错误；不执行代码的奖励模型又可能依赖风格和推理文本，而非补丁真实效果。

R2E-Gym 通过 SYNGEN 从普通 commit 反向构建可执行修复任务，并提出混合 verifier 推理时扩展。数据侧使用测试生成与 back-translation 产生 issue、环境和训练轨迹；推理侧将 execution-based 测试信号与 execution-free learned verifier 组合，在开放模型上同时扩大训练数据和候选选择能力。
