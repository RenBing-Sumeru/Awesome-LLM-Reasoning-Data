1. 输入：任务 prompt、初始模型回答或推理、domain label、来源 dataset，以及参考答案或 judging criterion。
2. 流程：先评估 generation，再要求模型 critique 该回答/推理，再要求 correction，并把修正输出同任务专属参考或评分规则比较。
3. 输出：generation 结果、critique 文本、corrected answer、domain/task 元数据和 GQC 指标。
4. 反馈：benchmark 标签、答案键、domain metric，以及论文披露的 model-judgment procedure 给分；不存在统一可执行 verifier。
5. 复现需固定 dataset 版本、prompt template、采样模型 responses、被评测模型版本、decoding 设置、scoring scripts，并区分 self-critique 与 inter-model critique。
