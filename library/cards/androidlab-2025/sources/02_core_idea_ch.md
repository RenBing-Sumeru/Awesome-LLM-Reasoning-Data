AndroidLab 把筛选后的 Android demonstration subset 与具有可执行或 judge-based terminal feedback 的 benchmark 连接起来，使 observation/action schema、collection filter 和 success contract 可以在同一系统中审计。

它的训练对象是包含两种 observation mode 的人工 state-action trace。XML mode 提供 task、history 与压缩后的 UI XML；SoM mode 提供 task、history 与带编号可选元素的 screenshot。两种模式都监督针对 Tap、Type、Swipe、Long Press、Home、Back、Enter、Wait 和 Finish 的 function-call action。LLM/VLM self-exploration 参与了更大的采集流程，但其 operation data 被明确移出 instruction fine-tuning；只有由此训练出的 reward model 被保留到下一标注阶段。

feedback contract 分为三层。采集阶段由第二位 annotator 和 trajectory-level completion reward model 交叉核验人工 trace。benchmark 的 operation task 使用 hand-coded predicate 检查 page/UI-tree field，并在部分任务中检查 ADB/device state；所有所需 subgoal 成立才算成功。query task 则由 GPT-4o-2024-05-13 或 GLM-4 判断通过 Finish 提交的答案是否与 standard answer 语义一致，helper logic 最多允许 5 次 retry。Finish 或 25-step 上限会结束生成，但二者本身都不能证明 evaluator success。

AndroidWorld 是论文对比的独立 116-task/20-app、带 reward benchmark；AndroidLab 拥有自己的 138-task/9-app AVD suite 和 instruction-tuning pipeline。现有证据未把 AndroidControl 建立为 AndroidLab lineage，V-Droid 则是后续工作而非 AndroidLab 组件。因此最接近的方向性差异，是把 training trace、可 reset 的 Android state、operation predicate 与 query judgment 联合起来，而不是对所有 Android-agent 数据或评测方法的归属主张。
