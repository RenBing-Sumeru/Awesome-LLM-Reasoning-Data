SPA-Bench 的核心机制是把双语 task collection 与 live Android execution harness 连接起来，并用不要求 action 精确匹配的 outcome evaluator 评分。agent 接收自然语言 instruction，通过自身支持的表示观察 device，借助 ADB-integrated tool 执行动作，并在 self-reported completion、action budget 或 error 时停止。

对 single-app task，PaddleOCR 逆序扫描 screenshot，寻找全部标注的 final-state key component。只有通过这一 coarse gate 的 trajectory 才进入 GPT-4o evaluator；judge 接收 task、screenshot 与可选 action information。若 trajectory 有 0 张 screenshot，则返回 error `-1`。这种设计可以接受多种 action path，但 OCR string 本身不能证明目标 state transition，model judge 也仍具有随机性。

对 cross-app task，GPT-4o 先按预期 app 顺序分割 screenshot trajectory，拒绝缺失、无效或顺序错误的 segment，再依次判断经过人类审核的 subtask。MLLM 抽取的 memory 可在 subtask 间传播。这支持跨 app 依赖，同时也把预期 app order 与模型生成 memory 写入 verifier contract。

主要信号是二元 success/failure，另有 successful-run step ratio、termination reason、premature/overdue termination、execution time 与 API cost。completion belief 与 evaluator success 分离，因此能识别过早停止或成功后继续操作。它是 terminal evaluation score，而不是已展示的 policy-training reward 或 step-level correctness label。

论文贡献是耦合多语言 live-app task、异构 observation/action interface、human golden-step reference、混合 deterministic/model evaluation 与 termination diagnostic。它没有发布人类 demonstration 或实验 episode，也没有解决不可变 mobile-state replay。已发布可复用对象是 340 个 task definition、40 个 cross-app subtask JSON、framework/evaluator code 与本地输出 schema。
