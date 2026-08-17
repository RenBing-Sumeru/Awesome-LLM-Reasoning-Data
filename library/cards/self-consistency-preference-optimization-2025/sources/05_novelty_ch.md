以往 self-consistency 用于聚合多次推理答案，而自训练方法使用 gold answer、外部 reward model、model-as-judge 分数，或把一致性选出的 target 用于监督 NLL。SCPO 把最终答案频次转换成 pairwise preference，以票差为每对样本加权，把加权 DPO 与 chosen-response NLL 结合，并在模型 iteration 间重复构造。它还用同一一致性信号过滤自生成问题。

其方向性信号是一条清晰的 rollout 数据到偏好数据转换：采样回答组变成带类置信权重和显式过滤阈值的 chosen/rejected 记录。这使采样数、答案 parser、聚类定义、票差和 iteration lineage 都成为必要审计字段。半监督变体也明确区分 gold-derived pair 与 proxy-derived pair。

self-consistency、DPO、NLL、迭代自训练和问题生成单独看都不是新概念。新意在于面向无训练答案推理任务的票数加权偏好构造。方法的总体增益和票数—正确性关联是聚合层面的质量信号，但不能证明每个偏好对正确，也不能证明未发布语料可复用。
