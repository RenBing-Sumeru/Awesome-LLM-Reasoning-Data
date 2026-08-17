以下内容结合作者披露的边界与 Card 作者基于论文和 release 作出的推断：

- Headline count 相互冲突：`10,398 / 23,430` 为 44.38%，并非成本推导采用的 39.9% replay-success rate；另一处又写成“nearly 5,000 verified trajectories”。发布进一步引入 52,594 个 turn，却没有 trajectory/subset mapping。
- Success 是 judgment label，而不是严格 terminal predicate。GPT-4o evaluator 报告 accuracy 为 84.0%，其 prompt 允许多种 partial-completion shortcut，因此 false accept 与 false reject 均可能存在。
- 没有公开 failed-trajectory split、rejection ledger、evaluator output、failure reason、earliest-failure record 或 retry history。Success-only retention 隐藏 rejected distribution，并可能偏向更容易、更稳定或 judge 偏好的 site/task。
- 公开数据缺少 trajectory/tutorial ID、source URL、site、category、timestamp、outcome、screenshot/video、DOM/HTML、network/native Playwright trace，以及到 6,000/10,000 SFT subset 或 checkpoint 的映射。因此它是 text-turn export，而不是论文完整对象。
- Code repository 只提供 evaluation scaffold，Data Preparation 与 Training 为空，collection、filtering、replay、evaluation、serialization 与 SFT pipeline 均缺失；也没有 tag、release、root license、test suite 或 paper-run manifest。
- Dataset 未声明 license。Model Apache-2.0、manuscript CC BY-NC-ND 4.0 与 project-footer CC BY-SA 4.0 都不会给独立 code/data、RedPajama tutorial text、live-site content、screenshot 或 derived trace 授权。
- Source page 与 live website 带来 copyright、attribution、terms-of-use、privacy、credential、session 与 PII 风险。论文未披露 per-page rights manifest、consent/account policy、scanning、redaction、retention、takedown 或 deletion procedure。
- Live site 与 tutorial 会独立 drift；Appendix H 已展示 expired-tutorial failure。没有 replay timestamp、archived page、site snapshot、browser/container digest、dependency lock 或 reset-state manifest 支持精确 replay。
- 没有披露 RedPajama source 与 WebArena、ScreenSpot、Mind2Web 或 model pretraining 之间的 exact/semantic contamination audit。把 WebArena 称为 OOD 不能替代 row/task overlap study。
