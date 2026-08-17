1. Code-Feedback 是 68K 条对话和 192K 个 turn，不是 68K 个彼此独立且全部验证正确的程序。
2. 公开对象是带 id/messages role-content 记录的静态 JSONL；执行发生在数据合成或下游推理中，不是 dataset loader 的一部分。
3. Interaction simulation 是最大分支，包含 51K 条记录、155.5K 个 turn；显式 code correction 只有约 500 条。
4. DeepSeek-Coder-33B 从单轮 average/plus 的 79.0/70.4 提高到执行反馈下的 83.2/76.4 与合成反馈下的 88.0/81.0，但反馈同时增加了推理时信息。
5. Apache-2.0 允许开放访问，但上游 lineage、OpenAI 生成记录、语义污染与任意代码重放仍是彼此独立的审计义务。
