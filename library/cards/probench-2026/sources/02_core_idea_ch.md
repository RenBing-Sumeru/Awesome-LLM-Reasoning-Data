ProBench的核心贡献是process-aware terminal evaluation契约。被评智能体仍根据screenshot与history行动；Process Provider另行把智能体自己的runtime action转换为文本证据。该证据与final screenshot一起交给final judge，而不是gold action sequence、dense process reward、agent-visible hint或process-supervision label。

Process Provider提供两种可选textualization机制，而不是两个reward function。Structure Description Converter在每次click后程序化解析accessibility tree，定位包含该坐标的最小clickable node，并提取text、content description、resource ID或child description。MLLM-based Summarizer比较before/after screenshot、标记click coordinate，再用multimodal model总结operation。主要实验使用Structure Description Converter；Gemini 2.5 Pro担任terminal judge。validation study还测试Gemini 2.5 Pro作为MLLM summarizer。

反馈契约组合三部分：live-device environmental state、programmatic action textualization与judgment-required binary scoring。对State task，Gemini 2.5 Pro接收task和final screenshot；对Process task，还接收完整textualized action sequence。它返回True/False，再汇总为accuracy/success rate。`COMPLETE` signal是必要但不充分条件：judge必须确认终态，并在Process task中确认critical operation满足要求。

相对只看final screen的mobile benchmark，变化是加入path-sensitive action evidence而不强制唯一精确路径。相对process supervision，边界非常明确：action evidence从被评trajectory生成，只由terminal evaluator消费。论文没有提供policy training、step label、process reward或demonstration release。
