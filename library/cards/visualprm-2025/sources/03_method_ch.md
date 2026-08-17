图像与问题来自 MMPR v1.1。论文展示了通用 VQA、科学、图表、数学、OCR 和文档等领域的样例，但没有给出论文快照对应的混合比例表。InternVL2.5 系列模型为每个图问对采样四个独立的分步解答；具体 checkpoint 规模、不同来源的分配、输入指令、随机种子和构造温度均为 unknown。

每个解答按步骤边界切分。如果超过 12 步，就均匀合并相邻内容，直到最多保留 12 个单元。对每个保留前缀，生成器采样 16 条 continuation；终局 checker 把每条抽取出的最终答案与来源答案比较，mc_i 为通过比例。论文规定 mc_i > 0 时标正，mc_i = 0 时标负，并监督所有已存步骤，而不是在第一处负例后截断样本。

该配方得到约 40 万个解答样本和约 200 万个受监督步骤。每个回答平均 126.9 个词、5.6 步，每步平均 22.6 个词，约 10% 的步骤为负例。这些是论文级聚合统计，不是按来源或 generator 发布的 manifest。原始公开数据把 mc_i 转换为 `+/-` conversation 目标，归档中没有暴露产生每个标签的 16 条 continuation 文本、parser 输出或随机种子。

论文没有说明每个 MMPR 来源在论文运行时使用的终局 checker。后续官方 InternVL 代码按数据集名称选择匹配逻辑，并组合精确匹配、VQA、多项选择、数值、LaTeX 和 Math-Verify 风格检查。该代码证明了一个可用的自动验证器族，也暴露了 4/16/12 默认参数，但它发布于论文之后，当前脚本还覆盖后来的 InternVL3/v1.1 构造，因此不能视为原始运行的不可变规格。

VisualPRM 作为多轮生成式分类器训练。流程使用 data packing，训练一轮；AdamW 的 beta1 为 0.9、beta2 为 0.999、weight decay 为 0.05，初始学习率 1e-5，前 5% step 线性 warmup，随后 cosine decay 到 0。评分时，把离散质量 token 的概率转换为每步标量，再对整段回答取均值。

VisualProcessBench 独立构造。它包含来自 MMMU、MathVision、MathVerse Vision-Only、DynaMath 和 WeMath 的 2,866 个问题，以及模型生成的解答和 26,950 个人工步骤标签：16,585 个正例、7,691 个负例、2,674 个 neutral。13 名至少具有大学学历的标注员工作三天；作者把数据划成十个约 300 样本的 split，每个 split 抽查约 10%，有错误的 split 退回重标。公开 test 行包含 image path、question、answer、response steps、process_correctness、policy_model 和 data_source。

测试时选择阶段，policy model 以温度 0.7 生成不同推理候选。论文默认 N=8，并消融到 N=128；VisualPRM 选择平均步骤分最高的回答。候选集合、逐步分数、并列处理和被拒回答均未包含在论文发布资产中。
