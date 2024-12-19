(() => {
    function e(t) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e(t)
    }

    function t(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function r(e) {
        for (var r = 1; r < arguments.length; r++) {
            var a = null != arguments[r] ? arguments[r] : {};
            r % 2 ? t(Object(a), !0).forEach((function(t) {
                n(e, t, a[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : t(Object(a)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
            }))
        }
        return e
    }

    function n(t, r, n) {
        var a;
        return a = function(t, r) {
            if ("object" != e(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var a = n.call(t, r || "default");
                if ("object" != e(a)) return a;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === r ? String : Number)(t)
        }(r, "string"), (r = "symbol" == e(a) ? a : String(a)) in t ? Object.defineProperty(t, r, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[r] = n, t
    }
    jQuery(document).ready((function() {
        window.fluentFormrecaptchaSuccessCallback = function(e) {
                if (window.innerWidth < 768 && /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
                    var t = jQuery(".g-recaptcha").filter((function(t, r) {
                        return grecaptcha.getResponse(t) == e
                    }));
                    t.length && jQuery("html, body").animate({
                        scrollTop: t.first().offset().top - jQuery(window).height() / 2
                    }, 0)
                }
            }, window.ffValidationError = function() {
                var e = function() {};
                return (e.prototype = Object.create(Error.prototype)).constructor = e, e
            }(), window.ff_helper = {
                numericVal: function(e) {
                    if (e.hasClass("ff_numeric")) {
                        var t = JSON.parse(e.attr("data-formatter"));
                        return currency(e.val(), t).value
                    }
                    return e.val() || 0
                },
                formatCurrency: function(e, t) {
                    if (e.hasClass("ff_numeric")) {
                        var r = JSON.parse(e.attr("data-formatter"));
                        return currency(t, r).format()
                    }
                    return t
                }
            },
            function(e, t) {
                e || (e = {}), e.stepAnimationDuration = parseInt(e.stepAnimationDuration);
                var n = {};
                window.fluentFormApp = function(r) {
                    var a = r.attr("data-form_instance"),
                        o = window["fluent_form_" + a];
                    if (!o) return console.log("No Fluent form JS vars found!"), !1;
                    if (n[a]) return n[a];
                    var f, s, l, c, u, d, h, p, m, g, v, _, y, w, b, k, C, x, j, S, O, F, T = o.form_id_selector,
                        A = "." + a;
                    return f = i, s = {}, l = function() {
                        return t("body").find("form" + A)
                    }, u = function(e, t) {
                        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "next";
                        r.trigger("update_slider", {
                            goBackToStep: e,
                            animDuration: t,
                            isScrollTop: n,
                            actionType: a
                        })
                    }, d = function(e) {
                        try {
                            var r = e.find(":input").filter((function(e, r) {
                                return !t(r).closest(".has-conditions").hasClass("ff_excluded")
                            }));
                            w(r);
                            var n = r.serializeArray(),
                                a = n.map((function(e) {
                                    return e.name
                                }));
                            r = r.filter((function() {
                                return !t(this).closest(".ff-el-input--content").find("table").length
                            }));
                            var i = {};
                            r.each((function() {
                                var r = t(this).attr("name");
                                a.includes(r) || (t(this).is(":checkbox") || t(this).is(":radio")) && (i[r] || e.find('input[name="' + r + '"]:checked').length || (n.push({
                                    name: r,
                                    value: ""
                                }), i[r] = !0))
                            }));
                            var o = {
                                data: t.param(t.map(n, (function(e) {
                                    return {
                                        name: e.name,
                                        value: e.value
                                    }
                                }))),
                                action: "fluentform_submit",
                                form_id: e.data("form_id")
                            };
                            if (t.each(e.find("[type=file]"), (function(e, r) {
                                    var n = {},
                                        a = r.name + "[]";
                                    n[a] = [], t(r).closest("div").find(".ff-uploaded-list").find(".ff-upload-preview[data-src]").each((function(e, r) {
                                        n[a][e] = t(this).data("src")
                                    })), t.each(n, (function(e, r) {
                                        if (r.length) {
                                            var n = {};
                                            n[e] = r, o.data += "&" + t.param(n)
                                        }
                                    }))
                                })), e.find(".ff_uploading").length) {
                                var f = t("<div/>", {
                                        class: "error text-danger"
                                    }),
                                    l = t("<span/>", {
                                        class: "error-clear",
                                        html: "&times;",
                                        click: function(e) {
                                            return t(A + "_errors").html("")
                                        }
                                    }),
                                    c = t("<span/>", {
                                        class: "error-text",
                                        text: "File upload in progress. Please wait..."
                                    });
                                return t(A + "_errors").html(f.append(c, l)).show()
                            }
                            if (e.find(".ff-el-recaptcha.g-recaptcha").length) {
                                var u = e.find(".ff-el-recaptcha.g-recaptcha").data("grecaptcha_widget_id");
                                u && (o.data += "&" + t.param({
                                    "g-recaptcha-response": grecaptcha.getResponse(u)
                                }))
                            }
                            if (e.find(".ff-el-hcaptcha.h-captcha").length) {
                                var d = e.find(".ff-el-hcaptcha.h-captcha").data("hcaptcha_widget_id");
                                d && (o.data += "&" + t.param({
                                    "h-captcha-response": hcaptcha.getResponse(d)
                                }))
                            }
                            if (e.find(".ff-el-turnstile.cf-turnstile").length) {
                                var m = e.find(".ff-el-turnstile.cf-turnstile").data("turnstile_widget_id");
                                m && (o.data += "&" + t.param({
                                    "cf-turnstile-response": turnstile.getResponse(m)
                                }))
                            }
                            t(A + "_success").remove(), t(A + "_errors").html(""), e.find(".error").html(""), e.parent().find(".ff-errors-in-stack").hide(),
                                function(e, t) {
                                    var r = [],
                                        n = s;
                                    return e.hasClass("ff_has_v3_recptcha") && (n.ff_v3_recptcha = function(e, t) {
                                        var r = jQuery.Deferred(),
                                            n = e.data("recptcha_key");
                                        return grecaptcha.execute(n, {
                                            action: "submit"
                                        }).then((function(e) {
                                            t.data += "&" + jQuery.param({
                                                "g-recaptcha-response": e
                                            }), r.resolve()
                                        })), r.promise()
                                    }), jQuery.each(n, (function(n, a) {
                                        r.push(a(e, t))
                                    })), jQuery.when.apply(jQuery, r)
                                }(e, o).then((function() {
                                    p(e), h(e, o)
                                }))
                        } catch (e) {
                            if (!(e instanceof ffValidationError)) throw e;
                            b(e.messages), _(350)
                        }
                    }, h = function(r, n) {
                        var a, i, f = (a = "t=" + Date.now(), i = e.ajaxUrl, i += (i.split("?")[1] ? "&" : "?") + a);
                        if (!this.isSending) {
                            var s, l = this;
                            this.isSending = !0, t.post(f, n).then((function(n) {
                                if (!n || !n.data || !n.data.result) return r.trigger("fluentform_submission_failed", {
                                    form: r,
                                    response: n
                                }), void b(n);
                                if (s = n, n.data.append_data && O(n.data.append_data), n.data.nextAction) r.trigger("fluentform_next_action_" + n.data.nextAction, {
                                    form: r,
                                    response: n
                                });
                                else {
                                    if (r.triggerHandler("fluentform_submission_success", {
                                            form: r,
                                            config: o,
                                            response: n
                                        }), jQuery(document.body).trigger("fluentform_submission_success", {
                                            form: r,
                                            config: o,
                                            response: n
                                        }), "redirectUrl" in n.data.result) return n.data.result.message && (t("<div/>", {
                                        id: T + "_success",
                                        class: "ff-message-success",
                                        role: "status",
                                        "aria-live": "polite"
                                    }).html(n.data.result.message).insertAfter(r).focus(), r.find(".ff-el-is-error").removeClass("ff-el-is-error")), void(location.href = n.data.result.redirectUrl);
                                    var a = T + "_success",
                                        i = "#" + a;
                                    t(i).length && t(i).slideUp("fast"), t("<div/>", {
                                        id: a,
                                        class: "ff-message-success",
                                        role: "status",
                                        "aria-live": "polite"
                                    }).html(n.data.result.message).insertAfter(r).focus(), r.find(".ff-el-is-error").removeClass("ff-el-is-error"), "hide_form" == n.data.result.action ? (r.hide().addClass("ff_force_hide"), r[0].reset()) : (jQuery(document.body).trigger("fluentform_reset", [r, o]), r[0].reset());
                                    var f = t(i);
                                    f.length && !y(f[0]) && t("html, body").animate({
                                        scrollTop: f.offset().top - (t("#wpadminbar") ? 32 : 0) - 20
                                    }, e.stepAnimationDuration)
                                }
                            })).fail((function(t) {
                                if (r.trigger("fluentform_submission_failed", {
                                        form: r,
                                        response: t
                                    }), t && t.responseJSON && t.responseJSON && t.responseJSON.errors) {
                                    if (s = t, t.responseJSON.append_data && O(t.responseJSON.append_data), b(t.responseJSON.errors), _(350), r.find(".fluentform-step").length) {
                                        var n = r.find(".error").not(":empty:first").closest(".fluentform-step");
                                        if (n.length) {
                                            var a = n.index();
                                            u(a, e.stepAnimationDuration, !1)
                                        }
                                    }
                                    m(r)
                                } else b(t.responseText)
                            })).always((function(e) {
                                var t;
                                if (l.isSending = !1, null === (t = s) || void 0 === t || null === (t = t.data) || void 0 === t || null === (t = t.result) || void 0 === t || !t.hasOwnProperty("redirectUrl")) {
                                    if (m(r), window.grecaptcha) {
                                        var n = r.find(".ff-el-recaptcha.g-recaptcha").data("grecaptcha_widget_id");
                                        n && grecaptcha.reset(n)
                                    }
                                    if (window.hcaptcha) {
                                        var a = r.find(".ff-el-hcaptcha.h-captcha").data("hcaptcha_widget_id");
                                        a && hcaptcha.reset(a)
                                    }
                                    if (window.turnstile) {
                                        var i = r.find(".ff-el-turnstile.cf-turnstile").data("turnstile_widget_id");
                                        i && turnstile.reset(i)
                                    }
                                }
                            }))
                        }
                    }, g = function() {
                        "yes" != r.attr("data-ff_reinit") && (t(document).on("submit", A, (function(e) {
                            e.preventDefault(), window.ff_sumitting_form || (window.ff_sumitting_form = !0, setTimeout((function() {
                                window.ff_sumitting_form = !1
                            }), 1500), d(t(this)))
                        })), t(document).on("reset", A, (function(n) {
                            ! function(n) {
                                t(".ff-step-body", r).length && u(0, e.stepAnimationDuration, !1), n.find(".ff-el-repeat .ff-t-cell").each((function() {
                                    t(this).find("input").not(":first").remove()
                                })), n.find(".ff-el-repeat .ff-el-repeat-buttons-list").find(".ff-el-repeat-buttons").not(":first").remove();
                                var a = n.find("input[type=checkbox],input[type=radio]");
                                a.length && a.each((function(e, r) {
                                    (r = t(r)).prop("defaultChecked") ? r.closest(".ff-el-form-check").addClass("ff_item_selected") : r.closest(".ff-el-form-check.ff_item_selected").removeClass("ff_item_selected")
                                })), n.find("input[type=file]").closest("div").find(".ff-uploaded-list").html("").end().closest("div").find(".ff-upload-progress").addClass("ff-hidden").find(".ff-el-progress-bar").css("width", "0%");
                                var i = n.find('input[type="range"]');
                                i.length && i.each((function(e, r) {
                                    (r = t(r)).val(r.data("calc_value")).change()
                                })), t.each(o.conditionals, (function(e, r) {
                                    t.each(r.conditions, (function(e, t) {
                                        v(j(t.field))
                                    }))
                                }))
                            }(t(this))
                        })))
                    }, v = function(e) {
                        var r = e.prop("type");
                        null != r && ("checkbox" == r || "radio" == r ? e.each((function(e, r) {
                            var n = t(this);
                            n.prop("checked", n.prop("defaultChecked"))
                        })) : r.startsWith("select") ? e.find("option").each((function(e, r) {
                            var n = t(this);
                            n.prop("selected", n.prop("defaultSelected"))
                        })) : e.val(e.prop("defaultValue")), e.trigger("change"))
                    }, _ = function(e) {
                        var n = o.settings.layout.errorMessagePlacement;
                        if (n && "stackToBottom" != n) {
                            var a = r.find(".ff-el-is-error").first();
                            a.length && !y(a[0]) && t("html, body").delay(e).animate({
                                scrollTop: a.offset().top - (t("#wpadminbar") ? 32 : 0) - 20
                            }, e)
                        }
                    }, y = function(e) {
                        if (!e) return !0;
                        var r = e.getBoundingClientRect();
                        return r.top >= 0 && r.left >= 0 && r.bottom <= t(window).height() && r.right <= t(window).width()
                    }, b = function(e) {
                        if (r.parent().find(".ff-errors-in-stack").empty(), e)
                            if ("string" != typeof e) {
                                var n = o.settings.layout.errorMessagePlacement;
                                if (!n || "stackToBottom" == n) return k(e), !1;
                                r.find(".error").empty(), r.find(".ff-el-group").removeClass("ff-el-is-error"), t.each(e, (function(e, r) {
                                    "string" == typeof r && (r = [r]), t.each(r, (function(t, r) {
                                        C(e, r)
                                    }))
                                }))
                            } else k({
                                error: [e]
                            })
                    }, k = function(e) {
                        var r = l(),
                            n = r.parent().find(".ff-errors-in-stack");
                        e && (t.isEmptyObject(e) || (t.each(e, (function(e, a) {
                            "string" == typeof a && (a = [a]), t.each(a, (function(a, i) {
                                var o = t("<div/>", {
                                        class: "error text-danger"
                                    }),
                                    f = t("<span/>", {
                                        class: "error-clear",
                                        html: "&times;"
                                    }),
                                    s = t("<span/>", {
                                        class: "error-text",
                                        "data-name": j(e).attr("name"),
                                        html: i
                                    });
                                o.attr("role", "alert"), o.append(s, f), t(document.body).trigger("fluentform_error_in_stack", {
                                    form: r,
                                    element: j(e),
                                    message: s
                                }), n.append(o).show()
                            }));
                            var i = j(e);
                            if (i) {
                                var o = i.attr("name");
                                i.attr("aria-invalid", "true");
                                var f = t("[name='" + o + "']").first();
                                f && f.closest(".ff-el-group").addClass("ff-el-is-error")
                            }
                        })), y(n[0]) || t("html, body").animate({
                            scrollTop: n.offset().top - 100
                        }, 350), n.on("click", ".error-clear", (function() {
                            t(this).closest("div").remove(), n.hide()
                        })).on("click", ".error-text", (function() {
                            var e = t("[name='".concat(t(this).data("name"), "']")).first();
                            t("html, body").animate({
                                scrollTop: e.offset() && e.offset().top - 100
                            }, 350, (function(t) {
                                return e.focus()
                            }))
                        }))))
                    }, C = function(e, n) {
                        var a, i;
                        (a = j(e)).length ? (a.attr("aria-invalid", "true"), (i = t("<div/>", {
                            class: "error text-danger"
                        })).attr("role", "alert"), a.closest(".ff-el-group").addClass("ff-el-is-error"), a.closest(".ff-el-input--content").length ? (a.closest(".ff-el-input--content").find("div.error").remove(), t(document.body).trigger("fluentform_error_below_element", {
                            form: r,
                            element: a,
                            message: n
                        }), a.closest(".ff-el-input--content").append(i.html(n))) : (a.find("div.error").remove(), a.append(i.text(n)))) : k([n])
                    }, x = function() {
                        r.find(".ff-el-group,.ff_repeater_table").on("change", "input,select,textarea", (function() {
                            if (!window.ff_disable_error_clear) {
                                t(this).attr("aria-invalid", "false");
                                var e = o.settings.layout.errorMessagePlacement;
                                if (e || "stackToBottom" != e) {
                                    var r = t(this).closest(".ff-el-group");
                                    r.hasClass("ff-el-is-error") && r.removeClass("ff-el-is-error").find(".error.text-danger").remove()
                                }
                            }
                        }))
                    }, j = function(e) {
                        var r = l(),
                            n = t("[data-name='" + e + "']", r);
                        return (n = n.length ? n : t("[name='" + e + "']", r)).length ? n : t("[name='" + e + "[]']", r)
                    }, S = function() {
                        if (r.find(".ff-el-recaptcha.g-recaptcha").length && window.grecaptcha.ready((function() {
                                var e = r.find(".ff-el-recaptcha.g-recaptcha"),
                                    t = e.data("sitekey"),
                                    n = e.attr("id"),
                                    a = grecaptcha.render(document.getElementById(n), {
                                        sitekey: t
                                    });
                                e.attr("data-grecaptcha_widget_id", a)
                            })), r.find(".ff-el-turnstile.cf-turnstile").length) {
                            var e, t = r.find(".ff-el-turnstile.cf-turnstile"),
                                n = t.data("sitekey"),
                                a = t.attr("id"),
                                i = null === (e = window.turnstile) || void 0 === e ? void 0 : e.render(document.getElementById(a), {
                                    sitekey: n
                                });
                            t.attr("data-turnstile_widget_id", i)
                        }
                        if (r.find(".ff-el-hcaptcha.h-captcha").length) {
                            var o = r.find(".ff-el-hcaptcha.h-captcha"),
                                f = o.data("sitekey"),
                                s = o.attr("id"),
                                l = hcaptcha.render(document.getElementById(s), {
                                    sitekey: f
                                });
                            o.attr("data-hcaptcha_widget_id", l)
                        }
                    }, O = function(e) {
                        jQuery.each(e, (function(e, n) {
                            if (n) {
                                var a = r.find("input[name=" + e + "]");
                                a.length ? a.attr("value", n) : t("<input>").attr({
                                    type: "hidden",
                                    name: e,
                                    value: n
                                }).appendTo(r)
                            }
                        }))
                    }, F = {
                        initFormHandlers: function() {
                            g(), c(), x(), r.removeClass("ff-form-loading").addClass("ff-form-loaded"), r.on("show_element_error", (function(e, t) {
                                C(t.element, t.message)
                            }))
                        },
                        registerFormSubmissionHandler: g,
                        maybeInlineForm: c = function() {
                            r.hasClass("ff-form-inline") && r.find("button.ff-btn-submit").css("height", "50px")
                        },
                        reinitExtras: function() {
                            if (r.find(".ff-el-recaptcha.g-recaptcha").length && window.grecaptcha.ready((function() {
                                    var e = r.find(".ff-el-recaptcha.g-recaptcha"),
                                        t = e.data("sitekey"),
                                        n = e.attr("id"),
                                        a = grecaptcha.render(document.getElementById(n), {
                                            sitekey: t
                                        });
                                    e.attr("data-grecaptcha_widget_id", a)
                                })), r.find(".ff-el-turnstile.cf-turnstile").length && window.turnstile.ready((function() {
                                    var e = r.find(".ff-el-turnstile.cf-turnstile"),
                                        t = e.data("sitekey"),
                                        n = e.attr("id"),
                                        a = turnstile.render(document.getElementById(n), {
                                            sitekey: t
                                        });
                                    e.attr("data-turnstile_widget_id", a)
                                })), r.find(".ff-el-hcaptcha.h-captcha").length) {
                                var e = r.find(".ff-el-hcaptcha.h-captcha"),
                                    t = e.data("sitekey"),
                                    n = e.attr("id"),
                                    a = hcaptcha.render(document.getElementById(n), {
                                        sitekey: t
                                    });
                                e.attr("data-hcaptcha_widget_id", a)
                            }
                        },
                        initTriggers: function() {
                            r = l(), jQuery(document.body).trigger("fluentform_init", [r, o]), jQuery(document.body).trigger("fluentform_init_" + o.id, [r, o]), r.trigger("fluentform_init_single", [this, o]), r.find("input.ff-el-form-control").on("keypress", (function(e) {
                                return 13 !== e.which
                            })), r.data("is_initialized", "yes"), r.find("input.ff-read-only").each((function() {
                                t(this).attr({
                                    tabindex: "-1",
                                    readonly: "readonly"
                                })
                            })), r.find(".ff-el-tooltip").on("mouseenter", (function(e) {
                                var n = t(this).data("content"),
                                    a = t(".ff-el-pop-content");
                                a.length || (t("<div/>", {
                                    class: "ff-el-pop-content"
                                }).appendTo(document.body), a = t(".ff-el-pop-content")), a.html(n);
                                var i = r.innerWidth() - 20;
                                a.css("max-width", i);
                                var o = t(this).offset().left,
                                    f = a.outerWidth(),
                                    s = a.outerHeight(),
                                    l = o - f / 2 + 10;
                                l < 15 && (l = 15), a.css("top", t(this).offset().top - s - 5), a.css("left", l)
                            })), r.find(".ff-el-tooltip").on("mouseleave", (function() {
                                t(".ff-el-pop-content").remove()
                            })), t(document).on("lity:open", (function() {
                                var e;
                                null === (e = window.turnstile) || void 0 === e || e.remove(), S()
                            })), S()
                        },
                        validate: w = function(e) {
                            e.length || (e = t(".frm-fluent-form").find(":input").not(":button").filter((function(e, r) {
                                return !t(r).closest(".has-conditions").hasClass("ff_excluded")
                            }))), e.each((function(e, r) {
                                t(r).closest(".ff-el-group").removeClass("ff-el-is-error").find(".error").remove()
                            })), f().validate(e, o.rules)
                        },
                        showErrorMessages: b,
                        scrollToFirstError: _,
                        settings: o,
                        formSelector: A,
                        sendData: h,
                        addGlobalValidator: function(e, t) {
                            s[e] = t
                        },
                        config: o,
                        showFormSubmissionProgress: p = function(e) {
                            e.addClass("ff_submitting"), e.find(".ff-btn-submit").addClass("disabled").addClass("ff-working").prop("disabled", !0)
                        },
                        addFieldValidationRule: function(e, t, r) {
                            o.rules[e] || (o.rules[e] = {}), o.rules[e][t] = r
                        },
                        removeFieldValidationRule: function(e, t) {
                            e in o.rules && t in o.rules[e] && delete o.rules[e][t]
                        },
                        hideFormSubmissionProgress: m = function(e) {
                            e.removeClass("ff_submitting"), e.find(".ff-btn-submit").removeClass("disabled").removeClass("ff-working").attr("disabled", !1), r.parent().find(".ff_msg_temp").remove()
                        }
                    }, n[a] = F, F
                };
                var a = {
                        init: function() {
                            var e = this;
                            setTimeout((function() {
                                e.initMultiSelect()
                            }), 100), this.initMask(), this.initNumericFormat(), this.initCheckableActive()
                        },
                        initMultiSelect: function() {
                            t.isFunction(window.Choices) && t(".ff_has_multi_select").length && t(".ff_has_multi_select").each((function(e, n) {
                                var a = r(r({}, {
                                        removeItemButton: !0,
                                        silent: !0,
                                        shouldSort: !1,
                                        searchEnabled: !0,
                                        searchResultLimit: 50
                                    }), window.fluentFormVars.choice_js_vars),
                                    i = t(n).attr("data-max_selected_options");
                                parseInt(i) && (a.maxItemCount = parseInt(i), a.maxItemText = function(e) {
                                    var t = window.fluentFormVars.choice_js_vars.maxItemText;
                                    return t = t.replace("%%maxItemCount%%", e)
                                }), a.callbackOnCreateTemplates = function() {
                                    t(this.passedElement.element);
                                    return {
                                        option: function(e) {
                                            var t = Choices.defaults.templates.option.call(this, e);
                                            return e.customProperties && (t.dataset.calc_value = e.customProperties), t
                                        }
                                    }
                                }, t(n).data("choicesjs", new Choices(n, a))
                            }))
                        },
                        initMask: function() {
                            if (null != jQuery.fn.mask) {
                                var e = {
                                    clearIfNotMatch: window.fluentFormVars.input_mask_vars.clearIfNotMatch,
                                    translation: {
                                        "*": {
                                            pattern: /[0-9a-zA-Z]/
                                        },
                                        0: {
                                            pattern: /\d/
                                        },
                                        9: {
                                            pattern: /\d/,
                                            optional: !0
                                        },
                                        "#": {
                                            pattern: /\d/,
                                            recursive: !0
                                        },
                                        A: {
                                            pattern: /[a-zA-Z0-9]/
                                        },
                                        S: {
                                            pattern: /[a-zA-Z]/
                                        }
                                    }
                                };
                                jQuery("input[data-mask]").each((function(t, r) {
                                    var n = (r = jQuery(r)).attr("data-mask"),
                                        a = e;
                                    r.attr("data-mask-reverse") && (a.reverse = !0), r.attr("data-clear-if-not-match") && (a.clearIfNotMatch = !0), n && r.mask(n, a)
                                }))
                            }
                        },
                        initCheckableActive: function() {
                            t(document).on("change", ".ff-el-form-check input[type=radio]", (function() {
                                t(this).is(":checked") && (t(this).closest(".ff-el-input--content").find(".ff-el-form-check").removeClass("ff_item_selected"), t(this).closest(".ff-el-form-check").addClass("ff_item_selected"))
                            })), t(document).on("change", ".ff-el-form-check input[type=checkbox]", (function() {
                                t(this).is(":checked") ? t(this).closest(".ff-el-form-check").addClass("ff_item_selected") : t(this).closest(".ff-el-form-check").removeClass("ff_item_selected")
                            }))
                        },
                        initNumericFormat: function() {
                            var e = t(".frm-fluent-form .ff_numeric");
                            t.each(e, (function(e, r) {
                                var n = t(r),
                                    a = JSON.parse(n.attr("data-formatter"));
                                n.val() && n.val(window.ff_helper.formatCurrency(n, n.val())), n.on("blur change", (function() {
                                    var e = currency(t(this).val(), a).format();
                                    t(this).val(e)
                                }))
                            }))
                        }
                    },
                    i = function() {
                        return new function() {
                            this.errors = {}, this.validate = function(e, r) {
                                var n, a, i = this,
                                    o = !0;
                                e.each((function(e, f) {
                                    n = t(f), a = n.prop("name").replace("[]", ""), "repeater_item" === n.data("type") && (a = n.attr("data-name"), r[a] = r[n.data("error_index")]), r[a] && t.each(r[a], (function(e, t) {
                                        e in i && (i[e](n, t) || (o = !1, a in i.errors || (i.errors[a] = {}), i.errors[a][e] = t.message))
                                    }))
                                })), !o && this.throwValidationException()
                            }, this.throwValidationException = function() {
                                var e = new ffValidationError("Validation Error!");
                                throw e.messages = this.errors, e
                            }, this.required = function(e, r) {
                                if (!r.value) return !0;
                                var n = e.prop("type");
                                if ("checkbox" == n || "radio" == n) return e.parents(".ff-el-group").attr("data-name") && !r.per_row ? e.parents(".ff-el-group").find("input:checked").length : t('[name="' + e.prop("name") + '"]:checked').length;
                                if (n.startsWith("select")) {
                                    var a = e.find(":selected");
                                    return !(!a.length || !a.val().length)
                                }
                                return "file" == n ? e.closest("div").find(".ff-uploaded-list").find(".ff-upload-preview[data-src]").length : "false" == e.attr("is-changed") ? "" : String(t.trim(e.val())).length
                            }, this.url = function(e, t) {
                                var r = e.val();
                                if (!t.value || !r.length) return !0;
                                return /^(ftp|http|https):\/\/[^ "]+$/.test(r)
                            }, this.email = function(e, t) {
                                var r = e.val();
                                if (!t.value || !r.length) return !0;
                                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r.toLowerCase())
                            }, this.numeric = function(e, r) {
                                var n = window.ff_helper.numericVal(e);
                                return n = n.toString(), !r.value || !n || t.isNumeric(n)
                            }, this.min = function(e, t) {
                                if (!e.val()) return !0;
                                var r = window.ff_helper.numericVal(e);
                                return r = r.toString(), !t.value || !r.length || (this.numeric(e, t) ? Number(r) >= Number(t.value) : void 0)
                            }, this.max = function(e, t) {
                                if (!e.val()) return !0;
                                var r = window.ff_helper.numericVal(e);
                                return r = r.toString(), !t.value || !r.length || (this.numeric(e, t) ? Number(r) <= Number(t.value) : void 0)
                            }, this.digits = function(e, t) {
                                if (!e.val()) return !0;
                                var r = window.ff_helper.numericVal(e);
                                return r = r.toString(), !t.value || !r.length || this.numeric(e, t) && r.length == t.value
                            }, this.max_file_size = function() {
                                return !0
                            }, this.max_file_count = function() {
                                return !0
                            }, this.allowed_file_types = function() {
                                return !0
                            }, this.allowed_image_types = function() {
                                return !0
                            }, this.force_failed = function() {
                                return !1
                            }, this.valid_phone_number = function(e, t) {
                                if (!e.val()) return !0;
                                if (void 0 === window.intlTelInputGlobals) return !0;
                                if (e && e[0]) {
                                    var r = window.intlTelInputGlobals.getInstance(e[0]);
                                    if (!r) return !0;
                                    if (e.hasClass("ff_el_with_extended_validation")) return !!r.isValidNumber() && (e.val(r.getNumber()), !0);
                                    var n = r.getSelectedCountryData(),
                                        a = e.val();
                                    return !e.attr("data-original_val") && a && n && n.dialCode && (e.val("+" + n.dialCode + a), e.attr("data-original_val", a)), !0
                                }
                            }
                        }
                    },
                    o = t(".frm-fluent-form");

                function f(e) {
                    var t = fluentFormApp(e);
                    if (t) t.initFormHandlers(), t.initTriggers();
                    else var r = 0,
                        n = setInterval((function() {
                            (t = fluentFormApp(e)) && (clearInterval(n), t.initFormHandlers(), t.initTriggers()), ++r > 10 && (clearInterval(n), console.log("Form could not be loaded"))
                        }), 1e3)
                }
                t.each(o, (function(e, r) {
                    f(t(r))
                })), t(document).on("ff_reinit", (function(e, r) {
                    var n = t(r),
                        i = fluentFormApp(n);
                    if (!i) return !1;
                    i.reinitExtras(), f(n), a.init(), n.attr("data-ff_reinit", "yes")
                })), a.init()
            }(window.fluentFormVars, jQuery), jQuery(".fluentform").on("submit", ".ff-form-loading", (function(e) {
                e.preventDefault(), jQuery(this).parent().find(".ff_msg_temp").remove(), jQuery("<div/>", {
                    class: "error text-danger ff_msg_temp"
                }).html("Javascript handler could not be loaded. Form submission has been failed. Reload the page and try again").insertAfter(jQuery(this))
            }))
    })), jQuery(document.body).on("fluentform_init", (function(e, t) {}))
})();