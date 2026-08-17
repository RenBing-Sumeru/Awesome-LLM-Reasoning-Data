一句话贡献：SWE-bench Goes Live! 把一个样本包含 2024 年以来创建的 GitHub issue、仓库快照、patch/test_patch 字段、FAIL_TO_PASS 和 PASS_TO_PASS 测试、image key、测试命令、log parser 和 Docker 镜像。绑定到具体反馈契约，形成可复用对象。

核心机制：作者持续挖掘新 GitHub issues，构建专用 Docker images，并发布 live-updated splits，同时保留 SWE-bench 式可执行验证。反馈契约：Docker/test harness 执行 fail-to-pass 和 pass-to-pass 测试；成功取决于提交补丁是否满足固定测试契约。最接近的对比对象是：SWE-bench 静态发布和其他含较旧公开任务的仓库修复基准。方向标签是 verifier-anchored software-agent evaluation。
