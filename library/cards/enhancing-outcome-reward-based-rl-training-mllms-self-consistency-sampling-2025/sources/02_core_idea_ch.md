SCS 用同一局部轨迹的受控 continuation 构造一致性信号，并把它加入终局 outcome reward。系统先采样初始 rationale，按截断比例 k 保留前缀，再对后缀重采样 m 次；每个 continuation 使用轻微扰动后的图像，高斯噪声强度从有界区间独立采样。各 continuation 的选项答案形成集合 A；论文的归一化公式令 consistency reward 等于 c 乘以“N 减去不同答案数”再除以 N，因此不同选项越少，奖励越高。

完整反馈契约混合三类信号：已知选项带来的 answer accuracy、输出格式合规，以及截断和扰动后的 answer consistency。一致性项作为标量 trajectory reward 进入 policy-gradient objective，但它仍是启发式信号：共同错误的 continuation 也可能一致，多条有效 rationale 也可能多样。SCS 被嵌入 RLOO、GRPO、REINFORCE++-baseline 和 REINFORCE++，并未定义新的 optimizer。

相对普通 outcome-reward RL，SCS 在奖励初始轨迹前检查其反事实 continuation；相对 process reward model，它不依赖另一模型学习 dense step labels。其 track 价值来自 resampling record 本身：必须保留截断、扰动、选项多样性和各奖励分量，才能把增益归因于 data/feedback construction，而不是只归因于 optimizer。
