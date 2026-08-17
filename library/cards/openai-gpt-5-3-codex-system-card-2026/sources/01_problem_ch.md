OpenAI 于 2026 年 2 月 5 日发布的官方 *GPT-5.3-Codex System Card* 并不是一份通用训练数据报告。与后训练有关的披露范围要窄得多：第 4.1.2 节只点名了一项强化学习干预，目标是在编码代理遇到用户产生的编辑时减少破坏性回退。报告没有发布把该干预作为数据集或配方进行审计所需的记录与实现。

对于 Frontier Reports and Data Disclosure Ledger track，具体的数据问题因此应被严格限定：这些 RL rollout 向模型呈现了什么、什么行为获得反馈、哪些信息仍未披露？被点名的对象只有一个“user model”、rollout 期间的冲突编辑，以及 GPT-5.3-Codex 没有回退用户更改时获得的正向强化。任务 prompt、代码仓库、trajectory、reward 记录、环境与 lineage 均未发布。报告另行给出 destructive-actions evaluation 作为测量面，但没有将它认定为训练 reward。
