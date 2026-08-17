输入包括用户 query、APP list、可用 APP/API 描述、当前 Android 观察，以及该任务的 CheckPoint。观察层用 Appium 获取 XML UI 信息，再把可见、可点击、可滚动和有文本的节点转换成类似 HTML 的表示，字段包括 type、resource ID、package、class、description/text、clickable、scrollable、bounds 等。

方法流程如下：

1. 收集或生成 query，并归入 SAST、SAMT 或 MAMT。
2. 为任务关联应用、API 候选和 package/key phrase/API 三类 CheckPoint。
3. 把 CheckPoint 编成顺序、合取或析取关系。
4. 每个 case 从预设移动环境快照启动。
5. agent 迭代选择 UI 操作或 API call，直到停止或达到最大步数。
6. 用动作历史计算 CheckPoint-l1、CheckPoint-l2、PassRate 和平均步数。

反馈来自真实移动运行状态、Appium UI 观察、ADB/API 执行和 CheckPoint 匹配。复现时必须固定 MobileBench 仓库版本、MIUI emulator 或真实设备镜像、Android Studio/Appium/ADB 版本、应用版本、登录状态和手机预置数据、prompt、步数上限，以及是否重新运行 GPT-4 终态判断。
