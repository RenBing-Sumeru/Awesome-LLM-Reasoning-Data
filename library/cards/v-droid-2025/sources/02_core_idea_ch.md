一句话概括：V-Droid 把每个已标注的 Android 决策状态转化为“正确动作—备选动作”prompt 对，训练 generative verifier 为每个候选动作输出标量 helpfulness 分数，并在执行时选择得分最高的动作（论文第 3.2、4.1 节，图 4–5）。

在每个状态中，Android Accessibility Service 提供当前文本化 UI 表示，规则抽取 click、long-press、scroll、type 与 clear 动作；默认动作还包括 open app、wait、home、back、complete 和 answer。verifier 的 prompt 组合角色、用户目标、working memory 或动作历史、UI 状态、指令及针对一个候选动作的问题。模型不解码解释，而是取第一个 token 的 logits 或概率，经 MLP head 映射为候选动作分数。open-app、type-text 与 answer 在被选中后仍需由另一个 LLM 完成具体内容（论文第 3.1–3.2 节，第 4 页）。

反馈契约分为三个层次。第一，人类或当前轮次的 V-Droid 在每个轨迹步骤标出一个正确动作。第二，P3 将其作为 `chosen`，把其他提取动作分别作为 `rejected`，通过 logistic pairwise objective 学习分数差。第三，部署后的智能体由各 benchmark 的终止任务成功契约评测。verifier 打分时只能看到目标、历史/记忆、当前 UI 文本与候选动作，无法看到未来状态或终止成功。因此，该信号是与 helpfulness 相关的过程反馈，不是可执行正确性证明，也不是直接环境 reward。

self-correction 组件会先执行错误动作进入错误状态，再按固定映射构造该动作的 reverse action，并将反向动作与其他候选进行配对。作者发现 self-correction 数据过多会使行为坍缩为反复执行 back，因此只随机抽样错误状态，使这类偏好对约占训练数据的 2.5%（论文第 4.2 节，图 6，公式 5–6）。

与发布离线人类状态—动作 episode、用参考动作匹配评测的 AndroidControl 相比，V-Droid 沿用了包括该工作在内的任务来源，却把监督对象改为供在线 verifier 使用的动作偏好。与自由生成动作的移动 LLM 智能体相比，它把下一步约束在提取出的动作集合，并用只做 prefilling 的打分方式摊薄候选比较成本。Android benchmark、Accessibility Service、Llama-3.1、Q-LoRA 与 pairwise preference loss 都不是本文首创；方向性变化在于将它们整合为迭代式“轨迹—验证器”数据闭环。
