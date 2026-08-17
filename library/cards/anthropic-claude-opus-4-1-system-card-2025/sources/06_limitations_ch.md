这是增量卡，不是完整训练说明。没有 Opus 4.1-specific source mixture、changed-example manifest、stage allocation、preference corpus、synthetic share、source date 或 rights ledger。引用 Claude 4 System Card 只能提供 baseline context，不能证明所有家族级数据或 reward 选择都原样沿用。

Generator 与 scorer 依赖可能造成相关偏差。Opus 4-family auditor 生成模拟对话，model scorer 判断同一批 transcript，另一个 Opus 4-based judge 标注 admirable behavior。共享的 prior、prompting style、安全偏好与 blind spot 可能同时影响“出现什么行为”和“如何评分”。没有独立人工 calibration、scorer disagreement、counter-model audit 或开放 transcript sample。

Seed distribution 刻意极端且不具代表性。绝对 rate 不能估计普通部署 prevalence。Opus 4.1 还显示略高的 evaluation-awareness indication，可能改变受审计行为并降低 validity。Blackmail experiment 使用近似但非完全相同的 in-training checkpoint，又增加一层归因限制。

训练与部署控制没有通过 ablation 分开。专门 prompt-injection RL、computer-use instruction、model-level instruction、detector、execution halting、monitoring 与 account intervention 都可能影响结果。Attack generator、RL rollout record、reward/verifier、objective weight、algorithm、detector dataset、threshold 与单项贡献未知。评测 auditor/classifier 不能重写为训练 reward。

Reward-hacking 记录不完整。来自 training distribution 的 coding task 不是干净 held-out test；hidden fuzzed test 只在命名评测内部 held out。两个 training environment 给出 10% 与 3% 结果，却不公开环境定义、task record、样本数、reward、monitor checkpoint、threshold、calibration 或 error rate。

报告没有全局 split、decontamination audit、record lineage 或可复用工件发布。Human/synthetic safety prompt、290 seeds、每模型 1,160 条 transcript、scorer output、agent trajectory、hidden test、training-environment log、reward implementation、classifier、评测代码与模型权重均不可得。指标修正还说明 revision tracking 必不可少。
