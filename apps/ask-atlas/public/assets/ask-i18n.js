(function () {
  "use strict";

  var ZH = {
    "doc.title": "问答助手 · 大模型后训练推理数据精选",
    "nav.site": "站点首页",
    "hero.eyebrow": "有据可依的研究助手",
    "hero.title": "问答助手",
    "hero.lede": "向本图鉴提问：后训练推理数据、验证器与奖励、智能体轨迹、基准与审计。",
    "hero.note": "回答优先引用配套论文与仓库卡片，模型背景补充会明确标注。",
    "composer.placeholder": "可以询问后训练推理数据、PRM、RLVR、验证器设计、智能体轨迹、基准污染，或某张论文卡片……",
    "composer.ask": "提问",
    "model.label": "模型",
    "model.auto": "自动推荐",
    "model.deep": "深度思考",
    "model.fast": "快速回答",
    "mode.title": "模式",
    "mode.explain": "解读",
    "mode.find": "找论文",
    "mode.compare": "对比",
    "mode.build": "构造数据",
    "mode.audit": "审计",
    "mode.quiz": "考考我",
    "sugg.title": "建议问题",
    "hist.title": "最近提问",
    "hist.clear": "清除",
    "answer.pill": "演示预览 · 未调用模型",
    "src.title": "引用来源",
    "footer.tag": "大模型后训练推理数据精选 · 问答助手",
    "footer.site": "返回主站",
    "footer.repo": "GitHub 仓库"
  };

  var STORE_KEY = "ask_atlas_lang";
  var originalText = new Map();
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
