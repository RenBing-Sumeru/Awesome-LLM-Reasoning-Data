主要出版物是 NVIDIA AIMO-2 获胜方案的 39 页 arXiv 报告。改题后的版本 *Scaling Mathematical Reasoning through Data, Tools, and Generative Selection* 以 poster 形式出现在 2nd AI for Math Workshop @ ICML 2025，并非 ICML main-conference 论文。NVIDIA 官方 Hugging Face 发布、NeMo Skills recipe/文档、竞赛说明以及固定的数据与代码 revision 构成 artifact 记录。

该工作处理一个端到端构造问题：如何把数学论坛讨论转化为 long-reasoning CoT supervision、Python-interleaved Tool-Integrated Reasoning（TIR）和 generative solution-selection trace，再用于大规模 answer-level SFT 与 test-time selection。所有公开记录共享九个字段：`expected_answer`、`problem_type`、`problem_source`、`generation_model`、`pass_rate_72b_tir`、`problem`、`generated_solution`、`inference_mode`、`used_in_kaggle`。

数据规模必须用两个不可互换的账本描述。论文早期 pipeline 中，620K 条 AoPS discussion 变为 580K 个 extracted problem，移除不适合格式后为 550K，经 LLM-based decontamination 后为 **540K**（论文 §2.1、Table 1）。官方数据卡后来说明，540K 是在 pipeline 较早阶段统计的，会高估最终可用发布。固定的公开 CoT/TIR 数据对应 **306K 个有 solution 的唯一题目**，此外另行发布 **193,170 条 problem-only row**。托管数据合计 5,678,317 行：3,201,061 条 CoT、1,718,466 条 TIR、565,620 条 GenSelect 和 193,170 条 additional problem。

该工作属于 **Data Construction and Open Release Recipes**，因为它披露了来源抽取、多 teacher sampling、答案判定、迭代 TIR 生成、GenSelect 构造、SFT scaffold 和发布打包。它不是 process-supervision 数据：即使 target string 含长轨迹或代码，接收信号通常仍附着于最终答案等价或候选选择正确性。

本卡依靠论文和已核验官方 artifact 达到 L4 双语审阅准备状态。复用仍需谨慎：pipeline bug 丢失了 137K 道 proof question；原始 AoPS scraping 实现是内部代码；accepted/rejected candidate、judge 与去污染日志、结构化工具执行记录以及逐条论坛内容权利均未发布；托管数据与当前文档还会发生版本漂移。
