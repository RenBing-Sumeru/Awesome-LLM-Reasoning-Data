1. 输入：benchmark question、发布包中隐藏或加密的参考答案字段、相关网页/媒体证据，以及被评测的 browsing-agent scaffold。
2. 流程：agent 搜索或导航网页，打开候选页面，读取文本，必要时检查图片或视频，整合证据后返回简短答案。
3. 输出：最终答案文本、可选浏览轨迹/日志，以及官方 evaluation script 或 judge 路径给出的分数。
4. 反馈契约：官方仓库使用参考答案和 checklist/judge prompt，并固定 LLM judge；网页导航只是取证环境，不是唯一评分器。
5. 复现边界：必须固定数据版本、解密/明文处理策略、judge model 与 prompt、浏览器/搜索工具、访问日期、媒体可用性和 API/tool 预算。
