SWE-bench 已经建立了仓库级 issue resolution 任务与基于测试的补丁评测，但其历史准确环境需要大量人工工作，并只覆盖 12 个选定仓库。已有自动基准构造可以获取 issue 或补丁，却没有在同等规模上同时解决历史依赖配置、测试命令发现和异构结果解析。

本文的具体变化是把环境重建变为自动、带反馈的 pipeline：从多种仓库证据中提取命令，用 `uv` 强制执行 issue-time 依赖截断，根据干净 container 中的失败修复命令，以 LLM 加测试解析进行验证，在相邻版本间复用成功命令，再从参考执行得到 F2P/P2P/P2F/F2F 分区。由此可以构造一个面向应用的基准和一个仓库覆盖更广的基准，但没有声称提出新的 agent-learning algorithm。

对 reasoning-data 研究而言，方向信号来自更丰富的评测对象。issue 文本与参考补丁本身并不充分；依赖日期、setup commands、parser、Docker 状态、测试分区和 terminal predicate 共同决定标签。SWA-Bench 还考察了不同于 library-centric SWE-bench 的分布，SWEE-Bench 则扩大仓库池。这些是 evaluation surface 的改变，不是公开数据适合训练的证据。

并非新贡献的组件包括 GitHub issue/PR mining、Docker 执行、LLM 命令建议、unit-test evaluation、SWE-bench 补丁任务和 F2P/P2P 式结果判定。贡献中相当部分属于系统整合与规模扩展。复用前应检查非默认 harness branch、测试 parser 行为、论文与 Hub 行数漂移、缺失的 SetUpAgent generator code、可变 Docker tags、单 split 发布、数据集 license，以及没有发布被拒 setup 记录的问题。
