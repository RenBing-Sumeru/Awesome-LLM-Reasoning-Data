对 **Rollout, Search, and Test-Time Trace Data** 而言，URSA 是一套有用模式，用来分开五类常被混淆的信号：图像证据、答案结果、基于续写的过程标签、学习得到的 PRM 分数和 RL 奖励。重建时应保存图像字节或不可变图像引用、问题和答案、生成器与 judge 版本、每条续写、BEL/MIE 路线、步骤标签、PRM 序列、检测到的下降、结果奖励以及入选/拒绝 rollout 身份。

公开的 MMathCoT/DualMath 表格可在核验图像访问和许可证兼容性后支持受控 SFT 或 PRM 格式研究。它们不应被视为可直接复用、且独立验证过的多模态过程真值。仓库与模型发布支持推理和打分研究；缺少代码、记录和清单使忠实的构造或 RL 复现仍受阻。

可执行实验包括：比较 BEL-only、MIE-only 与合并 PRM；在匹配 Best-of-N 预算下测试分数聚合；测量错误后恢复标签；以及在保留完整 rollout 日志下消融 gamma/rho。不能用 benchmark 性能替代这些审计。
