论文覆盖 TabMWP、ChartQA 的 human-written split、CLEVR-Math、MiniWob、来自 UniGeo 的英文 GeoQA 翻译，以及 M3CoT。源对象包含图像、问题、可选选项或结构化上下文和参考最终答案；MiniWob 还提供 HTML，并要求生成表示键盘或鼠标动作的 Python code。主要实验使用 Qwen-VL 和 LLaVA-1.5，更强 backbone 实验在 GeoQA 上使用 Qwen2-VL-7B-Instruct。基础 checkpoint 和 tokenizer 的精确 revision 未固定。

主要实验中，GPT-4o 分别为 1,000 条 TabMWP、800 条 ChartQA、1,000 条 CLEVR-Math、550 条 MiniWob、936 条 M3CoT 和 536 条 GeoQA 样本提供 CoT 热身数据。此后，由当前任务特定 MLLM 采样完整 rationale-answer 解答。论文默认每个样本每轮新采样三个解答，并按任务运行四轮或五轮直到表现饱和。公开生成 helper 使用 top-k 50、top-p 0.95、temperature 0.9 和最多 384 个新 token；生成、shuffle 和候选顺序种子未披露。

在答案验证方面，TabMWP 提取并规范化选项字母或自由形式数值，再做相等比较。ChartQA 接受与参考值相差不超过 5% 的数值预测，否则使用不区分大小写的文本精确匹配。CLEVR-Math 提取 `Answer:` 之后的整数并比较相等性。MiniWob 提供环境成功信号。GeoQA 和 M3CoT 使用各自 benchmark evaluator。这些规则依据终局结果生成正负完整解答池；没有 process verifier 检查中间视觉感知、符号、计算或推导是否有效。

每次重建数据时，direct SFT 对象取最新正例。若正负标签同时存在，refinement 对象把最新负例嵌入 prompt，并以最新正例为 target。Selection 对象恰好包含三个候选：在条件允许时，最新两个正例加最新一个负例，以及最新一个正例加最新两个负例，分别构成一条记录，展示顺序会被随机打乱。Selector 的 target 是从正例 completion 中提取的正确最终答案，而不是候选 ID、置信度、reward 或对其他候选错误原因的说明。

Multi-task causal SFT 混合 direct solution、self-refine 和 self-select 对象。Table 6 报告 global batch size 64、learning rate 3e-5、3 个 epoch、带 warm-up ratio 0.1 的 constant schedule、weight decay 0 和 AdamW。Qwen-VL 的 LoRA rank/alpha 为 64/16，LLaVA-1.5 为 128/256，dropout 为 0.05，并使用 DeepSpeed ZeRO-2。更新后的 checkpoint 生成下一轮样本池，因此候选生成分布会随迭代变化。

主 controller 默认五个 loop：loop 0 使用 direct QA 加 GPT 热身数据训练，之后从每个已完成的早期 checkpoint 各采样三个文件，并把它们累积起来重建数据。到最后一轮，每个样本最多可接触来自四个 checkpoint 的 12 个生成候选，但实际数量和解析失败数未发布。测试时通常采样三个完整解答，将它们连同原始图像和问题放进 MLLM 上下文，再取得一次 greedy selector response；论文未披露 threshold、tie rule 或 abstention mechanism。

主仓库公开了 TabMWP、ChartQA 和 CLEVR-Math 共 40,457 条 direct-QA 记录，以及每个基础模型变体 2,800 条 GPT-CoT 热身记录——Qwen-VL 与 LLaVA-1.5 两个变体合计 5,600 条。这些 JSON 记录只有 `image` 和两轮 `conversations` 结构。自生成 rollouts、终局标签、迭代身份、派生 direct/refine/select 决策、`D_REF` 与 `D_SEL` 语料、最终混合文件、checkpoints 和 run logs 都在本地生成，官方 release 未将其冻结。
