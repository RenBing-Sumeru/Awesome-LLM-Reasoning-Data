SWiRL 的核心变化，是把固定的完整搜索/计算器轨迹转换成逐动作训练 state：前缀 `s` 提供此前全部动作与工具 observation，末尾动作 `a` 是被优化的响应，generative reward model 提供 `R(a|s)`。同一个 Gemma 2 policy 先生成轨迹，再在这套离线分解上 finetune。（论文 §2 开头；§2.2，p.5；Figures 1–2）

这里存在两个不同的反馈阶段。合成数据筛选时，Gemini 1.5 Pro Thinking 根据此前上下文把当前动作标为 GOOD 或 BAD；process-only 筛选仅在每个动作都为 GOOD 时保留整条轨迹。另一个 outcome filter 让模型 judge 判断最终答案是否匹配 golden answer，并输出 YES/NO。stage-2 SWiRL 优化时，Gemini 1.5 Pro 则在不接收 golden answer 的条件下，为每个动作前缀充当 generative reward model。论文没有披露其 reward prompt、标量映射、归一化或校准，因此不能把 stage-2 reward 写成 Appendix A 的二元过程筛选器。（论文 §2.1，p.4；§2.2，p.5；Appendix A，pp.21–22）

该反馈可以观察序列化上下文、当前响应和已保存工具结果，但无法自行确认检索证据是否真实或无污染、搜索语料是否被正确固定版本，也不能保证看似合理的中间动作最终得到正确答案。环境提供 observation——QA 使用 Gecko-1B 向量检索，数学使用 SymPy 执行——但成功筛选与 RL reward 仍是模型判断，因此 verification contract 为 `mixed`。（论文 §2.3，p.5；Appendix A）

相较 DQO 与 OREO，论文强调使用动作级/子轨迹奖励进行离线工具使用训练，且不另行训练 value network；相较 STaR、RFT 与 ReST 式合成训练，它测试基于过程的保留——包括最终答案错误的轨迹——以及 step-wise RL，而不只依赖正确结果 SFT。各组件本身都有先例；贡献在于把它们组合成面向多步工具使用的数据/反馈接口。（论文 §3，pp.5–7；§4.2，pp.8–9）
