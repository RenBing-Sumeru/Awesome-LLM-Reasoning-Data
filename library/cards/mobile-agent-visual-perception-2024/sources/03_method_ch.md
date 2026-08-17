1. 输入：自然语言手机任务、当前手机截图、可选历史、OCR 文本框、检测到的图标，以及允许的移动端操作集合。
2. 流程：分解任务；观察截图；定位文本/图标候选；选择下一步操作，如点击、输入、滚动、打开 app 或返回；在设备上执行；更新历史；在任务完成或运行失败时停止。
3. 输出：操作轨迹、截图或观察、任务级成功标签、进度和效率分数，以及 Mobile-Eval 汇总指标。
4. 反馈：Mobile-Eval 给出 success rate、progress score、relative efficiency 和 completion-rate 类结果；反馈是环境/任务级，不是稠密学习 reward。
5. 复现边界：要固定 app 版本、手机/ADB 环境、OCR 和 detector 版本、GPT-4V 模型日期、prompt 策略、任务 split、timeout/step budget，以及是否用人工检查判断完成。
