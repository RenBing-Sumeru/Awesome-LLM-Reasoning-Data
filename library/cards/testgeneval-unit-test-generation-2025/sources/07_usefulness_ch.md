1. **测试生成评测：** 在固定 Docker 环境中比较不同模型的完整 test-file generation 与 completion，联合报告 execution pass、coverage 增量和 mutation 增量。

2. **训练数据构造：** 将人写测试按片段遮蔽形成 SFT 样本，或采样模型测试后用三层 verifier 过滤，得到输入代码—测试—执行指标记录。

3. **代码 agent 验证器研究：** 用生成测试为修复候选提供额外 reward，但只有当 mutation 与真实 bug 检测相关时才使用。无法稳定构建项目或缺乏 mutation 工具的语言不适合直接复用该协议。
