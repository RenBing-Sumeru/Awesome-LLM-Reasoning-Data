1. **环境预训练：** 直接使用筛选后的 Docker tasks 让 agent 学习仓库探索、编辑与测试循环；按 repository 隔离 split，避免同项目轨迹泄漏到评测。

2. **轨迹 SFT/RL：** 将约 13K 轨迹转成 observation–action–feedback records，使用终局测试和过程回归作为 reward，并对失败轨迹保留错误类型。

3. **内部环境工厂：** 复用多 agent Docker/eval-script 合成流程恢复企业 issue。预算不足时可先按 CI 成熟度筛库；涉及私有依赖、许可证不清或测试不可稳定重放的任务不应直接纳入公开集。
