HELM 初版证据的强点是覆盖面：30 个 models、42 个 scenarios、7 类 metric，既有 core scenarios，也有 targeted scenarios。论文的关键结论不是某个 SOTA 数字，而是当 accuracy 与 calibration、robustness、fairness、toxicity、bias、efficiency 一起报告时，模型排序和取舍会变化。

单条证据是某个 scenario/adapter 配置下保存的 model output，再由对应 metric module 评分。证据边界是 HELM release：model API、prompt template、scenario version、metric code 和在线结果表都会变化，没有版本标签就不能混用旧数字和当前数字。
