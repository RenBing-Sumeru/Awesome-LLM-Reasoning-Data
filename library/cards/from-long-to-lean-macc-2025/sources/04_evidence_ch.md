**论文级证据。** 第 3.2–3.4 节、公式 1–5、算法 1 与附录 A.2 定义了概念链 \(x,r_0,r_1,\ldots,r^*\)，说明每次压缩提示都会暴露最终答案，把 token 长度回弹规定为停止规则，并描述选中 rationale 加答案的 SFT 格式。这足以核验构造配方与受支持的 `sft` 用途，却不能证明已有公开数据集或可运行实现。

**实验级证据。** 论文针对多个目标模型与 compressor/轮次设置，在 GSM8K、MATH-500 与 AIME24 上报告 accuracy、平均 CoT token、latency 和 Token Efficiency。图 3 研究固定 2–10 轮；表 9–11 对 2–5 轮列出配置级原始准确率、compressor accuracy、原始长度、compression rate、PPL、压缩长度和微调准确率。这些结果支持一个较窄结论：在报告设置下，选中压缩轨迹可用于训练生成更短推理的模型。它们不验证每条压缩 rationale 的正确性或忠实性，不隔离答案暴露效应，也不证明长度回弹是有效语义 selector。

**示例级证据与不一致。** 附录表 5–6 展示多轮文本与蓝色选中轮标签。表 5 为不同 compressor 标记不同轮次，但后续候选可能与选中候选在文本上相同或近乎相同；由于算法 1 不会因 token 数相等而停止，且没有逐轮计数，仅凭文本无法重建这些标签。更严重的是，表 6 把 GPT-4o-mini 第 8 轮标为选中，即使它明显长于第 4–7 轮；算法 1 却规定出现回弹时应保留前一轮。官方论文没有 tokenization 日志或代码来协调视觉标签与伪代码。

**发布证据。** ACL Anthology record、DOI、官方 BibTeX、arXiv record 和作者指定仓库均已核验。仓库历史检查到 commit `2046df78636495de86e9c015820295b16f1f63fd`，其中只有 `README.md`。原始 CoT、中间或回弹修订、选中记录、最终 SFT 样本、记录计数、来源 manifest、schema、split、token/PPL/正确性字段、checkpoint，以及代码/生成数据许可证均不存在。README badge 与安装命令不能替代缺失文件。

**解释边界。** 报告的下游提升来自作者实验，accepted evidence 中没有独立记录级复现。汇总 benchmark accuracy 不能验证数据 provenance、语义忠实性、去污染、许可、逐轮选择或拒绝行为。最强的证据支持型结论是：MACC 定义了一套答案条件化顺序压缩与 SFT 配方，同时存在与复现直接相关的 selector 不一致和空的实现/数据发布边界。
