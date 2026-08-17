Phi-4的数据策略把课程分配与合成转换结合起来。organic网页、学术材料、书籍、代码和问答内容先按教育价值或推理价值筛选；部分记录直接进入训练混合，其他记录则通过多阶段生成、改写、自我修订和指令反转，转化为练习、讨论、问答对、代码指令或结构化推理文档。

400B表示约50个合成源家族的未加权近似规模，而不是最终训练token数。公开模型卡报告9.8T训练token和16K context window，但两项来源都没有发布各家族最终权重、重复次数或唯一记录清单。报告先在较小消融中改变synthetic、web rewrite、filtered web、targeted acquisition、organic和code的分配，再把选择后的配方迁移到phi-4。

后训练有三种不同监督对象。SFT使用约8B chat格式token，覆盖数学、代码、推理、对话、模型身份、安全及40种语言；先生成多个回答，再由LLM-based evaluator选优。第一轮DPO使用Pivotal Token Search估计单个token选择如何改变oracle检查后的completion成功率，并构造token-local preference pair。第二轮DPO从GPT-4o、GPT-4t和phi-4回答形成完整回答pair，再由GPT-4o按准确性、风格和细节评分。

因此反馈契约是mixed，而不是统一质量标签。代码测试和数学答案比较只是在部分Pivotal Token Search任务上的程序化结果检查；GPT-4o是第二轮的判断型pair selector；SFT evaluator只披露了角色。没有公开记录保存generator、分数、oracle结果、接受决策或最终训练阶段归属。
