对于 `rollout_search_test_time_trace_data`，DynScaling 给出了一套有用的批级推理轨迹 schema：查询与 benchmark 来源、模型与解码设置、每条初始回复、每个合成 thought segment 所用样本的索引与顺序、每条条件回复、解析答案、逐轮 variation ratio 与 UCB 得分、被选查询子集、累计样本与 token 预算、最终投票，以及与推理信号分离保存的 ground-truth 评估。此类记录可用于选择器比较、计算分配审计和重放研究。论文本身只支持 `test_time_compute`，不支持将用途扩大为 SFT、RLVR、reward-model 训练，也不证明未发布回复可以复用。Benchmark 准确率应保留为评估结果，不能反向充当中间轨迹的质量标签。

