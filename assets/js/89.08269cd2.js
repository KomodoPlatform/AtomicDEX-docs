(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{453:function(t,e,s){"use strict";s.r(e);var a=s(49),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"recover-funds-of-swap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recover-funds-of-swap"}},[t._v("#")]),t._v(" recover_funds_of_swap")]),t._v(" "),s("p",[s("strong",[t._v("recover_funds_of_swap uuid")])]),t._v(" "),s("p",[t._v("In certain cases, a swap can finish with an error wherein the user's funds are stuck on the swap-payment address. (This address is the P2SH address when executing on a utxo-based blockchain, or an etomic-swap smart contract when executing on an ETH/ERC20 blockchain.)")]),t._v(" "),s("p",[t._v("This error can occur when one side of the trade does not follow the protocol (for any reason). The error persists as attempts to refund the payment fail due to network connection issues between the AtomicDEX API node and the coin's RPC server.")]),t._v(" "),s("p",[t._v("In this scenario, the "),s("code",[t._v("recover_funds_of_swap")]),t._v(" method instructs the AtomicDEX API software to attempt to reclaim the user funds from the swap-payment address, if possible.")]),t._v(" "),s("h4",{attrs:{id:"arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Structure")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("params.uuid")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("uuid of the swap to recover the funds")])])])]),t._v(" "),s("h4",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Structure")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("result.action")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("the action executed to unlock the funds. Can be either "),s("code",[t._v("SpentOtherPayment")]),t._v(" or "),s("code",[t._v("RefundedMyPayment")])])]),t._v(" "),s("tr",[s("td",[t._v("result.coin")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("the balance of this coin will be unstuck by the recovering transaction")])]),t._v(" "),s("tr",[s("td",[t._v("result.tx_hash")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("the hash of the recovering transaction")])]),t._v(" "),s("tr",[s("td",[t._v("result.tx_hex")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("raw bytes of the recovering transaction in hexadecimal representation")])])])]),t._v(" "),s("h4",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),s("h4",{attrs:{id:"command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[t._v("#")]),t._v(" Command")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("recover_funds_of_swap"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("params"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":{"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("uuid"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("6343b2b1-c896-47d4-b0f2-a11798f654ed"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}}"')]),t._v("\n")])])]),s("div",{staticStyle:{"margin-top":"0.5rem"}},[s("collapse-text",{attrs:{hidden:"",title:"Response"}},[s("h4",{attrs:{id:"response-success-spentotherpayment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-success-spentotherpayment"}},[t._v("#")]),t._v(" Response (success - SpentOtherPayment)")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"action"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SpentOtherPayment"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coin"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HELLO"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tx_hash"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"696571d032976876df94d4b9994ee98faa870b44fbbb4941847e25fb7c49b85d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tx_hex"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0400008085202f890113591b1feb52878f8aea53b658cf9948ba89b0cb27ad0cf30b59b5d3ef6d8ef700000000d8483045022100eda93472c1f6aa18aacb085e456bc47b75ce88527ed01c279ee1a955e85691b702201adf552cfc85cecf588536d5b8257d4969044dde86897f2780e8c122e3a705e40120576fa34d308f39b7a704616656cc124232143565ca7cf1c8c60d95859af8f22d004c6b63042555555db1752102631dcf1d4b1b693aa8c2751afc68e4794b1e5996566cfc701a663f8b7bbbe640ac6782012088a9146e602d4affeb86e4ee208802901b8fd43be2e2a4882102031d4256c4bc9f99ac88bf3dba21773132281f65f9bf23a59928bce08961e2f3ac68ffffffff0198929800000000001976a91405aab5342166f8594baf17a7d9bef5d56744332788ac0238555d000000000000000000000000000000"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-success-refundedmypayment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-success-refundedmypayment"}},[t._v("#")]),t._v(" Response (success - RefundedMyPayment)")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"action"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RefundedMyPayment"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coin"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HELLO"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tx_hash"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"696571d032976876df94d4b9994ee98faa870b44fbbb4941847e25fb7c49b85d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tx_hex"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0400008085202f890113591b1feb52878f8aea53b658cf9948ba89b0cb27ad0cf30b59b5d3ef6d8ef700000000d8483045022100eda93472c1f6aa18aacb085e456bc47b75ce88527ed01c279ee1a955e85691b702201adf552cfc85cecf588536d5b8257d4969044dde86897f2780e8c122e3a705e40120576fa34d308f39b7a704616656cc124232143565ca7cf1c8c60d95859af8f22d004c6b63042555555db1752102631dcf1d4b1b693aa8c2751afc68e4794b1e5996566cfc701a663f8b7bbbe640ac6782012088a9146e602d4affeb86e4ee208802901b8fd43be2e2a4882102031d4256c4bc9f99ac88bf3dba21773132281f65f9bf23a59928bce08961e2f3ac68ffffffff0198929800000000001976a91405aab5342166f8594baf17a7d9bef5d56744332788ac0238555d000000000000000000000000000000"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-error-maker-payment-was-already-spent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-error-maker-payment-was-already-spent"}},[t._v("#")]),t._v(" Response (error - maker payment was already spent)")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lp_swap:702] lp_swap:412] taker_swap:890] Maker payment is spent, swap is not recoverable"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-error-swap-is-not-finished-yet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-error-swap-is-not-finished-yet"}},[t._v("#")]),t._v(" Response (error - swap is not finished yet)")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lp_swap:702] lp_swap:412] taker_swap:886] Swap must be finished before recover funds attempt"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1)])}),[],!1,null,null,null);e.default=r.exports}}]);