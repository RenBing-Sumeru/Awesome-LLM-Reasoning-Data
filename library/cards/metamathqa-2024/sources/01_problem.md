# Problem

Math SFT datasets commonly multiply solutions while leaving the seed questions fixed, so they add response volume without necessarily adding new reasoning views. This limits question diversity and can make gains saturate as more near-equivalent traces are added.

MetaMath bootstraps both sides of the record: GPT-3.5-Turbo generates answer-augmented solutions plus rephrased, self-verification, and forward-backward questions, producing the public 395k-record MetaMathQA set for SFT.

**L4 facts:** Primary source: OpenReview `N8N0hgNDRt`; venue/date: ICLR 2024; decision boundary: public math question-rationale records, not model weights alone; atlas object/evaluation: transformed GSM8K/MATH instruction + worked answer, evaluated by SFT accuracy; collection note: `L4_carded`, one Track 01 category.

