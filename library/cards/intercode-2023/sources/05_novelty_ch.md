先前基线是静态代码生成评测：模型写一个答案，再由隐藏测试或参考答案评分。InterCode 把对象从最终答案改成带执行反馈的交互 episode。

它对 agent data 的方向信号很强：应保留 observation、action、中间失败、重试、工具输出和最终 checker result。质量信号来自统一接口和公开实现，使多个 coding domain 能在同一协议下比较。

不新的部分包括 execution feedback、unit test、SQL 答案检查、shell 命令执行和 CTF 校验。复用前要检查 task provenance、继承数据集许可证、sandbox 权限、hidden split policy、环境漂移，以及轨迹是否适合作训练而不仅是评测。
