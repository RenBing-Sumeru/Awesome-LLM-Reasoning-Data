主要贡献是把答案正确性和证据选择一起评分的大规模 QA benchmark。核心机制是让众包标注者围绕两个 Wikipedia 段落构造需要多跳连接的问题，同时保留答案字符串和支撑答案的句子。

反馈契约由 answer EM/F1、supporting-fact EM/F1 以及 joint 指标组成，只有答案和证据都对才算真正强。最近的对比对象是 SQuAD 式阅读理解和早期多跳 QA；HotpotQA 的方向标签是带证据锚点的多跳评测。
