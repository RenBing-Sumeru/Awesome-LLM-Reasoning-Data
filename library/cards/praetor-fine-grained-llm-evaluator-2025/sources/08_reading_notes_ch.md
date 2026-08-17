1. **一句话定位：**把实例级自定义 criteria、双语和两类评价协议统一到一个生成式 judge。
2. **方法抓手：**分层指南组织数据，教师生成 critique 与判断，再以多任务 SFT 训练 Praetor-7B。
3. **数据抓手：**开放 Praetor_trainset，记录问题、回答、criteria、参考和评价输出；官方页未清晰披露总条数。
4. **证据锚点：**在多个 pointwise、pairwise 和双语 benchmark 上优于既有开源 evaluator。
5. **复用决定：**适合自定义 rubric 评测；最大风险是教师偏差，部署前必须做独立人工校准。
