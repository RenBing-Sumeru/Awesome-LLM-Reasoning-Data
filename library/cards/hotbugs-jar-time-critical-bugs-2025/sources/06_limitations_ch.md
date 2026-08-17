正确性只相对于打包的项目测试和元数据成立。测试通过不等于补丁语义完整、安全或可直接上线；hot-fix 标签也依赖 issue 元数据和人工判断。

数据强烈偏向 Java/Apache 生态，不能外推到其他语言、线上事故或无法用测试复现的生产故障。依赖漂移风险很高：Java、Maven/Gradle、submodule commit、release tag、flaky test 都会改变可执行结论。复用还需要逐项检查仓库和上游项目的许可。
