(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{180:function(t,e,n){"use strict";n.r(e);var r=n(0),a=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"control"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#control","aria-hidden":"true"}},[t._v("#")]),t._v(" Control")]),t._v(" "),n("p",[t._v("The following RPC calls interact with the "),n("code",[t._v("komodod")]),t._v(" software, and are made available through the "),n("code",[t._v("komodo-cli")]),t._v(" software.")]),t._v(" "),n("h2",{attrs:{id:"getinfo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getinfo","aria-hidden":"true"}},[t._v("#")]),t._v(" getinfo")]),t._v(" "),n("p",[n("strong",[t._v("getinfo")])]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("getinfo")]),t._v(" method returns an object containing various state info.")]),t._v(" "),n("h3",{attrs:{id:"arguments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Structure")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("(none)")]),t._v(" "),n("td"),t._v(" "),n("td")])])]),t._v(" "),n("h3",{attrs:{id:"response"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#response","aria-hidden":"true"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Structure")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("{")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v('"version"')]),t._v(" "),n("td",[t._v("(numeric)")]),t._v(" "),n("td",[t._v("the server version")])]),t._v(" "),n("tr",[n("td",[t._v('"protocolversion"')]),t._v(" "),n("td",[t._v("(numeric)")]),t._v(" "),n("td",[t._v("the protocol version")])]),t._v(" "),n("tr",[n("td",[t._v('"walletversion"')]),t._v(" "),n("td",[t._v("(numeric)")]),t._v(" "),n("td",[t._v("the wallet version")])]),t._v(" "),n("tr",[n("td",[t._v('"balance"')]),t._v(" "),n("td",[t._v("(numeric)")]),t._v(" "),n("td",[t._v("the total balance of the wallet")])]),t._v(" "),n("tr",[n("td",[t._v('"blocks"')]),t._v(" "),n("td",[t._v("(numeric)")]),t._v(" "),n("td",[t._v("the current number of blocks processed in the server")])]),t._v(" "),n("tr",[n("td",[t._v('"timeoffset"')]),t._v(" "),n("td",[t._v("(numeric)")]),t._v(" "),n("td",[t._v("the time offset")])]),t._v(" "),n("tr",[n("td",[t._v('"connections"')]),t._v(" "),n("td",[t._v("(numeric)")]),t._v(" "),n("td",[t._v("the number of connections")])]),t._v(" "),n("tr",[n("td",[t._v('"proxy"')]),t._v(" "),n("td",[t._v("(string, optional)")]),t._v(" "),n("td",[t._v("the proxy used by the server")])]),t._v(" "),n("tr",[n("td",[t._v('"difficulty"')]),t._v(" "),n("td",[t._v("(numeric)")]),t._v(" "),n("td",[t._v("the current difficulty")])]),t._v(" "),n("tr",[n("td",[t._v('"testnet"')]),t._v(" "),n("td",[t._v("(boolean)")]),t._v(" "),n("td",[t._v("if the server is using testnet or not")])]),t._v(" "),n("tr",[n("td",[t._v('"keypoololdest"')]),t._v(" "),n("td",[t._v("(numeric)")]),t._v(" "),n("td",[t._v("the timestamp (seconds since GMT epoch) of the oldest pre-generated key in the key pool")])]),t._v(" "),n("tr",[n("td",[t._v('"keypoolsize"')]),t._v(" "),n("td",[t._v("(numeric)")]),t._v(" "),n("td",[t._v("how many new keys are pre-generated")])]),t._v(" "),n("tr",[n("td",[t._v('"unlocked_until"')]),t._v(" "),n("td",[t._v("(numeric)")]),t._v(" "),n("td",[t._v("the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked")])]),t._v(" "),n("tr",[n("td",[t._v('"paytxfee"')]),t._v(" "),n("td",[t._v("(numeric)")]),t._v(" "),n("td",[t._v("the transaction fee set in COIN/kB")])]),t._v(" "),n("tr",[n("td",[t._v('"relayfee"')]),t._v(" "),n("td",[t._v("(numeric)")]),t._v(" "),n("td",[t._v("minimum relay fee for non-free transactions in COIN/kB")])]),t._v(" "),n("tr",[n("td",[t._v('"errors"')]),t._v(" "),n("td",[t._v("(string)")]),t._v(" "),n("td",[t._v("any error messages")])]),t._v(" "),n("tr",[n("td",[t._v("}")]),t._v(" "),n("td"),t._v(" "),n("td")])])]),t._v(" "),n("h3",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('command:\n\nkomodo-cli getinfo\n\nresponse:\n\n{\n  "version": 1001550,\n  "protocolversion": 170003,\n  "KMDversion": "0.2.0",\n  "notarized": 0,\n  "prevMoMheight": 0,\n  "notarizedhash": "0000000000000000000000000000000000000000000000000000000000000000",\n  "notarizedtxid": "0000000000000000000000000000000000000000000000000000000000000000",\n  "notarizedtxid_height": "mempool",\n  "KMDnotarized_height": 0,\n  "notarized_confirms": 0,\n  "walletversion": 60000,\n  "balance": 10.16429765,\n  "blocks": 459,\n  "longestchain": 0,\n  "timeoffset": 0,\n  "tiptime": 1536624090,\n  "connections": 0,\n  "proxy": "",\n  "difficulty": 1.000026345948652,\n  "testnet": false,\n  "keypoololdest": 1536262464,\n  "keypoolsize": 101,\n  "paytxfee": 0.00000000,\n  "relayfee": 0.00000100,\n  "errors": "",\n  "name": "SIDD",\n  "p2pport": 9800,\n  "rpcport": 9801,\n  "magic": -759875707,\n  "premine": 10\n}\n')])])]),n("blockquote",[n("p",[t._v("You can find your rpcuser, rpcpassword, and rpcport in the coin's .conf file.")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('command:\n\ncurl --user myrpcuser:myrpcpassword --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getinfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:myrpcport/\n\nresponse:\n\n{\n  "result": {\n    "version": 1001550,\n    "protocolversion": 170003,\n    "KMDversion": "0.2.0",\n    "notarized": 0,\n    "prevMoMheight": 0,\n    "notarizedhash": "0000000000000000000000000000000000000000000000000000000000000000",\n    "notarizedtxid": "0000000000000000000000000000000000000000000000000000000000000000",\n    "notarizedtxid_height": "mempool",\n    "KMDnotarized_height": 0,\n    "notarized_confirms": 0,\n    "walletversion": 60000,\n    "balance": 10.16429765,\n    "blocks": 459,\n    "longestchain": 0,\n    "timeoffset": 0,\n    "tiptime": 1536624090,\n    "connections": 0,\n    "proxy": "",\n    "difficulty": 1.000026345948652,\n    "testnet": false,\n    "keypoololdest": 1536262464,\n    "keypoolsize": 101,\n    "relayfee": 1e-06,\n    "paytxfee": 0,\n    "errors": "",\n    "name": "SIDD",\n    "p2pport": 9800,\n    "rpcport": 9801,\n    "magic": -759875707,\n    "premine": 10\n  },\n  "error": null,\n  "id": "curltest"\n}\n')])])]),n("p",[n("strong",[t._v('help ( "command" )')])]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("help")]),t._v(" method lists all commands, or all information for a specified command.")]),t._v(" "),n("h3",{attrs:{id:"arguments-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#arguments-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Structure")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v('"command"')]),t._v(" "),n("td",[t._v("(string, optional)")]),t._v(" "),n("td",[t._v("the command requiring assistance")])])])]),t._v(" "),n("p",[t._v("Response:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Structure")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v('"command"')]),t._v(" "),n("td",[t._v("(string, optional)")]),t._v(" "),n("td",[t._v("the command requiring assistance")])])])]),t._v(" "),n("h3",{attrs:{id:"examples-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples:")]),t._v(" "),n("h2",{attrs:{id:"stop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stop","aria-hidden":"true"}},[t._v("#")]),t._v(" stop")]),t._v(" "),n("p",[n("strong",[t._v("stop")])]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("stop")]),t._v(" method instructs the coin daemon to shut down.")]),t._v(" "),n("p",[t._v("The amount of time it takes to shut down the chain will vary depending on the chain's current state.")]),t._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("Forcefully stopping the chain should be avoided, as it may cause a corruption in the local database. In the event of a corrupted database, the user will need to "),n("b",[t._v("resync")]),t._v(".")])]),t._v(" "),n("h3",{attrs:{id:"arguments-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#arguments-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Structure")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("(none)")]),t._v(" "),n("td"),t._v(" "),n("td")])])]),t._v(" "),n("h3",{attrs:{id:"response-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#response-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Structure")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Komodo server stopping")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("[COIN] Komodo server stopping")]),t._v(" "),n("td"),t._v(" "),n("td")])])]),t._v(" "),n("h3",{attrs:{id:"examples-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('command:\n\nkomodo-cli stop\n\nresult:\n\n"Komodo server stopping"\n')])])])])}],!1,null,null,null);a.options.__file="_311-control.md";e.default=a.exports}}]);