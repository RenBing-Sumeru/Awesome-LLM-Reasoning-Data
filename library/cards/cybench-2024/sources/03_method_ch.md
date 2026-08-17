1. 输入：CTF 任务说明、starter files、挑战环境、可选 subtask 定义和 agent scaffold。
2. episode 循环：智能体读取任务，发出 shell 或 scaffold 专用动作，观察命令输出，并在 timeout、预算耗尽或提交 flag 前持续迭代。
3. subtask 评测：中间检查记录部分步骤是否完成，用于诊断完整解题失败时的进展。
4. 输出：最终 flag 成功/失败、subtask 完成情况、动作轨迹、命令输出和模型/scaffold 元数据。
5. 反馈契约：终端命令与挑战服务提供观察；终止谓词是 Cybench evaluator 下的 flag 正确性。
6. 复现边界：需固定 Docker/container 镜像、任务版本、scaffold、模型版本、搜索访问策略、预算、timeout、flag 泄漏修复和榜单日期。
