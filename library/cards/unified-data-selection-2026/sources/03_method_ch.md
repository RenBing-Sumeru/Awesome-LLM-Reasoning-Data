SFT部分从OpenR1-Math、Open-Math-Reasoning、Codeforces-CoT和Llama-Nemotron STEM子集构成覆盖Math、Code与STEM的Mixture-of-Thoughts池。附录E称每个领域从来源集合随机抽取约100,000条样本,但未发布抽样标识符或不可变来源版本。主SFT模型是Qwen3-8B-Base;论文还用Qwen3-0.6B代理模型为随后训练8B模型的数据评分。离线HES评分需要对每条存储回答执行一次前向计算,以取得词元分布。

RFT部分由DeepSeek-R1-Distill-Qwen-7B为每个DeepScaleR问题生成32个候选回答。候选先检查最终答案正确性,再按HES排序。按问题选择在k = 2、4或8时最多保留k条HES最高的正确回答;若正确回答少于k,则全部保留。全局选择汇总所有正确回答并保留HES最高的N条,其中N与对应按问题设置的数据量匹配。候选解码设置以及正确性检查器、归一化、容差和失败策略均未披露。

RL部分由DeepSeek-R1-Distill-Qwen-1.5B基于verl运行GRPO。报告配置为最大生成长度8,192、温度0.6、每问题32个rollout、训练3个epoch、共628步。缩减后的更新批次使用一半rollout数据,并分成正负两个池。主要策略选择HES最高的成功rollout和随机失败rollout。熵直接利用生成时已有logits计算,因此不需要额外的模型前向,但仍需执行词表范围的熵运算并处理logits。

SFT和RFT均使用AdamW,学习率4e-5、cosine decay、warm-up比例0.1、全局batch size 64、训练3个epoch。评估覆盖AIME24/25、HMMT23/24/25、Olym-MATH、GPQA-Diamond和LiveCodeBench;论文报告的评估温度为0.6,最大生成长度为32,768。附录F称全部实验在单节点8张NVIDIA A100 80GB GPU上完成,总计约500 GPU小时。

已核验的论文专用artifact只有arXiv论文、其官方BibTeX端点和OpenReview投稿记录。未找到官方代码仓库、选后数据文件、HES分数表、rollout转储、模型checkpoint、项目页或Hugging Face发布。论文把open-r1和verl列为实现底座,并列出上游数据集/模型许可证,但这些上游资源不等于本文转换后记录的发布。
