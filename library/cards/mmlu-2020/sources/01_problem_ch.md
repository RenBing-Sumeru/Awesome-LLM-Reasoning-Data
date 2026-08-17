MMLU 关注的问题是：语言模型能否在很宽的学科和职业考试题面上作答，而不是只在单一任务类型上表现好。主要来源是 Hendrycks 等人的 "Measuring Massive Multitask Language Understanding"，2020 年 9 月提交 arXiv，ICLR 2021 发表；官方仓库发布评测代码和测试包入口。

收录边界是 benchmark / evaluation surface。它不是训练配方，不是偏好数据，也不是带执行反馈的 verifier 轨迹。一个数据对象包含 57 个学科之一的文本题目、4 个选项、标准答案选项以及 subject/split 元数据；反馈契约是在固定 prompt 和评分 harness 下与答案键做 exact match。

它对 atlas 的价值在于给 broad academic reasoning 建立了一个长期复用的静态评测坐标，后续 MMLU-Pro、MMLU-Redux 等工作都把它作为要加固或审计的基础对象。
