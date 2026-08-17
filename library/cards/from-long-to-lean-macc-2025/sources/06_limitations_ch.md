**长度不等于有效性。** 停止 predicate 只观察最新修订是否长于前一轮。更短 rationale 可能遗漏必要前提、引入逻辑错误，或只是更简洁地改述；更长版本反而可能修复错误。选择没有逐轮 answer checker、semantic-equivalence judge、process verifier 或 faithfulness metric gate。PPL 与 benchmark accuracy 是配置级汇总，不是逐记录保障。

**答案暴露改变数据对象。** 每次 compressor 调用都收到最终答案。因此，选中 rationale 是 label-conditioned，不能作为目标模型原本如何解题的 answer-blind trace 来审计。它可能围绕已知终点进行事后合理化、复制答案相关线索，或掩盖错误推导。下游 SFT accuracy 无法揭示这些行为是否出现在具体记录中。

**已发布 selector 不一致。** 算法 1 规定严格回弹时选择前一轮，长度相等则继续。附录表 6 却把 GPT-4o-mini 第 8 轮标为蓝色，即使它明显长于第 4–7 轮。表 5 也在后续候选文本相同或近乎相同时标记了选中轮。缺少精确 token 数、tokenizer revision、selected-round 字段与停止日志，无法重建附录标签或把它们同伪代码协调。

**没有实现或生成语料。** 官方仓库在已检查 commit 上只有 `README.md`。其中没有代码、`requirements.txt`、独立 prompt 文件、配置、模型/API 固定、数据、schema、计数、split、checkpoint、训练记录或评估 harness。原始 \(r_0\)、全部中间 \(r_i\)、被丢弃回弹、选中 \(r^*\) 与最终 SFT 样本均缺失。算法 1 的概念输出 \((x,r^*)\) 不是机器可读发布。

**预算未知与模型漂移。** 最大构造轮次 \(T\) 未披露，而不同图表使用 2–10、2–5、0–5 与 0–8 等范围。temperature、top-p/top-k、seed、timeout、重试、逐调用上限、输入/输出 token、延迟、成本、失败和 API snapshot 均为 unknown。外部 provider 可能改变模型行为；未固定 compressor 与 tokenizer 会改变修订文本、token 长度、回弹位置与选中语料。报告的 16,384 最大推理/训练长度不能证明压缩调用预算也是 16,384。

**来源、split 与谱系歧义。** 精确 GSM8K/MATH/MATH-500/AIME24 构造行与上游版本不可用。形式化第 3.2 节把 \(r_0\) 归于目标模型 \(S\)，但随 compressor 变化的原始长度和 “Compressor Origin Length” 使实际作者归属未解决。生成数据 split、prompt 数、原始/选中轨迹混合比例、排除项、转换 hash 和记录级训练/评估映射均为 unknown。

**估计器泄漏风险。** performance estimator 每个目标模型只有 \(n=20\) 个配置行，并采用 5-fold cross-validation 与 80/20 procedure。论文没有报告是否按 compressor 对相关轮次分组，因此相邻配置可能跨越 train/test fold。这是审计风险，而不是已经发生泄漏的证据；代码不可用使问题无法解决。

**污染与权利。** 论文没有披露 prompt 去重、train-test overlap、语义去污染、answer-template leakage 或 family-level split audit。ACL 论文是 CC BY 4.0，但该许可不覆盖代码或生成数据。仓库 README 的 MIT badge 指向不存在的 `LICENSE`；实现和生成语料许可证仍为 `unknown`，上游 benchmark 与 API 输出再分发权利也未知。

**泛化与归因。** 研究覆盖数学推理并依赖外部 compressor，引入作者所述的模型特定偏差、预处理延迟与资源成本。task-agnostic prompt 和有限 estimator feature 可能无法迁移到其他领域。Benchmark 增益混合了轨迹选择、答案访问、额外 API 预处理、compressor 强度、原始轨迹混合与 SFT，不能单独归因于更高质量的压缩数据。
