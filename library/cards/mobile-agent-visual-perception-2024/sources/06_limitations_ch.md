正确性只相对于被测试的 app、设备设置、视觉工具、模型后端和 Mobile-Eval 完成规则成立。成功轨迹不证明通用手机能力，也不证明能稳健应对未见过的 app 更新。

系统依赖截图质量、OCR 和图标定位、闭源模型行为、prompt 选择和实时 UI 状态。失败可能来自感知错误、坐标 grounding 错误、任务分解错误、app 延迟、登录状态或任务歧义。

复用时不能把 Mobile-Eval 分数直接当训练标签，除非保留完整 trace 和环境 provenance。仍不明确的关键事实包括 public/private task split 策略、长期 app 可复现性，以及所有评测判断是否都可机器验收。
