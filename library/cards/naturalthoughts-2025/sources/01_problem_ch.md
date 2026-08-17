推理蒸馏经常直接复制强 teacher 的长轨迹，却不知道哪些问题或轨迹最能把有用能力迁移给较小的 student。LIMO 一类小数据工作强调精选，大规模数据发布则强调扩量；两者都没有单独解释数据规模、难度和多样性如何共同影响通用 STEM 推理。

NaturalThoughts 在含 280 万道题的 NaturalReasoning 池上做受控的选择与扩量研究。它使用 DeepSeek-R1 轨迹，按多种选择策略构建从 1K 到 500K 的子集，微调 Llama 与 Qwen student，并比较推理准确率和回答长度。直接数据对象是由具名策略选出的“问题—teacher 轨迹—答案”记录。官方来源：https://arxiv.org/abs/2507.01921；未确认 arXiv 之外的正式会议。
