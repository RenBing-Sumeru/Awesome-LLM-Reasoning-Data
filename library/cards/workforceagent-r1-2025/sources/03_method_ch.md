**输入。** WorkArena 提供 33 类 ServiceNow 任务和自然语言目标。作者为每类任务保留 10 个训练配置，共 330 个；测试配置另行划分，并使用 o3-mini 扰动训练配置，使其区别于既有 BrowserGym/WorkArena 配置。配置 ID、扰动 prompt 与输出、固定 split manifest 均未公开。

**轨迹生成与过滤。** BrowserGym 的 `cheat()` 函数执行 Playwright 脚本，生成 oracle-like 动作—观测序列。论文删除包含无效动作或最终失败的样本，但没有报告尝试、接收、拒绝及各任务轨迹数量，因此不能把“330 个配置”改写成“330 条已公开轨迹”。

**记录转换。** 每条保留 episode 被拆成独立步骤。训练输入含目标、当前 HTML/AXTree、历史动作和动作定义，参考输出是下一个结构化动作；论文的单步表示不包含未来观测。标准 SFT 附加 o3-mini reasoning，SFT-L 则从 `DeepSeek-R1-Distill-Llama-70B` 注入更长 reasoning。

**SFT 与 rollout。** RL 初始化先在随机抽取的 1,000 条记录上做 1 个 epoch 的 SFT，batch size 32，学习率 `1e-4`。GRPO 在每个状态采样 `G` 个候选；论文正文没有给出 `G` 的数值。固定版本的公开脚本设置 `rollout.n=8`、temperature 0.6、最大响应长度 1,024，但没有 run manifest 证明所有论文结果都使用该文件。

**Verifier 与优化器。** 论文总奖励为 `R = Rf + Rs + Rp`：结构合法时 `Rf=0.1`；动作类型及参数完全正确时 `Rs=1`，仅类型正确时为 `0.1`，否则为 0；`&lt;/action&gt;` 后继续生成时 `Rp=-0.9`。GRPO 使用组相对优势、裁剪与 KL 正则。论文报告 RL batch 128、学习率 `1e-5`、rollout temperature 0.6、KL 系数 `1e-3`，使用 8 张 141GB H200。

**输出与评测。** 输出是经过训练的 Qwen2.5 3B/7B/14B 策略以及 Llama-3.1-8B 迁移结果，并用 WorkArena success rate 评测；官方未链接训练后 checkpoint 或评测 episode log。

**复现审计。** 需要固定 ACL/arXiv 版本、代码 SHA、BrowserGym、WorkArena/ServiceNow 状态、Playwright、veRL/TinyZero、teacher snapshot、配置 ID、随机种子、数据/checkpoint hash 与 reward 测试。公开预处理器分别调用 `train_test_split` 构造训练集和测试集，固定版本的 `webagent.py` 也没有逐字实现论文奖励公式；在把仓库当作精确复现前，必须解释这两类差异。
