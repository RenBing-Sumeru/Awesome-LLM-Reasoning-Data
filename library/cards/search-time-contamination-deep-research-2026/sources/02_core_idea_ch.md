分析把污染标签对齐到暴露证据的操作。Search 返回 URL 和 snippet；BML 用 regex 匹配数据 host、考试/问答网站、benchmark 名称和已知来源 URL。Visit 打开网页；QCL 计算问题与内容的 normalized longest common substring，并排除 EAL。EAL 由 DeepSeek V4 Pro 按严格 AND 规则判断：扩展的逐字问题文本与明确配对的正确答案必须同时存在。

问题级分析先分 BML/non-BML，再按 BML 内的 QCL/EAL 共现细分；这些组是 post-hoc、非随机的，并假设难度可比。turn-level 分析比较 STC 前后 prediction，把没有显式 prediction 的中间轮记错，以 time-varying Cox regression 建模到首次正确答案的时间，并用 Kaplan–Meier curve 研究 BML→QCL/EAL 升级。

唯一直接访问 ablation 是关闭 Tongyi 的 web search。其余部分观察自然发生的污染，并没有随机注入答案、屏蔽页面后重跑相同轨迹，或用污染 feedback 训练。isolated sandbox、透明轨迹和 private/dynamic/gated benchmark 是建议，不是已经实施的 intervention。
