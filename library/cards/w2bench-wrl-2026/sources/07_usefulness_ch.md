若写作模型团队拥有明确约束，可把每个 prompt 拆成具名需求，生成受控的需求删除候选，并以诱导排序评测 reward ranking。每条记录应保留原 prompt、被删需求、生成器和排序。

若审计显示专家一致性可接受，可用这些对训练 reward model，并在相同 base model、prompt mix 和 rollout budget 下比较 GRPO。若需求无法明确表达，或删除一项会改变任务，不应采用此法；成功是留出 prompt 上的约束满足，而非仅有文体偏好。
