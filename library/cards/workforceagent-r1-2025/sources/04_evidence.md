The paper evaluates success rate on WorkArena's seven workplace categories: dashboard, form, knowledge, filter, sort, menu, and service. “Overall” is weighted by the number of tasks in each category. These are author-reported results; this Card did not reproduce training or evaluation because neither the data nor checkpoints are public.

| Backbone / training | Overall success rate | Change reported in Table 1 |
| --- | ---: | ---: |
| Qwen2.5-3B-Instruct | 2.62 | reference |
| Qwen2.5-3B SFT | 26.59 | +23.97 vs. base |
| WorkForceAgent-R1 3B | 36.85 | +10.26 vs. SFT |
| Qwen2.5-7B-Instruct | 9.42 | reference |
| Qwen2.5-7B SFT | 27.32 | +17.90 vs. base |
| WorkForceAgent-R1 7B | 39.56 | +12.24 vs. SFT |
| Qwen2.5-14B-Instruct | 23.79 | reference |
| Qwen2.5-14B SFT | 30.20 | +6.41 vs. base |
| WorkForceAgent-R1 14B | 46.79 | +16.59 vs. SFT |

For context, Table 1 reports GPT-4o at 42.65, GPT-4.1 at 48.19, and o4-mini at 55.78. Thus the 14B result exceeds the listed GPT-4o result by 4.14 points, but not the strongest proprietary baselines. The paper text's “4.99%” comparison does not equal the table's 46.79−42.65 arithmetic, so the table values should be cited directly rather than repeating that derived claim.

Backbone transfer is positive but smaller in absolute level. On Llama-3.1-8B, Table 2 gives 8.57 for Instruct, 20.48 for SFT, 24.56 for SFT-L, and 32.41 for WorkForceAgent-R1, a +23.84-point change from Instruct.

Training conditions matter: the reported warm-up uses 1,000 randomly selected samples for one epoch; RL uses batch 128, temperature 0.6, KL `1e-3`, and eight H200 GPUs. Figure 7 shows warm-up GRPO outperforming direct Instruct-PPO and Instruct-GRPO for the 7B model. Figure 6 reports GRPO at 39.56 versus PPO at 36.08. In the reward ablation, sparse rewards are more stable; fully dense similarity rewards collapse toward a frequent `click('a324')`, while piecewise dense rewards encourage excessive actions after the termination tag (Paper Figures 6–8, §5.4).

The evidence supports a useful optimization recipe on WorkArena. It does not establish data quality independently: failures were filtered out, record counts are missing, the same task families underlie training and evaluation, and the released implementation cannot reproduce the reported run without private inputs.
