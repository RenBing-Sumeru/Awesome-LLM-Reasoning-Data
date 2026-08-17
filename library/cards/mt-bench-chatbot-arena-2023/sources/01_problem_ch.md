Zheng 等人的 "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena" 于 2023 年 6 月发布为 arXiv:2306.05685，arXiv 记录注明 NeurIPS 2023 Datasets and Benchmarks Track。它要解决的不是一般聊天模型排行榜问题，而是：在开放式、多轮、没有唯一标准答案的 assistant 输出上，GPT-4 这类强模型能否作为可审计 judge，近似昂贵的人类偏好评估。

评测面由两部分组成。MT-Bench 是 80 道人工设计的两轮问题，覆盖 writing、roleplay、extraction、reasoning、math、coding、STEM knowledge、humanities/social-science knowledge 八类；Chatbot Arena 是匿名双模型 battle 平台，用户同时看两个模型对同一输入的回答并投偏好票。反馈契约不是单一正确答案，而是 expert human pairwise labels、crowd arena votes、GPT-4 pairwise judgments，以及 GPT-4 single-answer grades 转换出的偏好或分数。

这项工作评估的是 judge 可靠性，而不是提出训练配方或形式化 verifier。它的证据边界由公开问题、采样人类偏好、judge prompt、参与模型集合，以及对 position bias、verbosity bias、self-enhancement bias、数学推理失败的缓解规则共同限定。
