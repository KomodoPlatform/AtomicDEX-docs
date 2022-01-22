The AtomicDEX-API stores historical information such as swaps and orders within an SQLite database, located under the DB user data folder (e.g. {folder continaing mm2 binary}/DB/{wallet identifying hex string}/MM2.db).

There are a variety of methods to query sqlite databases. Examples below show how to do a sqlite query in Linux terminal, but first you might need to install sqlite with `sudo apt install sqlite3`.

The tables and columns available to query are as follows:


## my_swaps

This table keeps a record of all swaps successfully performed in this pubkey's MM2.db

|----------|---------------------|------------------|---------------|
|    ID    |        Name         |       Type       | Description   |
|----------|---------------------|------------------|---------------|
|    0     |         id          |     INTEGER      | Primary Key   |
|    1     |       my_coin       |   VARCHAR(255)   | Coin sent     |
|    2     |     other_coin      |   VARCHAR(255)   | Coin received |
|    3     |        uuid         |   VARCHAR(255)   | Swap UUID     |
|    4     |     started_at      |     INTEGER      | Timestamp     |

#### Query:
`sqlite3 ${PATH_TO_MM2_DB_FILE} "SELECT * FROM my_swaps WHERE id=2 LIMIT 1"`

#### Response:
`2|MORTY|RICK|7086bc8e-bdaa-44b0-ac9b-01aa8760b62b|1636956829`


## stats_swaps

This table keeps a detailed record of all swaps performed (including failed) in this pubkey's MM2.db

|----------|---------------------|------------------|-------------|
|    ID    |        Name         |       Type       | Description |
|----------|---------------------|------------------|-------------|
|    0     |         id          |     INTEGER      | Primary Key |
|    1     |     maker_coin      |   VARCHAR(255)   | Maker Coin  |
|    2     |     taker_coin      |   VARCHAR(255)   | Taker Coin  |
|    3     |        uuid         |   VARCHAR(255)   | Swap UUID   |
|    4     |     started_at      |     INTEGER      | Timestamp   |
|    5     |     finished_at     |     INTEGER      | Timestamp   |
|    6     |    maker_amount     |     DECIMAL      | Maker Coin  |
|    7     |    taker_amount     |     DECIMAL      | Taker Coin  |
|    8     |     is_success      |     INTEGER      | `1` for successful, `0` for failed |
|    9     |  maker_coin_ticker  |   VARCHAR(255)   | Maker Coin Ticker                  |
|    10    | maker_coin_platform |   VARCHAR(255)   | Maker Coin Platform                |
|    11    |  taker_coin_ticker  |   VARCHAR(255)   | Taker Coin Ticker                  |
|    12    | taker_coin_platform |   VARCHAR(255)   | Taker Coin Platform                |

#### Query:
`sqlite3 ${PATH_TO_MM2_DB_FILE} "SELECT * FROM stats_swaps WHERE taker_coin_platform != '' and maker_coin_platform != '' LIMIT 1"`

#### Response:
`97|KMD-BEP20|BUSD-BEP20|a4f1518f-390c-4075-abec-fa0087e7b2d9|1639656068|1639656218|17.8120351868728|13.4020942543104|1|KMD|BEP20|BUSD|BEP20`


## my_orders

This table keeps a detailed record of all orders placed in this pubkey's MM2.db

|----------|---------------------|------------------|----------------------------|
|    ID    |        Name         |       Type       | Description                |
|----------|---------------------|------------------|----------------------------|
|    0     |         id          |     INTEGER      | Primary Key                |
|    1     |        uuid         |   VARCHAR(255)   | Order UUID                 |
|    2     |        type         |   VARCHAR(255)   | Order Type                 |
|    3     |   initial_action    |   VARCHAR(255)   | `Buy` or `Sell`. Setprice maker orders are `Sell` |
|    4     |        base         |   VARCHAR(255)   | Base Coin                  |
|    5     |         rel         |   VARCHAR(255)   | Rel  Coin                  |
|    6     |        price        |     DECIMAL      | Order Price                |
|    7     |       volume        |     DECIMAL      | Order Volume               |
|    8     |     created_at      |     INTEGER      | Timestamp                  |
|    9     |    last_updated     |     INTEGER      | Timestamp                  |
|    10    |      was_taker      |     INTEGER      | `1` if taker, `2` if maker |
|    11    |       status        |   VARCHAR(255)   | Order status               |

#### Query:
`sqlite3 ${PATH_TO_MM2_DB_FILE} "SELECT * FROM my_orders WHERE base = 'RICK' and rel= 'MORTY' LIMIT 6"`

#### Response:
```
154|6053016b-e1ba-490f-9501-eafb69b4d3a7|Taker|Buy|RICK|MORTY|0.03|1|1640159991278|1640160021808|0|TimedOut
266|77d79265-da87-48bb-aee3-7cc87f442a55|Maker|Buy|RICK|MORTY|0.0505|3|1640857934304|1640874662778|1|InsufficientBalance
267|4c6341d6-1e89-4c3b-8612-a930754701f2|Taker|Sell|RICK|MORTY|1|2|1640872463330|1640872467129|0|Fulfilled
290|57c2b270-ee73-4a21-8fa4-4b8c2d76fc02|Maker|Buy|RICK|MORTY|0.1|0.1|1641539601576|1641539631823|1|ToMaker
291|9cba3b40-2426-4fbf-80c8-2a65c8661eed|Maker|Sell|RICK|MORTY|1|1|1641539652421|1641539813001|0|Cancelled
294|fedcc1e0-a059-47c6-bbfc-3a61454f1208|Maker|Sell|RICK|MORTY|1|12|1641546891912|1641546891912|0|Created
```


## nodes

This table stores a record of all nodes [added for stats collection](../atomicdex-api-20-dev/add_node_to_version_stat.html) in this pubkey's MM2.db

|----------|---------------------|------------------|-------------|
|    ID    |        Name         |       Type       | Description |
|----------|---------------------|------------------|-------------|
|    0     |         id          |     INTEGER      | Primary Key |
|    1     |        name         |   VARCHAR(255)   | Node name   |
|    2     |       address       |   VARCHAR(255)   | Node IP     |
|    3     |       peer_id       |   VARCHAR(255)   | Node PeerID |

#### Query:
`sqlite3 ${PATH_TO_MM2_DB_FILE} "SELECT * FROM nodes WHERE name = 'dragonhound_DEV'"`

#### Respose:
`37|dragonhound_DEV|104.238.221.61|12D3KooWEnrvbqvtTowYMR8FnBeKtryTj9RcXGx8EPpFZHou2ruP`


## stats_nodes

This table stores a record of results returned by registered nodes [tracked for node stats collection](../atomicdex-api-20-dev/start_version_stat_collection.html) in this pubkey's MM2.db

|----------|---------------------|------------------|-----------------------------------|
|    ID    |        Name         |       Type       | Description                       |
|----------|---------------------|------------------|-----------------------------------|
|    0     |         id          |     INTEGER      | Primary Key                       |
|    1     |        name         |   VARCHAR(255)   | Node name                         |
|    2     |       version       |   VARCHAR(255)   | Node AtomicDEX-API (mm2) version  |
|    3     |      timestamp      |     INTEGER      | Timestamp                         |
|    4     |        error        |   VARCHAR(255)   | Error details                     |
 
#### Query:
`sqlite3 ${PATH_TO_MM2_DB_FILE} "SELECT * FROM stats_nodes WHERE name = 'dragonhound_DEV'" LIMIT 3`

#### Response:
```
540|dragonhound_DEV||1638542507|DialFailure
70638|dragonhound_DEV|2.1.4401_mm2.1_87837cb54_Linux_Release|1640270702|
70692|dragonhound_DEV||1640271615|Error on request the peer PeerId("12D3KooWEnrvbqvtTowYMR8FnBeKtryTj9RcXGx8EPpFZHou2ruP"): "Canceled". Request next peer
```