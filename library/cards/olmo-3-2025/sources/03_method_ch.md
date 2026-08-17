在基础训练部分，报告列出了 9.31T-token 的 Dolma 3 数据池和 5.93T-token 的最终预训练混合数据。最终混合数据包含 Common Crawl 网页文本、olmOCRscience PDF、Stack-Edu 代码、arXiv LaTeX 论文、FineMath 以及 Wikipedia/Wikibooks；随后继续使用 99.95B-token 的 Dolmino midtraining 混合数据，并分别为 7B 和 32B 执行 50B-token 与 100B-token 的长上下文扩展。官方预训练集合公开了数据池和混合数据，Dolma 3 仓库说明了重建代码。

基础数据管线包括 HTML/OCR 抽取、语言与启发式过滤、主题/质量分类、PDF 的 PII 过滤、全局 exact/MinHash/suffix-array 去重、质量感知上采样，以及代理模型混合实验。Midtraining 有意加入合成数学、代码、问答、指令和 thinking trace 数据源，并用 microanneal 和更大规模 integration test 评估候选数据。Midtraining 与长上下文数据使用 AI2 decon 对评测集执行去污。

对于 Think 和 Instruct，AI2 发布了 SFT、DPO、RL 数据集及阶段模型。Think SFT 包含生成 trace 和过滤后的 completion；DPO 构造对比对，在一条已披露的配方中使用 Qwen 3 32B 的 chosen completion 与 Qwen 3 0.6B 的 rejected completion。RLVR 按领域使用不同信号：数学使用经 SymPy 规范化的参考答案比较，代码使用测试用例，精确指令遵循使用约束函数，聊天使用 Qwen3 32B LLM judge 分数。Think 7B 的离线难度过滤对每个 prompt 生成八个 rollout，最终 RL 的 group size 也是八。工具使用数据包含真实 MCP 交互和模拟轨迹，并有事后合规过滤。

官方 OLMo-core v2.4.0 release 列出了 7B/32B 的官方预训练、midtraining、长上下文脚本与数据混合，以及 model card 和 checkpoint manifest。它证明相关工件已发布，但不是对每一轮训练的独立复现。
