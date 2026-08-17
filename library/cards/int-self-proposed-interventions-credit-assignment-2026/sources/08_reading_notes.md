1. **Positioning:** InT replaces uniform trajectory-level credit with a short intervention at the first error.
2. **Method handle:** It samples failed solutions, locates errors against references, generates interventions, and performs SFT plus RL.
3. **Data handle:** InT-SFT contains 2,213 Parquet prefix–intervention records.
4. **Evidence anchor:** The 4B model gains nearly 14 points over its base on IMO-AnswerBench.
5. **Reuse decision:** It fits verifiable mathematical RL; audit equivalent solution paths and earliest-error labels first. Reuse should also record intervention positions, continuation success rates, and additional rollout cost.
