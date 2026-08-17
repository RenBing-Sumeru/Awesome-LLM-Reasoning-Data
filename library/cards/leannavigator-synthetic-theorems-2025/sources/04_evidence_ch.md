论文报告生成 470 万条定理、约 10 亿 token；作为对照，ReProver 数据集为 112,000 条定理和 5,700 万 token。可见的精确数量来自官方训练 notebook，其输出明确写着载入了 **4,702,639 个样本**。这能有力证明 notebook 本地输入的长度，但 notebook 读取的是 `prover_training_data_6.json`；没有校验和清单把该本地文件与 Zenodo 压缩包绑定，Zenodo 记录本身也没有公布行数。

发布检查比论文的取整总数更直接地确定了载荷形态。Zenodo 记录 13989482 以 CC BY 4.0 发布一个 204,343,176 字节的 `leannavigator_dataset.tar.xz`，公开 MD5 为 `ef1971d4cdec50d06fb94704b0ee16f4`。压缩包中包含一个 2,690,343,143 字节的 `leannavigator_dataset.json`，开头是由二元素数组组成的顶层 JSON 数组。GitHub 官方 10,000 行样本确认记录是两个字符串构成的 `[state, proof/tactic text]`。已接受审计没有完整重算压缩包校验和或行数。

搜索效率证据来自作者报告。在随机选取的 121 个 MIL 定理上，每个定理给两分钟，LeanNavigator 平均到达 2,035.45 个状态，ReProver 为 21.69。论文把差异归因于 FAISS 模板检索与实例化，而不是自回归 tactic 生成；平均应用一个 tactic 的时间报告为 0.12 秒。

下游证明生成的 Table 3 报告：

| 模型 | MIL | MiniF2F |
|---|---:|---:|
| LeanNavigator flan-t5-base | 39/117 | 104/493 |
| LeanNavigator flan-t5-small | 25/117 | 52/493 |
| ReProver | 30/117 | 99/493 |

每个定理有两分钟预算；在每个状态，模型最多尝试十次，以找到一个通向未见状态的有效 tactic，然后从第一个有效状态继续。这些分数能证明论文设置下的端到端系统表现，但不能独立证明记录新颖性、安全切分、发布完整性、权利、去污染或对后续 Lean/mathlib 版本的兼容性。
