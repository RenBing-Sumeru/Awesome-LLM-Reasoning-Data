# 核心思想

SciInstruct 把缺失科学推理过程视为受答案约束的轨迹推断：GPT-4 先给出分步解答，再批判失败结果，最后以参考答案作更强提示；独立质量分类器继续剔除看似合理但有缺陷的轨迹。序列化目标是问题、分步解答与学科标签，源作者或 GPT-4 提供过程，已知答案和模型过滤器决定保留，ChatGLM3、Llama3 与 Mistral 的 SFT 负责消费，因此属于 Track 01 数据贡献。

Google Scholar 引用数：16（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=SciInstruct%3A+a+Self-Reflective+Instruction+Annotated+Dataset+for+Training+Scientific+Language+Models&author=Dan+Zhang&hl=en）

**开放数据集：**是  
**数据集名称：**SciInstruct  
**官方地址：**https://huggingface.co/datasets/zd21/SciInstruct  
**规模：**完整集报告 254,051 条，其中物理/化学 123,869 条、数学 89,934 条、Lean 40,248 条；三个公开文件合计约 139.3 MB  
**记录形式：**`content` 为问题，`summary` 为分步回答或证明，`subject` 为学科标签  
**文件/存储格式：**三个扩展名为 `.json` 的逐行 JSON 文件；已核验中文数学文件含 9,110 条  
**领域/语言：**物理、化学、大学数学与形式化 Lean 证明；中文和英文  
**构造与过滤：**收集带答案问题，用 GPT-4-0613 补全步骤，经答案/结果核验和最多两次反思重试，再用基于 ChatGLM3 特征的质量分类器排序噪声记录  
**许可/访问约束：**NeurIPS 数据说明和 Hugging Face 元数据均标明 CC BY 4.0；代码没有单独声明许可  
**预期用途：**科学过程 SFT、蒸馏、混合/规模分析与轨迹质量审计
