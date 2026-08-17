本 Card 适合作为 construction 与 audit reference，不是可复用的机器人训练 release。它给出了具体 VLA record template：当前图像、语言指令、embodiment 与 calibration metadata、专家 action sequence 或 action chunk、可选未来机械臂轨迹 intermediate、episode horizon、success/progress outcome、provenance 和 split membership。

对 specialization 研究，2,000–5,000 demos 的长时程设置和 5/20/100 demos 的 adaptation curve 可作为有依据的比较点。公开复现应保留被拒绝与失败 demonstration，发布任务与场景 manifest，分离 initialization 与 specialization 效果，并报告每次物理 trial，而不只是聚合 success。

对 verifier design，构建者可以分别实现 binary success、scalar progress、安全或路径质量以及人工干预信号。论文中的 rubric 只是评测参考；若用于 RL，必须额外公开 scorer、terminal checker、calibration、分歧处理和 reward-hacking audit。

ERQA 可依据 CC BY 4.0 直接用于 answer-level embodied-reasoning evaluation。其 loader 与 harness 不能验证动作生成、控制稳定性或长时程操作。Gemini Robotics 的训练复用仍受阻，直到 robot data、weights、code、lineage、split 和 license 得到披露。
