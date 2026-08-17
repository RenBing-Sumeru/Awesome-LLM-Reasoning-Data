The main empirical evidence is a ten-agent evaluation over all 275 WebArXiv tasks. Reported total success rates include GPT-o1 at 56.7%, Gemini-2.5 at 51.1%, LiteWebAgent at 44.0%, GPT-o4-mini at 43.8%, Gemini-1.5-pro at 42.9%, GPT-4-Turbo at 36.4%, OpenWebAgent at 33.8%, GPT-4o at 32.7%, Gemini-2.0 at 30.6%, and SeeAct at 23.6%.

Category results show that difficulty varies by task type. GPT-o1 leads platform/organization information and paper retrieval, Gemini-2.5 leads rules/accounts and advanced search/filtering, and LiteWebAgent leads deep paper extraction. Advanced search and filtering is the hardest category in the paper's analysis, with only one model above 45%.

The dynamic reflection evidence compares base agents against versions that select a relevant past observation. GPT-o1 improves from 56.7% to 61.8% total success, and Gemini-2.5 improves from 51.1% to 60.0%. GPT-4-Turbo also improves from 36.4% to 40.2%, while some pairings show category-level regressions, so the method is useful but not uniformly positive.

The strongest evidence for the benchmark itself is the construction protocol: 55 retained tasks per category, three independent annotators verifying final answers, and strict answer matching during evaluation. The evidence is weaker for artifact reuse until the anonymous repository is inspected for exact evaluator files, prompts, and license.
