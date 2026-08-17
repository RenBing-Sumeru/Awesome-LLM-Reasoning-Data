以下模型结果均为作者报告，尚未独立复现。在MobileWorld上微调Qwen3-VL-8B-Instruct后，MobileWorldBench generation overall从**11.84提升到12.39**，QA accuracy从**67.32提升到71.40**（论文表1–2）。这些增益取决于发布的annotation pipeline、两epoch SFT recipe、benchmark prompt、judge版本与模型decoding，不能证明每条transition label正确，也不能说明数据代表完整agent behavior。

在另行开展的downstream AndroidWorld实验中，baseline success为**46.9**，使用zero-shot semantic world modeling为**50.8**，使用fine-tuned world model为**54.3**（论文表3）。planner提出八个action、预测其semantic next state，并用VLM value model评分。该结果支持学习到的单步predictor用于planning，但AndroidWorld是在线downstream实验，并非MobileWorldBench发布的环境或反馈契约。

发布层数量可以直接审计。`benchmark/gen.csv`有250行，`benchmark/qa.csv`有1,787行，其中1,162个Yes、625个No。官方benchmark-image snapshot列出958个文件，但generation row `google_apps/episode_12551800716657978063/step_2363_raw.jpg`与`step_2364_raw.jpg`对应的两张图片均缺失。因此**249/250个generation row同时具有两张图片**，受影响记录一张也没有。

构造funnel同样明确：500个QA source transition生成4,000个candidate，经GPT-4o过滤剩2,458个，再经人工过滤剩1,787个。generation中，250个抽样transition的action description全部经人工检查并保留。这些检查记录了selection stage，但发布QA CSV省略逐记录source/split/annotator/filter provenance，也未报告generation reference或GPT-4o rubric judgment的错误率。

复现证据暴露judge-version混杂。论文指定`gpt-4o-2024-08-06`，发布评分脚本在没有显式配置时默认`gpt-4o-mini`。这两种设置产生的分数不能视为可互换。对3,000个抽样output match的人类pairwise comparison提供辅助分析，但不能替代固定且独立校准的evaluator。
