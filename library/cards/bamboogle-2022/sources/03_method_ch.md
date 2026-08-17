1. 输入：组合 QA 样本、可选的分解子问题、模型 prompt 格式，以及可选的搜索引擎。
2. 流程：用直接 prompting 或 elicitive prompting 提问；self-ask 格式要求模型先判断是否需要 follow-up question，再写出 follow-up、intermediate answer 和最终答案。
3. 输出：最终答案、可选 follow-up 轨迹、子问题结果，以及准确率/组合缺口聚合指标。
4. 验收者：短答案正确性是终止判据；gap 指标还检查“子问题答对但最终组合答案答错”的情况。
5. 复现边界：必须固定 Bamboogle sheet/export、prompt 示例、模型/API 版本、搜索引擎日期、答案归一化规则和人工评分政策。
