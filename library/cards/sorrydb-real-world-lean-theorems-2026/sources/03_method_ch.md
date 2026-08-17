1. **持续抓取项目：** 从 Reservoir 列出的公开 Lean 4 仓库读取活跃版本，克隆指定 branch/commit，并运行 `lake build` 检查项目能否复现。

2. **定位证明义务：** 使用 Lean REPL 扫描 `Prop` 类型声明中的 `sorry`，记录文件、行列、命名空间、imports、Lean 版本和仓库元数据；无法稳定构建的项目不进入可评测集。

3. **冻结评测快照：** 从夜间数据库生成带时间戳的 snapshot，并按项目与任务特征抽取 1,000 题评测 split，避免排行榜随数据库更新而不可比较。

4. **生成并验证证明：** 通用 LLM、专用 prover 或 agent 提交替换 `sorry` 的 Lean 代码；独立 verifier 在原 commit 和依赖中重新编译，成功关闭目标才计为通过。复现需固定 snapshot、尝试次数和 agent 工具权限。
