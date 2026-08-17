1. 输入：任务指令、可选图片/表格背景、下载并处理的数据文件、agent/model 系统和任务特定评价脚本。
2. 流程：获取 competition/source 数据；用仓库脚本处理或使用官方 processed archives；在 data analysis 或 data modeling notebook 中运行模型/agent；保存预测、成本、时间和生成工件；再运行官方 scoring scripts。
3. 输出：预测答案、建模提交或 performance 文件、逐任务正确性或 competition metric、汇总 solve rate、Relative Performance Gap 和执行记录。
4. 反馈方：data analysis 使用 `compute_answer.py` 和 `show_result.py` 处理保存预测；data modeling 使用 `score4each_com.py` 和对应任务指标。analysis 路径需要 OpenAI key，因此 judge/model 版本属于反馈契约的一部分。
5. 复现边界：要固定 data archives、Kaggle/Eloquence 来源版本、evaluation notebooks、API 模型名、judge prompt/code、metric scripts、runtime budget、文件访问权限和 leaderboard 日期。
