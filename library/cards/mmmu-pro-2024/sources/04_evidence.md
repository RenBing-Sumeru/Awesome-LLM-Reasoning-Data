The paper reports that leading multimodal models drop substantially from MMMU to MMMU-Pro, with the official abstract highlighting 16.8 to 26.9 point drops for top models. The official Hugging Face card reports corrected overall scores after answer fixes, including GPT-4o at 54.2, Gemini-2.5-Pro at 58.2, and o3 at 55.3 on the listed MMMU-Pro table.

Row-level evidence is still an answer-key comparison for each benchmark item, not a verified reasoning trace. The stronger evidence is the construction audit: text-only solvable items are targeted, and the vision-only setting changes the available information.

The evidence boundary is version sensitive. The dataset card records answer corrections on 2026-07-10, so old leaderboard numbers, unpinned dataset revisions, and prompt variants should not be mixed.
