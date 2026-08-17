推理模型可解释性首先面临一个粒度问题。围绕单次 forward pass 或单个 token 设计的方法，不能直接解释一条很长的自回归 chain of thought 如何在数十乃至数百个句子之间重新组织自身。一条 trace 可能同时包含算术、规划、回溯、事实检索与自检，但最终答案本身并不能指出究竟哪个句子改变了后续轨迹。因此，论文提出一个因果问题：如果移除或替换某个句子，后续推理与最终答案的分布会怎样变化？

forced-answer probe 只能部分回答这个问题。在某个位置中断 trace 并要求立即给出最终答案，衡量的是该位置已经具备多少求解信息，却可能漏掉价值需要通过后续步骤才能体现的早期规划句。Thought Anchors 因而把每个句子边界视为干预点：它比较保留第 \(i\) 个句子时的续写分布与移除并重新生成该句时的续写分布，同时保留 forced-answer continuations 作为基线。

这样一来，研究问题也变成了推理数据问题。可复用对象不只是一个句子分数，而是把 MATH prompt、正确或错误的 base CoT、句子 chunks、反事实 continuation arrays、抽取出的最终答案、正确性标记、答案分布统计、功能标签和直接依赖标注连接起来。发布中还保留 `incorrect_base_solution` 分支与错误采样结果，使失败行为可以被检查，而不是把 artifact 静默限制为成功 trace。

论文主分析在问题数量上较小，但条件生成规模很大。作者先对 1,000 道 MATH 题各采样十次，选出正确率为 25–75% 的 20 道题，再对每题一条正确和一条错误的 DeepSeek-R1-Distill-Qwen-14B trace 进行分析。对每个被分析句子，论文比较 100 条保留该句的 continuation 与 100 条移除或重采样该句的 continuation；forced-answer 变体还会在每个位置采样 100 个 completion。这种结构使本工作归入 **Rollout / Search / Test-Time Trace Data**，但该方法是离线反事实 rollout 分析，而不是以最大化正确率为目标的搜索策略。

审计问题与科学问题不可分割。Hugging Face 报告 20,997 行，但这些行索引的是原始文件，`content` 字段可以包含 continuation arrays；它们并不是 20,997 条独立 rollout。论文每个条件采样 100 次的实验目标，也不同于 dataset card 所说的“发布的 chunk 文件通常含 10–100 条 continuation”。因此，任何复用都必须先协调 task、branch、directory、file、chunk 与 nested continuation 的计数，再解释发布规模或覆盖度。
