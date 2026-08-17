核心贡献是一套两阶段配方:先把自纠正控制流转换为监督序列数据,再用基于规则的正确性优化所得策略。同一个语言模型被训练为生成解答、输出`[VERIFY] correct`或`[VERIFY] wrong`等生成式标签、在wrong标签后修订,并在correct标签后终止。

由于完整行为在base模型中很稀少,顺序拒绝采样按组件运行。收集器先采样初始解答,用ToRA/SymPy检查最终答案,再采样评估并保留与目标分支相容的评估。随后,它为初始错误样本请求修订,也会在误导性的wrong反馈下构造correct-to-correct修订。论文保留三种以正确答案结束的模式:初始错误/wrong标签/正确修订、初始正确/wrong反馈/正确修订,以及初始正确/correct标签/终止。horizon限制为两轮,每个base样本最多保留一条轨迹。

反馈契约是mixed。构造阶段由外部程序化答案检查器决定哪些组件存活;SFT阶段把选中的完整episode作为next-token监督;PPO阶段把终局答案正确性作为scalar reward;迭代M-DPO用正确性差异定义pairwise preference,若同一提示的采样轨迹正确性同分则跳过;推理阶段则由采样得到的`[VERIFY]`标签而非外部检查器控制是否继续。

Hugging Face上的31,990行发布是最终打包后的SFT示例,并不包含全部原始候选、verifier决策、PPO rollout或DPO pair。因此,benchmark准确率衡量的是该配方下的下游策略,不是发布数据逐记录质量的认证。
