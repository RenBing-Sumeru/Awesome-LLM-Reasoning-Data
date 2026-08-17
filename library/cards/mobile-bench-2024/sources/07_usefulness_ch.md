Mobile-Bench 可作为移动 agent evaluation surface 的 schema 和 harness 参考，尤其适合 API/tool 调用与 GUI 操作混合的任务。复用时应保留用户 query、APP list、API candidates、UI observation、action history、step budget、package/key phrase/API CheckPoint，以及过程覆盖和终态完成的独立指标。

对 atlas 来说，它是“部分环境反馈、部分 judge 反馈”的轨迹评测面样例。可复用的设计模式是公开中间过程谓词、保留动作级日志，并避免把所有证据压成一个 final success label。

最稳妥的用途是 evaluation 或 audit。若用于训练，必须记录 provenance、license、split、evaluator 版本、手机镜像、安装应用版本、prompt、模型，以及 GPT-4 判断配置。若新 benchmark 借用它的设计，也应保留 CheckPoint-l1、CheckPoint-l2、PassRate 和 average steps 的区别。
