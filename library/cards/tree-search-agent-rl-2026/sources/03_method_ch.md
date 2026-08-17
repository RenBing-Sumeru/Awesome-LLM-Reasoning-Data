训练提示来自论文报告的三种设置。单跳训练使用 79,168 对 Natural Questions，多跳训练使用 90,447 对 HotpotQA，web-agent 训练使用从 ASearcher-35K 抽取的 2,000 条记录加上 200 条 WebDancer 记录。评估覆盖 NQ、TriviaQA、PopQA、HotpotQA、2WikiMultiHopQA、Musique、Bamboogle、SimpleQA、103 条纯文本 GAIA 子集、WebWalkerQA 和 BrowseComp。仓库提供了预处理逻辑，但不可变来源版本、所选行 ID、ASearcher 抽样种子、文件哈希和官方 processed Parquet 均未发布。

轨迹由当前策略生成，没有独立 teacher 负责在线轨迹。实验覆盖 1.5B、3B、7B 和 14B 规模的 Qwen2.5 Base/Instruct 与 Llama3.2 Base/Instruct。公开的本地 QA 脚本默认使用 Qwen2.5-3B，web-agent 脚本默认使用 Qwen2.5-14B。每条轨迹依次包含带标签的 `think` 推理、`search` 动作、环境提供的 `information` 观察和终点 `answer`。

对于本地单跳和多跳 QA，`search` 动作查询基于 Wikipedia-2018 语料的 E5 retriever，并接收前三个 passage。web-agent QA 调用 Bing/web-search API，并接收前十个 passage。episode 在遇到结束 `answer` 标签、EOS 或达到动作预算时终止：本地 QA 最多三次工具调用，web-agent QA 最多五次。论文运行所用的 E5 索引/语料哈希、Bing 响应、cache、endpoint 版本和可重放环境快照均未发布。

树构造从 \(M\) 条独立生成的完整链开始。系统在每棵树中随机采样 \(N\) 个尚未产生答案的节点。每个选中节点把从根到该节点的完整轨迹作为固定前缀，策略从该状态继续，直至生成另一个完整答案叶子；这一过程重复 \(L\) 轮。随机扩展是方法的重要边界：分支点不是由 value、EM/F1、学习式 critic 或 judge 选择的。

默认 \(M=2,N=2,L=1\) 生成六个完成叶子，预期 token/工具预算约等于四条独立轨迹。论文研究约 2、4、8、16 的预期预算，并改变 \(M,N,L\) 来观察探索与复用的权衡。\(M\) 增加独立根的多样性；\(N\) 与 \(L\) 增加共享前缀复用以及局部比较的数量或深度。过小的 \(M\) 会让轨迹集中在少数根周围，串行增加 \(L\) 则提高依赖并降低效率。

随后 manager 从每棵树采样 \(K\) 个叶子。它剪掉未保留的叶子/子树，打包所选完整轨迹及 mask，赋予程序化终点结果，并把所选响应、`tree_uid` 与训练统计交给优化器。默认 \(K=3\)，因此每棵默认树的三个叶子都会保留。返回的运行时 payload 不含 `node_uid`、父子指针、分支点选择或完整拓扑；打包后 manager 会删除树。

本地 QA 叶子使用归一化 exact match，web-agent 叶子使用归一化 answer-token F1，结构不合法会受到 0.2 的格式惩罚。所选结果分别转换为树内归一化 advantage 与树间归一化 advantage；二者相加后广播到所选轨迹的策略 token，并进入 GRPO 目标。Tree-GRPO 基于 Search-R1 与 VeRL 实现，使用 AdamW、\(10^{-6}\) 学习率、0.001 的 K3 KL 系数，以及论文报告的本地 QA 180 步或 web-agent 34 步/两个 epoch。

公开脚本使用温度 1.0，但完整 top-p、top-k、随机种子和逐记录实际 token/工具成本未知。论文报告本地 QA 与 web-agent QA 的最大响应长度分别为 4,096 和 8,000；公开脚本的 `data.max_response_length` 却分别是 500 与 2,000。官方 artifact 没有解释脚本的单次生成限制如何映射到论文层面的上限，因此精确预算复现仍未解决。
