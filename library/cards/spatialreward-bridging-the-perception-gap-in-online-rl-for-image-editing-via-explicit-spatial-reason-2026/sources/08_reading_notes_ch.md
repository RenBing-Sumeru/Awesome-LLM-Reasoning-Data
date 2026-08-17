1. **一句话定位：**图像编辑在线RL缺少可靠细粒度奖励，现有evaluator会出现AttentionCollapse，忽略原图与编辑图的局部差异。
2. **方法抓手：**关键动作依次是构造空间 grounding 编辑记录、预测相关编辑区域、推理局部变化与保留内容，最后完成在在线 RL 中使用 SpatialReward。
3. **数据抓手：**SpatialReward在260K空间感知数据上训练，显式预测编辑区域并基于像素证据推理，再输出编辑奖励。
4. **证据锚点：**在MMRB2、EditReward-Bench和MultiEditReward-Bench达到SOTA；
5. **复用决定：**区域标签与reasoning多为自动构造，可能漏掉全局风格或非局部编辑；
