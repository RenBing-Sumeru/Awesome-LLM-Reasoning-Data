GUI-Libra 把每段推理与结构化可执行动作绑定，过滤两者的一致性，在 SFT 中提高动作与定位 token 的权重，并在离线奖励无法识别所有有效动作时限制策略漂移，从而让 GUI 推理监督真正可执行。核心数据对象是推理与动作组成的逐步记录，反馈契约结合模型过滤和部分可验证奖励；它直接进入 SFT 与 RL，而不只是环境评测，因此属于本分类。

Google Scholar 引用数：6（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=GUI-Libra%3A+Training+Native+GUI+Agents+to+Reason+and+Act+with+Action-aware+Supervision+and+Partially+Verifiable+RL&author=Rui+Yang&hl=en）

开源数据：有。数据集名称：GUI-Libra-81K。官方地址：https://huggingface.co/GUI-Libra。规模：来自 9K 条轨迹的 81K 个步骤，另有 40K 步的 RL 子集。记录形式：截图、系统级指令、用户指令、交互历史、推理轨迹以及 JSON 动作字段。文件或存储格式：论文和已检查的项目页未确认。领域与语言：网页和移动端 GUI 任务，并包含 GUIAct 中文子集。构造与过滤：GPT-4.1 补充推理和动作，Qwen3-VL 检查动作一致性与坐标是否落在目标框内。许可：未确认。预期用途：action-aware SFT 与部分可验证的 GUI RL。
