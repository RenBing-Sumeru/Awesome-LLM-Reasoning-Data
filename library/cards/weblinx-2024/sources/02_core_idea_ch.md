一句话贡献：WebLINX: Real-World Website Navigation with Multi-Turn Dialogue 把一个样本包含对话上下文、网站/页面观察、截图、HTML 或筛选页面元素、动作历史、目标下一步动作、网站 id 和 split 元数据。绑定到具体反馈契约，形成可复用对象。

核心机制：数据集记录会话式网页导航专家演示，并用页面上下文裁剪或检索来评估模型。反馈契约：离线动作/导航匹配：在 benchmark split 下判断模型是否预测专家下一步或轨迹步骤。最接近的对比对象是：单轮网页任务、静态页面问答，以及没有多轮对话的导航数据集。方向标签是 verifier-anchored agent evaluation，即可复用单元是任务对象加验收规则。
