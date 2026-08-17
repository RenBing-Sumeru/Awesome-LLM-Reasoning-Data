构造从WOMD训练集和interactive-validation中带`objects_of_interest`标签的场景开始。规则程序生成ego-centric文本,覆盖HD map、交通控制、自车与周边车辆/骑行者/行人的当前运动和位置、相对位置及未来状态。论文报告训练场景52,000个、验证场景11,000个。

Microsoft Azure GPT-4 Turbo接收由system角色、五项顺序责任、global rules和人工编写in-context示例组成的四段prompt。它先生成只使用当前信息的环境、自车和周边agent问答,再使用当前与未来描述,为每个周边agent生成一条交互问答,并生成汇总后的自车意图问答。论文报告API成本约12,750美元;精确endpoint版本、temperature、采样参数、seed、重试策略、解析失败、拒绝规则和修订ledger均为unknown。

仓库说明每个场景JSON包含`sid`、`ego`、`cur_time`、`future_time`、`rel_id`、`rel_qa_id`以及成对的`env`、`ego`、`sur`、`int`问答数组。原始agent ID与替换后的Q&A ID同时保留;后者用[0,100)表示车辆、[100,200)表示自行车、[200,300)表示行人。发布分为`training.tar.gz`与`validation_interactive.tar.gz`,但当前Waymo归档需要登录,Card中也没有不可变manifest。

视觉扩展使用ScenarioNet和MetaDrive重放BEV与ego-view视频;论文指定视频为10 Hz、90帧,其中10帧历史、80帧未来。Motion-LLaVA以LLaVA-v1.5-7B和MultiPath++运动encoder为基础,全部组件训练1个epoch。人工评估由4人判断1,610条问答,但不存在自动逐条接受谓词,后续人工清洗在论文发布时仍在进行。
