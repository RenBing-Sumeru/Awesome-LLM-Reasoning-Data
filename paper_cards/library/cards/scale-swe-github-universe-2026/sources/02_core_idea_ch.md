ScaleSWE 将环境设置、测试创建和问题描述合成交给专门 Agent，再把 pull request 上下文封装为 Docker 支撑的任务。一条记录绑定问题、补丁、测试和可选轨迹；fail-to-pass 与 pass-to-pass 行为定义任务合同是否满足。

核心贡献是这一可执行数据接口。它可用于 Agent SFT 和蒸馏，因为行为轨迹始终连接到能够检查最终补丁的环境。
