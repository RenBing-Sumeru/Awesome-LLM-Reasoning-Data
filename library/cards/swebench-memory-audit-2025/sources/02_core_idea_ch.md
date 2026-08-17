本文贡献可以概括为一个最小上下文、答案级的记忆探针：让两个 Claude Sonnet 快照在既有基准和较新的对照 issue 集合上预测 gold 修改文件路径，再用透明的集合覆盖率给回答打分。

对比评测面包括 SWE-Bench-Verified 全部 500 个 issue；BeetleBox 的 500 个 issue，即从 Ansible、Apache Airflow、PostHog、Localstack 和 Langchain 各保留 100 个经人工判断为不模糊的 issue；以及 SWE-rebench 2025 年 1 月的 109 个 issue 和 2025 年 9 月的 50 个 issue。每条样本都在 issue-only 与 issue-plus-file-structure 两种条件下评测；后一条件只提供仓库相对文件名和路径，从不提供文件内容。

Claude 3.5 Sonnet（`claude-3-5-sonnet-20240620`）与 Claude 3.7 Sonnet（`claude-3-7-sonnet-20250219`）对每个样本和条件各生成一次自然语言文件定位回答。公开解析器把回答转成去重后的路径列表，`metric.py` 再针对 gold `updated_files` 应用两个答案级判据：complete coverage 要求 `gold ⊆ predicted`，partial coverage 要求交集非空。

该反馈契约只能观察路径集合包含关系。它不能判断模型是记住了 issue、根据文件名语义猜中模块、利用了对公开仓库的广泛熟悉度，还是解决了底层缺陷；论文的覆盖率主指标也不惩罚多报路径。流程不执行代码，不检查补丁或测试，也没有 LLM judge、reward model 或 environment 提供反馈。

相较通常的 SWE-Bench agent 评测，这项工作移除了交互和基于测试的成功判定，使可疑的剩余定位能力变得可测；相较 BeetleBox 与 SWE-rebench，固定的 SWE-Bench-Verified 集合是被怀疑的暴露面。所得证据与基准记忆相符，但不是对 Claude 训练数据的直接检查。
