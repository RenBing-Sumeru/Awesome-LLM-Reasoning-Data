Benchmark separation 存在实质缺口。Stage-one SFT 明确包含 FLORES-200 dev 与过去 WMT test set，而 evaluation 再次使用 FLORES-derived pair 和 WMT24pp/WMT25 development material。缺少精确年份、row ID、pair manifest、source-target overlap check 与 checkpoint-selection log 时，报告分数不能视为干净 held-out estimate。

Teacher 与 judge 依赖高度相关。DeepSeek-V3-0324 既生成 synthetic SFT translation，又通过 GEMBA-style scoring 过滤或奖励输出；XCOMET-XXL 与 CometKiwi 也属于 learned metric，而非独立 ground truth。Judge prompt、revision、权重、normalization、calibration、adversarial test 与 reward-hacking audit 均未公开。

低资源、少数民族语言与方言数据的权利缺口最大。报告没有发布 source-level license、provenance、annotator 身份/资质、compensation、informed consent、community consultation、privacy review、cultural-governance 条款、attribution、derivative right 或 takedown procedure。仅列出公共 corpus 名称不能解决逐记录与翻译权利。

核心预算未知。六组 Chimera candidate setting、尝试/保留候选数、translation/fusion GRPO 的 prompt/rollout 数量、group size、step、token limit、compute、seed、failure 与 checkpoint selection 均缺失。公开 prompt 只能复现 interface，不能复现训练管线或成本。

Metadata 冲突阻止精确范围表述。1.3T token 先归入 general pretraining，后又被记为 MT CPT 增益来源；支持语言在不同页面为 33、36、38，可能混合了 language/dialect/script 口径；官方模型品牌为 7B，而 Hugging Face metadata 为 8B。发布方未提供权威 reconciliation。

该发布不是 permissive open source。Tencent Hunyuan Community License 排除 EU、UK、South Korea，月活超过 100M 需另行许可，并限制用模型或输出改进非 Hunyuan 模型。Generic finetuning code 与公开权重不提供训练数据权利、paper-specific reward、GRPO config、evaluation output 或端到端复现。
