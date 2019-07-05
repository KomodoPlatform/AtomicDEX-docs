var sidebar = [
  {
    title: "AtomicDEX",
    collapsible: true,
    children: [
        // [
            // "/basic-docs/atomicdex/introduction-to-atomicdex.md",
            // "Introduction to AtomicDEX Documentation"
        // ],
        {
            title: "AtomicDEX Setup",
            collapsible: true,
            children: [
                [
                    "/basic-docs/atomicdex/atomicdex-setup/get-started-atomicdex.md",
                    "Getting Started with AtomicDEX"
                ],
            ],
        },
        {
            title: "AtomicDEX Tutorials",
            collapsible: true,
            children: [
                [
                    "/basic-docs/atomicdex/atomicdex-tutorials/introduction-to-atomicdex.md",
                    "Introduction to AtomicDEX"
                ],
                [
                    "/basic-docs/atomicdex/atomicdex-tutorials/atomicdex-walkthrough.md",
                    "AtomicDEX Walkthrough"
                ],
                [
                    "/basic-docs/atomicdex/atomicdex-tutorials/additional-information-about-atomicdex.md",
                    "Additional Information About AtomicDEX"
                ],
            ]
        },
        [
            "/basic-docs/atomicdex/atomicdex-api.md", 
            "AtomicDEX API"
        ]
    ]
  },
]
module.exports = sidebar;
