CodeActInstruct 把五个既有任务集中的高难样本改造成可执行的多轮示范。GPT-3.5、Claude 与 GPT-4 通过 Python 行动，接收搜索结果、表格输出、模拟器状态或 traceback，再修订后续计划；流程只保留成功且可解析的 episode，并有意优先选择能够从早期错误中恢复的轨迹。公开记录直接作为 SFT target，因此即使底层依赖智能体环境，本 Card 仍属于指令、示范与理由数据；只发布在线环境或 benchmark、没有静态训练轨迹的工作是最接近但被排除的相邻方向。

Google Scholar 引用数：694（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Executable+Code+Actions+Elicit+Better+LLM+Agents&author=Xingyao+Wang&hl=en）

开源数据：有。数据集名称：CodeActInstruct。官方地址：https://huggingface.co/datasets/xingyaoww/code-act。规模：7,139 条 CodeAct 轨迹、10,581,681 个 Llama-2 token。记录形式：任务指令、思考、可执行 Python action、环境 observation/错误、修订、最终答案与成功结果。文件/存储格式：一个 CodeAct Parquet 分片，另有一个通用对话 Parquet 分片。领域/语言：英文信息检索、数学、编程、表格推理与机器人规划。构造与筛选：GPT-3.5、Claude、GPT-4 与可执行任务交互，原任务指标验证成功，启发式规则保留可解析、有用且能自我纠错的 episode。许可/访问限制：公开 Apache-2.0 数据集，上游来源条款仍需复核。预期用途：SFT 与智能体训练。
