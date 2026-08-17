本卡以arXiv:2606.02031v2为规范来源，并辅以`paper.yaml`所固定版本的官方OpenWebRL项目页、代码仓库、SFT Trajectories、RL Tasks、Judge-13K与模型发布。OpenWebRL处理的系统与数据问题是：如何让视觉Web智能体在live website上进行online multi-turn reinforcement learning，而不只克隆offline demonstration。

主要agent episode从instruction与start URL开始。每一turn，policy接收当前browser screenshot、active URL、viewport、tab与规则生成的文本environment feedback，并输出reasoning及一个或多个结构化browser tool call。主要context policy只保留一张当前screenshot，同时以文本保存先前reasoning与environment feedback。episode在`done`、step-budget耗尽或environment/infrastructure/generation/format failure时结束；仅调用`done`不能证明任务成功。

必须区分三类发布数据对象。SFT发布包含**3,085个turn-level prompt/response example，按412条成功完整trajectory分组**；所有top-level reward均为1，status与terminal reason均表示成功完成，因此没有failed demonstration。RL发布包含**2,198个task specification**——1,464个`insta-v3`与734个`pae-webvoyager`——但没有action、screenshot、reward或terminal state。Judge-13K提供judge train data与500-example test file，而论文报告的主要RL训练约**54K条online policy trajectory**尚未确认形成公开语料。

OpenWebRL归入`environment_agent_trajectory_data`，因为它公开task、observation、action、environment feedback、terminal status、whole-trajectory reward与optimizer use。它不是单一同质数据集：success-selected SFT turn、RL prompt、judge example与临时online rollout具有不同retention、replay、split与rights性质。双语正文达到待人工审核的L4深度，canonical metadata保持`L3_summary_ready`与`status: partial`。
