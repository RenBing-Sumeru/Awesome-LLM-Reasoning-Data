1. **发现仓库与任务：** 从开放 Python 项目和变更历史提取候选问题、base commit 与目标修改，建立待恢复的 repository task。

2. **多 agent 合成环境：** 不同 worker 探索目录、依赖与 CI 配置，生成 Dockerfile、安装命令和 evaluation script；中央流程反复构建并依据日志修正。

3. **执行验证与分层：** 在 base/gold 状态运行测试，确认目标失败可复现、金补丁可解决且环境稳定；再过滤不可解、过易或 oracle 弱的实例，并保存构建元数据。

4. **采集轨迹与训练：** 在约 9K 合格环境中运行 coding agents，记录观察、工具调用、编辑和测试反馈，筛得约 13K 轨迹。论文再用这些数据训练 OpenSWE 模型；复现需固定镜像、agent、采样预算和环境版本。
