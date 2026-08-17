HalluGuard 是一个 4B 小型推理模型，用于判断主张是否得到给定文档支持，并生成基于证据的解释。其核心监督对象不只是 grounded 或 hallucinated 标签，而是包含分类结论、判断理由和文档证据的 chosen／rejected 推理回应。

作者开放英文数据集 `HalluGuard-Preferences-76k`，采用 Apache-2.0 许可，共包含 76,708 个合成偏好元组。每条记录包括任务指令、文档、待判断主张，以及 chosen 和 rejected 推理回应，主要用于通过 ORPO 训练文档级幻觉检测模型。
