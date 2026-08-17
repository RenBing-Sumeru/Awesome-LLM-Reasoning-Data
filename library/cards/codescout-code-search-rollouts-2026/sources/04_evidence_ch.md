**发布证据。** 本 Card 中最强的证据不是 benchmark 分数，而是固定版本的公开数据本身。两个 Parquet footer 与 Hugging Face dataset endpoint 均给出 **54,845 行**：其中 **39,040 条 CodeScout-14B**，**15,805 条 CodeScout-4B**。每个公开行都符合五字段顶层 schema，reward dictionary 公开定位总分与各分量。这些计数和标量列来自对完整发布的审计，而不是从 viewer 样本外推。

**尝试结构。** 14B configuration 含 9,760 个唯一 `instance_id`/step 分组，每组严格四行，`rollout_number` 为 0–3。4B configuration 含 1,979 个分组，覆盖 1,640 个唯一 task ID。其中 1,973 组包含八次尝试；其余六组分别只有 **1、2、3、4、5、6** 行。这既证明发布通常保留了论文中的多次尝试结构，也直接显示存在公开 manifest 未解释的不完整分组。

**失败保留与组内差异。** 两个 configuration 合计有 **8,281 行定位奖励为零**，46,564 行为正。14B 有 5,047 条零分和 33,993 条正分；4B 有 3,234 条零分和 12,571 条正分。在分组层面，14B 有 1,448 个零分/正分 mixed group、639 个全零组和 7,673 个全正组；4B 对应为 869、106 和 1,004。由此可直接确认，该 artifact 不是 best-of-\(n\) 或成功样本专用数据集。

**奖励分布。** CodeScout-14B 的平均定位奖励为 2.04919，其中 17,608 行达到满分 3.0；文件、module、entity 分量均值分别为 0.82059、0.68350、0.54511。独立 turn 项有 34,818 行为 1，4,222 行为 0。CodeScout-4B 的平均定位奖励为 1.84886，6,185 行满分；三个分量均值分别为 0.75195、0.60553、0.49139。4B 的 `multiturn_reward` 字段虽然存在，但 15,805 行全部为零，与 4B 配置不使用 14B 的四轮辅助奖励一致。

**预算核对证据。** 论文设置意味着 14B 名义 rollout 数为 \(300\times32\times4=38{,}400\)，4B 为 \(200\times8\times8=12{,}800\)，总计 **51,200**。公开发布却分别有 39,040 与 15,805 行，合计 **多 3,645 行**。在分组层面，14B 比名义 9,600 组多 160 组，4B 比名义 1,600 组多 379 组，其中包括六个不完整组。算术关系已经核验；原因究竟是 retry、restart、evaluation、duplicate 还是其他日志路径，仍为 unknown。

**论文与实现证据。** 论文和代码在 patch 衍生的三层 F1 verifier、结构化 finish 动作、异步 GSPO scaffold，以及最大步数未 finish 轨迹的 loss mask 方面一致。固定版本仓库还固定了 SkyRL 与 OpenHands SDK commit。但当前 14B/4B 脚本默认的 rollout/turn 设置与论文不符，`README_Training.md` 也没有端到端的不可变重放流程。因此，现有材料支持 construction recipe，却不足以支持报告实验的精确复现。

**结果证据边界。** 论文报告 CodeScout 模型在 SWE-Bench Verified、Lite 和 Pro 的 Python 子集上提升代码定位表现。这些是作者报告的模型结果，本次整理没有独立复现。它们说明该配方被用于训练，但不能证明每个发布行的归因正确、具备合法复用权、没有污染或足以重放。因此，数据质量判断基于 schema、计数、奖励语义、谱系与发布完整性，而不是 benchmark 增益。
