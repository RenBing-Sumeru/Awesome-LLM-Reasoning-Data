一句话贡献：SuperGPQA 是一个覆盖大量研究生学科的多选 benchmark，由专家选源、标注者转写和 Human-LLM 协同过滤构建，并用层级化准确率报告模型能力。

核心机制分三段。Source screening 阶段由 expert annotators 收集可信研究生级材料，而不是只依赖刷题网站。Transcription 阶段由标注者把原题转写或改写成多选题，补充干扰项，填写元数据并估计难度。Quality inspection 阶段使用规则检查、模型检查、查重和专家复核，过滤格式错误、过于简单、歧义或不可靠的问题。

最近对照是 GPQA 和 MMLU-Pro。SuperGPQA 的变化在规模和 taxonomy：强调 285 个 subfield，并同时报告 sample、subfield、field、discipline 层级表现，避免大类题量不平衡直接支配所有结论。方向标签是带构造审计流程的专家领域 benchmark。
