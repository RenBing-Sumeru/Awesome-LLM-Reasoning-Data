1. **选择任务：**同时纳入开放生成和具有可验证答案的视觉推理，避免 benchmark 只测试主观偏好。
2. **生成回答对：**从不同 LMM 收集质量接近、错误类型不同的候选，筛选能在多个维度产生分歧的困难样本。
3. **人工多标：**标注者按视觉 grounding、正确性、表达等 criteria 分别判断偏好，并记录总体偏好与维度冲突。
4. **构造测试：**对同一回答对切换或组合 criteria，形成 pluralistic、switching 和 conflict 评测条件。
5. **计算指标：**比较 judge 的 criterion-level 判断与人工标签，并分析 reasoning tuning、test-time scaling 和模型类型；官方 HF 页面发布数据。
