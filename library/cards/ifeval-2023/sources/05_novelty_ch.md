已有 instruction-following 评测常依赖人工评分、偏好比较或 LLM-as-judge。IFEval 把证据单位改成带有可执行 instruction 约束和 checker 参数的 prompt。

新意不在于“规则评测”本身，而在于把指令遵循中一批可程序检查的行为打包成可逐行审计的 benchmark。它给出的方向信号是：只有成功谓词可检查的任务，才适合被直接当作稳定反馈。

复用前应检查 instruction 列表、loose 归一化规则、prompt 污染风险、模型输出格式、许可证，以及下游论断是否需要 IFEval 无法覆盖的语义判断。
