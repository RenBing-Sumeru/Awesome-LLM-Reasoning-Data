已有 API benchmark 常用函数调用匹配、参考轨迹或自然语言 judge。Agent-Diff 的实际变化是把 oracle 放在持久化环境状态：通过 state-diff contract 指定“世界应变成什么样”，而非“模型应调用哪些函数”。这保留了真实 API 接口和多路径自由度，同时仍可确定性自动判分；新意在沙箱与 assertion DSL，不是新的 agent 推理算法。
