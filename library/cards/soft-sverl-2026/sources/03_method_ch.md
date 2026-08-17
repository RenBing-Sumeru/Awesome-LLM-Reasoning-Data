流水线生成 checklist，采样 G 个响应，并为每个响应—条目对采样 J 条验证轨迹。正 replay 标签要求 Yes-rate≥tau_positive，负标签要求 Yes-rate≤tau_negative，不确定中间区域被丢弃。生成器奖励结合完全满足项与 beta 缩放的部分奖励。验证器更新混合 gold 与 replay tuple。共享目标组合生成器优化、lambda_v 加权验证器协同训练和负向 lambda_p partition penalty。由于没有实现或配置，G、J、阈值、beta、lambda、模型、温度、种子、gold 组成和 buffer 策略均 unknown。

