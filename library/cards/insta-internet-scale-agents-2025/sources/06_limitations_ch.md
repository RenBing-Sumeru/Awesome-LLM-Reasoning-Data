第一类限制是 verifier 较弱。safety accuracy 在 100 个平衡、经过整理的站点上最高为 97%；小型人工研究中的 feasibility 为 75–89%；100 条人工标注 trajectory 上的 success-judge accuracy 为 78.0–82.6%。这些样本不能建立 corpus-level safety 或 success 结论。false accept 会加入不安全、不可能或失败记录，false reject 会移除有效行为。由于训练只选择 judge-success endpoint 恰好为 1 的样本，judge bias、reward hacking 与 verifier gaming 可能被 SFT set 继承。

第二类限制是 environment brittleness 与真实副作用。网站会改变内容、DOM structure、locale、price、availability、consent dialog 与 navigation flow。公开 task 缺少 capture/replay timestamp 和 archived site state，原本有效的 task 会变得不可执行，evaluation 也不确定。agent 获得范围较广的 Playwright access；prompt 对 purchase、post、account、personal data、download 与 state change 的禁止不是 action-level transaction sandbox，访问和操作可能影响 analytics、product price、company decision、account 或 site state。

当前 v3 viewer 中有一条 registration task，要求填写 placeholder name 与 email，和声明的 no-account、no-personal-information policy 冲突。这是 guardrail leakage 与 dataset-version drift 的直接证据，但不能据此断言每条 row 都不安全。更可靠的 release 需要 machine-enforced action restriction、policy test、violation ledger，以及对高影响 action 的人工审查。

privacy control 是 opt-in 且不完整。当前 `BrowserConfig` 默认 `remove_pii` 为 false。即使启用，scrubadub 只处理 processed text，pipeline 返回的 raw HTML 与 screenshot 保持不变。因此 URL、DOM metadata、action argument、judge text、contact information、credential 与 image 仍可能保留敏感内容。paper-run setting、consent basis、credential scanning、image redaction、retention、access control、deletion 与 takedown procedure 均未知。

release completeness 阻断 trajectory 复用。v2/v3 公开 task，但不公开 observation、screenshot、raw HTML/DOM、reasoning、action、success/failure label、judge score/rationale、parse error、unsafe-site rejection、training subset ID 或 checkpoint。failed rollout 与 accepted/rejected ledger 缺失。尽管论文和项目使用了发布表述，官方 HF organization 仍没有 public model。

copyright 与 licensing 仍未解决。MIT 覆盖检查到的代码，也标注在 task repositories 上，但不能单独授予第三方 site text、image、HTML、screenshot、personal/contact data 或 derived trajectory 的权利。没有 per-row source license、terms-of-use analysis、attribution、capture timestamp、consent 或 takedown status。未发布的 multimodal corpus 无法接受这些方面的审计。

reproducibility 对版本高度敏感。v2 有 146,746 条 row，v3 有 146,441 条，305 条减少没有 mapping。arXiv version、code head、data schema、model、result 与 count 都发生变化，代码没有 release tag。没有 immutable manifest 绑定 Common Crawl input、accepted host、prompt、model endpoint、browser/container、PII setting、seed、retry、trajectory、judge decision、checkpoint 与 reported table。除 website-disjoint split 和声明 20K pool 排除 WebVoyager sites 外，decontamination 也不完整。

最后，training 与 judge 结果均为作者报告。没有独立 end-to-end rerun、seed-level variance、完整 calibration record 或固定 live-site environment。secondary learned judges 能降低对单一 judge 的依赖，但不能形成 programmatic ground truth。这些限制一部分来自论文明确披露，另一部分是根据 data/feedback contract 得出的 curator inference。
