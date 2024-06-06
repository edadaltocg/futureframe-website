(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) r(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const n of t.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && r(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
          ? (t.credentials = "omit")
          : (t.credentials = "same-origin"),
      t
    );
  }
  function r(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = o(e);
    fetch(e.href, t);
  }
})();
document
  .getElementById("waitlist-form")
  .addEventListener("submit", async function (i) {
    i.preventDefault();
    const s = document.getElementById("email").value,
      o = document.getElementById("response-message");
    try {
      (
        await fetch("http://localhost/backend/api/collections/leads/records", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: s }),
        })
      ).ok
        ? ((o.textContent = "You have been added to the waitlist!"),
          (o.style.color = "green"),
          document
            .getElementById("response-message")
            .classList.remove("hidden"))
        : ((o.textContent =
            "There was an error adding you to the waitlist. Please try again."),
          (o.style.color = "red"),
          document
            .getElementById("response-message")
            .classList.remove("hidden"));
    } catch {
      (o.textContent =
        "There was an error adding you to the waitlist. Please try again."),
        (o.style.color = "red"),
        document.getElementById("response-message").classList.remove("hidden");
    }
  });
