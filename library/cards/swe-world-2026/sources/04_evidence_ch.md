在 SWE-bench Verified 上，Table 2 报告 4B SFT policy 为 25.6、4B RL 为 30.0、32B SFT 为 52.0、32B RL 为 55.0、32B RL + TTS@8 为 68.2 resolve rate。32B RL 数字存在内部冲突：§6.2 正文写 54.8，而 abstract、Table 2 与官方 repository README 写 55.0。本 Card 同时保留两个值，在完成核对前只把 55.0 当作 table value。所有最终 benchmark 正确性判定都使用 SWE-bench Verified Docker harness，而非 SWR。（Paper Table 2；§6.2；Appendix E。）

Simulator 诊断显示残余误差不可忽略。相对 Docker-derived label，SWR-72B 报告 accuracy 0.770、precision 0.780、recall 0.807、F1 0.794。采用 SWT-72B transition 时，agent resolve rate 为 60.2%，采用 Docker ground-truth transition 时为 68.4%。在同为 5.7K 条 SFT trajectory 时，Docker data 得到 51.4，SWE-World data 得到 52.2；混合 9.3K 条 trajectory 得到 53.8。这些均为尚未独立复现的作者报告结果，且 mixed-data comparison 还改变了数据量。（Paper Tables 3–5。）

论文不仅给出 aggregate gain，也给出 negative result。在 4K evaluation 上，CoT 将 SWR reward accuracy 从 0.578 提高到 0.712。Figure 2 与 §7.2 显示 non-CoT SWR 会错误奖励简短无效 solution，随后优化中的 trajectory length collapse；这是 reward hacking 的直接证据，而不只是推测风险。该结果支持 reward reasoning 与 audit 的价值，但不能证明 simulated reward 在新 repository 或 adversarial policy 下仍然校准。（Paper Table 7；Figure 2；§§7.1–7.2。）

论文报告的 16,550 个 task instance 包含 310,544 行 edited lines、25,703 个 edited files、32,819 个 F2P tests 与 696,895 个 P2P tests。这些数字记录了作者声称的构造规模；由于尚未找到 task rows、26K/21K world-model examples 与 5.7K SFT trajectories 的完整发布，benchmark score 和 model weight 都不能证明底层 corpus 可独立审计或已可直接训练复用。
