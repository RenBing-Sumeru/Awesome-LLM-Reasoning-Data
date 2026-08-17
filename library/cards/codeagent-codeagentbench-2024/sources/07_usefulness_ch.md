这张卡可作为仓库级编码评测 schema：保留 task id、仓库快照、文档、目标符号、依赖图或抽取符号、工具调用、生成 patch、sandbox 日志、测试结果、prompt 和运行预算。它适合设计 agent-environment 轨迹，也适合审计执行反馈是否真的提升编码结果。若要当作 reward/filter 数据使用，必须先逐项版本化测试、许可证、split 和环境依赖。
