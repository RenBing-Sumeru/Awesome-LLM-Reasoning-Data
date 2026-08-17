提示来源是NuminaMath-CoT。论文把50K子集用于self-rewarding IFT,把10K提示用于验证和模型选择,其余提示用于RL。官方`self_rewarding_sft_prompt`仓库目前公开40K行,`self_rewarding_rl_prompt`则是另一个经过处理的NuminaMath-CoT发布。公开材料没有清单标识论文所用精确分区、来源记录版本、重复项或与评估集重叠后移除的记录。

在主要Qwen构造中,Qwen2.5-Math-7B-base生成初始解答、自评和可选修订。仓库描述了三步顺序生成,并使用rule-based reward function给输出打标签;论文使用基于SymPy的ToRA验证脚本。每个base样本最多保留一条满足目标且最终正确的轨迹,论文报告约32K条,并在初始正确与错误样本之间大致平衡。总候选数、逐阶段产率、rollout数量、构造温度、seed和总计算量均为unknown。

最终Hugging Face数据集在一个train split中恰有31,990行。每行公开`gt`以及长度为3的`conversations`列表:固定的system-message instruction、用户问题,以及包含所选长轨迹的一个assistant内容字段。它不公开上游提示ID、原始候选ID、初始正确性字段、评估标签字段、修订字段、轨迹类型、verifier输出、拒绝原因或join key。16.3K行raw示例和turn-level伴随仓库是独立的构造中间物,不是最终数据集的附加split。

Qwen IFT把样本打包为8,192-token block,使用1e-5学习率、cosine调度、0.05 warm-up ratio、global batch size 32并训练3个epoch;论文选择epoch 1结束时的checkpoint。报告中的completion上限为4,096 token。仓库使用Axolotl进行SFT并给出多项package版本,但没有不可变release tag,也没有覆盖完整构建的单一environment lock。在核验的commit `372bea99fec02ea7602b2c984537cb0b53262437`中,`infer_math/process_prompt_turn1.py`第24行多出一个引号而无法解析,后续准备与PPO脚本仍含未解析的用户路径哨兵值;因此复现流水线需要文档未说明的修改。

迭代DPO每轮使用20K提示,采样多条轨迹,再按正确性分数形成比较。同分提示被省略,因此只有40%到60%的提示能形成pair。实现委托给独立的Online-DPO-R1仓库。PPO沿用公开veRL配方,主要使用终局正确性;论文还研究替代性的多轮reward,其中一种设计会被策略利用,表现为故意先答错再纠正。

主要Qwen结果在MATH500、OlympiadBench和Minerva Math上使用greedy zero-shot CoT评估,并报告Turn 1准确率、最终准确率、错误转正确、正确转错误和分类别reward-model准确率。独立Llama实验使用简化两轮格式,并报告温度1.0和0.7。这些评估设置不能移作尚未披露的顺序采样解码契约。
