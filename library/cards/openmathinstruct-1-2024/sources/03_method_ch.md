1. **准备 prompt。** 为 GSM8K 与 MATH 各写五样本 prompt，示范混合文字、Python 与 SymPy；MATH 另建七个学科 prompt，覆盖难度 1-5。
2. **掩盖参考计算。** 把来源参考解中的中间和最终计算结果替换成符号，保留推导轮廓却不暴露可复制答案，并把该掩码解放入第二类 prompt。
3. **采样代码解释器轨迹。** 以 temperature 1.0、top_p 0.95 让 Mixtral-8x7B-base 每题生成数百个候选；总 I/O 限制为 4,096 token，每个代码块后最多 512 token，全程最多三个代码块，执行 Python，遇到错误或十秒超时即停止。
4. **评分并清洗。** 抽取 boxed answer 与 GSM8K/MATH 真值比较，合并默认、学科和掩码生成后去重；删除多个答案块、代码分隔符不匹配的记录，并裁掉答案后的文本，失败样本单独发布。
5. **选择平衡训练集。** 按问题 round-robin 公平采样，避免拥有大量正确候选的简单题主导数据；对 MATH 优先保留带代码解，形成约 1.02M 条最终 SFT 混合。
6. **训练并评测。** 用 NeMo 微调 Mistral、CodeLlama 与 Llama-2，并在 GSM8K、MATH、GSM-Hard、SVAMP、TabMWP、ASDiv 和 MAWPS 上评测 greedy 与 self-consistency decoding。

复现应固定来源 revision、掩码参考、few-shot 示例、Mixtral checkpoint、TensorRT-LLM/Python 镜像、生成种子、grader、去重方式和逐题采样顺序。
