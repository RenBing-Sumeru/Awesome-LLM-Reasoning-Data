arXiv 摘要核验了主要 benchmark 规模：7 个真实 Python 应用中的 73 个 bug，以及 6 个 example program bug。摘要还说明关键特性：每个 subject 都有 functional correctness oracle，并支持 system 与 unit test generation。

arXiv HTML 核验了发表背景和作者机构：FSE 2024，作者来自 CISPA Helmholtz Center for Information Security 与 Humboldt-Universitaet zu Berlin。论文把 Tests4Py 定位为面向 test generation、debugging 和 automatic program repair 的 benchmark。

官方 GitHub README 核验了实际可用性。README 记录了 `pip install tests4py` 安装方式、pyenv 需求、名为 `t4p` 的 CLI、checkout/build/test/unit/system testing 等命令，以及 MIT license。这些说明它背后有可执行工具，而不只是静态论文数据集。
