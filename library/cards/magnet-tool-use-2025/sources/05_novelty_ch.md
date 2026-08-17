已有工具使用数据工作可以从 API 生成 query、随机采样工具，或直接蒸馏强模型。MAGNET 并不声称 tool、function call、SFT 或偏好优化是新事物。其最接近的对照包括 APIGen、ToolAce、Hammer 和直接 teacher trajectory 蒸馏。（论文 §2；§4.4）

具体改变是将多轮依赖路径作为中间构造对象。local dependency graph 与 Merge/Insert/Split 在生成 query 之前针对不同多轮失败类别。随后，reference call 与输出成为正轨迹的隐藏 context hint；teacher judge 选中的 SFT-model error 则成为负轨迹的刻意误导 hint。这将新的数据接口置于可执行调用参考与行为轨迹之间，而不是把工具调用答案当作单一扁平标签。

质量信号是有条件的：Table 4 在一种训练设置中分离组件，附录 C 给出有限的 FSP overlap 统计。尚未建立的是发布级轨迹质量、真实失败覆盖、verifier 校准、可迁移的 API 依赖提取，以及超出英语纯文本 signature 的泛化。复用前应与记录真实 API 版本和逐轮执行结果的环境对照。
