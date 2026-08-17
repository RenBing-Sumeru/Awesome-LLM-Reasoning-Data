MATH 主研究使用 48 层的 DeepSeek-R1-Distill-Qwen-14B，temperature 为 0.6，top-p 为 0.95。作者先对 1,000 道题各运行十次，再保留观测正确率为 25%–75% 的 20 道题。随后，每道入选题选择一条正确与一条错误 base trace，得到 40 条 Qwen base response。论文报告每条 response 平均包含 144.2 个句子和 4,208 个 token。附录 B 用 DeepSeek-R1-Distill-Llama-8B 重复同一个 20 题设计，包括 20 条正确与 20 条错误 base solution。

每条 base response 被切分成句子式 chunk。对于 chunk \(i\)，keep distribution 从包含 \(i\) 的累计 prefix 开始生成，而 remove/resample distribution 从截至 \(i-1\) 的 prefix 开始生成。附录 N 的伪代码把这一关系写成：`R_keep` 从 \(i+1\) 重采样，`R_remove` 从 \(i\) 重采样。因此，论文的一个估计比较两个各含 100 条 continuation 的 bank，即两个条件合计 200 条 continuation。一个存储的 `chunk_i/solutions.json` 对应一个 100-rollout 生成条件；不能假定同一文件内部同时重复保存两个条件。

forced-answer generation 单独组织。在每个句子位置，系统把未完成的 boxed-answer cue 接在当前 prefix 之后，再采样 100 次。主 resampling analysis 会排除答案已经收敛之后的句子：收敛定义为超过 98% 的 resample 给出同一 response。分析代码还可以移除少于四个字符的 chunk。仓库默认值为每个 chunk 目标生成 100 条 rollout、最多 16,384 个 new token、最多 275 个 chunk，本地 batch size 为 8。

终止 verifier 抽取最终 boxed expression，规范化后与 MATH reference 比较。最终答案字符串被聚合为经验分布，用于 accuracy 与 KL 计算。counterfactual subset 使用 all-MiniLM-L6-v2 对原句与替代句编码，并保留 cosine similarity 低于 0.8 的句对。GPT-4o 从八类功能中为句子赋值——Problem Setup、Plan Generation、Fact Retrieval、Active Computation、Uncertainty Management、Result Consolidation、Self Checking、Final Answer Emission——并依据附录 prompt 标注直接依赖。

发布树按 model、decoding setting、solution type、problem 与 chunk 组织。它包含正确和错误 base-solution branches、forced-answer branches，以及一个仅有两题的 Qwen `correct_base_solution_sanity` branch。当前原始结构中 Llama-8B 有四个 branch，Qwen-14B 有五个，因此是九个 model-by-solution-type branch，而不是对称示意图暗示的十个。Qwen 的四个主 branch 各有 20 个 problem directory，另有两个 sanity directory；它们是入选题目的不同变体，不是独立 task set。

Hugging Face 的 `default` split 是 `push_hf_dataset.py` 创建的文件索引。脚本递归地把原始文件记录为包含文件 metadata 与嵌入文本的行；`solutions.json` 的 `content` 中才包含 continuation arrays。因此，viewer 估计的 20,997 行、`data/` 中总计 19.6 GB 的 183 个 Parquet shard，以及 repository 总计 111 GB，描述的是不同的存储与索引层。它们不能相加，也不能替代精确的 nested-rollout count。

代码支持 Novita、Together、Fireworks 与 local generation，并默认使用 Novita，但发布中没有为每条 continuation 记录 provider、endpoint、checkpoint revision、request date 与 seed。虽然 CLI 暴露 nominal seed 44，API 路径却有意不发送该 seed，因此并未建立确定性的 API replay。精确的 MATH source split/revision 与 record-level lineage 同样缺失。

论文 v4 还使用 Qwen3-30B-A3B 对 2,492 道 MMLU 题分析 sentence-causal graph。该实验屏蔽对 source sentence 的 attention，再测量后续 token logits 的变化，计算成本约为 resampling 的百分之一。这是论文与代码中的证据，但不属于 Hugging Face 的 `math-rollouts` 发布；不能把它计为另一个已发布 dataset branch。
