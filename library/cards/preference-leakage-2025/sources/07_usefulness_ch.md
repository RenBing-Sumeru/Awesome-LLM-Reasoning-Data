若要为合成偏好数据训练的模型选择 judge，应盘点生成器、学生与 judge 谱系，评测关联和非关联的匹配条件，再将 preference leakage score 与主 benchmark 分数一并报告。输出是区分真实改进与谱系偏袒的审计报告。无模型来源或无受控对照时不适用；成功标准是换非关联 judge 后结论仍稳定，而非仅有高 judge 分数。
