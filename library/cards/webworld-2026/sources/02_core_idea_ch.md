一句话贡献：WebWorld: A Large-Scale World Model for Web Agent Training 把一个记录包含 instruction/history/state/action 输入、预测的下一步浏览器观察或状态转移、模拟 rollout 元数据和下游评测结果。绑定到具体反馈契约，形成可复用对象。

核心机制：作者从大规模开放网页轨迹训练网页世界模型，并用于仿真、合成轨迹生成和 inference-time search。反馈契约：WebWorld-Bench 使用 LLM-judged Factuality Score 和 Web Turing Score；下游任务成功作为合成轨迹的外部验证。最接近的对比对象是：直接 live-web 训练、没有学习动态的离线轨迹数据集，以及小规模或封闭网页模拟器。方向标签是 verifier-anchored agent evaluation，即可复用单元是任务对象加验收规则。
