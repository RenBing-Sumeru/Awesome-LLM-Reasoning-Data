1. **筛选仓库与 PR：** 选择活跃、有 CI、可构建且 issue/PR 关联明确的多语言项目，抓取合并 PR、base commit、修复 diff 和新增测试。

2. **构建容器：** 根据 CI、文档和构建脚本安装语言工具链与依赖，固定 commit，在 Docker 中先确认原有测试可运行。

3. **三态执行验证：** 分别运行 base、仅 test patch、gold fix+test patch；保留至少一个 `ANY→FAILED→PASSED` 的 F2P 测试，并拒绝出现 `ANY→PASSED→FAILED` 回归或状态不确定的样本。

4. **专家复核与发布：** 68 名标注者检查 issue、patch、测试和环境，交叉复核后留下 1,632 题；另按同流程发布 4,723 个 RL 实例。复现需固定镜像、工具链、测试命令和人工标注版本。
