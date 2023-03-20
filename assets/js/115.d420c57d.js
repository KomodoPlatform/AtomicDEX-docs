(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{501:function(t,e,a){"use strict";a.r(e);var s=a(49),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"atomicdex-api-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atomicdex-api-configuration"}},[t._v("#")]),t._v(" AtomicDEX API configuration")]),t._v(" "),a("p",[t._v("AtomicDEX-API configuration parameters are "),a("a",{attrs:{href:"https://github.com/KomodoPlatform/atomicDEX-API/blob/mm2.1/mm2src/mm2.rs#L126",target:"_blank",rel:"noopener noreferrer"}},[t._v("listed in the source code"),a("OutboundLink")],1),t._v(", along with "),a("a",{attrs:{href:"https://github.com/KomodoPlatform/atomicDEX-API/blob/mm2.1/mm2src/mm2.rs#L115",target:"_blank",rel:"noopener noreferrer"}},[t._v("additional runtime flags"),a("OutboundLink")],1),t._v(", and "),a("a",{attrs:{href:"https://github.com/KomodoPlatform/atomicDEX-API/blob/mm2.1/mm2src/mm2.rs#L171",target:"_blank",rel:"noopener noreferrer"}},[t._v("per-process environment variables"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"mm2-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mm2-json"}},[t._v("#")]),t._v(" MM2.json")]),t._v(" "),a("p",[t._v("When running the AtomicDEX API via commandline with the "),a("code",[t._v("mm2")]),t._v(" binary, some basic configuration parameters need to be defined in either an "),a("code",[t._v("MM2.json")]),t._v(" file, or at runtime.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("gui")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Information about your GUI; place essential info about your application (name, version, etc.) here. For example: AtomicDEX iOS 1.0.1")])]),t._v(" "),a("tr",[a("td",[t._v("netid")]),t._v(" "),a("td",[t._v("integer")]),t._v(" "),a("td",[t._v('Nework ID number, telling the AtomicDEX API which network to join. 7777 is the current main network, though alternative netids can be used for testing or "private" trades')])]),t._v(" "),a("tr",[a("td",[t._v("passphrase")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Your passphrase; this is the source of each of your coins private keys. KEEP IT SAFE!")])]),t._v(" "),a("tr",[a("td",[t._v("allow_weak_password")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("If "),a("code",[t._v("true")]),t._v(", will allow low entropy rpc_password. If "),a("code",[t._v("false")]),t._v(' rpc_password must not have 3 of the same characters in a row, must be between 8-32 characters in length, must contain at least one of each of the following: numeric, uppercase, lowercase, special character (e.g. !#$*). It also can not contain the word "password", or the chars '),a("code",[t._v("<")]),t._v(", "),a("code",[t._v(">")]),t._v(", and "),a("code",[t._v("&")]),t._v(". Defaults to "),a("code",[t._v("false")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("rpc_password")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Your password for protected RPC methods (userpass)")])]),t._v(" "),a("tr",[a("td",[t._v("userhome")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("The path to your home, called from your environment variables and entered as a regular expression")])]),t._v(" "),a("tr",[a("td",[t._v("dbdir")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("AtomicDEX API database path. Optional, defaults to a subfolder named "),a("code",[t._v("DB")]),t._v(" in the path of your "),a("code",[t._v("mm2")]),t._v(" binary")])]),t._v(" "),a("tr",[a("td",[t._v("rpcip")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("IP address to bind to for RPC server. Optional, defaults to 127.0.0.1")])]),t._v(" "),a("tr",[a("td",[t._v("rpcport")]),t._v(" "),a("td",[t._v("integer")]),t._v(" "),a("td",[t._v("Port to use for RPC communication. Optional, defaults to 7783")])]),t._v(" "),a("tr",[a("td",[t._v("rpc_local_only")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("If "),a("code",[t._v("false")]),t._v(" the AtomicDEX API will allow rpc methods sent from external IP addresses. Optional, defaults to "),a("code",[t._v("true")]),t._v(". "),a("strong",[t._v("Warning:")]),t._v(" Only use this if you know what you are doing, and have put the appropriate security measures in place.")])]),t._v(" "),a("tr",[a("td",[t._v("i_am_seed")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("Runs AtomicDEX API as a seed node mode (acting as a relay for AtomicDEX API clients). Optional, defaults to "),a("code",[t._v("false")]),t._v(". Use of this mode is not reccomended on the main network (7777) as it could result in a pubkey ban if non-compliant. on alternative testing or private networks, at least one seed node is required to relay information to other AtomicDEX API clients using the same netID.")])]),t._v(" "),a("tr",[a("td",[t._v("seednodes")]),t._v(" "),a("td",[t._v("list of strings")]),t._v(" "),a("td",[t._v("Optional. If operating on a test or private netID, the IP address of at least one seed node is required (on the main network, these are already hardcoded)")])]),t._v(" "),a("tr",[a("td",[t._v("hd_account_id")]),t._v(" "),a("td",[t._v("integer")]),t._v(" "),a("td",[t._v("Optional. If this value is set, the AtomicDEX-API will work in only the HD derivation mode, coins will need to have a coin derivation path entry in the "),a("code",[t._v("coins")]),t._v(" file for activation. The "),a("code",[t._v("hd_account_id")]),t._v(" value effectively takes its place in the full derivation as follows: "),a("code",[t._v("m/44'/COIN_ID'/<hd_account_id>'/CHAIN/ADDRESS_ID")])])])])]),t._v(" "),a("p",[t._v("Example (allowing weak password):")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gui"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DEVDOCS_CLI"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"netid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7777")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rpc_password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ENTER_UNIQUE_PASSWORD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"passphrase"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ENTER_UNIQUE_SEED_PHRASE_DONT_USE_THIS_CHANGE_IT_OR_FUNDS_NOT_SAFU"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allow_weak_password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userhome"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/${HOME#\\"/\\"}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dbdir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/DB/folder"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Example (not allowing weak password):")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gui"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DEVDOCS_CLI"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"netid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7777")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rpc_password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ent3r_Un1Qu3_Pa$$w0rd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"passphrase"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ENTER_UNIQUE_SEED_PHRASE_DONT_USE_THIS_CHANGE_IT_OR_FUNDS_NOT_SAFU"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allow_weak_password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userhome"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/${HOME#\\"/\\"}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dbdir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/DB/folder"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("mm2")]),t._v(" binary will look for the "),a("code",[t._v("MM2.json")]),t._v(" in the same folder as your "),a("code",[t._v("mm2")]),t._v(" binary, unless it is defined as being in a different path via the "),a("code",[t._v("MM2_CONF_PATH")]),t._v(" environment variable.\nAlternatively, you can define the "),a("code",[t._v("MM2.json")]),t._v(" parameters at runtime as below:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("stdbuf -oL "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" ./mm2 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("gui"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("DEVDOCS_CLI"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("netid"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":7777, "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userhome"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('/${HOME#"')]),t._v("/"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"}'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("passphrase"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("ENTER_UNIQUE_SEED_PHRASE_DONT_USE_THIS_CHANGE_IT_FUNDS_OR_NOT_SAFU"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rpc_password"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("Ent3r_Un1Qu3_Pa"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$$")]),t._v("w0rd"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("When using the AtomicDEX API on a VPS without accompanying tools such as "),a("code",[t._v("tmux")]),t._v(" or "),a("code",[t._v("screen")]),t._v(", it is recommended that the user add the command "),a("code",[t._v("nohup")]),t._v(" to the AtomicDEX API launch command. This addition ensures that the AtomicDEX API instance is not shutdown when the user logs out.")]),t._v(" "),a("p",[t._v("Optional environment variables that can be user defined are as follows:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("MM2_CONF_PATH")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("File path. MM2 will try to load the JSON configuration from this file. The file must contain valid json with structure mentioned above. Defaults to "),a("code",[t._v("MM2.json")]),t._v(" in the same folder as your "),a("code",[t._v("mm2")]),t._v(" binary")])]),t._v(" "),a("tr",[a("td",[t._v("MM_COINS_PATH")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("File path. MM2 will try to load coins data from this file. File must contain valid json. A comprehensive version for public use is maintained in the "),a("a",{attrs:{href:"https://github.com/KomodoPlatform/coins/blob/master/coins",target:"_blank",rel:"noopener noreferrer"}},[t._v("Komodo Platform coins github repository"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("MM_LOG")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("File path. Must end with '.log'. The AtomicDEX api will write logs to this file.")])]),t._v(" "),a("tr",[a("td",[t._v("USERPASS")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("For convenience, this variable can store the value of your "),a("code",[t._v("rpc_password")]),t._v(" to be referenced in any shell scripts")])])])])]),t._v(" "),a("h2",{attrs:{id:"setting-userpass-environment-variable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-userpass-environment-variable"}},[t._v("#")]),t._v(" Setting userpass Environment Variable")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Userpass will be renamed to "),a("b",[t._v("rpc_password")]),t._v(" for clarity in the near future")])]),t._v(" "),a("p",[t._v("Make a new file in the "),a("code",[t._v("~/atomicDEX-API/target/debug")]),t._v(" directory called "),a("code",[t._v("USERPASS")]),t._v(" and enter the following text, including the "),a("code",[t._v("rpc_password")]),t._v(" you specified earlier:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("USERPASS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RPC_PASSWORD"')]),t._v("\n")])])]),a("p",[t._v("Save it, and then in the terminal execute:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" USERPASS\n")])])]),a("p",[t._v("Test it by executing:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$USERPASS")]),t._v("\n")])])]),a("p",[t._v("You should see your USERPASS as a returned value.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("USERPASS")]),t._v(" environment variable will remain in our terminal's memory until we close the session. When we open up a new session later, we need to create the "),a("code",[t._v("USERPASS")]),t._v(" environment variable again.")])]),t._v(" "),a("p",[t._v("Refer to the rest of the AtomicDEX API documentation for details and examples of how to:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/basic-docs/atomicdex-api-legacy/coin_activation.html"}},[t._v("Enable coins")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/basic-docs/atomicdex-api-legacy/buy.html"}},[t._v("Place orders")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/basic-docs/atomicdex-api-legacy/orderbook.html"}},[t._v("View the orderbook")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/basic-docs/atomicdex-api-legacy/my_balance.html"}},[t._v("Check your balance")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/basic-docs/atomicdex-api-20/start_simple_market_maker_bot.html"}},[t._v("Configure bot trading!")])],1)]),t._v(" "),a("p",[t._v("When you are finished, you can exit the AtomicDEX API using the following command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("stop"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}"')]),t._v("\n")])])]),a("p",[t._v("If you have any questions or feedback, join us on the "),a("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[t._v("Komodo Platform Discord Server"),a("OutboundLink")],1),t._v(" and tell us about your experience!")])])}),[],!1,null,null,null);e.default=r.exports}}]);