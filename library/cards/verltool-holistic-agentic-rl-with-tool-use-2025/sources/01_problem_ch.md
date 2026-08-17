已核验的主要来源包括TMLR/OpenReview论文、TMLR在2026年6月发布的accepted-paper记录，以及arXiv:2509.01055；该论文于2025-09-01首次提交，本卡核验的版本为2025-10-17的v3。Card以首次公开版本保留`year: 2025`，同时把正式venue记为TMLR 2026。官方代码仓库及其tagged release属于实现artifact，不能替代论文版本本身。

VerlTool处理的工程与研究缺口是：会暂停生成并调用工具的policy，需要一套在线rollout系统，为每条trajectory维护独立环境状态，在不把observation当作policy action的前提下返回工具结果，并在数学、检索、SQL、视觉推理、deep search和软件工程等异构领域附加任务特定的结果反馈。静态prompt-answer记录无法表达这一交互边界，而任务专属tool wrapper又难以支持跨领域训练基础设施的比较与复用（论文§§3.2–3.3；附录A）。

论文定义的数据对象是在线episode `tau={a0,o0,...,a_(n-1),o_(n-1),a_n}`。每个`a_i`是模型action-token片段，每个`o_i`是tool-observation片段。Tool Server为每条trajectory维护环境状态；当前代码还暴露trajectory identifier、validity、termination、turn count、stop reason与replay cache字段，但这些current-main字段不是冻结的论文时期serialization。计算policy objective时通常mask observation token（论文§3.2；当前仓库核验于commit `383d4b1539ba387f94c3a117d3edc06b467c09d1`）。

该工作属于`environment_agent_trajectory_data`，因为它说明环境如何生成并评分多轮agent行为。它在Atlas中的角色是基础设施、agent-environment接口和构造recipe，而不是已发布轨迹数据集。尚未核验到论文版本固定的六域episode corpus、总trajectory数量、成功/失败保留manifest或统一replay schema。双语正文已按L4内容深度撰写，但canonical metadata仍保持已接受的`L3_summary_ready`，等待仓库中的人工Review流程。
