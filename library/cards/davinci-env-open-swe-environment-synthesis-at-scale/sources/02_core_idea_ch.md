daVinci-Env/OpenSWE 的核心数据贡献是 45,320 个可执行 Python 软件工程环境，覆盖 12.8K+ 仓库；每个环境绑定代码版本、问题/变更、容器构建信息、测试和 evaluation script。作者进一步从约 9K 个高质量环境采集约 13K 条 agent trajectories，形成训练配方。

其 verifier 先判断镜像能否构建和测试能否运行，再检查金修改是否通过目标测试，并过滤过易、不可解或反馈不稳定的任务。数据对象因此不仅是 issue—patch 对，而是可启动环境、终局测试结果和工具交互轨迹，可用于 SWE agent SFT、RL 及环境生成研究。
