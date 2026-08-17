官方材料没有建立从每个来源经由 prompt、trace、verifier 或教师信号、reward、checkpoint 到报告结果的不可变逐条谱系。原始 SFT、RLVR 和 MOPD trajectory、完整 reward 日志、教师到组件的版本映射、环境快照和 checkpoint 选择记录均不完整或为 unknown。

来源权利边界仍然是混合的。尽管 NVIDIA 发布了数据集合，并对 OpenResearcher 子集进行商业许可清理，模型卡仍点名私有第三方、私有 NVIDIA、供应商和未披露来源。已检查发布材料没有提供完整的来源级权利、再分发和衍生数据映射。

报告描述了部分去重与 benchmark 去污染步骤，但没有给出单一的家族级重叠协议、阈值、残余重叠测量或不可变排除 manifest。同样，整体数据账本的训练 100%、测试 0%、验证 0% 并不能提供任务级 train/dev/test 成员关系。模型卡 14.8T 总数与报告 20T 预训练计数之间未解决的关系，也是额外的报告边界。

