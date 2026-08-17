一句话贡献：WebArXiv 把 arXiv 组织成一个时间不变的 Web 智能体基准，通过稳定任务选择、唯一答案验证和严格最终答案匹配来支持可复现比较。

核心机制有两层。第一层是基准构造：每个 arXiv 类别先形成候选任务，再用 all-mpnet-base-v2 做语义相似度筛除，并结合人工检查，最终每类保留 55 个任务。第二层是行为诊断：论文提出 Rigid History Reflection，指智能体固定保留最近交互历史，却不判断哪一步真正有助于当前决策。

反馈契约以结果为中心，但保留轨迹上下文。智能体接收任务，在网页中执行动作并产生最终答案；正确性由答案与 gold answer 的匹配决定。标注者还审查完整动作轨迹，把结果标为正确、错误或部分正确。

最近比较对象包括 WebVoyager 等 live-web 基准、Mind2Web 和 WebArena 等静态或模拟网页环境，以及 SeeAct、LiteWebAgent、OpenWebAgent 等专门 Web 智能体。WebArXiv 的变化在于把评测契约落到稳定 arXiv 内容和可机器检查答案，而不是易漂移的开放网页内容。
