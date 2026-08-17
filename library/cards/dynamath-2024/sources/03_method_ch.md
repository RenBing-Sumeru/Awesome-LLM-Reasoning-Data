1. 输入：501 个 seed question、每题对应的 Python program、random/NumPy seed、绘图或固定图像函数、生成的图文题、VLM 预测和生成答案。
2. 流程：筛选 visual-math seed；把每个 seed 转成 Python program；按数值、几何、符号、图结构、颜色或语境变化生成 variants；查询 VLM；解析/评分答案；汇总 concrete-question 与 per-seed 表现。
3. 输出：具体图文题、生成 ground-truth answer、模型响应、average-case accuracy 和跨 seed variants 的 worst-case accuracy。
4. 反馈方：生成答案和答案匹配/评价脚本；program generator 是 ground truth 的证据边界。
5. 复现边界：要固定仓库 revision、Docker 环境、generation range、default random seed、default NumPy seed、绘图 backend、answer parser、每个 seed 的 variant 数、模型 snapshot 和 prompt format。
