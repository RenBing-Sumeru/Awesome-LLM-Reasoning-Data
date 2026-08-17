正确性只相对于已构造的 TDG、checklist、app state 和 LLM alignment policy 成立。完成选中的 TDG path 不等于证明 agent 满足了真实用户的潜在偏好，尤其是 persona 和 preference 都是基于预设模板合成的。

论文自身限制很关键：10 个场景、22 个 app 仍只是移动生态的小子集；persona 是合成的而非真实用户采集；benchmark 主要面向 Android；TDG 由领域专家人工构建。artifact 风险也存在，因为论文列出的 code/data 链接是 anonymous.4open.science status page，而不是已核验的持久 GitHub 或数据发布。

评分限制包括 evaluator-model drift、模糊的 partial completion、checklist 没枚举的替代有效路径，以及截图之间 UI state 变化。对金融、医疗等高风险领域，当前结果不能被解读为安全个性化手机自动化的证据。
