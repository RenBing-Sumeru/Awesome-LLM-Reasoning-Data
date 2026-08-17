正确性相对于已发布 simulator apps、seeded fictional profile 和 rubric judge 成立。通过不证明它能安全操作真实用户手机，也不证明对 live app 更新鲁棒，或能处理合成 seed 之外的私密数据。

当前仓库说明要求 Mac/iOS 工具链，包括 Xcode 26+ 和 iOS 26 simulator runtime。环境漂移可能来自 Xcode、Appium、XCUITest、simulator device type、app build、model backend 或 judge model。

rubric judging 可能漏掉隐藏副作用，也可能奖励视觉上合理但语义错误的行为。公开 tasks、rubrics 和 seed data 会带来后续训练污染。
