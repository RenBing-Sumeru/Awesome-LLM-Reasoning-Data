1. **Python/pytest 范围：** 11 个仓库不能代表 Java、C++、分布式或 GUI 测试；迁移时必须重建语言特定 runner、fixture 与 mutation tools。

2. **指标不是完整 oracle：** coverage 奖励执行路径，mutation score 依赖所选 mutation operators，二者都可能偏好冗余或表面测试。应联合人工缺陷或真实 bug 检测率审计。

3. **代码泄漏与环境漂移：** 开源仓库可能出现在预训练语料中，依赖版本也可能失效。比较模型时需冻结 commit/镜像，并单列运行失败、数据污染和重复测试。
