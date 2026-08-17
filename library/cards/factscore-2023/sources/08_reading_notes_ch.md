读这篇时先看分解例子，再看 aggregate tables。核心对象是 atomic fact，不是段落级回答，也不是最终百分比本身。

必须分开三类量：response ratio、number of facts per response 和 FActScore。第一个表示系统是否回答，第二个表示它尝试给出多少事实内容，第三个估计这些被尝试事实中的 precision。

比较系统时要固定 source snapshot 和 estimator。某个系统在 Wikipedia 2023-04-01 下 FActScore 更高，不证明它的回答更完整、更新，或在另一个领域知识源下也正确。
