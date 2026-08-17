提示来源是Sky-T1提供的带难度标签NuminaMath版本。固定集合由1,667道难度大于3的MATH题、1,667道难度大于8的Olympiad题和1,666道AIME/AMC题平衡组成。论文称在这些分层内随机抽样,但发布行未暴露上游记录ID、来源URL或去污染清单。

11个具名推理教师覆盖4B到671B参数规模,每个教师用vLLM在3次独立运行中为全部提示各生成1个回答,得到11 x 3 x 5,000 = 165,000个候选。生成使用各教师官方推荐chat template与采样设置;论文给出的Qwen配置是温度0.6、top-p 0.95、top-k 20、min-p 0,但没有逐一列出所有教师的完整解码契约。生成预算为31,000词元。超预算输出最多重采样10次,若仍过长则截断;最终截断率报告为低于1%。

每个发布JSON行只含三条message:要求逐步推理并用boxed给出最终答案的固定system指令、作为user message的原始问题,以及作为assistant message的一条教师轨迹。原始文件按教师和运行轮次组织。对每个目标学生和提示,学生模型对33条assistant回答分别做前向计算,得到词元surprisal与截断rank,然后选择RSR最小的回答,形成5个各5,000行的学生专用文件。选择行只保留messages,不保留教师/轮次、RSR组成、正确性、候选排名或拒绝原因。

5个预训练base学生是Qwen-3-14B、LLaMA-3.1-8B、Qwen-2.5-7B、Qwen-3-4B和Qwen-2.5-3B。SFT使用LLaMA-Factory与FlashAttention-2,batch size 64、最大序列长度32,768;学习率除Qwen-2.5-3B使用5e-5外均为2e-5。Qwen-3-14B训练8个epoch,其余学生训练10个epoch。轨迹选择实验使用3个微调seed,而教师-学生蒸馏通过3个独立生成的教师数据集取平均,不再增加微调seed。

评估使用vLLM和Math-Verify,在AIME 2024、AIME 2025、AMC 2023与MATH500上报告Acc@4;GPQA-Diamond只是附加评估面。推理配置为温度0.6、top-p 0.95、top-k -1、最大长度32,768。论文报告:使用7B学生和FlashAttention-2在单张H200上为5,000条轨迹评分不到1小时,而一次7B SFT在8张H200上约需7小时。教师选择变体对6个候选教师各抽样200条轨迹并按教师级聚合分数排序。

官方GitHub仓库发布了清理后的RSR实现并使用MIT许可证;Hugging Face发布同样标为MIT,包含33个原始文件和5个选择文件。当前代码后来增加了多轮对话、agent和multimodal输入支持,但ACL论文实验没有验证这些扩展,不能据此声称跨领域有效。
