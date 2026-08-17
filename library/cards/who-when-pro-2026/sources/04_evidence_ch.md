Table 4 使用 all-at-once protocol 评测 10 个 frontier model。在文本轨迹上，Qwen3.5-122B 的责任智能体准确率和精确步骤准确率最高，分别为 57.5 与 73.9；GLM-5 的错误模式 macro-F1 和 Joint 准确率最高，分别为 22.2 与 25.3。在图像轨迹上，Qwen3.5-122B 的 agent accuracy 为 70.4，GPT-5.4 的 step accuracy 与 Joint 分别为 65.2 和 30.2，Claude Sonnet 4.6 的 error F1 为 29.5。在视频轨迹上，GPT-5.4 的 agent accuracy 为 85.1，Claude Sonnet 4.6 的 step accuracy 为 64.4，Gemini 3 Flash 的 error F1 为 40.0，Llama-4 Maverick 的 Joint 为 30.4。没有模型在所有指标和模态上占优。

失败面随模态变化。Figure 4 汇总的文本、图像和视频 step accuracy 分别为 69%、62% 和 60%，error-mode accuracy 则从 17% 增至 24% 和 37%。Planning、verification 与 coordination 根因经常被归为 reasoning 症状。轨迹长度也是重要边界：代表性模型的 step accuracy 从低于 3K token 时的 94% 降至高于 12K 时的 50%。这些都是作者在尚未公开的记录和预测文件上报告的结果，未经独立复现。

Protocol 消融使用含 1,444 条轨迹的 stratified subset。All-at-once 在 10 个模型中的 8 个上取得最高 Joint，并比 step-by-step 的 step accuracy 高 7.6 个百分点。把精确定位放宽到 Step@1 后，文本、图像和视频的平均增益分别为 13.9、16.9 和 28.1 点；进一步放宽到 Step@2 的增益分别为 4.4、6.0 和 2.6。这说明视频上的许多错误属于相邻步骤偏差，而 step-by-step 容易在标签步骤之前过早提交判断。

Ground-truth answer 并不总是有帮助。§4.5 与 Appendix B 表明，提供答案会改善 perception-error 分类，但会降低 reasoning-error 分类或使其不变：judge 可能通过终局不匹配走捷径，并跳过更早根因。人工验证也独立揭示标签不确定性。在 100 条分层轨迹和 3 位标注者上，step、multi-agent agent 与 error family 的多数通过率分别为 94%、90% 和 90%；2% 没有清晰决定性错误，Fleiss' kappa 为 0.73。

最强的 artifact 证据是一项负面发现。Appendix A 称所有轨迹、标签与评测代码均已发布，但官方 GitHub README 明确表示数据和评测代码尚未公开，仓库中也没有实现或记录。这一矛盾本身不能推翻论文实验，却使读者无法在 manuscript 之外核验任何结果、split、标签修正、evaluator 决策或规模主张。（Tables 3–4；Figures 4–7 与 12–14；官方仓库。）
