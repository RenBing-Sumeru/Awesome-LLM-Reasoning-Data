该资源可训练可解释深伪检测器、视觉 rationale judge、点式 reward model 和 pairwise multimodal critic，也可用于比较“分类正确但理由错误”的模型。训练时应按基础图像 `base_id` 划分，避免同一图像的改写理由进入训练与测试两侧；还应分别报告检测准确率、视觉 grounding、点式相关性和成对一致率。若迁移到一般视觉判断，可保留其数据结构，但需替换领域线索和人工 gold 子集。

