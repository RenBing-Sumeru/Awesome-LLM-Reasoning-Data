核心贡献是一套面向移动 LLM agent 的易用 benchmark harness，在保留真实 Android 交互的同时降低安装、运行和评测摩擦。它不是把移动控制简化成静态截图选择题，也不是封闭 agent demo，而是把任务、环境 wrapper、evaluator 逻辑和 baseline-agent 接入整理成可复现的官方仓库和项目发布。

数据对象是论文报告的 100-task、10-app suite 中的移动任务 episode：从配置好的 emulator/应用状态开始，向 agent 暴露观察，记录动作序列，并由任务特定的 success validator 结束评测。反馈契约偏环境式：只有当 validator 能从 emulator 中确认目标 app 状态或数据条件时才算通过，而不是模型文字描述正确动作就通过。

最接近的比较对象包括 AndroidWorld、AndroidEnv、Mobile-Bench、AppAgent 和其他 GUI-agent benchmark。方向标签是轻量可执行的移动 agent 评测。它最适合回答的问题不是“静态截图上该点哪里”，而是“agent 能否在一个可运行 Android harness 中完成端到端移动任务”。
