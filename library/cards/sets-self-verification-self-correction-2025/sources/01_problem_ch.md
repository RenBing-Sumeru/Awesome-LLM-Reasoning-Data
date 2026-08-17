TMLR 正式记录和 arXiv v5 论文研究如何分配测试时计算：repeated sampling 往往很快饱和，而单条 SELF-REFINE 链又常在模型自称答案正确后提前停止；既有混合方法还可能依赖另行训练的 verifier 或 revision model。SETS 检验能否仅通过 prompt，让同一个未改权重的语言模型结合并行探索与顺序自我改进。

过程对象包括 m 个初始候选 solution、针对每个当前 solution 的 self-verification response、零到多次携带此前“solution—feedback”历史的 self-correction、early-stop 决策以及最终 exact-match majority vote。方法不增加模型训练，产生的是评测时轨迹而非新训练语料。其反馈是由规则解析的模型自身判断，不是外部校准的正确性奖励；benchmark ground truth 只用于评测与 scaling curve 测量。
