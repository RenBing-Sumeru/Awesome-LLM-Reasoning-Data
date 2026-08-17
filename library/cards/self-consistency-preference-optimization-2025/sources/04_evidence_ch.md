PMLR 官方记录显示，该论文收录于第 42 届 International Conference on Machine Learning 论文集，第 49737–49751 页。实验在 GSM8K、MATH 和 ZebraLogic 上报告了相对 seed model 与无监督基线的提升。消融显示，在报告设置中，票差加权 loss 优于不加权版本；MATH 的阈值分析展示数量—质量权衡：提高 tau 会增大测得的 chosen/rejected 正确率差，但会显著减少保留偏好对。Appendix 分析报告票占比与正确性正相关，并把 k=8 作为计算量与相关性的折中，k=16 略强。

这些证据支持在所研究、答案可解析任务上把 self-consistency 频次作为有用偏好 proxy。它不能把 plurality 变成 verifier：相关错误会形成高置信错误簇，更高 benchmark accuracy 也不能验证每个 chosen/rejected 标签。transductive appendix 实验使用 test query 构造偏好数据并报告额外增益；它必须与主要 train/dev/test 协议分开，不能被描述为无泄漏训练证据。从官方 PMLR 页面未确认 raw pair、rollout 或代码发布。
