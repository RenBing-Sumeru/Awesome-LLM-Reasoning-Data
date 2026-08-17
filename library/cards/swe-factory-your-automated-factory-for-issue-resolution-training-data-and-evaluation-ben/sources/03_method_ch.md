1. **准备候选 issue：** 从多语言 GitHub 项目配对 issue、base revision 和修复 PR，过滤缺少测试变化或无法定位目标提交的候选。

2. **SWE-Builder 恢复环境：** 四个 agents 分别探索仓库、生成安装/测试方案、执行诊断与修正；environment memory 复用同项目或相似项目的成功配置，减少重复探索。

3. **统一执行判分：** 将构建和测试命令封装，使退出码成为成功/失败信号，避免为 pytest、Maven 等输出编写独立 parser；同时保存日志用于故障分类。

4. **验证与发布：** 在 base 和 gold 状态运行目标测试，自动计算 fail2pass，并检查回归。有效实例进入 benchmark/训练集；公开 Gym 规模为 2,809，复现需固定模型、agent 轮数、容器和命令超时。
