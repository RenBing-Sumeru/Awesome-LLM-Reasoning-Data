核心贡献是一套从失败轨迹诊断并修复 benchmark harness flaw 的流程。它把轨迹规范化成 HTIR 这种树状中间表示，显式表示 task、environment、action、observation、evaluator 和 failure，再把定位到的问题映射到修复算子。

和只给成功率的 leaderboard 不同，HarnessFix 检查的是评测系统本身。它的反馈契约不是“模型说这里有问题”，而是修复必须回到相应 benchmark 的环境或 evaluator 中验证。最接近的比较对象是 SWE-Bench、AppWorld、Terminal-Bench、GAIA 等 agent benchmark；新意在于对这些 benchmark 的 harness 层做缺陷审计。
