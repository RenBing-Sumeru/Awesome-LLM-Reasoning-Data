1. 定位：原始自胜率混合回答质量和偏见，DBG 以 gold 质量参照估计校正后的残余。

2. 方法抓手：成对收集输出与各 judge 判决，再减去 GPT-4o-mini、Gemini-1.5-Flash、DeepSeek-V3 组成的 panel。

3. Artifact：官方仓库公开代码和数据；复现时保存提示、位置交换和 panel 访问。

4. 证据锚点：模型案例中，共享 UltraChat-200k 后 DBG 降至 2.1% 与 1.1%，并不必然覆盖所有任务。

5. 复用决定：适合审计 LLM judge；先验证 panel 与人工一致性及任务专属的位置、长度控制。
