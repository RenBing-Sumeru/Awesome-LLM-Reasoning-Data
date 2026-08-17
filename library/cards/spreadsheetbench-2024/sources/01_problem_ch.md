SpreadsheetBench 问的是：当前大模型/agent 能不能真正操作真实电子表格文件，而不只是回答表格里的问题。主来源是 arXiv 论文 https://arxiv.org/abs/2406.14991、官方项目页、NeurIPS 2024 Datasets and Benchmarks spotlight 页面、GitHub 仓库和 Hugging Face 数据集。

它属于 benchmark / office-agent evaluation surface。一个样本不是普通 QA，而是自然语言 spreadsheet instruction、输入 Excel 文件、标准答案 Excel 文件、answer position 和官方 evaluator 组成的文件状态任务。收录边界也很清楚：它不是通用表格语料，不是 spreadsheet 问答集，也不是训练配方；它提供的是可执行、可打分的办公文件状态评测面，对研究 agent 环境、代码执行反馈和程序化验收很有价值。
