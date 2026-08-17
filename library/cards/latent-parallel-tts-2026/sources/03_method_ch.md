作者评测 COCONUT、CODI、CoLaR、Latent-SFT 和 Render-of-Thought 主干。在每个潜步骤，蒙特卡洛 dropout 在前馈层后施加随机采样的 dropout 掩码；高斯采样加入均值为零、尺度可调的扰动。他们把并行轨迹数从一变到六十四，并评测解题覆盖率，即潜式版本的 pass@k。超参数通过 coverage@64 调整，并报告面向不同架构的实用 dropout 和噪声范围。

训练 LatentRM 时，作者采样潜轨迹，并从每个中间思维运行多次随机完成。最终得到正确答案的比例成为思维质量标签。评分器不做独立二分类，而是在同一位置的候选间使用逐步对比损失。推理时，累积分数引导 best-of-N 或束搜索；束宽设为 N 的平方根，使解码成本与 N 条独立样本匹配。实验使用 GSM8K Test、GSM8K-Hard、MultiArith，并在 MATH500 上测试迁移。
