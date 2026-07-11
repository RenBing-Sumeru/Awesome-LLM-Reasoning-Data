# Review Workflow Simplification Design

## Reading and download controls

Review preview defaults to the Chinese merged Card and exposes a two-button language switch with `中文合并版` and `英文合并版`. The selected language chooses the corresponding existing preview payload field without changing Card content.

The controls bar has one action, `一键下载全部 Card`. It packages every current Card ID, regardless of L level or list filter, and does not write a downloaded status. Selection state, row checkboxes, selected/undownloaded download actions, downloadable count, and downloaded labels are removed from the Review UI.

## Review layout

The detail header retains identity, title, metadata, institutions and source links, but removes the one-sentence summary line. The institution editor moves from Update below the Review search-pool annotation form, while preserving its Card-local write behavior.

The Review queue action bar orders controls as `保存人工标注`, `进入 Update`, and `完成审阅`. The L5-to-L4 downgrade button is removed from the UI.

## Compatibility and verification

The existing package endpoint continues to produce the same ZIP layout but permits every known Card. Download does not mutate review status. Frontend tests assert the removed controls are absent, the required ordering is present, and preview language selection reads the expected preview field; Card-tool tests cover packaging an L4 Card.
