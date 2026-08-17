1. **汇集已有 benchmark：** 从 Dafny、Verus 和 Lean 的多个公开数据源收集规格与程序，保留原 source ID 和许可信息，去除明显重复。

2. **翻译与新增任务：** 将部分 Python/APPS/HumanEval 问题转换为 Dafny 或 Lean 规格，并从 NumPy 文档等构造新 Hoare-style 任务；统一空洞表示和文件组件。

3. **编译质量分析：** 用对应工具运行每个文件，能编译到 `sorry`/`assume false` 的放入 tasks，翻译失败或不编译的保留在 issues，避免误称全部 12,504 均可直接验证。

4. **统一模型评测：** 多个 off-the-shelf LLM 生成空洞内容，组装完整文件并运行 verifier，记录成功、语法/类型/证明失败和自然语言条件。复现需固定三套工具链、prompt、重试数与 timeout。
