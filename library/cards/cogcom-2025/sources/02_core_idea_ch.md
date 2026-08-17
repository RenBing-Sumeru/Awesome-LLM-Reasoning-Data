# 核心思想

CogCoM 把操作链定义为自然语言推理与显式操作的交错序列，操作包括 OCR、定位、裁剪放大、计数、计算和画线。一个计划会展开为分支执行树，由视觉模型或专家填入结果，再把以最终答案终止的路径转换为多轮、多图像 SFT 目标。主分类是指令、示范与推理数据，因为公开的链才是训练消费者使用的序列化对象，而不是运行时工具环境。

Google Scholar 引用数：40（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=CogCoM%3A+A+Visual+Language+Model+with+Chain-of-Manipulations+Reasoning&author=Ji+Qi&hl=en）

开放数据集：是  
**数据集名称：**CoMDataset  
**官方地址：**https://huggingface.co/datasets/qijimrc/CoMDataset  
**规模：**公开版本包含 80,827 条自动记录、4,518 条测试记录和 6,998 条专家数学记录；论文把训练部分概述为约 7 万条自动链和 7 千条数学链  
**记录形式：**字段包括 `pid`、`image_path`、`decoded_image`、`question`、`answer`、`com_founds` 与 `final_com`；操作发现还记录操作、参数、框或识别文本、变量、返回值、描述和命中状态  
**文件与存储格式：**公开的 Parquet/JSONL 数据、图像压缩包和可视化笔记本  
**领域与语言：**以英文视觉问答、OCR、计数、视觉定位、图表、几何和图形数学为主  
**构造与筛选：**GPT-4-turbo 编写计划，GroundingDINO/PaddleOCR 执行原子操作，深度优先搜索保留以源答案结束的路径，十位专家编写并核验数学子集  
**许可与访问约束：**官方发布使用 CC-BY-SA-4.0；组件基准的图像和问题仍受各自来源条款约束  
**预期用途：**带证据的多模态 SFT、视觉工具蒸馏、操作轨迹审计和中间视觉监督的受控研究
