构造输入是由人类选择的事实种子，例如人物、事件或 artifact。trainer 收集有区分力的特征和支持证据，再把它们反向改写为事实检索问题；该问题应有一个无争议、简短且不会随时间变化的答案。trainer 被鼓励围绕个人兴趣出题。公开发布不含记录级种子、证据 URL、证据段落、时间戳、作者/验证者身份和上游权利信息。

候选过滤结合三类难度检查。第一，要求 GPT-4o（含浏览与不含浏览）、o1 和早期 Deep Research 版本无法解题。第二，trainer 进行五次简单 Google 搜索，要求答案不会直接出现在首批结果页面。第三，目标是另一人无法在十分钟内解题，但该检查没有严格执行，且只有部分题目接受第二位 trainer 尝试。如果某位 trainer 的题目解出率高于 40%，相关题目会被修订。构造完成后，由受提示词驱动的 OpenAI chat-model classifier 分配十个 topic 之一；其 prompt、checkpoint 和置信度均为 unknown。

初始候选池有 1,287 道题。Deep Research 通过率为 0% 的题目共有 118 道，其中 21 道经人工复查后因答案格式不匹配、歧义或推理错误而删除，最终留下 1,266 道。这一复查改善了部分标签，但也让最终集合受一个未披露 Deep Research 版本的表现条件化。被删记录、逐题过滤结果、替代答案裁决以及 canonical train/dev/hidden split 均未发布。

使用时，官方 evaluator 下载四列 CSV，并用公开 canary 派生的 XOR 例程解密 `problem` 与 `answer`。它要求被测系统输出解释、简洁的 `Exact Answer` 和 0%-100% 置信度。另一个 LLM grader 读取问题、响应和参考答案，应返回二元语义匹配判断。论文与发布页没有披露论文结果所用 grader checkpoint。当前仓库 runner 指定 `gpt-4.1-2025-04-14`，但这个后来的配置不能作为论文 grader 的证据。

在已检查 commit `652c89d0ca9df547706735883097e9537d40dc47` 中，当前 `browsecomp_eval.py` 存在阻塞 reference scorer 的缺陷：`grade_sample` 返回 `match.group(0)`，即 `correct: yes` 或 `correct: no`；调用方却将返回值与裸 `yes`、`no` 比较。因此，匹配成功的输出也不会把任一布尔标志设为 true。复现者必须改为返回捕获的 yes/no 分组并添加期望输出测试，之后才能信任该代码路径得到的分数。这是对当前参考实现的静态发现；它本身并不证明论文通过另一评测过程产生的结果无效。

输出是针对答案正确性、模型自报置信度及可选重复采样的聚合评测。论文没有定义 SFT、RLVR、reward-model 或 agent-policy 训练 recipe。复现需要固定 CSV checksum、仓库 commit、修正后的 scorer、grader checkpoint 与设置、被测模型版本、浏览/搜索栈、locale/session state、运行日期以及工具/token/页面/时间预算；其中后半部分大多仍为 unknown。
