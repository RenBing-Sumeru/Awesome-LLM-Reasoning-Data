本 Card 的一句话贡献是：GPT-5-Codex 通过真实 SWE 任务族、明确 RL、code-review 专门训练、继承的恶意软件安全数据和新 prompt-injection 数据，使 GPT-5 的编码专门化更可读，但实际 reward 与记录仍为 unknown。

第一层是 agent training。报告称 RL 目标包括接近人类风格与 PR preference 的代码、指令遵循和迭代测试（PDF 第 1 页）；发布页说明 code review 会浏览代码库、分析依赖并运行代码与测试。这些陈述识别了目标行为和 episode surface，却不是完整 feedback contract：PR preference 不能证明存在 pairwise record 或 preference model，运行测试也不能证明测试构成全部或任一训练 reward。

第二层是 evaluation。GPT-5-Codex 审查热门开源仓库的近期 commit，经验丰富的软件工程师按正确性和重要性判断 review comment。其他评测使用全部 500 道 SWE-bench Verified 任务、成熟仓库的 refactor、人类 mobile-web preference、policy 专家 malware golden set、prompt-injection attack、Production Benchmarks、StrongReject、CTF 和 Cyber Range。这些 human、test、policy 与 environment predicate 是被评测行为的证据；没有一项被确立为训练 verifier。

第三层是 deployment。云端与本地 sandbox、默认禁止网络、workspace 限制、审批、可配置 allowlist/denylist、citation、terminal log、screenshot 和 test report 约束或暴露产品行为，却不能识别 RL 环境、训练样例或 reward。

披露增量具有版本边界。基础 GPT-5 提供宽泛来源类别、router signal 和 safe-completion 背景，不提供这份 Codex 任务台账。o3/o4-mini Codex addendum 已披露真实编码 RL 和继承的恶意软件流水线，以及本 addendum 未重复的 unexpected-state false-completion reward。GPT-5-Codex 新增更清楚的复杂任务 taxonomy、code-review 训练和经验工程师 review 评测。GPT-5.1/5.2-Codex 后续才披露 conflicting-edit user model、preservation reward、compaction 和内部 PR hidden tests；这些内容不能回填到本 Card。
