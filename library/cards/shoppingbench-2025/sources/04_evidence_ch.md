收录证据来自 arXiv API/HTML 和官方 GitHub 仓库。arXiv API 核验了标题、作者、v4 日期、摘要和 AAAI 2026 oral 备注。arXiv HTML 提供 benchmark 细节：四类 grounded intent、包含 2,746,368 个唯一商品的 sandbox、3,310 条总指令、2,410/900 训练/测试划分、17 个被评测语言智能体，以及面向 Qwen3-4B 的轨迹蒸馏。GitHub README 核验了公开代码路径、商品文档压缩包、测试 JSONL 文件名、环境设置、rollout/evaluation 脚本和 SFT/RL 训练入口。

这些来源足以进入 L4，因为它们确认论文、当前标题、会议/状态、作者、公开工件、评测面、数据规模和反馈指标。但最终可信度还需要检查仓库许可证、商品数据来源和再分发权利、评测器代码、划分是否不可变，以及外部 web-search 依赖是否会随时间改变结果。
