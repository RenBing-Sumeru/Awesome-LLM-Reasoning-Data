# Core idea

MathCoder makes an executed reasoning trajectory the supervised target: natural-language blocks state a plan, code blocks perform difficult calculations, execution blocks return observations, and later text interprets those observations before the final answer. GPT-4 authors ground-truth-filtered seed traces, MathCoder-Initial authors self-consistent interpolation traces, answer agreement is the selection signal, and Llama-2/CodeLlama SFT is the consumer; unlike MAmmoTH records that choose either text or code, the LCE record preserves their causal alternation and therefore fits Track 01 directly.

Google Scholar citations: 225（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=MathCoder%3A+Seamless+Code+Integration+in+LLMs+for+Enhanced+Mathematical+Reasoning&author=Ke+Wang&hl=en）

**Open dataset:** yes  
**Dataset name:** MathCodeInstruct  
**Official URL:** https://huggingface.co/datasets/MathLLMs/MathCodeInstruct  
**Scale:** 80k reported training trajectories: 49k GSM8K/MATH seed solutions plus 31k interpolated-problem solutions  
**Record form:** nested `messages`; each role has a `content` list whose items use `type: text`, `type: code`, or `type: execution` and store payloads in `content`  
**File / storage format:** one non-gated `train_80k.jsonl` file, with about 243.4 MB stored according to public metadata  
**Domains / languages:** English grade-school and competition mathematics, with Python and mathematical notation inside the trajectories  
**Construction and filtering:** GPT-4 seed annotation plus ground-truth answer matching; GPT-4 problem interpolation plus MathCoder-Initial generation and three-answer agreement  
**License / access constraints:** public Apache-2.0 dataset and code; upstream GSM8K/MATH terms and OpenAI-generated-content terms still require review  
**Intended use:** mathematical SFT, execution-aware reasoning, self-distillation, trajectory-format ablation, and tool-feedback audits
