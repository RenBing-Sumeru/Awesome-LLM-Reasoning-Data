仓库级 feature addition 不只是生成一个恰好通过少量测试的补丁。智能体需要理解 issue、定位相关代码与测试、把改动分解成实现任务并排序、编辑仓库，同时避免回归。常见 resolved rate 只能给出终端结果，无法说明这条链路在哪一步失败。

RACE-bench 描述了 528 个 feature-addition 实例，来自 SWE-bench 同样使用的 12 个公开 Python 仓库。每个实例把来自 issue 的功能请求及可选开发者讨论 hints，与仓库 release/base commit、Docker 设置、gold/test patches、fail-to-pass（FTP）和 pass-to-pass（PTP）测试，以及结构化中间推理参考绑定。RACE-bench Lite 包含其中 100 个实例。

该基准设想的 episode 从隔离的 base-commit 容器开始。智能体接收 feature request 与 FTP tests，使用仓库搜索、静态分析、编辑和测试工具，最终输出补丁。尚未核实任何作者控制的代码、数据集、容器、evaluator、项目页、judge bundle 或轨迹发布，因此本卡片严格区分论文描述对象与可公开复用制品。
