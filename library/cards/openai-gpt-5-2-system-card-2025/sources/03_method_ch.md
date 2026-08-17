已披露 pipeline 必须拆成三个不可互换的层。

**训练：** 三类宽泛来源经过高层质量/风险过滤、个人信息减少与有害内容分类。Reasoning model 接受未披露 RL；GPT-5.2 Thinking integrations 接受未披露 cyber-safety training。记录成员、CoT、反馈、reward、verifier、rollout、optimizer、schedule、compute 与 lineage 均未知。

**评测：** 安全 prompt 使用 policy/LLM grader；deception study 对 pre-release A/B traffic 使用 reasoning-based CoT monitor；2026 monitorability 更新使用 GPT-5 Thinking monitor、g-mean-squared 与 cross-fit filtering。Agent environment 以 secret flag、hidden test、rubric completion 或 pass metric 评分。Professional CTF 使用 16 rollouts 并报告 pass@12；Cyber Range 使用 16 trials，任一成功即通过；CVE-Bench 报告 pass@1。OpenAI PR 只有所有 hidden tests 通过才成功。MLE-Bench 提供 24 小时，部分实验至 100 小时；PaperBench 报告 10-paper、high-reasoning、no-browsing 子集。

**部署：** 产品防护、年龄保护、cyber 监控/执法与 Preparedness control 位于模型外围，不是训练样本、grader 或 reward。

复现需固定 prompt membership、traffic frame、model/checkpoint、grader/monitor prompt 与版本、tool、environment/container commit、重复尝试预算、hidden-test revision 和页面 revision；多数不可得。
