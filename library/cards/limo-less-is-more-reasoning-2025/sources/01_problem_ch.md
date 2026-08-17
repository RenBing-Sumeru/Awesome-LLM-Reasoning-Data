官方发表 venue 是 **COLM 2025**，由 camera-ready 页眉、COLM accepted-paper list 和 OpenReview publication record 共同确认。论文是 2025 年 7 月 29 日的 arXiv:2502.03387 v3。没有发现该工作被 ICLR 接收的官方记录。

LIMO 研究的问题是：knowledge-rich base model 能否只用极少但经过强筛选的长推理 demonstration，获得强数学推理行为。工程问题不只是如何在 800 行上 fine-tune，而是如何通过 model-based difficulty estimation、benchmark 去重、多 teacher 解答生成、人工检查和词法 trace scoring，把数千万问题池压缩下来。

一条最终 LIMO-v2 记录包含：

| 字段 | 发布内容 |
|---|---|
| `question` | 数学问题 |
| `solution` | 被选为 SFT target 的长自然语言推理链 |
| `answer` | 最终答案 |

这三个字段没有暴露 source dataset/item、source revision、teacher、difficulty pass count、candidate solution、quality-score component、selection rank、correctness-check result、去重决策或 release version。

版本身份是关键边界。最终 COLM/arXiv v3 recipe 与官方 **LIMO-v2** 数据集/模型含 **800** 条训练样本。官方 legacy LIMO v1 数据集/模型含 **817** 条。在已检查 GitHub commit `2284c6a0e6653aa8894bd12fdecc1212ba706c3a` 中，`train/data/limo.json` 仍打包 817 条 v1 数据，尽管 README 把 v2 作为最新版本。两个发布都属官方，但对应不同论文版本，不能混合。

该工作属于 **Data Construction & Open Release Recipes**，因为主要对象是从海量候选池到 2,125 个问题的 LIMO-Pool，再到 800 条发布三元组的隐藏漏斗。它不是 process supervision 或 RLVR：完整 reasoning string 是 answer-level SFT target，没有独立 step label、process reward、preference pair、policy rollout group 或 environment trajectory。

论文、v1/v2 数据与模型 revision、固定 repository tree、training config、bundled data 和 evaluation code 支持完整双语材料达到 L4。L4 不等于构造可复现：candidate ingestion、difficulty-filter code、teacher-generation job、最终 correctness checker、n-gram audit、lexical scorer、逐条 lineage 和 rejection record 仍未公开。
