该 benchmark 可用于选择视觉 judge、训练多模态 reward model，或比较 pairwise 与 pointwise 评价协议。实际系统应优先报告 HARD 集、位置交换一致率和视觉证据引用正确性，不能只看总体偏好准确率。若用于数据筛选，可组合多个裁判或加入对象检测、OCR 等工具验证，避免 judge 与生成模型共享同类幻觉而形成错误共识。
