1. **开放 SWE agent SFT：** 使用污染控制子集的成功轨迹训练 7B–32B 模型，按仓库留出，并在固定 OpenHands/SWE-agent scaffold 下报告 Pass@1。

2. **混合 verifier：** 对同一任务采样多个补丁，分别运行独立测试和 execution-free scorer，再以校准后的融合排序选择；同时报告 Best@N、实际执行次数和 verifier 假阳性。

3. **环境合成：** 在有提交历史和可容器化测试的仓库复用 SYNGEN。若提交只做重构、测试无法暴露行为变化或依赖外部服务，back-translation 不能保证形成有效 issue，应由人工审查或排除。
