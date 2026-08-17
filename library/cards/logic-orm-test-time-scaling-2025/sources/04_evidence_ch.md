最强的证据来自公开 FOLIO 数据本身。普通文件在 1,001 个唯一输入上有 10,009 条记录，其中 7,383 条 reward-positive、2,626 条 reward-negative。合并 Echo-CoT 文件在相同数量的唯一输入上有 19,105 条记录，其中 7,383 条为正、11,722 条为负。直接进行多重集比较可见，全部 CoT 记录都包含在合并文件中，新增的 9,096 条记录全部为 reward 0。两个文件还各有一条完全相同的记录出现两次。这些 curator 计算与论文的 FOLIO 总数一致，同时揭示了 release 中的重复记录以及实际保留的 Echo augmentation 规模。

Appendix Table 2 描述了更大的过滤前构造边界。FOLIO 的三个 forced-answer pool 分别包含：10,010 条 True-prompted 候选（6,552 正确、3,458 错误）、10,010 条 False-prompted 候选（5,459/4,551），以及 10,004 条 Uncertain-prompted 候选（4,918/5,086）。公开内容只有最终合并文件。原始计数与新增 9,096 条负样本之间的差异证明中间发生了过滤与选择，但由于没有 raw candidate ID、judge response 和 keep/drop decision，无法重建某条负样本为何被删除。

模型侧同样具体，但并不完整。官方 Hugging Face collection 发布了六个无需申请访问的 full-weight ORM：FOLIO、ProverQA 与 JustLogic 各有 CoT 和 Echo 两种版本，均基于 Qwen2.5-7B-Instruct。公开 repository 包含 generator、trainer 与 inference 组件，足以支持所述 data-to-verifier lineage。但它不能证明权重来自可复现的逐行 manifest：ProverQA 与 JustLogic 轨迹未发布，FOLIO 文件没有 split ID，checkpoint data hash 不可用，而且论文与代码的 epoch 设置冲突。

论文报告 CoT-plus-Echo ORM 在 FOLIO、ProverQA、JustLogic 和四个 reasoner 上改善演绎逻辑选择。这些是特定模型与候选预算下由作者报告的任务结果；它们是所述评测条件下 selector 行为的证据，但不能证明每条公开轨迹都有效、多样、具有明确复用许可或不存在 leakage。由于历史带分候选池没有发布，无法独立检查增益究竟来自更好的负样本覆盖、score calibration、更大候选池，还是 benchmark-specific artifact。

两处内部不一致会实质影响复现。Appendix Table 4 把 JustLogic Echo-CoT 总数印为 49,197，但正确与错误数量分别为 27,918 和 41,279，两者之和是 69,197；Appendix B 的采样说明无法解决该差异。另一处是论文报告 ORM 训练 3 epoch，shell 也传入 3，但 checked-in trainer 硬编码为 2。这些问题不构成否定工作的理由，但必须与实验结果一起保留。
