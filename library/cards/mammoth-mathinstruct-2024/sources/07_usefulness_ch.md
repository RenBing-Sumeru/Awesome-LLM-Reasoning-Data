# 用途

- **数学 SFT 构建者：**用公开来源/类型字段构造 CoT-only、PoT-only 或混合 mixture；输出等 token 消融，并检查域内/域外 accuracy。
- **可执行数据审计者：**在固定 Python sandbox 重跑 PoT，与参考答案比较，并按来源报告执行率与答案一致率。
- **不适用条件：**需要统一宽松许可，或目标任务无法安全执行 Python 时不要直接使用；应先过滤许可或替换 PoT 契约。

