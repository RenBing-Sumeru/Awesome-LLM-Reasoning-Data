对指定 frontier-disclosure 类别，本 Card 只能作为**阅读与审计参考**，不能作训练数据复用。它分开记录已命名的来源类、训练阶段、反馈类别、filter training、reward model、部署配置、benchmark、live evaluation 与缺失的记录级证据。

比较时，应分别列出 pretraining source、main-model post-training、filter training、internal/public evaluation、safeguard configuration、live-traffic evaluation、released artifact。不要把用于 filter training/evaluation 的 production data 合并为一般模型训练证据。没有规格时，不要把“verifiable rewards”或“model-based graders”当作可复用 reward data。

解读安全性时保留条件：Table 1 在 mitigation 下，Table 4 移除 safeguard，部分测试是 internal/model graded。复现需有 prompt/filter/system version、grader、task instance、tool、aggregation、sample、log。

复用等级：training data、reward model、filter、implementation 均为 blocked pending verification；仅适用于 disclosure analysis 与配置敏感 evaluation 阅读。
