# 用途

- **数学 SFT 构建者：**输入已有解答的数学种子，复用四个变换桶，输出 instruction—rationale—答案记录；在固定 token 下对比，并按变换类型分层统计 accuracy。
- **谱系审计者：**保留 `type`、`original_question` 和 `original_response`，测量语义唯一性、答案泄漏和来源 mixture；合并子集前输出变换审计。
- **不适用条件：**任务缺少稳定答案约束，或教师条款禁止再发布时不要使用，因为 MetaMath 的接受规则和公开发布前提不再成立。

