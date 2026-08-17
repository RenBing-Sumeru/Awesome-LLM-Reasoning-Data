论文时点的流程可在模块层面重建如下。

1. **种子选择与验证。** 依据下载量、社区参与度和报告的下游模型表现，对 Hugging Face 文本后训练数据集排序，从 General、Math、Code、Science 四域选出 83 个种子。待处理队列先去重，再通过 Hugging Face API 验证候选；有效日期取 Hugging Face 时间戳与关联论文日期中较早者。超出 2020 年后现代 LLM 范围的候选会终止递归。
2. **检索并清洗证据。** GPT-5.1 sourcing agent 从数据集 README 定位仓库、博客和论文；Gemini-2.5-Flash extracting agents 获取网页与 arXiv 材料，删除元数据头、代码块、HTML 和论文无关段落，再组成共享证据上下文。
3. **抽取来源声明。** 并行 GPT-5.1 tracing agents 区分真正的构造来源与评测基准、baseline、偶然引用；每条候选边被序列化为来源、五类关系之一、置信度和证据。
4. **聚合、消歧与递归扩展。** Gemini-2.5-Pro aggregation agent 合并重复声明，并借助在线检索与 API 检查把别名解析为 `org/name` ID。时间验证拒绝晚于目标数据集的来源；缺乏支持的低置信边被剪除，其他低置信案例按论文描述交给专家。接受的来源重新进入队列，DFS 持续到找不到祖先或触及日期截止条件。
5. **审计字面重叠。** 对完整 `(instruction, input, output)` 三元组计算精确哈希，以量化源路径间交集；对 `(instruction, input)` 做精确匹配，以测量 Omni-MATH、TheoremQA、LiveCodeBench、TruthfulQA 和 SciBench 向下游训练集的泄漏。
6. **构造多样性语料池。** 从 212 个唯一叶节点按出度排序，去除没有下游使用的节点，排除小众领域和非问答源，保留 31 个数据集。把约 870 万条记录统一为 Alpaca 格式，过滤非英文与长度异常记录，先 exact-Q 去重，再采用 128 个哈希排列、阈值 0.7、8-gram 的 MinHash，最终报告 57 万条指令。
7. **只评测，不训练。** 使用 Qwen3-Embedding-8B、4096 维表示指令，并用 Vendi Score 与 Centroid Distance 同八个公开 baseline 比较。论文没有报告用这 57 万条语料进行 SFT 或其他下游训练。

复现需要固定论文时点代码、模型端点、prompt、API 响应、置信度与专家分流阈值、智能体预算、随机种子、83 个种子清单、430 个节点与 971 条接受边、31 源记录清单、去重日志和许可。当前仓库没有固定这套完整运行：其 CLI 默认模型已是 `gpt-5.4`，而附录 A 按角色使用 GPT-5.1、Gemini-2.5-Flash 和 Gemini-2.5-Pro。
