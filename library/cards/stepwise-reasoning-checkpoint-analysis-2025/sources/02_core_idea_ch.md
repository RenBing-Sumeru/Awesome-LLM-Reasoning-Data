SRCA 把中间前缀变成答案探针，同时不永久改变继续生成的链条。在检测到如 `### Step` 的分隔符时，它保存生成状态，追加固定 cue `So, the answer is `，记录即时答案，再恢复原位置和 KV cache。这是 Checkpoint Injection；该答案是以此前缀为条件的模型预测，不是外部正确性标签。（论文 §3.1。）

Answer-Clustered Search（ACS）把该探针当作多样性键。每一步它采样 N 条路径，用 PRM 得到每条路径的分数，将 checkpoint 答案相等的路径分组，在每组内求分数和，再从高分组中轮转选择最佳路径，直至保留 M 条 beam。Checkpoint Candidate Augmentation（CCA）对同一探针作另一种使用：把前缀、cue 和 checkpoint 答案串接成完整候选，与自然完成路径一起打分，返回 PRM 分数最高者。（论文 §3.2–§3.3；算法 1。）

反馈契约是混合的。PRM 分数引导路径存活和最终选择；benchmark 答案只在运行后决定报告的 accuracy。PRM 在搜索中看不到 gold answer，checkpoint 答案也不是经过验证的证明步骤或普遍校准的 reward。最接近的比较对象是 PRM 引导的 beam search、DVTS、Best-of-N 和 weighted Best-of-N。SRCA 把分组键从路径/tree 结构或最终答案频率变为各中间前缀预测的答案，并让该预测进入最终候选池。
