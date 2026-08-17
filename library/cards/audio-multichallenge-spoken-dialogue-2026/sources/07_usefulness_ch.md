该 benchmark 可用于评测语音助手、端到端 speech-to-speech 模型和带音频输入的对话模型，并按能力轴定位失败来源。数据中的对话、音频线索和 rubric 也可用于训练音频 judge 或生成有针对性的改进数据。若模型先转写再推理，应单独报告 transcript-only 与 raw-audio 结果，否则无法判断提升来自语言模型还是声学理解。
