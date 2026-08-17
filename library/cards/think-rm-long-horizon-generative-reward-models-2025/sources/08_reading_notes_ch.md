1. 一句话定位：论文针对“浅层GenRM难处理复杂偏好，pairwise输出也难直接用于传统RLHF”，用教师生成长程比较推理，并按原偏好标签与格式筛选生成过程反馈。
2. **方法抓手：** 流程为来源整理、数据生成、验证筛选和发布。
3. 数据抓手：hs2-naive-reasoning-binary-max包含约6.01K条长CoT偏好评审样本，核心记录为prompt、chosen/rejected回答、长评审轨迹与A/B结论。
4. 证据锚点：RM-Bench相对BT RM与浅层GenRM提升约8%，结论限于论文设置。
5. 复用决定：适合RM-Bench与pairwise RLHF；复用前必须检查教师偏差、数据规模小与长理由忠实性。
