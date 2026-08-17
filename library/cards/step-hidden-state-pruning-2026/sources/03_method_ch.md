方法提取 think 标签之间的文本，在双换行边界处分割步骤，并把每个步骤末端隐藏状态送入评分器。轨迹级正确性被传播给其所有步骤作为伪标签；使用平衡的正确与错误轨迹，并以加权二元交叉熵补偿错误轨迹更长的问题。轨迹分数是已观察步骤分数的平均，因此无需额外模型调用即可更新。

并行生成期间，KV 缓存监视器检测内存饱和。随后 STEP 剪去得分最低的活跃轨迹，而非让推理引擎把它抢占到等待队列。论文在 AIME-25、HMMT-24/25、GPQA Diamond、EquiBench 和 DivLogicEval 上评测 Qwen3-4B-Thinking、DeepSeek-R1-0528-Qwen3-8B 与 Phi-4-reasoning-plus，并与自一致性、Slim-SC、DeepConf 比较。
