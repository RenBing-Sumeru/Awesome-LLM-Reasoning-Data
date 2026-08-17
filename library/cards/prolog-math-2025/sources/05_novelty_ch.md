贡献在于相互连接的构造 recipe，而不是单独发明 Prolog、execution filtering 或 GRPO。Predicate suggestion 先于完整程序合成；持续演化的 library 支持跨题复用；固定的 symbolic answer type 词表同时参与生成与验证；失败实例也不是直接丢弃，而是转为 SFT 与 GRPO 的恢复集合。

Predicate-aware reward 在不使用人类偏好标签或 learned process model 的情况下加入程序级结构反馈：终态正确性与 singleton-warning penalty、建议 predicate 使用情况共同决定 reward。边界也很明确：错误程序仍可获得 0.5，且没有任何中间数学步骤得到独立认证。

对 Data Construction and Open Release track，关键设计区别在于源推理、可复用抽象、可执行制品、终态等价和恢复谱系。Prolog-MATH 在论文中展示了这些阶段，但公开表把已接受结果压平为六个字段，没有发布被拒候选或 predicate library 的状态。
