产物证据是具体可核验的。官方 collection 链接两个 8B 检查点、SFT-874K、RL-74K、项目页与 arXiv。SFT Hub API 显示 5 个 train 配置,合计 874,357 行:OpenVLThinker-sft-iter3 为 22,229 行、WeMath 为 6,944 行、llava_cot 为 553,806 行、m1_sft 为 91,953 行、mmr1 为 199,425 行;其 schema 可确认 `id` 与嵌套多模态 `messages`。RL viewer 则显示围绕共同任务接口的各来源 schema,其中 `reward_model` 是包含 `ground_truth` 与 `style` 的结构;所检查的首行均使用 `style: rule`。

RL 发布边界也可直接观察。7 个配置具有 train split:algopuzzle、mmk12、thinklite_vl_hard、tqa_train、virl39k、wemath_pro 与 wemath_standard,API 计数合计 72,971 行。第 8 个配置 `validation` 是 1,724 行 `val` split,包含 `extra_info` 且没有 `avg_reward`;二者合计形成 collection 页面所示的 74,695 行。公开字段中没有在线回答、rollout ID、抽取答案、judge 输出、组奖励或策略更新引用。

论文在 3 个层面报告下游证据。经验证 SFT 答案采样从每个来源问题 1 条扩展到 8 条后,3 个 benchmark 的平均值从 50.5 升至 55.2(论文 Table 3;补充材料 Table 2);再混入图像数学与文本数学数据后,同一平均值从 55.2 升至 56.3(论文 Table 5)。在选定跨域 cold-start 设置下,使用 16 条 rollout 的 GSPO 平均值为 54.3,无 RL baseline 为 49.4,且作者报告其比 GRPO 和 DAPO 更稳定(论文 Table 7 与 Figure 4)。最终模型相对 Qwen2.5-VL-7B-Instruct 在 9 个多模态 benchmark 上被报告提升 11.6%;纯文本评测中,baseline/cold-start/RL 在 AIME24、AIME25 与 GPQA-Diamond 上的平均值依次为 15.1/22.2/29.4(论文 Table 8)。

这些结果支持"该配方在作者设置下是一项有效训练干预"。它们不能证明每条 SFT rationale 都忠实、每个 `avg_reward` 都可复现、每个 ground truth 都正确,也不能证明所有上游记录均无污染且许可兼容。论文中的定性轨迹与 rollout 词云是选定分析,不是发布数据的逐记录验证。
