既有 BoN 系统通常先完整生成候选，再用答案一致性或学习式奖励模型排序；一些高效变体也依赖外部 verifier 为局部文本打分。ST-BoN 改变的是选择边界：它在潜在空间对白盒局部轨迹做无需奖励模型的比较，并在完成生成前截断失败路径。Buffer-window 投票还把一次早期分数扩展为一段短的 selector-state 序列。

论文并未首创重复采样、self-consistency、潜在表示或 CoE。其特定贡献是把首次分歧时机、CoE 距离排序和带缓冲的早期选择组合成 BoN 解码规则，并给出显式成本分析。对本 track 而言，方向信号在于 rollout 记录可能需要非文本 selector evidence；只保存 prompt 和最终答案会抹去核心机制。可复用 trace 应保留 hidden-state 特征定义、分数方向、窗口决策、被停止候选与实际计算量。论文报告的 benchmark 增益只说明选择器在测试设置下的表现，不证明公开数据具有完整 provenance 或可靠标签。
