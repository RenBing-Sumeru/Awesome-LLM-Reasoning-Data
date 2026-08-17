正确性只相对于已标注记录、答案类型、参考答案或标准解、prompt 格式和所选评分路径成立。OCR 和 markdown 转换可能引入语义或格式错误；图片 URL 可能失效；公开奥赛题即使做过泄漏检测，也仍可能已经出现在预训练语料中。

反馈契约是异质的。rule-based matching 对封闭形式和精确结构更强；CS 测试用例只检查 benchmark 使用的公开或隐藏 tests；GPT-4V model-based evaluation 是 judge，不是严格 verifier；过程级分数来自抽样，并且先经过模型辅助步骤重排。

答案不公开的官方 test split 有利于榜单完整性，但限制了独立本地审计。不能把 validation 分数当正式 test 分数，不能把抽样过程级发现当全量证明，也不能把答案正确直接解释成推理过程忠实。
