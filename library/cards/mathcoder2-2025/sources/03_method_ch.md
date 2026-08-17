MathCode-Pile 在翻译前先组合五类基础来源。Mixtral-8x7B-Instruct 标注 OpenWebMath 文档，保留数学问题/解答和概念/理论内容。Common Crawl 经过两轮 fastText，并在中间使用 Mixtral 做类别标注。三个合成集合按数学相关性过滤。StarCoderData 的 Python 与 Jupyter 记录只有在导入 sympy、fractions、cmath、scipy、statistics 等包时才保留，单独出现 numpy 不作为过滤依据。约 8K 份在线教材 PDF 按标题关键词选择，表 1 精确报告 8,373 个文档，并用 Nougat 转换。

公开的文件准备代码将筛选后的 OpenWebMath 与 CC-En-math 记录送入 Llama-3.1-70B-Instruct。生成采用 greedy decoding，源输入截断到 3,072 token，最多生成 3,072 token，使用 12 个本地 worker。结构化 completion 包含 Conditions Needed、LaTeX 表达式、Computation Result 和 Python。论文与部署脚本都将 Llama-3.1-70B-Instruct 标为翻译 teacher；数学代码 README 写成 Mixtral-8x7B-Instruct，与二者冲突。

Python 在 worker process 中通过 raw `exec` 执行，timeout 为十秒。正则只屏蔽 `input(` 和 `os.system(`，并未构成面向文件系统、网络、子进程和 import 的 hardened sandbox。预期过滤规则是代码无错误执行且输出匹配预期结果。公开 comparator 只有在输出和预期结果都短于 20 字符且可解析为 complex number 时，才使用 0.01 的 absolute-error threshold；其他情况只要无执行错误就进入 accepted set。

筛选后，标题、条件、表达式、结果和 fenced code 被拼接为单个 `text` 文档。生成字段、stdout、exception、timeout、数值比较和拒绝理由全部消失。论文报告使用 exact match 与 13-gram Jaccard 大于 0.6，对九类 bundled benchmark test source 做去污染；随后四个基础模型使用四百万 token 的 global batch，进行三轮 continued pretraining。

表 1 报告六个精确组件：filtered OpenWebMath 4,826,902,621 token；filtered CC-En-math 6,341,745,645；synthetic data 2,193,189,314；math-package code 1,703,226,005；textbooks 1,390,268,773；translated code 2,728,740,985。总计 19,487,652 个文档、19,184,073,343 个 token。这是论文语料的统计，不是当前 Hugging Face snapshot 的统计。

公开数据集只有一个 train split，每行只有一个 text 字段。其 dataset card 明确说明 OpenWebMath、CC-En-math 与 translated code 仅 partial release，也找不到教材专用目录。公开行缺少 source URL/license、filter score、teacher/version、执行证据和 contamination decision。四个 continued-pretrained checkpoint 已公开；下游实验使用的 NuminaMath CoT/TIR SFT checkpoint 不在官方 collection 中。
