AndroidWorld、LlamaTouch与Mobile-Env等动态移动基准已经采用在线交互和状态评测；SPA-Bench已经扩大应用覆盖；GUI-Robust/D-GARA也已研究异常。MobileBench-OL的具体变化，是围绕物理手机、80款中文应用、真实网络与登录态操作及五种能力切片整合这些问题，而不是再发布一个静态截图/动作语料。

任务设计拆分了三类常被混淆的因素。Base与Long-Tail测试常见和较陌生应用界面；Long-Horizon用至少20个golden step界定困难任务；GUI-Reasoning按图标理解、隐藏功能发现和层级导航等探索要求打分；Noise-Robust用四类随机干扰改变执行过程。这种拆分具有方向价值，但不同子集共享应用和任务，因此子集计数不能被当成相互独立的覆盖证据。

第二项变化是完整反馈与reset pipeline。专家从成功轨迹推导容忍多路径的XPath式规则，在人类/UI-TARS-1.5混合轨迹上验证，并把规则与显式终止语义结合；另一个逆任务智能体尝试在轮次间恢复可变应用状态。这使verifier false positive、false negative、reset failure和版本漂移成为基准契约的可见部分，而非隐藏实现细节。

并非新组件的部分包括规范化GUI action、截图/XML observation、规则谓词、agent rollout、应用特定reset script及基于retry的pass@k。80个应用/1,080个评测项的规模与机制整合属于工程贡献，不能单独证明逐记录质量、安全自动化能力或可复用训练数据集。

对推理数据研究而言，主要新意是把task与真实设备状态、action trajectory、条件级反馈、终止信号、噪声注入及逆向reset连接成可检查链路。复用前仍需hidden/可刷新评测split、固定设备/APK/账户/服务器manifest、完整成败轨迹发布、规则修订ledger、准确噪声seed，以及第三方应用权利审查。缺少这些材料时，该artifact是较强的评测recipe，但不是充分的训练数据发布。
