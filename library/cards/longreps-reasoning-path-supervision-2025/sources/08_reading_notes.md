1. **Positioning:** LongRePS supervises long-context aggregation with filtered reasoning paths.
2. **Method handle:** It prepares documents, self-samples paths, filters by evidence and answer, and applies SFT.
3. **Data handle:** 6,300 records preserve retrieval or reasoning paths and final outputs.
4. **Evidence anchor:** MuSiQue gains are 13.6/3.8 points and cross-domain averages 9.3/8.1.
5. **Reuse decision:** It fits multi-hop long documents; verify that paths truly depend on evidence. Reproduction should also fix retrieval-corpus versions, context length, and the number of candidate paths.
