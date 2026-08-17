在 103 条 text-only GAIA validation 问题和 680 条 WebWalkerQA test 问题上，论文使用 LLM-as-judge Pass@1 评测；Table 1 报告 WebDancer 相对同 backbone vanilla ReAct 的一致提升。Qwen2.5-7B WebDancer 的 GAIA average 为 31.0，对照为 18.4；WebWalkerQA average 为 36.0，对照为 24.2。Qwen2.5-32B 对应结果分别为 40.7 对 31.0、38.4 对 31.9。QwQ-32B 分别为 51.5 对 37.8、47.9 对 24.1。这些是作者报告的 live-agent 结果，尚未独立复现。

论文最佳模型在 GAIA 与 WebWalkerQA 上的 Pass@3 分别为 64.1% 与 62.0%。Figure 4 显示，RL 对非 reasoning Qwen 模型的 Pass@1、Pass@3 和 Consistency@3 改善更明显；QwQ 的增益较小，作者将较弱信号与超长轨迹产生的 sparse reward 联系起来。一个不经过 SFT、直接开始 RL 的冷启动消融在 GAIA 上只有 5% Pass@3，支持“先用轨迹 SFT 学会交互格式，再进行 on-policy 优化”的主张。

Table 3 展示了迁移权衡。QwQ-32B 使用 Long-CoT SFT 时取得 58.25 Pass@3 与 39.66 Consistency@3，Short-CoT 对应为 44.66 与 28.33；但 invalid rate 从 0.97% 上升到 13.27%。Qwen2.5-7B 与 Qwen2.5-32B 在 Long-CoT 下的 invalid rate 也分别达到 21.36% 与 13.59%，高于 Short-CoT 的 0.65% 与 4.20%。这支持的是数据格式层面的结论，不能推成“推理越长越好”。

Figure 3 比较 open-only、CRAWLQA-only、E2HQA-only、三者全集以及最终过滤子集；在论文报告的 low-data 设置下，最终 6,550 条 Long-CoT 数据优于更大的未过滤方案。Figure 5c 显示结果对 0.5–0.7 decoding temperature 不太敏感，并把更多波动归因于 live-web 非平稳性。由于完整数据与历史环境没有公开，这两项解释仍属于作者主张。（论文 Table 1、Tables 2–3、Figures 3–5、Appendix E。）
