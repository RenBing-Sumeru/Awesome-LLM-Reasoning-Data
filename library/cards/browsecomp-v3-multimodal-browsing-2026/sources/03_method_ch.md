1. 输入：问题文本、原始图像、公开网页证据目标、领域/类别元数据、gold answer、sub-goals 和轨迹标注。
2. 流程：专家定义评测维度，标注者用工具探索搜索，验证者复现轨迹，SOTA 模型过滤过易样本，批准样本转为统一 JSON。
3. 输出：benchmark records、sub-goals、interaction trajectories、最终答案、Success Rate 和 Process Score。
4. 环境/judge：agent 可用 TextSearch、WebVisit、ImageSearch、ImageCrop、ReverseImageSearch；评测检查最终答案以及完成 ground-truth sub-goals 的比例。
5. 复现边界：要固定任何公开 JSON、搜索 API、browser/parser、图像工具、20 轮交互预算、30 分钟人类 baseline 策略、模型服务和网页访问日期。
