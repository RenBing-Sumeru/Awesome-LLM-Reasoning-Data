核心思想是把 rationale 压缩视为一维顺序搜索，而不是单次改写。形式化流程为
\[
x \rightarrow r_0 \rightarrow r_1 \rightarrow \cdots \rightarrow r_i \rightarrow r^*,
\]
其中每个 \(r_i\) 都由紧邻的前一轮 rationale 生成。这不是 best-of-\(N\)：论文报告每个样本有一条初始轨迹、每轮只有一个依赖前轮的候选，因此后续候选会继承此前内容和错误。

压缩提示暴露三类上下文：原始问题、前一轮 thought process 和最终答案。它要求 API 模型在不增加信息的条件下简化 thought process。GPT-4o-mini 是主 compressor；GPT-3.5-turbo、GPT-4.1-nano、GPT-4.1-mini、GPT-4o 与 DeepSeek-V3 用于 compressor 研究。由于每一轮都提供答案标签，生成的 rationale 可以围绕已知终点优化。表面上的答案保留不能解释为“在没有标签访问时，压缩推理仍能独立产生该答案”的证据。

MACC 的逐样本反馈契约只有 token-length monotonicity。它定义 \(CR_i=|r_i|_{\mathrm{tok}}/|r_0|_{\mathrm{tok}}\)，并在首次严格长度回弹时停止，保留前一轮修订。selector 不包含逐轮 answer checker、semantic-equivalence judge、perplexity threshold、process verifier 或 faithfulness score。压缩 CoT perplexity 与 benchmark accuracy 出现在配置级分析和 Performance Estimation Hypothesis 中，却不是算法 1 的停止信号。

选中的 \(r^*\) 被转换为 SFT 样本。论文描述的输入包含 `Q [EOS] &lt;compress&gt; [EOS]`，输出则包含压缩 CoT 与答案。部分原始 CoT 在没有 `&lt;compress&gt;` 的情况下混入训练，但比例未披露。对 reasoning model，reasoning 与 answer process 会被分离、分别压缩后再拼接；parser 与边界规则未发布。部署时，微调后的模型单次生成简洁回答，不会再次调用多轮 compressor。

关键审计区别在于概念对象与发布对象。算法 1 输出概念 pair \((x,r^*)\)，而稳健轨迹语料应保留被丢弃的回弹轮、所有中间修订、token 数、选中索引、正确性证据与谱系。官方发布连这两种版本都没有。因此，它支持研究方法设计，但不支持数据级复用或直接重建实际 SFT 语料。
