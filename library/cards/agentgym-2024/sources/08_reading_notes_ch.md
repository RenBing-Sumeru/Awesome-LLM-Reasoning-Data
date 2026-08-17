阅读时应把 AgentGym 看成四个相连工件：framework、benchmark、trajectory data 和 training/improvement method。不要把它们压成一个泛泛的“agent dataset”。

建议阅读顺序是先看 ACL paper，再看项目页和仓库，最后看 Hugging Face 工件页。必须分开三类 claim：环境可以给 episode 打分，轨迹可以训练 policy，训练后的 agent 可以在 benchmark metric 上改进。
