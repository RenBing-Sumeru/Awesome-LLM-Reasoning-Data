MobileAgentBench 回答的问题是：在真实 Android 应用里评测移动 LLM agent 时，如何让环境足够可运行、可扩展，并且不被沉重安装流程拖垮。主要一手来源是 2024-06-12 提交的 arXiv 预印本，以及作者维护的官方项目页和 GitHub 仓库。

它针对的工程缺口是：真实移动 agent benchmark 往往安装成本高、受应用版本漂移影响大，或绑定某个很重的 scaffold。这里收录它是因为它提供 mobile-agent environment 和 benchmark harness，不是因为它提供训练语料、reward model 或通用 GUI 截图库。

评测面是 Android emulator 任务：agent 接收自然语言指令，通过 UI 动作与应用交互，环境返回截图和/或结构化 UI 状态，任务 validator 判断目标状态是否达成。论文报告它定义了 100 个任务，覆盖 10 个开源应用；官方 README 列出的默认应用是 SimpleMobileTools 的 Calculator、Calendar、Contacts、FileManager、Gallery、AppLauncher、Messager、MusicPlayer、Notes 和 Recorder。对 atlas 的价值在于 instruction、mobile state、action trace、validator 之间的契约；主要审计风险在 emulator 配置、应用内数据、任务 validator 和版本漂移。
