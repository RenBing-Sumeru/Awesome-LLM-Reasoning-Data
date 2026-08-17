# 01 问题

"Let's Verify Step by Step" 是 OpenAI 2023 年 5 月公开的论文和 arXiv 预印本。它问的问题很具体：数学推理模型是否只需要最终答案监督，还是每一个中间推理步骤也应该被反馈。

这张卡应收为 process-supervision 数据与 reward/verifier surface，不是普通数学 benchmark，也不是完整 RL recipe。数据对象是一个 MATH 题目、模型生成的逐步解答、以及人类对每个步骤的标签；标签按标注说明区分 positive、neutral、negative。反馈契约由人类步骤判断和最终答案 grader 共同构成。它对 atlas 的价值是把 step-level reward 数据公开成可审计对象，而不只给终局正确率。
