正式一手来源为 NeurIPS 2025 会议论文；arXiv:2511.13223、NeurIPS poster、OpenReview 和作者标注的官方仓库共同核验身份与实现路径。论文首页列出浙江大学、阿里云和智源研究院的作者单位（p. 1）。

这不是泛化的模型压缩问题。长 chain-of-thought 会增加延迟、显存压力和输出 token 成本；直接施加长度惩罚或全局选择最短轨迹，可能删掉困难题所需推理。TokenSqueeze 要构造更短的训练轨迹，并让其深度取决于提示难度，再将这种偏好写入模型参数，而不只是截断解码（论文 §§1、3.1）。

它属于 rollout/search/test-time trace 类别，因为每个源提示会产生多条采样轨迹，配方会选择/拒绝候选。它与 preference data、Long2Short 相邻，但既不是已发布静态语料，也不是逐步证明 benchmark：正确性是抽取后最终答案一致性，改写质量是局部 KL 代理。

可检查输入是 \`datasets/math14k.jsonl\`；Step 1 要求 \`instruction\` 和 \`ground_truth_answer\`，随后追加 64 条 completion，每条含 \`response\`、\`equal\`、\`token_length\`。后续记录有 chosen/rejected response 及 rewrite/KL 信息。上游来源、原始 split、许可证、记录数和与论文匹配的生成输出均为 unknown。本 Card 的 L4 是经一手来源审计的双语配方 Card，不是对可复用数据集的认证。
