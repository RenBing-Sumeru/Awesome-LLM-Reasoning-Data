Claim — DCQ can estimate verbatim contamination in fully black-box models and exposes substantially more memorization than replication prompting.

Setup — the controlled experiment inserted 1,000 MeetingBank or AuTexTification records into GPT-3.5 and Llama 2, then tested 100 sampled items at true contamination rates of 100%, 50%, and 0%. The comparison was a replication-based detector.

Result — for GPT-3.5 on MeetingBank, DCQ estimated 85.87–87.00% at 100% contamination, 46.31–49.00% at 50%, and 0–3% at zero; replication reported 1%, 0%, and 0%. In the wild, DCQ found GPT-4 GSM8K-train at 78.79–79.00%.

Boundary — results estimate verbatim memorization through this quiz design, not metadata or semantic contamination, and the controlled injection setup cannot reproduce every proprietary pretraining path.
