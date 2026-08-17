1. 输入：问题或目标 key、标准答案或 value、上下文预算，以及证据应放置的位置。
2. 流程：multi-document QA 把含答案文档插入干扰文档序列；synthetic key-value retrieval 把目标 pair 放到受控位置。
3. 输出：模型最终答案、归一化正确性、按位置和上下文长度汇总的 accuracy 曲线。
4. 验收：官方评测脚本用已知答案判定最终回答正确与否；它不产出过程轨迹标签，也不是 reward model。
5. 复现边界：比较分数前要固定 GitHub commit、生成的 QA/KV 文件、prompt 模板、上下文长度、document/key 数量、答案归一化和随机种子。
