最终论文评测 16 个 LLM，最佳模型在 SolEval 上仅达到 26.29% Pass@10，说明真实 Solidity repository generation 尚未饱和。作者再以 SolEval 训练 Qwen-7B，在相同评测协议下将 Pass@5 从 16.67% 提升到 58.33%，表明数据具有直接训练效用。

Pass、Gas 和 Vul 的联合结果还能揭示“功能通过但成本或安全较差”的候选。边界是 SFT 前后除数据外仍可能有训练超参数影响；Slither 只覆盖其规则库，gas 也受编译器、测试调用路径和硬件/链配置影响。
