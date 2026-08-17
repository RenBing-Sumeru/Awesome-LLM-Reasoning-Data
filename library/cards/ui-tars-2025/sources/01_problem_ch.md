GUI Agent 必须把语言落到截图上，选择底层动作，维持长程意图，从错误中恢复，并判断何时完成或请求用户帮助。UI-TARS 将其建模为原生 screenshot-to-thought-and-action 模型，而不是分离的 planner、OCR 栈与 controller。

该工作于 2025 年以 arXiv 预印本发布。官方论文：https://arxiv.org/abs/2501.12326

该报告适合数据披露账本，因为它重建了约 50B-token 管线：感知数据、统一示范、合成 thought、在线虚拟 PC 轨迹、人类错误纠正、SFT 与 DPO。本次审查未核实到可复用语料、模型发布、环境快照或完整来源权利账本。
