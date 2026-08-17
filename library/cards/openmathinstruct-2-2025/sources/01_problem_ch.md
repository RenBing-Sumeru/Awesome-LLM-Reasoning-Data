ICLR 官方 proceedings 将该工作列为 **ICLR 2025** conference paper；arXiv:2410.01560 首次公开于 2024 年。本卡采用已确认的会议发表年份 2025，并以 33 页论文与附录、固定版本的 Hugging Face 数据卡和 size manifest、NVIDIA 模型 collection，以及 NVIDIA-NeMo/Skills 官方构造、训练、评测和 majority-aggregation artifact 为发布分析依据。

它要解决的具体问题是：如何扩展开放数学 reasoning SFT 数据，同时区分 solution format、teacher capacity、answer filtering、question diversity、demonstration 数量和 student scale 等通常被捆绑的变量。OpenMathInstruct-2 对这些选择做实验，再用 Llama-3.1-405B-Instruct 作为 teacher，构造公开的 GSM8K/MATH 衍生数据。

一条发布记录恰好包含四个字符串：

| 字段 | 含义 |
|---|---|
| `problem` | 原始或增强数学问题 |
| `generated_solution` | 用作 SFT target 的 teacher-written worked solution |
| `expected_answer` | 原始题使用来源 ground truth；增强题使用 32 个 teacher solution 中最常出现的抽取答案 |
| `problem_source` | `gsm8k`、`math`、`augmented_gsm8k` 或 `augmented_math` |

公开 `train` split 的准确行数是 **13,972,791**。这是 row/pair 数，不是不同问题的准确数量。附录 A.3 表 5 报告四舍五入后的 607.3K 个 unique question 和 13.97M 个 question-solution pair；准确整数 unique-question count 未披露。`train_1M`、`train_2M` 和 `train_5M` 是 `train` 的重叠 fair-downsampled subset，不是额外八百万条独立记录，也不是 validation/test split。

该工作属于 **Data Construction & Open Release Recipes**，因为它公开了两条 augmentation 分支、答案聚合、格式/长度过滤、去污染、subset 构造和 SFT recipe。它不是 process supervision、preference、RLVR 或交互式 agent 发布：公开对象中没有 step label、preference pair、reward、action state 或 environment trajectory，唯一有直接证据支持的训练用途是 SFT。

完整双语分析和经核验的官方 artifact 支持本卡达到 L4。该等级并没有消除发布边界：逐条记录缺少 seed ID 与 revision、teacher revision、candidate set、vote margin、rejection reason、contamination judgment 和 per-row license/attribution。当前 Skills 仓库还是 2026 年版本的 recipe 重建，而不是已确认的 2024 数据构造 immutable historical manifest。
