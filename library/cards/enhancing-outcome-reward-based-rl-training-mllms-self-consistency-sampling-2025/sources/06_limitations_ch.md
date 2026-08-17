SCS 假设正确推理轨迹应稳定导向唯一正确选项，并把 reasoning tree 建模为只有一条正确轨迹。真实问题可能存在多条有效 rationale，而一致的 continuation 也可能共享同一误解。因此，该奖励可能惩罚合理多样性，或强化相关错误。高斯视觉扰动也可能改变任务关键信息，而不只是测试鲁棒性。

论文验证范围是基于图像的多项选择推理和三个 MLLM 系列；作者也明确指出，对 LLM 及更多 MLLM 的泛化尚未建立。SCS 会增加重采样计算，附录某项比较为 17.2 小时对 12.5 小时，约增加 38%。精确 source manifest、split、去污染、图像许可证、扰动 seed、rollout/reward log、checkpoint 选择效应，以及硬件/run-scope 的协调解释仍不完整。现有 prompt 文件无法独立重放每次奖励分配。
