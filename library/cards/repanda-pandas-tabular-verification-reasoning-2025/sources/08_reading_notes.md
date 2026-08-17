1. **One-sentence position:** RePanda converts table claims and questions into runnable pandas queries, linking reasoning, labels, and evaluation through the same execution process.

2. **Method hook:** DeepSeek-Chat generates code; execution errors and result mismatches drive automatic repair, and only reference-consistent queries are retained.

3. **Data hook:** PanTabFact contains tables, statements, labels, pandas_code, and pandas_eval, and the official release defines no fixed train/dev/test split.

4. **Evidence anchor:** Results are 84.09% on TabFact, 84.72% on WikiFact, and 75.1% on PanWiki, supporting transfer while still requiring control for model differences.

5. **Reuse decision:** It fits single-table verification and executable rewards. Sandbox code and audit query semantics rather than checking only returned values.
