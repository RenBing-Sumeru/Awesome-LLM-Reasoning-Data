从 64,689 到 2,438 的环境漏斗没有公开拒绝账本。Lite 数量在正式论文/HF card 的 230 与 README 的 234 之间漂移；其他界面还存在 868/875 个 on-policy success 以及 5,557/当前 5,564 个 failure 的差异。

谱系分散在多个 repository。主任务行保留 instance ID 与 commit，但 success-only SFT 和重新格式化的 verifier data 丢失显式 task/run column。没有 release-wide manifest 将任务绑定到 trajectory、test、scaffold commit、checkpoint 或精确 training subset。

复现依赖可变基础设施。核查仓库没有 tag/release，文档使用 branch URL，image 使用 `latest`，却没有完整 digest 或 SBOM 清单。一个当前 digest 不能替代 2,438 个 image 的 manifest。仓库 bundled paper 是旧 18 页版本；PMLR 与 arXiv v2 才是 21 页正式版，应作为事实依据。

许可不一致：论文 CC BY 4.0，主代码 Apache-2.0，主数据和 OpenHands SFT 为 MIT；Lite、Raw、sampled/verifier/Moatless trajectory、核查模型与 Docker image 则没有 license metadata。没有逐行账本协调上游仓库、issue、patch、test 与 container layer 的权利。

Success-only SFT 偏向可解任务，单元测试可能被利用，learned verifier 也会错误排序 patch。与 SWE-Bench 仓库分离不能排除语义重复、code clone 或 teacher memorization。若干模型仓库还缺少 model card、base-model/license 声明与可独立加载文件。
