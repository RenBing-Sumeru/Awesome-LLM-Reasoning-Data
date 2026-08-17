1. **覆盖边界：** 六个维度并非正交，verbosity、complexity 和 helpfulness 仍可能互相混杂，probe 可分不等于因果使用。

2. **反馈风险：** 数据从既有偏好集派生，会继承其人群、模型和标注偏差。

3. **复现与使用：** gated 数据与预处理细节会影响复现；必须固定 split、特征层和 probe 容量，避免 probe 自身记忆数据。
