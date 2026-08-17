1. **收集候选 PR：** 从活跃 Python 仓库抓取合并 PR，要求同时含实现代码和相关测试修改，并保存 issue/PR 文本、base commit 与 diff。

2. **规则与意图筛选：** 通过文件和 diff 规则定位新增组件，再判断 PR 是否真正实现新功能；删除纯修复、重构、依赖更新、文档和测试维护任务。

3. **提取可验证实例：** 将 PR 相关测试映射为 F2P，并保留既有 P2P tests；在 base 和 gold 两个版本执行，只有目标失败可复现且金补丁通过的任务留下。

4. **封装与发布：** 按 SWE-bench harness 记录 repo、version、environment setup commit、创建时间及测试列表。部分源码不重新分发，使用者需按固定 commit 拉取并构建环境，再对 agent patch 执行同一 oracle。
