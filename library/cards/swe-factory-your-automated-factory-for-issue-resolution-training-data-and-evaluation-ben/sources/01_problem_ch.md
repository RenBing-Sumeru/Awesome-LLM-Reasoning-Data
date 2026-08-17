从 GitHub issue 构建 SWE 训练数据最耗时的环节不是抓取文本，而是让旧 commit 可安装、正确解释测试退出状态，并确认 issue 在 base 上失败、在 gold patch 后通过。传统流程依赖手工 Dockerfile、项目专用日志 parser 和逐例检查，难以扩展到多语言。

SWE-Factory 将这些步骤自动化：多 agent SWE-Builder 恢复环境，统一用 exit code 判断命令成功，再自动执行 fail2pass validation。其目标是低成本生产既能训练又能评测的 issue-resolution tasks，而不是提出新的 coding model。
