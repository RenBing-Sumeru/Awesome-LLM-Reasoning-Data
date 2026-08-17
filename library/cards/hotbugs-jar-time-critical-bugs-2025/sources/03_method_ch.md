1. 输入：Apache Java 仓库、Jira issue、提交历史、release tag 和候选补丁。
2. 筛选：按高优先级、issue 到修复的短时间间隔、临近发布等 hot-fix 条件找候选。
3. 复核：独立人工验证候选，保留 679 个真实 hot fix，并补齐元数据。
4. 打包：把其中 110 个可复现案例集成到仓库分支，包含 buggy/fixed 版本、开发者补丁、bug report 和测试结果。
5. 验收：构建工具和项目测试给出通过/失败证据，元数据说明该缺陷为何属于 hot fix。

复现必须固定 recursive submodule、分支、Java 版本、Maven/Gradle 版本和元数据表快照。它提供评测和审计面；除非下游另定义 harness，否则不是 reward model 或 RL 训练流程。
