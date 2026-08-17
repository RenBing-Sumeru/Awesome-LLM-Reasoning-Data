该 detector 假设受污染 RL 样本会形成稳定而狭窄的熵路径，且服务能暴露可靠 token probability。不同解码策略、缺少 logprob 或适应性训练都可能削弱信号。

RL-MIA 是模拟污染；在公开指控真实训练管线污染前，必须审计其迁移性。
