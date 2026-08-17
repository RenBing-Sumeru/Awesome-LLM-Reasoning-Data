# 核心思想

MathCoder 把执行过的推理轨迹设为监督目标：自然语言块陈述计划，代码块完成复杂计算，执行块返回观察，后续文本再解释观察并给出最终答案。GPT-4 编写按标准答案筛选的种子轨迹，MathCoder-Initial 编写通过自一致性筛选的插值题轨迹，答案一致性是选择信号，Llama-2/CodeLlama 的 SFT 是消费端；与只保留文本或代码其一的 MAmmoTH 记录相比，LCE 记录保存二者的因果交替，因此直接属于 Track 01。

Google Scholar 引用数：225（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=MathCoder%3A+Seamless+Code+Integration+in+LLMs+for+Enhanced+Mathematical+Reasoning&author=Ke+Wang&hl=en）

**开放数据集：**是  
**数据集名称：**MathCodeInstruct  
**官方地址：**https://huggingface.co/datasets/MathLLMs/MathCodeInstruct  
**规模：**论文报告八万条训练轨迹，其中四万九千条来自 GSM8K/MATH 种子解答，三万一千条来自插值题解答  
**记录形式：**嵌套 `messages`；每个角色含 `content` 列表，列表项以 `type: text`、`type: code` 或 `type: execution` 区分，并在 `content` 中保存内容  
**文件/存储格式：**一个非门控的 `train_80k.jsonl` 文件，公开元数据显示存储量约 243.4 MB  
**领域/语言：**英文小学与竞赛数学，轨迹中包含 Python 和数学记号  
**构造与过滤：**GPT-4 标注种子并核对标准答案；GPT-4 插值新题，再由 MathCoder-Initial 生成并要求三次答案一致  
**许可/访问约束：**数据与代码公开采用 Apache-2.0；仍需复核 GSM8K/MATH 上游条款和 OpenAI 生成内容条款  
**预期用途：**数学 SFT、执行感知推理、自蒸馏、轨迹格式消融和工具反馈审计
