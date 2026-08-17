DialogTool 把任务型对话结构改写成工具监督：service/domain 映射为 App，intent 映射为 API，slot/value 映射为 typed argument，数据库查询轮转成 API call。action 中，Request、Confirm、Inform_Count、Notify_Success、Notify_Failure 属于工具相关动作；Inform、Offer_Intent、Req_more、Goodbye 属于非工具动作。因此 tool awareness 是依赖状态的多分类，而非简单二分类。

VirtualMobile 提供状态迁移。每个 App 是 Python class，每个 API 是 function，来源对话的唯一 lookup 结果构成数据库。schema 描述基础必需参数、API 专属必需/可选参数、返回字段、格式和 transactional flag。必需值齐全后才能调用，事务 API 需先确认，先前结果和 App/API 状态可被后续回复使用，错误也会沿轨迹传播。

选择可采用 flat 模式同时预测 App/API，或 hierarchical 模式先选 App 再选 API/参数，后者通常更好。但论文没有定义恢复控制器：缺失值可写为 `?`，action 也包含请求和失败通知，却未把自动重试、rollback、修复或 episode 级恢复成功定义为独立评测合同。
