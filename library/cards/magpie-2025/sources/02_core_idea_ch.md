Magpie 通过两次采样，把开放权重已对齐模型中的潜在指令分布转成可检查的训练记录：先从空的聊天模板前缀采样用户请求，再通过常规模板采样回答。与 Self-Instruct 一类种子扩展方法相比，真正改变的是提示来源，不再由种子问题或任务表约束生成范围；教师模型和奖励模型仍然决定内容与筛选，而定义本分类的是开放的静态 SFT 对话，不是偏好对或在线环境。

Google Scholar 引用数：378（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Magpie%3A+Alignment+Data+Synthesis+from+Scratch+by+Prompting+Aligned+LLMs+with+Nothing&author=Zhangchen+Xu&hl=en）

开源数据：有
数据集名称：Magpie 数据集家族；本卡实际审计 Magpie-Pro-300K-Filtered
官方地址：https://huggingface.co/datasets/Magpie-Align/Magpie-Pro-300K-Filtered
规模：原始 Air/Pro 共 4M 条对话；审计的筛选子集包含 300,000 条训练记录和三个分片，实际读取的首个分片有 100,000 行
记录形式：uuid 加 conversations，其中每一轮含 from 和 value；实际读取的记录包含一条 human 指令和一条详细 gpt 回答
文件或存储格式：Parquet；完整官方家族还分别开放原始版、筛选版、多轮版、偏好版和不同模型生成的数据仓库
领域与语言：以英语通用指令为主，覆盖信息检索、写作、建议、规划、数学和代码；另有受控领域与多语言版本
构造与筛选：Llama-3-Instruct 生成两轮内容，再由质量与难度标签、回答奖励、最近邻距离、完整性、重复、安全与长度规则组成可配置筛选器
许可与访问限制：公开且无门禁；审计数据声明采用 Llama 3 许可，代码为 MIT，其它版本还须遵守相应教师模型条款
预期用途：监督微调、指令数据分析、混合配方设计和可选的偏好优化
