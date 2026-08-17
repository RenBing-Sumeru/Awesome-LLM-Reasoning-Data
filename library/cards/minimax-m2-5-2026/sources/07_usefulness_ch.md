该发布适合作为 agent-native RL 基础设施设计参考：分离 scaffold、environment、reward、rollout 和 training service；记录 outcome/process/speed feedback；版本化可执行任务；追踪异步 policy age 与 merge ancestry。复现应先固定 229B FP8 配置、196K 上下文、scaffold、工具版本、环境镜像、reward server 和评测 harness。

当前复用范围主要是依据模型许可证对公开 checkpoint 做推理/评测，以及面向审计的重建。由于环境、轨迹、奖励、权利、split 和 Forge/CISPO 实现不可用，训练复用被阻断。
