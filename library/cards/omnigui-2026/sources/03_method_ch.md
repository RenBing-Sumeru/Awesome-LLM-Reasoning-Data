输入是中英文移动应用中的目标导向任务。10 名有多年 Android 日常使用经验的用户按照五个任务维度设计任务，在物理 Android 设备上执行预期轨迹，并把这些专家演示作为 ground truth。

流程可以审计为五步：

1. 记录专家轨迹，同时保存 30 FPS 屏幕视频、设备内部音频、每次动作前截图和精确触摸事件。
2. 按步骤切分视频和音频，区间是上一动作完成到下一动作开始。
3. 把原始触摸事件转写成 13-action space，包括 NONE、TAP、DOUBLE_TAP、LONG_PRESS、四向 swipe、INPUT、BACK、HOME、TASK_COMPLETE、TASK_IMPOSSIBLE。
4. 校验坐标或字符串参数，并给 episode 标注客观 multimodal dependency。
5. 用 teacher forcing 评测模型：每一步给 ground-truth history，要求模型输出单个 JSON 动作。

输出包括 episode 记录、每步多模态媒体、动作标签、dependency 标签、模型预测和 TM/EM/SR/GP 分数。复用必须固定数据仓库、过滤版本、prompt template、模型 API payload 适配、解码设置、坐标归一化方式和媒体可访问性。
