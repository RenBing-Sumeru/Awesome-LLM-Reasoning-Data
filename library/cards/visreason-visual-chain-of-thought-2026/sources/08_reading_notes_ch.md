1. **定位：**VisReason 提供大规模、多轮且有区域依据的视觉 CoT。
2. **方法：**整理任务、生成分步 rationale、标 AOI/深度并过滤。
3. **数据：**VisReason 489K；VisReason-Pro 165K，含更强 3D grounding。
4. **证据：**微调后步骤推理、解释性和跨 benchmark 泛化均改善。
5. **复用：**适合视觉 SFT/PRM；先审计 AOI、深度与教师偏差。 复用时应在未见视觉域同时核对答案、步骤和区域—文本对齐准确率。
