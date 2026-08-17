"""Shared machinery for the card atlas.

`library/` is the only source of truth. `config` resolves paths, settings, the
controlled vocabulary, and the publish rule; `markdown` renders card prose;
`labels` holds the bilingual display strings that are not part of the vocabulary.
The CLIs in `scripts/` stay thin wrappers over these.
"""
