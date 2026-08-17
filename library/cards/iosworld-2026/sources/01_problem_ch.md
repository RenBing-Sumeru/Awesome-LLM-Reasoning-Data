本卡的主要来源是2026年6月8日提交的arXiv:2606.09764v1、官方项目页，以及在提交`e91f4cb2ef4c9dd48fef83a894477b41fd5e209d`上检查的官方仓库。已核实的发表状态为arXiv预印本；尚未定位到确切的ICML 2026 AIWILD workshop forum条目。

iOSWorld针对一个具体评测缺口：手机智能体可能完成孤立的界面动作，却会在任务依赖分散于金融、消息、旅行、餐饮、生产力等多个应用中的个人状态时失败。为此，基准把虚构人物Jordan Avery置于26个互联SwiftUI应用中，并提供133项第一人称任务：27项single-app、60项multi-app、46项memory/personalization任务。已发布的`tasks.json`共有1,123条rubric criterion，每项任务含4-13条，均值为8.4条。

正式发布的canonical object是task/rubric与确定性seeded simulator environment。runner生成的episode在此基础上加入截图或截图加XCUITest观察、动作、可选reasoning/messages、最终状态与答案、逐criterion判断、rubric fraction和严格pass/fail。它因此属于`environment_agent_trajectory_data`：任务状态、观察/动作交互、重置、episode记录和终态反馈被一并定义。

边界同样关键。仓库已发布26个应用、seed fixture、任务清单、runner、evaluator、MCP server和AWS EC2 Mac辅助工具，但没有公开完整实验的成功/失败rollout语料；官网只展示16条精选的Opus 4.6 vision+XML轨迹。论文仅评测智能体，没有报告使用iOSWorld episode进行SFT、RL、偏好学习、reward-model训练或agent training。这些来源足以支撑L4深度的双语筛选正文，但accepted workflow metadata仍应保持`L3_summary_ready`，训练复用也不在证据范围内。
