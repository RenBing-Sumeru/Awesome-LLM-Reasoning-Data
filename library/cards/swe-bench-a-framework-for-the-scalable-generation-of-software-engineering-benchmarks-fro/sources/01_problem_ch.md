SWE-bench 建立了真实仓库 issue resolution 标准，但人工支持少量 Python 项目导致扩展慢、数据静态、污染风险上升；弱测试 oracle 和难以恢复的环境也会降低实例可靠性。仅增加合成题不能覆盖真实 PR 中的 bug fix、feature request 与多语言工程差异。

SWE-Bench++ 提出自动化 benchmark factory，从开放 GitHub PR 构造可执行任务，依次完成来源筛选、环境合成、测试 oracle 提取和质量检查，并把强模型仍失败的实例转成提示引导轨迹。它同时面向大规模评测与训练数据生产。
