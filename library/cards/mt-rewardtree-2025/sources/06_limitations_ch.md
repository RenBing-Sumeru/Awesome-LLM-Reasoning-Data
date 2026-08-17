方法限制首先来自 search approximation。只扩展 logits 最高的 top-2 token，可能错过后续能产生更好翻译的低概率 token；每个 child 仅三次 rollout，也会使 node mean 含有噪声。0.04–0.4 的 score-gap filter 会排除差异极小和极大的对照，从而改变保留样本的难度分布。下一循环只沿较优分支继续，还会使后续数据受到早期 metric error 的影响。作为 curator inference，COMETKiwi false positive 可能提升流畅但不充分的分支，false negative 可能删除有效替代；没有 human agreement 或 calibration data 时，其发生率未知。

judge 同时也是 measurement stack 的组成部分。COMETKiwi 负责构造标签，又出现在下游 COMET-family metric 中，因此存在部分 circularity。MT-PRMBench 衡量的是对 metric-conditioned preference 的恢复，而不是独立的人工 preference standard。相关应用中的 Gemini-2.0-Flash 及其他 learned judge 还会引入版本、prompt、语言和 calibration 依赖。

发布边界阻止了完整 search audit。公开记录没有 raw tree、node/parent ID、显式 sibling token 与 prefix、每节点全部三条 rollout、variance、平均 node value、discarded branch 和 rejection manifest。`chosen_score` 与 `rejected_score` 相对 node mean 的语义也没有文档。每个 repository 只暴露名为 `train` 的 split；source-sentence grouping、prefixed/arbitrary linkage、duplicate control、decontamination 以及与下游 WMT23 的 overlap 均未披露。

复现与权利信息同样不完整。确切 WMT/FLORES 版本与 record ID、generator/judge checkpoint revision、seed、最大长度、总计算量、optimizer 设置以及不可变的跨 artifact manifest 均未知。dataset page 显示 Apache-2.0 metadata，但它与 WMT/FLORES source term 和生成输出权利是否兼容尚未解决；LLaMA PRM 没有可见许可，GitHub code license 也未验证。

作者明确将研究限制在高资源语言方向，并把低资源扩展与 RL 集成留作未来工作。测试时证据在每个报告设置中使用 500 条 WMT23 样本和 automatic metric，没有 human evaluation。因此，benchmark performance 不能作为 release quality 或广泛多语言有效性的证明。
