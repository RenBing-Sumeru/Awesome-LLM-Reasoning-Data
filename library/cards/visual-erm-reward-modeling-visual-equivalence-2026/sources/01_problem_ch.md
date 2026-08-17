图表、表格和 SVG 的 vision-to-code 任务需要比较生成代码渲染结果与目标图像是否视觉等价，但文本规则只能检查代码结构，CLIP 等全局相似度又会忽略局部位置、类型和严重度差异，容易形成 reward hacking。

Visual-ERM 训练一个直接比较目标图像与候选渲染图的生成式奖励模型，输出错误类别、位置、严重度与解释；同时发布 VC-RewardBench，用细粒度视觉差异标注测试 reward model 的等价性判断。
