对 Data Construction and Open Release Recipes track，GVM 是决定昂贵在线 rollout 预算流向的可实现配方。它最适用于提示成功率差异明显、当前 policy 能生成 on-policy 轨迹，并且存在相对可靠的程序化 outcome checker 的场景。

复现实验应把 allocation ledger 当作一等数据发布。需要保存来源/item ID、oracle 与 checker 版本、policy checkpoint、prompt template、seed、全部 pilot 与追加回答、抽取答案、verifier 输出、`p_i`、梯度层/归约与 `G_i`、`alpha/beta`、总预算、整数 `n_i`、接受/拒绝状态、replay/group 成员、optimizer step、token、verifier 调用、backward pass、wall-clock 和硬件。

该论文可用于设计均匀分配、仅 pass-rate、仅 gradient 与组合分配的匹配对照。除 Average@8 外，还应报告被接受样本数与 pass@n，并把分配效果同 `N'`、clipping、负样本使用、模型规模和刷新频率拆开。更稳健的后续工作还应加入 parser 对抗测试、过程有效性审计、零接受处理和语义污染检查。

复用等级：在遵守各项依赖与许可证的前提下，代码和算法可作为研究实现或审计参考；但不适合直接复用训练数据，因为没有发布论文运行轨迹包、item-level lineage、完整来源 manifest 或数据许可证。Benchmark 结果可用于选择研究假设，不能认证不可见记录。
