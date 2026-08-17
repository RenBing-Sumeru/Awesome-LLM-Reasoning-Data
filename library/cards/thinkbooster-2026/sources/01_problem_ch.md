测试时扩展论文常报告最终的准确率—计算量曲线，却不公开产生曲线的运行记录：采样答案、部分续写、scorer 调用、剪枝决定、选中索引和解析后的配置。这样一来，读者很难判断增益究竟来自更多候选、不同搜索规则、更强 selector，还是更大的 token 预算；策展者也无法仅凭结果区分“可执行的轨迹生成器”与“可直接复用的轨迹发布”。

ThinkBooster 从系统层面处理这一问题，为九种推理策略提供统一接口：Best-of-N、majority voting/self-consistency、beam search/Tree-of-Thought、extended thinking、MUR/dynamic exploration、DeepConf online、DeepConf offline、phi-decoding 和 uncertainty CoT。这些策略分别可能在完整轨迹结束后评分，或在生成期间介入；可能只需 black-box 访问，也可能要求 logits/hidden states 等 white-box 能力；有些还依赖 prefill continuation。统一工具包使这些差异能够被明确比较、配置和调试。

这里的数据对象是运行时推理记录，而不是新的训练数据集。依策略而异，一条记录可包含 prompt、完整轨迹、事后切分的步骤边界、候选文本或树节点、PRM/置信度/critic/probe 分数、保留或剪枝状态、选中轨迹与最终答案、token 和理论 TFLOP 计量、延迟，以及策略/scorer 配置。最终正确性再由 benchmark 特定的精确匹配、可选 LLM judgment、EvalPlus 测试，或 KernelBench 的语法、编译与数值正确性检查决定。

因此，该工作应归入 **Rollout, Search, and Test-Time Trace Data**：分析单位是给定推理预算下的候选池或搜索过程。论文执行的是推理时生成、选择、调试与评估；它没有训练 policy，没有发布 SFT 或偏好样本，没有训练 reward model，也没有运行 RLVR。

本 Card 达到 L4，是因为 ACL 最终论文与附录、审计提交上的官方仓库、MIT 许可证、PyPI 包、Hugging Face surfaces、配置、策略/scorer/evaluator 代码、API schema 和调试器缓存足以支持细致双语说明。L4 不表示轨迹发布完整。公共仓库只持久化了两个生成式调试器示例；历史论文运行的 prompt、候选、分数、选择、解析后配置与结果导出均未公开。
