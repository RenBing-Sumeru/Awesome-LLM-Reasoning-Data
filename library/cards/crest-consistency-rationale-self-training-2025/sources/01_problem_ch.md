本卡的一手来源是官方 [NAACL 2025 论文页](https://aclanthology.org/2025.naacl-long.528/)、21 页正式论文、arXiv v4,以及作者的 [CREST 仓库](https://github.com/JaehyeokLee-119/CREST)。ACL Anthology 将其收录为 2025 Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics: Human Language Technologies 长文,页码 10519-10539,DOI 为 10.18653/v1/2025.naacl-long.528。

只看答案的自训练,会把任何能够导向标签选项的 rationale 都视为适合监督的数据。这个边界较弱:模型可能通过不完整、相互矛盾或忽视其他选项的推理得到正确的选择题答案。CREST 提出一个更窄的操作性问题:给定一条生成 rationale 后,同一个模型能否进一步正确判断原题每个选项是有效还是无效;这种行为一致性能否让 SFT 过滤与偏好构造更有选择性。

构造面来自三个英文选择题数据集的 train split:ReClor 4,638 题、ARC 3,370 题、CommonsenseQA 8,520 题。对每道题和每个 base checkpoint,CREST 采样 16 条 rationale,为每条 rationale 预测原题答案,并且只对原题预测正确的候选执行选项级探针。下游对象是经容忍度过滤的 SFT 三元组和题内 DPO 偏好对;它们在运行时生成,但没有公开发布。

该工作属于 `data_construction_open_release_recipes`，因为它公开了从提示来源、trace 生成、标签派生反馈到过滤与偏好对构造的代码路径。双语 Card 已达到 `L4_chinese_review_ready`，但发布状态仍为 `partial`：正式论文和实现均已核验，仓库中的数据却是准备后的上游 QA 记录，不是生成后的 CREST rationale、分数、选择决策、偏好对或 checkpoint。
