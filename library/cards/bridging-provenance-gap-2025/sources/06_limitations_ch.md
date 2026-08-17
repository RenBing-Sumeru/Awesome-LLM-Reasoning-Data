该审计停留在 dataset level。collection 或 dataset 标签可能掩盖来自不同创建者、平台、许可证、同意机制与转换方式的记录；`Derived from` 可以提示复用关系，却不能说明哪些样本重叠、每条记录适用何种 license、或 benchmark 样本是否进入训练。因此它不能替代逐记录 lineage 与 contamination check。

人工判断可靠性披露不足。论文描述了 domain expert、legal analysis、完整 source tracing，也在部分 schema 中设置 `License Verified By`，但没有报告逐字段覆盖、reviewer 分配、培训材料、分歧处理或 inter-annotator agreement。公开文档本身可能缺失、过期、矛盾或后来变更，发布物也没有为每个标签保存完整的带时间证据快照。

法律 taxonomy 有意简化。Commercial/NC/Unspecified 与 Model Closed/Source Closed/Unspecified/Unrestricted 把许可证、平台合同、模型输出条款和司法辖区问题压缩成比较类别。最严格来源聚合较为保守，但既不解决多项义务之间的兼容性，也不构成法律意见或 clearance。

覆盖范围经过选择，并非穷举。热度、公开可见性、任务 tag、survey、引用/下载阈值、workshop 清单和专家补充都会偏向显眼生态；private/proprietary training data 不在其中。文本、语音、视频还采用不同纳入规则、schema、版本处理和规模单位，因此跨模态总数不能理解成统一随机样本。

表示指标有操作性限制。“creator organization”是发布 ML 数据集时关联的 affiliation，不是上游内容所有者或个人贡献者。总部映射、多机构重复计数、部分身份、缺失的使用频率与不可见 proprietary data 都会限制地域和 Gini 结论。数据集数量更高也不等于内容、劳动或同意得到了更充分代表。

版本没有在论文时点冻结。录用 PDF 内部同时写有 3,717 与 3,713 个文本数据集。仓库唯一 release v1.1.0 早于论文；当前 main 增加了后续多模态文件，而 README 仍描述旧的 44-collection 文本审计并引用 2023 论文。检查树中有 110 个文本 JSON（含 template）、95 个语音 JSON 和 105 个视频 JSON，但文件数不能直接等同于论文数据集数。

许可证必须分层。Apache-2.0 只覆盖 repository material，不覆盖底层数据、来源作品、模型输出或平台访问。官方 Hugging Face 组织包含多个筛选或归一化 artifact，但未发现一个单独仓库代表完整 2025 多模态审计。即使复用筛选后的数据，也仍需检查所有上游 license、term、隐私义务和访问条件。
