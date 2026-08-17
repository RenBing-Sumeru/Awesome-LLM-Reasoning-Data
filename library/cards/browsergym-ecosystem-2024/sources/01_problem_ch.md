BrowserGym 是 2024 年 arXiv、2025 年修订并由 TMLR 接收的 Web-agent 研究基础设施论文。它要解决的问题是 benchmark fragmentation：WebArena 类网站、MiniWoB 类任务、WorkArena 企业流程、WebLINX 轨迹等基准各自有不同的 observation、action、evaluator、日志和实验管理方式。

一个评测对象是 gym-like 浏览器任务实例，包含指令、浏览器状态/观测、允许动作、agent 轨迹，以及由具体 benchmark 定义的终止分数或 predicate。收录边界是 Web-agent 环境与评测基础设施；它不是单一新 benchmark、不是模型训练 recipe，也不是通用 judge。对 atlas 的价值在于 adapter contract：只有固定 benchmark 版本和 evaluator 后，跨 benchmark 的轨迹与分数才可审计。
