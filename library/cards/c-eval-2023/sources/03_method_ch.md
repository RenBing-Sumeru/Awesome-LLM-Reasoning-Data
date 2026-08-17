1. 输入：中文多选考试题、学科标签、层级标签、选项、split 元数据、模型 prompt 和模型输出选项。
2. 构造：作者跨学科收集并整理题目，定义 validation/test 使用方式，并从较难科目中形成 C-Eval Hard 子集。
3. 评测：模型在 benchmark 描述的 zero-shot、few-shot 或 chain-of-thought prompting 设置下接收题目和选项，输出被规范化为选项标签。
4. 输出：分学科准确率、总体准确率、C-Eval Hard 准确率和模型比较表。
5. Verifier：答案键就是 verifier；没有 partial-credit 过程验证器，也没有 judge preference。

复现要固定数据版本、split 政策、当前是否使用已公开测试集标签、prompt 模板、few-shot 示例、答案抽取规则、语言设置和 leaderboard 日期。evaluation-only 记录不能未经污染审计就转成训练或 reward 数据。
