# Local Agent Rules

These rules apply when maintaining this repository.

## Paper Selection Requests

- Treat a "论文 workflow" or "根据 workflow 判断下一步" request as the local paper collection path: select papers, add metadata, complete cards to L4, validate, and start the local review site. It is not a request to inspect `.github/workflows`, CI, commits, pull requests, GitHub Pages, or deployment unless the user explicitly says so.
- After papers requested for local inclusion reach L4, run `python3 tools/paper_cards/card_tool.py check` and `python3 scripts/validate_data.py`, fix request-related failures, then start or reuse `PORT=8770 python3 tools/paper_cards/server.py` in the background and return `http://127.0.0.1:8770/`.
- For each paper-search prompt, choose exactly one knowledge point from `data/categories.yaml`. If multiple directions plausibly fit, ask the user one question to confirm the intended knowledge point before collecting or tagging papers. After confirmation, apply it to every paper returned by that prompt with `python3 tools/paper_cards/migrate.py batch --category <category_id> --entries <entry_id...> --request <prompt>`; `--batch <id>` is optional because the tool generates a unique batch ID by default. The command writes the same singleton label to `data/papers.yaml.category`, `header_zh.category_ids`, and `search_queue.track_guess`, and records `prompt_batch_id` in each paper entry. Do not change this label from Review.
- For repository upgrades, use `tools/paper_cards/migrate.py move-out`, update the project, run only the supplied version-specific adjustment script, then run `move-in`, `verify-current`, card checks, data validation, and the local Review service. Do not make implicit merge edits during migration.
- When asked to synchronize this checkout to the latest `V2`, first run `git status --short` and `git fetch origin V2`. Never run `pull`, `rebase`, `reset`, or a merge on a dirty worktree; ask the user whether to commit, stash, or discard those changes. For a clean checkout, use `git merge --ff-only FETCH_HEAD`. If local Paper Card records must survive the update, archive them with `migrate.py move-out` before making the checkout clean, then restore with `move-in`, run `verify-current`, `card_tool.py check`, and `scripts/validate_data.py` afterward.

- If the user asks for papers, directions, latest work, top conference work, or a topic scan, return a concrete candidate set instead of only explaining how to search.
- Do not ask the user to approve the topic selection when the request already gives a usable topic, year, venue tier, or research area.
- Ask a short clarification only when the request is blocking-ambiguous, such as missing the research area, year window, venue tier, target count, or whether local insertion is required.
- Prefer official primary sources: venue pages, arXiv abs pages with acceptance comments, ACL Anthology, OpenReview, PMLR, DOI pages, official project pages, official GitHub repositories, and official Hugging Face releases.
- For each returned paper, include the direction label, paper title, venue/year, official link, why it fits the user's request, and the data object / verifier / reward / environment / audit surface it contributes.
- When the user asks to add items locally or promote them, create or update `data/papers.yaml` and complete bilingual `paper_cards/sources/<entry_id>/` files so the entry reaches `L4_chinese_review_ready`. Do not wait for a separate topic-approval round.

## L4 Paper Card Content

Keep the 9-section card topics unchanged. Sections 1, 2, 3, and 5 must collect enough information for topic screening and L4 promotion:

- `01_problem`: primary source, venue/date, decision boundary, concrete problem, atlas relevance, data object or evaluation surface, L4 collection note.
- `02_core_idea`: one-sentence contribution, core mechanism, data object or evaluation surface, feedback contract, direction label, closest comparisons.
- `03_method`: inputs, pipeline, outputs, verifier/reward/judge/environment, training or evaluation use, artifacts to verify, reproducibility notes.
- `05_novelty`: prior-work baseline, what changes, why it is a 2026 direction signal, top-conference quality signal, what is not new, reuse checks.
