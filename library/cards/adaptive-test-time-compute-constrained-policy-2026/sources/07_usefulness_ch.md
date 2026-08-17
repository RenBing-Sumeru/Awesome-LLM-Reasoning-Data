对本 track，AdaCompute 定义了审计 adaptive sampling 所需的最小 lineage：prompt ID 与来源、model/API revision、48 条 raw response、采样设置、answer-parser 输出、各预算下的 window membership、多数结果、正确性指标、utility estimate、成本定义、lambda、目标预算、oracle label、feature vector、split、classifier prediction 与实际部署成本。

把 response table 与派生 label 分开，可在不同成本函数或预算下重新标注，并显式展示估计不确定性。这也区分了 test-time compute 与 training：昂贵的重复响应构建小型监督路由 policy，在线执行只使用所选预算。官方代码是有用基础设施，但缺少 raw table，意味着无法直接复用论文标签，必须重新收集模型输出。
