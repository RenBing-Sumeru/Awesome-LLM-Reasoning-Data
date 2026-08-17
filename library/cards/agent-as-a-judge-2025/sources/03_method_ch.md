1. **定义任务和判断对象。** 每条 DevAI 记录给出 AI 开发 query、requirement 节点及依赖边、可选 preferences；开发 agent 留下代码、文件、输出，有时还提供结构化轨迹。

2. **建立人工参照。** 三位 AI 专家独立标注每条 requirement，再讨论分歧并形成共识。该共识不是绝对真值，而是计算 judge shift 与 alignment 的参照。

3. **收集定向证据。** judge 建立 workspace 图，定位 requirement 指向的文件，读取代码或多模态产物，并可从灰盒轨迹检索相关执行反馈；论文未把执行被评 workspace 作为必要步骤。

4. **输出 requirement 判决。** ask 模块接收 requirement 和筛选证据，给出满足或不满足及简短理由；随后按是否考虑依赖关系聚合结果。

复现需固定 DevAI 版本、开发 agent workspace、gpt-4o-2024-05-13 基线设置、prompts、模块配置和人工共识标签；API 版本、随机性控制与完整成本复现流程仍部分未披露。
