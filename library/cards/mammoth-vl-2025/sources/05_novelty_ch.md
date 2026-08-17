# 新意

以往多模态 instruction 混合数据要么保留简短学术 QA，要么依赖昂贵人工标注，或调用专有教师生成丰富回答。MAmmoTH-VL 改变了构造决策：先分流 153 个来源，只对需要提升的类别进行开放模型改写，再在发布前加入视觉一致性 judge。它的方向信号是一个可公开下载、规模达 1200 万且 teacher/filter 角色足够明确可审计的 rationale 混合数据。Instruction tuning、CoT 改写、来源混合和 model-as-judge 过滤本身并不新。
