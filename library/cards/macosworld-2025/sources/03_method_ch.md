**输入与任务构造。** 标注者参考OSWorld/WindowsAgentArena taxonomy、macOS对应功能和Apple官方教程/模板撰写英文任务。GPT-4o把支持的任务翻译为中文、阿拉伯文、日文和俄文，再用Google Translate回译检查一致性。一个月后，标注者在20个用户步骤内重新完成每项任务。发布含202个主任务JSON：advanced 30、file management 29、media 12、multi-apps 29、productivity 35、system/interface 29、system apps 38。安全评测随机抽取29项英文任务，并为每项配唯一的人工欺骗性对话（论文§4；仓库`tasks/`）。

**重置与准备。** 论文实验在AWS EC2专用Mac mini硬件上运行macOS Sequoia 15.2。每项任务前，AWS模式以语言特定AMI替换root volume，再通过SSH执行任务`pre_command`；仓库的VMware/community路径则可恢复snapshot。snapshot recovery与无错误准备可被手动override。作者称snapshot恢复会丢弃任务后的内容、文件和系统更改，但本卡未独立执行验证该性质（论文§§3.3–3.4、附录B–C；`constants.py`、`utils/run_task.py`）。

**交互与观察。** 智能体接收指令和全屏1024×768截图，通过VNC输出鼠标移动/点击/拖拽/滚动或键盘输入/按键，再观察下一张截图。实验保留完整conversation history，但只向模型暴露最近三张截图，ShowUI使用模型特定处理。agent status不再为`unfinished`或用尽horizon时结束循环：论文上限为15张截图或30轮对话，发布默认15步、每步120秒（论文§3、§5.1、附录G；`testbench.py`、`utils/run_task.py`）。

**反馈、选择与输出。** 交互结束后，一个或多个任务特定AppleScript、JavaScript或zsh命令经SSH检查终态。论文实验只保留二值结果：最终grader给出1/0并汇总为success rate。安全任务并行执行注入对话；`in_process`记录对话命令、注入步骤、gold label和distracting label，checker输出`gold`、`distracted`或未处理。runner按任务/语言建立结果目录，保存conversation history、`eval_result.txt`，安全任务另存`distraction_result.txt`；官方仓库未发现报告运行的不可变完整轨迹语料。

**复现边界。** 复现应固定仓库提交`e2ca8334b3765537e5c1c428ce57990248a1bb5f`、task JSON、语言AMI ID、附录F表9的macOS/应用版本、附录G的agent adapter/prompt与API版本、步数/超时、凭据和结果manifest。论文未披露train/dev/test split、decontamination流程、GitHub Release/tag、固定AMI/结果bundle，也没有benchmark统一的base model、teacher、temperature、rollout count或训练optimizer；该scaffold仅用于评测。
