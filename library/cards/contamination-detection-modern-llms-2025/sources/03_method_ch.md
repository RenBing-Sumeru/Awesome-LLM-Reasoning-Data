公开 probe input 覆盖 15 个 benchmark view：AGNews train/test；ARC-Challenge train/dev/test；BBH full；DROP train/dev/test；GSM8K train/test；HumanEval full；IMDB train/test；MMLU test。每个 `.txt` 文件含 100 个 JSON 格式记录，通常暴露 `idx`、`question`，以及可选的 `label` 或 `category`。每个配套 Token Overlap CSV 含 10 条记录，字段为 `text`、`first_piece`、`second_piece`，以及可选的 `label`。论文与仓库都未提供每个 view 的 upstream revision、逐行 source ID、采样脚本或完整过滤 ledger。

WPQ 由 LLaMA-3-70B-Chat 生成四个语义近似的扰动版本，最多尝试五次。原始样例被插入四个非空选项之一，再增加第五个 `None` 选项。扰动生成使用 temperature 0.9、top-p 0.9；被测模型推理 temperature 为 0。HumanEval 只扰动 docstring，DROP 扰动 passage 与 question，若干选择题/分类数据集在扰动前去除 answer choice。最终在 100 条记录上聚合准确率。

Local Order 采样一个 target，并提供四个候选记录，名义上恰有一个是原始数据中的直接后继。MMLU 与 BBH 的候选限制在同 category，prompt 包含 dataset description、name、split 与记录本身。它使用 100 个 target，名义随机基线为 25%。复现还需要完整的原始顺序数据池，但代码所引用的 `full_datasets` 目录未发布。

Token Completion Overlap 把 10 条记录分成 prefix 与参考 suffix，分别取得 general completion 与 dataset-guided completion，再与 suffix 比较。GPT-4 在 temperature 0 下判断 exact/near match；论文把一个 exact 或两个 near match 作为检测阈值。ROUGE-L score 先四舍五入到两位小数，随后公开代码对两组各 10 个 score 独立重采样 10,000 次，在没有固定 bootstrap seed 的情况下报告单侧经验 p-value。

Min-K% 使用 `k=20`，每个 split 取 100 个样例，保留最低概率的五分之一 token，并报告描述性的 split-level mean 与 standard deviation。Canonical Order 用换行连接 question-answer，100 条记录分成 10 个 shard；每个 shard 计算一个 canonical 顺序和 25 个 shuffle 顺序，再对 10 个差值做单侧比较。公开统计量使用 NumPy population standard deviation（`ddof=0`），却使用自由度 `n-1` 的 Student-t CDF。

oracle 构造保留所选 benchmark fraction 的原始问题，以 LLaMA-2 生成的 chain-of-thought 替换答案，并把四个连续样例打包为一个 SFT item，以保留部分局部顺序。LLaMA-2-70B-Chat 以学习率 `8e-6` 微调三轮。optimizer、batch size、precision、sequence length、hardware、seed、training command、corpus、checkpoint 与 hash 均未披露，也没有 token 数匹配的非 benchmark SFT 对照。
