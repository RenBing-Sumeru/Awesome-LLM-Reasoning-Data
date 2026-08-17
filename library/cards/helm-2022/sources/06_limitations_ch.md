HELM 的正确性只是在某个 scenario adapter 和 metric 下成立，不是对模型能力的普遍声明。多指标报告改善了可见性，但不能消除数据集偏差、prompt sensitivity、benchmark contamination 或自动 scorer 的局限。

HELM 是 living benchmark，结果复用很脆弱。API 模型会变化，scenario 会新增或修订，prompt template 会调整，metric code 也可能更新。license 和再分发约束继承自每个底层 scenario，必须逐数据集检查。
