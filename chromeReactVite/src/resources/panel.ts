export const exampleHtml : string = `<td id="resultsCol">
    <div id="resultsColTopSpace"></div>
    <div class="messageContainer">
        <script type="text/javascript">
            function setRefineByCookie(refineByTypes) {
                var expires = new Date();
                expires.setTime(expires.getTime() + 10 * 1000);
                for (var i = 0; i < refineByTypes.length; i++) {
                    setCookie(refineByTypes[i], "1", expires);
                }
            }
        </script>
    </div>

    <style type="text/css">
        #increased_radius_result {
            font-size: 1rem;
            font-style: italic;
        }

        #original_radius_result {
            font-size: 0.8125rem;
            font-style: italic;
            color: #666666;
        }
    </style>
    <div class="resultsTop">
        <div class="mosaic-zone" id="mosaic-zone-aboveJobCards">
            <div
                    id="mosaic-provider-serpreportjob"
                    class="mosaic mosaic-provider-serpreportjob mosaic-provider-hydrated"
            >
                <div class="mosaic-reportcontent-wrapper">
                    <div class="mosaic-reportcontent-content"></div>
                </div>
            </div>
        </div>
        <script type="text/javascript">
            try {
                window.mosaic.onMosaicApiReady(function () {
                    var zoneId = "aboveJobCards";
                    var providers = window.mosaic.zonedProviders[zoneId];

                    if (providers) {
                        providers
                                .filter(function (p) {
                                    return window.mosaic.lazyFns[p];
                                })
                                .forEach(function (p) {
                                    return window.mosaic.api.loadProvider(p);
                                });
                    }
                });
            } catch (e) {
            }
        </script>
        <link rel="stylesheet" href="/styles/uploadedResumePromo.css"/>
        <div
                class="uploadedResumePromo hidden regBorderTop"
                id="uploadedResumePromo"
        >
            <script type="text/javascript">
                if (null !== call_when_jsall_loaded) {
                    call_when_jsall_loaded(function () {
                        if (!!window.logPromoImpression && false) {
                            window.logPromoImpression(
                                    "trk.origin=jobsearch&trk.variant=postApplySerpPromo&trk.tk=1f2v8c5vlt5ne801",
                                    "resume"
                            );
                        }
                        if (!!window.logPromoConditionMet) {
                            window.logPromoConditionMet(
                                    "trk.tk=1f2v8c5vlt5ne801&ctk=1etcc5dums7cj800&conditionMet=postApplySerpPromo",
                                    window["indeedCsrfToken"]
                            );
                        }
                    });
                }
            </script>
            <div id="uploadedResumePromoPinkMask" class="uploadedResumePromoPinkMask">
                <div
                        id="uploadedResumePromoCloseButton"
                        class="uploadedResumePromoCloseButton maskTop"
                        onclick="window.setCookie('hideUploadedResumePromo', '1'); window.deleteIACookies('.indeed.com'); document.getElementById('uploadedResumePromo').style.display = 'none'; window.logPromoClick('trk.origin=jobsearch&amp;trk.variant=postApplySerpPromo&amp;trk.tk=1f2v8c5vlt5ne801', 'uploadedResumePromoCloseButton', '');"
                >
                    <a class="icl-CloseButton uploadedResumePromoCloseButton-close">
                        <svg
                                role="img"
                                class="icl-Icon icl-Icon--sm icl-Icon--black close"
                                aria-label="Close"
                        >
                            <g>
                                <path
                                        d="M14.53,4.53L13.47,3.47,9,7.94,4.53,3.47,3.47,4.53,7.94,9,3.47,13.47l1.06,1.06L9,10.06l4.47,4.47,1.06-1.06L10.06,9Z"
                                ></path>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
            <div
                    id="uploadedResumePromoContentContainer"
                    class="uploadedResumePromoContentContainer"
            >
                <div class="uploadedResumePromoTitle titleUp">
                    Forgot to save your resume?
                </div>
                <div class="uploadedResumePromoText" id="uploadedResumePromoText">
                    Use <span id="uploadedResumePromoFileName"></span> for
                    <span id="uploadedResumePromoEmail"></span> to create your resume on
                    Indeed and apply to jobs quicker.
                </div>
                <div class="uploadedResumePromoCta">
                    <style type="text/css">
                        .cta_button {
                            text-decoration: none !important;
                            margin: 12px !important;
                        }

                        .cta_button.blue {
                            color: #f8f8f9 !important;
                        }

                        .cta_button.grey {
                            color: #000000 !important;
                        }

                        .cta_button.uploaded {
                            border-radius: 100px !important;
                            font-size: 0.75rem;
                            line-height: 1rem;
                            text-align: center;
                            padding: 8px;
                        }

                        .cta_button.continue {
                            color: #085ff7 !important;
                            background-color: #ffffff !important;
                            border: 2px solid #195ff7 !important;
                            width: 163px;
                        }

                        .cta_button.accept {
                            color: #ffffff !important;
                            background-color: #085ff7 !important;
                            border: 2px solid #085ff7 !important;
                            width: 106px;
                            display: inline-block;
                        }

                        .cta_button.back {
                            color: #085ff7 !important;
                            background-color: #ffffff !important;
                            border: 2px solid #cccccc !important;
                            width: 106px;
                            margin-left: -4px !important;
                        }
                    </style>
                    <span dir="ltr"
                    ><a
                            class="icl-Button icl-Button--secondary icl-Button--sm cta_button uploaded continue"
                            onclick="document.getElementById('uploadedResumePromoCloseButton').style.display = 'none'; if (document.getElementById('uploadedResumePromoPinkMask')) {document.getElementById('uploadedResumePromoPinkMask').style.height = '50px';}document.getElementById('uploadedResumePromoContentContainer').style.display = 'none'; document.getElementById('uploadedResumePromoPolicyContainer').style.display = 'block'; window.logPromoClick('trk.origin=jobsearch&amp;trk.variant=postApplySerpPromo&amp;trk.tk=1f2v8c5vlt5ne801&amp;trk.pos=postApplySerpPromoClick', 'resume','');"
                    >Save your resume</a
                    ></span
                    >
                </div>
            </div>
            <div
                    id="uploadedResumePromoPolicyContainer"
                    class="uploadedResumePromoPolicyContainer"
            >
                <div class="uploadedResumePromoPolicy">
                    By creating an Indeed Resume, you agree to Indeed's
                    <a href="/legal#tos" class="uploadedResumePolicyHighlight"
                    >Terms of Service</a
                    >,
                    <a href="/legal#cookies" class="uploadedResumePolicyHighlight"
                    >Cookie Policy</a
                    >
                    and
                    <a href="/legal#privacy" class="uploadedResumePolicyHighlight"
                    >Privacy Policy</a
                    >, and agree to be contacted by employers via Indeed. You consent to
                    receiving marketing messages from Indeed and may opt from receiving
                    such messages by following the unsubscribe link in our messages, or as
                    detailed in our terms.
                </div>
                <div class="uploadedResumePromoConfirmCta">
                    <style type="text/css">
                        .cta_button {
                            text-decoration: none !important;
                            margin: 12px !important;
                        }

                        .cta_button.blue {
                            color: #f8f8f9 !important;
                        }

                        .cta_button.grey {
                            color: #000000 !important;
                        }

                        .cta_button.uploaded {
                            border-radius: 100px !important;
                            font-size: 0.75rem;
                            line-height: 1rem;
                            text-align: center;
                            padding: 8px;
                        }

                        .cta_button.continue {
                            color: #085ff7 !important;
                            background-color: #ffffff !important;
                            border: 2px solid #195ff7 !important;
                            width: 163px;
                        }

                        .cta_button.accept {
                            color: #ffffff !important;
                            background-color: #085ff7 !important;
                            border: 2px solid #085ff7 !important;
                            width: 106px;
                            display: inline-block;
                        }

                        .cta_button.back {
                            color: #085ff7 !important;
                            background-color: #ffffff !important;
                            border: 2px solid #cccccc !important;
                            width: 106px;
                            margin-left: -4px !important;
                        }
                    </style>
                    <span dir="ltr"
                    ><form
                            id="uploadedResumePromoForm"
                            class="uploadedResumePromoForm"
                            method="POST"
                            novalidate=""
                            action="/account/myindregister"
                    >
              <input type="hidden" name="from" value="inlineResumeCta"/><input
                            type="submit"
                            class="icl-Button icl-Button--secondary icl-Button--sm cta_button uploaded accept"
                            onclick="window.setCookie('hideUploadedResumePromo', '1'); window.logPromoClick('trk.origin=jobsearch&amp;trk.variant=postApplySerpPromo&amp;trk.tk=1f2v8c5vlt5ne801&amp;trk.pos=postApplyPromoDisclaimerClick', 'resume','/promo/resume?from=inlineUploadedCta&amp;trk.origin=inlineUploadedCta');"
                            value="Accept"
                    /></form
                    ></span>
                    <style type="text/css">
                        .cta_button {
                            text-decoration: none !important;
                            margin: 12px !important;
                        }

                        .cta_button.blue {
                            color: #f8f8f9 !important;
                        }

                        .cta_button.grey {
                            color: #000000 !important;
                        }

                        .cta_button.uploaded {
                            border-radius: 100px !important;
                            font-size: 0.75rem;
                            line-height: 1rem;
                            text-align: center;
                            padding: 8px;
                        }

                        .cta_button.continue {
                            color: #085ff7 !important;
                            background-color: #ffffff !important;
                            border: 2px solid #195ff7 !important;
                            width: 163px;
                        }

                        .cta_button.accept {
                            color: #ffffff !important;
                            background-color: #085ff7 !important;
                            border: 2px solid #085ff7 !important;
                            width: 106px;
                            display: inline-block;
                        }

                        .cta_button.back {
                            color: #085ff7 !important;
                            background-color: #ffffff !important;
                            border: 2px solid #cccccc !important;
                            width: 106px;
                            margin-left: -4px !important;
                        }
                    </style>
                    <span dir="ltr"
                    ><a
                            class="icl-Button icl-Button--secondary icl-Button--sm cta_button uploaded back"
                            onclick="document.getElementById('uploadedResumePromoCloseButton').style.display = 'block'; if (document.getElementById('uploadedResumePromoPinkMask')) {document.getElementById('uploadedResumePromoPinkMask').style.height = '81px';}document.getElementById('uploadedResumePromoContentContainer').style.display = 'block'; document.getElementById('uploadedResumePromoPolicyContainer').style.display = 'none'; window.logPromoClick('trk.origin=jobsearch&amp;trk.variant=postApplySerpPromo&amp;trk.tk=1f2v8c5vlt5ne801', 'resume','');"
                    >Back</a
                    ></span
                    >
                </div>
            </div>
        </div>
        <div id="resumePromo" data-tn-section="resumePromo">
            <a
                    tabindex="-1"
                    aria-hidden="true"
                    href="/promo/resume"
                    onclick="this.href = appendParamsOnce( this.href, '?from=serptop3&amp;subfrom=resprmrtop&amp;trk.origin=jobsearch&amp;trk.variant=resprmrtop&amp;trk.tk=1f2v8c5vlt5ne801')"
            ><span role="img" class="new-ico"></span
            ></a>
            <a
                    href="/promo/resume"
                    onclick="this.href = appendParamsOnce( this.href, '?from=serptop3&amp;subfrom=resprmrtop&amp;trk.origin=jobsearch&amp;trk.variant=resprmrtop&amp;trk.tk=1f2v8c5vlt5ne801')"
                    class="resume-promo-link"
            ><b>Upload your resume</b></a
            >
            - Let employers find you
        </div>
        <h1 id="jobsInLocation" class="currentSearchLabel-a11y-contrast-color">
            new york jobs in New York, NY
        </h1>
        <div class="secondRow">
            <div class="serp-filters-sort-by-container">
                <span class="serp-filters-sort-by-label">Sort&nbsp;by: </span>
                <span class="no-wrap"
                ><b>relevance</b> -
          <a
                  href="/jobs?q=new+york&amp;l=NewYork%2CNY&amp;sort=date"
                  rel="nofollow"
          >date</a
          ></span
                >
            </div>
            <div class="searchCountContainer">
                <div id="searchCount" class="searchCount-a11y-contrast-color">
                    <div id="searchCountPages">Page 1 of 51,389 jobs</div>
                    <div class="serp-relevance-explanation">
                        <button
                                class="serp-relevance-explanation-helpIcon serp-helpIcon"
                                type="button"
                                aria-label="help icon"
                                aria-haspopup="true"
                        >
                            <svg
                                    width="16"
                                    height="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                                <defs>
                                    <linearGradient
                                            x1="50%"
                                            y1="0%"
                                            x2="50%"
                                            y2="100%"
                                            id="helpIcon-a"
                                    >
                                        <stop
                                                stop-color="#FFF"
                                                stop-opacity=".5"
                                                offset="0%"
                                        ></stop>
                                        <stop stop-opacity=".5" offset="100%"></stop>
                                    </linearGradient>
                                    <linearGradient
                                            x1="50%"
                                            y1="0%"
                                            x2="50%"
                                            y2="100%"
                                            id="helpIcon-b"
                                    >
                                        <stop stop-opacity=".5" offset="0%"></stop>
                                        <stop stop-opacity=".5" offset="100%"></stop>
                                    </linearGradient>
                                    <path
                                            d="M7.1537 3.391C8.373 3.4665 9.3466 4.44 9.4223 5.6594 9.4886 6.7088 8.8736 7.6823 7.9 8.0702c-.1413.0563-.2358.1796-.2358.321v.6619h-1.324v-.662c0-.6894.4162-1.2944 1.0687-1.5497.4442-.1795.7283-.6244.6995-1.0968-.0382-.548-.4824-.9922-1.0304-1.0304-.3116-.0282-.605.085-.8315.2934-.2271.2077-.3504.4911-.3504.8034v.662H4.5728v-.662c0-.662.2834-1.3146.7658-1.7682.4911-.463 1.1343-.6995 1.815-.6519zM6.33 10.22c0-.368.2586-.6649.6606-.6683.004 0 .0047-.002.006-.002h.0114v.004c.412.0157.662.3064.662.6656-.0087.3736-.2566.6595-.662.667-.0013.0034-.0033.002-.0053.002-.0034 0-.006.0014-.008.0014-.0027 0-.0027-.0014-.004-.0014-.4-.0142-.6607-.2981-.6607-.6683zM1.6407 7c0-2.9554 2.4046-5.36 5.36-5.36 2.9553 0 5.36 2.4046 5.36 5.36 0 2.9554-2.4047 5.36-5.36 5.36-2.9554 0-5.36-2.4046-5.36-5.36zM.3 7c0 3.6997 3.0003 6.7 6.7 6.7 3.7004 0 6.7-3.0003 6.7-6.7C13.7 3.2996 10.7004.3 7 .3 3.3003.3.3 3.2996.3 7z"
                                            id="helpIcon-c"
                                    ></path>
                                </defs>
                                <g fill="none" fill-rule="evenodd">
                                    <g fill-rule="nonzero">
                                        <path
                                                d="M8.1537 4.391c1.2194.0756 2.1929 1.0491 2.2686 2.2685.0663 1.0493-.5487 2.0228-1.5223 2.4107-.1413.0563-.2358.1796-.2358.321v.6619h-1.324v-.662c0-.6894.4162-1.2944 1.0687-1.5497.4442-.1795.7283-.6244.6995-1.0968-.0382-.548-.4824-.9922-1.0304-1.0304-.3116-.0282-.605.085-.8315.2934-.2271.2077-.3504.4911-.3504.8034v.662H5.5728v-.662c0-.662.2834-1.3146.7658-1.7682.4911-.463 1.1343-.6995 1.815-.6519zM7.33 11.22c0-.368.2586-.6649.6606-.6683.004 0 .0047-.002.006-.002h.0114v.004c.412.0157.662.3064.662.6656-.0087.3736-.2566.6595-.662.667-.0013.0034-.0033.002-.0053.002-.0034 0-.006.0014-.008.0014-.0027 0-.0027-.0014-.004-.0014-.4-.0142-.6607-.2981-.6607-.6683zM2.6407 8c0-2.9554 2.4046-5.36 5.36-5.36 2.9553 0 5.36 2.4046 5.36 5.36 0 2.9554-2.4047 5.36-5.36 5.36-2.9554 0-5.36-2.4046-5.36-5.36zM1.3 8c0 3.6997 3.0003 6.7 6.7 6.7 3.7004 0 6.7-3.0003 6.7-6.7 0-3.7004-2.9996-6.7-6.7-6.7-3.6997 0-6.7 2.9996-6.7 6.7z"
                                                fill="#D8D8D8"
                                        ></path>
                                        <path
                                                d="M7.1537 3.391C8.373 3.4665 9.3466 4.44 9.4223 5.6594 9.4886 6.7088 8.8736 7.6823 7.9 8.0702c-.1413.0563-.2358.1796-.2358.321v.6619h-1.324v-.662c0-.6894.4162-1.2944 1.0687-1.5497.4442-.1795.7283-.6244.6995-1.0968-.0382-.548-.4824-.9922-1.0304-1.0304-.3116-.0282-.605.085-.8315.2934-.2271.2077-.3504.4911-.3504.8034v.662H4.5728v-.662c0-.662.2834-1.3146.7658-1.7682.4911-.463 1.1343-.6995 1.815-.6519zM6.33 10.22c0-.368.2586-.6649.6606-.6683.004 0 .0047-.002.006-.002h.0114v.004c.412.0157.662.3064.662.6656-.0087.3736-.2566.6595-.662.667-.0013.0034-.0033.002-.0053.002-.0034 0-.006.0014-.008.0014-.0027 0-.0027-.0014-.004-.0014-.4-.0142-.6607-.2981-.6607-.6683zM1.6407 7c0-2.9554 2.4046-5.36 5.36-5.36 2.9553 0 5.36 2.4046 5.36 5.36 0 2.9554-2.4047 5.36-5.36 5.36-2.9554 0-5.36-2.4046-5.36-5.36zM.3 7c0 3.6997 3.0003 6.7 6.7 6.7 3.7004 0 6.7-3.0003 6.7-6.7C13.7 3.2996 10.7004.3 7 .3 3.3003.3.3 3.2996.3 7z"
                                                fill="url(#helpIcon-a)"
                                                transform="translate(1 1)"
                                        ></path>
                                        <path
                                                d="M7.1537 3.391C8.373 3.4665 9.3466 4.44 9.4223 5.6594 9.4886 6.7088 8.8736 7.6823 7.9 8.0702c-.1413.0563-.2358.1796-.2358.321v.6619h-1.324v-.662c0-.6894.4162-1.2944 1.0687-1.5497.4442-.1795.7283-.6244.6995-1.0968-.0382-.548-.4824-.9922-1.0304-1.0304-.3116-.0282-.605.085-.8315.2934-.2271.2077-.3504.4911-.3504.8034v.662H4.5728v-.662c0-.662.2834-1.3146.7658-1.7682.4911-.463 1.1343-.6995 1.815-.6519zM6.33 10.22c0-.368.2586-.6649.6606-.6683.004 0 .0047-.002.006-.002h.0114v.004c.412.0157.662.3064.662.6656-.0087.3736-.2566.6595-.662.667-.0013.0034-.0033.002-.0053.002-.0034 0-.006.0014-.008.0014-.0027 0-.0027-.0014-.004-.0014-.4-.0142-.6607-.2981-.6607-.6683zM1.6407 7c0-2.9554 2.4046-5.36 5.36-5.36 2.9553 0 5.36 2.4046 5.36 5.36 0 2.9554-2.4047 5.36-5.36 5.36-2.9554 0-5.36-2.4046-5.36-5.36zM.3 7c0 3.6997 3.0003 6.7 6.7 6.7 3.7004 0 6.7-3.0003 6.7-6.7C13.7 3.2996 10.7004.3 7 .3 3.3003.3.3 3.2996.3 7z"
                                                fill="url(#helpIcon-a)"
                                                transform="translate(1 1)"
                                        ></path>
                                        <path
                                                d="M7.1537 3.391C8.373 3.4665 9.3466 4.44 9.4223 5.6594 9.4886 6.7088 8.8736 7.6823 7.9 8.0702c-.1413.0563-.2358.1796-.2358.321v.6619h-1.324v-.662c0-.6894.4162-1.2944 1.0687-1.5497.4442-.1795.7283-.6244.6995-1.0968-.0382-.548-.4824-.9922-1.0304-1.0304-.3116-.0282-.605.085-.8315.2934-.2271.2077-.3504.4911-.3504.8034v.662H4.5728v-.662c0-.662.2834-1.3146.7658-1.7682.4911-.463 1.1343-.6995 1.815-.6519zM6.33 10.22c0-.368.2586-.6649.6606-.6683.004 0 .0047-.002.006-.002h.0114v.004c.412.0157.662.3064.662.6656-.0087.3736-.2566.6595-.662.667-.0013.0034-.0033.002-.0053.002-.0034 0-.006.0014-.008.0014-.0027 0-.0027-.0014-.004-.0014-.4-.0142-.6607-.2981-.6607-.6683zM1.6407 7c0-2.9554 2.4046-5.36 5.36-5.36 2.9553 0 5.36 2.4046 5.36 5.36 0 2.9554-2.4047 5.36-5.36 5.36-2.9554 0-5.36-2.4046-5.36-5.36zM.3 7c0 3.6997 3.0003 6.7 6.7 6.7 3.7004 0 6.7-3.0003 6.7-6.7C13.7 3.2996 10.7004.3 7 .3 3.3003.3.3 3.2996.3 7z"
                                                fill="url(#helpIcon-b)"
                                                transform="translate(1 1)"
                                        ></path>
                                    </g>
                                    <g transform="translate(1 1)">
                                        <mask id="helpIcon-d" fill="#fff">
                                            <use xlink:href="#helpIcon-c"></use>
                                        </mask>
                                        <g mask="url(#helpIcon-d)">
                                            <path
                                                    d="M-1-1h16v16H-1z"
                                                    fill="#6F6F6F"
                                                    fill-rule="nonzero"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </button>
                        <div
                                class="serp-relevance-explanation-tooltip hidden"
                                aria-modal="true"
                                role="dialog"
                        >
                            <div
                                    class="icl-Callout icl-Callout--caretEnd"
                                    role="alert"
                                    aria-labelledby="callout-heading-687366354"
                            >
                                <div class="icl-Callout-header">
                                    <h3
                                            class="icl-Callout-heading"
                                            id="callout-heading-687366354"
                                    ></h3>
                                    <a class="icl-CloseButton icl-Callout-close" href="#">
                                        <svg
                                                role="img"
                                                class="icl-Icon icl-Icon--sm icl-Icon--black close"
                                                aria-label="Close callout"
                                        >
                                            <g>
                                                <path
                                                        d="M14.53,4.53L13.47,3.47,9,7.94,4.53,3.47,3.47,4.53,7.94,9,3.47,13.47l1.06,1.06L9,10.06l4.47,4.47,1.06-1.06L10.06,9Z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <div class="icl-Callout-content">
                                    <div class="jobsearch-ResultsInfo-text">
                                        Displayed here are Job Ads that match your query. Indeed may
                                        be compensated by these employers, helping keep Indeed free
                                        for jobseekers. Indeed ranks Job Ads based on a combination
                                        of employer bids and relevance, such as your search terms
                                        and other activity on Indeed. For more information, see the
                                        <a href="//www.indeed.com/legal?hl=en#tosIntro"
                                        >Indeed Terms of Service</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        window["sjl"] = "rDqyKMwxj";
    </script>
    <style type="text/css">
        .rDqyKMwxj {
            margin: 0 0 6px 0;
            padding: 0;
            _zoom: 100%;
            border: 0;
            background-color: #fff;
        }

        .rDqyKMwxj .jobtitle {
            float: left;
            _float: none;
        }

        .rDqyKMwxj .sdn {
            color: #cd29c0;
        }

        .ZSMamFv5H .brdr {
            margin-top: 12px;
        }

        .h62TVWF9cM7 .brdr {
            margin-bottom: 12px;
        }

        @media only screen and (min-height: 780px) {
            .ZSMamFv5H {
                margin-bottom: 9px;
            }

            .h62TVWF9cM7 .brdr,
            .o0TgsZEnS,
            .ZSMamFv5H .brdr {
                margin-bottom: 9px;
                margin-top: 9px;
            }
        }
    </style>
    <style type="text/css">
        .result-tab:empty {
            margin-top: 0;
        }

        .ZSMamFv5H {
            margin-bottom: 0;
        }

        @media only screen and (min-height: 780px) {
            .ZSMamFv5H {
                margin-bottom: 0;
            }
        }
    </style>
    <div></div>
    <a id="jobPostingsAnchor" tabindex="-1"></a>

    <div
            class="jobsearch-SerpJobCard unifiedRow row result clickcard"
            id="p_2ad0d9a308c29e64"
            data-jk="2ad0d9a308c29e64"
            data-tn-component="organicJob"
    >
        <h2 class="title">
            <a
                    target="_blank"
                    id="jl_2ad0d9a308c29e64"
                    href="/rc/clk?jk=2ad0d9a308c29e64&amp;fccid=de71a49b535e21cb&amp;vjs=3"
                    onmousedown="return rclk(this,jobmap[0],0);"
                    onclick="setRefineByCookie([]); return rclk(this,jobmap[0],true,0);"
                    rel="noopener nofollow"
                    title="Software Developer, Identity &amp; Access - New York City"
                    class="jobtitle turnstileLink"
                    data-tn-element="jobTitle"
            >
                Software Developer, Identity &amp; Access - <b>New</b>
                <b>York</b> City</a
            >

            <span class="new">new</span>
        </h2>

        <div class="sjcl">
            <div>
        <span class="company">
          <a
                  data-tn-element="companyName"
                  class="turnstileLink"
                  target="_blank"
                  href="/cmp/IBM"
                  onmousedown="this.href = appendParamsOnce(this.href, 'from=SERP&amp;campaignid=serp-linkcompanyname&amp;fromjk=2ad0d9a308c29e64&amp;jcid=de71a49b535e21cb')"
                  rel="noopener"
          >
            IBM</a
          ></span
        >

                <span class="ratingsDisplay">
          <a
                  data-tn-variant="cmplinktst2"
                  class="ratingNumber"
                  href="/cmp/IBM/reviews"
                  title="IBM reviews"
                  onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=cmplinktst2&amp;from=SERP&amp;jt=Software+Developer%2C+Identity+%26+Access+-+New+York+City&amp;fromjk=2ad0d9a308c29e64&amp;jcid=de71a49b535e21cb');"
                  target="_blank"
                  rel="noopener"
                  aria-label="Company rating 3.9 out of 5 stars"
          >
            <span class="ratingsContent">
              3.9<svg width="12px" height="12px" role="img" class="starIcon">
                <g>
                  <path
                          style="fill: #ffb103"
                          d="M 12.00,4.34 C 12.00,4.34 7.69,3.97 7.69,3.97 7.69,3.97 6.00,0.00 6.00,0.00 6.00,0.00 4.31,3.98 4.31,3.98 4.31,3.98 0.00,4.34 0.00,4.34 0.00,4.34 3.28,7.18 3.28,7.18 3.28,7.18 2.29,11.40 2.29,11.40 2.29,11.40 6.00,9.16 6.00,9.16 6.00,9.16 9.71,11.40 9.71,11.40 9.71,11.40 8.73,7.18 8.73,7.18 8.73,7.18 12.00,4.34 12.00,4.34 Z"
                  ></path>
                </g>
              </svg>
            </span>
          </a>
        </span>
            </div>
            <div
                    id="recJobLoc_2ad0d9a308c29e64"
                    class="recJobLoc"
                    data-rc-loc="New York, NY"
                    style="display: none"
            ></div>
            <span class="location accessible-contrast-color-location"
            >New York, NY 10001
        <span style="font-size: smaller">(Chelsea area)</span></span
            >
        </div>

        <div class="summary">
            <ul
                    style="
          list-style-type: circle;
          margin-top: 0px;
          margin-bottom: 0px;
          padding-left: 20px;
        "
            >
                <li>
                    Ability to translate requirements and convert an old setup and
                    business process to a <b>new</b>
                    template setup according to AccessHub functionalities.
                </li>
            </ul>
        </div>

        <div class="jobsearch-SerpJobCard-footer">
            <div class="jobsearch-SerpJobCard-footerActions">
                <div class="result-link-bar-container">
                    <div class="result-link-bar">
                        <span class="date date-a11y">7 days ago</span>
                        <div id="tt_set_0" class="tt_set">
                            <div class="job-reaction">
                                <button
                                        class="job-reaction-kebab"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-ol-has-click-handler=""
                                        tabindex="0"
                                        aria-label="save or dislike"
                                        onclick="toggleKebabMenu('2ad0d9a308c29e64', false, event); return false;"
                                ></button>
                                <span class="job-reaction-kebab-menu"
                                ><button
                                        class="job-reaction-kebab-item job-reaction-save"
                                        onclick="changeJobState('2ad0d9a308c29e64', 'save', 'linkbar', false, '');return false;"
                                        data-ol-has-click-handler=""
                                >
                    <svg
                            focusable="false"
                            viewBox="0 0 24 24"
                            height="16"
                            width="16"
                    >
                      <g>
                        <path
                                fill="#2d2d2d"
                                d="M16.5,3A6,6,0,0,0,12,5.09,6,6,0,0,0,7.5,3,5.45,5.45,0,0,0,2,8.5C2,12.28,5.4,15.36,10.55,20L12,21.35,13.45,20C18.6,15.36,22,12.28,22,8.5A5.45,5.45,0,0,0,16.5,3ZM12.1,18.55l-0.1.1-0.1-.1C7.14,14.24,4,11.39,4,8.5A3.42,3.42,0,0,1,7.5,5a3.91,3.91,0,0,1,3.57,2.36h1.87A3.88,3.88,0,0,1,16.5,5,3.42,3.42,0,0,1,20,8.5C20,11.39,16.86,14.24,12.1,18.55Z"
                        ></path>
                      </g></svg
                    ><span class="job-reaction-kebab-item-text"
                                >Save job</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-dislike"
                                        onclick="dislikeJob(false, false, '2ad0d9a308c29e64', 'unsave', 'linkbar', false, '');"
                                        data-ol-has-click-handler=""
                                >
                    <span class="job-reaction-dislike-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Not interested</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-report"
                                        onclick="reportJob('2ad0d9a308c29e64');"
                                >
                    <span class="job-reaction-report-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Report Job</span
                                >
                  </button></span
                                >
                            </div>
                            <span class="result-link-bar-separator">·</span
                            ><a
                                id="sj_2ad0d9a308c29e64"
                                href="#"
                                class="sl resultLink save-job-link"
                                onclick="changeJobState('2ad0d9a308c29e64', 'save', 'linkbar', false, ''); return false;"
                                title="Save this job to my.indeed"
                        >Save job</a
                        ><span class="result-link-bar-separator">·</span>
                            <button
                                    id="tog_0"
                                    class="sl resultLink more-link"
                                    onclick="toggleMoreLinks('2ad0d9a308c29e64', '0'); return false;"
                                    aria-expanded="false"
                            >
                                More...
                            </button>
                        </div>
                        <script>
                            if (!window["result_2ad0d9a308c29e64"]) {
                                window["result_2ad0d9a308c29e64"] = {};
                            }
                            window["result_2ad0d9a308c29e64"]["showSource"] = false;
                            window["result_2ad0d9a308c29e64"]["source"] = "IBM";
                            window["result_2ad0d9a308c29e64"]["loggedIn"] = false;
                            window["result_2ad0d9a308c29e64"]["showMyJobsLinks"] = false;
                            window["result_2ad0d9a308c29e64"]["baseMyJobsUrl"] =
                                    "https://myjobs.indeed.com";
                            window["result_2ad0d9a308c29e64"]["undoAction"] = "unsave";
                            window["result_2ad0d9a308c29e64"]["relativeJobAge"] =
                                    "7 days ago";
                            window["result_2ad0d9a308c29e64"]["jobKey"] = "2ad0d9a308c29e64";
                            window["result_2ad0d9a308c29e64"]["myIndeedAvailable"] = true;
                            window["result_2ad0d9a308c29e64"]["showMoreActionsLink"] =
                                    window["result_2ad0d9a308c29e64"]["showMoreActionsLink"] ||
                                    true;
                            window["result_2ad0d9a308c29e64"]["resultNumber"] = 0;
                            window["result_2ad0d9a308c29e64"][
                                    "jobStateChangedToSaved"
                                    ] = false;
                            window["result_2ad0d9a308c29e64"]["searchState"] =
                                    "q=new york&amp;l=NewYork%2CNY";
                            window["result_2ad0d9a308c29e64"]["basicPermaLink"] =
                                    "https://www.indeed.com";
                            window["result_2ad0d9a308c29e64"]["saveJobFailed"] = false;
                            window["result_2ad0d9a308c29e64"]["removeJobFailed"] = false;
                            window["result_2ad0d9a308c29e64"]["requestPending"] = false;
                            window["result_2ad0d9a308c29e64"]["currentPage"] = "serp";
                            window["result_2ad0d9a308c29e64"]["sponsored"] = false;
                            window["result_2ad0d9a308c29e64"][
                                    "reportJobButtonEnabled"
                                    ] = false;
                            window["result_2ad0d9a308c29e64"]["showMyJobsHired"] = false;
                            window["result_2ad0d9a308c29e64"]["showSaveForSponsored"] = false;
                            window["result_2ad0d9a308c29e64"]["showJobAge"] = true;
                            window["result_2ad0d9a308c29e64"]["showHolisticCard"] = true;
                            window["result_2ad0d9a308c29e64"]["showDislike"] = true;
                            window["result_2ad0d9a308c29e64"]["showKebab"] = true;
                            window["result_2ad0d9a308c29e64"]["showReport"] = true;
                        </script>
                    </div>
                </div>
            </div>
        </div>

        <div class="tab-container">
            <div
                    id="tt_display_0"
                    class="more-links-container result-tab"
                    style="display: none"
            >
                <div id="more_0" class="more_actions">
                    <ul>
                        <li>
              <span class="mat"
              >View all
                <a href="/q-IBM-l-New-York,-NY-jobs.html"
                >IBM jobs in New York, NY</a
                >
                - <a href="/l-New-York,-NY-jobs.html">New York jobs</a></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Salary Search:
                <a
                        href="/salaries/software-developer-Salaries,-New-York-NY"
                        onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=serp-more&amp;fromjk=2ad0d9a308c29e64&amp;from=serp-more');"
                >Software Developer salaries in New York, NY</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Learn more about working at
                <a
                        href="/cmp/IBM/about"
                        onmousedown="this.href = appendParamsOnce(this.href, '?fromjk=2ad0d9a308c29e64&amp;from=serp-more&amp;campaignid=serp-more&amp;jcid=de71a49b535e21cb');"
                >IBM</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >See popular
                <a
                        href="/cmp/IBM/faq"
                        onmousedown="this.href = appendParamsOnce(this.href, '?from=serp-more&amp;campaignid=serp-more&amp;fromjk=2ad0d9a308c29e64&amp;jcid=de71a49b535e21cb');"
                >questions &amp; answers about IBM</a
                ></span
              >
                        </li>
                    </ul>
                </div>
                <a
                        class="close-link closeLink"
                        title="Close"
                        href="#"
                        onclick="toggleMoreLinks('2ad0d9a308c29e64'); return false;"
                ></a>
            </div>
            <div class="dya-container result-tab"></div>
            <div class="tellafriend-container result-tab email_job_content"></div>
            <div class="sign-in-container result-tab"></div>
        </div>
    </div>

    <div id="jobToJobRec_2ad0d9a308c29e64_sj" class="jobToJobRec_Hide"></div>

    <div
            class="jobsearch-SerpJobCard unifiedRow row result clickcard"
            id="p_f14b5576ea3878e3"
            data-jk="f14b5576ea3878e3"
            data-tn-component="organicJob"
    >
        <h2 class="title">
            <a
                    target="_blank"
                    id="jl_f14b5576ea3878e3"
                    href="/rc/clk?jk=f14b5576ea3878e3&amp;fccid=c762a27145bd166e&amp;vjs=3"
                    onmousedown="return rclk(this,jobmap[1],0);"
                    onclick="setRefineByCookie([]); return rclk(this,jobmap[1],true,0);"
                    rel="noopener nofollow"
                    title="Staff Technologist - Opportunity for Working Remotely New York City, NY"
                    class="jobtitle turnstileLink"
                    data-tn-element="jobTitle"
            >
                Staff Technologist - Opportunity for Working Remotely
                <b>New</b> Yo...</a
            >

            <span class="new">new</span>
        </h2>

        <div class="sjcl">
            <div>
        <span class="company">
          <a
                  data-tn-element="companyName"
                  class="turnstileLink"
                  target="_blank"
                  href="/cmp/Vmware"
                  onmousedown="this.href = appendParamsOnce(this.href, 'from=SERP&amp;campaignid=serp-linkcompanyname&amp;fromjk=f14b5576ea3878e3&amp;jcid=c762a27145bd166e')"
                  rel="noopener"
          >
            VMware</a
          ></span
        >

                <span class="ratingsDisplay">
          <a
                  data-tn-variant="cmplinktst2"
                  class="ratingNumber"
                  href="/cmp/Vmware/reviews"
                  title="Vmware reviews"
                  onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=cmplinktst2&amp;from=SERP&amp;jt=Staff+Technologist+-+Opportunity+for+Working+Remotely+New+York+City%2C+NY&amp;fromjk=f14b5576ea3878e3&amp;jcid=c762a27145bd166e');"
                  target="_blank"
                  rel="noopener"
                  aria-label="Company rating 4.0 out of 5 stars"
          >
            <span class="ratingsContent">
              4.0<svg width="12px" height="12px" role="img" class="starIcon">
                <g>
                  <path
                          style="fill: #ffb103"
                          d="M 12.00,4.34 C 12.00,4.34 7.69,3.97 7.69,3.97 7.69,3.97 6.00,0.00 6.00,0.00 6.00,0.00 4.31,3.98 4.31,3.98 4.31,3.98 0.00,4.34 0.00,4.34 0.00,4.34 3.28,7.18 3.28,7.18 3.28,7.18 2.29,11.40 2.29,11.40 2.29,11.40 6.00,9.16 6.00,9.16 6.00,9.16 9.71,11.40 9.71,11.40 9.71,11.40 8.73,7.18 8.73,7.18 8.73,7.18 12.00,4.34 12.00,4.34 Z"
                  ></path>
                </g>
              </svg>
            </span>
          </a>
        </span>
            </div>
            <div
                    id="recJobLoc_f14b5576ea3878e3"
                    class="recJobLoc"
                    data-rc-loc="New York, NY"
                    style="display: none"
            ></div>
            <span class="location accessible-contrast-color-location"
            >New York, NY</span
            >
            <span class="remote-bullet">•</span>
            <span class="remote">Remote</span>
        </div>

        <div class="summary">
            <ul
                    style="
          list-style-type: circle;
          margin-top: 0px;
          margin-bottom: 0px;
          padding-left: 20px;
        "
            >
                <li>
                    The Technical Advocacy team at VMware is looking for a Technical
                    Advocate focused on Kubernetes, who will foster the relationship
                    between VMware Tanzu products,…
                </li>
            </ul>
        </div>

        <div class="jobsearch-SerpJobCard-footer">
            <div class="jobsearch-SerpJobCard-footerActions">
                <div class="result-link-bar-container">
                    <div class="result-link-bar">
                        <span class="date date-a11y">3 days ago</span>
                        <div id="tt_set_1" class="tt_set">
                            <div class="job-reaction">
                                <button
                                        class="job-reaction-kebab"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-ol-has-click-handler=""
                                        tabindex="0"
                                        aria-label="save or dislike"
                                        onclick="toggleKebabMenu('f14b5576ea3878e3', false, event); return false;"
                                ></button>
                                <span class="job-reaction-kebab-menu"
                                ><button
                                        class="job-reaction-kebab-item job-reaction-save"
                                        onclick="changeJobState('f14b5576ea3878e3', 'save', 'linkbar', false, '');return false;"
                                        data-ol-has-click-handler=""
                                >
                    <svg
                            focusable="false"
                            viewBox="0 0 24 24"
                            height="16"
                            width="16"
                    >
                      <g>
                        <path
                                fill="#2d2d2d"
                                d="M16.5,3A6,6,0,0,0,12,5.09,6,6,0,0,0,7.5,3,5.45,5.45,0,0,0,2,8.5C2,12.28,5.4,15.36,10.55,20L12,21.35,13.45,20C18.6,15.36,22,12.28,22,8.5A5.45,5.45,0,0,0,16.5,3ZM12.1,18.55l-0.1.1-0.1-.1C7.14,14.24,4,11.39,4,8.5A3.42,3.42,0,0,1,7.5,5a3.91,3.91,0,0,1,3.57,2.36h1.87A3.88,3.88,0,0,1,16.5,5,3.42,3.42,0,0,1,20,8.5C20,11.39,16.86,14.24,12.1,18.55Z"
                        ></path>
                      </g></svg
                    ><span class="job-reaction-kebab-item-text"
                                >Save job</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-dislike"
                                        onclick="dislikeJob(false, false, 'f14b5576ea3878e3', 'unsave', 'linkbar', false, '');"
                                        data-ol-has-click-handler=""
                                >
                    <span class="job-reaction-dislike-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Not interested</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-report"
                                        onclick="reportJob('f14b5576ea3878e3');"
                                >
                    <span class="job-reaction-report-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Report Job</span
                                >
                  </button></span
                                >
                            </div>
                            <span class="result-link-bar-separator">·</span
                            ><a
                                id="sj_f14b5576ea3878e3"
                                href="#"
                                class="sl resultLink save-job-link"
                                onclick="changeJobState('f14b5576ea3878e3', 'save', 'linkbar', false, ''); return false;"
                                title="Save this job to my.indeed"
                        >Save job</a
                        ><span class="result-link-bar-separator">·</span>
                            <button
                                    id="tog_1"
                                    class="sl resultLink more-link"
                                    onclick="toggleMoreLinks('f14b5576ea3878e3', '1'); return false;"
                                    aria-expanded="false"
                            >
                                More...
                            </button>
                        </div>
                        <script>
                            if (!window["result_f14b5576ea3878e3"]) {
                                window["result_f14b5576ea3878e3"] = {};
                            }
                            window["result_f14b5576ea3878e3"]["showSource"] = false;
                            window["result_f14b5576ea3878e3"]["source"] = "VMware";
                            window["result_f14b5576ea3878e3"]["loggedIn"] = false;
                            window["result_f14b5576ea3878e3"]["showMyJobsLinks"] = false;
                            window["result_f14b5576ea3878e3"]["baseMyJobsUrl"] =
                                    "https://myjobs.indeed.com";
                            window["result_f14b5576ea3878e3"]["undoAction"] = "unsave";
                            window["result_f14b5576ea3878e3"]["relativeJobAge"] =
                                    "3 days ago";
                            window["result_f14b5576ea3878e3"]["jobKey"] = "f14b5576ea3878e3";
                            window["result_f14b5576ea3878e3"]["myIndeedAvailable"] = true;
                            window["result_f14b5576ea3878e3"]["showMoreActionsLink"] =
                                    window["result_f14b5576ea3878e3"]["showMoreActionsLink"] ||
                                    true;
                            window["result_f14b5576ea3878e3"]["resultNumber"] = 1;
                            window["result_f14b5576ea3878e3"][
                                    "jobStateChangedToSaved"
                                    ] = false;
                            window["result_f14b5576ea3878e3"]["searchState"] =
                                    "q=new york&amp;l=NewYork%2CNY";
                            window["result_f14b5576ea3878e3"]["basicPermaLink"] =
                                    "https://www.indeed.com";
                            window["result_f14b5576ea3878e3"]["saveJobFailed"] = false;
                            window["result_f14b5576ea3878e3"]["removeJobFailed"] = false;
                            window["result_f14b5576ea3878e3"]["requestPending"] = false;
                            window["result_f14b5576ea3878e3"]["currentPage"] = "serp";
                            window["result_f14b5576ea3878e3"]["sponsored"] = false;
                            window["result_f14b5576ea3878e3"][
                                    "reportJobButtonEnabled"
                                    ] = false;
                            window["result_f14b5576ea3878e3"]["showMyJobsHired"] = false;
                            window["result_f14b5576ea3878e3"]["showSaveForSponsored"] = false;
                            window["result_f14b5576ea3878e3"]["showJobAge"] = true;
                            window["result_f14b5576ea3878e3"]["showHolisticCard"] = true;
                            window["result_f14b5576ea3878e3"]["showDislike"] = true;
                            window["result_f14b5576ea3878e3"]["showKebab"] = true;
                            window["result_f14b5576ea3878e3"]["showReport"] = true;
                        </script>
                    </div>
                </div>
            </div>
        </div>

        <div class="tab-container">
            <div
                    id="tt_display_1"
                    class="more-links-container result-tab"
                    style="display: none"
            >
                <div id="more_1" class="more_actions">
                    <ul>
                        <li>
              <span class="mat"
              >View all
                <a href="/q-Vmware-l-New-York,-NY-jobs.html"
                >VMware jobs in New York, NY</a
                >
                - <a href="/l-New-York,-NY-jobs.html">New York jobs</a></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Salary Search:
                <a
                        href="/salaries/technologist-Salaries,-New-York-NY"
                        onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=serp-more&amp;fromjk=f14b5576ea3878e3&amp;from=serp-more');"
                >Technologist salaries in New York, NY</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Learn more about working at
                <a
                        href="/cmp/Vmware/about"
                        onmousedown="this.href = appendParamsOnce(this.href, '?fromjk=f14b5576ea3878e3&amp;from=serp-more&amp;campaignid=serp-more&amp;jcid=c762a27145bd166e');"
                >VMware</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >See popular
                <a
                        href="/cmp/Vmware/faq"
                        onmousedown="this.href = appendParamsOnce(this.href, '?from=serp-more&amp;campaignid=serp-more&amp;fromjk=f14b5576ea3878e3&amp;jcid=c762a27145bd166e');"
                >questions &amp; answers about VMware</a
                ></span
              >
                        </li>
                    </ul>
                </div>
                <a
                        class="close-link closeLink"
                        title="Close"
                        href="#"
                        onclick="toggleMoreLinks('f14b5576ea3878e3'); return false;"
                ></a>
            </div>
            <div class="dya-container result-tab"></div>
            <div class="tellafriend-container result-tab email_job_content"></div>
            <div class="sign-in-container result-tab"></div>
        </div>
    </div>

    <div id="jobToJobRec_f14b5576ea3878e3_sj" class="jobToJobRec_Hide"></div>

    <div
            class="jobsearch-SerpJobCard unifiedRow row result clickcard"
            id="p_dddbddf47849652b"
            data-jk="dddbddf47849652b"
            data-tn-component="organicJob"
    >
        <h2 class="title">
            <a
                    target="_blank"
                    id="jl_dddbddf47849652b"
                    href="/rc/clk?jk=dddbddf47849652b&amp;fccid=fe2d21eef233e94a&amp;vjs=3"
                    onmousedown="return rclk(this,jobmap[2],0);"
                    onclick="setRefineByCookie([]); return rclk(this,jobmap[2],true,0);"
                    rel="noopener nofollow"
                    title="Software Development Engineer"
                    class="jobtitle turnstileLink"
                    data-tn-element="jobTitle"
            >
                Software Development Engineer</a
            >

            <span class="new">new</span>
        </h2>

        <div class="sjcl">
            <div>
        <span class="company">
          <a
                  data-tn-element="companyName"
                  class="turnstileLink"
                  target="_blank"
                  href="/cmp/Amazon.com"
                  onmousedown="this.href = appendParamsOnce(this.href, 'from=SERP&amp;campaignid=serp-linkcompanyname&amp;fromjk=dddbddf47849652b&amp;jcid=1861a7eb651b86ce')"
                  rel="noopener"
          >
            Amazon.com Services LLC</a
          ></span
        >

                <span class="ratingsDisplay">
          <a
                  data-tn-variant="cmplinktst2"
                  class="ratingNumber"
                  href="/cmp/Amazon.com/reviews"
                  title="Amazon.com Services reviews"
                  onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=cmplinktst2&amp;from=SERP&amp;jt=Software+Development+Engineer&amp;fromjk=dddbddf47849652b&amp;jcid=1861a7eb651b86ce');"
                  target="_blank"
                  rel="noopener"
                  aria-label="Company rating 3.5 out of 5 stars"
          >
            <span class="ratingsContent">
              3.5<svg width="12px" height="12px" role="img" class="starIcon">
                <g>
                  <path
                          style="fill: #ffb103"
                          d="M 12.00,4.34 C 12.00,4.34 7.69,3.97 7.69,3.97 7.69,3.97 6.00,0.00 6.00,0.00 6.00,0.00 4.31,3.98 4.31,3.98 4.31,3.98 0.00,4.34 0.00,4.34 0.00,4.34 3.28,7.18 3.28,7.18 3.28,7.18 2.29,11.40 2.29,11.40 2.29,11.40 6.00,9.16 6.00,9.16 6.00,9.16 9.71,11.40 9.71,11.40 9.71,11.40 8.73,7.18 8.73,7.18 8.73,7.18 12.00,4.34 12.00,4.34 Z"
                  ></path>
                </g>
              </svg>
            </span>
          </a>
        </span>
            </div>
            <div
                    id="recJobLoc_dddbddf47849652b"
                    class="recJobLoc"
                    data-rc-loc="New York, NY"
                    style="display: none"
            ></div>
            <span class="location accessible-contrast-color-location"
            >New York, NY</span
            >
        </div>

        <div class="summary">
            <ul
                    style="
          list-style-type: circle;
          margin-top: 0px;
          margin-bottom: 0px;
          padding-left: 20px;
        "
            >
                <li style="margin-bottom: 0px">
                    Peer with senior engineers to develop <b>new</b> and innovative ad
                    products.
                </li>
                <li>
                    Brainstorm with Product management and partner teams about
                    <b>new</b> ideas, technical design and…
                </li>
            </ul>
        </div>

        <div class="jobsearch-SerpJobCard-footer">
            <div class="jobsearch-SerpJobCard-footerActions">
                <div class="result-link-bar-container">
                    <div class="result-link-bar">
                        <span class="date date-a11y">4 days ago</span>
                        <div id="tt_set_2" class="tt_set">
                            <div class="job-reaction">
                                <button
                                        class="job-reaction-kebab"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-ol-has-click-handler=""
                                        tabindex="0"
                                        aria-label="save or dislike"
                                        onclick="toggleKebabMenu('dddbddf47849652b', false, event); return false;"
                                ></button>
                                <span class="job-reaction-kebab-menu"
                                ><button
                                        class="job-reaction-kebab-item job-reaction-save"
                                        onclick="changeJobState('dddbddf47849652b', 'save', 'linkbar', false, '');return false;"
                                        data-ol-has-click-handler=""
                                >
                    <svg
                            focusable="false"
                            viewBox="0 0 24 24"
                            height="16"
                            width="16"
                    >
                      <g>
                        <path
                                fill="#2d2d2d"
                                d="M16.5,3A6,6,0,0,0,12,5.09,6,6,0,0,0,7.5,3,5.45,5.45,0,0,0,2,8.5C2,12.28,5.4,15.36,10.55,20L12,21.35,13.45,20C18.6,15.36,22,12.28,22,8.5A5.45,5.45,0,0,0,16.5,3ZM12.1,18.55l-0.1.1-0.1-.1C7.14,14.24,4,11.39,4,8.5A3.42,3.42,0,0,1,7.5,5a3.91,3.91,0,0,1,3.57,2.36h1.87A3.88,3.88,0,0,1,16.5,5,3.42,3.42,0,0,1,20,8.5C20,11.39,16.86,14.24,12.1,18.55Z"
                        ></path>
                      </g></svg
                    ><span class="job-reaction-kebab-item-text"
                                >Save job</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-dislike"
                                        onclick="dislikeJob(false, false, 'dddbddf47849652b', 'unsave', 'linkbar', false, '');"
                                        data-ol-has-click-handler=""
                                >
                    <span class="job-reaction-dislike-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Not interested</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-report"
                                        onclick="reportJob('dddbddf47849652b');"
                                >
                    <span class="job-reaction-report-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Report Job</span
                                >
                  </button></span
                                >
                            </div>
                            <span class="result-link-bar-separator">·</span
                            ><a
                                id="sj_dddbddf47849652b"
                                href="#"
                                class="sl resultLink save-job-link"
                                onclick="changeJobState('dddbddf47849652b', 'save', 'linkbar', false, ''); return false;"
                                title="Save this job to my.indeed"
                        >Save job</a
                        ><span class="result-link-bar-separator">·</span>
                            <button
                                    id="tog_2"
                                    class="sl resultLink more-link"
                                    onclick="toggleMoreLinks('dddbddf47849652b', '2'); return false;"
                                    aria-expanded="false"
                            >
                                More...
                            </button>
                        </div>
                        <script>
                            if (!window["result_dddbddf47849652b"]) {
                                window["result_dddbddf47849652b"] = {};
                            }
                            window["result_dddbddf47849652b"]["showSource"] = false;
                            window["result_dddbddf47849652b"]["source"] = "Amazon.com";
                            window["result_dddbddf47849652b"]["loggedIn"] = false;
                            window["result_dddbddf47849652b"]["showMyJobsLinks"] = false;
                            window["result_dddbddf47849652b"]["baseMyJobsUrl"] =
                                    "https://myjobs.indeed.com";
                            window["result_dddbddf47849652b"]["undoAction"] = "unsave";
                            window["result_dddbddf47849652b"]["relativeJobAge"] =
                                    "4 days ago";
                            window["result_dddbddf47849652b"]["jobKey"] = "dddbddf47849652b";
                            window["result_dddbddf47849652b"]["myIndeedAvailable"] = true;
                            window["result_dddbddf47849652b"]["showMoreActionsLink"] =
                                    window["result_dddbddf47849652b"]["showMoreActionsLink"] ||
                                    true;
                            window["result_dddbddf47849652b"]["resultNumber"] = 2;
                            window["result_dddbddf47849652b"][
                                    "jobStateChangedToSaved"
                                    ] = false;
                            window["result_dddbddf47849652b"]["searchState"] =
                                    "q=new york&amp;l=NewYork%2CNY";
                            window["result_dddbddf47849652b"]["basicPermaLink"] =
                                    "https://www.indeed.com";
                            window["result_dddbddf47849652b"]["saveJobFailed"] = false;
                            window["result_dddbddf47849652b"]["removeJobFailed"] = false;
                            window["result_dddbddf47849652b"]["requestPending"] = false;
                            window["result_dddbddf47849652b"]["currentPage"] = "serp";
                            window["result_dddbddf47849652b"]["sponsored"] = false;
                            window["result_dddbddf47849652b"][
                                    "reportJobButtonEnabled"
                                    ] = false;
                            window["result_dddbddf47849652b"]["showMyJobsHired"] = false;
                            window["result_dddbddf47849652b"]["showSaveForSponsored"] = false;
                            window["result_dddbddf47849652b"]["showJobAge"] = true;
                            window["result_dddbddf47849652b"]["showHolisticCard"] = true;
                            window["result_dddbddf47849652b"]["showDislike"] = true;
                            window["result_dddbddf47849652b"]["showKebab"] = true;
                            window["result_dddbddf47849652b"]["showReport"] = true;
                        </script>
                    </div>
                </div>
            </div>
        </div>

        <div class="tab-container">
            <div
                    id="tt_display_2"
                    class="more-links-container result-tab"
                    style="display: none"
            >
                <div id="more_2" class="more_actions">
                    <ul>
                        <li>
              <span class="mat"
              >View all
                <a
                        href="/jobs?q=Amazon+Com+Services+LLC&amp;l=New+York,+NY&amp;nc=jasx"
                >Amazon.com Services LLC jobs in New York, NY</a
                >
                - <a href="/l-New-York,-NY-jobs.html">New York jobs</a></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Salary Search:
                <a
                        href="/salaries/software-engineer-Salaries,-New-York-NY"
                        onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=serp-more&amp;fromjk=dddbddf47849652b&amp;from=serp-more');"
                >Software Engineer salaries in New York, NY</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Learn more about working at
                <a
                        href="/cmp/Amazon.com/about"
                        onmousedown="this.href = appendParamsOnce(this.href, '?fromjk=dddbddf47849652b&amp;from=serp-more&amp;campaignid=serp-more&amp;jcid=1861a7eb651b86ce');"
                >Amazon.com Services LLC</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >See popular
                <a
                        href="/cmp/Amazon.com/faq"
                        onmousedown="this.href = appendParamsOnce(this.href, '?from=serp-more&amp;campaignid=serp-more&amp;fromjk=dddbddf47849652b&amp;jcid=1861a7eb651b86ce');"
                >questions &amp; answers about Amazon.com Services LLC</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Explore career as Software Engineer:
                <a
                        href="/career/software-engineer"
                        onmousedown="this.href = appendParamsOnce(this.href, 'from=jasx');"
                >overview</a
                >,
                <a
                        href="/career/software-engineer/career-advice"
                        onmousedown="this.href = appendParamsOnce(this.href, 'from=jasx');"
                >career advice</a
                >,
                <a
                        href="/career/software-engineer/faq"
                        onmousedown="this.href = appendParamsOnce(this.href, 'from=jasx');"
                >FAQs</a
                ></span
              >
                        </li>
                    </ul>
                </div>
                <a
                        class="close-link closeLink"
                        title="Close"
                        href="#"
                        onclick="toggleMoreLinks('dddbddf47849652b'); return false;"
                ></a>
            </div>
            <div class="dya-container result-tab"></div>
            <div class="tellafriend-container result-tab email_job_content"></div>
            <div class="sign-in-container result-tab"></div>
        </div>
    </div>

    <div id="jobToJobRec_dddbddf47849652b_sj" class="jobToJobRec_Hide"></div>

    <div
            class="jobsearch-SerpJobCard unifiedRow row result clickcard"
            id="p_163252b5c7cf72ad"
            data-jk="163252b5c7cf72ad"
            data-tn-component="organicJob"
    >
        <h2 class="title">
            <a
                    target="_blank"
                    id="jl_163252b5c7cf72ad"
                    href="/rc/clk?jk=163252b5c7cf72ad&amp;fccid=aaf3b433897ea465&amp;vjs=3"
                    onmousedown="return rclk(this,jobmap[3],0);"
                    onclick="setRefineByCookie([]); return rclk(this,jobmap[3],true,0);"
                    rel="noopener nofollow"
                    title="Software Engineering"
                    class="jobtitle turnstileLink"
                    data-tn-element="jobTitle"
            >
                Software Engineering</a
            >

            <span class="new">new</span>
        </h2>

        <div class="sjcl">
            <div>
        <span class="company">
          <a
                  data-tn-element="companyName"
                  class="turnstileLink"
                  target="_blank"
                  href="/cmp/Chase-2"
                  onmousedown="this.href = appendParamsOnce(this.href, 'from=SERP&amp;campaignid=serp-linkcompanyname&amp;fromjk=163252b5c7cf72ad&amp;jcid=04c6165cf2c77d28')"
                  rel="noopener"
          >
            JPMorgan Chase Bank, N.A.</a
          ></span
        >

                <span class="ratingsDisplay">
          <a
                  data-tn-variant="cmplinktst2"
                  class="ratingNumber"
                  href="/cmp/Chase-2/reviews"
                  title="JPMorgan Chase Bank reviews"
                  onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=cmplinktst2&amp;from=SERP&amp;jt=Software+Engineering&amp;fromjk=163252b5c7cf72ad&amp;jcid=04c6165cf2c77d28');"
                  target="_blank"
                  rel="noopener"
                  aria-label="Company rating 3.9 out of 5 stars"
          >
            <span class="ratingsContent">
              3.9<svg width="12px" height="12px" role="img" class="starIcon">
                <g>
                  <path
                          style="fill: #ffb103"
                          d="M 12.00,4.34 C 12.00,4.34 7.69,3.97 7.69,3.97 7.69,3.97 6.00,0.00 6.00,0.00 6.00,0.00 4.31,3.98 4.31,3.98 4.31,3.98 0.00,4.34 0.00,4.34 0.00,4.34 3.28,7.18 3.28,7.18 3.28,7.18 2.29,11.40 2.29,11.40 2.29,11.40 6.00,9.16 6.00,9.16 6.00,9.16 9.71,11.40 9.71,11.40 9.71,11.40 8.73,7.18 8.73,7.18 8.73,7.18 12.00,4.34 12.00,4.34 Z"
                  ></path>
                </g>
              </svg>
            </span>
          </a>
        </span>
            </div>
            <div
                    id="recJobLoc_163252b5c7cf72ad"
                    class="recJobLoc"
                    data-rc-loc="Jersey City, NJ"
                    style="display: none"
            ></div>
            <span class="location accessible-contrast-color-location"
            >Jersey City, NJ</span
            >
        </div>

        <div class="summary">
            <ul
                    style="
          list-style-type: circle;
          margin-top: 0px;
          margin-bottom: 0px;
          padding-left: 20px;
        "
            >
                <li>
                    In this role, you will the design, develop, test and productize the
                    functional requirements for Market Access and Risk Management systems.
                </li>
            </ul>
        </div>

        <div class="jobsearch-SerpJobCard-footer">
            <div class="jobsearch-SerpJobCard-footerActions">
                <div class="result-link-bar-container">
                    <div class="result-link-bar">
                        <span class="date date-a11y">Just posted</span>
                        <div id="tt_set_3" class="tt_set">
                            <div class="job-reaction">
                                <button
                                        class="job-reaction-kebab"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-ol-has-click-handler=""
                                        tabindex="0"
                                        aria-label="save or dislike"
                                        onclick="toggleKebabMenu('163252b5c7cf72ad', false, event); return false;"
                                ></button>
                                <span class="job-reaction-kebab-menu"
                                ><button
                                        class="job-reaction-kebab-item job-reaction-save"
                                        onclick="changeJobState('163252b5c7cf72ad', 'save', 'linkbar', false, '');return false;"
                                        data-ol-has-click-handler=""
                                >
                    <svg
                            focusable="false"
                            viewBox="0 0 24 24"
                            height="16"
                            width="16"
                    >
                      <g>
                        <path
                                fill="#2d2d2d"
                                d="M16.5,3A6,6,0,0,0,12,5.09,6,6,0,0,0,7.5,3,5.45,5.45,0,0,0,2,8.5C2,12.28,5.4,15.36,10.55,20L12,21.35,13.45,20C18.6,15.36,22,12.28,22,8.5A5.45,5.45,0,0,0,16.5,3ZM12.1,18.55l-0.1.1-0.1-.1C7.14,14.24,4,11.39,4,8.5A3.42,3.42,0,0,1,7.5,5a3.91,3.91,0,0,1,3.57,2.36h1.87A3.88,3.88,0,0,1,16.5,5,3.42,3.42,0,0,1,20,8.5C20,11.39,16.86,14.24,12.1,18.55Z"
                        ></path>
                      </g></svg
                    ><span class="job-reaction-kebab-item-text"
                                >Save job</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-dislike"
                                        onclick="dislikeJob(false, false, '163252b5c7cf72ad', 'unsave', 'linkbar', false, '');"
                                        data-ol-has-click-handler=""
                                >
                    <span class="job-reaction-dislike-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Not interested</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-report"
                                        onclick="reportJob('163252b5c7cf72ad');"
                                >
                    <span class="job-reaction-report-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Report Job</span
                                >
                  </button></span
                                >
                            </div>
                            <span class="result-link-bar-separator">·</span
                            ><a
                                id="sj_163252b5c7cf72ad"
                                href="#"
                                class="sl resultLink save-job-link"
                                onclick="changeJobState('163252b5c7cf72ad', 'save', 'linkbar', false, ''); return false;"
                                title="Save this job to my.indeed"
                        >Save job</a
                        ><span class="result-link-bar-separator">·</span>
                            <button
                                    id="tog_3"
                                    class="sl resultLink more-link"
                                    onclick="toggleMoreLinks('163252b5c7cf72ad', '3'); return false;"
                                    aria-expanded="false"
                            >
                                More...
                            </button>
                        </div>
                        <script>
                            if (!window["result_163252b5c7cf72ad"]) {
                                window["result_163252b5c7cf72ad"] = {};
                            }
                            window["result_163252b5c7cf72ad"]["showSource"] = false;
                            window["result_163252b5c7cf72ad"]["source"] = "JPMorgan Chase";
                            window["result_163252b5c7cf72ad"]["loggedIn"] = false;
                            window["result_163252b5c7cf72ad"]["showMyJobsLinks"] = false;
                            window["result_163252b5c7cf72ad"]["baseMyJobsUrl"] =
                                    "https://myjobs.indeed.com";
                            window["result_163252b5c7cf72ad"]["undoAction"] = "unsave";
                            window["result_163252b5c7cf72ad"]["relativeJobAge"] =
                                    "Just posted";
                            window["result_163252b5c7cf72ad"]["jobKey"] = "163252b5c7cf72ad";
                            window["result_163252b5c7cf72ad"]["myIndeedAvailable"] = true;
                            window["result_163252b5c7cf72ad"]["showMoreActionsLink"] =
                                    window["result_163252b5c7cf72ad"]["showMoreActionsLink"] ||
                                    true;
                            window["result_163252b5c7cf72ad"]["resultNumber"] = 3;
                            window["result_163252b5c7cf72ad"][
                                    "jobStateChangedToSaved"
                                    ] = false;
                            window["result_163252b5c7cf72ad"]["searchState"] =
                                    "q=new york&amp;l=NewYork%2CNY";
                            window["result_163252b5c7cf72ad"]["basicPermaLink"] =
                                    "https://www.indeed.com";
                            window["result_163252b5c7cf72ad"]["saveJobFailed"] = false;
                            window["result_163252b5c7cf72ad"]["removeJobFailed"] = false;
                            window["result_163252b5c7cf72ad"]["requestPending"] = false;
                            window["result_163252b5c7cf72ad"]["currentPage"] = "serp";
                            window["result_163252b5c7cf72ad"]["sponsored"] = false;
                            window["result_163252b5c7cf72ad"][
                                    "reportJobButtonEnabled"
                                    ] = false;
                            window["result_163252b5c7cf72ad"]["showMyJobsHired"] = false;
                            window["result_163252b5c7cf72ad"]["showSaveForSponsored"] = false;
                            window["result_163252b5c7cf72ad"]["showJobAge"] = true;
                            window["result_163252b5c7cf72ad"]["showHolisticCard"] = true;
                            window["result_163252b5c7cf72ad"]["showDislike"] = true;
                            window["result_163252b5c7cf72ad"]["showKebab"] = true;
                            window["result_163252b5c7cf72ad"]["showReport"] = true;
                        </script>
                    </div>
                </div>
            </div>
        </div>

        <div class="tab-container">
            <div
                    id="tt_display_3"
                    class="more-links-container result-tab"
                    style="display: none"
            >
                <div id="more_3" class="more_actions">
                    <ul>
                        <li>
              <span class="mat"
              >View all
                <a
                        href="/q-JPMorgan-Chase-Bank,-N-A-l-Jersey-City,-NJ-jobs.html"
                >JPMorgan Chase Bank, N.A. jobs in Jersey City, NJ</a
                >
                -
                <a href="/l-Jersey-City,-NJ-jobs.html"
                >Jersey City jobs</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Salary Search:
                <a
                        href="/salaries/software-developer-Salaries,-Jersey-City-NJ"
                        onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=serp-more&amp;fromjk=163252b5c7cf72ad&amp;from=serp-more');"
                >Software Developer salaries in Jersey City, NJ</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >See popular
                <a
                        href="/cmp/Chase-2/faq"
                        onmousedown="this.href = appendParamsOnce(this.href, '?from=serp-more&amp;campaignid=serp-more&amp;fromjk=163252b5c7cf72ad&amp;jcid=04c6165cf2c77d28');"
                >questions &amp; answers about JPMorgan Chase Bank, N.A.</a
                ></span
              >
                        </li>
                    </ul>
                </div>
                <a
                        class="close-link closeLink"
                        title="Close"
                        href="#"
                        onclick="toggleMoreLinks('163252b5c7cf72ad'); return false;"
                ></a>
            </div>
            <div class="dya-container result-tab"></div>
            <div class="tellafriend-container result-tab email_job_content"></div>
            <div class="sign-in-container result-tab"></div>
        </div>
    </div>

    <div id="jobToJobRec_163252b5c7cf72ad_sj" class="jobToJobRec_Hide"></div>

    <div
            class="jobsearch-SerpJobCard unifiedRow row result clickcard"
            id="p_71c14bb25a91f363"
            data-jk="71c14bb25a91f363"
            data-tn-component="organicJob"
    >
        <h2 class="title">
            <a
                    target="_blank"
                    id="jl_71c14bb25a91f363"
                    href="/company/Audicus/jobs/Software-Engineer-71c14bb25a91f363?fccid=08879a067120d32e&amp;vjs=3"
                    onmousedown="return rclk(this,jobmap[4],1);"
                    onclick="setRefineByCookie([]); return rclk(this,jobmap[4],true,1);"
                    rel="noopener nofollow"
                    title="Software Engineer"
                    class="jobtitle turnstileLink"
                    data-tn-element="jobTitle"
            >
                Software Engineer</a
            >

            <span class="new">new</span>
        </h2>

        <div class="sjcl">
            <div>
                <span class="company"> Audicus</span>
            </div>
            <div
                    id="recJobLoc_71c14bb25a91f363"
                    class="recJobLoc"
                    data-rc-loc="New York, NY"
                    style="display: none"
            ></div>
            <span class="location accessible-contrast-color-location"
            >New York, NY 10004
        <span style="font-size: smaller">(Financial District area)</span></span
            >
            <span class="remote-bullet">•</span>
            <span class="remote">Temporarily remote</span>
        </div>

        <div class="salarySnippet holisticSalary">
      <span class="salary no-wrap">
        <span class="salaryText"> $89,982 - $193,948 a year</span>
      </span>
        </div>
        <table class="jobCardShelfContainer" role="presentation">
            <tbody>
            <tr class="jobCardShelf">
                <td class="jobCardShelfItem indeedApply">
            <span class="jobCardShelfIcon"
            ><svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <rect width="20" height="20" rx="10" fill="#FF5A1F"></rect>
                <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.3125 4.0625L10.8125 15.3125L7.99999 11.375L15.3125 4.0625ZM7.604 12.7576L6.875 15.3125L8.567 14.1054L7.604 12.7576ZM7.20463 10.5796L12.419 5.36525L4.0625 9.125L6.9875 10.7968L7.20463 10.5796Z"
                        fill="white"
                ></path></svg></span
            ><span class="iaLabel iaIconActive">Easily apply</span>
                </td>
            </tr>
            </tbody>
        </table>
        <div class="summary">
            <ul
                    style="
          list-style-type: circle;
          margin-top: 0px;
          margin-bottom: 0px;
          padding-left: 20px;
        "
            >
                <li style="margin-bottom: 0px">
                    Ability to learn <b>new</b> software and technologies quickly.
                </li>
                <li style="margin-bottom: 0px">
                    Recruiting <b>new</b> team members to build the engineering team.
                </li>
                <li>Front-end and database maintenance.</li>
            </ul>
        </div>

        <div class="jobsearch-SerpJobCard-footer">
            <div class="jobsearch-SerpJobCard-footerActions">
                <div class="result-link-bar-container">
                    <div class="result-link-bar">
                        <span class="date date-a11y">5 days ago</span>
                        <div id="tt_set_4" class="tt_set">
                            <div class="job-reaction">
                                <button
                                        class="job-reaction-kebab"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-ol-has-click-handler=""
                                        tabindex="0"
                                        aria-label="save or dislike"
                                        onclick="toggleKebabMenu('71c14bb25a91f363', false, event); return false;"
                                ></button>
                                <span class="job-reaction-kebab-menu"
                                ><button
                                        class="job-reaction-kebab-item job-reaction-save"
                                        onclick="changeJobState('71c14bb25a91f363', 'save', 'linkbar', false, '');return false;"
                                        data-ol-has-click-handler=""
                                >
                    <svg
                            focusable="false"
                            viewBox="0 0 24 24"
                            height="16"
                            width="16"
                    >
                      <g>
                        <path
                                fill="#2d2d2d"
                                d="M16.5,3A6,6,0,0,0,12,5.09,6,6,0,0,0,7.5,3,5.45,5.45,0,0,0,2,8.5C2,12.28,5.4,15.36,10.55,20L12,21.35,13.45,20C18.6,15.36,22,12.28,22,8.5A5.45,5.45,0,0,0,16.5,3ZM12.1,18.55l-0.1.1-0.1-.1C7.14,14.24,4,11.39,4,8.5A3.42,3.42,0,0,1,7.5,5a3.91,3.91,0,0,1,3.57,2.36h1.87A3.88,3.88,0,0,1,16.5,5,3.42,3.42,0,0,1,20,8.5C20,11.39,16.86,14.24,12.1,18.55Z"
                        ></path>
                      </g></svg
                    ><span class="job-reaction-kebab-item-text"
                                >Save job</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-dislike"
                                        onclick="dislikeJob(false, false, '71c14bb25a91f363', 'unsave', 'linkbar', false, '');"
                                        data-ol-has-click-handler=""
                                >
                    <span class="job-reaction-dislike-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Not interested</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-report"
                                        onclick="reportJob('71c14bb25a91f363');"
                                >
                    <span class="job-reaction-report-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Report Job</span
                                >
                  </button></span
                                >
                            </div>
                            <span class="result-link-bar-separator">·</span
                            ><a
                                id="sj_71c14bb25a91f363"
                                href="#"
                                class="sl resultLink save-job-link"
                                onclick="changeJobState('71c14bb25a91f363', 'save', 'linkbar', false, ''); return false;"
                                title="Save this job to my.indeed"
                        >Save job</a
                        ><span class="result-link-bar-separator">·</span>
                            <button
                                    id="tog_4"
                                    class="sl resultLink more-link"
                                    onclick="toggleMoreLinks('71c14bb25a91f363', '4'); return false;"
                                    aria-expanded="false"
                            >
                                More...
                            </button>
                        </div>
                        <script>
                            if (!window["result_71c14bb25a91f363"]) {
                                window["result_71c14bb25a91f363"] = {};
                            }
                            window["result_71c14bb25a91f363"]["showSource"] = false;
                            window["result_71c14bb25a91f363"]["source"] = "Indeed";
                            window["result_71c14bb25a91f363"]["loggedIn"] = false;
                            window["result_71c14bb25a91f363"]["showMyJobsLinks"] = false;
                            window["result_71c14bb25a91f363"]["baseMyJobsUrl"] =
                                    "https://myjobs.indeed.com";
                            window["result_71c14bb25a91f363"]["undoAction"] = "unsave";
                            window["result_71c14bb25a91f363"]["relativeJobAge"] =
                                    "5 days ago";
                            window["result_71c14bb25a91f363"]["jobKey"] = "71c14bb25a91f363";
                            window["result_71c14bb25a91f363"]["myIndeedAvailable"] = true;
                            window["result_71c14bb25a91f363"]["showMoreActionsLink"] =
                                    window["result_71c14bb25a91f363"]["showMoreActionsLink"] ||
                                    true;
                            window["result_71c14bb25a91f363"]["resultNumber"] = 4;
                            window["result_71c14bb25a91f363"][
                                    "jobStateChangedToSaved"
                                    ] = false;
                            window["result_71c14bb25a91f363"]["searchState"] =
                                    "q=new york&amp;l=NewYork%2CNY";
                            window["result_71c14bb25a91f363"]["basicPermaLink"] =
                                    "https://www.indeed.com";
                            window["result_71c14bb25a91f363"]["saveJobFailed"] = false;
                            window["result_71c14bb25a91f363"]["removeJobFailed"] = false;
                            window["result_71c14bb25a91f363"]["requestPending"] = false;
                            window["result_71c14bb25a91f363"]["currentPage"] = "serp";
                            window["result_71c14bb25a91f363"]["sponsored"] = false;
                            window["result_71c14bb25a91f363"][
                                    "reportJobButtonEnabled"
                                    ] = false;
                            window["result_71c14bb25a91f363"]["showMyJobsHired"] = false;
                            window["result_71c14bb25a91f363"]["showSaveForSponsored"] = false;
                            window["result_71c14bb25a91f363"]["showJobAge"] = true;
                            window["result_71c14bb25a91f363"]["showHolisticCard"] = true;
                            window["result_71c14bb25a91f363"]["showDislike"] = true;
                            window["result_71c14bb25a91f363"]["showKebab"] = true;
                            window["result_71c14bb25a91f363"]["showReport"] = true;
                        </script>
                    </div>
                </div>
            </div>
        </div>

        <div class="tab-container">
            <div
                    id="tt_display_4"
                    class="more-links-container result-tab"
                    style="display: none"
            >
                <div id="more_4" class="more_actions">
                    <ul>
                        <li>
              <span class="mat"
              >View all
                <a href="/q-Audicus-l-New-York,-NY-jobs.html"
                >Audicus jobs in New York, NY</a
                >
                - <a href="/l-New-York,-NY-jobs.html">New York jobs</a></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Salary Search:
                <a
                        href="/salaries/software-engineer-Salaries,-New-York-NY"
                        onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=serp-more&amp;fromjk=71c14bb25a91f363&amp;from=serp-more');"
                >Software Engineer salaries in New York, NY</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Explore career as Software Engineer:
                <a
                        href="/career/software-engineer"
                        onmousedown="this.href = appendParamsOnce(this.href, 'from=jasx');"
                >overview</a
                >,
                <a
                        href="/career/software-engineer/career-advice"
                        onmousedown="this.href = appendParamsOnce(this.href, 'from=jasx');"
                >career advice</a
                >,
                <a
                        href="/career/software-engineer/faq"
                        onmousedown="this.href = appendParamsOnce(this.href, 'from=jasx');"
                >FAQs</a
                ></span
              >
                        </li>
                    </ul>
                </div>
                <a
                        class="close-link closeLink"
                        title="Close"
                        href="#"
                        onclick="toggleMoreLinks('71c14bb25a91f363'); return false;"
                ></a>
            </div>
            <div class="dya-container result-tab"></div>
            <div class="tellafriend-container result-tab email_job_content"></div>
            <div class="sign-in-container result-tab"></div>
        </div>
    </div>

    <div id="jobToJobRec_71c14bb25a91f363_sj" class="jobToJobRec_Hide"></div>

    <div class="mosaic-zone" id="mosaic-zone-afterFifthJobResult">
        <div
                id="mosaic-provider-segmentation-serp-promo"
                class="mosaic mosaic-provider-segmentation-serp-promo"
        ></div>
    </div>
    <script type="text/javascript">
        try {
            window.mosaic.onMosaicApiReady(function () {
                var zoneId = "afterFifthJobResult";
                var providers = window.mosaic.zonedProviders[zoneId];

                if (providers) {
                    providers
                            .filter(function (p) {
                                return window.mosaic.lazyFns[p];
                            })
                            .forEach(function (p) {
                                return window.mosaic.api.loadProvider(p);
                            });
                }
            });
        } catch (e) {
        }
    </script>
    <div
            class="jobsearch-SerpJobCard unifiedRow row result clickcard"
            id="p_dfad2a382f70086a"
            data-jk="dfad2a382f70086a"
            data-tn-component="organicJob"
    >
        <h2 class="title">
            <a
                    target="_blank"
                    id="jl_dfad2a382f70086a"
                    href="/rc/clk?jk=dfad2a382f70086a&amp;fccid=8f35d6320476f1e1&amp;vjs=3"
                    onmousedown="return rclk(this,jobmap[5],1);"
                    onclick="setRefineByCookie([]); return rclk(this,jobmap[5],true,1);"
                    rel="noopener nofollow"
                    title="Full Stack Software Engineer"
                    class="jobtitle turnstileLink"
                    data-tn-element="jobTitle"
            >
                Full Stack Software Engineer</a
            >
        </h2>

        <div class="sjcl">
            <div>
        <span class="company">
          <a
                  data-tn-element="companyName"
                  class="turnstileLink"
                  target="_blank"
                  href="/cmp/Fohr-1"
                  onmousedown="this.href = appendParamsOnce(this.href, 'from=SERP&amp;campaignid=serp-linkcompanyname&amp;fromjk=dfad2a382f70086a&amp;jcid=b9201839b74ed521')"
                  rel="noopener"
          >
            Fohr</a
          ></span
        >

                <span class="ratingsDisplay">
          <a
                  data-tn-variant="cmplinktst2"
                  class="ratingNumber"
                  href="/cmp/Fohr-1/reviews"
                  title="Fohr reviews"
                  onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=cmplinktst2&amp;from=SERP&amp;jt=Full+Stack+Software+Engineer&amp;fromjk=dfad2a382f70086a&amp;jcid=b9201839b74ed521');"
                  target="_blank"
                  rel="noopener"
                  aria-label="Company rating 4.0 out of 5 stars"
          >
            <span class="ratingsContent">
              4.0<svg width="12px" height="12px" role="img" class="starIcon">
                <g>
                  <path
                          style="fill: #ffb103"
                          d="M 12.00,4.34 C 12.00,4.34 7.69,3.97 7.69,3.97 7.69,3.97 6.00,0.00 6.00,0.00 6.00,0.00 4.31,3.98 4.31,3.98 4.31,3.98 0.00,4.34 0.00,4.34 0.00,4.34 3.28,7.18 3.28,7.18 3.28,7.18 2.29,11.40 2.29,11.40 2.29,11.40 6.00,9.16 6.00,9.16 6.00,9.16 9.71,11.40 9.71,11.40 9.71,11.40 8.73,7.18 8.73,7.18 8.73,7.18 12.00,4.34 12.00,4.34 Z"
                  ></path>
                </g>
              </svg>
            </span>
          </a>
        </span>
            </div>
            <div
                    id="recJobLoc_dfad2a382f70086a"
                    class="recJobLoc"
                    data-rc-loc="New York, NY"
                    style="display: none"
            ></div>
            <span class="location accessible-contrast-color-location"
            >New York, NY</span
            >
        </div>

        <div class="salarySnippet holisticSalary">
      <span class="salary no-wrap">
        <span class="salaryText"> $90,000 - $150,000 a year</span>
      </span>
        </div>
        <div class="summary">
            <ul
                    style="
          list-style-type: circle;
          margin-top: 0px;
          margin-bottom: 0px;
          padding-left: 20px;
        "
            >
                <li style="margin-bottom: 0px">
                    Create and maintain Ruby on Rails applications.
                </li>
                <li style="margin-bottom: 0px">
                    Create and maintain front ends in React, Haml, and jQuery.
                </li>
                <li>Design, build, and maintain performant, reliable web…</li>
            </ul>
        </div>

        <div class="jobsearch-SerpJobCard-footer">
            <div class="jobsearch-SerpJobCard-footerActions">
                <div class="result-link-bar-container">
                    <div class="result-link-bar">
                        <span class="date date-a11y">30+ days ago</span>
                        <div id="tt_set_5" class="tt_set">
                            <div class="job-reaction">
                                <button
                                        class="job-reaction-kebab"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-ol-has-click-handler=""
                                        tabindex="0"
                                        aria-label="save or dislike"
                                        onclick="toggleKebabMenu('dfad2a382f70086a', false, event); return false;"
                                ></button>
                                <span class="job-reaction-kebab-menu"
                                ><button
                                        class="job-reaction-kebab-item job-reaction-save"
                                        onclick="changeJobState('dfad2a382f70086a', 'save', 'linkbar', false, '');return false;"
                                        data-ol-has-click-handler=""
                                >
                    <svg
                            focusable="false"
                            viewBox="0 0 24 24"
                            height="16"
                            width="16"
                    >
                      <g>
                        <path
                                fill="#2d2d2d"
                                d="M16.5,3A6,6,0,0,0,12,5.09,6,6,0,0,0,7.5,3,5.45,5.45,0,0,0,2,8.5C2,12.28,5.4,15.36,10.55,20L12,21.35,13.45,20C18.6,15.36,22,12.28,22,8.5A5.45,5.45,0,0,0,16.5,3ZM12.1,18.55l-0.1.1-0.1-.1C7.14,14.24,4,11.39,4,8.5A3.42,3.42,0,0,1,7.5,5a3.91,3.91,0,0,1,3.57,2.36h1.87A3.88,3.88,0,0,1,16.5,5,3.42,3.42,0,0,1,20,8.5C20,11.39,16.86,14.24,12.1,18.55Z"
                        ></path>
                      </g></svg
                    ><span class="job-reaction-kebab-item-text"
                                >Save job</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-dislike"
                                        onclick="dislikeJob(false, false, 'dfad2a382f70086a', 'unsave', 'linkbar', false, '');"
                                        data-ol-has-click-handler=""
                                >
                    <span class="job-reaction-dislike-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Not interested</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-report"
                                        onclick="reportJob('dfad2a382f70086a');"
                                >
                    <span class="job-reaction-report-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Report Job</span
                                >
                  </button></span
                                >
                            </div>
                            <span class="result-link-bar-separator">·</span
                            ><a
                                id="sj_dfad2a382f70086a"
                                href="#"
                                class="sl resultLink save-job-link"
                                onclick="changeJobState('dfad2a382f70086a', 'save', 'linkbar', false, ''); return false;"
                                title="Save this job to my.indeed"
                        >Save job</a
                        ><span class="result-link-bar-separator">·</span>
                            <button
                                    id="tog_5"
                                    class="sl resultLink more-link"
                                    onclick="toggleMoreLinks('dfad2a382f70086a', '5'); return false;"
                                    aria-expanded="false"
                            >
                                More...
                            </button>
                        </div>
                        <script>
                            if (!window["result_dfad2a382f70086a"]) {
                                window["result_dfad2a382f70086a"] = {};
                            }
                            window["result_dfad2a382f70086a"]["showSource"] = false;
                            window["result_dfad2a382f70086a"]["source"] = "Fohr";
                            window["result_dfad2a382f70086a"]["loggedIn"] = false;
                            window["result_dfad2a382f70086a"]["showMyJobsLinks"] = false;
                            window["result_dfad2a382f70086a"]["baseMyJobsUrl"] =
                                    "https://myjobs.indeed.com";
                            window["result_dfad2a382f70086a"]["undoAction"] = "unsave";
                            window["result_dfad2a382f70086a"]["relativeJobAge"] =
                                    "30+ days ago";
                            window["result_dfad2a382f70086a"]["jobKey"] = "dfad2a382f70086a";
                            window["result_dfad2a382f70086a"]["myIndeedAvailable"] = true;
                            window["result_dfad2a382f70086a"]["showMoreActionsLink"] =
                                    window["result_dfad2a382f70086a"]["showMoreActionsLink"] ||
                                    true;
                            window["result_dfad2a382f70086a"]["resultNumber"] = 5;
                            window["result_dfad2a382f70086a"][
                                    "jobStateChangedToSaved"
                                    ] = false;
                            window["result_dfad2a382f70086a"]["searchState"] =
                                    "q=new york&amp;l=NewYork%2CNY";
                            window["result_dfad2a382f70086a"]["basicPermaLink"] =
                                    "https://www.indeed.com";
                            window["result_dfad2a382f70086a"]["saveJobFailed"] = false;
                            window["result_dfad2a382f70086a"]["removeJobFailed"] = false;
                            window["result_dfad2a382f70086a"]["requestPending"] = false;
                            window["result_dfad2a382f70086a"]["currentPage"] = "serp";
                            window["result_dfad2a382f70086a"]["sponsored"] = false;
                            window["result_dfad2a382f70086a"][
                                    "reportJobButtonEnabled"
                                    ] = false;
                            window["result_dfad2a382f70086a"]["showMyJobsHired"] = false;
                            window["result_dfad2a382f70086a"]["showSaveForSponsored"] = false;
                            window["result_dfad2a382f70086a"]["showJobAge"] = true;
                            window["result_dfad2a382f70086a"]["showHolisticCard"] = true;
                            window["result_dfad2a382f70086a"]["showDislike"] = true;
                            window["result_dfad2a382f70086a"]["showKebab"] = true;
                            window["result_dfad2a382f70086a"]["showReport"] = true;
                        </script>
                    </div>
                </div>
            </div>
        </div>

        <div class="tab-container">
            <div
                    id="tt_display_5"
                    class="more-links-container result-tab"
                    style="display: none"
            >
                <div id="more_5" class="more_actions">
                    <ul>
                        <li>
              <span class="mat"
              >View all
                <a href="/q-Fohr-l-New-York,-NY-jobs.html"
                >Fohr jobs in New York, NY</a
                >
                - <a href="/l-New-York,-NY-jobs.html">New York jobs</a></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Salary Search:
                <a
                        href="/salaries/full-stack-developer-Salaries,-New-York-NY"
                        onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=serp-more&amp;fromjk=dfad2a382f70086a&amp;from=serp-more');"
                >Full Stack Developer salaries in New York, NY</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Explore career as Full Stack Developer:
                <a
                        href="/career/full-stack-developer"
                        onmousedown="this.href = appendParamsOnce(this.href, 'from=jasx');"
                >overview</a
                >,
                <a
                        href="/career/full-stack-developer/career-advice"
                        onmousedown="this.href = appendParamsOnce(this.href, 'from=jasx');"
                >career advice</a
                >,
                <a
                        href="/career/full-stack-developer/faq"
                        onmousedown="this.href = appendParamsOnce(this.href, 'from=jasx');"
                >FAQs</a
                ></span
              >
                        </li>
                    </ul>
                </div>
                <a
                        class="close-link closeLink"
                        title="Close"
                        href="#"
                        onclick="toggleMoreLinks('dfad2a382f70086a'); return false;"
                ></a>
            </div>
            <div class="dya-container result-tab"></div>
            <div class="tellafriend-container result-tab email_job_content"></div>
            <div class="sign-in-container result-tab"></div>
        </div>
    </div>

    <div id="jobToJobRec_dfad2a382f70086a_sj" class="jobToJobRec_Hide"></div>

    <div
            class="jobsearch-SerpJobCard unifiedRow row result clickcard"
            id="p_d937d498160144ad"
            data-jk="d937d498160144ad"
            data-tn-component="organicJob"
    >
        <h2 class="title">
            <a
                    target="_blank"
                    id="jl_d937d498160144ad"
                    href="/rc/clk?jk=d937d498160144ad&amp;fccid=353eb997fc901045&amp;vjs=3"
                    onmousedown="return rclk(this,jobmap[6],0);"
                    onclick="setRefineByCookie([]); return rclk(this,jobmap[6],true,0);"
                    rel="noopener nofollow"
                    title="Data Engineer - New York Hub"
                    class="jobtitle turnstileLink"
                    data-tn-element="jobTitle"
            >
                Data Engineer - <b>New</b> <b>York</b> Hub</a
            >

            <span class="new">new</span>
        </h2>

        <div class="sjcl">
            <div>
        <span class="company">
          <a
                  data-tn-element="companyName"
                  class="turnstileLink"
                  target="_blank"
                  href="/cmp/Veeva-Systems"
                  onmousedown="this.href = appendParamsOnce(this.href, 'from=SERP&amp;campaignid=serp-linkcompanyname&amp;fromjk=d937d498160144ad&amp;jcid=353eb997fc901045')"
                  rel="noopener"
          >
            Veeva Systems</a
          ></span
        >

                <span class="ratingsDisplay">
          <a
                  data-tn-variant="cmplinktst2"
                  class="ratingNumber"
                  href="/cmp/Veeva-Systems/reviews"
                  title="Veeva Systems reviews"
                  onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=cmplinktst2&amp;from=SERP&amp;jt=Data+Engineer+-+New+York+Hub&amp;fromjk=d937d498160144ad&amp;jcid=353eb997fc901045');"
                  target="_blank"
                  rel="noopener"
                  aria-label="Company rating 4.0 out of 5 stars"
          >
            <span class="ratingsContent">
              4.0<svg width="12px" height="12px" role="img" class="starIcon">
                <g>
                  <path
                          style="fill: #ffb103"
                          d="M 12.00,4.34 C 12.00,4.34 7.69,3.97 7.69,3.97 7.69,3.97 6.00,0.00 6.00,0.00 6.00,0.00 4.31,3.98 4.31,3.98 4.31,3.98 0.00,4.34 0.00,4.34 0.00,4.34 3.28,7.18 3.28,7.18 3.28,7.18 2.29,11.40 2.29,11.40 2.29,11.40 6.00,9.16 6.00,9.16 6.00,9.16 9.71,11.40 9.71,11.40 9.71,11.40 8.73,7.18 8.73,7.18 8.73,7.18 12.00,4.34 12.00,4.34 Z"
                  ></path>
                </g>
              </svg>
            </span>
          </a>
        </span>
            </div>
            <div
                    id="recJobLoc_d937d498160144ad"
                    class="recJobLoc"
                    data-rc-loc="New York, NY"
                    style="display: none"
            ></div>
            <span class="location accessible-contrast-color-location"
            >New York, NY</span
            >
        </div>

        <div class="summary">
            <ul
                    style="
          list-style-type: circle;
          margin-top: 0px;
          margin-bottom: 0px;
          padding-left: 20px;
        "
            >
                <li>
                    You will be responsible for the design and implementation of major
                    subsystems, and work in collaboration with your peers and the wider
                    engineering organization.
                </li>
            </ul>
        </div>

        <div class="jobsearch-SerpJobCard-footer">
            <div class="jobsearch-SerpJobCard-footerActions">
                <div class="result-link-bar-container">
                    <div class="result-link-bar">
                        <span class="date date-a11y">5 days ago</span>
                        <div id="tt_set_6" class="tt_set">
                            <div class="job-reaction">
                                <button
                                        class="job-reaction-kebab"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-ol-has-click-handler=""
                                        tabindex="0"
                                        aria-label="save or dislike"
                                        onclick="toggleKebabMenu('d937d498160144ad', false, event); return false;"
                                ></button>
                                <span class="job-reaction-kebab-menu"
                                ><button
                                        class="job-reaction-kebab-item job-reaction-save"
                                        onclick="changeJobState('d937d498160144ad', 'save', 'linkbar', false, '');return false;"
                                        data-ol-has-click-handler=""
                                >
                    <svg
                            focusable="false"
                            viewBox="0 0 24 24"
                            height="16"
                            width="16"
                    >
                      <g>
                        <path
                                fill="#2d2d2d"
                                d="M16.5,3A6,6,0,0,0,12,5.09,6,6,0,0,0,7.5,3,5.45,5.45,0,0,0,2,8.5C2,12.28,5.4,15.36,10.55,20L12,21.35,13.45,20C18.6,15.36,22,12.28,22,8.5A5.45,5.45,0,0,0,16.5,3ZM12.1,18.55l-0.1.1-0.1-.1C7.14,14.24,4,11.39,4,8.5A3.42,3.42,0,0,1,7.5,5a3.91,3.91,0,0,1,3.57,2.36h1.87A3.88,3.88,0,0,1,16.5,5,3.42,3.42,0,0,1,20,8.5C20,11.39,16.86,14.24,12.1,18.55Z"
                        ></path>
                      </g></svg
                    ><span class="job-reaction-kebab-item-text"
                                >Save job</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-dislike"
                                        onclick="dislikeJob(false, false, 'd937d498160144ad', 'unsave', 'linkbar', false, '');"
                                        data-ol-has-click-handler=""
                                >
                    <span class="job-reaction-dislike-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Not interested</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-report"
                                        onclick="reportJob('d937d498160144ad');"
                                >
                    <span class="job-reaction-report-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Report Job</span
                                >
                  </button></span
                                >
                            </div>
                            <span class="result-link-bar-separator">·</span
                            ><a
                                id="sj_d937d498160144ad"
                                href="#"
                                class="sl resultLink save-job-link"
                                onclick="changeJobState('d937d498160144ad', 'save', 'linkbar', false, ''); return false;"
                                title="Save this job to my.indeed"
                        >Save job</a
                        ><span class="result-link-bar-separator">·</span>
                            <button
                                    id="tog_6"
                                    class="sl resultLink more-link"
                                    onclick="toggleMoreLinks('d937d498160144ad', '6'); return false;"
                                    aria-expanded="false"
                            >
                                More...
                            </button>
                        </div>
                        <script>
                            if (!window["result_d937d498160144ad"]) {
                                window["result_d937d498160144ad"] = {};
                            }
                            window["result_d937d498160144ad"]["showSource"] = false;
                            window["result_d937d498160144ad"]["source"] = "Veeva Systems";
                            window["result_d937d498160144ad"]["loggedIn"] = false;
                            window["result_d937d498160144ad"]["showMyJobsLinks"] = false;
                            window["result_d937d498160144ad"]["baseMyJobsUrl"] =
                                    "https://myjobs.indeed.com";
                            window["result_d937d498160144ad"]["undoAction"] = "unsave";
                            window["result_d937d498160144ad"]["relativeJobAge"] =
                                    "5 days ago";
                            window["result_d937d498160144ad"]["jobKey"] = "d937d498160144ad";
                            window["result_d937d498160144ad"]["myIndeedAvailable"] = true;
                            window["result_d937d498160144ad"]["showMoreActionsLink"] =
                                    window["result_d937d498160144ad"]["showMoreActionsLink"] ||
                                    true;
                            window["result_d937d498160144ad"]["resultNumber"] = 6;
                            window["result_d937d498160144ad"][
                                    "jobStateChangedToSaved"
                                    ] = false;
                            window["result_d937d498160144ad"]["searchState"] =
                                    "q=new york&amp;l=NewYork%2CNY";
                            window["result_d937d498160144ad"]["basicPermaLink"] =
                                    "https://www.indeed.com";
                            window["result_d937d498160144ad"]["saveJobFailed"] = false;
                            window["result_d937d498160144ad"]["removeJobFailed"] = false;
                            window["result_d937d498160144ad"]["requestPending"] = false;
                            window["result_d937d498160144ad"]["currentPage"] = "serp";
                            window["result_d937d498160144ad"]["sponsored"] = false;
                            window["result_d937d498160144ad"][
                                    "reportJobButtonEnabled"
                                    ] = false;
                            window["result_d937d498160144ad"]["showMyJobsHired"] = false;
                            window["result_d937d498160144ad"]["showSaveForSponsored"] = false;
                            window["result_d937d498160144ad"]["showJobAge"] = true;
                            window["result_d937d498160144ad"]["showHolisticCard"] = true;
                            window["result_d937d498160144ad"]["showDislike"] = true;
                            window["result_d937d498160144ad"]["showKebab"] = true;
                            window["result_d937d498160144ad"]["showReport"] = true;
                        </script>
                    </div>
                </div>
            </div>
        </div>

        <div class="tab-container">
            <div
                    id="tt_display_6"
                    class="more-links-container result-tab"
                    style="display: none"
            >
                <div id="more_6" class="more_actions">
                    <ul>
                        <li>
              <span class="mat"
              >View all
                <a href="/q-Veeva-Systems-l-New-York,-NY-jobs.html"
                >Veeva Systems jobs in New York, NY</a
                >
                - <a href="/l-New-York,-NY-jobs.html">New York jobs</a></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Salary Search:
                <a
                        href="/salaries/data-engineer-Salaries,-New-York-NY"
                        onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=serp-more&amp;fromjk=d937d498160144ad&amp;from=serp-more');"
                >Data Engineer salaries in New York, NY</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Learn more about working at
                <a
                        href="/cmp/Veeva-Systems/about"
                        onmousedown="this.href = appendParamsOnce(this.href, '?fromjk=d937d498160144ad&amp;from=serp-more&amp;campaignid=serp-more&amp;jcid=353eb997fc901045');"
                >Veeva Systems</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >See popular
                <a
                        href="/cmp/Veeva-Systems/faq"
                        onmousedown="this.href = appendParamsOnce(this.href, '?from=serp-more&amp;campaignid=serp-more&amp;fromjk=d937d498160144ad&amp;jcid=353eb997fc901045');"
                >questions &amp; answers about Veeva Systems</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Explore career as Data Engineer:
                <a
                        href="/career/data-engineer"
                        onmousedown="this.href = appendParamsOnce(this.href, 'from=jasx');"
                >overview</a
                >,
                <a
                        href="/career/data-engineer/career-advice"
                        onmousedown="this.href = appendParamsOnce(this.href, 'from=jasx');"
                >career advice</a
                >,
                <a
                        href="/career/data-engineer/faq"
                        onmousedown="this.href = appendParamsOnce(this.href, 'from=jasx');"
                >FAQs</a
                ></span
              >
                        </li>
                    </ul>
                </div>
                <a
                        class="close-link closeLink"
                        title="Close"
                        href="#"
                        onclick="toggleMoreLinks('d937d498160144ad'); return false;"
                ></a>
            </div>
            <div class="dya-container result-tab"></div>
            <div class="tellafriend-container result-tab email_job_content"></div>
            <div class="sign-in-container result-tab"></div>
        </div>
    </div>

    <div id="jobToJobRec_d937d498160144ad_sj" class="jobToJobRec_Hide"></div>

    <div
            class="jobsearch-SerpJobCard unifiedRow row result clickcard"
            id="p_18ef607d2510b1b7"
            data-jk="18ef607d2510b1b7"
            data-tn-component="organicJob"
    >
        <h2 class="title">
            <a
                    target="_blank"
                    id="jl_18ef607d2510b1b7"
                    href="/rc/clk?jk=18ef607d2510b1b7&amp;fccid=423dc0697be201e8&amp;vjs=3"
                    onmousedown="return rclk(this,jobmap[7],0);"
                    onclick="setRefineByCookie([]); return rclk(this,jobmap[7],true,0);"
                    rel="noopener nofollow"
                    title="Fact Checker, New York Magazine"
                    class="jobtitle turnstileLink"
                    data-tn-element="jobTitle"
            >
                Fact Checker, <b>New</b> <b>York</b> Magazine</a
            >

            <span class="new">new</span>
        </h2>

        <div class="sjcl">
            <div>
        <span class="company">
          <a
                  data-tn-element="companyName"
                  class="turnstileLink"
                  target="_blank"
                  href="/cmp/Vox-Media"
                  onmousedown="this.href = appendParamsOnce(this.href, 'from=SERP&amp;campaignid=serp-linkcompanyname&amp;fromjk=18ef607d2510b1b7&amp;jcid=3be498c0676ad1cc')"
                  rel="noopener"
          >
            Vox Media, LLC</a
          ></span
        >

                <span class="ratingsDisplay">
          <a
                  data-tn-variant="cmplinktst2"
                  class="ratingNumber"
                  href="/cmp/Vox-Media/reviews"
                  title="Vox Media reviews"
                  onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=cmplinktst2&amp;from=SERP&amp;jt=Fact+Checker%2C+New+York+Magazine&amp;fromjk=18ef607d2510b1b7&amp;jcid=3be498c0676ad1cc');"
                  target="_blank"
                  rel="noopener"
                  aria-label="Company rating 3.8 out of 5 stars"
          >
            <span class="ratingsContent">
              3.8<svg width="12px" height="12px" role="img" class="starIcon">
                <g>
                  <path
                          style="fill: #ffb103"
                          d="M 12.00,4.34 C 12.00,4.34 7.69,3.97 7.69,3.97 7.69,3.97 6.00,0.00 6.00,0.00 6.00,0.00 4.31,3.98 4.31,3.98 4.31,3.98 0.00,4.34 0.00,4.34 0.00,4.34 3.28,7.18 3.28,7.18 3.28,7.18 2.29,11.40 2.29,11.40 2.29,11.40 6.00,9.16 6.00,9.16 6.00,9.16 9.71,11.40 9.71,11.40 9.71,11.40 8.73,7.18 8.73,7.18 8.73,7.18 12.00,4.34 12.00,4.34 Z"
                  ></path>
                </g>
              </svg>
            </span>
          </a>
        </span>
            </div>
            <div
                    id="recJobLoc_18ef607d2510b1b7"
                    class="recJobLoc"
                    data-rc-loc="New York, NY"
                    style="display: none"
            ></div>
            <span class="location accessible-contrast-color-location"
            >New York, NY 10004
        <span style="font-size: smaller">(Financial District area)</span></span
            >
        </div>

        <div class="summary">
            <ul
                    style="
          list-style-type: circle;
          margin-top: 0px;
          margin-bottom: 0px;
          padding-left: 20px;
        "
            >
                <li>
                    Fact-checkers at <b>New</b> <b>York</b> play an integral role in the
                    creation and vetting of the magazine by working closely with editors
                    and reporters to ensure the quality,…
                </li>
            </ul>
        </div>

        <div class="jobsearch-SerpJobCard-footer">
            <div class="jobsearch-SerpJobCard-footerActions">
                <div class="result-link-bar-container">
                    <div class="result-link-bar">
                        <span class="date date-a11y">2 days ago</span>
                        <div id="tt_set_7" class="tt_set">
                            <div class="job-reaction">
                                <button
                                        class="job-reaction-kebab"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-ol-has-click-handler=""
                                        tabindex="0"
                                        aria-label="save or dislike"
                                        onclick="toggleKebabMenu('18ef607d2510b1b7', false, event); return false;"
                                ></button>
                                <span class="job-reaction-kebab-menu"
                                ><button
                                        class="job-reaction-kebab-item job-reaction-save"
                                        onclick="changeJobState('18ef607d2510b1b7', 'save', 'linkbar', false, '');return false;"
                                        data-ol-has-click-handler=""
                                >
                    <svg
                            focusable="false"
                            viewBox="0 0 24 24"
                            height="16"
                            width="16"
                    >
                      <g>
                        <path
                                fill="#2d2d2d"
                                d="M16.5,3A6,6,0,0,0,12,5.09,6,6,0,0,0,7.5,3,5.45,5.45,0,0,0,2,8.5C2,12.28,5.4,15.36,10.55,20L12,21.35,13.45,20C18.6,15.36,22,12.28,22,8.5A5.45,5.45,0,0,0,16.5,3ZM12.1,18.55l-0.1.1-0.1-.1C7.14,14.24,4,11.39,4,8.5A3.42,3.42,0,0,1,7.5,5a3.91,3.91,0,0,1,3.57,2.36h1.87A3.88,3.88,0,0,1,16.5,5,3.42,3.42,0,0,1,20,8.5C20,11.39,16.86,14.24,12.1,18.55Z"
                        ></path>
                      </g></svg
                    ><span class="job-reaction-kebab-item-text"
                                >Save job</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-dislike"
                                        onclick="dislikeJob(false, false, '18ef607d2510b1b7', 'unsave', 'linkbar', false, '');"
                                        data-ol-has-click-handler=""
                                >
                    <span class="job-reaction-dislike-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Not interested</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-report"
                                        onclick="reportJob('18ef607d2510b1b7');"
                                >
                    <span class="job-reaction-report-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Report Job</span
                                >
                  </button></span
                                >
                            </div>
                            <span class="result-link-bar-separator">·</span
                            ><a
                                id="sj_18ef607d2510b1b7"
                                href="#"
                                class="sl resultLink save-job-link"
                                onclick="changeJobState('18ef607d2510b1b7', 'save', 'linkbar', false, ''); return false;"
                                title="Save this job to my.indeed"
                        >Save job</a
                        ><span class="result-link-bar-separator">·</span>
                            <button
                                    id="tog_7"
                                    class="sl resultLink more-link"
                                    onclick="toggleMoreLinks('18ef607d2510b1b7', '7'); return false;"
                                    aria-expanded="false"
                            >
                                More...
                            </button>
                        </div>
                        <script>
                            if (!window["result_18ef607d2510b1b7"]) {
                                window["result_18ef607d2510b1b7"] = {};
                            }
                            window["result_18ef607d2510b1b7"]["showSource"] = false;
                            window["result_18ef607d2510b1b7"]["source"] = "Vox Media, LLC";
                            window["result_18ef607d2510b1b7"]["loggedIn"] = false;
                            window["result_18ef607d2510b1b7"]["showMyJobsLinks"] = false;
                            window["result_18ef607d2510b1b7"]["baseMyJobsUrl"] =
                                    "https://myjobs.indeed.com";
                            window["result_18ef607d2510b1b7"]["undoAction"] = "unsave";
                            window["result_18ef607d2510b1b7"]["relativeJobAge"] =
                                    "2 days ago";
                            window["result_18ef607d2510b1b7"]["jobKey"] = "18ef607d2510b1b7";
                            window["result_18ef607d2510b1b7"]["myIndeedAvailable"] = true;
                            window["result_18ef607d2510b1b7"]["showMoreActionsLink"] =
                                    window["result_18ef607d2510b1b7"]["showMoreActionsLink"] ||
                                    true;
                            window["result_18ef607d2510b1b7"]["resultNumber"] = 7;
                            window["result_18ef607d2510b1b7"][
                                    "jobStateChangedToSaved"
                                    ] = false;
                            window["result_18ef607d2510b1b7"]["searchState"] =
                                    "q=new york&amp;l=NewYork%2CNY";
                            window["result_18ef607d2510b1b7"]["basicPermaLink"] =
                                    "https://www.indeed.com";
                            window["result_18ef607d2510b1b7"]["saveJobFailed"] = false;
                            window["result_18ef607d2510b1b7"]["removeJobFailed"] = false;
                            window["result_18ef607d2510b1b7"]["requestPending"] = false;
                            window["result_18ef607d2510b1b7"]["currentPage"] = "serp";
                            window["result_18ef607d2510b1b7"]["sponsored"] = false;
                            window["result_18ef607d2510b1b7"][
                                    "reportJobButtonEnabled"
                                    ] = false;
                            window["result_18ef607d2510b1b7"]["showMyJobsHired"] = false;
                            window["result_18ef607d2510b1b7"]["showSaveForSponsored"] = false;
                            window["result_18ef607d2510b1b7"]["showJobAge"] = true;
                            window["result_18ef607d2510b1b7"]["showHolisticCard"] = true;
                            window["result_18ef607d2510b1b7"]["showDislike"] = true;
                            window["result_18ef607d2510b1b7"]["showKebab"] = true;
                            window["result_18ef607d2510b1b7"]["showReport"] = true;
                        </script>
                    </div>
                </div>
            </div>
        </div>

        <div class="tab-container">
            <div
                    id="tt_display_7"
                    class="more-links-container result-tab"
                    style="display: none"
            >
                <div id="more_7" class="more_actions">
                    <ul>
                        <li>
              <span class="mat"
              >View all
                <a href="/jobs?q=Vox+Media,+LLC&amp;l=New+York,+NY&amp;nc=jasx"
                >Vox Media, LLC jobs in New York, NY</a
                >
                - <a href="/l-New-York,-NY-jobs.html">New York jobs</a></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Salary Search:
                <a
                        href="/salaries/checker-Salaries,-New-York-NY"
                        onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=serp-more&amp;fromjk=18ef607d2510b1b7&amp;from=serp-more');"
                >Checker salaries in New York, NY</a
                ></span
              >
                        </li>
                    </ul>
                </div>
                <a
                        class="close-link closeLink"
                        title="Close"
                        href="#"
                        onclick="toggleMoreLinks('18ef607d2510b1b7'); return false;"
                ></a>
            </div>
            <div class="dya-container result-tab"></div>
            <div class="tellafriend-container result-tab email_job_content"></div>
            <div class="sign-in-container result-tab"></div>
        </div>
    </div>

    <div id="jobToJobRec_18ef607d2510b1b7_sj" class="jobToJobRec_Hide"></div>

    <div
            class="jobsearch-SerpJobCard unifiedRow row result clickcard"
            id="pj_054fa717fb5bf7fa"
            data-jk="054fa717fb5bf7fa"
            data-empn="4983507805751065"
            data-ci="314381616"
    >
        <style>
            .jobcard_logo {
                margin: 6px 0;
            }

            .jobcard_logo img {
                width: auto;
                max-width: 80px;
                max-height: 30px;
            }

            .jasxrefreshcombotst .jobcard_logo img {
                max-height: 2rem;
                max-width: 100%;
            }
        </style>

        <div class="jobcard_logo">
            <a
                    href="/cmp/Tf-Cornerstone-1"
                    target="_blank"
                    rel="noopener"
                    onmousedown="this.href = appendParamsOnce(this.href, 'tk=1f2v8c5vlt5ne801&amp;campaignid=femp&amp;from=femp');"
            >
                <img
                        src="https://d2q79iu7y748jz.cloudfront.net/s/_logo/2807881a1754fdd6f2072524823b2813"
                        alt="TF Cornerstone - go to company page"
                />
            </a>
        </div>
        <h2 class="title">
            <a
                    target="_blank"
                    id="sja8"
                    href="/pagead/clk?mo=r&amp;ad=-6NYlbfkN0AefEeuf8CxN1dJhSyNWpZYBJNxAKccr6MgnKWiZdjwL6KfQFKY5ZNH7qrP_vpCp_dLlBP6AdKiYu9366UJVzYGvaonuy3pbBNb20Un3AHTvnfwO0Qjofjd81aMHX7cHkIwTY32Yb5EfRBtnFRjn_YgSWXr-EuarJp0IszAMIaAk7CE9aEkZBBAj4M8Ch3ER5I1m82HV-GODp-PM_7aqyMTahNk2fap6tW17bc_6CPZEpto7Qn4At_QbwZdWlY0U35ehc36b0dehlKtszE_kbKNexHKJjlrJcAfCOlfp7KlFFJUdKQyvzNba6W00efNLyZIPWXFsTTNWmhg0gLN5mmB-CO_mjor2tykqXM930IcQlM82DnWaKkcDMyqX3CvVI8Z4nBgqrFDtMMxhfe1o3UDJnSngaRMLbS6_S_YM9A4hFi4-8KJ6y3GJm6RbNgQwao=&amp;p=8&amp;fvj=1&amp;vjs=3"
                    onmousedown="sjomd('sja8'); clk('sja8'); rclk(this,jobmap[8],1);"
                    onclick="setRefineByCookie([]); sjoc('sja8', 1); convCtr('SJ'); rclk(this,jobmap[8],true,1);"
                    rel="noopener nofollow"
                    title="Software Engineer"
                    class="jobtitle turnstileLink"
                    data-tn-element="jobTitle"
            >
                Software Engineer</a
            >
        </h2>

        <div class="sjcl">
            <div>
                <span class="company"> TF Cornerstone</span>
            </div>
            <div
                    id="recJobLoc_054fa717fb5bf7fa"
                    class="recJobLoc"
                    data-rc-loc="New York, NY"
                    style="display: none"
            ></div>
            <div class="location accessible-contrast-color-location">
                New York, NY 10016
                <span style="font-size: smaller">(Flatiron District area)</span>
            </div>
            <span class="remote-bullet">•</span>
            <span class="remote">Temporarily remote</span>
        </div>

        <div class="salarySnippet holisticSalary">
      <span class="salary no-wrap">
        <span class="salaryText"> $100,000 - $110,000 a year</span>
      </span>
        </div>
        <div class="jobCardReqContainer">
            <div class="jobCardReqHeader">Requirements</div>
            <div class="jobCardReqList">
                <div class="jobCardReqItem">Bachelor's</div>
            </div>
        </div>
        <table class="jobCardShelfContainer" role="presentation">
            <tbody>
            <tr class="jobCardShelf">
                <td class="jobCardShelfItem indeedApply">
            <span class="jobCardShelfIcon"
            ><svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <rect width="20" height="20" rx="10" fill="#FF5A1F"></rect>
                <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.3125 4.0625L10.8125 15.3125L7.99999 11.375L15.3125 4.0625ZM7.604 12.7576L6.875 15.3125L8.567 14.1054L7.604 12.7576ZM7.20463 10.5796L12.419 5.36525L4.0625 9.125L6.9875 10.7968L7.20463 10.5796Z"
                        fill="white"
                ></path></svg></span
            ><span class="iaLabel iaIconActive">Easily apply</span>
                </td>
            </tr>
            </tbody>
        </table>
        <div class="summary">
            <ul
                    style="
          list-style-type: circle;
          margin-top: 0px;
          margin-bottom: 0px;
          padding-left: 20px;
        "
            >
                <li style="margin-bottom: 0px">
                    Build a client-side MVC framework in React /Redux to drive all our
                    front-ends.
                </li>
                <li>
                    Develop a customized workflow framework to digitize, track, and make
                    efficient…
                </li>
            </ul>
        </div>

        <div class="jobsearch-SerpJobCard-footer">
            <div class="jobsearch-SerpJobCard-footerActions">
                <div class="result-link-bar-container">
                    <div class="result-link-bar">
                        <span class="date date-a11y">30+ days ago</span>
                        <div id="tt_set_8" class="tt_set">
                            <div class="job-reaction">
                                <button
                                        class="job-reaction-kebab"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-ol-has-click-handler=""
                                        tabindex="0"
                                        aria-label="save or dislike"
                                        onclick="toggleKebabMenu('054fa717fb5bf7fa', true, event); return false;"
                                ></button>
                                <span class="job-reaction-kebab-menu"
                                ><button
                                        class="job-reaction-kebab-item job-reaction-save"
                                        onclick="changeJobState('054fa717fb5bf7fa', 'save', 'linkbar', true, '');return false;"
                                        data-ol-has-click-handler=""
                                >
                    <svg
                            focusable="false"
                            viewBox="0 0 24 24"
                            height="16"
                            width="16"
                    >
                      <g>
                        <path
                                fill="#2d2d2d"
                                d="M16.5,3A6,6,0,0,0,12,5.09,6,6,0,0,0,7.5,3,5.45,5.45,0,0,0,2,8.5C2,12.28,5.4,15.36,10.55,20L12,21.35,13.45,20C18.6,15.36,22,12.28,22,8.5A5.45,5.45,0,0,0,16.5,3ZM12.1,18.55l-0.1.1-0.1-.1C7.14,14.24,4,11.39,4,8.5A3.42,3.42,0,0,1,7.5,5a3.91,3.91,0,0,1,3.57,2.36h1.87A3.88,3.88,0,0,1,16.5,5,3.42,3.42,0,0,1,20,8.5C20,11.39,16.86,14.24,12.1,18.55Z"
                        ></path>
                      </g></svg
                    ><span class="job-reaction-kebab-item-text"
                                >Save job</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-dislike"
                                        onclick="dislikeJob(false, false, '054fa717fb5bf7fa', 'unsave', 'linkbar', true, '');"
                                        data-ol-has-click-handler=""
                                >
                    <span class="job-reaction-dislike-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Not interested</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-report"
                                        onclick="reportJob('054fa717fb5bf7fa');"
                                >
                    <span class="job-reaction-report-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Report Job</span
                                >
                  </button></span
                                >
                            </div>
                            <span class="result-link-bar-separator">·</span
                            ><a
                                id="sj_054fa717fb5bf7fa"
                                href="#"
                                class="sl resultLink save-job-link"
                                onclick="changeJobState('054fa717fb5bf7fa', 'save', 'linkbar', true, ''); return false;"
                                title="Save this job to my.indeed"
                        >Save job</a
                        >
                        </div>
                        <script>
                            if (!window["sj_result_054fa717fb5bf7fa"]) {
                                window["sj_result_054fa717fb5bf7fa"] = {};
                            }
                            window["sj_result_054fa717fb5bf7fa"]["showSource"] = false;
                            window["sj_result_054fa717fb5bf7fa"]["source"] = "Indeed";
                            window["sj_result_054fa717fb5bf7fa"]["loggedIn"] = false;
                            window["sj_result_054fa717fb5bf7fa"]["showMyJobsLinks"] = false;
                            window["sj_result_054fa717fb5bf7fa"]["baseMyJobsUrl"] =
                                    "https://myjobs.indeed.com";
                            window["sj_result_054fa717fb5bf7fa"]["undoAction"] = "unsave";
                            window["sj_result_054fa717fb5bf7fa"]["relativeJobAge"] =
                                    "30+ days ago";
                            window["sj_result_054fa717fb5bf7fa"]["jobKey"] =
                                    "054fa717fb5bf7fa";
                            window["sj_result_054fa717fb5bf7fa"]["myIndeedAvailable"] = true;
                            window["sj_result_054fa717fb5bf7fa"]["showMoreActionsLink"] =
                                    window["sj_result_054fa717fb5bf7fa"]["showMoreActionsLink"] ||
                                    false;
                            window["sj_result_054fa717fb5bf7fa"]["resultNumber"] = 8;
                            window["sj_result_054fa717fb5bf7fa"][
                                    "jobStateChangedToSaved"
                                    ] = false;
                            window["sj_result_054fa717fb5bf7fa"]["searchState"] =
                                    "q=new york&amp;l=NewYork%2CNY";
                            window["sj_result_054fa717fb5bf7fa"]["basicPermaLink"] =
                                    "https://www.indeed.com";
                            window["sj_result_054fa717fb5bf7fa"]["saveJobFailed"] = false;
                            window["sj_result_054fa717fb5bf7fa"]["removeJobFailed"] = false;
                            window["sj_result_054fa717fb5bf7fa"]["requestPending"] = false;
                            window["sj_result_054fa717fb5bf7fa"]["currentPage"] = "serp";
                            window["sj_result_054fa717fb5bf7fa"]["sponsored"] = true;
                            window["sj_result_054fa717fb5bf7fa"][
                                    "reportJobButtonEnabled"
                                    ] = false;
                            window["sj_result_054fa717fb5bf7fa"]["showMyJobsHired"] = false;
                            window["sj_result_054fa717fb5bf7fa"][
                                    "showSaveForSponsored"
                                    ] = true;
                            window["sj_result_054fa717fb5bf7fa"]["showJobAge"] = true;
                            window["sj_result_054fa717fb5bf7fa"]["showHolisticCard"] = true;
                            window["sj_result_054fa717fb5bf7fa"]["showDislike"] = true;
                            window["sj_result_054fa717fb5bf7fa"]["showKebab"] = true;
                            window["sj_result_054fa717fb5bf7fa"]["showReport"] = true;
                        </script>
                    </div>
                </div>
            </div>
        </div>

        <div class="tab-container">
            <div class="sign-in-container result-tab"></div>
            <div class="tellafriend-container result-tab email_job_content"></div>
        </div>
    </div>

    <div id="jobToJobRec_054fa717fb5bf7fa_sj" class="jobToJobRec_Hide"></div>

    <div
            class="jobsearch-SerpJobCard unifiedRow row result clickcard"
            id="pj_6a322f7f7c603e6c"
            data-jk="6a322f7f7c603e6c"
            data-empn="9831846170172041"
            data-ci="365870798"
    >
        <style>
            .jobcard_logo {
                margin: 6px 0;
            }

            .jobcard_logo img {
                width: auto;
                max-width: 80px;
                max-height: 30px;
            }

            .jasxrefreshcombotst .jobcard_logo img {
                max-height: 2rem;
                max-width: 100%;
            }
        </style>

        <h2 class="title">
            <a
                    target="_blank"
                    id="sja9"
                    href="/pagead/clk?mo=r&amp;ad=-6NYlbfkN0D7WcfnM4t04Gw-yjdiFZVWATaWr8_7AOG4DM3U6KCFVTpLdOiHcOa23QLhJaMuPqcMsGZtO4hYxvm6psTA3joBC3Zq1NFv19mSi4wy7lRTJRb1yG_Fi-5b918Ail_H2WgikgOWYDuNEYC1zvapK7zvow1nnuBP-fku9nc8Caf2ruSxEih0SUlbelmL44G1EM7zKL5g6IBmMAagpOwAgsIJshPdA_wJeKYBsJHVWGAjcbYC16VNS45p3Wj2cdqwttg0PbhNPwJOa3z_JD1sbjiUJ6EnfTybh_medLjjTsYar-W7MZB8f41ZVB6fNc66Fa1CknsdboUc6qQdyIvhu7O6kNQqcS09pxr71dnGLCwRRIKYI0mkwSKxoUD2xu6jYtRWjFbNSKswiIpIuSnvtYxkxaktODd7m2in7QbjVEXdDOE7QySUWfecigqtNW2ooD1dJHjxXvfDq4jP3cvH-5WR&amp;p=9&amp;fvj=0&amp;vjs=3"
                    onmousedown="sjomd('sja9'); clk('sja9'); rclk(this,jobmap[9],0);"
                    onclick="setRefineByCookie([]); sjoc('sja9', 0); convCtr('SJ'); rclk(this,jobmap[9],true,0);"
                    rel="noopener nofollow"
                    title="Business Analyst - New York"
                    class="jobtitle turnstileLink"
                    data-tn-element="jobTitle"
            >
                Business Analyst - <b>New</b> <b>York</b></a
            >
        </h2>

        <div class="sjcl">
            <div>
                <span class="company"> Efficio Consulting</span>
            </div>
            <div
                    id="recJobLoc_6a322f7f7c603e6c"
                    class="recJobLoc"
                    data-rc-loc="New York, NY"
                    style="display: none"
            ></div>
            <div class="location accessible-contrast-color-location">
                New York, NY
            </div>
        </div>

        <div class="summary">
            <ul
                    style="
          list-style-type: circle;
          margin-top: 0px;
          margin-bottom: 0px;
          padding-left: 20px;
        "
            >
                <li>
                    Business Analysts roles are targeted at graduate entry level
                    candidates and are the first step into management consulting.
                </li>
            </ul>
        </div>

        <div class="jobsearch-SerpJobCard-footer">
            <div class="jobsearch-SerpJobCard-footerActions">
                <div class="result-link-bar-container">
                    <div class="result-link-bar">
                        <span class="date date-a11y">10 days ago</span>
                        <div id="tt_set_9" class="tt_set">
                            <div class="job-reaction">
                                <button
                                        class="job-reaction-kebab"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-ol-has-click-handler=""
                                        tabindex="0"
                                        aria-label="save or dislike"
                                        onclick="toggleKebabMenu('6a322f7f7c603e6c', true, event); return false;"
                                ></button>
                                <span class="job-reaction-kebab-menu"
                                ><button
                                        class="job-reaction-kebab-item job-reaction-save"
                                        onclick="changeJobState('6a322f7f7c603e6c', 'save', 'linkbar', true, '');return false;"
                                        data-ol-has-click-handler=""
                                >
                    <svg
                            focusable="false"
                            viewBox="0 0 24 24"
                            height="16"
                            width="16"
                    >
                      <g>
                        <path
                                fill="#2d2d2d"
                                d="M16.5,3A6,6,0,0,0,12,5.09,6,6,0,0,0,7.5,3,5.45,5.45,0,0,0,2,8.5C2,12.28,5.4,15.36,10.55,20L12,21.35,13.45,20C18.6,15.36,22,12.28,22,8.5A5.45,5.45,0,0,0,16.5,3ZM12.1,18.55l-0.1.1-0.1-.1C7.14,14.24,4,11.39,4,8.5A3.42,3.42,0,0,1,7.5,5a3.91,3.91,0,0,1,3.57,2.36h1.87A3.88,3.88,0,0,1,16.5,5,3.42,3.42,0,0,1,20,8.5C20,11.39,16.86,14.24,12.1,18.55Z"
                        ></path>
                      </g></svg
                    ><span class="job-reaction-kebab-item-text"
                                >Save job</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-dislike"
                                        onclick="dislikeJob(false, false, '6a322f7f7c603e6c', 'unsave', 'linkbar', true, '');"
                                        data-ol-has-click-handler=""
                                >
                    <span class="job-reaction-dislike-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Not interested</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-report"
                                        onclick="reportJob('6a322f7f7c603e6c');"
                                >
                    <span class="job-reaction-report-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Report Job</span
                                >
                  </button></span
                                >
                            </div>
                            <span class="result-link-bar-separator">·</span
                            ><a
                                id="sj_6a322f7f7c603e6c"
                                href="#"
                                class="sl resultLink save-job-link"
                                onclick="changeJobState('6a322f7f7c603e6c', 'save', 'linkbar', true, ''); return false;"
                                title="Save this job to my.indeed"
                        >Save job</a
                        >
                        </div>
                        <script>
                            if (!window["sj_result_6a322f7f7c603e6c"]) {
                                window["sj_result_6a322f7f7c603e6c"] = {};
                            }
                            window["sj_result_6a322f7f7c603e6c"]["showSource"] = false;
                            window["sj_result_6a322f7f7c603e6c"]["source"] =
                                    "Efficio Consulting";
                            window["sj_result_6a322f7f7c603e6c"]["loggedIn"] = false;
                            window["sj_result_6a322f7f7c603e6c"]["showMyJobsLinks"] = false;
                            window["sj_result_6a322f7f7c603e6c"]["baseMyJobsUrl"] =
                                    "https://myjobs.indeed.com";
                            window["sj_result_6a322f7f7c603e6c"]["undoAction"] = "unsave";
                            window["sj_result_6a322f7f7c603e6c"]["relativeJobAge"] =
                                    "10 days ago";
                            window["sj_result_6a322f7f7c603e6c"]["jobKey"] =
                                    "6a322f7f7c603e6c";
                            window["sj_result_6a322f7f7c603e6c"]["myIndeedAvailable"] = true;
                            window["sj_result_6a322f7f7c603e6c"]["showMoreActionsLink"] =
                                    window["sj_result_6a322f7f7c603e6c"]["showMoreActionsLink"] ||
                                    false;
                            window["sj_result_6a322f7f7c603e6c"]["resultNumber"] = 9;
                            window["sj_result_6a322f7f7c603e6c"][
                                    "jobStateChangedToSaved"
                                    ] = false;
                            window["sj_result_6a322f7f7c603e6c"]["searchState"] =
                                    "q=new york&amp;l=NewYork%2CNY";
                            window["sj_result_6a322f7f7c603e6c"]["basicPermaLink"] =
                                    "https://www.indeed.com";
                            window["sj_result_6a322f7f7c603e6c"]["saveJobFailed"] = false;
                            window["sj_result_6a322f7f7c603e6c"]["removeJobFailed"] = false;
                            window["sj_result_6a322f7f7c603e6c"]["requestPending"] = false;
                            window["sj_result_6a322f7f7c603e6c"]["currentPage"] = "serp";
                            window["sj_result_6a322f7f7c603e6c"]["sponsored"] = true;
                            window["sj_result_6a322f7f7c603e6c"][
                                    "reportJobButtonEnabled"
                                    ] = false;
                            window["sj_result_6a322f7f7c603e6c"]["showMyJobsHired"] = false;
                            window["sj_result_6a322f7f7c603e6c"][
                                    "showSaveForSponsored"
                                    ] = true;
                            window["sj_result_6a322f7f7c603e6c"]["showJobAge"] = true;
                            window["sj_result_6a322f7f7c603e6c"]["showHolisticCard"] = true;
                            window["sj_result_6a322f7f7c603e6c"]["showDislike"] = true;
                            window["sj_result_6a322f7f7c603e6c"]["showKebab"] = true;
                            window["sj_result_6a322f7f7c603e6c"]["showReport"] = true;
                        </script>
                    </div>
                </div>
            </div>
        </div>

        <div class="tab-container">
            <div class="sign-in-container result-tab"></div>
            <div class="tellafriend-container result-tab email_job_content"></div>
        </div>
    </div>

    <div id="jobToJobRec_6a322f7f7c603e6c_sj" class="jobToJobRec_Hide"></div>

    <div class="mosaic-zone" id="mosaic-zone-afterTenthJobResult"></div>
    <script type="text/javascript">
        try {
            window.mosaic.onMosaicApiReady(function () {
                var zoneId = "afterTenthJobResult";
                var providers = window.mosaic.zonedProviders[zoneId];

                if (providers) {
                    providers
                            .filter(function (p) {
                                return window.mosaic.lazyFns[p];
                            })
                            .forEach(function (p) {
                                return window.mosaic.api.loadProvider(p);
                            });
                }
            });
        } catch (e) {
        }
    </script>
    <div
            class="jobsearch-SerpJobCard unifiedRow row result clickcard"
            id="p_10283e860cc16082"
            data-jk="10283e860cc16082"
            data-tn-component="organicJob"
    >
        <h2 class="title">
            <a
                    target="_blank"
                    id="jl_10283e860cc16082"
                    href="/rc/clk?jk=10283e860cc16082&amp;fccid=e07ad8e98d949b3e&amp;vjs=3"
                    onmousedown="return rclk(this,jobmap[10],0);"
                    onclick="setRefineByCookie([]); return rclk(this,jobmap[10],true,0);"
                    rel="noopener nofollow"
                    title="Specialist, Lifesaving Outcomes-New York"
                    class="jobtitle turnstileLink"
                    data-tn-element="jobTitle"
            >
                Specialist, Lifesaving Outcomes-<b>New</b> <b>York</b></a
            >

            <span class="new">new</span>
        </h2>

        <div class="sjcl">
            <div>
        <span class="company">
          <a
                  data-tn-element="companyName"
                  class="turnstileLink"
                  target="_blank"
                  href="/cmp/Best-Friends-Animal-Society"
                  onmousedown="this.href = appendParamsOnce(this.href, 'from=SERP&amp;campaignid=serp-linkcompanyname&amp;fromjk=10283e860cc16082&amp;jcid=e07ad8e98d949b3e')"
                  rel="noopener"
          >
            Best Friends Animal Society</a
          ></span
        >

                <span class="ratingsDisplay">
          <a
                  data-tn-variant="cmplinktst2"
                  class="ratingNumber"
                  href="/cmp/Best-Friends-Animal-Society/reviews"
                  title="Best Friends Animal Society reviews"
                  onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=cmplinktst2&amp;from=SERP&amp;jt=Specialist%2C+Lifesaving+Outcomes-New+York&amp;fromjk=10283e860cc16082&amp;jcid=e07ad8e98d949b3e');"
                  target="_blank"
                  rel="noopener"
                  aria-label="Company rating 3.1 out of 5 stars"
          >
            <span class="ratingsContent">
              3.1<svg width="12px" height="12px" role="img" class="starIcon">
                <g>
                  <path
                          style="fill: #ffb103"
                          d="M 12.00,4.34 C 12.00,4.34 7.69,3.97 7.69,3.97 7.69,3.97 6.00,0.00 6.00,0.00 6.00,0.00 4.31,3.98 4.31,3.98 4.31,3.98 0.00,4.34 0.00,4.34 0.00,4.34 3.28,7.18 3.28,7.18 3.28,7.18 2.29,11.40 2.29,11.40 2.29,11.40 6.00,9.16 6.00,9.16 6.00,9.16 9.71,11.40 9.71,11.40 9.71,11.40 8.73,7.18 8.73,7.18 8.73,7.18 12.00,4.34 12.00,4.34 Z"
                  ></path>
                </g>
              </svg>
            </span>
          </a>
        </span>
            </div>
            <div
                    id="recJobLoc_10283e860cc16082"
                    class="recJobLoc"
                    data-rc-loc="New York, NY"
                    style="display: none"
            ></div>
            <span class="location accessible-contrast-color-location"
            >New York, NY 10013
        <span style="font-size: smaller">(Tribeca area)</span></span
            >
        </div>

        <div class="summary">
            <ul
                    style="
          list-style-type: circle;
          margin-top: 0px;
          margin-bottom: 0px;
          padding-left: 20px;
        "
            >
                <li>
                    Promote, coordinate, and facilitate mobile, remote, and on-site pet
                    adoptions, providing superior customer service, <b>new</b> pet parent
                    counselling, and post…
                </li>
            </ul>
        </div>

        <div class="jobsearch-SerpJobCard-footer">
            <div class="jobsearch-SerpJobCard-footerActions">
                <div class="result-link-bar-container">
                    <div class="result-link-bar">
                        <span class="date date-a11y">Today</span>
                        <div id="tt_set_10" class="tt_set">
                            <div class="job-reaction">
                                <button
                                        class="job-reaction-kebab"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-ol-has-click-handler=""
                                        tabindex="0"
                                        aria-label="save or dislike"
                                        onclick="toggleKebabMenu('10283e860cc16082', false, event); return false;"
                                ></button>
                                <span class="job-reaction-kebab-menu"
                                ><button
                                        class="job-reaction-kebab-item job-reaction-save"
                                        onclick="changeJobState('10283e860cc16082', 'save', 'linkbar', false, '');return false;"
                                        data-ol-has-click-handler=""
                                >
                    <svg
                            focusable="false"
                            viewBox="0 0 24 24"
                            height="16"
                            width="16"
                    >
                      <g>
                        <path
                                fill="#2d2d2d"
                                d="M16.5,3A6,6,0,0,0,12,5.09,6,6,0,0,0,7.5,3,5.45,5.45,0,0,0,2,8.5C2,12.28,5.4,15.36,10.55,20L12,21.35,13.45,20C18.6,15.36,22,12.28,22,8.5A5.45,5.45,0,0,0,16.5,3ZM12.1,18.55l-0.1.1-0.1-.1C7.14,14.24,4,11.39,4,8.5A3.42,3.42,0,0,1,7.5,5a3.91,3.91,0,0,1,3.57,2.36h1.87A3.88,3.88,0,0,1,16.5,5,3.42,3.42,0,0,1,20,8.5C20,11.39,16.86,14.24,12.1,18.55Z"
                        ></path>
                      </g></svg
                    ><span class="job-reaction-kebab-item-text"
                                >Save job</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-dislike"
                                        onclick="dislikeJob(false, false, '10283e860cc16082', 'unsave', 'linkbar', false, '');"
                                        data-ol-has-click-handler=""
                                >
                    <span class="job-reaction-dislike-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Not interested</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-report"
                                        onclick="reportJob('10283e860cc16082');"
                                >
                    <span class="job-reaction-report-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Report Job</span
                                >
                  </button></span
                                >
                            </div>
                            <span class="result-link-bar-separator">·</span
                            ><a
                                id="sj_10283e860cc16082"
                                href="#"
                                class="sl resultLink save-job-link"
                                onclick="changeJobState('10283e860cc16082', 'save', 'linkbar', false, ''); return false;"
                                title="Save this job to my.indeed"
                        >Save job</a
                        ><span class="result-link-bar-separator">·</span>
                            <button
                                    id="tog_10"
                                    class="sl resultLink more-link"
                                    onclick="toggleMoreLinks('10283e860cc16082', '10'); return false;"
                                    aria-expanded="false"
                            >
                                More...
                            </button>
                        </div>
                        <script>
                            if (!window["result_10283e860cc16082"]) {
                                window["result_10283e860cc16082"] = {};
                            }
                            window["result_10283e860cc16082"]["showSource"] = false;
                            window["result_10283e860cc16082"]["source"] =
                                    "Best Friends Animal Society";
                            window["result_10283e860cc16082"]["loggedIn"] = false;
                            window["result_10283e860cc16082"]["showMyJobsLinks"] = false;
                            window["result_10283e860cc16082"]["baseMyJobsUrl"] =
                                    "https://myjobs.indeed.com";
                            window["result_10283e860cc16082"]["undoAction"] = "unsave";
                            window["result_10283e860cc16082"]["relativeJobAge"] = "Today";
                            window["result_10283e860cc16082"]["jobKey"] = "10283e860cc16082";
                            window["result_10283e860cc16082"]["myIndeedAvailable"] = true;
                            window["result_10283e860cc16082"]["showMoreActionsLink"] =
                                    window["result_10283e860cc16082"]["showMoreActionsLink"] ||
                                    true;
                            window["result_10283e860cc16082"]["resultNumber"] = 10;
                            window["result_10283e860cc16082"][
                                    "jobStateChangedToSaved"
                                    ] = false;
                            window["result_10283e860cc16082"]["searchState"] =
                                    "q=new york&amp;l=NewYork%2CNY";
                            window["result_10283e860cc16082"]["basicPermaLink"] =
                                    "https://www.indeed.com";
                            window["result_10283e860cc16082"]["saveJobFailed"] = false;
                            window["result_10283e860cc16082"]["removeJobFailed"] = false;
                            window["result_10283e860cc16082"]["requestPending"] = false;
                            window["result_10283e860cc16082"]["currentPage"] = "serp";
                            window["result_10283e860cc16082"]["sponsored"] = false;
                            window["result_10283e860cc16082"][
                                    "reportJobButtonEnabled"
                                    ] = false;
                            window["result_10283e860cc16082"]["showMyJobsHired"] = false;
                            window["result_10283e860cc16082"]["showSaveForSponsored"] = false;
                            window["result_10283e860cc16082"]["showJobAge"] = true;
                            window["result_10283e860cc16082"]["showHolisticCard"] = true;
                            window["result_10283e860cc16082"]["showDislike"] = true;
                            window["result_10283e860cc16082"]["showKebab"] = true;
                            window["result_10283e860cc16082"]["showReport"] = true;
                        </script>
                    </div>
                </div>
            </div>
        </div>

        <div class="tab-container">
            <div
                    id="tt_display_8"
                    class="more-links-container result-tab"
                    style="display: none"
            >
                <div id="more_8" class="more_actions">
                    <ul>
                        <li>
              <span class="mat"
              >View all
                <a
                        href="/q-Best-Friends-Animal-Society-l-New-York,-NY-jobs.html"
                >Best Friends Animal Society jobs in New York, NY</a
                >
                - <a href="/l-New-York,-NY-jobs.html">New York jobs</a></span
              >
                        </li>
                        <li>
              <span class="mat"
              >See popular
                <a
                        href="/cmp/Best-Friends-Animal-Society/faq"
                        onmousedown="this.href = appendParamsOnce(this.href, '?from=serp-more&amp;campaignid=serp-more&amp;fromjk=10283e860cc16082&amp;jcid=e07ad8e98d949b3e');"
                >questions &amp; answers about Best Friends Animal Society</a
                ></span
              >
                        </li>
                    </ul>
                </div>
                <a
                        class="close-link closeLink"
                        title="Close"
                        href="#"
                        onclick="toggleMoreLinks('10283e860cc16082'); return false;"
                ></a>
            </div>
            <div class="dya-container result-tab"></div>
            <div class="tellafriend-container result-tab email_job_content"></div>
            <div class="sign-in-container result-tab"></div>
        </div>
    </div>

    <div id="jobToJobRec_10283e860cc16082_sj" class="jobToJobRec_Hide"></div>

    <div
            class="jobsearch-SerpJobCard unifiedRow row result clickcard"
            id="p_cfe8887482976a2e"
            data-jk="cfe8887482976a2e"
            data-tn-component="organicJob"
    >
        <h2 class="title">
            <a
                    target="_blank"
                    id="jl_cfe8887482976a2e"
                    href="/rc/clk?jk=cfe8887482976a2e&amp;fccid=c762a27145bd166e&amp;vjs=3"
                    onmousedown="return rclk(this,jobmap[11],0);"
                    onclick="setRefineByCookie([]); return rclk(this,jobmap[11],true,0);"
                    rel="noopener nofollow"
                    title="Vulnerability - Remediation Support Analyst - Opportunity to Work Remotely New York, NY"
                    class="jobtitle turnstileLink"
                    data-tn-element="jobTitle"
            >
                Vulnerability - Remediation Support Analyst - Opportunity to...</a
            >

            <span class="new">new</span>
        </h2>

        <div class="sjcl">
            <div>
        <span class="company">
          <a
                  data-tn-element="companyName"
                  class="turnstileLink"
                  target="_blank"
                  href="/cmp/Vmware"
                  onmousedown="this.href = appendParamsOnce(this.href, 'from=SERP&amp;campaignid=serp-linkcompanyname&amp;fromjk=cfe8887482976a2e&amp;jcid=c762a27145bd166e')"
                  rel="noopener"
          >
            VMware</a
          ></span
        >

                <span class="ratingsDisplay">
          <a
                  data-tn-variant="cmplinktst2"
                  class="ratingNumber"
                  href="/cmp/Vmware/reviews"
                  title="Vmware reviews"
                  onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=cmplinktst2&amp;from=SERP&amp;jt=Vulnerability+-+Remediation+Support+Analyst+-+Opportunity+to+Work+Remotely+New+York%2C+NY&amp;fromjk=cfe8887482976a2e&amp;jcid=c762a27145bd166e');"
                  target="_blank"
                  rel="noopener"
                  aria-label="Company rating 4.0 out of 5 stars"
          >
            <span class="ratingsContent">
              4.0<svg width="12px" height="12px" role="img" class="starIcon">
                <g>
                  <path
                          style="fill: #ffb103"
                          d="M 12.00,4.34 C 12.00,4.34 7.69,3.97 7.69,3.97 7.69,3.97 6.00,0.00 6.00,0.00 6.00,0.00 4.31,3.98 4.31,3.98 4.31,3.98 0.00,4.34 0.00,4.34 0.00,4.34 3.28,7.18 3.28,7.18 3.28,7.18 2.29,11.40 2.29,11.40 2.29,11.40 6.00,9.16 6.00,9.16 6.00,9.16 9.71,11.40 9.71,11.40 9.71,11.40 8.73,7.18 8.73,7.18 8.73,7.18 12.00,4.34 12.00,4.34 Z"
                  ></path>
                </g>
              </svg>
            </span>
          </a>
        </span>
            </div>
            <div
                    id="recJobLoc_cfe8887482976a2e"
                    class="recJobLoc"
                    data-rc-loc="New York, NY"
                    style="display: none"
            ></div>
            <span class="location accessible-contrast-color-location"
            >New York, NY</span
            >
            <span class="remote-bullet">•</span>
            <span class="remote">Remote</span>
        </div>

        <div class="summary">
            <ul
                    style="
          list-style-type: circle;
          margin-top: 0px;
          margin-bottom: 0px;
          padding-left: 20px;
        "
            >
                <li>
                    The Vulnerability Management is comprised of highly technical
                    professionals, some with developer backgrounds and others
                    <b>new</b> to the concept of automation.
                </li>
            </ul>
        </div>

        <div class="jobsearch-SerpJobCard-footer">
            <div class="jobsearch-SerpJobCard-footerActions">
                <div class="result-link-bar-container">
                    <div class="result-link-bar">
                        <span class="date date-a11y">1 day ago</span>
                        <div id="tt_set_11" class="tt_set">
                            <div class="job-reaction">
                                <button
                                        class="job-reaction-kebab"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-ol-has-click-handler=""
                                        tabindex="0"
                                        aria-label="save or dislike"
                                        onclick="toggleKebabMenu('cfe8887482976a2e', false, event); return false;"
                                ></button>
                                <span class="job-reaction-kebab-menu"
                                ><button
                                        class="job-reaction-kebab-item job-reaction-save"
                                        onclick="changeJobState('cfe8887482976a2e', 'save', 'linkbar', false, '');return false;"
                                        data-ol-has-click-handler=""
                                >
                    <svg
                            focusable="false"
                            viewBox="0 0 24 24"
                            height="16"
                            width="16"
                    >
                      <g>
                        <path
                                fill="#2d2d2d"
                                d="M16.5,3A6,6,0,0,0,12,5.09,6,6,0,0,0,7.5,3,5.45,5.45,0,0,0,2,8.5C2,12.28,5.4,15.36,10.55,20L12,21.35,13.45,20C18.6,15.36,22,12.28,22,8.5A5.45,5.45,0,0,0,16.5,3ZM12.1,18.55l-0.1.1-0.1-.1C7.14,14.24,4,11.39,4,8.5A3.42,3.42,0,0,1,7.5,5a3.91,3.91,0,0,1,3.57,2.36h1.87A3.88,3.88,0,0,1,16.5,5,3.42,3.42,0,0,1,20,8.5C20,11.39,16.86,14.24,12.1,18.55Z"
                        ></path>
                      </g></svg
                    ><span class="job-reaction-kebab-item-text"
                                >Save job</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-dislike"
                                        onclick="dislikeJob(false, false, 'cfe8887482976a2e', 'unsave', 'linkbar', false, '');"
                                        data-ol-has-click-handler=""
                                >
                    <span class="job-reaction-dislike-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Not interested</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-report"
                                        onclick="reportJob('cfe8887482976a2e');"
                                >
                    <span class="job-reaction-report-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Report Job</span
                                >
                  </button></span
                                >
                            </div>
                            <span class="result-link-bar-separator">·</span
                            ><a
                                id="sj_cfe8887482976a2e"
                                href="#"
                                class="sl resultLink save-job-link"
                                onclick="changeJobState('cfe8887482976a2e', 'save', 'linkbar', false, ''); return false;"
                                title="Save this job to my.indeed"
                        >Save job</a
                        ><span class="result-link-bar-separator">·</span>
                            <button
                                    id="tog_11"
                                    class="sl resultLink more-link"
                                    onclick="toggleMoreLinks('cfe8887482976a2e', '11'); return false;"
                                    aria-expanded="false"
                            >
                                More...
                            </button>
                        </div>
                        <script>
                            if (!window["result_cfe8887482976a2e"]) {
                                window["result_cfe8887482976a2e"] = {};
                            }
                            window["result_cfe8887482976a2e"]["showSource"] = false;
                            window["result_cfe8887482976a2e"]["source"] = "VMware";
                            window["result_cfe8887482976a2e"]["loggedIn"] = false;
                            window["result_cfe8887482976a2e"]["showMyJobsLinks"] = false;
                            window["result_cfe8887482976a2e"]["baseMyJobsUrl"] =
                                    "https://myjobs.indeed.com";
                            window["result_cfe8887482976a2e"]["undoAction"] = "unsave";
                            window["result_cfe8887482976a2e"]["relativeJobAge"] = "1 day ago";
                            window["result_cfe8887482976a2e"]["jobKey"] = "cfe8887482976a2e";
                            window["result_cfe8887482976a2e"]["myIndeedAvailable"] = true;
                            window["result_cfe8887482976a2e"]["showMoreActionsLink"] =
                                    window["result_cfe8887482976a2e"]["showMoreActionsLink"] ||
                                    true;
                            window["result_cfe8887482976a2e"]["resultNumber"] = 11;
                            window["result_cfe8887482976a2e"][
                                    "jobStateChangedToSaved"
                                    ] = false;
                            window["result_cfe8887482976a2e"]["searchState"] =
                                    "q=new york&amp;l=NewYork%2CNY";
                            window["result_cfe8887482976a2e"]["basicPermaLink"] =
                                    "https://www.indeed.com";
                            window["result_cfe8887482976a2e"]["saveJobFailed"] = false;
                            window["result_cfe8887482976a2e"]["removeJobFailed"] = false;
                            window["result_cfe8887482976a2e"]["requestPending"] = false;
                            window["result_cfe8887482976a2e"]["currentPage"] = "serp";
                            window["result_cfe8887482976a2e"]["sponsored"] = false;
                            window["result_cfe8887482976a2e"][
                                    "reportJobButtonEnabled"
                                    ] = false;
                            window["result_cfe8887482976a2e"]["showMyJobsHired"] = false;
                            window["result_cfe8887482976a2e"]["showSaveForSponsored"] = false;
                            window["result_cfe8887482976a2e"]["showJobAge"] = true;
                            window["result_cfe8887482976a2e"]["showHolisticCard"] = true;
                            window["result_cfe8887482976a2e"]["showDislike"] = true;
                            window["result_cfe8887482976a2e"]["showKebab"] = true;
                            window["result_cfe8887482976a2e"]["showReport"] = true;
                        </script>
                    </div>
                </div>
            </div>
        </div>

        <div class="tab-container">
            <div
                    id="tt_display_9"
                    class="more-links-container result-tab"
                    style="display: none"
            >
                <div id="more_9" class="more_actions">
                    <ul>
                        <li>
              <span class="mat"
              >View all
                <a href="/q-Vmware-l-New-York,-NY-jobs.html"
                >VMware jobs in New York, NY</a
                >
                - <a href="/l-New-York,-NY-jobs.html">New York jobs</a></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Salary Search:
                <a
                        href="/salaries/support-analyst-Salaries,-New-York-NY"
                        onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=serp-more&amp;fromjk=cfe8887482976a2e&amp;from=serp-more');"
                >Support Analyst salaries in New York, NY</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Learn more about working at
                <a
                        href="/cmp/Vmware/about"
                        onmousedown="this.href = appendParamsOnce(this.href, '?fromjk=cfe8887482976a2e&amp;from=serp-more&amp;campaignid=serp-more&amp;jcid=c762a27145bd166e');"
                >VMware</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >See popular
                <a
                        href="/cmp/Vmware/faq"
                        onmousedown="this.href = appendParamsOnce(this.href, '?from=serp-more&amp;campaignid=serp-more&amp;fromjk=cfe8887482976a2e&amp;jcid=c762a27145bd166e');"
                >questions &amp; answers about VMware</a
                ></span
              >
                        </li>
                    </ul>
                </div>
                <a
                        class="close-link closeLink"
                        title="Close"
                        href="#"
                        onclick="toggleMoreLinks('cfe8887482976a2e'); return false;"
                ></a>
            </div>
            <div class="dya-container result-tab"></div>
            <div class="tellafriend-container result-tab email_job_content"></div>
            <div class="sign-in-container result-tab"></div>
        </div>
    </div>

    <div id="jobToJobRec_cfe8887482976a2e_sj" class="jobToJobRec_Hide"></div>

    <div
            class="jobsearch-SerpJobCard unifiedRow row result clickcard"
            id="p_60857a7abd9cd3ad"
            data-jk="60857a7abd9cd3ad"
            data-tn-component="organicJob"
    >
        <h2 class="title">
            <a
                    target="_blank"
                    id="jl_60857a7abd9cd3ad"
                    href="/rc/clk?jk=60857a7abd9cd3ad&amp;fccid=c762a27145bd166e&amp;vjs=3"
                    onmousedown="return rclk(this,jobmap[12],0);"
                    onclick="setRefineByCookie([]); return rclk(this,jobmap[12],true,0);"
                    rel="noopener nofollow"
                    title="Staff I Software Engineer - Knative OSS Networking - Opportunity for Working Remotely New York, NY"
                    class="jobtitle turnstileLink"
                    data-tn-element="jobTitle"
            >
                Staff I Software Engineer - Knative OSS Networking - Opportu...</a
            >

            <span class="new">new</span>
        </h2>

        <div class="sjcl">
            <div>
        <span class="company">
          <a
                  data-tn-element="companyName"
                  class="turnstileLink"
                  target="_blank"
                  href="/cmp/Vmware"
                  onmousedown="this.href = appendParamsOnce(this.href, 'from=SERP&amp;campaignid=serp-linkcompanyname&amp;fromjk=60857a7abd9cd3ad&amp;jcid=00875b772fc0f04e')"
                  rel="noopener"
          >
            VMware Engineering</a
          ></span
        >

                <span class="ratingsDisplay">
          <a
                  data-tn-variant="cmplinktst2"
                  class="ratingNumber"
                  href="/cmp/Vmware/reviews"
                  title="Vmware Engineering reviews"
                  onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=cmplinktst2&amp;from=SERP&amp;jt=Staff+I+Software+Engineer+-+Knative+OSS+Networking+-+Opportunity+for+Working+Remotely+New+York%2C+NY&amp;fromjk=60857a7abd9cd3ad&amp;jcid=00875b772fc0f04e');"
                  target="_blank"
                  rel="noopener"
                  aria-label="Company rating 4.0 out of 5 stars"
          >
            <span class="ratingsContent">
              4.0<svg width="12px" height="12px" role="img" class="starIcon">
                <g>
                  <path
                          style="fill: #ffb103"
                          d="M 12.00,4.34 C 12.00,4.34 7.69,3.97 7.69,3.97 7.69,3.97 6.00,0.00 6.00,0.00 6.00,0.00 4.31,3.98 4.31,3.98 4.31,3.98 0.00,4.34 0.00,4.34 0.00,4.34 3.28,7.18 3.28,7.18 3.28,7.18 2.29,11.40 2.29,11.40 2.29,11.40 6.00,9.16 6.00,9.16 6.00,9.16 9.71,11.40 9.71,11.40 9.71,11.40 8.73,7.18 8.73,7.18 8.73,7.18 12.00,4.34 12.00,4.34 Z"
                  ></path>
                </g>
              </svg>
            </span>
          </a>
        </span>
            </div>
            <div
                    id="recJobLoc_60857a7abd9cd3ad"
                    class="recJobLoc"
                    data-rc-loc="New York, NY"
                    style="display: none"
            ></div>
            <span class="location accessible-contrast-color-location"
            >New York, NY</span
            >
            <span class="remote-bullet">•</span>
            <span class="remote">Remote</span>
        </div>

        <div class="summary">
            <ul
                    style="
          list-style-type: circle;
          margin-top: 0px;
          margin-bottom: 0px;
          padding-left: 20px;
        "
            >
                <li>
                    Strong development experience with Go or proven experience with other
                    OOP languages to show the ability to ramp on on a <b>new</b> language
                    quickly.
                </li>
            </ul>
        </div>

        <div class="jobsearch-SerpJobCard-footer">
            <div class="jobsearch-SerpJobCard-footerActions">
                <div class="result-link-bar-container">
                    <div class="result-link-bar">
                        <span class="date date-a11y">3 days ago</span>
                        <div id="tt_set_12" class="tt_set">
                            <div class="job-reaction">
                                <button
                                        class="job-reaction-kebab"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-ol-has-click-handler=""
                                        tabindex="0"
                                        aria-label="save or dislike"
                                        onclick="toggleKebabMenu('60857a7abd9cd3ad', false, event); return false;"
                                ></button>
                                <span class="job-reaction-kebab-menu"
                                ><button
                                        class="job-reaction-kebab-item job-reaction-save"
                                        onclick="changeJobState('60857a7abd9cd3ad', 'save', 'linkbar', false, '');return false;"
                                        data-ol-has-click-handler=""
                                >
                    <svg
                            focusable="false"
                            viewBox="0 0 24 24"
                            height="16"
                            width="16"
                    >
                      <g>
                        <path
                                fill="#2d2d2d"
                                d="M16.5,3A6,6,0,0,0,12,5.09,6,6,0,0,0,7.5,3,5.45,5.45,0,0,0,2,8.5C2,12.28,5.4,15.36,10.55,20L12,21.35,13.45,20C18.6,15.36,22,12.28,22,8.5A5.45,5.45,0,0,0,16.5,3ZM12.1,18.55l-0.1.1-0.1-.1C7.14,14.24,4,11.39,4,8.5A3.42,3.42,0,0,1,7.5,5a3.91,3.91,0,0,1,3.57,2.36h1.87A3.88,3.88,0,0,1,16.5,5,3.42,3.42,0,0,1,20,8.5C20,11.39,16.86,14.24,12.1,18.55Z"
                        ></path>
                      </g></svg
                    ><span class="job-reaction-kebab-item-text"
                                >Save job</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-dislike"
                                        onclick="dislikeJob(false, false, '60857a7abd9cd3ad', 'unsave', 'linkbar', false, '');"
                                        data-ol-has-click-handler=""
                                >
                    <span class="job-reaction-dislike-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Not interested</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-report"
                                        onclick="reportJob('60857a7abd9cd3ad');"
                                >
                    <span class="job-reaction-report-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Report Job</span
                                >
                  </button></span
                                >
                            </div>
                            <span class="result-link-bar-separator">·</span
                            ><a
                                id="sj_60857a7abd9cd3ad"
                                href="#"
                                class="sl resultLink save-job-link"
                                onclick="changeJobState('60857a7abd9cd3ad', 'save', 'linkbar', false, ''); return false;"
                                title="Save this job to my.indeed"
                        >Save job</a
                        ><span class="result-link-bar-separator">·</span>
                            <button
                                    id="tog_12"
                                    class="sl resultLink more-link"
                                    onclick="toggleMoreLinks('60857a7abd9cd3ad', '12'); return false;"
                                    aria-expanded="false"
                            >
                                More...
                            </button>
                        </div>
                        <script>
                            if (!window["result_60857a7abd9cd3ad"]) {
                                window["result_60857a7abd9cd3ad"] = {};
                            }
                            window["result_60857a7abd9cd3ad"]["showSource"] = false;
                            window["result_60857a7abd9cd3ad"]["source"] = "VMware";
                            window["result_60857a7abd9cd3ad"]["loggedIn"] = false;
                            window["result_60857a7abd9cd3ad"]["showMyJobsLinks"] = false;
                            window["result_60857a7abd9cd3ad"]["baseMyJobsUrl"] =
                                    "https://myjobs.indeed.com";
                            window["result_60857a7abd9cd3ad"]["undoAction"] = "unsave";
                            window["result_60857a7abd9cd3ad"]["relativeJobAge"] =
                                    "3 days ago";
                            window["result_60857a7abd9cd3ad"]["jobKey"] = "60857a7abd9cd3ad";
                            window["result_60857a7abd9cd3ad"]["myIndeedAvailable"] = true;
                            window["result_60857a7abd9cd3ad"]["showMoreActionsLink"] =
                                    window["result_60857a7abd9cd3ad"]["showMoreActionsLink"] ||
                                    true;
                            window["result_60857a7abd9cd3ad"]["resultNumber"] = 12;
                            window["result_60857a7abd9cd3ad"][
                                    "jobStateChangedToSaved"
                                    ] = false;
                            window["result_60857a7abd9cd3ad"]["searchState"] =
                                    "q=new york&amp;l=NewYork%2CNY";
                            window["result_60857a7abd9cd3ad"]["basicPermaLink"] =
                                    "https://www.indeed.com";
                            window["result_60857a7abd9cd3ad"]["saveJobFailed"] = false;
                            window["result_60857a7abd9cd3ad"]["removeJobFailed"] = false;
                            window["result_60857a7abd9cd3ad"]["requestPending"] = false;
                            window["result_60857a7abd9cd3ad"]["currentPage"] = "serp";
                            window["result_60857a7abd9cd3ad"]["sponsored"] = false;
                            window["result_60857a7abd9cd3ad"][
                                    "reportJobButtonEnabled"
                                    ] = false;
                            window["result_60857a7abd9cd3ad"]["showMyJobsHired"] = false;
                            window["result_60857a7abd9cd3ad"]["showSaveForSponsored"] = false;
                            window["result_60857a7abd9cd3ad"]["showJobAge"] = true;
                            window["result_60857a7abd9cd3ad"]["showHolisticCard"] = true;
                            window["result_60857a7abd9cd3ad"]["showDislike"] = true;
                            window["result_60857a7abd9cd3ad"]["showKebab"] = true;
                            window["result_60857a7abd9cd3ad"]["showReport"] = true;
                        </script>
                    </div>
                </div>
            </div>
        </div>

        <div class="tab-container">
            <div
                    id="tt_display_10"
                    class="more-links-container result-tab"
                    style="display: none"
            >
                <div id="more_10" class="more_actions">
                    <ul>
                        <li>
              <span class="mat"
              >View all
                <a href="/q-Vmware-Engineering-l-New-York,-NY-jobs.html"
                >VMware Engineering jobs in New York, NY</a
                >
                - <a href="/l-New-York,-NY-jobs.html">New York jobs</a></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Learn more about working at
                <a
                        href="/cmp/Vmware/about"
                        onmousedown="this.href = appendParamsOnce(this.href, '?fromjk=60857a7abd9cd3ad&amp;from=serp-more&amp;campaignid=serp-more&amp;jcid=00875b772fc0f04e');"
                >VMware Engineering</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >See popular
                <a
                        href="/cmp/Vmware/faq"
                        onmousedown="this.href = appendParamsOnce(this.href, '?from=serp-more&amp;campaignid=serp-more&amp;fromjk=60857a7abd9cd3ad&amp;jcid=00875b772fc0f04e');"
                >questions &amp; answers about VMware Engineering</a
                ></span
              >
                        </li>
                    </ul>
                </div>
                <a
                        class="close-link closeLink"
                        title="Close"
                        href="#"
                        onclick="toggleMoreLinks('60857a7abd9cd3ad'); return false;"
                ></a>
            </div>
            <div class="dya-container result-tab"></div>
            <div class="tellafriend-container result-tab email_job_content"></div>
            <div class="sign-in-container result-tab"></div>
        </div>
    </div>

    <div id="jobToJobRec_60857a7abd9cd3ad_sj" class="jobToJobRec_Hide"></div>

    <div
            class="jobsearch-SerpJobCard unifiedRow row result clickcard"
            id="p_4416d65196c0a232"
            data-jk="4416d65196c0a232"
            data-tn-component="organicJob"
    >
        <h2 class="title">
            <a
                    target="_blank"
                    id="jl_4416d65196c0a232"
                    href="/rc/clk?jk=4416d65196c0a232&amp;fccid=a9825d6e856f097c&amp;vjs=3"
                    onmousedown="return rclk(this,jobmap[13],0);"
                    onclick="setRefineByCookie([]); return rclk(this,jobmap[13],true,0);"
                    rel="noopener nofollow"
                    title="Tech Ops Engineer (New York)"
                    class="jobtitle turnstileLink"
                    data-tn-element="jobTitle"
            >
                Tech Ops Engineer (<b>New</b> <b>York</b>)</a
            >
        </h2>

        <div class="sjcl">
            <div>
        <span class="company">
          <a
                  data-tn-element="companyName"
                  class="turnstileLink"
                  target="_blank"
                  href="/cmp/D.-E.-Shaw-&amp;-Co.---Investment-Firm"
                  onmousedown="this.href = appendParamsOnce(this.href, 'from=SERP&amp;campaignid=serp-linkcompanyname&amp;fromjk=4416d65196c0a232&amp;jcid=f216451943e10fb5')"
                  rel="noopener"
          >
            D. E. Shaw &amp; Co., L.P.</a
          ></span
        >

                <span class="ratingsDisplay">
          <a
                  data-tn-variant="cmplinktst2"
                  class="ratingNumber"
                  href="/cmp/D.-E.-Shaw-&amp;-Co.---Investment-Firm/reviews"
                  title="D. E. Shaw &amp; reviews"
                  onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=cmplinktst2&amp;from=SERP&amp;jt=Tech+Ops+Engineer+%28New+York%29&amp;fromjk=4416d65196c0a232&amp;jcid=f216451943e10fb5');"
                  target="_blank"
                  rel="noopener"
                  aria-label="Company rating 4.1 out of 5 stars"
          >
            <span class="ratingsContent">
              4.1<svg width="12px" height="12px" role="img" class="starIcon">
                <g>
                  <path
                          style="fill: #ffb103"
                          d="M 12.00,4.34 C 12.00,4.34 7.69,3.97 7.69,3.97 7.69,3.97 6.00,0.00 6.00,0.00 6.00,0.00 4.31,3.98 4.31,3.98 4.31,3.98 0.00,4.34 0.00,4.34 0.00,4.34 3.28,7.18 3.28,7.18 3.28,7.18 2.29,11.40 2.29,11.40 2.29,11.40 6.00,9.16 6.00,9.16 6.00,9.16 9.71,11.40 9.71,11.40 9.71,11.40 8.73,7.18 8.73,7.18 8.73,7.18 12.00,4.34 12.00,4.34 Z"
                  ></path>
                </g>
              </svg>
            </span>
          </a>
        </span>
            </div>
            <div
                    id="recJobLoc_4416d65196c0a232"
                    class="recJobLoc"
                    data-rc-loc="New York, NY"
                    style="display: none"
            ></div>
            <span class="location accessible-contrast-color-location"
            >New York, NY</span
            >
        </div>

        <div class="summary">
            <ul
                    style="
          list-style-type: circle;
          margin-top: 0px;
          margin-bottom: 0px;
          padding-left: 20px;
        "
            >
                <li>
                    The engineer will join a team that provides support for the firm’s
                    real-time trading system, manages and improves operational
                    infrastructure, and triages front…
                </li>
            </ul>
        </div>

        <div class="jobsearch-SerpJobCard-footer">
            <div class="jobsearch-SerpJobCard-footerActions">
                <div class="result-link-bar-container">
                    <div class="result-link-bar">
                        <span class="date date-a11y">30+ days ago</span>
                        <div id="tt_set_13" class="tt_set">
                            <div class="job-reaction">
                                <button
                                        class="job-reaction-kebab"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-ol-has-click-handler=""
                                        tabindex="0"
                                        aria-label="save or dislike"
                                        onclick="toggleKebabMenu('4416d65196c0a232', false, event); return false;"
                                ></button>
                                <span class="job-reaction-kebab-menu"
                                ><button
                                        class="job-reaction-kebab-item job-reaction-save"
                                        onclick="changeJobState('4416d65196c0a232', 'save', 'linkbar', false, '');return false;"
                                        data-ol-has-click-handler=""
                                >
                    <svg
                            focusable="false"
                            viewBox="0 0 24 24"
                            height="16"
                            width="16"
                    >
                      <g>
                        <path
                                fill="#2d2d2d"
                                d="M16.5,3A6,6,0,0,0,12,5.09,6,6,0,0,0,7.5,3,5.45,5.45,0,0,0,2,8.5C2,12.28,5.4,15.36,10.55,20L12,21.35,13.45,20C18.6,15.36,22,12.28,22,8.5A5.45,5.45,0,0,0,16.5,3ZM12.1,18.55l-0.1.1-0.1-.1C7.14,14.24,4,11.39,4,8.5A3.42,3.42,0,0,1,7.5,5a3.91,3.91,0,0,1,3.57,2.36h1.87A3.88,3.88,0,0,1,16.5,5,3.42,3.42,0,0,1,20,8.5C20,11.39,16.86,14.24,12.1,18.55Z"
                        ></path>
                      </g></svg
                    ><span class="job-reaction-kebab-item-text"
                                >Save job</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-dislike"
                                        onclick="dislikeJob(false, false, '4416d65196c0a232', 'unsave', 'linkbar', false, '');"
                                        data-ol-has-click-handler=""
                                >
                    <span class="job-reaction-dislike-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Not interested</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-report"
                                        onclick="reportJob('4416d65196c0a232');"
                                >
                    <span class="job-reaction-report-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Report Job</span
                                >
                  </button></span
                                >
                            </div>
                            <span class="result-link-bar-separator">·</span
                            ><a
                                id="sj_4416d65196c0a232"
                                href="#"
                                class="sl resultLink save-job-link"
                                onclick="changeJobState('4416d65196c0a232', 'save', 'linkbar', false, ''); return false;"
                                title="Save this job to my.indeed"
                        >Save job</a
                        ><span class="result-link-bar-separator">·</span>
                            <button
                                    id="tog_13"
                                    class="sl resultLink more-link"
                                    onclick="toggleMoreLinks('4416d65196c0a232', '13'); return false;"
                                    aria-expanded="false"
                            >
                                More...
                            </button>
                        </div>
                        <script>
                            if (!window["result_4416d65196c0a232"]) {
                                window["result_4416d65196c0a232"] = {};
                            }
                            window["result_4416d65196c0a232"]["showSource"] = false;
                            window["result_4416d65196c0a232"]["source"] =
                                    "D. E. Shaw \x26 Co., L.P.";
                            window["result_4416d65196c0a232"]["loggedIn"] = false;
                            window["result_4416d65196c0a232"]["showMyJobsLinks"] = false;
                            window["result_4416d65196c0a232"]["baseMyJobsUrl"] =
                                    "https://myjobs.indeed.com";
                            window["result_4416d65196c0a232"]["undoAction"] = "unsave";
                            window["result_4416d65196c0a232"]["relativeJobAge"] =
                                    "30+ days ago";
                            window["result_4416d65196c0a232"]["jobKey"] = "4416d65196c0a232";
                            window["result_4416d65196c0a232"]["myIndeedAvailable"] = true;
                            window["result_4416d65196c0a232"]["showMoreActionsLink"] =
                                    window["result_4416d65196c0a232"]["showMoreActionsLink"] ||
                                    true;
                            window["result_4416d65196c0a232"]["resultNumber"] = 13;
                            window["result_4416d65196c0a232"][
                                    "jobStateChangedToSaved"
                                    ] = false;
                            window["result_4416d65196c0a232"]["searchState"] =
                                    "q=new york&amp;l=NewYork%2CNY";
                            window["result_4416d65196c0a232"]["basicPermaLink"] =
                                    "https://www.indeed.com";
                            window["result_4416d65196c0a232"]["saveJobFailed"] = false;
                            window["result_4416d65196c0a232"]["removeJobFailed"] = false;
                            window["result_4416d65196c0a232"]["requestPending"] = false;
                            window["result_4416d65196c0a232"]["currentPage"] = "serp";
                            window["result_4416d65196c0a232"]["sponsored"] = false;
                            window["result_4416d65196c0a232"][
                                    "reportJobButtonEnabled"
                                    ] = false;
                            window["result_4416d65196c0a232"]["showMyJobsHired"] = false;
                            window["result_4416d65196c0a232"]["showSaveForSponsored"] = false;
                            window["result_4416d65196c0a232"]["showJobAge"] = true;
                            window["result_4416d65196c0a232"]["showHolisticCard"] = true;
                            window["result_4416d65196c0a232"]["showDislike"] = true;
                            window["result_4416d65196c0a232"]["showKebab"] = true;
                            window["result_4416d65196c0a232"]["showReport"] = true;
                        </script>
                    </div>
                </div>
            </div>
        </div>

        <div class="tab-container">
            <div
                    id="tt_display_11"
                    class="more-links-container result-tab"
                    style="display: none"
            >
                <div id="more_11" class="more_actions">
                    <ul>
                        <li>
              <span class="mat"
              >View all
                <a
                        href="/jobs?q=D+E+Shaw+%26+Co+,+L+P&amp;l=New+York,+NY&amp;nc=jasx"
                >D. E. Shaw &amp; Co., L.P. jobs in New York, NY</a
                >
                - <a href="/l-New-York,-NY-jobs.html">New York jobs</a></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Salary Search:
                <a
                        href="/salaries/technician-Salaries,-New-York-NY"
                        onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=serp-more&amp;fromjk=4416d65196c0a232&amp;from=serp-more');"
                >Technician salaries in New York, NY</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >See popular
                <a
                        href="/cmp/D.-E.-Shaw-&amp;-Co.---Investment-Firm/faq"
                        onmousedown="this.href = appendParamsOnce(this.href, '?from=serp-more&amp;campaignid=serp-more&amp;fromjk=4416d65196c0a232&amp;jcid=f216451943e10fb5');"
                >questions &amp; answers about D. E. Shaw &amp; Co., L.P.</a
                ></span
              >
                        </li>
                    </ul>
                </div>
                <a
                        class="close-link closeLink"
                        title="Close"
                        href="#"
                        onclick="toggleMoreLinks('4416d65196c0a232'); return false;"
                ></a>
            </div>
            <div class="dya-container result-tab"></div>
            <div class="tellafriend-container result-tab email_job_content"></div>
            <div class="sign-in-container result-tab"></div>
        </div>
    </div>

    <div id="jobToJobRec_4416d65196c0a232_sj" class="jobToJobRec_Hide"></div>

    <div
            class="jobsearch-SerpJobCard unifiedRow row result clickcard"
            id="p_713c8e29ef478bb9"
            data-jk="713c8e29ef478bb9"
            data-tn-component="organicJob"
    >
        <h2 class="title">
            <a
                    target="_blank"
                    id="jl_713c8e29ef478bb9"
                    href="/rc/clk?jk=713c8e29ef478bb9&amp;fccid=2d949908fcb6b985&amp;vjs=3"
                    onmousedown="return rclk(this,jobmap[14],0);"
                    onclick="setRefineByCookie([]); return rclk(this,jobmap[14],true,0);"
                    rel="noopener nofollow"
                    title="Software Engineer, Portfolio Technology"
                    class="jobtitle turnstileLink"
                    data-tn-element="jobTitle"
            >
                Software Engineer, Portfolio Technology</a
            >

            <span class="new">new</span>
        </h2>

        <div class="sjcl">
            <div>
        <span class="company">
          <a
                  data-tn-element="companyName"
                  class="turnstileLink"
                  target="_blank"
                  href="/cmp/Pimco"
                  onmousedown="this.href = appendParamsOnce(this.href, 'from=SERP&amp;campaignid=serp-linkcompanyname&amp;fromjk=713c8e29ef478bb9&amp;jcid=58c5ffd9046f105b')"
                  rel="noopener"
          >
            Pacific Investment Management Company LLC</a
          ></span
        >

                <span class="ratingsDisplay">
          <a
                  data-tn-variant="cmplinktst2"
                  class="ratingNumber"
                  href="/cmp/Pimco/reviews"
                  title="Pacific Investment Management Company reviews"
                  onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=cmplinktst2&amp;from=SERP&amp;jt=Software+Engineer%2C+Portfolio+Technology&amp;fromjk=713c8e29ef478bb9&amp;jcid=58c5ffd9046f105b');"
                  target="_blank"
                  rel="noopener"
                  aria-label="Company rating 3.7 out of 5 stars"
          >
            <span class="ratingsContent">
              3.7<svg width="12px" height="12px" role="img" class="starIcon">
                <g>
                  <path
                          style="fill: #ffb103"
                          d="M 12.00,4.34 C 12.00,4.34 7.69,3.97 7.69,3.97 7.69,3.97 6.00,0.00 6.00,0.00 6.00,0.00 4.31,3.98 4.31,3.98 4.31,3.98 0.00,4.34 0.00,4.34 0.00,4.34 3.28,7.18 3.28,7.18 3.28,7.18 2.29,11.40 2.29,11.40 2.29,11.40 6.00,9.16 6.00,9.16 6.00,9.16 9.71,11.40 9.71,11.40 9.71,11.40 8.73,7.18 8.73,7.18 8.73,7.18 12.00,4.34 12.00,4.34 Z"
                  ></path>
                </g>
              </svg>
            </span>
          </a>
        </span>
            </div>
            <div
                    id="recJobLoc_713c8e29ef478bb9"
                    class="recJobLoc"
                    data-rc-loc="New York, NY"
                    style="display: none"
            ></div>
            <span class="location accessible-contrast-color-location"
            >New York, NY</span
            >
        </div>

        <div class="summary">
            <ul
                    style="
          list-style-type: circle;
          margin-top: 0px;
          margin-bottom: 0px;
          padding-left: 20px;
        "
            >
                <li style="margin-bottom: 0px">
                    Forward development of <b>new</b> system components and enhancements
                    to the existing codebase.
                </li>
                <li>
                    In order to define, rollout, and support <b>new</b> platform features.
                </li>
            </ul>
        </div>

        <div class="jobsearch-SerpJobCard-footer">
            <div class="jobsearch-SerpJobCard-footerActions">
                <div class="result-link-bar-container">
                    <div class="result-link-bar">
                        <span class="date date-a11y">2 days ago</span>
                        <div id="tt_set_14" class="tt_set">
                            <div class="job-reaction">
                                <button
                                        class="job-reaction-kebab"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-ol-has-click-handler=""
                                        tabindex="0"
                                        aria-label="save or dislike"
                                        onclick="toggleKebabMenu('713c8e29ef478bb9', false, event); return false;"
                                ></button>
                                <span class="job-reaction-kebab-menu"
                                ><button
                                        class="job-reaction-kebab-item job-reaction-save"
                                        onclick="changeJobState('713c8e29ef478bb9', 'save', 'linkbar', false, '');return false;"
                                        data-ol-has-click-handler=""
                                >
                    <svg
                            focusable="false"
                            viewBox="0 0 24 24"
                            height="16"
                            width="16"
                    >
                      <g>
                        <path
                                fill="#2d2d2d"
                                d="M16.5,3A6,6,0,0,0,12,5.09,6,6,0,0,0,7.5,3,5.45,5.45,0,0,0,2,8.5C2,12.28,5.4,15.36,10.55,20L12,21.35,13.45,20C18.6,15.36,22,12.28,22,8.5A5.45,5.45,0,0,0,16.5,3ZM12.1,18.55l-0.1.1-0.1-.1C7.14,14.24,4,11.39,4,8.5A3.42,3.42,0,0,1,7.5,5a3.91,3.91,0,0,1,3.57,2.36h1.87A3.88,3.88,0,0,1,16.5,5,3.42,3.42,0,0,1,20,8.5C20,11.39,16.86,14.24,12.1,18.55Z"
                        ></path>
                      </g></svg
                    ><span class="job-reaction-kebab-item-text"
                                >Save job</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-dislike"
                                        onclick="dislikeJob(false, false, '713c8e29ef478bb9', 'unsave', 'linkbar', false, '');"
                                        data-ol-has-click-handler=""
                                >
                    <span class="job-reaction-dislike-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Not interested</span
                                ></button
                                ><button
                                        class="job-reaction-kebab-item job-reaction-report"
                                        onclick="reportJob('713c8e29ef478bb9');"
                                >
                    <span class="job-reaction-report-icon"></span
                    ><span class="job-reaction-kebab-item-text"
                                >Report Job</span
                                >
                  </button></span
                                >
                            </div>
                            <span class="result-link-bar-separator">·</span
                            ><a
                                id="sj_713c8e29ef478bb9"
                                href="#"
                                class="sl resultLink save-job-link"
                                onclick="changeJobState('713c8e29ef478bb9', 'save', 'linkbar', false, ''); return false;"
                                title="Save this job to my.indeed"
                        >Save job</a
                        ><span class="result-link-bar-separator">·</span>
                            <button
                                    id="tog_14"
                                    class="sl resultLink more-link"
                                    onclick="toggleMoreLinks('713c8e29ef478bb9', '14'); return false;"
                                    aria-expanded="false"
                            >
                                More...
                            </button>
                        </div>
                        <script>
                            if (!window["result_713c8e29ef478bb9"]) {
                                window["result_713c8e29ef478bb9"] = {};
                            }
                            window["result_713c8e29ef478bb9"]["showSource"] = false;
                            window["result_713c8e29ef478bb9"]["source"] =
                                    "Pacific Investment Management Company LLC";
                            window["result_713c8e29ef478bb9"]["loggedIn"] = false;
                            window["result_713c8e29ef478bb9"]["showMyJobsLinks"] = false;
                            window["result_713c8e29ef478bb9"]["baseMyJobsUrl"] =
                                    "https://myjobs.indeed.com";
                            window["result_713c8e29ef478bb9"]["undoAction"] = "unsave";
                            window["result_713c8e29ef478bb9"]["relativeJobAge"] =
                                    "2 days ago";
                            window["result_713c8e29ef478bb9"]["jobKey"] = "713c8e29ef478bb9";
                            window["result_713c8e29ef478bb9"]["myIndeedAvailable"] = true;
                            window["result_713c8e29ef478bb9"]["showMoreActionsLink"] =
                                    window["result_713c8e29ef478bb9"]["showMoreActionsLink"] ||
                                    true;
                            window["result_713c8e29ef478bb9"]["resultNumber"] = 14;
                            window["result_713c8e29ef478bb9"][
                                    "jobStateChangedToSaved"
                                    ] = false;
                            window["result_713c8e29ef478bb9"]["searchState"] =
                                    "q=new york&amp;l=NewYork%2CNY";
                            window["result_713c8e29ef478bb9"]["basicPermaLink"] =
                                    "https://www.indeed.com";
                            window["result_713c8e29ef478bb9"]["saveJobFailed"] = false;
                            window["result_713c8e29ef478bb9"]["removeJobFailed"] = false;
                            window["result_713c8e29ef478bb9"]["requestPending"] = false;
                            window["result_713c8e29ef478bb9"]["currentPage"] = "serp";
                            window["result_713c8e29ef478bb9"]["sponsored"] = false;
                            window["result_713c8e29ef478bb9"][
                                    "reportJobButtonEnabled"
                                    ] = false;
                            window["result_713c8e29ef478bb9"]["showMyJobsHired"] = false;
                            window["result_713c8e29ef478bb9"]["showSaveForSponsored"] = false;
                            window["result_713c8e29ef478bb9"]["showJobAge"] = true;
                            window["result_713c8e29ef478bb9"]["showHolisticCard"] = true;
                            window["result_713c8e29ef478bb9"]["showDislike"] = true;
                            window["result_713c8e29ef478bb9"]["showKebab"] = true;
                            window["result_713c8e29ef478bb9"]["showReport"] = true;
                        </script>
                    </div>
                </div>
            </div>
        </div>

        <div class="tab-container">
            <div
                    id="tt_display_12"
                    class="more-links-container result-tab"
                    style="display: none"
            >
                <div id="more_12" class="more_actions">
                    <ul>
                        <li>
              <span class="mat"
              >View all
                <a
                        href="/jobs?q=Pacific+Investment+Management+Company+LLC&amp;l=New+York,+NY&amp;nc=jasx"
                >Pacific Investment Management Company LLC jobs in New York,
                  NY</a
                >
                - <a href="/l-New-York,-NY-jobs.html">New York jobs</a></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Salary Search:
                <a
                        href="/salaries/software-developer-Salaries,-New-York-NY"
                        onmousedown="this.href = appendParamsOnce(this.href, '?campaignid=serp-more&amp;fromjk=713c8e29ef478bb9&amp;from=serp-more');"
                >Software Developer salaries in New York, NY</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >Learn more about working at
                <a
                        href="/cmp/Pimco/about"
                        onmousedown="this.href = appendParamsOnce(this.href, '?fromjk=713c8e29ef478bb9&amp;from=serp-more&amp;campaignid=serp-more&amp;jcid=58c5ffd9046f105b');"
                >Pacific Investment Management Company LLC</a
                ></span
              >
                        </li>
                        <li>
              <span class="mat"
              >See popular
                <a
                        href="/cmp/Pimco/faq"
                        onmousedown="this.href = appendParamsOnce(this.href, '?from=serp-more&amp;campaignid=serp-more&amp;fromjk=713c8e29ef478bb9&amp;jcid=58c5ffd9046f105b');"
                >questions &amp; answers about Pacific Investment Management
                  Company LLC</a
                ></span
              >
                        </li>
                    </ul>
                </div>
                <a
                        class="close-link closeLink"
                        title="Close"
                        href="#"
                        onclick="toggleMoreLinks('713c8e29ef478bb9'); return false;"
                ></a>
            </div>
            <div class="dya-container result-tab"></div>
            <div class="tellafriend-container result-tab email_job_content"></div>
            <div class="sign-in-container result-tab"></div>
        </div>
    </div>

    <div id="jobToJobRec_713c8e29ef478bb9_sj" class="jobToJobRec_Hide"></div>

    <script type="text/javascript">
        function ptk(st, p) {
            document.cookie =
                    'PTK="tk=1f2v8c5vlt5ne801&type=jobsearch&subtype=' +
                    st +
                    (p ? "&" + p : "") +
                    (st == "pagination" ? "&fp=1" : "") +
                    '"; path=/';
        }
    </script>
    <script type="text/javascript">
        function pclk(event) {
            var evt = event || window.event;
            var target = evt.target || evt.srcElement;
            var el = target.nodeType == 1 ? target : target.parentNode;
            var tag = el.tagName.toLowerCase();
            if (tag == "span" || tag == "a") {
                ptk("pagination");
            }
            return true;
        }

        function addPPUrlParam(obj) {
            var pp = obj.getAttribute("data-pp");
            var href = obj.getAttribute("href");
            if (pp && href) {
                obj.setAttribute("href", href + "&pp=" + pp);
            }
        }
    </script>
    <nav role="navigation" aria-label="pagination">
        <div class="pagination" onmousedown="pclk(event);">
            <ul class="pagination-list">
                <li><b aria-current="true" aria-label="1" tabindex="0">1</b></li>
                <li>
                    <a
                            href="/jobs?q=new+york&amp;l=NewYork%2CNY&amp;start=10"
                            aria-label="2"
                            data-pp="gQAPAAAAAAAAAAAAAAABoPXs1AA4AQEBBwCyttbWzkmdiY8fQkRg9svqyeu7_otOww9LA5XpazzabayO58cZ5FCLM3e-XkEG2OxmunMAAA"
                            onmousedown="addPPUrlParam &amp;&amp; addPPUrlParam(this);"
                            rel="nofollow"
                    ><span class="pn">2</span></a
                    >
                </li>
                <li>
                    <a
                            href="/jobs?q=new+york&amp;l=NewYork%2CNY&amp;start=20"
                            aria-label="3"
                            data-pp="gQAeAAAAAAAAAAAAAAABoPXs1ABeAQEBCALYPYLuYmPtdgrRG4rVuRWWBw3qtZjf6tCc3WAfWr9_XIzZyVs3nqvmug1kdcOtf9gq2DE2uR3OErMAvWhcJlbD_QyLxKvTOYuqxfOQebHtib1mzghBByxhMAAA"
                            onmousedown="addPPUrlParam &amp;&amp; addPPUrlParam(this);"
                            rel="nofollow"
                    ><span class="pn">3</span></a
                    >
                </li>
                <li>
                    <a
                            href="/jobs?q=new+york&amp;l=NewYork%2CNY&amp;start=30"
                            aria-label="4"
                            data-pp="gQAtAAAAAAAAAAAAAAABoPXs1ACGAQEBDQLqh1tRy_rLTUlqpqD6zr0dzZ2vh77mtYfyNRD70THwq_t91wZLALlvMQvaP4hDOiddci6Q9yob_QcnA0GeO_0W8aEst6w855LynUwbyNVho8VurvNxWzHShP4kJuZt4LADSmjTxD7BRz9J9kWFV18GknOQGuo19yfa7Ove2YblMWMAAA"
                            onmousedown="addPPUrlParam &amp;&amp; addPPUrlParam(this);"
                            rel="nofollow"
                    ><span class="pn">4</span></a
                    >
                </li>
                <li>
                    <a
                            href="/jobs?q=new+york&amp;l=NewYork%2CNY&amp;start=40"
                            aria-label="5"
                            data-pp="gQA8AAAAAAAAAAAAAAABoPXs1ACqAQIBDyALA5FsuIPZ1HnyFHaBfjBMAF3X-WBkkn-n1aO7o8UGpOJ7AxigEOsC0yqPYe0cNd3Kk4pbMCmVVcMrsD9t2Fq3hwMr-sPxTP0iwlljX10SmTRPbF2_ZCio6GQhY_WC6qcV2pk83elvNtktRZhdCe88kmbyf5Qf1bHeO0RZuv7JqPsUv4GrBf4JqSl40VYnqMxeu1TLrRfCRPgzYwEgBydqdeXgqQwAAA"
                            onmousedown="addPPUrlParam &amp;&amp; addPPUrlParam(this);"
                            rel="nofollow"
                    ><span class="pn">5</span></a
                    >
                </li>
                <li>
                    <a
                            href="/jobs?q=new+york&amp;l=NewYork%2CNY&amp;start=10"
                            aria-label="Next"
                            data-pp="gQAPAAAAAAAAAAAAAAABoPXs1AA4AQEBBwCyttbWzkmdiY8fQkRg9svqyeu7_otOww9LA5XpazzabayO58cZ5FCLM3e-XkEG2OxmunMAAA"
                            onmousedown="addPPUrlParam &amp;&amp; addPPUrlParam(this);"
                            rel="nofollow"
                    ><span class="pn"
                    ><span class="np"
                    ><svg width="24" height="24" fill="none">
                  <path
                          d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
                          fill="#2D2D2D"
                  ></path></svg></span></span
                    ></a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="mosaic-zone" id="mosaic-zone-belowJobResultsPagination"></div>
    <script type="text/javascript">
        try {
            window.mosaic.onMosaicApiReady(function () {
                var zoneId = "belowJobResultsPagination";
                var providers = window.mosaic.zonedProviders[zoneId];

                if (providers) {
                    providers
                            .filter(function (p) {
                                return window.mosaic.lazyFns[p];
                            })
                            .forEach(function (p) {
                                return window.mosaic.api.loadProvider(p);
                            });
                }
            });
        } catch (e) {
        }
    </script>
    <div class="related_searches">
        <div class="related_searches_list">
            <b class="related_queries_title">People also searched: </b>
            <ul class="relatedQueries-listView-pageFirst">
                <li class="relatedQueries-listItem-pageFirst rightBorder">
                    <a
                            href="/q-Remote-l-New-York,-NY-jobs.html"
                            onmousedown="this.href = appendParamsOnce(this.href, '?from=relatedQueries&amp;saIdx=1&amp;rqf=1&amp;parentQnorm=new+york');"
                    >remote</a
                    >
                </li>
                <li class="relatedQueries-listItem-pageFirst rightBorder">
                    <a
                            href="/q-Work-From-Home-l-New-York,-NY-jobs.html"
                            onmousedown="this.href = appendParamsOnce(this.href, '?from=relatedQueries&amp;saIdx=2&amp;rqf=1&amp;parentQnorm=new+york');"
                    >work from home</a
                    >
                </li>
                <li class="relatedQueries-listItem-pageFirst rightBorder">
                    <a
                            href="/q-Full-Time-l-New-York,-NY-jobs.html"
                            onmousedown="this.href = appendParamsOnce(this.href, '?from=relatedQueries&amp;saIdx=3&amp;rqf=1&amp;parentQnorm=new+york');"
                    >full time</a
                    >
                </li>
                <li class="relatedQueries-listItem-pageFirst rightBorder">
                    <a
                            href="/q-Hiring-Immediately-l-New-York,-NY-jobs.html"
                            onmousedown="this.href = appendParamsOnce(this.href, '?from=relatedQueries&amp;saIdx=4&amp;rqf=1&amp;parentQnorm=new+york');"
                    >hiring immediately</a
                    >
                </li>
                <li class="relatedQueries-listItem-pageFirst rightBorder">
                    <a
                            href="/q-Amazon-l-New-York,-NY-jobs.html"
                            onmousedown="this.href = appendParamsOnce(this.href, '?from=relatedQueries&amp;saIdx=5&amp;rqf=1&amp;parentQnorm=new+york');"
                    >amazon</a
                    >
                </li>
                <li class="relatedQueries-listItem-pageFirst rightBorder">
                    <a
                            href="/q-Customer-Service-l-New-York,-NY-jobs.html"
                            onmousedown="this.href = appendParamsOnce(this.href, '?from=relatedQueries&amp;saIdx=6&amp;rqf=1&amp;parentQnorm=new+york');"
                    >customer service</a
                    >
                </li>
                <li class="relatedQueries-listItem-pageFirst rightBorder">
                    <a
                            href="/q-Data-Entry-l-New-York,-NY-jobs.html"
                            onmousedown="this.href = appendParamsOnce(this.href, '?from=relatedQueries&amp;saIdx=7&amp;rqf=1&amp;parentQnorm=new+york');"
                    >data entry</a
                    >
                </li>
                <li class="relatedQueries-listItem-pageFirst rightBorder">
                    <a
                            href="/q-Entry-Level-l-New-York,-NY-jobs.html"
                            onmousedown="this.href = appendParamsOnce(this.href, '?from=relatedQueries&amp;saIdx=8&amp;rqf=1&amp;parentQnorm=new+york');"
                    >entry level</a
                    >
                </li>
                <li class="relatedQueries-listItem-pageFirst rightBorder">
                    <a
                            href="/q-Marketing-l-New-York,-NY-jobs.html"
                            onmousedown="this.href = appendParamsOnce(this.href, '?from=relatedQueries&amp;saIdx=9&amp;rqf=1&amp;parentQnorm=new+york');"
                    >marketing</a
                    >
                </li>
                <li class="relatedQueries-listItem-pageFirst">
                    <a
                            href="/q-Remote-Work-From-Home-l-New-York,-NY-jobs.html"
                            onmousedown="this.href = appendParamsOnce(this.href, '?from=relatedQueries&amp;saIdx=10&amp;rqf=1&amp;parentQnorm=new+york');"
                    >remote work from home</a
                    >
                </li>
            </ul>
        </div>
        <style type="text/css">
            .relatedQueries-listView-pageFirst {
                list-style-type: none;
                margin: 0;
                padding: 0;
            }

            .relatedQueries-listItem-pageFirst {
                display: inline-block;
            }

            .rightBorder {
                border-right: 1px solid #77c;
                margin-right: 5px;
                padding-right: 5px;
            }

            .related_searches_list > * {
                display: inline;
            }
        </style>
        <div class="related_searches_list">
            <b class="related_searches_title">Resume Resources</b>
            <a
                    href="https://www.indeed.com/career-advice/resume-samples?from=jobsearch_footer"
            >Resume Samples</a
            >
            -
            <a
                    href="https://www.indeed.com/profile/resume-templates?from=jobsearch_footer"
            >Resume Templates</a
            >
        </div>
        <div class="related_searches_list">
            <b class="related_searches_title">Career Resources: </b>
            <a href="/career?from=jobsearch_footer">Career Explorer</a> -
            <a href="/career/salary-calculator?from=jobsearch_footer"
            >Salary Calculator
            </a>
        </div>
        <div class="related_searches_list">
            <b class="related_searches_title">Employer Resources: </b>
            <a href="/hire/how-to-write-a-job-description?from=jobsearch_footer"
            >How to Write a Job Description</a
            >
            -
            <a href="/hire/how-to-hire?from=jobsearch_footer"
            >How to Hire Employees</a
            >
        </div>
    </div>
</td>`
