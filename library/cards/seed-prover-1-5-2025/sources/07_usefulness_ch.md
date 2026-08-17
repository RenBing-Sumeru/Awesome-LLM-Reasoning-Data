论文提供了实用的 agent 训练数据 schema：保留提示来源、推理、顺序调用与响应、环境快照、已证 lemma 依赖、摘要/重启 lineage、最终证明和奖励。这类记录可支持 outcome RL、工具策略分析、失败挖掘与受控课程构造。

它也提示评测应分开报告 agent-only Pass@8×8 与“自然语言 prover + sketch TTS”，并记录深度、叶子预算、H20-days、墙钟时间、宽度和检索快照。若要可信复用，数据构造者还需加入来源成员表、父样本 ID、英文到 Lean 审查、judge 校准和独立 model-selection 协议。
