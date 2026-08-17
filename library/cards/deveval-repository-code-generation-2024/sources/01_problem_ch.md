一手来源是 arXiv:2405.19856（2024-05-30 提交，arXiv 标注 ACL 2024 接收）和官方 `seketeam/DevEval` 仓库。DevEval 要解决的问题是：只用 HumanEval/MBPP 这类孤立函数题，不能充分评估模型在真实代码仓库里的生成能力。它应收录为 repository-level code generation 的可执行评测面和环境反馈样本，不是后训练 recipe，也不是 GitHub issue 修复基准。

一个样本包含待生成函数或方法的 namespace、所在仓库和文件位置、需求描述、参考代码、依赖标注、测试函数和主题/仓库元数据。验收面是在原仓库中替换目标代码并运行测试，同时可计算 Pass@k 和参考依赖召回。它对 atlas 的价值在于把“自然语言需求、仓库上下文、依赖关系、可执行反馈”绑定成可审计对象。
