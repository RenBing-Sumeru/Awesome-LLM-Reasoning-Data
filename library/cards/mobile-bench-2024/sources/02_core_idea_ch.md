核心贡献是一套 API/UI 混合的移动智能体 benchmark，并用过程级 CheckPoint 评测应用选择和执行路径，而不只看最终回答是否自称完成。它相对 UI-only 流程的变化是：每一步动作可以是 click、scroll、input，也可以是通过 ADB 风格接口触发 API；任务从手机 HOME 页面开始，迫使 agent 决定使用单个或多个应用。

数据对象是覆盖 29 个应用、103 个可用 API 的移动任务，分成 SAST、SAMT、MAMT 三类。论文报告总计 832 条数据：332 条 single-app single-task，300 条 single-app multi-task，200 条 multi-app multi-task。SAST 来自真实语音助手请求的筛选子集，复杂的 SAMT/MAMT 用 GPT-4 扩增后人工复核。

反馈契约是它的方向信号：CheckPoint-l1 检查动作历史中是否出现正确 package；CheckPoint-l2 进一步检查 package、key phrase、API command。PassRate 是另一条 GPT-4 终态完成判断。最接近的参照包括 AndroidEnv、Mobile-Env、WebShop、ToolLLM/API 评测和 Android in the Wild；Mobile-Bench 的新意在于把真实应用、真实或扩增 query、多应用任务和 API/UI 混合执行放进同一个评测面。
