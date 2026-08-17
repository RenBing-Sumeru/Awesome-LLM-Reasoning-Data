已有工作通常把 benchmark harness 当成固定可信的评分器，只比较 agent 表现。HarnessFix 改变了分析单位：harness 本身是可诊断、可修复的 artifact，失败轨迹是调试评测基础设施的证据。

质量信号在于闭环：轨迹证据、缺陷诊断、修复、再回到 benchmark 验证。不是新的部分包括 SWE-Bench、AppWorld、Terminal-Bench、GAIA 这些评测面，也包括 execution-based scoring 这个大方向。复用前要查 release 里的修复、license、第三方 benchmark 条款、hidden tests 和 runtime dependency 是否和自己的评测一致。
