以下性能数字均为作者报告，尚未被独立replay。在三倍golden-step预算且每个动作后等待三秒的条件下，UI-TARS-1.5-7B是表5最强baseline：Base SR 60.97%、Long-Tail 41.76%、Long-Horizon 15.00%、GUI-Reasoning 38.33%、Noise-Robust 56.77%；对应Sub-SR依次为64.84%、46.32%、45.25%、40.83%和62.18%。15.00%的Long-Horizon结果最直接支持“完整多子任务执行仍很困难”，但不能证明每次失败都源于reasoning，而非grounding、verifier、状态或预算因素（表5）。

verifier在1,080条UI-TARS-1.5 episode上与人类标签进行校准。表12报告534个true positive、5个false positive、22个false negative和519个true negative：总体一致率97.50%，Auto-Eval SR为49.91%，人类SR为51.48%。对于复用，27处分歧比总体accuracy更重要：false positive会成为verifier-gaming机会，false negative则会丢弃有效行为。Long-Horizon在仅60条样本上恰好达到100%一致，不能向更广场景外推。

reset验证在Base、Long-Tail、GUI-Reasoning和Noise-Robust上执行255项task-level/app-level reset task。表13中人类判定成功率分别为96.92%、94.35%、95.65%和92.31%，Auto-Eval估计接近但并不相同。这些结果只支持“逆任务通常能恢复可观察状态”，不能证明bitwise状态恢复，也没有覆盖Long-Horizon reset，更未消除账户/服务器漂移和不可逆动作。

预算会改变表现。在Base上，UI-TARS-1.5的pass@1/3/5为60.97%、69.03%和73.87%；Qwen2.5-VL为17.10%、31.29%和39.35%（附录H.3、表20）。因此分数必须同时报告retry次数，比较时不能把single-run SR与best-of-k成功率混在一起。

发布物可核实但不完整。官方data tree包含310条Base、340条Long-Tail、60条Long-Horizon和60条GUI-Reasoning任务记录及reset文件；README说明了本地轨迹输出。GitHub还提示`longtail.csv`第118行存在非法引号。仓库没有冻结baseline结果bundle，也没有每任务至少五条的验证轨迹。论文在两个月后更新应用时观察到的分数波动不超过5%，这证明了版本敏感性，而非消除了版本漂移（附录A.2）。
