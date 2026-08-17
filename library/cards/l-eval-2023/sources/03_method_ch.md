1. 输入：长文档、一组 instructions/questions、reference outputs、来源领域元数据和声明的 evaluation metric。
2. 数据组织：官方仓库分 closed-ended tasks 与 open-ended generation tasks，20 个 test datasets 可从 Hugging Face 或仓库加载。
3. 预测生成：模型读取长输入并输出答案，保存为各任务 JSONL prediction 文件。
4. Closed-ended 评测：脚本计算 exact/exam-style metric，或在答案形式受限时计算 QA metric。
5. Open-ended 评测：脚本计算 n-gram metric、控制 reference-length bias 的 LIE 指标、用 GPT-4/GPT-3.5 与 baseline battle 的 LLM judge，以及较小人工评测子集。
6. 复现边界：必须固定数据版本、tokenizer/context budget、truncation 或 retrieval policy、prompt engineering 标记、in-domain-data 标记、模型版本、judge model、baseline opponent、reference length instruction 和 leaderboard 日期。
