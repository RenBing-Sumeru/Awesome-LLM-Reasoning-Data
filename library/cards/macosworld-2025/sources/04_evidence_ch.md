以下数字均为作者报告，尚未独立复现；比较使用论文共同的171项多语言任务切片，而非每种语言的全部任务。在§5.1和附录G配置下，表3报告Claude CUA平均success rate为37.1%、OpenAI CUA为33.8%、Gemini 2.5 Pro为18.5%、GPT-4o为5.3%、UI-TARS 7B DPO为4.8%、ShowUI 2B为1.1%。六个智能体在multi-app类别的平均值为3.7%，说明跨应用长程交互是困难的评测条件，但不能据此证明任务数据本身质量高（论文表3，第6–7页）。

在六智能体共同切片的条件下，表4报告英文平均success rate为19.3%、俄文17.7%、中文17.2%、日文15.8%、阿拉伯文13.7%。论文称阿拉伯文比英文低28.8%，并把部分差距联系到镜像布局。该比较受翻译指令、本地化AMI、模型特定prompt/adapter和具体应用版本共同影响，不能把翻译质量与UI grounding或planning效应分离（论文表4与§5.2，第8页）。

在29项英文安全任务上，表5报告Claude CUA的distracted rate为72.4%、OpenAI CUA 69.0%、UI-TARS 58.6%、ShowUI 41.4%、Gemini 17.2%、GPT-4o 0%。GPT-4o的0%同时对应100%未处理，Gemini也有79.3%未处理，因此若不分别分析`gold`、`distracted`和未处理，就不能把“未被分心”解释为防御成功（论文表5与§5.4，第8页）。

失败分析报告开源智能体的planning/action format问题、通用VLM的不精确grounding、专有CUA的过多步数，以及阿拉伯文镜像布局故障（§5.3；附录E）。这些观察支持该基准的诊断用途，但不能验证evaluator的false positive/false negative率，不能证明decontamination或权利状态，也不能把发布的任务harness视为完整轨迹数据集。
