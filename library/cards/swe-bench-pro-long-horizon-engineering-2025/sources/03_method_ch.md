1. **收集专业任务：** 从开源、未公开仓库和合作公司选择真实 issue/feature，要求工作量明显高于普通短修复，并保留原始 patch 与开发上下文。

2. **补充可解信息：** 工程师阅读代码和任务，向描述中加入缺失的复现步骤、接口约束或业务上下文，但不直接泄露 gold patch。

3. **构建执行环境：** 根据锁文件、CI 和文档安装依赖，固定 base commit，分离 test patch 和 source patch，并确认 gold patch 能使目标测试通过且无回归。

4. **人工验收与划分：** 多轮审核任务可解性、测试充分性和难度，再按 public/held-out/commercial 分区。复现公开结果需固定 731 题版本、统一 scaffold、50-turn/成本上限及镜像 digest。
