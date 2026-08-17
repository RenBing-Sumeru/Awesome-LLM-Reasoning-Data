1. **一句话定位：** RePanda 把表格断言和问答转换成可运行 pandas 查询，使推理、标签和评测由同一执行过程连接。

2. **方法抓手：** DeepSeek-Chat 生成代码，执行错误和结果不一致驱动自动修复，只有匹配参考结果的查询被保留。

3. **数据抓手：** PanTabFact 字段含表格、statement、label、pandas_code、pandas_eval；官方未预设 train/dev/test。

4. **证据锚点：** TabFact 84.09%、WikiFact 84.72%、PanWiki 75.1%，支持可执行表示的迁移，但仍需控制模型差异。

5. **复用决定：** 适合单表事实核验与可执行奖励；复用前必须沙箱代码，并抽查查询语义而非只看返回值。
