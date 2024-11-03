/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * you could obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) 2014-2024, Martin Berner, stockmanager@gmx.de. All rights reserved.
 */
export const useConstants = (): IUseConstants => {
  return Object.freeze({
    CURRENCIES: {
      EUR: 'EUR',
      USD: 'USD',
      CODE: new Map([
        ['ar', 'ARS'],
        ['at', 'EUR'],
        ['au', 'AUD'],
        ['be', 'EUR'],
        ['bg', 'BGN'],
        ['bo', 'BOB'],
        ['br', 'BRL'],
        ['bz', 'BZD'],
        ['ca', 'CAD'],
        ['ch', 'CHF'],
        ['cl', 'CLP'],
        ['chs', 'CNY'],
        ['cht', 'CNY'],
        ['co', 'COU'],
        ['cr', 'CRC'],
        ['cs', 'CZK'],
        ['cy', 'EUR'],
        ['da', 'DKK'],
        ['de', 'EUR'],
        ['do', 'DOP'],
        ['ec', 'USD'],
        ['ee', 'EUR'],
        ['el', 'EUR'],
        ['es', 'EUR'],
        ['et', 'EUR'],
        ['fi', 'EUR'],
        ['fr', 'EUR'],
        ['gb', 'GBP'],
        ['gr', 'EUR'],
        ['gt', 'GTQ'],
        ['hk', 'HKD'],
        ['hn', 'HNL'],
        ['hu', 'HUF'],
        ['ie', 'EUR'],
        ['in', 'INR'],
        ['is', 'ISK'],
        ['it', 'EUR'],
        ['ja', 'JPY'],
        ['jm', 'JMD'],
        ['ko', 'KRW'],
        ['li', 'EUR'],
        ['lt', 'EUR'],
        ['lu', 'EUR'],
        ['mc', 'EUR'],
        ['mo', 'MOP'],
        ['mt', 'EUR'],
        ['mx', 'MXN'],
        ['ni', 'NIO'],
        ['nl', 'EUR'],
        ['no', 'NOK'],
        ['nz', 'NZD'],
        ['pa', 'PAB'],
        ['pe', 'PEN'],
        ['ph', 'PHP'],
        ['pl', 'PLN'],
        ['pr', 'USD'],
        ['pt', 'EUR'],
        ['py', 'PYG'],
        ['ro', 'RON'],
        ['ru', 'RUB'],
        ['se', 'SEK'],
        ['sg', 'SGD'],
        ['sk', 'EUR'],
        ['sl', 'EUR'],
        ['sp', 'RSD'],
        ['sv', 'USD'],
        ['tr', 'TRY'],
        ['tt', 'TTD'],
        ['tw', 'TWD'],
        ['uy', 'UYU'],
        ['ve', 'VES'],
        ['za', 'ZAR'],
        ['zw', 'ZWD']
      ])
    },
    DATE: {
      DEFAULT: 0,
      DEFAULTSTR: '1.1.1970',
      FYEAR: 1970,
      MILLIPERDAY: 86400000,
      MILLIPERMIN: 60000
    },
    DB: {
      BKFN: 'stockmanager.json',
      NAME: 'stockmanager.db',
      RECORD_TYPES: {
        // do not change! (part of database records)
        BUY: 1,
        CUR: 8,
        DIV: 3,
        DEPOSIT: 4,
        WITHDRAWAL: 5,
        SELL: 2,
        PER: 7,
        UNDEFINED: -1
        // do not change! (part of database records)
      },
      STORES: {
        // do not change! (part of database records)
        S: 'stocks',
        SC: [
          'cID',
          'cCompany',
          'cISIN',
          'cWKN',
          'cSym',
          'cQuarterDay',
          'cMeetingDay',
          'cFadeOut',
          'cFirstPage',
          'cURL'
        ],
        T: 'transfers',
        TC: [
          'cID',
          'cStockID',
          'cDate',
          'cUnitQuotation',
          'cAmount',
          'cCount',
          'cFees',
          'cTax',
          'cSTax',
          'cFTax',
          'cSoli',
          'cMarketPlace',
          'cType',
          'cExDay',
          'cDescription'
        ]
        // do not change! (part of database records)
      },
      VERSION: 24,
      MINVERSION: 21
    },
    DEFAULTS: {
      CURRENCY: 'EUR',
      LANG: 'de',
      YEAR: 9999,
      STORAGE: {
        service: {name: 'fnet', url: 'https://www.finanzen.net/aktienkurse/'},
        skin: 'ocean',
        indexes: ['dax', 'dow'],
        materials: ['au', 'brent'],
        markets: ['Frankfurt', 'XETRA'],
        exchanges: ['EURUSD'],
        partner: false,
        items_per_page_stocks: 9,
        items_per_page_transfers: 9
      }
    },
    DIALOGS: {
      ADDSTOCK: 'addstock',
      FADEINSTOCK: 'fadeinstock',
      ADDDEPOSIT: 'adddeposit',
      ADDWITHDRAWAL: 'addwithdrawal',
      DAILYCHANGES: 'dailychanges',
      DAILYCHANGESALL: 'dailychangesall',
      EXPORTDB: 'exportdb',
      IMPORTDB: 'importdb',
      SHOWACCOUNTING: 'showaccoutning',
      DELETETRANSFER: 'deletetransfer',
      UPDATETRANSFER: 'updatetransfer',
      DELETESTOCK: 'deletestock',
      BUYSTOCK: 'buystock',
      SELLSTOCK: 'sellstock',
      ADDDIVIDEND: 'adddividend',
      SHOWDIVIDEND: 'showdividend',
      CONFIGSTOCK: 'configstock'
    },
    EVENTS: {
      ABORT: 'abort',
      BEFOREUNLOAD: 'beforeunload',
      CHANGE: 'change',
      CLICK: 'click',
      COMP: 'complete',
      DOM: 'DOMContentLoaded',
      ERR: 'error',
      INP: 'input',
      KEYDOWN: 'keydown',
      LOAD: 'load',
      FOCUS: 'focus',
      BLUR: 'blur',
      SUC: 'success',
      UPG: 'upgradeneeded',
      VERSIONCHANGE: 'versionchange'
    },
    FETCH_API: {
      ASK__DAILY_CHANGES: 'dc',
      ASK__DAILY_CHANGES_ALL: 'dca',
      ASK__DATES_DATA: 'add',
      ASK__INDEX_DATA: 'aid',
      ASK__MATERIAL_DATA: 'amd',
      ASK__MIN_RATE_MAX: 'mrm',
      ASK__COMPANY_DATA: 'cd',
      ASK__EXCHANGES_DATA: 'aed',
      ANSWER__DAILY_CHANGES: '_dc',
      ANSWER__DAILY_CHANGES_ALL: '_dca',
      ANSWER__DATES_DATA: '_add',
      ANSWER__INDEX_DATA: '_aid',
      ANSWER__MATERIAL_DATA: '_amd',
      ANSWER__MIN_RATE_MAX: '_mrm',
      ANSWER__COMPANY_DATA: '_cd',
      ANSWER__EXCHANGES_DATA: '_aed',
      END__DAILY_CHANGES: 'edc',
      END__DAILY_CHANGES_ALL: 'edca',
      FINISH__DAILY_CHANGES: '_fdc',
      FINISH__DAILY_CHANGES_ALL: '_fdca'
    },
    SETTINGS: {
      MP: '__MP__',
      EX: '__EX__',
      INDEXES: {
        dax: 'DAX',
        dow: 'Dow Jones',
        nasdaq: 'NASDAQ Comp.',
        nikkei: 'NIKKEI 225',
        hang: 'Hang Seng',
        ibex: 'IBEX 35',
        straits: 'Straits Times',
        asx: 'Australia All Ordinaries',
        rts: 'RTS',
        bovespa: 'BOVESPA',
        sensex: 'SENSEX',
        sci: 'Shanghai Composite',
        ftse: 'FTSE 100',
        smi: 'SMI',
        cac: 'CAC 40',
        stoxx: 'Euro Stoxx 50',
        tsx: 'S&P/TSX',
        sp: 'S&P 500'
      },
      MATERIALS: new Map([
        ['Goldpreis', 'au'],
        ['Silberpreis', 'ag'],
        ['Ölpreis (Brent)', 'brent'],
        ['Ölpreis (WTI)', 'wti'],
        ['Kupferpreis', 'cu'],
        ['Platinpreis', 'pt'],
        ['Aluminiumpreis', 'al'],
        ['Nickelpreis', 'ni'],
        ['Zinnpreis', 'sn'],
        ['Bleipreis', 'pb'],
        ['Palladiumpreis', 'pd']
      ]),
      ITEMS_PER_PAGE_OPTIONS: [
        {
          value: 5,
          title: '5'
        },
        {
          value: 7,
          title: '7'
        },
        {
          value: 9,
          title: '9'
        },
        {
          value: 11,
          title: '11'
        }
        // {
        //   value: -1,
        //   title: 'Alle'
        // }
      ]
    },
    SEND_API: {
      PUT__SERVICE: 'srv'
    },
    PERMISSIONS: {
      origins: [
        'https://www.tradegate.de/*',
        'https://www.goyax.de/*',
        'https://*.finanzen.net/*',
        'https://www.wallstreet-online.de/*',
        'https://*.aktiencheck.de/*',
        'https://www.tagesschau.de/*',
        'https://fx-rate.net/*'
      ]
    },
    RESOURCES: {
      SRC: '_assets',
      OK: 'ok.png',
      OKD: 'ok-dark.png',
      CANCEL: 'cancel.png',
      CANCELD: 'cancel-dark.png',
      ICON32: 'icon32.png',
      LOGO16: 'logo16.png',
      LOGO256: 'logo256.png',
      MAG: 'magnifier.png',
      CALENDAR: 'calendar.png',
      RENEW: 'renew.png',
      FIRST: 'first.png',
      NEXT: 'next.png',
      PREV: 'previous.png',
      LAST: 'last.png',
      CB: 'home.png',
      UP: 'update.png',
      NS: 'addStock.png',
      DS: 'deletestock.png',
      FI: 'fadein.png',
      IT: 'intransfer.png',
      OT: 'outtransfer.png',
      CHS: 'changes.png',
      CHB: 'allchanges.png',
      BK: 'backup.png',
      RE: 'restore.png',
      OB: 'orderbook.png',
      TB: 'transferbook.png',
      PY: 'peryear.png',
      CO: 'clean.png',
      SE: 'settings.png',
      RESET: 'reset.png',
      ADD: 'add.png',
      CHANGE: 'change.png',
      DEL: 'delete.png',
      NO: 'neworder.png',
      BUY: 'buy.png',
      SELL: 'sell.png',
      ND: 'newdividend.png',
      SD: 'showdividends.png',
      CONF: 'config.png',
      HTTP: 'http.png',
      HELP: 'help.json',
      PRIVACY: 'privacy.json',
      LICENSE: 'license.html',
      INDEX: 'app.html',
      ROOT: '/'
    },
    SERVICES: {
      goyax: {
        NAME: 'Goyax',
        HOME: 'https://www.goyax.de/',
        QUOTE: 'https://www.goyax.de/aktien/',
        DELAY: 50
      },
      fnet: {
        NAME: 'Finanzen.Net',
        HOME: 'https://www.finanzen.net/aktienkurse/',
        INDEXES: 'https://www.finanzen.net/indizes/',
        QUOTE: 'https://www.finanzen.net/suchergebnis.asp?_search=',
        DATES: 'https://www.finanzen.net/termine/',
        MATERIALS: 'https://www.finanzen.net/rohstoffe/',
        GM: 'Hauptversammlung',
        QF: 'Quartalszahlen',
        DELAY: 750
      },
      wstreet: {
        NAME: 'Wallstreet-Online',
        HOME: 'https://www.wallstreet-online.de',
        QUOTE:
          'https://www.wallstreet-online.de/_rpc/json/search/auto/searchInst/',
        DELAY: 50
      },
      acheck: {
        NAME: 'Aktien Check',
        HOME: 'https://m.aktiencheck.de/',
        QUOTE: 'https://m.aktiencheck.de/quotes/suche/?search=',
        DELAY: 50
      },
      ard: {
        NAME: 'ARD',
        HOME: 'https://www.tagesschau.de/wirtschaft/boersenkurse/',
        QUOTE:
          'https://www.tagesschau.de/wirtschaft/boersenkurse/suche/?suchbegriff=',
        DELAY: 50
      },
      fx: {
        NAME: 'fx-rate',
        HOME: 'https://fx-rate.net/qwsaq',
        EXCHANGE: 'https://fx-rate.net/calculator/?c_input=',
        DELAY: 50
      },
      tgate: {
        NAME: 'Tradegate', // changes list, new stock
        HOME: 'https://www.tradegate.de/',
        QUOTE: 'https://www.tradegate.de/orderbuch.php?isin=',
        CHSURL: 'https://www.tradegate.de/indizes.php?index=',
        CHBURL: 'https://www.tradegate.de/indizes.php?buchstabe=',
        CHS: [
          'DE000A1EXRV0',
          'DE000A1EXRY4',
          'DE000A1EXRW8',
          'DE000A1EXRX6',
          'EU0009658145',
          'DE000A0SNK21',
          'US0000000002'
        ],
        CHB: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '7',
          '8',
          '9',
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z',
          'Ö'
        ],
        CHANGES: {
          SMALL: 1,
          BIG: 2,
          STEP: 8,
          NAME: 2,
          VALUE: 7
        },
        DELAY: 50
      }
    },
    STATES: {
      DONE: 'complete',
      SRV: 500,
      SUCCESS: 200,
      PAUSE: 'resting',
      MUTATE: 'mutation',
      NORENDER: 'norender'
    },
    SYSTEM: {
      COPYRIGHT: '2013-2024 Martin Berner',
      FETCHTO: 20,
      DELAY: 600,
      EMAIL: 'mailto:stockmanager@gmx.de',
      GET: 'GET',
      HTMLENTITY:
        '(&auml;|&Auml;|&ouml;|&Ouml;|&uuml;|&Uuml;|&amp;|&eacute;|&Eacute;|&ecirc;|&Ecirc;|&oacute;|&Oacute;|&aelig;|&Aelig;)',
      ISINLENGTH: 12,
      KEYS: {
        ENTER: 'Enter',
        TAB: 'Tab',
        T: 'T',
        V: 'V',
        Z: 'Z'
      },
      ERRORS: {
        CURR: 'Missing current record!',
        ERR: 'System error!',
        INVALID: 'Invalid Range!',
        NOCASE: 'Missing case!',
        NODEL: 'Deletion off memory failed!',
        REQ: 'Request failed!',
        SRV: 'Remote Server error!',
        WRONGPARAM: 'Wrong parameter!',
        SEND: 'Send message failed!'
      },
      NULL: 0.00001,
      PERCENT: 100,
      PROGRESSBAR: {MAX: 400},
      ROWS: 10,
      STARTUP: 2,
      TYPE: 599,
      ONCE: {once: true}
    },
    RECORDS: {
      TEMPLATES: {
        STOCK: {
          cID: 0,
          cCompany: '',
          cISIN: '',
          cWKN: '',
          cSym: '',
          cFirstPage: 0,
          cFadeOut: 0,
          cQuarterDay: 0,
          cMeetingDay: 0,
          cURL: '',
          mPortfolio: 0,
          mBuyValue: 0,
          mValue: 0,
          mMin: 0,
          mMax: 0,
          mChange: 0,
          mEuroChange: 0,
          mDividendYielda: 0,
          mDividendYeara: 0,
          mDividendYieldb: 0,
          mDividendYearb: 0,
          mRealDividend: 0,
          mRealBuyValue: 0,
          mDeleteable: true
        },
        MSTOCK: {
          mPortfolio: 0,
          mBuyValue: 0,
          mValue: 0,
          mMin: 0,
          mMax: 0,
          mChange: 0,
          mEuroChange: 0,
          mDividendYielda: 0,
          mDividendYeara: 0,
          mDividendYieldb: 0,
          mDividendYearb: 0,
          mRealDividend: 0,
          mRealBuyValue: 0,
          mDeleteable: true
        },
        TRANSFER: {
          cID: 0,
          cDate: 0,
          cExDay: 0,
          cCount: 0,
          cUnitQuotation: 0,
          cStockID: 0,
          cAmount: 0,
          cFees: 0,
          cSTax: 0,
          cFTax: 0,
          cTax: 0,
          cSoli: 0,
          cType: 0,
          cMarketPlace: '',
          cDescription: '',
          mCompany: '',
          mSortDate: 0
        }
      },
      TYPES: {
        TRANSFER: 11,
        FEE: 12,
        STAX: 13,
        FTAX: 14,
        TAX: 15,
        SOLI: 16
      },
      CONTROLLER: {
        TOTAL: {
          efficiency: 0,
          returnRate: 0,
          buy: 0,
          sell: 0,
          dividends: 0,
          deposits: 0,
          withdrawals: 0,
          taxes: 0,
          fees: 0,
          earnings: 0,
          account: 0,
          depot: 0,
          winloss: 0,
          winlossPercent: 0,
          depotBuyValue: 0
        }
      }
    }
  })
}
