阅读 MMMU 时要把图像 pipeline 放在心里。一行数据不只是题干字符串；视觉资产、分辨率、prompt 布局和答案类型都是 instance 的一部分。

要分开三类标签：纯文本知识失败、视觉感知/OCR 失败、最终答案格式失败。单独的 MMMU aggregate accuracy 不能说明具体是哪一类。
