一句话贡献：SWE-bench: Can Language Models Resolve Real-World GitHub Issues? 把一个样本包含 GitHub issue、仓库快照、候选补丁面、测试、Docker/运行配置、日志、split 元数据和 resolved/unresolved 结果。绑定到具体反馈契约，形成可复用对象。

核心机制：作者把 12 个 Python 仓库中已解决的 GitHub issue 和 pull request 转成 2,294 个可执行修复问题。反馈契约：评测器在 SWE-bench harness 中应用补丁并运行仓库测试；成功是在固定 split、镜像和 harness 版本下的程序化 pass/fail。最接近的对比对象是：HumanEval/MBPP 式函数补全、issue 文本问答，以及没有仓库状态的代码生成。方向标签是 verifier-anchored agent evaluation，即可复用单元是任务对象加验收规则。
