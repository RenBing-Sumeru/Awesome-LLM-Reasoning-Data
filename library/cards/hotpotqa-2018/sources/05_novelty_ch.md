已有基线是单段阅读理解和证据监督较弱的多跳 QA。HotpotQA 改变的是 benchmark 对象：答案和 supporting-fact 标签绑定，并同时定义 distractor 与 full-wiki 两种评测设置。

方向信号是可审计的多跳推理：系统不能只吐出看似合理的答案，还要找到正确证据。不是新东西的是 EM/F1、Wikipedia 语料和众包标注。复用前要检查 license、split、Wikipedia 版本、公开泄漏风险、答案归一化，以及 supporting-fact 标签到底用于训练、评测还是 rerank。
