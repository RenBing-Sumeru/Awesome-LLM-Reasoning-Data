在论文披露范围内，pipeline 可以重建为：

1. **输入。** 作者人工 brainstorm 并 double-check seed query。工具描述和随机抽取的 seed demonstration 作为 GPT-4o mini 的条件。针对图像，流程使用 ShareGPT4V caption，从 ChartQA、COCO、LLaVA、SAM、TextVQA、Web-Celebrity、Web-Landmark 与 WikiArt 构建 93K 图像-caption 池。
2. **Query 与文件构造。** GPT-4o mini 编写新 query 并判断所需文件。BGE 检索最相似图像；对于 PDF、DOCX、PPTX、XLSX、CSV、音频等非图像对象，GPT-4o mini 生成内容和 Python 物化代码。
3. **交互。** 由 GPT-4o mini 控制的 zero-shot ReAct agent 接收 query、文件与工具描述。每一步先写 thought，再输出可执行 Python 代码，并以返回的 observation 为条件继续。论文中的多数轨迹有二至六步，少数达到七至八步。
4. **环境门槛与 judge。** 只有代码能够执行的轨迹才会被收集。GPT-4o-mini query-file judge 检查相关性、信息充分性和可解性，第二个 GPT-4o-mini judge 检查轨迹和最终答案；两个判断都通过才保留。
5. **输出与训练。** 论文报告 23.5K 个生成 candidate 经筛选后得到约 20K 个任务和约 15K 个文件。MM-Traj 与 Cauldron、open-LLaVA-NeXT 混合，用于对 MiniCPM-V-8.5B 或 Qwen2-VL-7B controller 进行五轮 SFT。vision encoder/compressor 冻结，LM q/k/v 使用 rank-64 LoRA；context length 为 10,240，learning rate 为 1e-6，batch size 为 2。Loss 只覆盖 thought 与 code token，不覆盖最终答案 `A`。

构造 temperature 无法由论文复现：正文只说 query temperature 经过调节，却没有给出数值。已检查脚本使用 temperature 1，并指定 `gpt-4o-mini-2024-07-18`，但没有不可变 manifest 把这些文件绑定到论文运行。最大 rollout step、token 与工具成本预算、timeout、retry、concurrency、API version 和随机 seed 均为 unknown。

固定版本数据集与论文的四舍五入漏斗并不一致：`mat_train.json` 有 21,168 条 unique row，而 `data.zip` 有 19,307 个普通文件。因此，复现必须固定代码、数据集和模型 revision，修复最终 verifier 中不存在的 prompt path，重建外部 caption/embedding asset，并建立 source file、生成 attachment、JSON row、verifier decision、训练 membership 与 checkpoint 之间的映射。没有可复现的 split 或污染处理流程被发布。
