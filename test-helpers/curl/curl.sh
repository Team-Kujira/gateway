# you need to install to programs: curl and envsubst

# You must the following values in your command line
# export ETH_ADDRESS='<put-your-public-key-here>'
# export AVALANCHE_ADDRESS='<put-your-public-key-here>'
# export NEAR_ADDRESS='<put-your-public-key-here'
# export BSC_ADDRESS='put-your-binance-smart-chain-key-here'
# export INJECTIVE_SUBACCOUNTID='put-your-injective-subaccount-id-here'
# export POLYGON_ADDRESS='<put-your-public-key-here>'
# export INJECTIVE_SUBACCOUNTID='put-your-injective-subaccount-id-here'
# export KUJIRA_ADDRESS='put-your-kujira-subaccount-id-here'
# export KUJIRA_MNEMONIC='put-your-kujira-mnemonic-here'

# -k is --insecure, this disables certificate verification and should only be
# used for local development and testing

# Config

curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT https://localhost:15888/ | jq

curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT https://localhost:15888/connectors | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/config_update.json)" https://localhost:15888/config/update | jq

# Network

curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT https://localhost:15888/chain/status | jq

curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/chain/status?chain=ethereum&network=goerli" | jq

curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/chain/status?chain=avalanche&network=avalanche" | jq

curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/chain/status?chain=harmony&network=harmony" | jq

curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/chain/status?chain=cronos&network=mainnet" | jq

curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/chain/status?chain=algorand&network=mainnet" | jq

curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT https://localhost:15888/chain/config | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/network_poll.json)" https://localhost:15888/chain/poll | jq

curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/chain/tokens?chain=ethereum&network=goerli" | jq

curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/chain/tokens?chain=polygon&network=mainnet" | jq

curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/chain/tokens?chain=polygon&network=mumbai" | jq

curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/chain/tokens?chain=cronos&network=mainnet" | jq

curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/chain/tokens?chain=xdc&network=xinfin" | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/network_balances.json)" https://localhost:15888/chain/balances | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/bsc_balances.json)" https://localhost:15888/chain/balances | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/cronos_balances.json)" https://localhost:15888/chain/balances | jq

# Wallet

## add private keys
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/add_algorand_key.json)" https://localhost:15888/wallet/add | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/add_ethereum_key.json)" https://localhost:15888/wallet/add | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/add_avalanche_key.json)" https://localhost:15888/wallet/add | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/add_cronos_key.json)" https://localhost:15888/wallet/add | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/add_near_key.json)" https://localhost:15888/wallet/add | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/add_bsc_key.json)" https://localhost:15888/wallet/add | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/add_injective_key.json)" https://localhost:15888/wallet/add | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/add_polygon_key.json)" https://localhost:15888/wallet/add | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/add_xdc_key.json)" https://localhost:15888/wallet/add | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/add_kujira_key.json)" https://localhost:15888/wallet/add | jq

## read public keys
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT https://localhost:15888/wallet | jq

## sign message
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/wallet/sign?chain=ethereum&network=mainnet&address=$ETH_ADDRESS&message=messageToBeSigned" | jq

## remove keys
curl -s -X DELETE -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/remove_algorand_key.json)" https://localhost:15888/wallet/remove | jq

curl -s -X DELETE -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/remove_ethereum_key.json)" https://localhost:15888/wallet/remove | jq

curl -s -X DELETE -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/remove_avalanche_key.json)" https://localhost:15888/wallet/remove | jq

curl -s -X DELETE -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/remove_cronos_key.json)" https://localhost:15888/wallet/remove | jq

curl -s -X DELETE -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/remove_near_key.json)" https://localhost:15888/wallet/remove | jq

curl -s -X DELETE -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/remove_bsc_key.json)" https://localhost:15888/wallet/remove | jq

curl -s -X DELETE -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/remove_polygon_key.json)" https://localhost:15888/wallet/remove | jq

curl -s -X DELETE -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/remove_xdc_key.json)" https://localhost:15888/wallet/remove | jq

# AMM

## price

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/price_uniswap.json)" https://localhost:15888/amm/price | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/price_traderjoe.json)" https://localhost:15888/amm/price | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/price_defira.json)" https://localhost:15888/amm/price | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/price_mad_meerkat.json)" https://localhost:15888/amm/price | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/price_vvs.json)" https://localhost:15888/amm/price | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/price_ref.json)" https://localhost:15888/amm/price | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/price_bsc_pancakeswap.json)" https://localhost:15888/amm/price | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/price_bsc_sushiswap.json)" https://localhost:15888/amm/price | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/price_polygon_sushiswap_buy.json)" https://localhost:15888/amm/price | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/price_polygon_sushiswap_sell.json)" https://localhost:15888/amm/price | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/price_xdc_xsswap.json)" https://localhost:15888/amm/price | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/price_tinyman.json)" https://localhost:15888/amm/price | jq

## trade

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/eth_uniswap_trade.json)" https://localhost:15888/amm/trade | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/avalanche_traderjoe_trade.json)" https://localhost:15888/amm/trade | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/harmony_testnet_defira_trade.json)" https://localhost:15888/amm/trade | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/cronos_mmf_trade.json)" https://localhost:15888/amm/trade | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/cronos_vvs_trade.json)" https://localhost:15888/amm/trade | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/near_mainnet_ref_trade.json)" https://localhost:15888/amm/trade | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/bsc_pancakeswap_trade.json)" https://localhost:15888/amm/trade | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/bsc_sushiswap_trade.json)" https://localhost:15888/amm/trade | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/polygon_sushiswap_trade_buy.json)" https://localhost:15888/amm/trade | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/polygon_sushiswap_trade_sell.json)" https://localhost:15888/amm/trade | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/algorand_tinyman_trade.json)" https://localhost:15888/amm/trade | jq

## Perp - curie

### Market prices

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/perp_prices.json)" https://localhost:15888/amm/perp/market-prices | jq

### Marker Status
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/perp_prices.json)" https://localhost:15888/amm/perp/market-status | jq

### Marker pairs
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/perp_prices.json)" https://localhost:15888/amm/perp/pairs | jq

### Positon status

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/perp_position.json)" https://localhost:15888/amm/perp/position | jq

### Acct balance

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/perp_position.json)" https://localhost:15888/amm/perp/balance | jq

### Open position

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/perp_trade_open.json)" https://localhost:15888/amm/perp/open | jq

### Close position

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/perp_position.json)" https://localhost:15888/amm/perp/close | jq

## Lping

### add liquidity

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/eth_uniswap_add_liquidity.json)" https://localhost:15888/amm/liquidity/add | jq

### remove liquidity

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/eth_uniswap_position.json)" https://localhost:15888/amm/liquidity/remove | jq

### collect fees

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/eth_uniswap_position.json)" https://localhost:15888/amm/liquidity/collect_fees | jq

### get position

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/eth_uniswap_position.json)" https://localhost:15888/amm/liquidity/position | jq

### get pool price

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/eth_uniswap_pool_price.json)" https://localhost:15888/amm/liquidity/price | jq

# EVM

## nonce
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/eth_nonce.json)" https://localhost:15888/chain/nonce | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/avalanche_nonce.json)" https://localhost:15888/chain/nonce | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/cronos_nonce.json)" https://localhost:15888/chain/nonce | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/bsc_nonce.json)" https://localhost:15888/chain/nonce | jq

## allowances

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/eth_allowances.json)" https://localhost:15888/chain/allowances | jq

## approve

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/eth_approve.json)" https://localhost:15888/chain/approve | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/eth_perp_approve.json)" https://localhost:15888/chain/approve | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/avalanche_approve.json)" https://localhost:15888/chain/approve | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/cronos_approve.json)" https://localhost:15888/chain/approve | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/bsc_approve.json)" https://localhost:15888/chain/approve | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/xdc_approve.json)" https://localhost:15888/chain/approve | jq

# Algorand

## post poll
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/algorand_poll.json)" https://localhost:15888/chain/poll | jq

## get balances
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/algorand_balances.json)" https://localhost:15888/chain/balances | jq

## get assets
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/chain/tokens?network=mainnet&chain=algorand" | jq

## post opt-in
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/algorand_opt_in.json)" https://localhost:15888/chain/approve | jq

# NEAR

## get balances
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/near_network_balances.json)" https://localhost:15888/chain/balances | jq

## get token
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/chain/tokens?chain=near&network=testnet" | jq

## post poll
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/near_post_poll.json)" https://localhost:15888/chain/poll | jq

# XDC and XSSWAP

## check for network status, let's us know that gateway  knows about xdc
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/chain/status?chain=xdc&network=apothem" | jq

## add xdc private key
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/add_xdc_key.json)" https://localhost:15888/wallet/add | jq

## get all wallets
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT https://localhost:15888/wallet | jq

## delete xdc private key
curl -s -X DELETE -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/remove_xdc_key.json)" https://localhost:15888/wallet/remove | jq

## test transaction polling
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/xdc_poll.json)" https://localhost:15888/chain/poll | jq

## get xdc swap price
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/price_xdc_xsswap.json)" https://localhost:15888/amm/price | jq

## buy swap
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/xdc_xsswap_buy.json)" https://localhost:15888/amm/trade | jq

## sell swap
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/xdc_xsswap_sell.json)" https://localhost:15888/amm/trade | jq

## allowances check
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/xdc_xsswap_allowances.json)" https://localhost:15888/chain/allowances | jq

## approve
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/xdc_approve.json)" https://localhost:15888/chain/approve | jq

# CLOB

## injective
### get markets
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/clob/markets?chain=injective&network=mainnet&connector=injective" | jq

### get order books
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/clob/orderBook?chain=injective&network=mainnet&connector=injective&market=WETH-USDC" | jq

### get tickers
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/clob/ticker?chain=injective&network=mainnet&connector=injective" | jq

### get orders
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/clob/orders?chain=injective&network=mainnet&connector=injective&market=INJ-USDT&orderId=XXXX&address=XXXX" | jq

### post orders
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/injective_post_order.json)" https://localhost:15888/clob/orders | jq

### delete orders
curl -s -X DELETE -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/injective_delete_order.json)" https://localhost:15888/clob/orders | jq

### post batch orders create
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/injective_batch_create.json)" https://localhost:15888/clob/batchOrders | jq

### post batch orders delete
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/injective_batch_delete.json)" https://localhost:15888/clob/batchOrders | jq

# CLOB perpetual

## post PERP order
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/injective_post_perp_order.json)" https://localhost:15888/clob/orders | jq

## get markets
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/clob/perp/markets?chain=injective&network=mainnet&connector=injective_perpetual" | jq

## get order books
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/clob/perp/orderBook?chain=injective&network=mainnet&connector=injective_perpetual&market=INJ-USDT" | jq

## get tickers
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/clob/perp/ticker?chain=injective&network=mainnet&connector=injective_perpetual" | jq

## get orders
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/clob/perp/orders?chain=injective&network=mainnet&connector=injective_perpetual&market=INJ-USDT&orderId=XXXX&address=XXXX" | jq

## post order
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/injective_perp_post_order.json)" https://localhost:15888/clob/perp/orders | jq

## delete PERP orders
curl -s -X DELETE -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/injective_perp_delete_order.json)" https://localhost:15888/clob/perp/orders | jq

# batch create order
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/injective_perp_batch_create.json)" https://localhost:15888/clob/perp/batchOrders | jq

# batch delete order
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/injective_perp_batch_delete.json)" https://localhost:15888/clob/perp/batchOrders | jq

## get funding info
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/injective_perp_funding_info.json)" https://localhost:15888/clob/perp/funding/info | jq

## get funding payment
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/injective_perp_funding_payments.json)" https://localhost:15888/clob/perp/funding/payments | jq

## get positions
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/injective_perp_positions.json)" https://localhost:15888/clob/perp/positions | jq

#  get order trades
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/injective_perp_order_trades.json)" https://localhost:15888/clob/perp/order/trades | jq

#  get last trade price
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/clob/perp/lastTradePrice?chain=injective&network=mainnet&connector=injective_perpetual&market=INJ-USDT" | jq

### get balances
## Kujira

### get markets
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/clob/markets?chain=kujira&network=mainnet&connector=kujira" | jq

### get order books
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/clob/orderBook?chain=kujira&network=mainnet&connector=kujira&market=WETH-USDC" | jq

### get tickers
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/clob/ticker?chain=kujira&network=mainnet&connector=kujira" | jq

### get orders
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/clob/orders?chain=kujira&network=mainnet&connector=kujira&market=INJ-USDT&orderId=XXXX&address=XXXX" | jq

### post orders
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_post_order.json)" https://localhost:15888/clob/orders | jq

### delete orders
curl -s -X DELETE -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_delete_order.json)" https://localhost:15888/clob/orders | jq

### post batch orders create
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_batch_create.json)" https://localhost:15888/clob/batchOrders | jq

### post batch orders delete
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_batch_delete.json)" https://localhost:15888/clob/batchOrders | jq

# Chains

## Injective

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/injective_balances.json)" https://localhost:15888/chain/balances | jq

curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/injective_poll.json)" https://localhost:15888/chain/poll | jq

### transfer to bank
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/injective_transfer_to_bank.json)" https://localhost:15888/chain/transfer | jq

### transfer from bank
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/injective_transfer_to_sub.json)" https://localhost:15888/chain/transfer | jq

## dexalot
### get markets
curl % curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/clob/markets?chain=avalanche&network=dexalot&connector=dexalot&market=ALOT-USDC" | jq

### get order books
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/clob/orderBook?chain=avalanche&network=dexalot&connector=dexalot&market=ALOT-USDC" | jq

### get tickers
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/clob/ticker?chain=avalanche&network=dexalot&connector=dexalot" | jq

### get orders
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT "https://localhost:15888/clob/orders?chain=avalanche&network=dexalot&connector=dexalot&market=ALOT-USDC&orderId=XXXX&address=$AVALANCHE_ADDRESS" | jq

### post orders
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/dexalot_post_order.json)" https://localhost:15888/clob/orders | jq

### delete orders
curl -s -X DELETE -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/dexalot_delete_order.json)" https://localhost:15888/clob/orders | jq

### post batch orders create
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/dexalot_batch_create.json)" https://localhost:15888/clob/batchOrders | jq

### post batch orders delete
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/dexalot_batch_delete.json)" https://localhost:15888/clob/batchOrders | jq

### get balances
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/dexalot_balances.json)" https://localhost:15888/chain/balances | jq

### get transaction status
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/dexalot_poll.json)" https://localhost:15888/chain/poll | jq

## Kujira

# /
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_root.json)" https://localhost:15888/kujira | jq

# /token
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_token.json)" https://localhost:15888/kujira/token | jq

# /tokens
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_tokens.json)" https://localhost:15888/kujira/tokens | jq

# /tokens/all
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_all_tokens.json)" https://localhost:15888/kujira/tokens/all | jq

# /market
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_market.json)" https://localhost:15888/kujira/market | jq

# /markets
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_markets.json)" https://localhost:15888/kujira/markets | jq

# /markets/all
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_all_markets.json)" https://localhost:15888/kujira/markets/all | jq

# /orderBook
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_order_book.json)" https://localhost:15888/kujira/orderBook | jq

# /orderBooks
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_order_books.json)" https://localhost:15888/kujira/orderBooks | jq

# /orderBooks/all
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_all_order_books.json)" https://localhost:15888/kujira/orderBooks/all | jq

# /ticker
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_ticker.json)" https://localhost:15888/kujira/ticker | jq

# /tickers
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_tickers.json)" https://localhost:15888/kujira/tickers | jq

# /ticker/all
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_all_tickers.json)" https://localhost:15888/kujira/tickers/all | jq

# /balance
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_balance.json)" https://localhost:15888/kujira/balance | jq

# /balances
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_balances.json)" https://localhost:15888/kujira/balances | jq

# /balances/all
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_all_balances.json)" https://localhost:15888/kujira/balances/all | jq

# /order
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_order.json)" https://localhost:15888/kujira/order | jq

# /orders
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_orders.json)" https://localhost:15888/kujira/orders | jq

# /order (POST)
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_post_order.json)" https://localhost:15888/kujira/order | jq

# /orders (POST)
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_post_orders.json)" https://localhost:15888/kujira/orders | jq

# /order (DELETE)
curl -s -X DELETE -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_delete_order.json)" https://localhost:15888/kujira/order | jq

# /orders (DELETE)
curl -s -X DELETE -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_delete_orders.json)" https://localhost:15888/kujira/orders | jq

# /orders/all (DELETE)
curl -s -X DELETE -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_delete_all_orders.json)" https://localhost:15888/kujira/orders/all | jq

# /market/withdraw (POST)
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_post_market_withdraw.json)" https://localhost:15888/kujira/market/withdraw | jq

# /market/withdraws (POST)
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_post_market_withdraws.json)" https://localhost:15888/kujira/market/withdraws | jq

# /market/withdraws/all (POST)
curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_post_all_markets_withdraws.json)" https://localhost:15888/kujira/market/withdraws/all | jq

# /transaction
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_transaction.json)" https://localhost:15888/kujira/transaction | jq

# /transactions
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_transactions.json)" https://localhost:15888/kujira/transactions | jq

# /wallet/publicKey
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_wallet_public_key.json)" https://localhost:15888/kujira/wallet/publicKey | jq

# /wallet/publicKeys
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_wallets_public_keys.json)" https://localhost:15888/kujira/wallet/publicKeys | jq

# /block/current
curl -s -X GET -k --key $GATEWAY

# /block/current
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_current_block.json)" https://localhost:15888/kujira/block/current | jq

# /fees/estimated
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/kujira_get_estimated_fees.json)" https://localhost:15888/kujira/fees/estimated | jq
