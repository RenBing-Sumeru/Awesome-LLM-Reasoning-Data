**输入与预过滤。** 从 OpenR1-Math default split 的 94K 个问题开始。作者人工检查 100 个随机样本后制定规则：必须恰有一个可解析的 boxed answer 且能自动核验，并移除选择题、多问任务、含链接任务、歧义题及其他不可核验问题。公开的 OpenR1-Cleaned 共 49,394 行，其中 train 48,394、validation 500、test 500（论文第 2.2 节、附录 D、官方 dataset card）。

**Roll-in、截断与 rollout。** 对每个清洗后的提示，从 DeepSeek-R1-Distill-Qwen-1.5B、7B、14B 和 32B 中采样 14 个独立 roll-in；14 个样本在四种规模间如何分配未披露。再按论文的平方根加权截断位置分布，从每个 roll-in 选择四个 prefix，并用固定的 DeepSeek-R1-Distill-Qwen-1.5B policy 完成续写。每个提示由此得到 56 个 pair，post-filter 前总计 280 万个。数据生成的 temperature、top-p 和随机种子均为 unknown。

**核验、过滤与序列化输出。** 解析最终 boxed answer，通过 `math-verify` 与 ground truth 比较。标签 0 表示已结束但错误，1 表示已结束且正确，2 表示未完成或达到长度上限；只有类别 1 的 reward 为 1。若某提示的 56 个 rollout 全部错误或未完成，则删除整组；该步骤移除约 10% 的问题，剩余约 250 万个 pair。OpenR1-VM 仅公开一个 44,509 行的 train split，字段为 `message_id`、`problem`、`solution`、`answer`、`reward`、`roll_in_ids`、`roll_outs_ids`、`processed_answer` 和 `labels`。它保留入选组内部的负例结果，但不包含预过滤拒绝项、全失败组或完整拒绝清单。

**Value-model 训练。** 以 DeepSeek-R1-Distill-Qwen-1.5B 初始化 28 层、hidden size 1536 的 classifier，将 LM head 替换为两层三分类 MLP，并在每个 rollout token 上用终点类别计算交叉熵。论文最终运行 5 个 epoch、总 batch size 1024，使用 AdamW 和最大学习率 \(10^{-4}\) 的 cosine schedule，在 16 个节点 × 每节点 8 张 H100 上训练约 24 小时；每个 epoch 报告 35.7B 总 token 和 14.4B 参与 loss 的 token（附录 E，表 4）。仓库里的四卡命令只是示例，不是论文最终运行配置。

**搜索与评测。** 通过 SGLang 生成，最大长度 16,384 token，temperature 0.6、top-p 0.95。VGS 每次扩展 4,096-token block，用 value model 给新 prefix 打分，维持宽度 2 的 beam，按预算采用 DVTS，最后以加权多数投票给出答案。这里的 \(N\) 是并行采样的 generation/block 数，论文从 4 扫到 1024，不能与每个提示的 56 个训练 pair 混为一谈。1.5B、7B 和 14B generator 的 headline budget 分别为 \(N=256\)、128 和 64。

**复现与发布检查。** 应固定 arXiv v2、GitHub revision、OpenR1-Cleaned/OpenR1-VM snapshot、DeepSeek-VM-1.5B 文件、上游 tokenizer、`math-verify`、SGLang、benchmark 版本和随机种子。公开模型需要仓库中的自定义 `Qwen2ForClassifier`，model repo 没有打包 tokenizer 文件及该实现。附录 E 提到 500 个样本的 value-model validation split，但 OpenR1-VM 只公开 train。已核查仓库未提供端到端采集/预过滤脚本、完整历史搜索树，也没有披露代码与模型权重许可证。
