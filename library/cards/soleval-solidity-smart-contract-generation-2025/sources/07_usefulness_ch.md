1. **智能合约模型评测：** 在固定 Foundry/solc/Slither 环境中运行 1,507 个任务，联合报告 Pass@k、正确候选 Gas@k 与 Vul@k，而不是只报告编译率。

2. **多目标 RLVR：** 先以 tests 作为正确性门槛，再对 gas 和安全 findings 给予次级 reward；避免模型通过删除检查或改变接口获得表面低 gas。

3. **安全训练数据：** 将 gold 合约、模型候选、tests、gas 和 Slither 输出组成 reward records。对于涉及真实资金逻辑或未覆盖经济攻击的合约，不能仅凭 benchmark pass 部署，仍需专业审计。
