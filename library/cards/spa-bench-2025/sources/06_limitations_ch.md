release 不包含许多读者预期的数据对象。human annotator 执行 reference screenshot trajectory，论文 agent 生成 screenshot 与 log，但两类 corpus 和 paper-run result 都未公开。发布内容只有 task、40 个 cross-app subtask JSON 与代码。因此，公开 success/failure 留存、attempt selection、correction 与 deletion history 无法审计。

reset 与 replay 不完整。snapshot 按实验 cycle 恢复，而不是证明每个 task 前都恢复；emulator 在已分配任务后 reset，外部保存的 app state 有时需要人工清理。WhatsApp/OneNote 英文任务和多数中文任务在不支持 snapshot 的 physical device 上运行。仓库没有可下载 AVD/snapshot、APK hash、Android image、account state、credential provenance 或 paper-run agent/evaluator manifest。动态 service、ad、pop-up、recommendation、CAPTCHA 与 network state 都会改变行为。

verifier 同时存在 deterministic 与 model-mediated failure mode。OCR 可能因语言、rendering 或 UI drift 漏掉正确文字，也可能仅因 screen 含有字符串而通过，却没有证明所需 transition。逆序扫描可能找到较早的 valid screen，即使后续 action 已撤销状态。GPT-4o outcome 依赖 model revision、prompt/action presentation、screenshot selection、context length 与 hallucination。cross-app ordered segmentation 可能拒绝有效替代 workflow；其 calibration 中 true negative 超过 90%。

意外 network、Android、CAPTCHA error 会 rerun，而预期 invalid action 会计入 agent failure。缺少公开 attempt ledger 时，这个选择边界可能隐藏不稳定 episode 或改变 aggregate success。论文报告每个 agent-task setting 运行 1 次，并把 multiple-run robustness 列为未来工作；attempt count 与 seed 仍未知。

系统没有面向 post-training 的 train/dev/test split。4 个文件只是 language 与 task-type evaluation strata，全部 340 个 task 构成 evaluation surface。官方未发布 semantic deduplication、GUI Odyssey overlap report、evaluated-model exposure audit、public-prompt leakage analysis 或 dynamic-content contamination policy。训练复用会污染 benchmark，也没有实验证据支持。

仓库 MIT license 覆盖已分发 repository material，但不能解决 GUI Odyssey-derived content、third-party app/service、live UI content、account、screenshot、model/agent output、submodule 或未来 snapshot/trajectory release 的权利。项目没有 benchmark-wide PII scan、consent、redaction、retention、deletion 或 takedown policy。

mobile execution 会产生副作用。任务涉及 contact、email、messaging/social post、shopping、health、travel 与 location；自动化可能发送消息、发布评论、修改 setting/account，或接近 purchase。harness 执行 third-party code、ADB/shell command、local model server、network service 与带 secret 的 OpenAI call，但 sandbox、egress、secret redaction、恶意 APK/dependency control、CAPTCHA handling 与 purchase/post prevention 均未说明。
