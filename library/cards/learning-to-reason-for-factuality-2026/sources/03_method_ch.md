提示构造使用两组示例:来自 WildChat 的多样化真实用户提示,以及 LongFact 非测试划分中的寻求事实提示。研究者提示 Llama-4-Maverick-17B-128E-Instruct-FP8 合成既接近真实使用、又需要事实知识才能回答的问题。数据集卡将发布的提示和回答分别归因于 Llama 4 与 Llama 3.3 的输出。

离线监督从每个问题的 10 个回答中筛选。SFT 以 `src`/`tgt` 保存事实精确率最高的回答,目标由 `think` 推理块和随后的 `answer` 最终回答块组成。DPO 保存 `src`、`tgt_chosen`、`tgt_rejected`、`pairwise`、`veriscore_margin`,以及选中和拒绝回答的长度。成对筛选同时约束分数差与长度差,以减少"更短的回答仅因更短而获胜"的捷径。发布数据未包含其余候选,也未包含评分时使用的证据。

在线 GRPO 以经过 SFT 的 Llama-3.1-8B-Instruct 为起点;发布的策略配置对每个提示采样 4 个 rollout,温度为 1.0,生成上限为 2,048 token。ScalableVeriScore 并行执行事实主张抽取、基于 Serper 的 Google Search 检索和主张验证;论文报告其训练期服务使用 Llama-3.3-70B-Instruct worker。另一个 LLM 裁判把 rollout 与参考回答比较,评估相关性和总体质量。论文提出包含三个分量的奖励族,而发布的主 `grpo.yaml` 将显式细节权重设为 0.0、裁判权重设为 0.1。因此,精确复现需要固定配置、验证器模型、搜索结果和裁判提示,不能只依赖高层奖励公式。
