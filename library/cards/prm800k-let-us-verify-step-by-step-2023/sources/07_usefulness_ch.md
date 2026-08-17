# 07 用途

PRM800K 适合作为 step-level reasoning supervision 的参考 schema。复用记录应保留题目、学科/source split、ground truth、生成步骤、每步候选 completion、人类 rating、flag、chosen continuation、最终答案、答案 grader 结果、PRM score、生成器来源和数据 split。

对 atlas 来说，它最有用的是把 process feedback 和 outcome feedback 分开。它可以指导 reward-model 训练数据、verifier evaluation、标注界面设计，以及 chain-of-thought 数据审计。操作上必须把 human step label、final-answer correctness、PRM score 和 best-of-N selection outcome 分成不同字段。
