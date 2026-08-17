输入包括手机 GUI 任务场景、app 界面、人工构建的 TDG、用户 persona 和偏好分布。论文报告覆盖 10 个日常场景、22 个常用移动 app、100 个 user persona，并生成 12,855 条 personalized instructions。

流程：
1. 为每类任务构造 TDG，区分 fixed unit instruction 和 flexible preference-sensitive node。
2. 把 TDG 转成模板：fixed node 保留流程骨架，flexible node 变成有类型的 slot。
3. 使用用户画像、长期偏好权重和短期偏好权重填充 slot，并控制任务 complexity 与 clarity。
4. 让 GUI agents 在智能手机环境中执行任务，收集截图和 action logs。
5. 用基于 checklist 的 LLM evaluator 将 trace 对齐到 TDG，选择最佳 path，计算 APR/PPR/CT/CPT 及长期 delta。

输出包括个性化指令、TDG/checklist、执行轨迹和指标值。judge 是混合的：环境执行给出 trace，LLM 把 action 映射到 TDG unit instruction，人类验证对齐质量。复现必须固定 app 版本、Android/runtime、TDG/checklist 版本、prompt/evaluator model、temperature、task split 和 artifact release。
