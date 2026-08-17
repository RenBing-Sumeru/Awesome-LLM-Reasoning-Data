已披露管线如下：

1. **十个训练环境。** 三个研究环境 Construction Lab、Playhouse、WorldLab，以及七个获许可商业游戏 Goat Simulator 3、Hydroneer、No Man's Sky、Satisfactory、Space Engineers、Valheim、Wobbly Life。ASKA 与 MineDojo/Minecraft 从初始训练中留出；The Gunk 和 Genie 3 用于定性或自改进演示。
2. **接口。** 策略接收渲染的 720p RGB 帧，以及先前语言、推理、响应和视觉历史。结构化输出被确定性解析为动作块，覆盖 96 个键盘按键、鼠标点击和离散相对鼠标移动。策略不接收特权游戏状态，但部分外部验证器会使用。
3. **人类与 Gemini 监督。** 大部分游戏数据来自人类自由游玩后标注、setter-solver 指令、预定义任务与对话。较小的 bridge set 选择高质量成功 episode；Gemini Pro 标注因果一致的内部推理与对话，并包含成功后的 no-op 步骤。数量、提示与保留规则未知。
4. **预处理与 SFT。** 帧被缩放，低质量记录被过滤，来源被重加权，多数长轨迹切分为以单条指令为中心的短 span。游戏数据与未披露的 Gemini 非游戏/预训练数据混合，以保留视觉、对话、推理和提示遵循能力。
5. **Online RLVR。** 训练对象配对初始保存状态、指令和验证函数。承包者从随机状态提出可行任务；验证器在邻近人类轨迹中定位完成点以扩展任务。训练奖励使用任务或问题完成信号，并在部分任务中加入基于环境状态、OCR、像素或动作检查的指令遵循/可控性塑形信号。另行进行的五人视频判断属于评测证据，不是论文披露的在线 RL 奖励。初始 RL 仅在十个训练环境中进行。
6. **自改进。** 在 ASKA 或 Genie 3 世界中，Gemini task generator 基于状态提出任务并可针对弱项；SIMA 2 生成轨迹；Gemini reward model 经小规模人类偏好集校准，以 0–100 评价完成度和行动指向性，`≥50` 视为成功。经验进入 bank，后续策略训练闭环。生成器/judge 提示、checkpoint、rollout、接受、replay 和代数均未公开。

MineDojo 使用 50 个程序化任务、每题 15 个随机种子，共 750 个 task-seed 配置。完整超时、帧频、动作块时长、优化器、RL step、算力和环境 build ID 未报告。
