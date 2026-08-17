核心变化是把验证变成普通的语言生成任务。Direct GenRM 接收问题、候选解与正确性提问，通过 SFT 学习输出 `Yes` 或 `No`，其标量分数就是分配给 `Yes` 的条件概率。GenRM-CoT 额外接收“Let's verify step by step”指令，先生成 critique，再在该 critique 条件下计算同一判决概率。给定 K 条采样理由，论文平均 K 个条件 `Yes` 概率；若无特别说明，默认 K=32。同一个模型还通过辅助 SFT 数据混合学习生成正确解，其中 lambda 控制生成目标相对验证目标的权重。（论文 Section 3，Eqs. 3–6）

反馈契约是 mixed。训练标签来自答案正确性：Last Letter 与 Word Sorting 使用程序化检查，数学候选解使用已知 GSM8K 答案。算法任务的 critique target 由确定性任务程序生成；GSM8K critique target 则由 Gemini 1.0 Pro 在获得一份特权正确参考解的条件下生成，最终判决与标签不一致的理由会被移除。部署时不提供参考解，由学习到的模型 `Yes` 概率而非教师或执行器给候选解打分。Verifier 能观察问题、候选文本、自生成理由与 prompt；它看不到对每一步的独立证明、理由是否因果忠实，也无法判断多次采样是否发生相关错误。

最接近的基线是在同一批平衡正误样本上训练的判别式 outcome reward model。LLM-as-a-Judge 也会生成 critique，但它只经 prompt 调用而非针对任务训练；DPO 则以不同目标把生成与偏好学习绑定。GenRM 的具体差异是以统一下一 token 接口同时支持直接判决、生成式验证理由、正确解 SFT 与推理时理由聚合。CoT、多数投票、reference-guided grading 和 SFT 都是既有组件；贡献在于面向 verifier 的数据与目标组合，而不是声称每个组件本身全新。
