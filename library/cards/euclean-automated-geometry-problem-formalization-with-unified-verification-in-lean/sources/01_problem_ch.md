高水平数学推理系统在代数、数论中可使用 Lean，但几何仍常依赖专用语言和外部求解器，扩大 trusted computing base，也阻碍统一训练。原生 Mathlib 几何形式化还必须显式写出图形中的非退化、位置和拓扑假设，现有数据不足千题，无法支撑大规模学习。

Euclean 用四阶段自动形式化与 Lean 统一验证，把自然语言平面几何转换为原生 Mathlib 定理，并公开大规模 statement 与部分 proof 数据。
