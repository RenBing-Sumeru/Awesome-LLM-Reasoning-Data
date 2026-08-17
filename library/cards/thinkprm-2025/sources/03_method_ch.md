来源与原始候选。论文从PRM800K train split抽取题目-前缀对；PRM800K源于MATH，包含模型生成解答和人工步骤标签。QwQ-32B-Preview接收题目、多步骤前缀和固定指令，按步骤批评、输出boxed标签，并在首个错误步骤后停止。每个前缀采样4条教师链；渲染论文和数据卡没有披露精确采样temperature及seed ledger。

过滤与公开对象。缺失或格式错误的boxed判断被丢弃；若生成步骤判断与任一对应PRM800K标签不一致，或链超过4,096 token，也会被丢弃。接受文本通过统一boxed格式、删除最终验证判断之后的内容以及加入think delimiter来规范化。约20%的原始链通过格式和标签一致性检查，因此获得1,000条保留记录约需5,000次生成。发布物只有一个1,000行train split，字段为`problem`、`prefix`、`cot`、`prefix_steps`、`gt_step_labels`和`prefix_label`；被拒绝链未公开。

训练。作者在完整验证链上执行next-token监督微调，训练基于DeepSeek-R1-Distill-Qwen 1.5B、7B、14B和QwQ-32B-Preview的生成式PRM。1.5B和7B模型采用3个epoch全量微调；14B变体采用3个epoch LoRA，QwQ采用5个epoch LoRA。论文报告1.5B/7B有效batch size为32，LoRA运行有效batch size为16，并给出单A100或四A6000训练设置，但渲染源缺失若干learning rate与LoRA参数。

分数提取与搜索。评估时，ThinkPRM最多生成8,192 token验证链，实现随后强制解码最终正确性询问，并把肯定答案概率用作prefix score。加权多数Best-of-N对共享最终答案的解答累加验证器分数；AIME 2024则直接按验证器分数排序解答。Guided beam search采样候选下一步、为其前缀评分、保留最高分扩展，并在报告设置中重复最多20步。

验证器扩展与artifact。Parallel scaling独立采样多条verification CoT并平均分数；sequential scaling最多使用4轮不同复查提示；仓库说明两种模式不同时使用。官方artifact包括代码和实验recipe、公开1K数据集，以及ThinkPRM-1.5B/7B/14B模型发布。论文还研究65K process-filtered和128K outcome-filtered扩展，但这些数据集未被核验为公开1K发布的一部分。
