task 构造从常见 system、Google 与 third-party app 开始。annotator 编写或规范化日常 instruction；多数英文 cross-app task 来自 GUI Odyssey，必要时重写 description 并重新收集 trajectory。对每个 task，人类执行相邻 screenshot 之间只有 1 个 action 的 reference sequence，统计 golden step，并为 single-app task 标注 final-state key text。MLLM 生成带 `history`/`memory` 的 cross-app subtask，再由人类审核。

annotator 交叉检查 instruction clarity、reference-trajectory accuracy 与 final key component，随后在不同 Android device、Android version、app version 上测试任务，并在实验前重新验证。release 包含最终 4 个 CSV 分层和 40 个 cross-app JSON，但不包含 candidate/rejection 决定、annotator assignment、disagreement record、validation log 或逐条 GUI Odyssey attribution。

评测时，多进程 framework 通过 ADB 把集成 agent 连接到 emulator 或 physical device。agent 观察 screenshot 和自身支持的 XML/accessibility/OCR 表示，执行 tap、long press、swipe、text input、navigation 或 composite action，并生成本地 screenshot/log。论文运行最多允许 human golden step 的 2 倍 action；不能用当前示例配置 `MAX_ROUNDS: 0` 替代论文 protocol。

执行在 self-reported completion、maximum step 或 error 时停止。意外 network、Android 或 CAPTCHA failure 会自动 rerun；invalid action 与预期 agent limitation 计为 agent error。论文没有发布 attempt count、seed 或 rerun selection ledger，因此无法重建环境不稳定与 agent failure 的划分。

evaluation 与 execution 分离。single-app run 先经过逆序 PaddleOCR key matching，再由 GPT-4o 判断；cross-app run 经过 ordered-app segmentation、顺序 subtask judgment 与 memory propagation。本地 framework 记录 `S`、`F` 或 `E`、detail、screenshot、step、time、cost、finish/exit field 与 evaluator output，并可 resume incomplete session。论文运行的 result 或 trajectory directory 均未公开。

reset 发生在实验 cycle 层级，不能证明逐 task 隔离。论文在每个实验 cycle 恢复 snapshot，并在已分配任务后 reset emulator；外部服务保存的 state 可能需要人工清理。WhatsApp/OneNote 英文任务与多数中文任务使用不支持 snapshot 的 physical device。公开代码可以 clone 用户提供的 AVD，并以 `-no-snapshot-save` 启动副本，但仓库没有提供 AVD/snapshot blob、APK/app/account manifest 或完整 environment image。
