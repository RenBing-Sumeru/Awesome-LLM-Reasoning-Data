Eval-Instruct 可作为构建专用 judge 数据的参考流程：先扩展任务，再采样多质量回答，最后生成结构化 critique。发布数据适合训练 generative reward model、反馈模型和数据筛选器，也可将 critique 用于 SFT 修正。复用时应加入人工抽检、事实工具和多教师标签，并分别评估评分一致性、错误定位与下游修正增益，避免只追求模仿 GPT-4 文风。
