以往移动自动化常依赖结构化 UI tree、app API 或窄脚本流程。Mobile-Agent 改变的是评测对象：以截图作为主要观察，并评估完整手机任务轨迹。

方向信号是：移动 GUI agent 需要感知 grounding 的状态、动作坐标、执行历史和任务级反馈，而不是最终文本答案。质量信号是官方论文和持续维护的系列仓库把 Mobile-Agent 变体与 Mobile-Eval artifact 放在一起。

不新的部分包括 OCR、图标检测和 LLM step planning。复用前要检查 app/task license、仓库 revision、设备设置、模型后端、prompt、step budget，以及 Mobile-Eval 标签是否足以支撑目标审计。
