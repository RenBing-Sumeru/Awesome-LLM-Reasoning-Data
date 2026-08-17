主要结论的证据账本如下：

- **论文身份与版本。** arXiv 摘要页和 v2 PDF：arXiv:2510.16252，2025 年 10 月 17 日首次提交，2026 年 5 月 17 日修订；v2 使用新标题并列出 13 位作者。
- **早期 venue 记录。** NeurIPS 2025 virtual page 与 OpenReview note YHcHQY8TIY：MTI-LLM workshop poster，使用早期 browser-server 标题并列 8 位作者。
- **Observation/action 契约。** 论文 3.2–3.3 节与附录 A–B：DOM filtering、semantic identifier、五部分文本 observation、可选截图、浏览器 action primitive 和 network-aware waiting。
- **隔离与扩展性。** 论文 3.4 节和 Table 2：Incus 块级 copy-on-write；启动 1.78 s 对 8.963 s，存储 28.01 MiB 对 6.78 GiB，内存 1.74 对 1.63 GiB，并支持单机 200+ 并发容器。
- **评测范围。** 论文 4.1 节：WebArena-Lite 中 Shopping、CMS、GitLab 三类共 110 个任务。
- **RL 吞吐。** 论文 4.3.1 节：最大 512 个 rollout instance、64 张 H200、32 个 rollout worker、每步约 12 分钟、每步 200 条 rollout，平均每条 11 turn、77k token。
- **训练配方。** 论文 4.3.2 节、Table 5 与附录 C：Claude 4.5 Sonnet 做 3 epoch SFT，随后训练 Qwen3-4B/Qwen3-30B-A3B，采用带 dynamic filtering 的 GRPO，并报告 step 99 结果及优化/采样超参数。
- **论文显式局限。** v2 PDF Limitations：文本模式丢失空间布局；工作重点是环境而非 RL 算法创新；未进行大规模生产网站实验。
- **公开物清单。** 论文脚注及匿名仓库 README/file API：环境、evaluator、训练代码、MIT LICENSE 与两个 SFT 数据 part；未确认稳定的公开 GitHub 或 Hugging Face 发布。
- **SFT 选择规则。** dependencies/rl_web_agent/scripts/convert_to_sft.py：只保留成功、正分且含 reasoning 的 session；失败状态和分数不会写入发布记录。
- **Reward 实现。** web_agent/generate.py 与 evaluator.py：WebArena task score 加一次性 -0.05 格式/浏览器错误惩罚；底层包含 string、URL、HTML evaluator。
- **数据实查。** 两个官方 SFT part 按字节拼接后得到 726 条有效记录，顶层只有 messages/tools，每条 3–69 条 message，共 3,583 条 tool observation。所有记录以 assistant tool call 结束，其中 303 条为 terminate，423 条为其他浏览动作；公开记录中没有 reward、score、success、result 或 task-id 字段。

