**Detector 误差。** BML pattern 会漏掉未知 host，又包含 question/test/quiz 等宽泛词，既有 false negative 也有 false positive。QCL lexical overlap 会漏 paraphrase，也可能把合法题源检索当污染。EAL 依赖 DeepSeek V4 Pro：Medbullets5op recall 仅 83.33%，MedQA 未测 recall。阈值和模型版本都需固定。

**实验边界。** 污染组来自 live trajectory 后分组，不是随机分配；题目难度、可搜索性、年代和来源会 confound 分数。关闭全部 Search 改变的不只是答案泄漏，并非精确 EAL intervention。无显式 prediction 的 turn 记错，小型 EAL/QCL 组也会产生极端百分比。领域主要局限于医学/临床 QA。

**Replay 与发布。** ranking、snippet、page、paywall 会漂移，商业 agent 隐藏大多数 step。匿名结果库当前不可访问，因此无法核查完整成功/失败留存、tool failure、detector code、timestamp 和 snapshot。replay 需要冻结 evidence archive，同时遵守网页权利。

**许可、隐私与安全。** 论文为 CC BY 4.0，但 benchmark 与网页有各自许可/terms。搜索轨迹可能保留第三方文本、URL、identifier 和 model reasoning；未报告记录级 PII、robots、consent、redaction 与 storage audit。精确 leakage pattern 和泄漏 Q&A 具有 dual-use 风险，可用于防御，也可被故意发布来操纵评测。医学 correctness 不能解读为临床安全认证。
