核心贡献是把工具调用评测变成真实交互闭环：agent 必须对话、调用工具、遵守 policy，并把后端状态改到正确结果。tau-bench 用 airline 和 retail 两个领域实例化这个闭环，而不是只看孤立 API 参数是否正确。

数据面是一段客服 episode。agent 拿到 policy 和工具，模拟用户持有隐藏 instruction，环境提供有状态 Python 数据库工具。反馈契约检查最终数据库状态是否满足标注目标，并检查必要的自然语言输出。最接近的对比是 ToolBench 式 API benchmark、WebArena 式环境任务，以及后续 tau2/tau3 benchmark。方向标签是 stateful tool-user interaction with terminal reward。
