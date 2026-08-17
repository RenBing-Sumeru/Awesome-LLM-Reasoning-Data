主要贡献是一个以视觉为中心的手机设备智能体：它分解用户指令，借助多模态感知读取截图，并输出具体的点击、输入和导航操作。核心机制把 GPT-4V 类视觉推理与 OCR、图标检测结合，用来定位可操作 UI 元素。

评测面是 Mobile-Eval：按难度分组的手机任务，通过实际执行的操作序列评估。反馈契约报告任务是否完成，以及轨迹相对于参考路径的效率。

最接近的对比是 app-specific automation、需要 XML 访问的 Android agent，以及后来的 AndroidWorld、OSWorld 等移动/OS benchmark。方向标签是 visual-only observation 下的智能手机 GUI 轨迹评测。
