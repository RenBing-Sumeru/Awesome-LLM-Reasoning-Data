Hunyuan-MT 研究一个紧凑 open-weight 模型如何覆盖广泛多语翻译、低资源方向、术语约束与 slow-thinking candidate fusion。其数据对象横跨 monolingual document、parallel segment、instruction-translation pair、synthetic teacher output、human-verified example、带 scalar feedback 的 GRPO candidate、同时含 process/final reward 的 CoT record，以及六候选 fusion record。

完整生命周期包括 general multilingual pretraining、MT-oriented continued pretraining、two-stage SFT、translation GRPO 与 weak-to-strong Chimera GRPO。但披露只到 stage level：公开权重与 inference code 不含 corpus manifest、filter decision、reward implementation、rollout record、immutable split 或 paper-run lineage。

多个核心口径相互冲突。1.3T low-resource component 在 Section 2.1 被归入 general pretraining，却在后文讨论 MT-oriented pretraining 增益时再次被归因；release 还并存 33、36、38 种语言/方言/script entry，以及 7B 品牌与 8B metadata。本卡保留全部口径，不擅自选定一个。
