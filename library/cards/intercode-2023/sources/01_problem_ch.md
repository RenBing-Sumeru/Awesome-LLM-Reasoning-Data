InterCode 是 2023 年 arXiv 论文，也是 NeurIPS 2023 Datasets and Benchmarks 工作，研究带执行反馈的交互式编码评测。它解决的缺口是：很多代码 benchmark 只看最终提交程序，但真实调试、数据分析、shell、SQL、安全任务都需要多步 action 和环境反馈。

数据对象是一段交互 episode：自然语言任务、环境状态、agent 命令或代码 action、执行 observation，以及最终 success signal。官方项目和仓库标准化了 Bash、SQL、Python、CTF 类任务和 SWE 相关交互面。

收录边界：InterCode 是 agent-environment benchmark 与轨迹/评测面，不是静态代码生成数据集，也不是通用桌面自动化套件。它对 atlas 的价值在于反馈契约来自 execution 与环境状态转移，而不是单独答案键。
