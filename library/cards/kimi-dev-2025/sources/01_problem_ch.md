Kimi-Dev 研究能否先在紧凑的 Agentless 设定中学到 repository patching 技能，再把这种能力迁移到长程软件工程智能体。其核心数据对象并非一个 benchmark prompt，而是绑定 base revision 的仓库 issue、patch 或生成测试、可选的定位/工具轨迹、任务环境中的执行结果，以及二元 verifier 结果。

报告组合了多种必须区分的监督机制。Mid-training 使用 GitHub PR diff、commit pack、teacher 生成的定位推理和模拟文件工具交互；cold-start SFT 教 BugFixer 与 TestWriter；RL 在 Docker 中对仓库测试执行输出；另一个公开轨迹实验衡量这种补丁技能先验能否减少 agent SFT 数据需求。

本卡严格分开这些阶段。模拟 observation 可教授仓库阅读模式，却不是可执行环境；后续 Docker task pool 才提供 environment-grounded feedback。已发布的评测 harness 与 JSONL 输出是证据产物，而不是完整训练环境或训练语料。
