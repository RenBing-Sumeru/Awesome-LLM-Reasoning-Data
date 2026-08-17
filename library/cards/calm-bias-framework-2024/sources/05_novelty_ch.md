已有基线是针对单个 LLM-judge 偏差的零散 robustness tests，例如 position、verbosity、self-preference 和 prompt wording。CALM 的变化是把范围扩展成 12 类 bias taxonomy，并在统一框架下自动做 perturbation-based measurement。

方向信号是：judge evaluation 本身需要 benchmark-quality audit，之后才能把 judge labels 当作 gold labels 或 rewards。质量信号来自公开项目页、代码/数据仓库、明确 bias taxonomy 和跨模型实验。不是新的部分包括 LLM-as-a-Judge、扰动测试和 score-shift metrics。复用前要检查扰动有效性、parser 鲁棒性、judge 模型版本、prompt 泄漏、license，以及测得偏差是否迁移到目标领域。
