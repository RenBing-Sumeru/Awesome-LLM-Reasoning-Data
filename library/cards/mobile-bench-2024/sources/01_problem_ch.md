Mobile-Bench 解决的问题是：当移动端任务需要真实应用、跨应用规划、UI 操作和 API 调用混合执行时，怎样评测 LLM 移动智能体。主要一手来源是 ACL 2024 Long Paper、2024-07-01 提交的 arXiv 版本，以及 XiaoMi/MobileBench 官方仓库。

它的缺口不是普通 GUI grounding，而是移动任务评测对象过窄：UI-only 操作效率低，单应用指令不足以测试多应用规划，单一终态成功率也难以检查过程是否走到关键节点。本卡收它作为 mobile-agent evaluation surface 和 agent environment，不把它当训练 recipe 或通用手机界面语料。

一个样本至少包含 ID、用户 query、候选 APP list，以及 package、key phrase、API 三类 CheckPoint。反馈契约是混合的：CheckPoint coverage 用动作历史匹配包名、关键短语和 API 谓词，并支持顺序、合取、析取关系；PassRate 在步数限制内由 GPT-4 判断任务是否完成。因此它对 atlas 的价值在于暴露移动端轨迹和环境验收面，但复用分数必须绑定 evaluator、运行环境、应用版本和设备初始状态。
