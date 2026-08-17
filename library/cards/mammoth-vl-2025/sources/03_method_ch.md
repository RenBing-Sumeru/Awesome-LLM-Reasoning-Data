# 方法

1. **筛查并分类来源。**输入：153 个公开多模态数据集。操作：每个来源抽样检查 1000 条，把 58 个强来源归为 Group A、60 个可提升来源归为 Group B、丢弃 35 个弱来源，并把保留项映射到十个任务类别。输出与流转：原样保留记录与待改写候选。检查/停止规则：仅保留内容充分且模态对齐的来源，并统一媒体尺寸/宽高比。
2. **按任务改写示范。**输入：Group B 媒体、原始问答/描述和分类提示。操作：视觉类别使用 InternVL2-Llama3-76B，caption 数据使用 Llama-3-70B-Instruct，生成更复杂的 instruction 和带详细 rationale 的回答。输出与流转：改写后的 instruction-response 候选进入过滤。检查/停止规则：提示强制采用分类专用格式并依赖图像内容。
3. **过滤视觉一致性。**输入：改写候选及对应图像。操作：InternVL2-Llama3-76B 判断图像相关性、逻辑一致性和事实准确性。输出与流转：Yes 允许记录进入公开混合，No 则拒绝。检查/停止规则：三项必须全部通过，OCR/图表记录的移除率最高。
4. **混合并训练消费者。**输入：保留原始记录、通过的改写、Qwen2.5-7B-Instruct、SigLIP 与 MLP projector。操作：使用 70% 改写/30% 原始混合，再依次执行对齐、1000 万单图 SFT 和 200 万 one-vision SFT。输出与流转：MAmmoTH-VL-8B checkpoint 与 23 项 benchmark 结果。检查/停止规则：每阶段在固定 manifest 上训练一轮；Stage 3 单图记录与 Stage 2 不重叠。

**可复现性：**需核验 10M/2M JSON manifest、媒体 shard、来源 ID/许可、分类提示、模型 revision、过滤输出和公开 checkpoint。复现时固定 153 来源快照、每来源 1000 条筛查样本、teacher/judge 版本、图像规范化、改写/原始比例、随机种子与三阶段 manifest；改写总算力、生成温度、来源级接收数和 benchmark 去污染未披露。
