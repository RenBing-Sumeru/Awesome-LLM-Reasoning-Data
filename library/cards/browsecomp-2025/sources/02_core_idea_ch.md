BrowseComp 的贡献是构造“知道答案后容易核验、但答案刻意难以找到”的事实问题，并只评分智能体的最终答案，而不评分浏览过程。人类 trainer 从人物、事件或 artifact 出发，收集有区分力的事实，再把这些事实反向改写为旨在抵抗普通搜索和当代模型的问题。由此得到一个面向持续信息检索、校准和测试时计算研究的答案级评测表面。

公开数据对象是问题—参考答案对，以及 topic 和 canary metadata。在 CSV 中，问题与答案是 Base64 编码的 XOR 密文。官方 decryptor 使用每行公开 `canary` 的 SHA-256 派生重复密钥；由于 canary/password 与 decryptor 同时公开，这一设计只是可逆的泄漏阻力和基于 canary 的过滤辅助，而不是密码学访问控制。

反馈契约是 judgment-required、answer-level。judge 接收问题、模型完整响应和 gold answer，抽取候选最终答案，解释有意义的差异，对数值答案允许小幅误差，并按指令输出 `correct: yes` 或 `correct: no`。它可以在给定 prompt 下判断答案语义是否一致，但无法观察智能体是否实际浏览、检索证据是否真实、引用是否支持答案、路径是否高效或可复现，也无法解释智能体为何失败。置信度只用于校准和并行选择分析，不构成过程监督。

相较于固定语料检索和浏览器环境 benchmark，BrowseComp 刻意让网页与 agent scaffold 保持模型特定，同时把终点标签保持为简单答案判断。相较于 SimpleQA 与 Humanity's Last Exam，其特定对象是为迫使持续浏览而由人类反向构造的问题。BrowseComp-Plus 是后续的独立相关记录；其固定语料和证据标注不属于原版 BrowseComp。
