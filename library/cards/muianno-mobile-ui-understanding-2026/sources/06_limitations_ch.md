正确性只相对于专家标注 schema 和 IoU/类别匹配规则成立。模型即使得分高，也可能不能真实控制手机，因为 action affordance、动态状态、accessibility 语义和 app 后果未必在元素 taxonomy 中表达。

数据是静态 iOS 截图，不是真实交互环境。它不提供多步轨迹、用户目标、可执行动作、终止成功谓词或 reward trace。论文未披露 hidden split、稳定 evaluator code commit、API serving 日期，也未完整说明商业 app 截图的再分发条款；下游训练和再分发必须单独检查 artifact 许可证和截图权利。

论文报告的 API 模型结果容易漂移，因为闭源模型后端会变；复用分数必须固定 prompt、schema、评测代码、API 日期和模型版本。公开数据也不等于有 hidden-test 保护，公开截图和标注可能进入后续训练集。

不要把它解读成通用 mobile-agent 能力证明。它测的是固定 schema 下的截图元素抽取。
