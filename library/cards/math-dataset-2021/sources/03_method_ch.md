1. 输入：竞赛数学题、subject/difficulty 元数据、完整解答和 boxed final answers。
2. 流程：将题目整理成 train/test split，保留 solution 和 answer 字段；评测时固定 prompt，让模型作答，抽取最终答案并与参考答案比较。
3. 输出：数据集记录，以及按 split、subject、difficulty 汇总的模型准确率。
4. 验收：可用归一化和符号/等价逻辑做 final-answer checking；等价形式不明确时需要人工复核。
5. 复现边界：固定数据集 release、train/test split、answer parser、grader implementation、prompt 格式、decoding budget，以及是否使用 MATH-500 等过滤子集。
