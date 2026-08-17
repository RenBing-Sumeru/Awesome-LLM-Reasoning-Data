可以把 TUA-Bench 用作 terminal-agent episode schema：task instruction、setup script、runtime image、installed tools、initial files、command transcript、execution feedback、final artifact paths、scorer outputs、timeout 和 model/scaffold metadata。

对 atlas 来说，它是很强的 environment-agent benchmark，因为 verifier 绑定到可执行 artifact。它适合指导 CLI agent audit，但比较分数时必须保留 task family、release commit、软件版本，以及任务是否使用 live network resource。
