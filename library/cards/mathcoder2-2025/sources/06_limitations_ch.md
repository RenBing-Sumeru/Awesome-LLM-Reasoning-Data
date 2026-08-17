公开版本不是表 1 的完整语料。Hugging Face 只有一个 train split，OpenWebMath、CC-En-math 和 translated code 只发布部分 shard，没有可识别的教材目录，也没有逐行 provenance。其 viewer estimate 不能当作完整文档数。Source URL、上游 revision、filter score、teacher field、执行证据和被拒记录都缺失。

验证本质是自洽检查，而且实现边界较弱。预期结果和 Python 来自同一次 Llama-3.1-70B-Instruct completion。只有两个短且可解析为数值的字符串才执行 0.01 tolerance 比较；其他无错误输出直接通过。Raw `exec`、timeout 和两个正则屏蔽并不是执行生成代码的安全 sandbox。

核查的 pipeline 未经修复无法端到端执行。执行与转换脚本导入不存在的 module；其中一处调用未定义入口；生成与解析脚本对必需的 model 字段不一致；OpenWebMath filtering 引用未定义 `idx`；训练 resume 分支在赋值前引用 `new_learning_rate`。这些缺陷不能证明作者原始运行失败，却阻碍公开工件的透明重放。

去污染没有与公开版本形成可复现绑定。公开脚本期望 `output` 字段，而托管数据使用 `text`；exact stage 实际采用 substring matching；accepted object 又是 tuple shape。Benchmark revision、候选匹配、判断结果和语义重叠复核均未公开。

权利与版本仍未解决。数据集和 checkpoint 页面声明 Apache-2.0，但 GitHub 根目录没有 license。没有逐行 license ledger 覆盖 Common Crawl、OpenWebMath、StarCoderData、合成来源或未列出的教材 PDF。代码和数据 revision 早于 ICLR 2025 Spotlight 决定，没有命名的 paper release，也未绑定论文运行配置或 checkpoint hash。官方 collection 发布四个 continued-pretrained model，却未发布下游 CoT/TIR SFT 版本。
