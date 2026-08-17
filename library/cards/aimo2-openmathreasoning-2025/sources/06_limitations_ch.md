**来源获取与权利。** 原始 AoPS scraper 和不可变 source-post manifest 未公开。当前文档把 AoPS-Instruct 指为相似输入，并明确说明原工作没有使用它。release-level CC BY 4.0 标签没有提供逐条论坛帖 provenance、作者署名、consent、删除状态或平台政策分析。即使 NVIDIA 的衍生发布具有宽松标签，这些缺失事实仍会影响合法与合乎伦理的复用。

**答案与 judge failure。** Qwen2.5-32B-Instruct equivalence 是 LLM judgment，不是形式化答案标准化或 proof checking。对 converted proof 与 no-answer problem，teacher majority output 成为 ground truth；相关 teacher error 因而可能被提升为接收 target。GenSelect 在选中 correct-answer candidate 时保留 choice，却不独立验证 comparison rationale。Appendix 样例已经展示通过筛选的 code/prose inconsistency。

**TIR 可观察性。** 公开 TIR row 是 interleaved string，不是 normalized state/action/observation episode。它们缺少 sandbox version、call boundary、exit status、exception、timeout、stdout truncation 与 step-specific verifier label。文本中出现可执行形式的 code，并不能证明它在公开配置中执行过、支持 prose，或能泛化到已观察 call 之外。

**计数与 pipeline 不稳定。** 论文 540K 不是公开 solved-problem count；官方更正值是 306K。bug 丢失 137K 道 proof question，也没有其 recovered solution 的固定公开 manifest。stage-0 与后续 TIR 采用不同 filter。缺少 problem ID 与完整 accepted/rejected ledger 时，很难重建每阶段保留了哪些 item，也难测量 selection bias。

**去污染与 release drift。** 虽然存在 LLM-based benchmark comparison，但 matched pair、judge output、threshold 与 final decision 缺失。托管 dataset 和当前重建文档可能在论文后变化；已检查代码也晚于论文，并非不可变 original-run manifest。复用必须固定 revision `d3d08664755704f422af97d43a7ff0ded4bd95df` 和 commit `74b8649734a6ecc2d3beca89311e1a5e02da48fa`。

**实验范围。** public-leaderboard variance、小模型收益有限、输出变长以及 filter regression 都限制泛化。强 benchmark 或竞赛表现不能证明逐条正确性、权利、去污染或对不同模型与 objective 的迁移。
