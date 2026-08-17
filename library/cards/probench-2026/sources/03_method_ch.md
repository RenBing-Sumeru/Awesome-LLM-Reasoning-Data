**任务构造。** application selection从SPA-BENCH开始，移除无法在virtual device运行的英文app，以及带bot detection/anti-automation的app。作者人工编写seed task，用Qwen3扩展，再人工filter/edit每个生成task，以保证正确性、多样性并减少lexical/structural overlap。Qwen3 checkpoint、generation prompt/setting、candidate count、annotator count、rejection count、agreement与adjudication均为unknown。

**环境与交互。** 英文app运行在Android Emulator，中文app运行在使用ADBKeyboard的physical Android phone上。adbutils控制的loop把当前screenshot、task与history/context发给智能体，把文本action解析为CLICK、SWIPE、TYPE、ENTER、BACK、COMPLETE或WAIT，并在当前app执行；HOME被排除。实验budget为15步；连续五次相同operation触发early failure。

**过程证据与终局判断。** 对click action，主要Structure Description Converter使用a11y tree识别相关node及text/content/resource description。另一种Gemini 2.5 Pro summarizer比较before/after screenshot。State task把instruction与final screenshot交给Gemini 2.5 Pro；Process task再加入完整action-description sequence。budget结束仍无`COMPLETE`为Uncompleted；发出`COMPLETE`但要求未满足为Failure；只有completion和judge要求同时满足才是Success。

**reset与复现。** 研究者在每次execution前人工清除全部in-app history。这不是自动emulator snapshot或physical-device restore，不能保证server-side/account/cookie/personalization/notification/clock/locale/network等价。device model、Android version/image、resolution、app package/version、account、region、network、repeat count、seed、decoding setting、retry、judge API snapshot与result manifest均为unknown。

**发布边界。** 论文与附录描述prompt、Algorithm 1、task table、aggregate result及selected case，但尚未确认官方code、task JSON/CSV、Process Provider实现、environment image、per-run result或trajectory log。重建pipeline因此需要独立实现，也不能建立精确deterministic replay或逐记录verifier audit。
