核心设计是一组规模较小、经过人工核验的 111 道实时网页问题：答案简短且可唯一判分，但题目被刻意设计为难以通过普通 Google Search 直接解决。保留集包含 56 道 text-based 与 55 道 multimodal 问题，覆盖 108 个不同的顶级 URL。人工可行路径平均为 6.1 步，范围 3–14；平均访问 3.4 个网页，范围 1–8。这些数字描述的是作者内部 benchmark 与经验证路径，并不是公开 JSON 的字段。

预期数据对象可分为三层。task layer 包含 question、gold answer、modality/category、viable path 与 visited site；episode layer 包含 live-web observation、page visit、计算机使用系统以像素为媒介的鼠标键盘动作、关键交互、final answer 或 abstention、elapsed time 与 trajectory；feedback layer 分配 correct、wrong、no_answer 或 no_direct_answer 四类 answer label，并可折算为 binary accuracy。论文没有定义 training reward 或 dense process reward。

论文发布的正确性来自人工判断：返回答案必须直接且无歧义地蕴含 gold answer。可选的公开 autorater 把 question、gold_answer 和 model_answer 发送给 temperature 0 的 GPT-4o-2024-11-20，并产生同样的四分类标签。无论人工还是自动的 answer judgment，都不验证 agent 是否使用了预期 source、modality 或 interaction path；trajectory 与 source attribution 只用于事后分析，而不是主要 correctness verifier。

公开发布只暴露 question ID 和 question string。gold answer 按 non-commercial research 逐案提供，项目政策禁止再分发或开源。项目页也只为一个展示问题链接了三条示例轨迹。因此，公开包自身无法重建 task layer、无法单独配合 autorater 为模型打分、无法复现 56/55 类别划分，也无法重放完整的成功与失败 episode。
