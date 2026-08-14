/* ============================================================
 * Lead form submission — reserved for backend integration
 * ------------------------------------------------------------
 * Collects the lead data (name, email, phone + the 3 survey
 * answers) and POSTs it to your backend.
 *
 * PAYLOAD (JSON keys):
 *   name         : full name
 *   email        : email address
 *   phone        : phone number, digits only
 *   country_code : dial code, e.g. "+91"
 *   question_1   : "How familiar are you with stock market investing?"
 *   question_2   : "How long are you planning to keep your money invested?"
 *   question_3   : "What is your investible surplus?"
 *
 * BACKEND IS NOT CHOSEN YET. When it is:
 *   1. Set CONFIG.endpoint to the real URL.
 *   2. Set CONFIG.method / CONFIG.contentType to match your framework.
 *   3. Adjust `encodeBody` if you need a different wire format.
 * ============================================================ */
window.LEAD_SUBMIT = (function () {
  "use strict";

  var CONFIG = {
    // TODO: replace with the real backend endpoint (e.g. "https://api.example.com/lead").
    endpoint: "",

    // HTTP method — usually "POST".
    method: "POST",

    // One of:
    //   "application/json"                  -> JSON body (most frameworks)
    //   "application/x-www-form-urlencoded" -> classic form post
    //   "multipart/form-data"               -> if you later add a file field
    contentType: "application/json",

    // Abort the request after this many ms. 0 = no timeout.
    timeout: 10000,

    onSuccess: function (body) {
      console.info("[LEAD_SUBMIT] success:", body);
    },

    onError: function (err) {
      console.warn("[LEAD_SUBMIT] error:", err);
    }
  };

  // Reads the form fields from the page + the provided survey answers and
  // returns the payload object ready to send.
  // `answers` = array of the 3 selected option texts, in order.
  function buildPayload(answers) {
    function val(id) {
      var el = document.getElementById(id);
      return el ? el.value.trim() : "";
    }
    var dial = document.getElementById("phoneDial");
    return {
      name: val("fullName"),
      email: val("email"),
      phone: val("mobile"),
      country_code: dial ? dial.textContent : "",
      question_1: (answers && answers[0]) || "",
      question_2: (answers && answers[1]) || "",
      question_3: (answers && answers[2]) || ""
    };
  }

  function encodeBody(payload, contentType) {
    if (contentType.indexOf("json") !== -1) {
      return JSON.stringify(payload);
    }
    if (contentType.indexOf("urlencoded") !== -1) {
      return Object.keys(payload)
        .map(function (k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(payload[k] == null ? "" : payload[k]);
        })
        .join("&");
    }
    return null; // multipart/form-data is handled inside submit()
  }

  // POSTs the payload to CONFIG.endpoint. Returns a Promise that resolves on
  // success and rejects on failure. When CONFIG.endpoint is empty it runs in
  // "mock mode": it logs the payload and resolves immediately, so the page
  // keeps working while the backend is still being built.
  function submit(payload) {
    if (!CONFIG.endpoint) {
      console.info("[LEAD_SUBMIT] endpoint not configured. Payload to send:", payload);
      return Promise.resolve({ mocked: true, payload: payload });
    }

    var options = { method: CONFIG.method, headers: {} };

    if (CONFIG.contentType.indexOf("multipart") !== -1) {
      var fd = new FormData();
      Object.keys(payload).forEach(function (k) {
        if (payload[k] != null) fd.append(k, payload[k]);
      });
      options.body = fd;
    } else {
      options.headers["Content-Type"] = CONFIG.contentType;
      options.body = encodeBody(payload, CONFIG.contentType);
    }

    var controller = ("AbortController" in window) ? new AbortController() : null;
    if (controller) options.signal = controller.signal;
    var timer = controller && CONFIG.timeout
      ? setTimeout(function () { controller.abort(); }, CONFIG.timeout)
      : null;

    return fetch(CONFIG.endpoint, options)
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        var ct = res.headers.get("Content-Type") || "";
        return ct.indexOf("json") !== -1 ? res.json() : res.text();
      })
      .then(function (body) {
        CONFIG.onSuccess(body);
        return body;
      })
      .catch(function (err) {
        var e = (err && err.name === "AbortError")
          ? new Error("Request timed out after " + CONFIG.timeout + "ms")
          : err;
        CONFIG.onError(e);
        throw e;
      })
      .finally(function () {
        if (timer) clearTimeout(timer);
      });
  }

  return {
    config: CONFIG,
    buildPayload: buildPayload,
    submit: submit
  };
})();
