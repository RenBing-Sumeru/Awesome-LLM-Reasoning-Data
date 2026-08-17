Video-MMMU 问的是大多模态模型能否从专业教育视频中获得可迁移知识，而不只是回答短视频识别题。最终会议来源是 ACL Anthology 2026.acl-long.1281，题名为 "Video-MMMU: Evaluating Knowledge Acquisition from Multidisciplinary Professional Videos"；arXiv 和项目页标题使用 "Multi-Discipline Professional Videos"。

这里的边界是视频知识获取评测面。基准包含 300 个专家级视频和 900 个人工标注问题，覆盖六个学科。问题分为三个认知阶段：Perception、Comprehension 和 Adaptation。Adaptation 尤其关键，因为它要求模型把视频中学到的知识应用到新问题，而不只是识别画面或语音中已经出现的信息。

可复用的数据对象是 video-question record：视频内容、学科/科目元数据、问题、选项或答案目标、阶段标签、标准答案，以及 transcript 或 audio 是否可用等评测设置。筛选价值来自它提供了结构化的多模态 learning-from-video 评测面，并用 performance-gain metric 比较模型在观看视频前后的行为变化。
