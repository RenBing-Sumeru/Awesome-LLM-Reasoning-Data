正确性只相对于 gold workbook、目标 cell、preservation rule 和 visualization checklist 成立。Modification 通过不等于整个业务 workbook 语义完全可靠；反过来，task-level Accuracy 很严，一个关键 cell 错误就可能让整题失败。

复用有多个隐藏假设。论文附录称 dataset 为 CC BY-SA 4.0、evaluation code 为 MIT，但 Hugging Face metadata 显示 MIT，因此 artifact-level license 需要核验。任务来源是公开业务/金融材料，但 raw source documents 并未完整再分发。Visualization 评分依赖 Excel/WPS COM 导出和 GLM-4.6V judge。API 模型版本、scaffold 实现、turn budget、无网络 Docker、spreadsheet 引擎，以及未确认 train/dev/test split 都会影响可比性。
