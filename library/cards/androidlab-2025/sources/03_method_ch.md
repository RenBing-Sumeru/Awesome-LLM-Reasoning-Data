输入首先来自论文引用的 academic dataset（包括 Android in the Wild 和 SNIPS）及人工编写 instruction。未披露的 language model 扩展 seed，人工再审核 realism、feasibility 与 executability。source proportion、expansion prompt、generator snapshot、deduplication 以及 accepted/rejected task count 均为 unknown。

采集和筛选 pipeline 如下：

1. Autonomous 与 manual process 总共产生 10.5K 条 trace / 94.3K 个 step；这是 broad collection pool，而不是 SFT set。
2. Human annotator 先检查 feasibility、熟悉 app，再借助 ADB/ADB Keyboard 在实体 Android phone 上执行任务。工具将 screenshot、page XML，以及 click、swipe 或 text-input operation 记录到 trace log。phone、Android、app、account、network 和 reset version 均未固定。
3. 约 500 条人工标注的 positive/negative trajectory 用于训练 completion classifier；第二位 annotator 与该 reward model 对收集到的人工 trace 进行 cross-verification。model architecture、checkpoint、split、calibration、threshold 与 adjudication detail 未披露。
4. Self-exploration operation data 被移出 SFT。经过 feasibility review、privacy masking、cross-verification 和 app membership 筛选后，从 benchmark 相同的 9 个 app 中选出 726 条人工 trace / 6,208 个 XML step；转为 SoM observation 后剩余 6,053 个 step，因为无法转换的特殊页面被删除。
5. LlamaFactory 或 Swift 用于 fine-tune Llama-3.1-8B、GLM-4-9B、Qwen2-7B、Llama-3.2-11B-Vision、Qwen2-VL-7B 与 CogVLM2。camera-ready 报告 batch 32、maximum sequence length 4,096、learning rate 1e-5 和 5 个 epoch；官方仓库指南报告相同 learning rate，但为 3 个 epoch。精确复现必须保留这一 3-vs-5 epoch 冲突，不能静默任选其一。

正式评测从指定 app 内开始，使用 greedy decoding，最多允许 25 个 step，device response interval 为 3 秒；每个任务都在 fresh cloned AVD/emulator 或 new Docker container 中运行，结束后停止或删除实例。当前官方 config 指向 Pixel 7 Pro / Android API 33；代码固定 geolocation 与 date（Maps.me 例外）。operation task 使用 UI-tree/device predicate，query task 使用 GPT-4o-2024-05-13 或 GLM-4 的 answer judgment。

复现时必须固定 repository commit、SFT archive 及 hash、Docker/AVD image digest、Android/emulator/Android Studio version、APK/app version、base snapshot 与 reset state、time/location/account/network condition、6 个 model revision、trainer config、judge prompt/API snapshot 和 random seed。train/validation/test split、item/template decontamination 以及与 138 个 benchmark task 的 trace-level overlap 均为 unknown；app-level overlap 则是明确事实。
