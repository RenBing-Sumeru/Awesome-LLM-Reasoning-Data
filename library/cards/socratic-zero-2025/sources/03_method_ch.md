课程从 100 道 MATH 训练题开始，Solver 先在 1,500 道 Level-5 题上做 LoRA SFT。每道课程题生成 k=8 次尝试，由 Qwen3-235B 标注胜负；若全部失败，参考解成为唯一 winner。Solver 通过在线 DPO 更新。失败轨迹用于条件化 Teacher 改写，Qwen3-32B 则以成功率 0.5 为中心、sigma 0.2 的高斯权重学习出题。三阶段训练混入 25% 历史回放。

