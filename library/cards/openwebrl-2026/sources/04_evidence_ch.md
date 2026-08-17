以下benchmark与judge结果均为作者报告，尚未独立复现。在30步evaluation budget下，表2报告OpenWebRL-4B success为：**WebVoyager 74.1%、Online-Mind2Web 67.0%、DeepShop 64.0%**。这些值依赖live-site状态、Browser-Use Stealth Browser服务、model/judge版本、retry/abort处理与论文metric定义。排除aborted non-agent failure后的success是另一统计，不能与official-score success合并。

judge在held-out 500-rollout文件上的评测报告：相对GPT-4.1 label，**accuracy 89.8%、F1 92.1%**。这测量与proprietary teacher的一致性，而非human-verified ground-truth success。judge ablation更具诊断性：用naive base VLM作judge时training reward很高，但downstream evaluation崩塌；distilled judge则更接近GPT-4.1。该结果展示reward-hacking风险及judge构造的重要性，但不能认证distilled judge无错误。

公开artifact统计对已发布数据对象提供更强证据。SFT dataset包含来自412条trajectory/task的3,085个turn row，全部reward为1、status为`completed`、terminal reason为`task_completed`；failed demonstration缺失。RL-task JSONL有2,198个specification，但默认代码snapshot从2,102个task训练。Judge-13K公开train与500-example test file，却缺少公开dataset card/license，审计时也只有部分index。

论文报告主要RL run约生成54K条online trajectory，但已找到的官方发布仅包括success-only SFT trajectory、RL prompt、judge data/weight、代码与policy/SFT/judge weight。未确认包含success、failure、abort、reward、mask、optimizer step与checkpoint链接的规范化完整54K rollout manifest。因此runtime generation属于论文证据，不是已发布rollout-corpus声称。

论文人工审计100条未使用Stealth Browser服务的Online-Mind2Web失败evaluation trajectory：**51%为access/environment、27%为reasoning/knowledge、13%为visual grounding/interaction、9%为task definition/judge issue**。这给出具体failure category，但100条record-level trace未确认公开，且抽样条件不同于official hosted-browser evaluation。
