Gemini 接收示范视频和高层任务指令，同时生成一句话子任务计划及其结束时间步；论文称所有生成标注均经过人工核验。每条推理记录包含 Plans、What has been done 和 Now I need to do 三部分。公开的 LIBERO-R 包含 libero-10-r、libero-100-basket-r 和 libero-100-r；各目录含 episode 数据与元数据，cot_simple.json 则按 episode 索引推理片段，记录起止步骤、当前文本状态和更新后的文本内容。

推理型 VLA 使用命名的 think 与 act 控制 token 在文本和动作间切换，文本采用交叉熵损失，动作采用 flow-matching 损失。SEAL 推理时，策略自回归采样候选动作序列，直到输出下一枚 think 控制 token；并行 LIBERO 实例预测后续观察。GPT-4o 作为代理验证器，只接收 episode 初始图像、候选预测末帧和当前文本计划，并返回二值对齐判断。实现可异步执行首条通过验证的候选，而不等待全部候选完成。候选数随实验设置变化；若用于真实机器人，还需足够准确的仿真器、学习型世界模型或数字孪生。
