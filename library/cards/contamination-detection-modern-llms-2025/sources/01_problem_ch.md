论文正式发表于 COLING 2025 主会论文集第 5058–5070 页。它考察五种常用或探索性的污染检测器，在四个现代语言模型与八个基准上是否仍然可靠，尤其关注训练暴露以指令微调而非原样预训练文本的方式加入时的表现。被测模型是 GPT-4（`gpt-4-0613`）、Claude 3 Sonnet、LLaMA-3-70B-Chat 和 LLaMA-2-70B-Chat；基准包括 GSM8K、MMLU、BIG-Bench-Hard、ARC-Challenge、DROP、HumanEval、AGNews 与 IMDB。

研究并未定义单一的数据对象。每个审计案例把一个模型、一个基准 split 与五种 probe 接口之一连接起来：Word Perturbation Quiz（WPQ）、Local Order Quiz、guided/general Token Completion Overlap、Min-K% token likelihood 或 Canonical Order likelihood comparison。它们输出的分别是 quiz 正误、exact/near match、ROUGE-L bootstrap p-value、低概率 token 的 likelihood 摘要以及顺序偏好 p-value；论文主要报告 model-by-split 聚合结果，而不是逐实例的污染真值标签。

第二类对象是受控 oracle 构造。研究以学习率 `8e-6` 对 LLaMA-2-70B-Chat 做三轮指令微调，有意加入选定比例的基准数据。问题保持原样，原始答案被 LLaMA-2 生成的 chain-of-thought 答案替换，每四个连续样例打包成一个训练项。该设计只建立了“已知新增暴露”，并不能说明模型在此之前历史上是干净的；base checkpoint 已有的暴露仍是 unknown。

公开仓库只构成部分 probe release。它包含 15 个 JSON 格式的 `.txt` 文件，每个 100 行，共 1,500 行；另有 15 个 Token Overlap CSV，每个 10 行，共 150 行。这些都是处理后的基准切片，不是污染标注。oracle SFT 语料、checkpoint、完整原始顺序数据池、生成的选项或 completion、检测器输出与运行日志均未公开。

该工作属于 **Data Construction & Open Release Recipes**，因为它对本 track 的核心价值是展示如何把 benchmark row 转换为方法特定的 audit record，并构造一个已知新增暴露的 SFT 对照。它不是干净的污染 benchmark、通用检测器或推理训练语料。`sft` 标签只描述 oracle 的构造方式；公开的 detector probe 用于 audit 与 evaluation，不是模型训练 reward。
