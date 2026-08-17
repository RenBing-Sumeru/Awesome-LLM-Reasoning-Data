**输入、后端与步骤抽取。** 论文评估 MATH-500、OlympiadBench、GaoKao23EN、AIME 2024、AIME 2025、GPQA-Diamond、HumanEval+、MBPP+ 和 KernelBench。工具包可使用 Hugging Face Transformers、本地 vLLM、vLLM service、OpenRouter、OpenAI-compatible endpoint 及兼容 provider。结构化 chain of thought 可由系统级指令引导；原生非结构化 thinking 则在生成后由 `ThinkingMarkerDetector` 按语言标记与规范化句界切分。论文把可靠抽取原生步骤列为尚未解决的问题。

**生成策略。** Offline Best-of-N 与 self-consistency 先产生完整轨迹，再重排序或对抽取答案投票；DeepConf offline 也对完成样本评分。Beam search、extended thinking、MUR、DeepConf online、phi-decoding 和 uncertainty CoT 可通过候选扩展、续写、剪枝或置信信号在生成期间介入。访问要求不同：Best-of-N 与 majority voting 属于 offline、black-box、无需 prefill；beam search 与 extended thinking 属于 online、black-box、需要 prefill；MUR、DeepConf online、phi-decoding 与 uncertainty CoT 属于 online、white-box、需要 prefill；DeepConf offline 属于 offline、white-box、无需 prefill。

**Scorer 与聚合。** 默认 PRM 配置使用 `Qwen/Qwen2.5-Math-PRM-7B`，scorer 输入上限为 4,000 tokens；论文运行把它部署在独立 GPU 上。不确定性 scorer 根据 token log-probability 计算 entropy、perplexity、sequence probability 或 probability differential。当前 LLM-critic 配置默认使用 value prompting、三个判断样本、temperature 0.7 和最多 300 tokens，但 critic model 必须由用户明确指定。每个 scorer–strategy 组合都独立网格搜索聚合函数与评分窗口。PRM 的 offline Best-of-N 对全部步骤取乘积；其他 offline scorer 使用其最佳聚合与 window 5；beam-search 报告包含 window 5 下的 mean/min，以及 ReProbe 对全部步骤取 mean；MUR 使用默认值。

**模型与解码预算。** Qwen2.5-Math-7B-Instruct 使用 temperature 0.7、top-p 0.8、top-k 20、最多 4,096 tokens；Qwen3-8B 使用 0.6、0.95、20、最多 32,768 tokens；GPT-OSS-120B 使用 0.6、0.95、20、最多 65,536 tokens。Qwen2.5 beam search 的 width 为 5、候选数为 8、最多 30 步；Qwen3 beam search 的 width 为 3、候选数为 5、最多 250 步。Offline Best-of-N 与 self-consistency 使用 8 个样本。MUR 每步使用 8 个候选、momentum 0.9，并分别为 Qwen2.5/Qwen3 设置 50/250 个最大步骤。Qwen3 extended thinking 最多允许 3 次续写。适用时，结果在三个 seed 上平均。

**评估契约。** 数学与科学任务主要使用精确匹配，答案解析不完整时可选 LLM-as-judge。HumanEval+ 与 MBPP+ 使用 EvalPlus 基础测试和扩展测试。KernelBench 检查语法、编译与数值正确性。这些终点检查确定 benchmark 结果，不提供步骤级真值。由于没有发布 coding PRM，论文在代码任务上把数学训练的 PRM 当作代理。

**计量与持久化。** 生成器与 PRM 每次前向成本按 \(2NT\) FLOPs 近似，再求和得到理论 TFLOPs；共享 prompt context 只计一次，不确定性开销被视为可忽略。请求记录会捕获 wall-clock，但论文没有做固定 serving 条件下的延迟比较。Hydra 组合 model、generation、strategy、scorer 与 dataset 配置，写入本地运行输出，支持 resume，并可选记录到 W&B。公共仓库跟踪大量输入配置，却不包含解析后的论文运行输出、W&B 导出或不可变 config-hash 清单。
