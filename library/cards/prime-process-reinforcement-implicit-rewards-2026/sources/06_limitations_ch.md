第一，PRIME 依赖可靠的 response-level verifier。实验中的数学 exact-match 和代码测试只能判断最终结果；若错误过程偶然得到正确答案，整条响应仍会作为正样本更新 PRM，token 奖励不等同于经过人工确认的步骤正确性。

第二，实验仅覆盖具有确定答案的英文数学与代码任务，尚未验证开放式写作、事实问答或主观偏好等无法程序判定的领域。引入 LLM judge 后，judge 偏差可能被在线 PRM 放大。

第三，PRIME 同时使用在线更新、prompt 过滤、SFT 初始化和特定 advantage 设计，最终收益不能全部归因于隐式奖励。
