MacArena的核心贡献是一个在线macOS benchmark：每条instruction都绑定到可重置UTM VM、原始GUI action接口和task-specific final-state evaluator。两套VM通过Apple Silicon上的Apple原生Virtualization framework运行：`MacArena.utm`支持49项自定义任务，`osworld.utm`支持继承的OSWorld与macOSWorld任务。官方VM bundle包含9个文件，总计**121,038,630,504 bytes（约121 GB）**。

每一步智能体接收全桌面screenshot；环境可选暴露macOS accessibility tree与terminal output。action包括鼠标move/click/right-click/double-click/drag/scroll/down/up、键盘typing/press/down/up/hotkey，以及终端`WAIT`、`FAIL`或`DONE`。智能体发出`DONE`或`FAIL`，或达到15步horizon时终止。该声明本身不代表成功；runner随后针对最终VM状态调用task evaluator。

反馈契约是environmental与programmatic的。OSWorld-style任务组合result getter与metric；macOSWorld-style和MacArena-specific任务在VM内运行shell、Python或AppleScript命令。evaluator返回`[0,1]`区间的scalar。runtime `env.step`返回reward 0，因此不存在step-level reward或process supervision；反馈在终止后附着于完整episode。

相对作为源任务集合的OSWorld和macOSWorld，具体变化是把它们放入共同的Apple-Silicon UTM substrate中执行，并加入49项macOS-native任务、统一action/controller layer、本地trajectory recording与final-state grader。环境能观察脚本定义的终态属性，却无法在evaluator错误时保证语义任务正确性。公开Contacts任务`450f6f33-bf2c-43bf-a349-4363e9b75740`的evaluator检查无关的Session/YouTube blocker状态，直接展示了这一边界。
