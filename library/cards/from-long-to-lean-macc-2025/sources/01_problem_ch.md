长到短推理数据面临一个普通答案筛选无法解决的问题：怎样缩短长 rationale 而不丢失得出答案所需的信息，又应选择哪一轮修订作为训练目标？固定压缩轮数对所有轨迹一视同仁；最终答案正确性检查可以拒绝错误终点，却不能说明应保留多少中间推理。MACC 把压缩表示为一条连续改写 rationale 的顺序路径，并自适应选择停止点。

对每个数学任务 \(x\)，论文形式化的数据对象从目标模型 \(S\) 生成的原始 Chain-of-Thought \(r_0\) 开始。API compressor 每轮改写前一轮 rationale，依次得到 \(r_1,\ldots,r_T\)。关键是，每次压缩请求都包含问题、先前 thought process 和最终答案；因此这些修订是答案条件化 artifact，而不是 answer-blind inference trace。selector 只比较 tokenized length。若 \(r_i\) 严格长于 \(r_{i-1}\)，算法 1 停止并保留 \(r_{i-1}\)；长度相等不会触发已发布伪代码的停止。

预期训练对象是选中的完整压缩 rationale \(r^*\) 与最终答案。选中压缩轨迹和一部分比例未披露的原始轨迹用于 supervised fine-tuning，并以 `&lt;compress&gt;` 标记简洁生成样本。证据支持的训练用途**只有 SFT**。论文没有提供偏好学习、奖励模型训练、过程监督、RLVR 或 knowledge-distillation objective 的证据。

MACC 属于 **Rollout, Search, and Test-Time Trace Data**，因为一个原始 rationale 会变成顺序修订路径，轮次预算与 tokenization 影响选择，路径终止时还有一个回弹候选被拒绝。可复用记录应包含原始轨迹、每轮修订、父轮/轮次索引、最终答案暴露、token 数、停止决定、选中轮次和最终 SFT 文本。这些记录级链条均未发布。

官方仓库的发布边界尤其重要。在已检查 commit `2046df78636495de86e9c015820295b16f1f63fd` 上，当前 tree 只有 `README.md`；完整历史中没有可运行实现、requirements 文件、配置、独立 prompt 文件、生成语料、模型 artifact、评估 harness 或 license 正文。本 Card 可以在 L4 记录已核验的论文配方，但不能把该仓库当成代码可用，也不能把论文汇总表格当作公开数据集。
