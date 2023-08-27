import { Denom } from 'kujira.js';
import { BigNumber } from 'bignumber.js';
import { IMap } from '../src/connectors/kujira/kujira.types';
import { getNotNullOrThrowError } from '../src/connectors/kujira/kujira.helpers';

it('Withdraw Fee Sum', async () => {
    const obj = {
        "logs": [
            {
                "msg_index": 0,
                "log": "",
                "events": [
                    {
                        "type": "coin_received",
                        "attributes": [
                            {
                                "key": "receiver",
                                "value": "kujira1ga9qk68ne00wfflv7y2v92epaajt59e554uulc"
                            },
                            {
                                "key": "amount",
                                "value": "99924factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk,148698ukuji"
                            },
                            {
                                "key": "receiver",
                                "value": "kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh"
                            },
                            {
                                "key": "amount",
                                "value": "74factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk,111ukuji"
                            }
                        ]
                    },
                    {
                        "type": "coin_spent",
                        "attributes": [
                            {
                                "key": "spender",
                                "value": "kujira193dzcmy7lwuj4eda3zpwwt9ejal00xva0vawcvhgsyyp5cfh6jyq66wfrf"
                            },
                            {
                                "key": "amount",
                                "value": "99924factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk,148698ukuji"
                            },
                            {
                                "key": "spender",
                                "value": "kujira193dzcmy7lwuj4eda3zpwwt9ejal00xva0vawcvhgsyyp5cfh6jyq66wfrf"
                            },
                            {
                                "key": "amount",
                                "value": "74factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk,111ukuji"
                            }
                        ]
                    },
                    {
                        "type": "execute",
                        "attributes": [
                            {
                                "key": "_contract_address",
                                "value": "kujira193dzcmy7lwuj4eda3zpwwt9ejal00xva0vawcvhgsyyp5cfh6jyq66wfrf"
                            }
                        ]
                    },
                    {
                        "type": "message",
                        "attributes": [
                            {
                                "key": "action",
                                "value": "/cosmwasm.wasm.v1.MsgExecuteContract"
                            },
                            {
                                "key": "module",
                                "value": "wasm"
                            },
                            {
                                "key": "sender",
                                "value": "kujira1ga9qk68ne00wfflv7y2v92epaajt59e554uulc"
                            }
                        ]
                    },
                    {
                        "type": "transfer",
                        "attributes": [
                            {
                                "key": "recipient",
                                "value": "kujira1ga9qk68ne00wfflv7y2v92epaajt59e554uulc"
                            },
                            {
                                "key": "sender",
                                "value": "kujira193dzcmy7lwuj4eda3zpwwt9ejal00xva0vawcvhgsyyp5cfh6jyq66wfrf"
                            },
                            {
                                "key": "amount",
                                "value": "99924factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk,148698ukuji"
                            },
                            {
                                "key": "recipient",
                                "value": "kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh"
                            },
                            {
                                "key": "sender",
                                "value": "kujira193dzcmy7lwuj4eda3zpwwt9ejal00xva0vawcvhgsyyp5cfh6jyq66wfrf"
                            },
                            {
                                "key": "amount",
                                "value": "74factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk,111ukuji"
                            }
                        ]
                    },
                    {
                        "type": "wasm",
                        "attributes": [
                            {
                                "key": "_contract_address",
                                "value": "kujira193dzcmy7lwuj4eda3zpwwt9ejal00xva0vawcvhgsyyp5cfh6jyq66wfrf"
                            },
                            {
                                "key": "action",
                                "value": "withdraw_orders"
                            },
                            {
                                "key": "market",
                                "value": "kujira193dzcmy7lwuj4eda3zpwwt9ejal00xva0vawcvhgsyyp5cfh6jyq66wfrf"
                            }
                        ]
                    }
                ]
            }
        ],
        "height": 13577209,
        "transactionHash": "8B5EA314E41A6661C44312CD016E72B007DFF25B192BE8AB4A1ACF08C954FA38",
        "events": [
            {
                "type": "coin_spent",
                "attributes": [
                    {
                        "key": "spender",
                        "value": "kujira1ga9qk68ne00wfflv7y2v92epaajt59e554uulc"
                    },
                    {
                        "key": "amount",
                        "value": "384ukuji"
                    }
                ]
            },
            {
                "type": "coin_received",
                "attributes": [
                    {
                        "key": "receiver",
                        "value": "kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh"
                    },
                    {
                        "key": "amount",
                        "value": "384ukuji"
                    }
                ]
            },
            {
                "type": "transfer",
                "attributes": [
                    {
                        "key": "recipient",
                        "value": "kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh"
                    },
                    {
                        "key": "sender",
                        "value": "kujira1ga9qk68ne00wfflv7y2v92epaajt59e554uulc"
                    },
                    {
                        "key": "amount",
                        "value": "384ukuji"
                    }
                ]
            },
            {
                "type": "message",
                "attributes": [
                    {
                        "key": "sender",
                        "value": "kujira1ga9qk68ne00wfflv7y2v92epaajt59e554uulc"
                    }
                ]
            },
            {
                "type": "tx",
                "attributes": [
                    {
                        "key": "fee",
                        "value": "384ukuji"
                    },
                    {
                        "key": "fee_payer",
                        "value": "kujira1ga9qk68ne00wfflv7y2v92epaajt59e554uulc"
                    }
                ]
            },
            {
                "type": "tx",
                "attributes": [
                    {
                        "key": "acc_seq",
                        "value": "kujira1ga9qk68ne00wfflv7y2v92epaajt59e554uulc/1203"
                    }
                ]
            },
            {
                "type": "tx",
                "attributes": [
                    {
                        "key": "signature",
                        "value": "l/nGaBhnnvLZhBDJ2W5Rwcgne2WSRCIME4GFUgJW8Dty8l/tg+W6O/+BArduluox83WjdG6hIXOnNSEX+TcYWQ=="
                    }
                ]
            },
            {
                "type": "message",
                "attributes": [
                    {
                        "key": "action",
                        "value": "/cosmwasm.wasm.v1.MsgExecuteContract"
                    }
                ]
            },
            {
                "type": "message",
                "attributes": [
                    {
                        "key": "module",
                        "value": "wasm"
                    },
                    {
                        "key": "sender",
                        "value": "kujira1ga9qk68ne00wfflv7y2v92epaajt59e554uulc"
                    }
                ]
            },
            {
                "type": "execute",
                "attributes": [
                    {
                        "key": "_contract_address",
                        "value": "kujira193dzcmy7lwuj4eda3zpwwt9ejal00xva0vawcvhgsyyp5cfh6jyq66wfrf"
                    }
                ]
            },
            {
                "type": "wasm",
                "attributes": [
                    {
                        "key": "_contract_address",
                        "value": "kujira193dzcmy7lwuj4eda3zpwwt9ejal00xva0vawcvhgsyyp5cfh6jyq66wfrf"
                    },
                    {
                        "key": "action",
                        "value": "withdraw_orders"
                    },
                    {
                        "key": "market",
                        "value": "kujira193dzcmy7lwuj4eda3zpwwt9ejal00xva0vawcvhgsyyp5cfh6jyq66wfrf"
                    }
                ]
            },
            {
                "type": "coin_spent",
                "attributes": [
                    {
                        "key": "spender",
                        "value": "kujira193dzcmy7lwuj4eda3zpwwt9ejal00xva0vawcvhgsyyp5cfh6jyq66wfrf"
                    },
                    {
                        "key": "amount",
                        "value": "99924factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk,148698ukuji"
                    }
                ]
            },
            {
                "type": "coin_received",
                "attributes": [
                    {
                        "key": "receiver",
                        "value": "kujira1ga9qk68ne00wfflv7y2v92epaajt59e554uulc"
                    },
                    {
                        "key": "amount",
                        "value": "99924factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk,148698ukuji"
                    }
                ]
            },
            {
                "type": "transfer",
                "attributes": [
                    {
                        "key": "recipient",
                        "value": "kujira1ga9qk68ne00wfflv7y2v92epaajt59e554uulc"
                    },
                    {
                        "key": "sender",
                        "value": "kujira193dzcmy7lwuj4eda3zpwwt9ejal00xva0vawcvhgsyyp5cfh6jyq66wfrf"
                    },
                    {
                        "key": "amount",
                        "value": "99924factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk,148698ukuji"
                    }
                ]
            },
            {
                "type": "coin_spent",
                "attributes": [
                    {
                        "key": "spender",
                        "value": "kujira193dzcmy7lwuj4eda3zpwwt9ejal00xva0vawcvhgsyyp5cfh6jyq66wfrf"
                    },
                    {
                        "key": "amount",
                        "value": "74factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk,111ukuji"
                    }
                ]
            },
            {
                "type": "coin_received",
                "attributes": [
                    {
                        "key": "receiver",
                        "value": "kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh"
                    },
                    {
                        "key": "amount",
                        "value": "74factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk,111ukuji"
                    }
                ]
            },
            {
                "type": "transfer",
                "attributes": [
                    {
                        "key": "recipient",
                        "value": "kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh"
                    },
                    {
                        "key": "sender",
                        "value": "kujira193dzcmy7lwuj4eda3zpwwt9ejal00xva0vawcvhgsyyp5cfh6jyq66wfrf"
                    },
                    {
                        "key": "amount",
                        "value": "74factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk,111ukuji"
                    }
                ]
            }
        ],
        "gasWanted": 306803,
        "gasUsed": 251644
    }
    let amounts = [];
    for (const event of obj.events) {
        for (const attributes of event.attributes) {
            if (attributes.key == "amount") {
                amounts.push(attributes.value)
            }
        }
    }
    amounts = [...new Set(amounts)];
    const amountsByIds = IMap<string, any>().asMutable();
    for (const amount of amounts) {
        const match = amount.match(/^\d+/);
        if (match && match[0].length > 3) {
        } else {
            const initialStringAmount = BigNumber(
                getNotNullOrThrowError<Array<string>>(
                    amount.match(/^\d+/)
                )[0]
            );

            let finalStringAmount = BigNumber(0);
            if (getNotNullOrThrowError<Array<any>>(
                amount.split(",")[0]
            ).length < 45) {
                finalStringAmount = BigNumber(0);
            } else {
                finalStringAmount = BigNumber(
                    getNotNullOrThrowError<Array<string>>(
                        amount.split(",")[1].match(/^\d+/)
                    )[0]
                );
            }

            const tokenId = amount.split(',')[0].split(/^\d+/)[1];
            const denom = Denom.from(tokenId);

            const totalAmount = initialStringAmount.plus(
                finalStringAmount
            ).multipliedBy(Math.pow(10, -denom.decimals));

            amountsByIds.set(tokenId, {
                amount: totalAmount,
                hash: obj.transactionHash,
                denom: {
                    reference: denom.reference,
                    decimals: denom.decimals,
                    symbol: denom.symbol
                }
            })
        }
    }

    console.log(amountsByIds.valueSeq().toArray());
});