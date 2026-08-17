核心贡献是 CALM：一个自动化 bias quantification framework，识别 12 类潜在 LLM-as-a-Judge 偏差，并用 principle-guided modification 测试在质量相关内容应保持不变时，judge 输出是否稳定。关键机制是受控扰动加前后评分/偏好变化测量。

数据对象不是最终答案标签，而是一组 paired 或 perturbed judge prompt，并带有目标偏差类型元数据。反馈契约是 judge 模型在每个条件下自己的输出，再由 CALM 协议转成 bias score。最接近的对比包括 LLM judge 的 position bias、length bias、self-enhancement 和 prompt sensitivity 研究。方向标签是 LLM-as-a-Judge 的 benchmark-quality/reward audit。
