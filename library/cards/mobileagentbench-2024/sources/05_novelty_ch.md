已有基线包括 AndroidWorld、AndroidEnv 这类真实但较重的移动环境，以及常偏向静态感知或封闭任务集的 GUI-agent benchmark。MobileAgentBench 改变的是复用面：它强调外部用户更容易安装、运行和扩展，同时仍保留可执行 Android 任务和 validator。

新意在 packaging 和 usability contract，不在 Android emulator、UI automation 或 task-specific validator 本身。这些组件并非新发明。方向信号是实用性的：移动 agent 评测应公开足够的环境和 validator 机制，让重复实验不必每个实验室从零搭 harness。

质量信号包括论文、官方项目页、公开代码、baseline 接入，以及以任务 reset 和成功验证为中心的设计。复用前要检查精确任务清单、license、依赖版本、emulator 镜像、应用版本、seed data、validator、隐藏或私有任务，以及 baseline 结果是否依赖未公开 prompt 或外部服务。
