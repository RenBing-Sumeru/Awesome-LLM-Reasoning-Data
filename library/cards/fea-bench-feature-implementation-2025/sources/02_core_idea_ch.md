FEA-Bench 发布 1,401 个 feature implementation tasks，来自 83 个真实 Python 仓库。构建时先用规则筛选包含新增代码与测试变更的 PR，再用意图分类排除重构、修文档和纯 bug fix，最后把需求描述、base commit、gold patch、F2P/P2P tests 与环境信息组成实例。

其 verifier 使用 SWE-bench 风格 harness：新增功能对应测试在 base 上失败、应用 gold patch 后通过，同时原有行为不回归。公开 Hugging Face 版本受许可证与公司政策限制，只直接托管必要属性，部分仓库内容需按记录从 GitHub 获取；因此它首先是可复现 benchmark，而非完整镜像化训练语料。
