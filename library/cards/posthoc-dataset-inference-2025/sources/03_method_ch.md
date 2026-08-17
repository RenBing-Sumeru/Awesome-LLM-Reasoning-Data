输入是可疑自然语言文档与一个目标 causal language model。单作者实验收集 1,400 篇文章，去除图、表、视频、超链接及其他非文本元素，并以其中 450 篇作为已知 member，对 deduplicated Pythia-410M 做一轮 LoRA fine-tuning。Pile 实验把 train 视为 member，把 validation/test 合并后视为 non-member。所选 subset 覆盖网页、学术、生物医学、法律、代码、邮件、多语种与聊天文本；论文排除了四个被描述为可能存在版权问题的 subset。

构造参考集时，先把文档切成短序列，限制每篇来源文档的序列数，打乱后按 sequence level 划分。论文为 generator inference 预留 2,000 条序列，其余用于训练；仓库还把索引 2,000–3,999 分配给 generator validation。Meta Llama 3 8B 通过 next-token prediction 做 LoRA fine-tuning。每条 inference sequence 在共享 prefix 处分开：自然 continuation 成为可疑 suffix，generator completion 成为合成 held-out suffix。Pile 配置使用 32 或 64 token，并按 subset 设置每文档上限；作者建议选择使 text-classifier AUC 最低的 token length。

generator 使用 LoRA rank 32、100 个 epoch、0.03 warm-up ratio 和 linear scheduler。渲染后的附录没有显示数值 learning rate；generation temperature、decoding budget、随机 seed、精确 target checkpoint 与论文运行所用 outlier fraction 仍是 unknown。公开 Pile archive 被描述为每个 subset 四个 JSONL：member original、member generated、non-member original 与 non-member generated。`text` 保存 clean text，其他 entry 保存 augmentation。

校准先把配对的可疑数据与合成数据划分为 classifier training 与 test 部分。随机初始化的两层 GPT2-style text classifier 只接收文本；combined classifier 同时接收文本和目标模型的 MIA feature，例如基于 likelihood 的 score。两类 classifier 训练 20 个 epoch，正权重 linear membership layer 训练 200 个 epoch。正权重通过 sigmoid parameterization 约束，避免方向相反的生成 artifact 获得负权重并伪装成 membership。

对每组自然/生成 pair，流水线计算 text-only separation 与 combined separation。单侧 difference-comparison t-test 检验加入目标模型 membership feature 后，区分能力是否增强。检验在不同随机划分下重复，并用 Sidak family-wise correction 聚合。阈值为 0.05：拒绝 null hypothesis 支持集合级 membership，未拒绝则只能算 inconclusive。论文用 1,000 条自然样本和 1,000 条合成样本训练每个 classifier，再以另一组等规模配对数据做检验；总 test sample count 被等同于目标模型 query 数。

复现时必须固定目标模型权重、Meta Llama 3 8B revision、来源语料 snapshot、分段与上限、sequence shuffle、generator split、LoRA 与 decoding setting、MIA feature list、outlier policy、classifier architecture、随机划分、检验方向及多重比较 correction。当前仓库在本地加载目标模型权重且没有 tagged release，因此不能证明它能通过 closed sampled-text-only API 运行。
