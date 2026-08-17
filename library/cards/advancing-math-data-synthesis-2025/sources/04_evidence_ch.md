Table 1 在 GSM8K、MATH、GAOKAO 与 ZHONGKAO 上报告的平均准确率为：Base2 39.50，response diversification 41.30，query expansion 42.67，retrospective enhancement 39.12，tutorship amplification 50.60。这支持“三种算子改善了所测混合、tutorship 观察增益最大、retrospective 未超过对照”的结论，却不能证明记录内在质量：tutorship 增加 13.90B 合成 token，其他实验臂只有 4.78B–6.82B，教师错误也没有独立审计。（论文 Table 1。）

阶段分配方面，Table 8 报告 Base1 平均 19.11，Base1-SFT 35.62，Base2 39.50，两组 1% SFT 控制分别为 23.73 与 43.54。作者在扣除 instruction-following 效应后估计，SFT 的能力增益约为 CPT 的 60%。难度实验中，Easy-SFT 为 27.03、Easy-CPT 为 30.79；Hard-SFT 为 29.66、Hard-CPT 为 41.51。这些比较支持论文设置下的阶段结论，但 CPT 与 SFT 的优化器、暴露量与 checkpoint 选择不同，不能构成只由训练阶段引起的因果证明。（论文 §5.1–§5.3、Table 3、Table 8。）

最终模型结果覆盖更广，却更难诊断。MathGPT-8B 在四个数学集合上的平均分为 70.62，Llama3-8B 为 32.91；MMLU 报告为 0.6222 对 0.6211。最终 recipe 同时改变 base model、context length、数据来源、算子混合、难度过滤与规模。因此，benchmark 表现不能隔离某一个合成算子，也不能验证单条记录。（论文 Table 4。）

评测本身依赖模型判断。论文用 `Tianqiao/DeepSeek-7B-Math-Compare-Answer` 规范化不规则输出；其公开 prompt 明确要求忽略学生推理中的错误，只关注最终答案。论文随后还对每个 dataset 取 zero-shot 与 few-shot 中较高的分数。因此，报告准确率属于 answer-level model judgment，而不是 step-level rationale verification。

Artifact 证据需要拆分。2026-07-22 再次检查 MathGPT-8B Hugging Face 仓库时，其中包含 configuration、tokenizer 与两个 BF16 safetensor shard，并标注 Apache-2.0。但来源/种子语料、逐方法合成语料、拒绝输出日志、合成代码与 item-level lineage 均未发布。`artifact_verified: true` 指模型 checkpoint，不指训练记录。
