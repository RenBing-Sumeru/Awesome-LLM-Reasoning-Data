Computer-use agent 与 screenshot-action loop 早于该模型。独特披露在于把 Gemini 2.5 Pro 专项化、公开的归一化 function-call 接口、客户端 actuation、整轨人类投票、部分 mobile environment pin 和独立逐动作 safety service 组合起来。

对数据研究而言，关键对象不是聊天 transcript，而是 transition tuple：goal、screenshot、history、action call、execution result、URL、next screenshot、safety decision 与 terminal outcome。报告也清楚表明，训练反馈、评测 judgment 和部署 gating 是不同契约。

同样重要的是哪些内容并不新或开放。报告没有提供训练 trajectory、reward、verifier、environment release 或可复现构造 recipe。Reference repository 是 inference harness，不是训练数据。安全复用需要 task manifest、demonstration、failure、reward/safety label、不可变 environment snapshot、split/overlap audit 与 checkpoint-to-API lineage。
