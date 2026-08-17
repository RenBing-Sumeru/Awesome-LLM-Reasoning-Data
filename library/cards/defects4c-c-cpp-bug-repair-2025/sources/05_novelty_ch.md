Defects4J、SWE-bench 等真实修复数据已证明 issue—patch—test 形式有价值，但它们主要覆盖 Java 或 Python；现有 C/C++ 漏洞集又常侧重分类、静态检测或独立代码片段。Defects4C 将同一执行式修复协议扩展到真实 C/C++ 普通缺陷与 CVE 相关漏洞。

变化点不是新的 repair algorithm，而是将提交挖掘、函数定位、Docker 构建和复现测试组合成统一 benchmark，并并列评估 correctness bug 与 security bug。其价值在语言与缺陷类型覆盖以及可复现 oracle。
