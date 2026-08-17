早期内在纠错方法通常依赖 prompting、独立 refiner 或 teacher，或者在离线修改前后轨迹上做 SFT。SCoRe 同时改变构造分布和优化目标：学习者在线生成自己的第一次与第二次作答；Stage I 在提高第二轮的同时，刻意让第一轮策略保持接近基座分布；Stage II 除终局表现外，还奖励正确性的跨轮变化。

对本图谱而言，方向信号在于区分“收集看似合理的 repair pair”和“训练能修复自身当前错误的策略”。Progress bonus 还把错误到正确的纠错，与仅提高第一轮准确率后保持答案不变的策略区分开。因此，要审计这类轨迹，必须保留 policy checkpoint、训练阶段、两轮结果奖励和采样元数据。

SCoRe 没有提出过程级验证、公开纠错数据集或无需 oracle 的训练奖励。Ground-truth answer 和单元测试仍然定义训练正确性，带 KL regularization 的 REINFORCE 也是已有机制。其贡献是面向 on-policy 内在纠错的两阶段组织和 reward shaping。
