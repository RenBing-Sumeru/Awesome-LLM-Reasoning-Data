**输入与采集。** 一个未披露的 LLM 为 40 个 app 类别生成通用功能描述。20 名受过训练的付费承包人员选择 app、把描述实例化为具体任务、写入高层目标，并在每个动作前输入低层指令。采集于 2023 年 4 月至 2024 年 4 月进行，使用运行 Android 8.0 或更高版本的物理 Google Pixel 手机，以及配套 Android app、Chrome web app、WebUSB 和 ADB；最后四个月引入了 20 个 LLM 生成的 persona（论文第 3.1 节，第 4–5 页；补充 datasheet 第 1.1.3 节，第 2 页）。精确 LLM 版本、prompt、解码设置和逐记录 persona 分配均为 unknown。

**交互与保留。** 记录器在每一步保存全分辨率 PNG screenshot、序列化 accessibility tree，以及带参数的下一条 JSON 动作。标注者将轨迹标为 successful、infeasible 或 failed。failed/error episode 与原始废弃事件被删除，指令中的拼写和语法错误则保留；scroll 手势被约化为四个方向（论文第 3.1 节，第 5 页；datasheet 第 1.1.2 与 1.1.4 节，第 2–3 页）。发布没有提供文档化的顶层 status 字段、逐记录质量 ledger、裁决流程、失败 episode 数量或预处理代码。

**发布输出与划分。** 输出包含 20 个 GZIP TFRecord shard，以及 `splits.json` 和 `test_subsplits.json`。论文表 3 报告训练集为 13,604 个 episode/74,722 步，验证集为 137/690；测试子集分别为 IDD 721/3,897、app-unseen 631/3,475、task-unseen 803/4,464、category-unseen 700/3,891。这些测试子集可能重叠，不能直接相加。对官方 manifest 的直接检查则得到 13,603 个训练 ID、137 个验证 ID 和 1,543 个测试 ID；训练集相差一条的原因仍未解决（论文第 3.3 节及表 3，第 5–6 页；官方 `splits.json` 与 `test_subsplits.json`，核验于 2026-07-20）。

**训练转换。** SeqIO 构造仅使用目标的 HL 任务，以及同时使用目标和当前 step instruction 的 LL 任务。每个输入包含指令文本、当前屏幕 accessibility tree 的扁平文本表示和动作历史；目标是下一动作。被评测智能体不使用 screenshot。对于找不到匹配 accessibility node 的 click/long-press，相关步骤仍保留在历史中，但不作为训练目标；缺少低层指令的 LL 目标也被丢弃，只有所有步骤都被丢弃时才删除整个 episode。SeqIO 还会插入仅用于训练的 `terminate(successful|infeasible)` 动作（论文第 4.1–4.2 节，第 6–7 页；附录 C.1–C.2 与 D.1，第 16–19 页）。

**模型、采样与评测。** PaLM-2S 以 LoRA 在 HL/LL 混合数据上微调。规模子集从论文所报的 13,604 条训练 episode 中随机抽取 5、10、100、1k、10k 或全部样本；少于 1k 时 LoRA rank 为 4，达到 1k 后为 64；解码 temperature 为 0，并按验证集选择最佳 checkpoint。评测信号来自离线下一动作匹配。optimizer、learning rate、batch size、训练 seed、精确 compute 和完整 checkpoint 策略均为 unknown（论文第 4.2 节，第 6–7 页；图 5 caption，第 9 页）。

因此，复现必须固定所有 shard 哈希、两个 split 文件、仓库 commit 与论文版本，并重写采集预处理、SeqIO 转换、参考动作匹配和模型训练。已检查的官方仓库只有 README 与图片，没有训练代码、预处理代码、评测脚本、配置、checkpoint、tagged release 或回放环境；论文 checklist 也明确说明未提供代码。
