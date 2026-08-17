The one-sentence contribution is: select 1,000 difficult, diverse, and partly high-quality Gemini reasoning records from a 59,029-question pool, fine-tune Qwen2.5-32B-Instruct by ordinary next-token SFT, and independently control its test-time thinking budget by forcing or suppressing the end-of-thinking delimiter.

| Contract element | s1 object or signal |
|---|---|
| Source object | Answer-keyed question from one of 16 mathematics, science, code, logic, crossword, or quantitative sources |
| Trace author | Gemini 2.0 Flash Thinking Experimental for original s1K |
| Quality checks | API success and string-format heuristics; a fixed 384-example seed requires judged-correct generations |
| Difficulty checks | Qwen2.5-7B and Qwen2.5-32B attempt each question; Claude 3.5 Sonnet judges attempts against the source solution |
| Diversity signal | Claude 3.5 Sonnet assigns MSC-style domains; within-domain rank favors longer Gemini traces |
| Final object | Source question/solution plus Gemini reasoning and answer, selected to 1,000 train-only rows |
| Post-hoc label quality | Claude 3.7 judges 53.6% of final generations correct |
| Training use | Five-epoch supervised fine-tuning of Qwen2.5-32B-Instruct |
| Test-time control | End thinking at an upper budget, or suppress stopping and append `Wait` to request more thinking |

The construction contract is mixed and judgment-dependent. Programmatic logic checks 8-gram overlap, exact duplicates, API success, and formatting patterns. Claude judges whether Qwen attempts match source solutions and labels domains. Those signals can identify literal overlap, obvious failures, and model-relative difficulty; they cannot prove Gemini's intermediate reasoning, final answer, or source solution correct. Long trace length is a sampling proxy, not a verifier.

The original s1K must be distinguished from the later s1K-1.1. **Original s1K uses Gemini traces and trains the paper's s1-32B. s1K-1.1 reuses the same 1,000 questions but replaces the traces with DeepSeek-R1 outputs for the later s1.1 model.** Their teacher, model, revision, and license metadata are not interchangeable.

The directional contribution is sample-efficient data selection plus a minimal decoding intervention. Budget forcing is not evidence that more computation always helps: repeated `Wait` injection can cause loops, overthinking, context exhaustion, and non-monotonic accuracy.
