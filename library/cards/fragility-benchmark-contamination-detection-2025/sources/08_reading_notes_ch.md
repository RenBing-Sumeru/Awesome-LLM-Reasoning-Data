1. 定位：常规推理模型后训练会让检测器可靠性崩塌。
2. 方法抓手：污染 SFT 后接 PPO 类 RL；clipping 压缩成员与非成员的似然差异。
3. 数据抓手：官方提供 LRM_Conta_Detection_Arena；复用必须固定版本和许可。
4. 证据锚点：64-step 消融中，Loss AUROC 从 RAFT 的 79.25 降至带 clipping 的 RAFT++ 的 57.58。
5. 复用决定：每个训练阶段都要用独立成员和非成员审计；检测通过不等于溯源无污染。
