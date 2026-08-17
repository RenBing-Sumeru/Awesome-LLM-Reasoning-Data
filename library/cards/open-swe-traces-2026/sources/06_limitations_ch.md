Outcome 语义较粗。`resolved=0` 表示 patch 在 harness 下未解决任务，`-1` 表示 outcome 信息不可用；二者都无法说明问题来自推理、工具、测试、基础设施还是缺失评测。单元测试可能不完整或不稳定，发布物又未提供逐行测试日志与命令。40.6% pass rate 还排除了 unknown，不能写成全部 207,489 行中的比例。

精确重放信息不足。记录公开 `instance_id`、代码库、源数据集名、轨迹、工具和 patch，但没有显式规范 PR URL、base/head commit SHA、container digest、harness 版本、随机种子、教师解码参数、重试信息或淘汰原因。官方 collection 目前也没有 pipeline code 和 `OPEN-SWE-AGENT` checkpoint。论文还报告了 framework 过拟合，以及被评测模型在 MOpenHands 中 5–10% 的循环行为。

发布权利与隐私需要独立审计。数据卡对发布物使用 CC BY 4.0，源代码库按宽松的 repository-license 标签过滤，但这并不能分别确立 issue/PR 文本、patch 片段、依赖、教师输出或保留 reasoning 的权利。Ethics Statement 称自动过滤器会清除 PII 与 credential，却未公开检测器细节或残余风险测量。长工具日志与显式 reasoning 仍可能携带秘密、个人数据、不安全命令或教师特有漏洞。

论文没有报告 20,000 个源任务与 SWE-bench Verified、Multilingual 或 Pro 之间的广泛去污染分析。`TrajectoryScanner` 处理的是单次运行中的 git-history 捷径，不是训练–评测重叠。公开 configuration 是来源模式，而非 held-out split；复用者必须自行构建抗泄漏划分后再评测。
