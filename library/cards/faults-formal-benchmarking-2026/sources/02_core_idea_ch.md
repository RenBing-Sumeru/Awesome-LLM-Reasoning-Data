论文不再把形式化 benchmark 当作天然自验证，而是把审计拆成多层：对五类常用 benchmark 及其 fork 运行 Lean 静态 checker，区分可认证缺陷与语义层发现，并提出发布规范。核心数据对象不再是孤立的 proof-pass bit，而是带证据的缺陷记录。它区别于普通 score report 或人工清洗，把失败证书、环境版本和语义忠实性变成一等字段。
