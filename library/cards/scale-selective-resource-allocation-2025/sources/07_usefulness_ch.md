**复用等级：在来源审计完成前，仅限条件性 SFT/评测研究复用。** 官方 schema 可用于教授分解及难度感知的回答风格，前提是每条复用行保留其 source file、threshold、model identity、答案匹配状态和上游 license 审查结果。

对本赛道，应为每条记录补充全部八个 outlines、selection prompt/output、route decision、逐步骤及总 tokens、endpoint/revision、seed、failures 和 normalizer result；随后在匹配 accounting 下比较同模型 fixed-budget control、uniform route control 和 threshold variants。

也可作审计：衡量分数是否预测后续答案正确性，System 2 是否真正投向难步骤，以及答案过滤是否改变分布。不可把 Table 1 或 Table 3 的增益视为公开行普遍是高质量训练数据的证据。
