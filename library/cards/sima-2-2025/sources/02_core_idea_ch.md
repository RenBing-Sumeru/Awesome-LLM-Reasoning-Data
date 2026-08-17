核心记录把 720p RGB 历史、语言或图像指令、可选对话与推理，以及普通键盘/鼠标动作块连接起来。人类示范提供行为轨迹；Gemini 增加语言标签和精选的因果一致推理/对话；online RL 再加入任务落地奖励。

SIMA 2 进一步形成自改进循环：Gemini task generator 观察当前状态，提出可完成或针对弱项的目标；SIMA 2 执行；Gemini reward model 以 0–100 评价完成度和行动指向性；有用经验进入 experience bank，随后训练新策略并重复循环。
