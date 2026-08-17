1. **收集真实项目：** 从公开 Solidity 仓库选择可由 Foundry 构建和测试的项目，按 DeFi 等 6 类领域整理，并固定依赖、commit 与编译器版本。

2. **构造生成任务：** 定位具有仓库级调用关系的合约函数或代码区域，隐藏目标实现，同时保留接口、相关合约和自然语言/代码上下文；参考版本作为 gold。

3. **建立三类 verifier：** 将模型代码写回工程，先编译并运行 Foundry tests；仅对功能正确候选测量 gas，再运行 Slither 得到 vulnerability findings。编译或测试失败直接不计为正确。

4. **评测与训练：** 按固定采样计算 Pass@k、Gas@k、Vul@k，并用训练 split 微调 Qwen-7B。复现需固定链工具版本、硬件、gas 测量方式、Slither rules 和数据快照。
