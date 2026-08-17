先前 GUI benchmark 往往聚焦单个平台或单项能力，例如 grounding、移动端自动化、桌面 OS 任务或网页导航。MMBench-GUI 的变化是把多个 GUI 平台和任务类型组织到同一层级体系，并为不同层级设置不同反馈契约。

方向信号是 GUI agent benchmark 设计：感知与动作分开评测，同时可通过轨迹连接。不新的是截图、UI grounding、浏览器/移动端/桌面任务和成功谓词；复用前要查平台覆盖、标注 schema、evaluator scripts、环境镜像、数据 license，以及尚未发布或持续变化的层级。
