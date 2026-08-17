正确性只是在已发布多选题表述下的答案键正确。模型可能猜中选项、利用格式痕迹，或没有给出可靠推理但仍得分；反过来，合理的自由文本解答也可能因 parser 失败而被判错。

数据集公开且是 composite。官方 README 说明 SuperGPQA 主要由新建数据组成，但也包含少量从其他数据集转化的内容；组合数据集按 ODC-BY 发布，同时要求遵守被引用数据集各自 license。这让再分发、训练使用和污染声明都比单一许可 benchmark 更复杂。

覆盖面很广但不均衡。STEM 题量占主导，论文也指出非 STEM 表示较少。评测比较还受 prompt robustness、默认 prompt、zero-shot 与 five-shot 设置、模型访问、API 变化和公开 response records 影响。
