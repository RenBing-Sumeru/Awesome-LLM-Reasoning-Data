核心贡献是一个大规模医学考试 QA benchmark，覆盖三种语言和多个考试来源。论文报告总量为 61,097 题，其中英文题 12,723 道，包含 USMLE 风格医学执照考试题。

核心机制是把医学考试选择题整理为可发布的训练/开发/测试资源，并用答案 key 的 accuracy 作为反馈契约。最接近的是通用 QA benchmark 和 PubMedQA 等医学 QA 数据；MedQA 把评测面推向医学执照考试推理。方向标签是医学领域 benchmark 数据；复用风险集中在具体子集、split 版本、license 和公开 benchmark 污染。
