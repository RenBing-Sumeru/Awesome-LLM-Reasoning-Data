一句话贡献是：WebExplorer 让 LLM 从 seed 出发探索网页，再把问题从长到短地演化为更困难的搜索 QA，并将这些 QA 连接到完整正确轨迹的 SFT 与在线 GRPO，以训练 8B 网页智能体。

在构造阶段，一个身份未披露的 LLM 接收 Wikipedia seed 和 3 条 BrowseComp-en exemplar，通过 search 与 browse 建立内部信息空间并写出初始 QA。随后进行 5 轮演化：删除冗余线索，将日期、地点或名称替换为模糊描述，或搜索替代表述，同时保持 exact answer 不变。此时的数据对象是带答案的任务，还不是训练轨迹（论文 §§2.2–2.4；附录 B）。

后续轨迹监督有两个契约。SFT 对一条完整且正确的 ReAct episode 做 token-level imitation，episode 包含 thought、结构化 search/browse 调用、tool response 和最终回答。RL 则给在线 episode 附加标量奖励：`R = 0.2 * R_format + R_correct`；前者检查协议结构，后者由 DeepSeek-V3 对照 reference answer 判断最终回答。judge 能看到最终回答和 ground truth，但论文没有证明它逐一检查网页引用、中间推理、证据充分性或轨迹忠实性，也没有可执行的环境 terminal predicate。

论文中的最近基线主要采用显式图扩展，或通过注入信息进行 short-to-long evolution。WebExplorer 的具体变化，是让模型隐式构造信息空间，再通过删除和模糊线索提高问题难度。ReAct、search/browse 工具、SFT、GRPO、rejection sampling 与 LLM-as-judge 都是复用组件，并非本文首创。相对 WebDancer、WebSailor、WebShaper 和 Explorer，这项工作的方向信号在于把问题难度构造与长程智能体 post-training 连接起来，而不只是“包含网页轨迹”。

发布边界会改变对贡献的解释：100 条 QA 与模型/推理 artifact 可支持任务检查和有限评测，但没有公开论文中的约 13K 条 SFT 轨迹、约 12K 条 RL 集合、逐 rollout 奖励或构造历史。因此，公开对象不能直接复现任一监督契约。
