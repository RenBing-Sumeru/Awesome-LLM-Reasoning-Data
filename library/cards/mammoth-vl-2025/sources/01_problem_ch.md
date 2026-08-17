# 问题

开放多模态 instruction 混合数据规模很大，却常直接继承学术 VQA 数据的短语级答案，无法为数学、图表、OCR 和领域分析等任务提供充分的中间 rationale。人工改写难以扩展到百万级记录，专有教师又会增加成本和复用不确定性。

MAmmoTH-VL 人工筛查 153 个公开来源，用开放的 70B/76B 文本与多模态模型改写可提升记录，再由模型 judge 过滤图像—问题—答案一致性，并公开 1200 万条带 rationale 的 instruction-response 记录用于分阶段多模态 SFT。

**L4 facts：**主要来源：arXiv:2412.05237；venue/date：ACL 2025 Main，官方 Anthology 记录 2025.acl-long.680；判定边界：Track 01 对象是公开的带 rationale instruction 记录，而不是训练后的 8B 模型；atlas 对象/评测：图像/视频 + instruction + 详细回答 + 过滤判定，在 23 个 benchmark 上评测；收录说明：`L4_carded`，仅一个 Track 01 分类。
