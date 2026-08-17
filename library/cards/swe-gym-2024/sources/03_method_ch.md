输入是真实 Python 仓库任务、自然语言任务说明、可执行环境、unit tests，以及能够与仓库工具交互的 agent scaffold。论文和仓库把这些输入连接到 OpenHands 与 MoatlessTools 的复现实验路径。

流程有两个耦合循环。训练循环从 SWE-Gym 采样轨迹，过滤或选择有用交互，并微调语言模型 agent。推理时循环采样多个候选解，并使用在 SWE-Gym 轨迹上训练的 verifier 来排序或选择 patch。

输出包括 task instance、Hugging Face 上的公开模型/数据、agent trajectories、verifier training data，以及在 SWE-bench Verified 和 Lite 上的下游 resolve-rate measurement。verifier/reward signal 根据实验不同，来自仓库测试和基于轨迹训练的 learned verifier。

需要核验的 artifact 包括 arXiv 版本、ICML 2025 状态、GitHub 仓库、Hugging Face organization、SWE-Bench-Fork 中的 environment constants、Docker image namespace 和 scaffold-specific reproduction docs。可复现性依赖固定 image、data split、scaffold version 和 compute budget。
