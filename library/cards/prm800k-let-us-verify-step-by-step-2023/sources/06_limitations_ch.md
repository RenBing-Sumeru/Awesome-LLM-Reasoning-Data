# 06 局限

正确性只相对于标注说明、标注者判断和答案 grader 成立。positive step label 不等于形式化证明，最终答案正确也不证明所有中间步骤有效。数据围绕 MATH 题目和模型生成解构建，不能自动外推到其他领域或 formal proof checking。

官方仓库已归档，并使用较大的 LFS 数据文件；精确数据版本和 split 必须固定。论文因为原始 MATH test set 的一部分进入训练分布而使用非标准 test split。公开发布也会带来污染风险。release 提供数据和工具，但不能完整复现每个内部模型、采样运行和标注操作。
