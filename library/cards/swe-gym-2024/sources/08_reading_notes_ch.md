如果想先理解评测 lineage，可以在 SWE-bench Lite/Verified 之后读 SWE-Gym；如果想理解后续 SWE-agent 训练论文可能复用的环境和轨迹对象，可以先读它。

阅读时跟踪四条轴：task construction、trajectory generation、verifier training 和 downstream evaluation。论文 headline score 混合了这些轴，因此可复用数据笔记必须说明复用的是哪个组件。

需要显式保留的 unknown：具体 Hugging Face revision、每个实验的 trajectory filter、所有 Docker image 是否仍可复现，以及在会阻挡浏览器校验的环境中能否独立读取 OpenReview metadata。
