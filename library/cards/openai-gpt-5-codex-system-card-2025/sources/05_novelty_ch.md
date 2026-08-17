既有基线是 2025 年 5 月的 o3/o4-mini Codex addendum。它已经披露真实编码任务 RL、类人风格与 PR-preference 目标、合成恶意软件流水线、编码 prompt-injection 数据，以及一个具体的 unexpected-state 安全 reward，用于惩罚与 action 不一致的完成声明。GPT-5-Codex 更换了基础模型家族，并提高任务专门化披露：完整项目构建、功能与测试、调试、大型重构和代码审查。

最具体的新表面是 code review。报告称模型专门训练用于发现关键缺陷，会比较 PR intent 与 diff，分析整个代码库及依赖，并运行代码和测试。评测使用近期 open-source commit，由经验工程师判断 correctness 和 importance。由此形成一个人类判断的 `(commit context, review comment, correctness/importance judgment)` 对象，但记录、rubric 和训练关系均不可用。

相对基础 GPT-5，增量是 agentic coding 专门化，而不是新的宽泛来源主张：GPT-5 的互联网、合作伙伴和用户/训练者来源类别不能识别 Codex 任务。相对 GPT-5.1-Codex-Max 和 GPT-5.2-Codex，这份更早报告对 reward 和环境干预更不具体。它没有披露由 user model 制造 conflicting edit、保留这些 edit 获得正向强化、原生 compaction training，或由 hidden unit test 评分的内部 PR benchmark。

RL、测试执行、code review、人类 preference、合成安全数据、sandbox 和长时程 agent 单独看都不是新元素。它对 Atlas 的新意是披露粒度：任务族和 review evaluation 可见，而 reward 表示仍隐藏。这一缺口有助于防止常见错误推断——把观察到的测试通过行为或评测 grader 转换为没有证据的训练 verifier 主张。

复用前应检查任务与代码仓库 manifest、revision pin、PR-intent 和 review-label schema、preference representation、reward aggregation、test-to-reward mapping、失败 trajectory、code-review 假阳性/假阴性、全局 split、commit 与 benchmark overlap、license 和 checkpoint lineage。缺少这些材料时，本报告是披露参考，而非开放构造配方。
