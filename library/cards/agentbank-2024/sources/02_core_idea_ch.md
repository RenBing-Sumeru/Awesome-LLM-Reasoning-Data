一句话贡献是：先独立恢复正确动作序列，再为动作补写理由，并把动作、理由和环境观察串成大规模监督示范。连续动作任务可用失败探索加已知答案重写，离散动作任务可读环境状态做搜索，已有正确过程则可改写成统一轨迹；任务执行结果构成反馈契约。它属于指令、示范与理由数据，因为发布的训练目标包含每轮思考和动作，而不只是成功标签。最接近的对比是 AgentInstruct 与 Agent-FLAN，前者规模更小，后者更偏重混合比例设计。

Google Scholar 引用数：57（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=AGENT+BANK%3A+Towards+Generalized+LLM+Agents+via+Fine-Tuning+on+50000%2B+Interaction+Trajectories&author=Yifan+Song&hl=en）

开放数据集：是
数据集名称：AGENT BANK
官方地址：https://huggingface.co/datasets/Solaris99/AgentBank
规模：论文报告 16 个任务、51,287 条轨迹；审计时托管版本为 19 个配置、53,205 行
记录形式：指令之后交替出现带理由的动作和环境观察
文件与存储格式：由 Hugging Face 配置组织，并提供 Parquet 转换
领域与语言：英语推理、数学、编程、网页导航、具身任务和工具使用
构造与过滤：按任务采用探索、答案强制、启发式搜索或改写，再用原生环境执行检查
许可与访问限制：公开且无需门禁，采用 Apache-2.0；仍需遵守上游任务条款
预期用途：掩码式轨迹监督微调，以及跨任务代理泛化分析
