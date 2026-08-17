该数据集同时序列化文字思考和中间图像，使模型学习在多步推理中主动生成视觉辅助。 相比只有文字的视觉问答推理轨迹，它把“问题、文字推理、最终答案、题目图像和一个或多个中间推理图像”变成可复用目标，并以“任务答案检查、渲染一致性、领域有效性规则和留出评测”作为反馈边界，因此中心贡献属于 Track 01 数据，而不是只发布模型、验证器或基准。

Google Scholar 引用数：51（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Zebra-CoT%3A+A+Dataset+for+Interleaved+Vision-Language+Reasoning&author=Ang+Li&hl=en）

开源数据集：是
数据集名称：Zebra-CoT
官方地址：https://huggingface.co/datasets/multimodal-reasoning-lab/Zebra-CoT
规模：182384 条交错视觉语言推理轨迹，覆盖 18 个领域和 50 余种任务
记录形式：问题、文字推理、最终答案、题目图像和一个或多个中间推理图像
文件与存储格式：多配置 Parquet 记录及图像文件
领域与语言：几何、物理、算法、二维与三维推理、具身规划、逻辑、游戏和视觉搜索
构造与筛选：任务渲染器和多模态教师生成交错文字与中间图像；任务答案检查、渲染一致性、领域有效性规则和留出评测
许可与访问限制：相关条款记为 `CC-BY-NC-4.0`；复用前必须逐项核对并保留来源约束
预期用途：视觉思维链监督微调
