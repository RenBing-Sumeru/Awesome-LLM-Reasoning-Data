该流程从可执行程序生成图表，并公开同时带代码解法、长推理和已知真值的问题。 相比网页挖掘图表问答和仅靠模板生成的合成图表集，本文把编号、图像列表、制图代码、问题、答案、可执行解法和推理解答作为可复用目标，并以程序执行、答案检查、渲染验证和按失败率选择难度作为反馈契约，因此应归入 Track 01。

Google Scholar 引用数：9（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=ChartVerse%3A+Scaling+Chart+Reasoning+via+Reliable+Programmatic+Synthesis+from+Scratch&author=Zheng+Liu&hl=en）

开放数据集：是
数据集名称：ChartVerse-SFT-1.8M
官方地址：https://huggingface.co/datasets/opendatalab/ChartVerse-SFT-1.8M
规模：约 80 万张独立图表上的 180 万组经验证图表问答
记录形式：编号、图像列表、制图代码、问题、答案、可执行解法和推理解答
文件与存储格式：官方数据页所列结构化记录及其引用资产
领域与语言：英文图表感知、数值推理与程序合成
构造与筛选：语言与视觉教师依据程序真值生成问题和长解答；程序执行、答案检查、渲染验证和按失败率选择难度
许可与访问限制：`Apache-2.0`；仍需遵守上游来源条款
预期用途：图表推理监督微调及独立强化学习子集
