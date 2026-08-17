通用奖励模型可能偏爱流畅完整的回答，却忽略它是否引用给定证据、正确整合多跳信息或处理文档冲突；因此在普通偏好基准上的高排名，不能保证它能为 RAG 系统选择真正有依据的响应。

RAG-RewardBench 固定检索上下文，构造引用、多跳和冲突处理的 chosen/rejected 对，专门评测 evidence-aware RAG judge。
