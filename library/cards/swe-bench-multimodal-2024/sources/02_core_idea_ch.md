一句话贡献：SWE-bench Multimodal: Do AI Systems Generalize to Visual Software Domains? 把一个样本包含带图像的问题描述或单元测试、仓库状态、image assets、patch/test_patch、FAIL_TO_PASS 和 PASS_TO_PASS 测试，以及评测记录。绑定到具体反馈契约，形成可复用对象。

核心机制：作者把 SWE-bench 扩展到需要视觉软件理解的 JavaScript libraries。反馈契约：SWE-bench Multimodal/SWE-bench harness 在保留含图像 issue 或测试上下文的同时，用仓库测试评测补丁；test split evaluation 保持 private。最接近的对比对象是：纯文本 SWE-bench，以及不要求修改仓库的视觉问答基准。方向标签是 verifier-anchored software-agent evaluation。
