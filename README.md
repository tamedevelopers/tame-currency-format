# tame-currency-format
### @author Fredrick Peterson (Tame Developers)
### 2023 Fredrick Peterson
### Intl.NumberFormat

Javascript/JQuery Plugin for Number/Currency Formatting
```
|--------------------------------------------------------------------------
|This Library uses the Javascript Intl.NumberFormat
|https://github.com/bachors/PHP-Image-Compressor-Class
```
[Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)

* [Installation](#installation)
* [Object Properties](#object-properties)
* [Usage](#usage)
  * [JQuery](#Jquery)
  * [JQuery Bind To Element](#Jquery-bind-to-element)
  * [JQuery Global Currency](#Jquery-global-currency)
  * [Javascript](#javascript)
  * [Javascript Bind To Element](#javascript-bind-to-element)
  * [Javascript Global Currency](#javascript-global-currency)
* [Currency Codes](#currency-codes)
* [Useful links](#useful-links)


## Installation
Not avaialable on npm yet.

**include any of the files** `You can clone or download the repo`:

```
<script src="../JQuery/tameCurrencyFormat.min.js"></script>
<script src="../js/tameCurrencyFormat.min.js"></script>
```


## Object Properties
``` 
`ALL objected properties and values`
```

| Key               | Default   | Accepts-Data                  |  Description                                      |
|-------------------|-----------|-------------------------------|---------------------------------------------------|
| currency          | HKD       | string                        | Currency Code (refer to `currency code` section)  |
| currency_symbol   | empty     | string \| true \| false       | You can provide your preffered currency symbol    |
| display           | true      | true \| false                 | Display currency symbol                           |
| space             | true      | true \| false                 | Alow space between currency and formatted number  |
| position          | false     | false \| 'left' \ | 'right'   | Currency symbol possition                         |
| number            | 0         | int \| string                 | Numbers to format                                 |
| decimals          | 2         | 0-4                           | Decimal points formating (from 1 to 4 decimals)   |


## JQuery

**Example 1** — `JQuery`:
```
    $.tameCurrency.format({
        currency: 'TRY',
        number: 8.99,
    });
```

**Example 2** — `JQuery`:
```
    $.tameCurrency.format({
        currency: 'TRY',
        currency_symbol: 'TL',
        number: 8.99,
        position: 'right',
    });
```

## JQuery Bind To Element
```
Can only be used on any DOM elements that text can be changed.
You can not use direct on 'INPUTS' elements
```

**Example 1** — `JQuery Bind To Element`:
```
    $('.element').tameCurrency.format({
        currency: 'TRY',
        number: 8.99,
    });
```

## JQuery Global Currency

```
Need to be called above before using the `format()` function.
When used, it replace every other call except you override with `currency_symbol` object
```

**Example 1** — `JQuery Global Currency`:
```
    $.tameCurrency.init('$USD');
```

```
    var test1 = $.tameCurrency.format({
        currency: 'TRY',
        number: 8.99,
    });

    console.log(test1); // $USD 8,99

    var test2 = $.tameCurrency.format({
        currency: 'EUR',
        currency_symbol: true,
        number: 10.99,
    });

    console.log(test2); // 10,99 €
```



## Javascript

**Example 1** — `Javascript`:
```
    tameCurrency.format({
        currency: 'TRY',
        number: 8.99,
    });
```

**Example 2** — `Javascript`:
```
    tameCurrency.format({
        currency: 'TRY',
        currency_symbol: 'TL',
        number: 8.99,
        position: 'right',
    });
```

## Javascript Bind To Element
```
Can only be used on any DOM elements that text can be changed.
You can not use direct on 'INPUTS' elements
```

**Example 1** — `Javascript Bind To Element`:
```
    var element = document.querySelector('.element');

    tameCurrency.input(element, {
        currency: 'TRY',
        number: 8.99,
    });
```

## Javascript Global Currency

```
Need to be called above before using the `format()` function.
When used, it replace every other call except you override with `currency_symbol` object
```

**Example 1** — `Javascript Global Currency`:
```
    tameCurrency.init('$USD');
```

```
    var test1 = tameCurrency.format({
        currency: 'TRY',
        number: 8.99,
    });

    console.log(test1); // $USD 8,99

    var test2 = tameCurrency.format({
        currency: 'EUR',
        currency_symbol: true,
        number: 10.99,
    });

    console.log(test2); // 10,99 €
```

## Currency Codes
```
    {
        AED: "ar-AE"
        AFN: "ps"
        ALL: "sq"
        AMD: "hy"
        ANG: "nl"
        AOA: "pt"
        ARS: "es-AR"
        AUD: "en-AU"
        AWG: "nl-AW"
        AZN: "az-Latn"
        BAM: "bs-Latn"
        BBD: "en-BB"
        BDT: "bn"
        BGN: "bg"
        BHD: "ar-BH"
        BIF: "fr-BI"
        BMD: "en-BM"
        BND: "ms"
        BOB: "es-BO"
        BRL: "pt-BR"
        BSD: "en-BS"
        BTN: "dz"
        BWP: "en-BW"
        BYN: "be"
        BZD: "en-BZ"
        CAD: "en-CA"
        CDF: "fr-CD"
        CHF: "fr-CH"
        CLP: "es-CL"
        CNY: "zh-CN"
        COP: "es-CO"
        CRC: "es-CR"
        CUC: "es"
        CVE: "pt"
        CZK: "cs"
        DJF: "fr-DJ"
        DKK: "da"
        DOP: "es-DO"
        DZD: "ar-DZ"
        EGP: "ar-EG"
        ERN: "ti-ET"
        ETB: "am"
        EUR: "de-DE"
        FJD: "en-FJ"
        GBP: "en-GB"
        GEL: "ka"
        GHS: "ak"
        GIP: "en-GI"
        GMD: "en"
        GNF: "fr-GN"
        GTQ: "es-GT"
        GYD: "en-GY"
        HKD: "zh-Hant-HK"
        HNL: "es-HN"
        HRK: "hr"
        HTG: "fr-HT"
        HUF: "hu"
        IDR: "id"
        ILS: "he"
        INR: "hi"
        IQD: "ar-IQ"
        IRR: "fa-IR"
        ISK: "is"
        JMD: "en-JM"
        JOD: "ar-JO"
        JPY: "ja-JP"
        KES: "sw-KE"
        KGS: "ky"
        KHR: "km"
        KMF: "ar"
        KPW: "ko-KP"
        KRW: "ko-KR"
        KWD: "ar-KW"
        KYD: "en-KY"
        KZT: "kk"
        LAK: "lo"
        LBP: "ar-LB"
        LKR: "si"
        LRD: "en-LR"
        LSL: "st"
        LYD: "ar-LY"
        MAD: "ar-MA"
        MDL: "ro"
        MGA: "mg"
        MKD: "mk"
        MMK: "my"
        MNT: "mn-Cyrl"
        MOP: "zh-Hant"
        MRU: "ar-MR"
        MUR: "fr-MU"
        MVR: "dv"
        MWK: "ny"
        MXN: "es-MX"
        MYR: "ms-MY"
        MZN: "pt-MZ"
        NAD: "en-NA"
        NGN: "ig"
        NIO: "es-NI"
        NOK: "nb"
        NPR: "ne"
        NZD: "en-NZ"
        OMR: "ar-OM"
        PAB: "es-PA"
        PEN: "es-PE"
        PGK: "tpi"
        PHP: "fil"
        PKR: "ur"
        PLN: "pl"
        PYG: "gn"
        QAR: "ar-QA"
        RON: "ro"
        RSD: "sr-Latn"
        RUB: "ru"
        RWF: "rw"
        SAR: "ar-SA"
        SBD: "en-SB"
        SCR: "fr-SC"
        SDG: "ar-SD"
        SEK: "sv-SE"
        SGD: "zh-Hans-SG"
        SHP: "en-SH"
        SLL: "kri"
        SOS: "sw"
        SRD: "nl-SR"
        SSP: "ar-SS"
        STN: "pt-ST"
        SYP: "ar-SY"
        SZL: "en-SZ"
        THB: "th"
        TJS: "tg"
        TMT: "tk"
        TND: "ar-TN"
        TOP: "to"
        TRY: "tr-TR"
        TTD: "en-TT"
        TWD: "zh-Hant-TW"
        TZS: "sw-TZ"
        UAH: "uk"
        UGX: "sw-UG"
        USD: "en-US"
        UYU: "es-UY"
        UZS: "uz-Latn"
        VEF: "es-VE"
        VND: "vi"
        VUV: "bi"
        WST: "sm"
        XAF: "fr"
        XCD: "en"
        XOF: "fr"
        YER: "ar-YE"
        ZAR: "zu"
        ZMW: "en-ZM"
    }
```


## Useful links

- If you love this Javascript/JQuery Plugin, you can [Buy Tame Developers a coffee](https://www.buymeacoffee.com/tamedevelopers)
- More examples in the test folder

