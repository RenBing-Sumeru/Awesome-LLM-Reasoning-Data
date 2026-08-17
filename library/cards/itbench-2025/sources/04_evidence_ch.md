以下结果均为作者报告，尚未独立复现。最终论文的SRE评测包含42个场景，其中21个有trace、21个无trace，每个场景/模型运行10次。表4报告GPT-4o的**diagnosis pass@1为13.81%**、**mitigation pass@1为11.43%**。常见摘要中的11.4%对应mitigation而非diagnosis。模型最多使用128K context，GPT-4o checkpoint为`2024-11-20`；结论取决于论文的模型版本、tool wrapper、环境状态、retry政策与场景ground truth（论文§4.1–4.2、表4，第6–7页）。

CISO评测覆盖50个场景，每个模型运行8次；FinOps覆盖10个场景，包括data-insight、anomaly-detection和alert-driven任务（论文§4.3–4.4、表5–6，第8页）。这些实验表明环境能够覆盖多个运维领域并暴露较低成功率，但不能独立验证场景ground truth，不能证明发布轨迹适合训练，也不能说明更高benchmark分数代表更高数据质量。

论文的轨迹分析提供了failure evidence，而不只有leaderboard数值。instrumented run记录planning agent与tool的input/output，包括ReAct thought。图5和§5.1列出invalid tool、错误argument、重复调用、syntax error和execution failure。附录同时给出成功与失败的CISO episode；一个失败示例达到maximum retry后仍留下无效Rego。这些观察说明应保留负例和中断episode，但示例轨迹不等于完整公开语料。

对官方发布的检查还给出一项关键negative result。ITBench-Trajectories dataset card把发布描述为105条完整SRE trajectory，但固定版本的官方仓库树包含**105个`session.jsonl`，却只有90个`agent_output.json`和90个`judge_output.json`**。因此有15个session目录同时缺少最终输出与judge artifact。已评分失败也被保留：检查到的`Scenario-1/1/judge_output.json`在核心诊断分数上均为0，同时保留ground truth、prediction、计算和justification。该差异支持审计与失败分析，但也阻止把“105个session”解释为“105条完整已评分episode”。

最后，论文说明最终102个场景中只有**11个公开，91个保留用于提交智能体的评测**。这是论文期public/held evaluation access split，不是模型训练split。Lite的`scenarios`打包方式和Trajectories在Hugging Face中名为`train`的split也不能证明存在随机或泄漏受控的train/evaluation partition。
