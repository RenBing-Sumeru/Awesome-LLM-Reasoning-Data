**历史输出缺失。** 核心审计缺口是记录级发布完整性。仓库没有论文运行 prompt manifest、完整候选池、事后步骤边界、scorer 请求与响应、选中索引历史、剪枝记录、被拒路径、解析后 Hydra snapshot、不可变 config hash、W&B export，或支撑图表的机器可读结果包。本地持久化与 resume 说明新运行可以被捕获，却不能重建历史运行。

**公开生成语料只有两个示例。** `cached_examples.json` 含两个 Claude Sonnet 4 数学 prompt，预算为 8，每个 prompt 有五次演示运行。这些记录适合解释 debugger schema，但与论文的 Qwen2.5-Math-7B-Instruct、Qwen3-8B 和 GPT-OSS-120B 实验矩阵不同。把缓存当成论文语料，会混淆产品演示、provider、模型、任务与策略设置。

**ReProbe 无法端到端追踪。** 论文、结果表与 README 都命名 ReProbes，附录 C 还报告了聚合设置；但在审计提交 `561489b1e037722b4210189d9ab09a75a9fc8159` 中，除了 README 两次提及外，没有可识别的专用 ReProbe scorer、配置或实现。历史代码路径、probe checkpoint、特征抽取，以及报告结果到可执行配置的映射均为 unknown。

**Selector 依赖领域与访问假设。** Qwen2.5-Math-PRM-7B 为数学训练，却因没有 coding PRM 而被用作代码代理；其代码领域分数可能奖励看似合理的形式，而不是可执行正确性。不确定性与 probe scorer 需要 log-probability 或 hidden state；online 方法可能还需要 prefill。托管 API 可能只暴露 black-box 子集，能力变化会悄然改变可运行策略。

**原生推理的步骤边界来自启发式。** 非结构化 thinking 在生成后由 marker 与 sentence-boundary heuristic 切分。边界错误会改变 step scorer 所见文本、步骤数、聚合、剪枝决定和 debugger 解读。发布物没有人工步骤标注可用来测量这种切分误差。

**预算与结果归因不完整。** 理论 TFLOPs 近似前向计算，并把不确定性开销视为可忽略；它没有完整计入 batching、KV-cache reuse、硬件、并行、provider 优化、evaluator 执行、重试、wall-clock delay 或金钱成本。论文没有固定 serving 条件下的延迟比较。每个配置独立网格搜索 scorer aggregation 与 window，却没有公共不可变 manifest 把每个报告点映射到解析设置。

**版本、依赖与 API 漂移仍很重要。** PyPI 发布 `thinkbooster` 0.1.1，而审计提交的 `pyproject.toml` 声明 0.1.0。没有不可变论文 release tag 把论文表格绑定到 package build。`setup.sh` 为 LM-Polygraph、llm-uncertainty-head、vLLM speculators 与 KernelAct 克隆或拉取移动分支，多数依赖使用范围而非精确历史 lock。官方 project、debugger 和 video URL 是可变 redirect；当前 debugger 指向运行中的 Runpod 基础设施。

**许可证与来源具有多层结构。** 工具包代码是 MIT，ACL 论文是 CC BY 4.0，但这些许可证不会自动覆盖上游 benchmark mirror、provider 条款、Claude 生成的缓存推理或未发布论文运行输出。已检查 Hugging Face card 没有暴露 dataset-specific license 字段。使用者需要逐 benchmark 的 provenance/license ledger，以及明确的生成输出复用政策。

**污染与覆盖范围为 unknown。** 论文没有报告 benchmark 去污染、模型训练重叠审计或 duplicate-prompt 程序。九项 evaluation surface 均为公开资源，Hugging Face organization 现已扩展到 13 个 repository。数学、science QA、Python 与 CUDA 结果不能证明可迁移到主观判断、安全、agent environment 或缺乏廉价 grader 的领域。

尽管引用与代码已核验，该条目仍保持 `partial`。它适合作为 L4 基础设施与审计 Card，但缺失记录、ReProbe 实现未解决、依赖可变及权利元数据不完整，使论文运行轨迹直接复用与精确结果重放仍受阻。
