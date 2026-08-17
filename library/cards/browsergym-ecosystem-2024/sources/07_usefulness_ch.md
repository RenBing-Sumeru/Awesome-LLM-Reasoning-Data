可把 BrowserGym 当作 browser-agent evaluation infrastructure 的设计模式。可复用记录应保留 benchmark id、adapter version、task id、split、reset state、observation modality、action schema、browser/runtime version、agent scaffold、prompt、step logs、terminal predicate、score、error state、timeout 和 artifact 链接。

对 atlas 来说，它是 environment-agent trajectory data 与 benchmark/evaluation surfaces 之间的桥接卡。它帮助区分底层 substrate contract 和各 benchmark 自己的 verifier，这对比较 WebArena 类、WorkArena 类、MiniWoB 类和轨迹型任务里的 agents 很关键。
