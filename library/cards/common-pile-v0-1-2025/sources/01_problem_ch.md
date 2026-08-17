大型 LLM 语料常只用一个规模数字来描述，而来源、许可证、源级转换和发布产物却是彼此独立的问题。主论文是 NeurIPS 2025 Datasets and Benchmarks Track 记录 https://proceedings.neurips.cc/paper_files/paper/2025/hash/52acc050138d6f40dad6f12f91a4ce22-Abstract-Datasets_and_Benchmarks_Track.html，官方代码为 https://github.com/r-three/common-pile。它要弥补的缺口是：既开放许可、又足够大且质量足以支持有竞争力预训练的文本语料。

发布的数据对象是 8TB 公共领域和开放许可文本，来自 30 个来源，涵盖论文、代码、书籍、百科、教育材料、音频转录等。它不是 推理-轨迹 数据集，不应被读成 指令、偏好、验证器或 展开轨迹发布。它展示了数据文档与来源信息的具体做法：任何下游 推理数据构建者仍需建立输入来自哪里、适用什么条款、每个来源如何被转换，以及哪些信息仍缺失。官方 proceedings 与代码库记录了该发布。
