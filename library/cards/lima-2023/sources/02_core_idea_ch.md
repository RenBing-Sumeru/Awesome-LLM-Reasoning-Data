LIMA 的贡献是把“策展”设为主要实验变量：每条指令只配一条选定回答，序列化后作为 SFT target，并以使用大规模数据的 instruction-tuning 系统作为最近对照。它属于基础与入门类 Card，因为它把数据规模、来源质量和人类偏好反馈契约三件事区分开来。

Google Scholar 引用数：2277（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=LIMA%3A+Less+Is+More+for+Alignment&author=Chunting+Zhou&hl=en）

开源数据：有，但访问受限。

- 名称与地址：LIMA，https://huggingface.co/datasets/GAIR/lima。
- 规模与形式：论文训练集包含 1,000 条指令—回答示范；官方仓库提供 `train.jsonl` 与 `test.jsonl`。
- 记录格式：以 JSONL 保存的对话式指令与回答字段。
- 访问与许可证：Hugging Face 仓库需要申请访问，数据卡将许可证标为 `other`；获准下载并不自动意味着可以再分发。
- 预期用途：监督对齐实验，以及数据策展质量与数据规模的受控研究。
