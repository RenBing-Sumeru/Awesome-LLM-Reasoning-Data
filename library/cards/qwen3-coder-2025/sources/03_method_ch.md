发布将 Qwen3-Coder-480B-A35B-Instruct 列为 480B-total/35B-activated MoE，但其精确 base checkpoint 和完整 lineage 未披露。它称 Qwen2.5-Coder 清理并改写噪声数据。其他教师、Code-RL 生成器、工具轨迹生成器、合成测试生成器、prompt、seed 和接受程序均未被识别。

报告中的 prompt 混合覆盖广泛编码任务、真实世界编码和 SWE 风格任务。它报告了 7.5T 预训练 token、70% code 和长程 RL，却未提供任务 prompt、来源 manifest、来源数量、仓库版本、混合权重、测试采样、rollout 分配或训练日程。自动扩展的测试用例提供执行反馈，但没有发布测试语料或测试有效性协议。

agent 基底是 Qwen 构建的 Alibaba Cloud 系统，据称可并行运行 20,000 个独立环境。发布未提供镜像、任务定义、provisioner、访问方式、环境观察或轨迹日志。其优化器或 scaffold 只描述为 execution-driven Code RL 和长程 Agent RL；算法、reward shaping、系数、步骤、计算预算、解码和推理预算仍然 unknown。
