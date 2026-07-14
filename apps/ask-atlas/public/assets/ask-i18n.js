(function () {
  "use strict";

  var ZH = {
    "doc.title": "问答助手 · 大模型后训练推理数据精选",
    "nav.site": "站点首页",
    "nav.admin": "管理后台",
    "nav.login": "使用 GitHub 登录",
    "nav.logout": "退出登录",
    "hero.eyebrow": "有据可依的研究助手",
    "hero.title": "问答助手",
    "hero.lede": "借助配套论文、论文地图、卡片与结构化元数据，学习后训练推理数据。",
    "hero.sig1": "🧭 概念讲解",
    "hero.sig2": "📚 论文查找",
    "hero.sig3": "🧪 验证器指导",
    "hero.sig4": "🧯 审计助手",
    "console.k1": "回答依据",
    "console.v1": "论文 → 仓库 → 模型",
    "console.k2": "擅长",
    "console.v2": "学习路径、论文地图、审计",
    "console.k3": "维护者视图",
    "console.v3": "配额、成本、问题与缺口",
    "quota.badge": "尚未登录",
    "quota.small": "今日可用提问次数",
    "quota.base.k": "基础",
    "quota.base.v": "每日 2 次",
    "quota.star.k": "星标",
    "quota.star.v": "每日 10 次",
    "quota.fork.k": "复刻",
    "quota.fork.v": "+20 次",
    "trust.1.k": "01 论文",
    "trust.1.v": "优先引用配套入门论文",
    "trust.2.k": "02 仓库",
    "trust.2.v": "README、方向与卡片",
    "trust.3.k": "03 模型",
    "trust.3.v": "明确标注的兜底回答",
    "notice.title": "使用须知",
    "notice.body": "安全后端接入后，这个免费助手由项目维护者付费支持。为防止滥用并改进本图鉴，后端会记录 GitHub 身份、问题与回答文本（除非你选择不保存）、所选模型、token 用量、预估成本、引用来源与反馈。请勿输入隐私、敏感或保密信息。",
    "notice.optout": "不要在项目日志中保存我的原始问题与回答文本，仅保留哈希、用量、来源与成本元数据。当前问题仍会发送给所配置的模型服务以生成回答。",
    "notice.accept": "我已了解并同意",
    "notice.status": "请先使用 GitHub 登录以确认本须知。",
    "launch.eyebrow": "上线预览",
    "launch.title": "一个真实的学习控制台，等待安全后端开关。",
    "launch.lede": "公开页面展示产品界面；OAuth、模型调用、配额、token 计费与管理分析都在后端。",
    "launch.1.t": "前端",
    "launch.1.d": "Pages 界面、模式、上下文链接、来源面板与历史记录",
    "launch.2.t": "后端代码",
    "launch.2.d": "OAuth、RAG、360 API 路由、配额预留与日志",
    "launch.3.t": "增长规则",
    "launch.3.d": "基础每日 2 次，星标用户每日 10 次，复刻奖励 +20",
    "launch.4.t": "待激活",
    "launch.4.d": "配好 Vercel、Postgres、Redis、OAuth 与密钥后设置 HTTPS 后端地址",
    "recipe.1.tag": "🧭 入门",
    "recipe.1.t": "从零开始",
    "recipe.1.btn": "生成领域地图",
    "recipe.2.tag": "📚 综述",
    "recipe.2.t": "按子方向找论文",
    "recipe.2.btn": "生成阅读清单",
    "recipe.3.tag": "🏗️ 构造",
    "recipe.3.t": "设计数据集配方",
    "recipe.3.btn": "起草配方",
    "recipe.4.tag": "🧯 审计",
    "recipe.4.t": "检查数据发布",
    "recipe.4.btn": "生成检查清单",
    "mode.title": "模式",
    "mode.explain": "🧭 解读",
    "mode.find": "📚 找论文",
    "mode.compare": "🔁 对比",
    "mode.build": "🏗️ 构造数据",
    "mode.audit": "🧯 审计",
    "mode.quiz": "🎓 考考我",
    "model.label": "模型",
    "model.auto": "自动推荐",
    "reward.title": "奖励",
    "reward.body": "基础用户每日可提问 2 次；星标用户每日 10 次；复刻用户可获一次性 +20 次奖励。",
    "reward.m1": "<b>未加星</b>每日 2 次",
    "reward.m2": "<b>星标</b>每日 10 次",
    "reward.m3": "<b>复刻</b>一次 +20",
    "reward.refresh": "查询星标/复刻奖励",
    "sugg.1": "什么是后训练推理数据？",
    "sugg.2": "应该先读哪些 PRM 论文？",
    "sugg.3": "如何构建数学 RLVR 数据集？",
    "sugg.4": "智能体轨迹数据应该审计什么？",
    "composer.placeholder": "可以询问本项目、后训练推理数据、PRM、RLVR、验证器设计、智能体轨迹、基准污染，或某张论文卡片……",
    "composer.ask": "提问",
    "src.title": "引用来源",
    "src.empty": "回答生成后会显示引用来源。",
    "hist.title": "最近提问",
    "hist.empty": "登录后可查看最近的提问。",
    "act.title": "后续操作",
    "act.1": "生成阅读路径",
    "act.2": "概念对比",
    "act.3": "审计清单",
    "ev.eyebrow": "证据约定",
    "ev.title": "每个回答都会告诉你论断来自哪里。",
    "ev.lede": "问答助手会优先查阅配套论文，其次是本仓库的论文地图与卡片，仅当仓库证据不足时才使用模型背景知识。",
    "ev.1.t": "配套论文",
    "ev.1.d": "入门论文覆盖该概念时的最高可信来源。",
    "ev.2.t": "仓库图鉴",
    "ev.2.d": "README、指南、方向、卡片与生成的元数据。",
    "ev.3.t": "模型背景",
    "ev.3.d": "范围内空缺时明确标注的兜底回答。",
    "impact.1.t": "在领域或仓库内提问",
    "impact.1.d": "问题可以涉及后训练推理数据、验证器、奖励、智能体轨迹、评测、审计话题，或如何使用本项目。",
    "impact.2.t": "回答基于图鉴来源",
    "impact.2.d": "回答会检索 README、指南、论文地图、卡片、生成元数据与配置的配套论文全文。",
    "impact.3.t": "让好奇心带来成长",
    "impact.3.d": "GitHub 登录启用配额、星标/复刻奖励、反馈，以及揭示缺失文档与卡片的管理分析。"
  };

  var STORE_KEY = "ask_atlas_lang";
  var originalText = new Map();
  var originalHtml = new Map();
  var originalPlaceholder = new Map();
  var englishTitle = document.title;
  var current = "en";

  function readStored() {
    try { return localStorage.getItem(STORE_KEY); } catch (_e) { return null; }
  }

  function writeStored(value) {
    try { localStorage.setItem(STORE_KEY, value); } catch (_e) {}
  }

  function detect() {
    var param = new URLSearchParams(window.location.search).get("lang");
    var raw = param || readStored() || "en";
    return String(raw).toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
  }

  function apply(lang) {
    current = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!(key in ZH)) return;
      if (!originalText.has(el)) originalText.set(el, el.textContent);
      el.textContent = lang === "zh" ? ZH[key] : originalText.get(el);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (!(key in ZH)) return;
      if (!originalHtml.has(el)) originalHtml.set(el, el.innerHTML);
      el.innerHTML = lang === "zh" ? ZH[key] : originalHtml.get(el);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (!(key in ZH)) return;
      if (!originalPlaceholder.has(el)) originalPlaceholder.set(el, el.getAttribute("placeholder") || "");
      el.setAttribute("placeholder", lang === "zh" ? ZH[key] : originalPlaceholder.get(el));
    });
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = lang === "zh" ? ZH["doc.title"] : englishTitle;
    var toggle = document.getElementById("langToggle");
    if (toggle) toggle.textContent = lang === "zh" ? "English" : "中文";
    writeStored(lang);
    var url = new URL(window.location.href);
    if (lang === "zh") url.searchParams.set("lang", "zh");
    else url.searchParams.delete("lang");
    history.replaceState(null, "", url);
    window.dispatchEvent(new CustomEvent("ask-atlas-lang", { detail: { lang: lang } }));
  }

  function init() {
    var toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        apply(current === "zh" ? "en" : "zh");
      });
    }
    var lang = detect();
    if (lang === "zh") apply("zh");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.ASK_ATLAS_I18N = { apply: apply, zh: ZH };
})();
