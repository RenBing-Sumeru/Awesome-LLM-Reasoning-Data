权威 2025 venue 记录把 **TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning** 列为 **2nd AI for Math Workshop at ICML 2025** poster，而不是 ICML main-conference paper。七位作者的 arXiv:2505.14625 于 2025-05-20 提交、2025-05-22 修订；后续 2026-06 TMLR 版本只作为版本历史，不替换本卡的年份、venue 或作者。本次 L4 审阅依据包括完整论文、workshop/OpenReview 记录、固定代码、三个公开数据集、HF 模型 collection 和 reward implementation。

基于规则的数学验证器成本低、行为确定，却可能因为语言、格式或记号不同，把与参考答案数学等价的回答判错。在强化学习中，这种假阴性不只是评测误差：正确 rollout 会得到 0 奖励，还可能使本来具有信息量的 prompt group 变成全错组，无法产生有效的相对优势信号。

TinyV 将其处理为验证器刷新数据问题。论文在 Big-Math-RL-Verified 的生成回答上审计 Prime Verifier，用大型模型重新判断被漏掉的正确答案，再为紧凑的学习式答案等价验证器构造监督。公开对象不是单一数据集，而是一组工件：159,136 条平衡 verifier-SFT 数据、7,009 条困难提示候选池、250 条 HardVerify-Math benchmark、验证器检查点，以及实现 Prime 门控终局奖励的代码。

该契约仍是答案级的。Prime 提取 boxed final answer；TinyV 接收题目、参考答案和候选答案，输出字面值 True 或 False。两者都不检查推导是否有效或忠实。学习式验证器能找回 Prime 漏掉的正确答案，但它自己的假阳性也可能给错误解答提供奖励。

TinyV 只归入 **Data Construction and Open Release Recipes**，因为 Atlas 的决策中心是 verifier-refresh recipe：审计陈旧 rule reward，构造真实与合成的等价性监督，平衡 label，训练紧凑 judge，再在 GRPO 中把它接到 programmatic gate 后面。它不属于 process-supervision data，因为没有对 reasoning step 做 label；也不属于 preference-data release，因为 target 是二元 correctness label，而不是 chosen/rejected pair。HardVerify-Math 是配套 benchmark，不是本卡主类别。

L4 证据边界确认了 159,136 行 balanced SFT set、7,009 行公开 prompt pool、250 行 HardVerify release、checkpoint、prompt、labeler script 和在线 reward code；但不包含报告的 638K precursor pool、准确 sampled 5,000 RL ID、逐条 Qwen/Grok 双判断、held-out verifier precision/recall/FPR/calibration、dataset license 或 paper-exact tagged manifest。因此，L4 支持审阅刷新机制与发布缺口，不表示 TinyV 找回的 reward 就是 ground truth。
