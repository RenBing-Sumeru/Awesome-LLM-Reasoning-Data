1. **proof completion 评测：** 固定官方 Lean pin，只替换 theorem 的 `sorry`，统计编译通过率，并按 curated、难度和 theorem 数分层；同时扫描作弊关键字。

2. **verified code SFT/RLVR：** 训练模型生成函数和 proof，使用 Lean 编译日志作为反馈，reward 可分为语法、类型检查、样例执行和 theorem closure 四级。

3. **规格质量研究：** 比较原 APPS 测试、`#eval` 和通用 theorem，生成反例检查 theorem 是否充分。若目标是运行性能、系统 API 或多文件仓库，FVAPPS 的纯函数 Lean 表示不够，应另加真实执行环境。
