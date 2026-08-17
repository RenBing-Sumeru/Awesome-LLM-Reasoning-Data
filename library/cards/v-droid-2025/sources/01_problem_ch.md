Atlas 的稳定标识仍为 `v-droid-2025`，对应论文首次上传 arXiv 的年份；本卡的规范书目信息则采用 camera-ready 版本：*V-Droid: Advancing Mobile GUI Agent Through Generative Verifiers*，正式发表于 ACM MobiCom 2026，DOI 为 `10.1145/3795866.3796681`。arXiv 摘要页仍显示旧标题 *Advancing Mobile GUI Agents: A Verifier-Driven Approach to Practical Deployment*，而 2026-02-21 发布的 arXiv v5 已使用最终标题与出版年份。保留既定 ID、同时固定 v5 身份，可避免标题与年份漂移导致不同版本的结果被静默混用（arXiv v5，第 1 页；MobiCom 2026 accepted-paper 页面）。

论文处理的是一个具体的移动智能体瓶颈：通用 LLM 自由生成 Android 动作时可能产生幻觉、给出无效坐标或消耗较长解码时间，手写动作策略又难以跨 app 扩展。V-Droid 先提取当前可用动作，再由学习得到的 verifier 判断各候选动作是否有助于完成任务。因此，核心问题是如何从 Android 交互轨迹构造逐步反馈并用于动作选择，而不是发布新的 Android benchmark，也不是用环境 reward 直接训练策略。

内部数据对象明显比公开 artifact 丰富。一条成功 episode 包含目标、逐步 UI 状态、working memory、候选动作集合、一个标注正确动作、被拒绝的其他动作、verifier 分数与熵、已执行动作、下一状态、偶发人工纠正及完成信号。P3 把一个含 N 个候选动作的状态展开为 N-1 组正确动作—备选动作偏好对。官方仓库只公开五条 `{chosen, rejected}` 完整 prompt 对；论文所述 110K 对、原始轨迹、任务/app manifest、分数向量、纠正记录、终止证据与不可变 split 均未发布，所以 `artifacts.data` 必须为 `null`（论文第 4–5 节；官方仓库 commit `8d549027634abe65a5721fe6bc3b5e84475db2f6`）。

该工作属于 `environment_agent_trajectory_data`，因为偏好由实际执行的多步 Android 轨迹产生；同时属于 `preference_reward_feedback_data`，因为监督信号是在同一状态内的成对排序，并被学习为标量动作分数。本卡依据完整 v5/v1 论文及固定版本的官方 artifact，正文达到 L4 筛选深度，但保留已接受的 `L3_summary_ready` curation level。现有证据支持研究构建配方及部分代码/模型回放，不能据此声称训练语料已公开、已获许可、已独立复现，或 benchmark 分数已经认证数据质量。
