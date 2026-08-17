MMBench-GUI 可作为 GUI-agent 评测 schema：平台、层级、任务指令、截图/状态、目标元素、动作空间、observation stream、evaluator、timeout、成功标记、效率分数和轨迹来源。它能帮助区分感知失败、动作规划失败和环境执行失败。

用于后训练数据时，只有在记录环境版本和 evaluator 契约的情况下，逐步 observation/action 才可复用。静态截图可支持 grounding 数据；交互 episode 必须有 runtime metadata。
