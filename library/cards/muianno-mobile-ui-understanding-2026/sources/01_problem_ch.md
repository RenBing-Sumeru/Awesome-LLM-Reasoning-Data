MUIAnno 是 2026 年 5 月公开的 arXiv 论文，问题不是让智能体完成手机任务，而是给移动 UI 理解建立一个专家标注的细粒度评测面。现有移动 UI 数据常来自自动 view hierarchy、半自动采集或导航视频，容易缺少像素级元素框、统一类别和专家一致性检查；这篇论文要补的是“截图中每个可见 UI 元素能否被模型结构化识别出来”。

它的样本对象是一张 iOS 截图及其元素级标注：bounding box、36 类 UI 元素标签、可导出的 JSON 结构。评测输入是截图和固定提示，输出是模型预测的 JSON 元素列表；验收契约是与专家标注做一对一匹配，只有 IoU >= 0.5 且类别相同才算 true positive，并用 precision、recall、F1 汇总。

收录边界是 mobile agent 的 observation grounding / evaluation surface，而不是多步操作轨迹、真实设备闭环环境或训练奖励配方。它对 atlas 的价值在于把移动端视觉状态、结构化元素对象和可审计反馈契约钉在一起；复用前要审计 API 模型版本漂移、标签规范、数据许可证、App Store 截图来源和公开样本污染风险。
