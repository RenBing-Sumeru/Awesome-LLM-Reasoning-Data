可重建的流水线如下：

1. **构建模板数据库。** 从 Matplotlib、Vega、EChart 和 Seaborn 归纳 9 个大类/62 个子类。Claude 3.5 生成结构化数据/代码模板，并根据收集到的金融、科研及其他真实图表复刻风格。模板带有领域、主题、用途、定义、场景和数据特征标签，细节再经人工修订。来源 URL、逐模板溯源和权利记录为 unknown。
2. **生成数据与图表。** 在 60 个领域中设计 key question，再通过 RAG 选择代表性图表类型/模板。LLM 编写上下文叙事与 Python 数据生成代码，其中包含趋势、随机函数、受控噪声及可选异常值；执行代码生成 CSV，而不是直接接受模型输出表格。另一轮 LLM 分析可视化需求、随机化 style guidance，并编写 `preprocess`/`plot` 函数。渲染失败时把代码与报错返回模型迭代修复。generator 身份、sandbox/库版本、超时、最大重试次数和随机种子均为 unknown。
3. **生成问题、程序、推理与答案。** Qwen2.5-VL-72B 用于从可见图表信息生成问题。对计算密集任务，两步 prompt 先依据图表代码/源数据生成问题与分析 Python 代码，再执行程序；后一条 prompt 要求模型完全信任代码输出，把逐步 explanation 写成仿佛从图表推得，并避免提及代码。这形成了有用的可执行 lineage，也带来 rationale 依赖不可见源数值而非清晰像素的风险。
4. **筛选与修订。** 删除异常输出和执行失败；人工纠正模型预标后，用 700 个正例和 500 个负例训练 Qwen2-VL-2B 图表质量分类器；多模态 judge 检查图表相关性、数据准确性和逻辑一致性。小模型高温尝试十次，以失败次数估计难度并删除过易项。benchmark 还要重平衡难度、人工核验/修订、优化 judge prompt，并删除判定不一致样例。约 5,800 条样本先由 Claude 3.5 评估，再对初判错误项进行 Claude/人工双重检查；其中 508 条需修改或删除，报告 instruction accuracy 为 91.24%。
5. **使用不同目标训练。** 完整 CoT-SFT 冻结 vision encoder，以学习率 1e-5、batch size 64 训练两轮。30K GRPO 集从难度 3--9 抽样，含 6,958 条判断题、6,734 条选择题、2,657 条短答题和 13,651 条填空题。GRPO 每个 prompt 采样七条 rollout，全局 batch 含七个 prompt，学习率 1e-6，KL 系数 0.04，采用 k2 KL 近似，并使用 8 张 A100 80GB。二元 format reward 检查指定 think/answer 标签；闭合题型用 exact match，开放题型用 Qwen3-32B 判定答案。所提供 CoT 不进入 reward。
