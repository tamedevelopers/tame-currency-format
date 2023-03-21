/*!
 * Tame Currency Format v1.0.0
 * https://tamedevelopers.com
 * https://tametemplates.com
 * Copyright 2023 Fredrick Peterson
 * Released under the MIT license
 */

const tameCurrency = (function () {
    'use strict';

    const __tameCurrencyFormat = (options) => {
        const countryCurrency = __tameGetCountryCurrencies();

        // check if currency symbol is passed
        const __tameCheckCurrencySymbol = (string) => {
            if ((typeof string === 'string' && string.trim().length > 0) || string === true) {
                return true;
            }
            return false;
        };

        // get format type
        const __tameGetStyleFormat = (style) => {
            if (style.trim().toLowerCase() === 'currency') {
                return style;
            }else if(style.trim().toLowerCase() === 'decimal'){
                return style;
            }
            return 'currency';
        };

        // configure global default currency symbol
        const __tameGetCurrencySymbol = (options) => {
            if (window.hasOwnProperty('tameCurrencySymbol__')) {
                // only override - if custom currency symbol is not set\for each call
                if (!__tameCheckCurrencySymbol(settings.currency_symbol)) {
                    return window.tameCurrencySymbol__;
                }
            }
            return options.currency_symbol;
        };

        // extend to settings var
        const settings = Object.assign({
            style: 'currency',
            currency: '',
            currency_symbol: '',
            display: true,
            space: true,
            position: false,
            number: 0,
            decimals: 2,
        }, options);

        // currency currency_symbol
        settings.currency_symbol = __tameGetCurrencySymbol(settings);

        // format style
        settings.style = __tameGetStyleFormat(settings.style);

        // convert currency to uppercase
        settings.currency = settings.currency.toUpperCase();

        // Check if currency exist in the object
        if (!countryCurrency.hasOwnProperty(settings.currency)) {
            settings.currency = 'HKD';
        }

        // get currency value from - countryCurrency (object)
        settings.language = countryCurrency[settings.currency] || 'en-US';

        // if symbol display of currency is not true
        if (!settings.display) {
            settings.style = 'decimal';

            // if currency display not true, then we clean in case it was passed
            settings.currency_symbol = '';
        }else{
            if(settings.style == 'decimal'){
                settings.currency_symbol = '';
                settings.display = false;
            }
        }

        const intNumber = new Intl.NumberFormat(settings.language, {
            style: settings.style,
            currency: settings.currency,
            minimumFractionDigits: settings.decimals > 4 ? 4 : settings.decimals,
            maximumFractionDigits: 4,
            useGrouping: true
        });

        // get amount
        let formattedNumber = intNumber.format(settings.number);

        // get an array of formatted parts of the number
        let matches = intNumber.formatToParts(settings.number);

        // only try if currency display is allowed
        if (settings.display) {
            // Extract currency symbol
            matches = intNumber.formatToParts(settings.number).find(function(part) {
                return part.type === "currency";
            }).value;

            // if custom currency symbol is not set\ Collect symbol from matches array
            if (!__tameCheckCurrencySymbol(settings.currency_symbol) || settings.currency_symbol === true) {
                settings.currency_symbol = matches;
            }
        }

        // trim string
        formattedNumber = formattedNumber.replace(/\s/g, '');

        // if display is true
        if (settings.display) {

            // if space is allowed
            if (settings.space) {
                if(settings.position === false){
                    if (formattedNumber.startsWith(matches)) {
                        formattedNumber = formattedNumber.replace(matches, settings.currency_symbol + " ");
                    } else{
                        formattedNumber = formattedNumber.replace(matches, " " + settings.currency_symbol);
                    }
                }else{
                    // replace currency symbol found  with (empty string)
                    formattedNumber = formattedNumber.split(matches).join('');
                    if(settings.position == 'left'){
                        formattedNumber = settings.currency_symbol + ' ' + formattedNumber;
                    }else{
                        formattedNumber = formattedNumber + ' ' + settings.currency_symbol;
                    }
                }
            } else{
                if(settings.position === false){
                    formattedNumber = formattedNumber.replace(matches, settings.currency_symbol);
                }else{
                    // replace currency symbol found  with (empty string)
                    formattedNumber = formattedNumber.split(matches).join('');
                    if(settings.position == 'left'){
                        formattedNumber = settings.currency_symbol + formattedNumber;
                    }else{
                        formattedNumber = formattedNumber + settings.currency_symbol;
                    }
                }
            }
        }

        return formattedNumber;
    };

    const __tameCurrencyFormatInit = function(currency = 'HK$') {
        window.tameCurrencySymbol__ = currency;
    };

    // create countries currency `code` and `local-code`
    const __tameGetCountryCurrencies = function() {
        return {"USD":"en-US","EUR":"de-DE","JPY":"ja-JP","GBP":"en-GB","AUD":"en-AU","CAD":"en-CA","CNY":"zh-CN","TRY":"tr-TR","AFN":"ps","ALL":"sq","DZD":"ar-DZ","AOA":"pt","ARS":"es-AR","AMD":"hy","AWG":"nl-AW","AZN":"az-Latn","BSD":"en-BS","BHD":"ar-BH","BDT":"bn","BBD":"en-BB","BYN":"be","BZD":"en-BZ","XOF":"fr","BMD":"en-BM","BTN":"dz","BOB":"es-BO","BAM":"bs-Latn","BWP":"en-BW","BRL":"pt-BR","BND":"ms","BGN":"bg","BIF":"fr-BI","KHR":"km","XAF":"fr","CVE":"pt","KYD":"en-KY","CLP":"es-CL","COP":"es-CO","KMF":"ar","CDF":"fr-CD","NZD":"en-NZ","CRC":"es-CR","HRK":"hr","CUC":"es","ANG":"nl","CZK":"cs","DKK":"da","DJF":"fr-DJ","DOP":"es-DO","XCD":"en","EGP":"ar-EG","ERN":"ti-ET","ETB":"am","FJD":"en-FJ","GMD":"en","GEL":"ka","GHS":"ak","GIP":"en-GI","GTQ":"es-GT","GNF":"fr-GN","GYD":"en-GY","HTG":"fr-HT","HNL":"es-HN","HKD":"zh-Hant-HK","HUF":"hu","ISK":"is","INR":"hi","IDR":"id","IRR":"fa-IR","IQD":"ar-IQ","ILS":"he","JMD":"en-JM","JOD":"ar-JO","KZT":"kk","KES":"sw-KE","KPW":"ko-KP","KRW":"ko-KR","KWD":"ar-KW","KGS":"ky","LAK":"lo","LBP":"ar-LB","LSL":"st","LRD":"en-LR","LYD":"ar-LY","MOP":"zh-Hant","MKD":"mk","MGA":"mg","MWK":"ny","MYR":"ms-MY","MVR":"dv","MRU":"ar-MR","MUR":"fr-MU","MXN":"es-MX","MDL":"ro","MNT":"mn-Cyrl","MAD":"ar-MA","MZN":"pt-MZ","MMK":"my","NAD":"en-NA","NPR":"ne","NIO":"es-NI","NGN":"ig","NOK":"nb","OMR":"ar-OM","PKR":"ur","PAB":"es-PA","PGK":"tpi","PYG":"gn","PEN":"es-PE","PHP":"fil","PLN":"pl","QAR":"ar-QA","RON":"ro","RUB":"ru","RWF":"rw","SHP":"en-SH","WST":"sm","STN":"pt-ST","SAR":"ar-SA","RSD":"sr-Latn","SCR":"fr-SC","SLL":"kri","SGD":"zh-Hans-SG","SBD":"en-SB","SOS":"sw", "ZAR":"zu", "SSP":"ar-SS", "LKR":"si", "SDG":"ar-SD", "SRD":"nl-SR", "SZL":"en-SZ", "SEK":"sv-SE", "CHF":"fr-CH", "SYP":"ar-SY", "TWD":"zh-Hant-TW", "TJS":"tg", "TZS":"sw-TZ", "THB":"th", "TOP":"to", "TTD":"en-TT", "TND":"ar-TN", "TMT":"tk", "UGX":"sw-UG", "UAH":"uk", "AED":"ar-AE", "UYU":"es-UY", "UZS":"uz-Latn", "VUV":"bi", "VEF":"es-VE", "VND":"vi", "YER":"ar-YE", "ZMW":"en-ZM", "BWP":"en-BW", "CDF":"fr-CD" };
    };
    
    // bind to single element and change it's text
    const __tameCurrencyInput = function(element, options = {}) {
        element.innerText = __tameCurrencyFormat(options);
        return;
    }
  
    return {
        init: __tameCurrencyFormatInit,
        format: __tameCurrencyFormat,
        input: __tameCurrencyInput,
    };
})();

