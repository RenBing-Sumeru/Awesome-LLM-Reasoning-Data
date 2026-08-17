不要把 OmniGUI 读成端到端自主 agent 成功率 benchmark。它的协议是每一步 teacher forcing，衡量的是 ground-truth history 下的感知到动作预测。TM、EM、SR、GP 必须分开：TM 高可能仍然坐标错，SR 低也可能包含很多单步正确。

建议先读任务 taxonomy 和评测指标，再看 leaderboard。比较论文或模型时要记录用的是论文 709/2,579 口径，还是公开过滤版 708/2,572 口径，并说明 audio/video 是否被纳入或消融。
