Terminal-Bench 关心的是语言模型智能体能否在真实命令行环境中完成长程任务，而不是只回答静态代码题或文本题。主要来源是 2026 年 1 月 17 日提交的 arXiv 论文、Terminal-Bench 官网，以及公开的 `laude-institute/terminal-bench` 仓库。仓库中的 citation 将该工作标为 ICLR 2026，并给出 OpenReview 链接。

它的边界是 terminal-based agent evaluation。它不是一般软件 issue 修复 benchmark，也不是网页浏览 benchmark，更不是偏好标注数据集。一个 benchmark instance 包含英文任务指令、沙盒化终端环境、测试、日志，以及参考或 oracle 解法。评测面是完整 episode：智能体需要查看文件、执行命令、必要时安装或调用工具，根据执行反馈调整动作，最后通过任务测试。

论文要补的缺口是：很多 agent benchmark 要么过于玩具化，要么任务链条太短，要么缺少系统级工作流，因此难以区分 frontier agents。Terminal-Bench 2.0 把命令行工作组织成可复现环境和任务级验证。论文报告 89 个困难任务；公开仓库则说明当前维护中的 benchmark 是 beta 任务套件，约 100 个任务，并提供 CLI harness。

主来源直接支持论文、项目、代码仓库、harness、任务格式和可执行评分契约。最重要的 caveat 是版本：复用分数时必须记录 dataset name、dataset version、task split、package version、Docker/runtime 平台、agent adapter 和评测日期。
