输入包括 terminal task prompt、确定性 setup script、文件或 web/application resource、已安装命令行工具，以及 terminal-use agent scaffold。输出包括命令、日志、中间文件、最终 artifact、环境状态和 verifier score。

作者从 394 个候选任务中筛选出 120 个最终任务，移除或修订有歧义、过于简单、输入与目标不一致的任务。最终集合覆盖 document editing、email management、web information seeking、media processing 等日常数字工作，也覆盖 biology、medical physics、architectural engineering、mechanical engineering 等专家工作流。每个任务在真实 terminal 环境中运行，并经过人工检查。

verifier 是 task-specific execution-based scoring：对文件、命令输出、仿真结果、生成 artifact 或状态变化与期望条件做比较。复现必须固定 repository commit、task list、container/runtime image、安装软件、网络/live-web policy、scorer scripts、agent scaffold、reasoning effort、timeout 和 artifact path。
