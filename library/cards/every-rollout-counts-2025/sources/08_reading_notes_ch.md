- DORA 将 PRM 质量与 BGE-M3 导出的对角 affinity 相乘，在 soft reasoning direction 之间分配资源。
- 主要配置为 T_b=0.1、T_s=0.01、生成 temperature 0.8、top-p 1.0、每步 256 tokens、每条解 2,048 tokens。
- 评估总预算为 16 至 256，最终答案使用 PRM 加权多数投票。
- 最优性主张依赖独立性、有意义的方向及方向内 PRM 分数相同等条件。
- 官方 Apache-2.0 代码已公开，但原始轨迹、矩阵、分配日志、投票和不可变实验快照未发布。

