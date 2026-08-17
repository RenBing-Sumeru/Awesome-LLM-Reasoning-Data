问题构造由人工主导。111 道保留题中，作者编写 65 道，受过训练的 Upwork freelancer 编写其余 46 道；freelancer 投稿接受率为 58.2%，每道被接受题目支付 4 美元。候选题必须简洁且定义充分，只有一个简短且可唯一判分的答案，能抵抗普通 Google Search，并使用无需付费墙、账户或登录即可访问的公开证据。逐记录 writer identity、source URL、collection date 与 rejected-work ledger 未公开。

每个保留问题、答案、viable trajectory 和链接都由至少两位作者按有效性标准检查。对 multimodal candidate，作者用 OpenAI Deep Research 对抗性地寻找 text-only workaround；共有 13 道拟议多模态问题被移除，主要原因是发现了这类绕过路径。确切 reviewer assignment、分歧裁决、candidate-pool size、逐领域 quota、randomization 与 freshness threshold 仍为 unknown。

被评测 agent 通过各自原生商业界面在不受限的实时网页上运行。computer-use agent 接收渲染像素并控制虚拟鼠标和键盘，其他系统则提供各厂商特有的 search 或 reasoning summary。提示要求 agent 处理 CAPTCHA、接受弹窗并尽量减少用户介入；当 agent 求助时最多只再给一次“自行继续”的指令。session 在回答或弃答、陷入无进展死循环，或第二次求助时终止。computer-use 时限为 15 分钟，只有 OpenAI Chat GPT Agent 产品为 45 分钟。该终止规则只用文字描述，没有发布为 executable code。

baseline protocol 将 GPT-4o-2024-11-20 与 DeepSeek R1 的 temperature 都设为 0，最大输出分别为 518 和 8,000 token。search-augmented baseline 通过 Serper 检索并拼接至多 10 条 Google 结果标题与摘要。商业 agent 的确切 checkpoint revision、decoding setting、tool budget、seed、retry policy 和总评测成本均为 unknown。多数 agent 在 2025 年 2 月 23 日至 3 月 1 日运行，Google Deep Research 在 5 月下旬运行，OpenAI Chat GPT Agent 产品在 7 月 18–20 日运行，因此各比较所处的网页与产品状态不同。

公开 autorater 包含 README.md、GetResponse.py、autorater.py 和 autorater_prompt.py。它使用 GPT-4o-2024-11-20、17 个 in-context example、temperature 0、seed 1130 和默认 518-token 上限；论文报告标注全部 111 条约需 1 分 30 秒、花费 0.80 美元。它依赖外部 OpenAI Chat Completions API 以及 openai、tiktoken、tqdm。包内没有 artifact license、requirements 或 lock file、固定 API snapshot、retry/error contract、schema validation 或离线 expected-output fixture。

逐文件检查 BearCubs_20250310.json.zip 后，发现其中只有一个 25,550-byte JSON object：111 个不连续字符串 ID，范围 1–129、缺 18 个编号，每个 value 都只有一个 question 字段。curator 计算的 SHA-256 为：question ZIP 是 27AF179F8CF076DA2DEB52F61D631F66293FA11872D12458265E3AC10570F2B2，内部 JSON 是 A3D20A6E92E4DF8504833BDBB58E5444D880D6157A6EB8B29C3CED78705E8D90，autorater ZIP 是 38B557ADD215E68A94C707EF8C0E25779A6C4A51D1BBC22A3B3B6475EF1F123F。这些 hash 只固定本次审计取得的文件，并不是作者发布的 release identifier。
