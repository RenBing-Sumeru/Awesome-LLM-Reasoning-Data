1. 输入：大规模众包对话、prompt 过滤规则、模型 endpoint、baseline answer set、judge 模型和评测配置。
2. 流程：BenchBuilder 筛选 hard prompt；模型生成答案；`gen_judgment.py` 调用 judge 做成对偏好判断；`show_result.py` 汇总分数和置信区间。
3. 输出：prompt set、模型答案、judgment records、胜率和 benchmark-quality 指标。
4. 反馈契约：judge 给出 pairwise preference；论文再用与人类偏好排名的一致性和 separability 指标验证 benchmark 质量。
5. 复现边界：固定 Arena-Hard 版本、prompt set、judge、baseline、style-control features、temperature、回答预算和 endpoint 日期。
