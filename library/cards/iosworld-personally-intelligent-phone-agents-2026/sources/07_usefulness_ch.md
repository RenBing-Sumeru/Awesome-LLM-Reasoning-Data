iOSWorld 可作为 personalized mobile-agent evaluation 的 schema。应保留 task id、goal、app list、category、difficulty、seeded user state version、observation mode、simulator configuration、action trace、screenshots、events、rubric criteria、judge settings 和 score。

它适合测试手机 agent 是否能跨 app 与个人上下文协同，也适合设计用虚构但互相关联的数据近似隐私敏感行为的 benchmark。

对 atlas 来说，它同时属于 environment-agent trajectory data 和 benchmark surface。可复用经验是：personal context 必须作为版本化 environment state 表示，评分则要同时公开 rubric criteria 与 trajectory evidence。
