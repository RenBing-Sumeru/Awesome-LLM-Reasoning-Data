短视频描述通常只说主动作，遗漏时间顺序、场景变化、镜头运动和物体交互。

该工作收集 4 万条详细描述，训练 ShareCaptioner-Video，并把时序事件描述用于视频理解和生成监督。 该方法直接产出 ShareGPT4Video。本卡的决策边界是可下载训练记录，而不是只有模型的报告或只用于评测的基准；单条记录包含 视频编号或帧、时序事件线以及详细长描述或派生指令回答。

L4 事实：已于 2026-07-27 核验 NeurIPS 2024 Datasets and Benchmarks 官方页面、https://huggingface.co/datasets/ShareGPT4Video/ShareGPT4Video 的实际公开记录、规模和条款。收录理由是论文中心贡献直接构造或筛选可序列化的后训练目标。
