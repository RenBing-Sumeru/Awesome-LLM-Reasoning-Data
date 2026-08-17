最强证据具有条件性：在论文 mixed-teacher distillation 设置下，LALP 预测并选择的 response 获得了优于 GALP 的下游 point estimate。所有结果均由作者报告，本卡没有独立复现。

| 实验 | 条件与作者报告结果 | 支持的解释 |
|---|---|---|
| Teacher ranking | 对两个已报告 Qwen student，LALP 排序为 **QwQ-32B > DeepSeek-R1 > Qwen3-32B**，与下游 SFT utility 一致；GALP 给出相反的有用排序（第 7.1 节，表 2） | 在该长 mixed-teacher setting 中，full-prefix likelihood 不是可靠 teacher-utility proxy |
| Ranking subsample | 使用 **200 个 prompt** 的 LALP 分数可恢复全部 **817 个 LIMO prompt** 得到的顺序（第 7.1 节） | 在该设置中 teacher screening 可能比全数据打分更便宜；没有报告 repeated subsample variance |
| 7B response selection | Original **.353**、random **.407**、GALP **.412**、Local Lowest **.399**、LALP **.440**（表 3） | 对 Qwen2.5-7B-Instruct，最高 local likelihood 优于被测试 alternative |
| 32B response selection | Original **.445**、random **.651**、GALP **.632**、Local Lowest **.623**、LALP **.726**（表 3） | 在作者报告的平均值上，LALP 比 GALP 高 **9.4 个百分点** |
| Context locality | 使用之前 step 的 **5%–25%** 可保留有用 teacher order；**50%–75%** 会收敛到 GALP（图 3） | 报告差异来自 local conditioning，而不是只来自 step segmentation |
| 表征覆盖 | AIME 2025 的 mean nearest-neighbor cosine similarity 在 step 层面为 **.935**，完整 trajectory 为 **.760**（图 2） | 报告的 embedding 分析与 step-compositional coverage 一致，但 embedding model 与 preprocessing 未披露 |
| 科学扩展 | GPQA-Diamond 上 Qwen2.5-32B original **.551**、GALP **.611**、LALP **.702**（附录 C.12，表 15） | 报告的选择效果不局限于主要数学 suite |
| 代码扩展 | LiveCodeBench v2 medium：GALP **.588**、LALP **.633**；hard：GALP **.232**、LALP **.261**（附录 C.13，表 16） | 该方向在报告的代码设置中也迁移，但 hard task 的绝对提升更小 |

Within-teacher sanity check 是重要的负面边界。在 8,890 个筛选后的 MATH level-3-to-5 prompt、每题 16 个 response 的设置中，对 Qwen2.5-72B-Instruct 与 QwQ-32B candidate，较高 GALP tercile 得到更强下游结果（表 1）。因此，论文并未证明 GALP 普遍无效；它的 failure 与异质 teacher 生成的长 response、不同 style 和 self-conditioning pattern 相关。

Token-attribution 分析提供了一个可能机制。在作者报告的 critical region 中，GALP 质量分配为 discourse 或 filler 42.3%、math 或 symbol 31.2%、transition 12.8%、other 13.7%；LALP 则变为 18.7%、48.6%、22.4% 和 10.3%（图 4）。这些比例支持“local scoring 更强调数学 transition”的作者主张，但 category annotation method 并不是已发布的 token-label corpus。

Self-conditioning 分析显示，在每个 teacher 约 800 条 response 上，global-minus-local log-probability gap 会随 response 位置增加（图 5）。附录 C.1 还报告：LALP-selected example 可以有更高 global training loss，却比 GALP-selected example 得到更好下游结果。这些观察共同反驳把“full-prefix loss 更容易”当作充分数据质量准则。

这些结果都不能证明 step correctness。所有 candidate final answer 都被假定通过独立 matcher，LALP 只负责排序。Benchmark 提升也不能认证 selected data 的 provenance、license、contamination status、segmentation accuracy、统计稳定性或通用价值。817 条 selected response 及其 candidate/score ledger 不可得，因此无法检查某条具体记录与报告提升之间的关系。

发布检查提供另一层证据：ICML、arXiv 与 OpenReview 身份是官方的，但论文链接的匿名仓库当前重定向到 file API 并返回 HTTP 401，因此其内容不可核验。没有核验到 implementation、repository license、selected corpus、candidate pool、step boundary file、likelihood ledger、checkpoint、日志或不可变 run manifest。
