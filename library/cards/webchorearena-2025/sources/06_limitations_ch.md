作者明确提出两项主要限制：论文侧重构建基准，而非开发新的智能体方法；自托管模拟网站与真实在线网页仍有差距。模拟环境提高了可控性，却无法覆盖所有页面改版、访问限制、个性化或开放网页副作用。在线版本被留作未来工作。

反馈契约存在具体失效面。Exact matching 可能因无害格式差异拒绝正确答案；must-include 可能只因出现指定短语就接受答案，却不能证明整体正确；GPT-4o fuzzy matching 可能随版本漂移或误判语义等价；URL 和 DOM 检查只能观察配置指定的终端证据。多个分量相乘会让一个 false negative 决定整题得分，也无法定位第一个错误动作。发布物中没有冻结的 judge 输出、校准集、对抗测试或 alternative-valid-answer 审计。

重放能力仍不完整。论文固定了 50 步上限，仓库也说明了任务顺序和 reset 方法，但论文实验对应的 WebArena commit、数据库 hash、浏览器镜像、认证状态、依赖锁、API 快照及完整 reset manifest 均为 unknown。README 描述了 `affect_environment`、`required_wait` 和拼写错误的 `strage_state`，而固定版本的 532 条 JSON 使用 `storage_state`，且没有前两个字段。Curator inference：这种不一致削弱了对状态变更和等待需求的自动审计能力。

发布与数据治理边界同样重要。该工作没有 train/dev/test split、隐藏 holdout、污染审计、完整逐条构建 lineage，也没有公开全部成功、失败和 crash 运行。顶层仓库与 Kaggle 数据集采用 Apache-2.0，但所采用的上游代码、预置网站内容、截图、认证状态和未来轨迹的权利仍需单独核验。因此该基准可在固定条件下用于评测，但现有证据不足以支持训练复用或确定性 episode 重放。
