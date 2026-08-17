可信证据主要来自公开 benchmark 设计和论文报告的 baseline 评测。论文报告 Mobile-Bench 有 832 条数据，覆盖 SAST、SAMT、MAMT，包含 29 个应用和 103 个可用 API。质量核验中，作者从三类任务各抽 100 条，把 instruction 生成的 CheckPoint 序列与人工 CheckPoint 序列比较，报告 overlap 为 SAST 0.94、SAMT 0.85、MAMT 0.80、总体 0.86。

baseline 数字显示 GPT-4 的 PassRate 在 SAST/SAMT/MAMT 上分别为 80.96、63、26.5，CheckPoint-l2 分别为 83.76、77.35、52.98。API ablation 支撑混合 API/UI 设计：去掉 API 后，GPT-4 的 CheckPoint-l2 从 SAST 83.76 降到 72.73，从 SAMT 77.35 降到 56.74，从 MAMT 52.98 降到 31.69。

证据边界必须保留：CheckPoint 是过程覆盖率，不等于语义终态证明；PassRate 依赖 GPT-4 判断，可能受模型版本和 prompt 影响。单条样本是否可信，还取决于公开任务文件、手机状态、安装应用、应用内数据、API 可用性和动作历史日志是否一致。
