HotBugs.jar 是 2025 年 arXiv 论文和 SBSE challenge 数据集，问题边界很明确：现有 bug-fix benchmark 多覆盖普通缺陷，但没有专门抽出高优先级、时间敏感、接近生产发布窗口的 Java hot fix。

一个样本不是自然语言题目，而是 Apache 项目的 hot-fix 记录：Jira 元数据、buggy/fixed 版本、开发者补丁、测试结果、构建要求和复现分支。它适合作为软件修复智能体的环境/评测面，而不是泛化的代码生成数据，也不能代表所有生产事故。
