一句话贡献：WorkArena++: Towards Compositional Planning and Reasoning-based Common Knowledge Work Tasks 把一个任务包含组合式工作目标、ServiceNow 状态、浏览器观察、中间动作/观察轨迹、可用时的生成 ground-truth trace，以及终止成功谓词。绑定到具体反馈契约，形成可复用对象。

核心机制：该基准把 WorkArena 原子组件组合成更难的 L2/L3 任务，并提供生成 ground-truth observation/action traces 的机制。反馈契约：ServiceNow/BrowserGym validators 根据组合任务状态判断成功；生成轨迹是训练或分析工件，本身不是最终验证器。最接近的对比对象是：WorkArena 原子任务、通用网页导航，以及没有组合工作目标的轨迹数据集。方向标签是 verifier-anchored agent evaluation，即可复用单元是任务对象加验收规则。
