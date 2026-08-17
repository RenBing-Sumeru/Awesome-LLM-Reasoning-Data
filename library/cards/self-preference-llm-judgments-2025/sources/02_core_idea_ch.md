DBG 以模型自己对某回答的偏好减去 gold judge 对同一回答的偏好，估计自偏好。gold judgments 聚合 GPT-4o-mini、Gemini-1.5-Flash 和 DeepSeek-V3。评测对象是一条提示、两份模型回答及成对判决；聚合 gold 是反馈参照。官方仓库公开代码和数据。

它报告的是残余偏见信号，而非把原始自胜率直接等同于偏见。
因而该分数的解释依赖 gold panel 的质量。
