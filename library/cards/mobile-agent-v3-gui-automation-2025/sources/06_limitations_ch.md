正确性只相对于 benchmark 环境和内部轨迹 judge 成立。任务通过只验证某个状态下的最终 GUI outcome，不验证语义最优性、隐私安全或对 UI 改版的稳健性。

框架对云环境漂移、app/OS/browser 版本、action grammar、step budget、checkpoint release、prompt/scaffold 设计，以及可能不可公开的私有数据生成基础设施都很敏感。公开仓库不等于训练数据或云执行可完全复现。

复用风险包括 public benchmark task 污染、未披露的轨迹过滤、对环境 predicate 过拟合，以及截图、app 内容和模型权重的 license 边界。
