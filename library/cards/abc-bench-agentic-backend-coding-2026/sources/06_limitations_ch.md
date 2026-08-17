1. **224 条仍是小规模：** 8 种语言和 19 个框架的每类样本可能很少，不能用总体结果推断特定框架能力；应按 framework 和 task category 报告置信区间。

2. **基础设施失败混入能力：** 镜像拉取、端口冲突、启动时间和外部依赖均可导致 tests 失败。评测需区分 build、boot、API logic 和 timeout 四类结果。

3. **隐藏测试也可能过约束：** HTTP payload、时间戳或存储细节若过于具体，会拒绝等价实现。复用前应审计 implementation-agnostic 程度，并固定 archive、网络策略和 ODC-By 数据许可。
