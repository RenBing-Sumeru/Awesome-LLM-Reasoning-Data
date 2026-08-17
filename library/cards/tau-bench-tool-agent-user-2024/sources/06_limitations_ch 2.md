主要局限是 reward 覆盖面。数据库状态相等和输出字符串检查快速、客观，但可能漏掉对话质量、不安全的执行顺序、缺少用户确认，或不影响被检查最终状态的 policy 违规。

用户模拟器也是局限。论文依赖 LM 模拟用户，因此分数会受到 simulator prompt、模型、temperature 和停止行为影响。真实用户或另一种模拟器可能导致不同表现。

领域是简化的客服环境。Retail 和 airline 足以给当前 agent 施压，但其中的 schema、API、policy 和任务分布并不等同于真实生产系统。

任务规模按现代 benchmark 标准并不大：115 个 retail 任务和 50 个 airline 任务。论文有意用高质量任务加重复运行，但这也让分数置信度更依赖任务选择和版本。

artifact 有历史版本 caveat。原始仓库仍可访问且采用 MIT license，但 README 目前说明任务已过时。当前比较应固定 release 或使用后续仓库，而不是混合不同版本结果。
