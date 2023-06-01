import { IMap } from '../../../../../src/connectors/kujira/kujira.types';
import { printStackTrace } from '../../../helpers';

const data = IMap<string, any>().asMutable();

data.set('["global","fetch"]', () => {
  printStackTrace();

  throw new Error(
    'Trying to use internet while running unit tests is forbidden.'
  );
});

data.set(
  `["kujira","kujiraGetBasicMarkets","[[]]","Kujira Tokens Get token 1 by name"]`,
  IMap<any, any>({
    kujira10qt8wg0n7z740ssvf3urmvgtjhxpyp74hxqvqt7z226gykuus7eqedsw8k: {
      address:
        'kujira10qt8wg0n7z740ssvf3urmvgtjhxpyp74hxqvqt7z226gykuus7eqedsw8k',
      denoms: [
        { reference: 'ukuji', decimals: 6, symbol: 'KUJI' },
        {
          reference:
            'ibc/F91EA2C0A23697A1048E08C2F787E3A58AC6F706A1CD2257A504925158CFC0F3',
          decimals: 6,
          trace: { path: 'transfer/channel-8', base_denom: 'uausdc' },
          symbol: 'axlUSDC',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: 0,
      multiswap: true,
    },
    kujira16084g6pg0qk0646erfcwkstck95m46xc70zgt48usya0juf8lf0syg6yr5: {
      address:
        'kujira16084g6pg0qk0646erfcwkstck95m46xc70zgt48usya0juf8lf0syg6yr5',
      denoms: [
        {
          reference:
            'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
          decimals: 6,
          symbol: 'MNTA',
        },
        {
          reference:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          decimals: 6,
          symbol: 'USK',
        },
      ],
      precision: { decimal_places: 4 },
      decimalDelta: 0,
      multiswap: true,
    },
    kujira1yyca08xqdgvjz0psg56z67ejh9xms6l436u8y58m82npdqqhmmtqdyphsd: {
      address:
        'kujira1yyca08xqdgvjz0psg56z67ejh9xms6l436u8y58m82npdqqhmmtqdyphsd',
      denoms: [
        { reference: 'ukuji', decimals: 6, symbol: 'KUJI' },
        {
          reference:
            'ibc/0607DD7B560C5E40B0E05CB30AECBD12514539D7C986D040FFDEAA0AE9911088',
          decimals: 18,
          trace: { path: 'transfer/channel-3', base_denom: 'atevmos' },
          symbol: 'EVMOS',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: -12,
      multiswap: false,
    },
    kujira14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sl4e867: {
      address:
        'kujira14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sl4e867',
      denoms: [
        { reference: 'ukuji', decimals: 6, symbol: 'KUJI' },
        {
          reference:
            'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          decimals: 6,
          trace: { path: 'transfer/channel-0', base_denom: 'uosmo' },
          symbol: 'OSMO',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: 0,
      multiswap: true,
    },
    kujira1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucseu6vw3: {
      address:
        'kujira1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucseu6vw3',
      denoms: [
        { reference: 'ukuji', decimals: 6, symbol: 'KUJI' },
        {
          reference:
            'ibc/85CE72EE820A66F0ABD5EE3907A34E243E4BE2D6CFAEB4C08DF85BD6C0784FA2',
          decimals: 6,
          trace: { path: 'transfer/channel-8', base_denom: 'uaxl' },
          symbol: 'AXL',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: 0,
      multiswap: true,
    },
    kujira1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqx97zgq: {
      address:
        'kujira1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqx97zgq',
      denoms: [
        { reference: 'ukuji', decimals: 6, symbol: 'KUJI' },
        {
          reference:
            'ibc/A1E1A20C1E4F2F76F301DA625CC476FBD0FCD8CA94DAF60814CA5257B6CD3E3E',
          decimals: 6,
          trace: { path: 'transfer/channel-6', base_denom: 'uluna' },
          symbol: 'LUNA',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: 0,
      multiswap: true,
    },
    kujira1xvjwl3qpp449shx49fpkl22pkyv3vdnq0juc8vhmemm322zp99yqlwrh0g: {
      address:
        'kujira1xvjwl3qpp449shx49fpkl22pkyv3vdnq0juc8vhmemm322zp99yqlwrh0g',
      denoms: [
        {
          reference:
            'factory/kujira1mc8r0mcrye0tcwldn82fyyaa4zv6vve9j2me6h/uhans',
          decimals: 6,
          symbol: 'HANS',
        },
        {
          reference:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          decimals: 6,
          symbol: 'USK',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: 12,
      multiswap: false,
    },
    kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh: {
      address:
        'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
      denoms: [
        { reference: 'ukuji', decimals: 6, symbol: 'KUJI' },
        {
          reference:
            'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          decimals: 6,
          symbol: 'DEMO',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: 0,
      multiswap: true,
      pool: 'kujira19kxd9sqk09zlzqfykk7tzyf70hl009hkekufq8q0ud90ejtqvvxs8xg5cq',
    },
    kujira12cks8zuclf9339tnanpdd8z8ycf5ygdgy885sejc7kyhvryzfyzsvjpasw: {
      address:
        'kujira12cks8zuclf9339tnanpdd8z8ycf5ygdgy885sejc7kyhvryzfyzsvjpasw',
      denoms: [
        {
          reference:
            'ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E',
          decimals: 14,
          trace: { path: 'transfer/channel-28', base_denom: 'usat' },
          symbol: 'nBTC',
        },
        {
          reference:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          decimals: 6,
          symbol: 'USK',
        },
      ],
      precision: { decimal_places: 0 },
      decimalDelta: 8,
      multiswap: false,
    },
    kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6: {
      address:
        'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
      denoms: [
        { reference: 'ukuji', decimals: 6, symbol: 'KUJI' },
        {
          reference:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          decimals: 6,
          symbol: 'USK',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: 0,
      multiswap: true,
      pool: 'kujira16ethwy4fkjn7ymd04ect2wwlq7pwtlxdzw3zg5nvw8smmwsks49sqjg326',
    },
    kujira1chejx4qqtvwxy6684yrsmf6pylancxqhk3vsmtleg5ta3zrffljq4xf685: {
      address:
        'kujira1chejx4qqtvwxy6684yrsmf6pylancxqhk3vsmtleg5ta3zrffljq4xf685',
      denoms: [
        { reference: 'ukuji', decimals: 6, symbol: 'KUJI' },
        {
          reference:
            'factory/kujira12w0ua4eqnkk0aahtnjlt6h3dhxael6x25s507w/local',
          decimals: 6,
          symbol: 'LOCAL',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: 0,
      multiswap: true,
    },
    kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg: {
      address:
        'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
      denoms: [
        {
          reference:
            'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          decimals: 6,
          symbol: 'DEMO',
        },
        {
          reference:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          decimals: 6,
          symbol: 'USK',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: 0,
      multiswap: true,
      pool: 'kujira1a9fha3f02xyzvmanxxl4p3djrnp40ewwkrfkm4gr0exlv028ze3slhv4fn',
      margin: {
        address:
          'kujira1vmnntr773a5p7s4k0t39v6vcgcq87kq2zaw94cy85850n79jx2kq56sqhs',
        owner: 'kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5',
        stable_denom: {
          reference:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          decimals: 6,
          symbol: 'USK',
        },
        stable_denom_admin:
          'kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll',
        collateral_denom: {
          reference:
            'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          decimals: 6,
          symbol: 'DEMO',
        },
        oracle_denom: 'ATOM',
        max_ratio: 0.6,
        mint_fee: 0.0005,
        interest_rate: 0,
        orca_address:
          'kujira1exd7mzv8azf7tpqukm6fzxnvdt7a8kddyz2puwzk9lm7qmlx3vxq0thezm',
        max_debt: { type: 'BigNumber', hex: '0x09184e72a000' },
        liquidation_threshold: { type: 'BigNumber', hex: '0x012a05f200' },
        liquidation_ratio: 0.2,
      },
    },
  }).asMutable()
);
data.set(
  `["kujira","kujiraGetBasicTokens","[[]]","Kujira Tokens Get token 1 by name"]`,
  IMap<any, any>({
    'ibc/A1E1A20C1E4F2F76F301DA625CC476FBD0FCD8CA94DAF60814CA5257B6CD3E3E': {
      reference:
        'ibc/A1E1A20C1E4F2F76F301DA625CC476FBD0FCD8CA94DAF60814CA5257B6CD3E3E',
      decimals: 6,
      trace: { path: 'transfer/channel-6', base_denom: 'uluna' },
      symbol: 'LUNA',
    },
    'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk':
      {
        reference:
          'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        decimals: 6,
        symbol: 'USK',
      },
    'ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E': {
      reference:
        'ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E',
      decimals: 14,
      trace: { path: 'transfer/channel-28', base_denom: 'usat' },
      symbol: 'nBTC',
    },
    'ibc/85CE72EE820A66F0ABD5EE3907A34E243E4BE2D6CFAEB4C08DF85BD6C0784FA2': {
      reference:
        'ibc/85CE72EE820A66F0ABD5EE3907A34E243E4BE2D6CFAEB4C08DF85BD6C0784FA2',
      decimals: 6,
      trace: { path: 'transfer/channel-8', base_denom: 'uaxl' },
      symbol: 'AXL',
    },
    'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta': {
      reference: 'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
      decimals: 6,
      symbol: 'MNTA',
    },
    'ibc/0607DD7B560C5E40B0E05CB30AECBD12514539D7C986D040FFDEAA0AE9911088': {
      reference:
        'ibc/0607DD7B560C5E40B0E05CB30AECBD12514539D7C986D040FFDEAA0AE9911088',
      decimals: 18,
      trace: { path: 'transfer/channel-3', base_denom: 'atevmos' },
      symbol: 'EVMOS',
    },
    'ibc/F91EA2C0A23697A1048E08C2F787E3A58AC6F706A1CD2257A504925158CFC0F3': {
      reference:
        'ibc/F91EA2C0A23697A1048E08C2F787E3A58AC6F706A1CD2257A504925158CFC0F3',
      decimals: 6,
      trace: { path: 'transfer/channel-8', base_denom: 'uausdc' },
      symbol: 'axlUSDC',
    },
    'factory/kujira1mc8r0mcrye0tcwldn82fyyaa4zv6vve9j2me6h/uhans': {
      reference: 'factory/kujira1mc8r0mcrye0tcwldn82fyyaa4zv6vve9j2me6h/uhans',
      decimals: 6,
      symbol: 'HANS',
    },
    'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo': {
      reference: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
      decimals: 6,
      symbol: 'DEMO',
    },
    ukuji: { reference: 'ukuji', decimals: 6, symbol: 'KUJI' },
    'factory/kujira12w0ua4eqnkk0aahtnjlt6h3dhxael6x25s507w/local': {
      reference: 'factory/kujira12w0ua4eqnkk0aahtnjlt6h3dhxael6x25s507w/local',
      decimals: 6,
      symbol: 'LOCAL',
    },
    'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518': {
      reference:
        'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      decimals: 6,
      trace: { path: 'transfer/channel-0', base_denom: 'uosmo' },
      symbol: 'OSMO',
    },
  }).asMutable()
);
data.set(
  `["kujira","kujiraGetBasicMarkets","[[]]","Kujira Markets Get all markets"]`,
  IMap<any, any>({
    kujira10qt8wg0n7z740ssvf3urmvgtjhxpyp74hxqvqt7z226gykuus7eqedsw8k: {
      address:
        'kujira10qt8wg0n7z740ssvf3urmvgtjhxpyp74hxqvqt7z226gykuus7eqedsw8k',
      denoms: [
        { reference: 'ukuji', decimals: 6, symbol: 'KUJI' },
        {
          reference:
            'ibc/F91EA2C0A23697A1048E08C2F787E3A58AC6F706A1CD2257A504925158CFC0F3',
          decimals: 6,
          trace: { path: 'transfer/channel-8', base_denom: 'uausdc' },
          symbol: 'axlUSDC',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: 0,
      multiswap: true,
    },
    kujira16084g6pg0qk0646erfcwkstck95m46xc70zgt48usya0juf8lf0syg6yr5: {
      address:
        'kujira16084g6pg0qk0646erfcwkstck95m46xc70zgt48usya0juf8lf0syg6yr5',
      denoms: [
        {
          reference:
            'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
          decimals: 6,
          symbol: 'MNTA',
        },
        {
          reference:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          decimals: 6,
          symbol: 'USK',
        },
      ],
      precision: { decimal_places: 4 },
      decimalDelta: 0,
      multiswap: true,
    },
    kujira1yyca08xqdgvjz0psg56z67ejh9xms6l436u8y58m82npdqqhmmtqdyphsd: {
      address:
        'kujira1yyca08xqdgvjz0psg56z67ejh9xms6l436u8y58m82npdqqhmmtqdyphsd',
      denoms: [
        { reference: 'ukuji', decimals: 6, symbol: 'KUJI' },
        {
          reference:
            'ibc/0607DD7B560C5E40B0E05CB30AECBD12514539D7C986D040FFDEAA0AE9911088',
          decimals: 18,
          trace: { path: 'transfer/channel-3', base_denom: 'atevmos' },
          symbol: 'EVMOS',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: -12,
      multiswap: false,
    },
    kujira14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sl4e867: {
      address:
        'kujira14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sl4e867',
      denoms: [
        { reference: 'ukuji', decimals: 6, symbol: 'KUJI' },
        {
          reference:
            'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          decimals: 6,
          trace: { path: 'transfer/channel-0', base_denom: 'uosmo' },
          symbol: 'OSMO',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: 0,
      multiswap: true,
    },
    kujira1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucseu6vw3: {
      address:
        'kujira1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucseu6vw3',
      denoms: [
        { reference: 'ukuji', decimals: 6, symbol: 'KUJI' },
        {
          reference:
            'ibc/85CE72EE820A66F0ABD5EE3907A34E243E4BE2D6CFAEB4C08DF85BD6C0784FA2',
          decimals: 6,
          trace: { path: 'transfer/channel-8', base_denom: 'uaxl' },
          symbol: 'AXL',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: 0,
      multiswap: true,
    },
    kujira1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqx97zgq: {
      address:
        'kujira1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqx97zgq',
      denoms: [
        { reference: 'ukuji', decimals: 6, symbol: 'KUJI' },
        {
          reference:
            'ibc/A1E1A20C1E4F2F76F301DA625CC476FBD0FCD8CA94DAF60814CA5257B6CD3E3E',
          decimals: 6,
          trace: { path: 'transfer/channel-6', base_denom: 'uluna' },
          symbol: 'LUNA',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: 0,
      multiswap: true,
    },
    kujira1xvjwl3qpp449shx49fpkl22pkyv3vdnq0juc8vhmemm322zp99yqlwrh0g: {
      address:
        'kujira1xvjwl3qpp449shx49fpkl22pkyv3vdnq0juc8vhmemm322zp99yqlwrh0g',
      denoms: [
        {
          reference:
            'factory/kujira1mc8r0mcrye0tcwldn82fyyaa4zv6vve9j2me6h/uhans',
          decimals: 6,
          symbol: 'HANS',
        },
        {
          reference:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          decimals: 6,
          symbol: 'USK',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: 12,
      multiswap: false,
    },
    kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh: {
      address:
        'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
      denoms: [
        { reference: 'ukuji', decimals: 6, symbol: 'KUJI' },
        {
          reference:
            'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          decimals: 6,
          symbol: 'DEMO',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: 0,
      multiswap: true,
      pool: 'kujira19kxd9sqk09zlzqfykk7tzyf70hl009hkekufq8q0ud90ejtqvvxs8xg5cq',
    },
    kujira12cks8zuclf9339tnanpdd8z8ycf5ygdgy885sejc7kyhvryzfyzsvjpasw: {
      address:
        'kujira12cks8zuclf9339tnanpdd8z8ycf5ygdgy885sejc7kyhvryzfyzsvjpasw',
      denoms: [
        {
          reference:
            'ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E',
          decimals: 14,
          trace: { path: 'transfer/channel-28', base_denom: 'usat' },
          symbol: 'nBTC',
        },
        {
          reference:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          decimals: 6,
          symbol: 'USK',
        },
      ],
      precision: { decimal_places: 0 },
      decimalDelta: 8,
      multiswap: false,
    },
    kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6: {
      address:
        'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
      denoms: [
        { reference: 'ukuji', decimals: 6, symbol: 'KUJI' },
        {
          reference:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          decimals: 6,
          symbol: 'USK',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: 0,
      multiswap: true,
      pool: 'kujira16ethwy4fkjn7ymd04ect2wwlq7pwtlxdzw3zg5nvw8smmwsks49sqjg326',
    },
    kujira1chejx4qqtvwxy6684yrsmf6pylancxqhk3vsmtleg5ta3zrffljq4xf685: {
      address:
        'kujira1chejx4qqtvwxy6684yrsmf6pylancxqhk3vsmtleg5ta3zrffljq4xf685',
      denoms: [
        { reference: 'ukuji', decimals: 6, symbol: 'KUJI' },
        {
          reference:
            'factory/kujira12w0ua4eqnkk0aahtnjlt6h3dhxael6x25s507w/local',
          decimals: 6,
          symbol: 'LOCAL',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: 0,
      multiswap: true,
    },
    kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg: {
      address:
        'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
      denoms: [
        {
          reference:
            'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          decimals: 6,
          symbol: 'DEMO',
        },
        {
          reference:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          decimals: 6,
          symbol: 'USK',
        },
      ],
      precision: { decimal_places: 3 },
      decimalDelta: 0,
      multiswap: true,
      pool: 'kujira1a9fha3f02xyzvmanxxl4p3djrnp40ewwkrfkm4gr0exlv028ze3slhv4fn',
      margin: {
        address:
          'kujira1vmnntr773a5p7s4k0t39v6vcgcq87kq2zaw94cy85850n79jx2kq56sqhs',
        owner: 'kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5',
        stable_denom: {
          reference:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          decimals: 6,
          symbol: 'USK',
        },
        stable_denom_admin:
          'kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll',
        collateral_denom: {
          reference:
            'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          decimals: 6,
          symbol: 'DEMO',
        },
        oracle_denom: 'ATOM',
        max_ratio: 0.6,
        mint_fee: 0.0005,
        interest_rate: 0,
        orca_address:
          'kujira1exd7mzv8azf7tpqukm6fzxnvdt7a8kddyz2puwzk9lm7qmlx3vxq0thezm',
        max_debt: { type: 'BigNumber', hex: '0x09184e72a000' },
        liquidation_threshold: { type: 'BigNumber', hex: '0x012a05f200' },
        liquidation_ratio: 0.2,
      },
    },
  }).asMutable()
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Order books Get order book from market 1 by id"]`,
  {
    base: [
      {
        quote_price: '0.924',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '318968047',
      },
      {
        quote_price: '0.925',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.926',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '637299432',
      },
      {
        quote_price: '0.928',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '954996058',
      },
      {
        quote_price: '0.93',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1272059823',
      },
      {
        quote_price: '0.932',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1588492615',
      },
      {
        quote_price: '0.936',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2219472800',
      },
      {
        quote_price: '0.941',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3161257580',
      },
      {
        quote_price: '0.945',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3786012043',
      },
      {
        quote_price: '0.951',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4718527324',
      },
      {
        quote_price: '0.953',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.956',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5645546445',
      },
      {
        quote_price: '0.96',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6260529718',
      },
      {
        quote_price: '0.964',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.969',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7787488186',
      },
      {
        quote_price: '0.97',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.979',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9299621815',
      },
      {
        quote_price: '0.984',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.985',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.988',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '12280269833',
      },
      {
        quote_price: '1',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '1.117',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '29026092332',
      },
      {
        quote_price: '1.2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '1.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '3',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '4',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '199',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7499952127',
      },
      {
        quote_price: '200',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1241705675',
      },
      {
        quote_price: '210.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3000000',
      },
      {
        quote_price: '298',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '340',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '348',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '600000001',
      },
      {
        quote_price: '349',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '950346001',
      },
      {
        quote_price: '350',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '78004798',
      },
      {
        quote_price: '358',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '372',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '21000000',
      },
      {
        quote_price: '380',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '396',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '398',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '399',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '34000000',
      },
      {
        quote_price: '400',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '193852001',
      },
      {
        quote_price: '420',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14556000',
      },
      {
        quote_price: '480',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8311000',
      },
      {
        quote_price: '500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '47905000',
      },
      {
        quote_price: '600',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '749',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '800',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '62000',
      },
      {
        quote_price: '890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14400000',
      },
      {
        quote_price: '1500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1583',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '80000',
      },
      {
        quote_price: '1889',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '712757000',
      },
      {
        quote_price: '1890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '1900',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '140613000',
      },
      {
        quote_price: '1999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9010000',
      },
      {
        quote_price: '2500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '2990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '300000000',
      },
      {
        quote_price: '4500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '38000000',
      },
      {
        quote_price: '5000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '31000000',
      },
      {
        quote_price: '9000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4991000',
      },
      {
        quote_price: '9998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7180000',
      },
      {
        quote_price: '9999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200490002',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100',
      },
      {
        quote_price: '10000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8000000',
      },
      {
        quote_price: '24500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '29500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '41000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '70000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '77777',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '85000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '92000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '98000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000000',
      },
      {
        quote_price: '100000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2540000',
      },
      {
        quote_price: '150000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '186000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '200000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '225000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '400000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000',
      },
      {
        quote_price: '500000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '550550',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '650000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7000000',
      },
      {
        quote_price: '770000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '880000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '900000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '201000000',
      },
      {
        quote_price: '973007',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '35000000',
      },
      {
        quote_price: '990990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '999998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '1000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '368020000',
      },
      {
        quote_price: '5000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '10000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '30000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '80000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '90000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '95000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '1000000000000000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '22226974000',
      },
    ],
    quote: [
      {
        quote_price: '0.921',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '294453803',
      },
      {
        quote_price: '0.92',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.919',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '588319874',
      },
      {
        quote_price: '0.918',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.917',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '881599970',
      },
      {
        quote_price: '0.915',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1174295843',
      },
      {
        quote_price: '0.913',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1466409237',
      },
      {
        quote_price: '0.91',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2048895528',
      },
      {
        quote_price: '0.904',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2918299571',
      },
      {
        quote_price: '0.901',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '3495038617',
      },
      {
        quote_price: '0.896',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4355885567',
      },
      {
        quote_price: '0.89',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5211658763',
      },
      {
        quote_price: '0.887',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5779377583',
      },
      {
        quote_price: '0.878',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '7188981872',
      },
      {
        quote_price: '0.87',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8584900682',
      },
      {
        quote_price: '0.858',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.857',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.855',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1000000000',
      },
      {
        quote_price: '0.854',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.853',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '11336471413',
      },
      {
        quote_price: '0.851',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.85',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.849',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.829',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.8',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '110000000',
      },
      {
        quote_price: '0.789',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.783',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.762',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '26795296069',
      },
      {
        quote_price: '0.738',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.699',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.666',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.634',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.599',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4',
      },
      {
        quote_price: '0.5',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '113000008',
      },
      {
        quote_price: '0.424',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.422',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.418',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.41',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.4',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000001',
      },
      {
        quote_price: '0.3',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000',
      },
      {
        quote_price: '0.21',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.17',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '93114000',
      },
      {
        quote_price: '0.16',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8000000000',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1031069000',
      },
      {
        quote_price: '0.055',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.01',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.005',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '107987001',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Order books Get order book from market 1 by name"]`,
  {
    base: [
      {
        quote_price: '0.924',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '318968047',
      },
      {
        quote_price: '0.925',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.926',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '637299432',
      },
      {
        quote_price: '0.928',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '954996058',
      },
      {
        quote_price: '0.93',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1272059823',
      },
      {
        quote_price: '0.932',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1588492615',
      },
      {
        quote_price: '0.936',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2219472800',
      },
      {
        quote_price: '0.941',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3161257580',
      },
      {
        quote_price: '0.945',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3786012043',
      },
      {
        quote_price: '0.951',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4718527324',
      },
      {
        quote_price: '0.953',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.956',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5645546445',
      },
      {
        quote_price: '0.96',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6260529718',
      },
      {
        quote_price: '0.964',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.969',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7787488186',
      },
      {
        quote_price: '0.97',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.979',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9299621815',
      },
      {
        quote_price: '0.984',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.985',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.988',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '12280269833',
      },
      {
        quote_price: '1',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '1.117',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '29026092332',
      },
      {
        quote_price: '1.2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '1.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '3',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '4',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '199',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7499952127',
      },
      {
        quote_price: '200',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1241705675',
      },
      {
        quote_price: '210.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3000000',
      },
      {
        quote_price: '298',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '340',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '348',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '600000001',
      },
      {
        quote_price: '349',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '950346001',
      },
      {
        quote_price: '350',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '78004798',
      },
      {
        quote_price: '358',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '372',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '21000000',
      },
      {
        quote_price: '380',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '396',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '398',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '399',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '34000000',
      },
      {
        quote_price: '400',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '193852001',
      },
      {
        quote_price: '420',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14556000',
      },
      {
        quote_price: '480',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8311000',
      },
      {
        quote_price: '500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '47905000',
      },
      {
        quote_price: '600',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '749',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '800',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '62000',
      },
      {
        quote_price: '890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14400000',
      },
      {
        quote_price: '1500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1583',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '80000',
      },
      {
        quote_price: '1889',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '712757000',
      },
      {
        quote_price: '1890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '1900',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '140613000',
      },
      {
        quote_price: '1999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9010000',
      },
      {
        quote_price: '2500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '2990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '300000000',
      },
      {
        quote_price: '4500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '38000000',
      },
      {
        quote_price: '5000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '31000000',
      },
      {
        quote_price: '9000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4991000',
      },
      {
        quote_price: '9998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7180000',
      },
      {
        quote_price: '9999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200490002',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100',
      },
      {
        quote_price: '10000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8000000',
      },
      {
        quote_price: '24500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '29500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '41000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '70000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '77777',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '85000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '92000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '98000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000000',
      },
      {
        quote_price: '100000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2540000',
      },
      {
        quote_price: '150000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '186000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '200000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '225000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '400000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000',
      },
      {
        quote_price: '500000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '550550',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '650000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7000000',
      },
      {
        quote_price: '770000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '880000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '900000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '201000000',
      },
      {
        quote_price: '973007',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '35000000',
      },
      {
        quote_price: '990990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '999998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '1000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '368020000',
      },
      {
        quote_price: '5000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '10000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '30000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '80000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '90000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '95000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '1000000000000000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '22226974000',
      },
    ],
    quote: [
      {
        quote_price: '0.921',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '294453803',
      },
      {
        quote_price: '0.92',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.919',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '588319874',
      },
      {
        quote_price: '0.918',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.917',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '881599970',
      },
      {
        quote_price: '0.915',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1174295843',
      },
      {
        quote_price: '0.913',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1466409237',
      },
      {
        quote_price: '0.91',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2048895528',
      },
      {
        quote_price: '0.904',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2918299571',
      },
      {
        quote_price: '0.901',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '3495038617',
      },
      {
        quote_price: '0.896',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4355885567',
      },
      {
        quote_price: '0.89',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5211658763',
      },
      {
        quote_price: '0.887',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5779377583',
      },
      {
        quote_price: '0.878',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '7188981872',
      },
      {
        quote_price: '0.87',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8584900682',
      },
      {
        quote_price: '0.858',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.857',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.855',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1000000000',
      },
      {
        quote_price: '0.854',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.853',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '11336471413',
      },
      {
        quote_price: '0.851',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.85',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.849',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.829',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.8',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '110000000',
      },
      {
        quote_price: '0.789',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.783',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.762',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '26795296069',
      },
      {
        quote_price: '0.738',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.699',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.666',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.634',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.599',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4',
      },
      {
        quote_price: '0.5',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '113000008',
      },
      {
        quote_price: '0.424',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.422',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.418',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.41',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.4',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000001',
      },
      {
        quote_price: '0.3',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000',
      },
      {
        quote_price: '0.21',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.17',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '93114000',
      },
      {
        quote_price: '0.16',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8000000000',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1031069000',
      },
      {
        quote_price: '0.055',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.01',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.005',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '107987001',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Order books Get order books from the markets 2 and 3 by ids"]`,
  {
    base: [
      {
        quote_price: '5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7738151',
      },
      {
        quote_price: '11',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000',
      },
    ],
    quote: [
      {
        quote_price: '0.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '327231702',
      },
      {
        quote_price: '0.816',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '455963209',
      },
      {
        quote_price: '0.808',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '635156750',
      },
      {
        quote_price: '0.796',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '901015219',
      },
      {
        quote_price: '0.781',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1338007600',
      },
      {
        quote_price: '0.758',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1757249982',
      },
      {
        quote_price: '0.728',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2152631228',
      },
      {
        quote_price: '0.692',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3358104715',
      },
      {
        quote_price: '0.639',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '4835670790',
      },
      {
        quote_price: '0.57',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '490310000',
      },
      {
        quote_price: '0.567',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.56',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.229',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.15',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2353453444',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1100000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Order books Get order books from the markets 2 and 3 by ids"]`,
  {
    base: [
      {
        quote_price: '11.221',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24790063',
      },
      {
        quote_price: '11.222',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.227',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.232',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.237',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.242',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.243',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24765273',
      },
      {
        quote_price: '11.246',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.251',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.258',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.259',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '49481016',
      },
      {
        quote_price: '11.291',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.296',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.312',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24691027',
      },
      {
        quote_price: '11.315',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.32',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.325',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.344',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.351',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.38',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '123331680',
      },
      {
        quote_price: '11.553',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '245430043',
      },
      {
        quote_price: '11.909',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '485951486',
      },
      {
        quote_price: '12.088',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '12.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '238116228',
      },
      {
        quote_price: '13.056',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1178675331',
      },
      {
        quote_price: '15.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2239483129',
      },
      {
        quote_price: '24.274',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '6046604448',
      },
      {
        quote_price: '9999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2000000',
      },
    ],
    quote: [
      {
        quote_price: '10.979',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '10.978',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '275148478',
      },
      {
        quote_price: '10.956',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274873330',
      },
      {
        quote_price: '10.923',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '549196914',
      },
      {
        quote_price: '10.89',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274049260',
      },
      {
        quote_price: '10.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1368876054',
      },
      {
        quote_price: '10.662',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2724063348',
      },
      {
        quote_price: '10.343',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '5393645429',
      },
      {
        quote_price: '10.033',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2642886260',
      },
      {
        quote_price: '9.435',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '13082286989',
      },
      {
        quote_price: '8.063',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '24856345279',
      },
      {
        quote_price: '5.074',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '67112132254',
      },
      {
        quote_price: '1.333',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11923296614',
      },
      {
        quote_price: '1.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11996500000',
      },
      {
        quote_price: '1.161',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '839000',
      },
      {
        quote_price: '1.133',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '844308',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Order books Get order books from the markets 2 and 3 by names"]`,
  {
    base: [
      {
        quote_price: '5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7738151',
      },
      {
        quote_price: '11',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000',
      },
    ],
    quote: [
      {
        quote_price: '0.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '327231702',
      },
      {
        quote_price: '0.816',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '455963209',
      },
      {
        quote_price: '0.808',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '635156750',
      },
      {
        quote_price: '0.796',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '901015219',
      },
      {
        quote_price: '0.781',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1338007600',
      },
      {
        quote_price: '0.758',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1757249982',
      },
      {
        quote_price: '0.728',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2152631228',
      },
      {
        quote_price: '0.692',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3358104715',
      },
      {
        quote_price: '0.639',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '4835670790',
      },
      {
        quote_price: '0.57',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '490310000',
      },
      {
        quote_price: '0.567',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.56',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.229',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.15',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2353453444',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1100000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Order books Get order books from the markets 2 and 3 by names"]`,
  {
    base: [
      {
        quote_price: '11.221',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24790063',
      },
      {
        quote_price: '11.222',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.227',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.232',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.237',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.242',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.243',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24765273',
      },
      {
        quote_price: '11.246',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.251',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.258',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.259',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '49481016',
      },
      {
        quote_price: '11.291',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.296',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.312',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24691027',
      },
      {
        quote_price: '11.315',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.32',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.325',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.344',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.351',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.38',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '123331680',
      },
      {
        quote_price: '11.553',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '245430043',
      },
      {
        quote_price: '11.909',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '485951486',
      },
      {
        quote_price: '12.088',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '12.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '238116228',
      },
      {
        quote_price: '13.056',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1178675331',
      },
      {
        quote_price: '15.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2239483129',
      },
      {
        quote_price: '24.274',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '6046604448',
      },
      {
        quote_price: '9999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2000000',
      },
    ],
    quote: [
      {
        quote_price: '10.979',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '10.978',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '275148478',
      },
      {
        quote_price: '10.956',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274873330',
      },
      {
        quote_price: '10.923',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '549196914',
      },
      {
        quote_price: '10.89',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274049260',
      },
      {
        quote_price: '10.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1368876054',
      },
      {
        quote_price: '10.662',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2724063348',
      },
      {
        quote_price: '10.343',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '5393645429',
      },
      {
        quote_price: '10.033',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2642886260',
      },
      {
        quote_price: '9.435',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '13082286989',
      },
      {
        quote_price: '8.063',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '24856345279',
      },
      {
        quote_price: '5.074',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '67112132254',
      },
      {
        quote_price: '1.333',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11923296614',
      },
      {
        quote_price: '1.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11996500000',
      },
      {
        quote_price: '1.161',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '839000',
      },
      {
        quote_price: '1.133',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '844308',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Order books Get all order books"]`,
  {
    base: [
      {
        quote_price: '0.924',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '318968047',
      },
      {
        quote_price: '0.925',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.926',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '637299432',
      },
      {
        quote_price: '0.928',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '954996058',
      },
      {
        quote_price: '0.93',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1272059823',
      },
      {
        quote_price: '0.932',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1588492615',
      },
      {
        quote_price: '0.936',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2219472800',
      },
      {
        quote_price: '0.941',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3161257580',
      },
      {
        quote_price: '0.945',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3786012043',
      },
      {
        quote_price: '0.951',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4718527324',
      },
      {
        quote_price: '0.953',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.956',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5645546445',
      },
      {
        quote_price: '0.96',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6260529718',
      },
      {
        quote_price: '0.964',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.969',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7787488186',
      },
      {
        quote_price: '0.97',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.979',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9299621815',
      },
      {
        quote_price: '0.984',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.985',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.988',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '12280269833',
      },
      {
        quote_price: '1',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '1.117',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '29026092332',
      },
      {
        quote_price: '1.2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '1.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '3',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '4',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '199',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7499952127',
      },
      {
        quote_price: '200',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1241705675',
      },
      {
        quote_price: '210.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3000000',
      },
      {
        quote_price: '298',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '340',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '348',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '600000001',
      },
      {
        quote_price: '349',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '950346001',
      },
      {
        quote_price: '350',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '78004798',
      },
      {
        quote_price: '358',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '372',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '21000000',
      },
      {
        quote_price: '380',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '396',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '398',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '399',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '34000000',
      },
      {
        quote_price: '400',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '193852001',
      },
      {
        quote_price: '420',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14556000',
      },
      {
        quote_price: '480',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8311000',
      },
      {
        quote_price: '500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '47905000',
      },
      {
        quote_price: '600',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '749',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '800',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '62000',
      },
      {
        quote_price: '890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14400000',
      },
      {
        quote_price: '1500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1583',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '80000',
      },
      {
        quote_price: '1889',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '712757000',
      },
      {
        quote_price: '1890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '1900',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '140613000',
      },
      {
        quote_price: '1999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9010000',
      },
      {
        quote_price: '2500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '2990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '300000000',
      },
      {
        quote_price: '4500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '38000000',
      },
      {
        quote_price: '5000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '31000000',
      },
      {
        quote_price: '9000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4991000',
      },
      {
        quote_price: '9998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7180000',
      },
      {
        quote_price: '9999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200490002',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100',
      },
      {
        quote_price: '10000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8000000',
      },
      {
        quote_price: '24500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '29500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '41000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '70000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '77777',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '85000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '92000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '98000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000000',
      },
      {
        quote_price: '100000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2540000',
      },
      {
        quote_price: '150000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '186000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '200000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '225000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '400000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000',
      },
      {
        quote_price: '500000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '550550',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '650000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7000000',
      },
      {
        quote_price: '770000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '880000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '900000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '201000000',
      },
      {
        quote_price: '973007',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '35000000',
      },
      {
        quote_price: '990990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '999998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '1000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '368020000',
      },
      {
        quote_price: '5000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '10000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '30000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '80000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '90000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '95000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '1000000000000000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '22226974000',
      },
    ],
    quote: [
      {
        quote_price: '0.921',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '294453803',
      },
      {
        quote_price: '0.92',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.919',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '588319874',
      },
      {
        quote_price: '0.918',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.917',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '881599970',
      },
      {
        quote_price: '0.915',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1174295843',
      },
      {
        quote_price: '0.913',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1466409237',
      },
      {
        quote_price: '0.91',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2048895528',
      },
      {
        quote_price: '0.904',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2918299571',
      },
      {
        quote_price: '0.901',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '3495038617',
      },
      {
        quote_price: '0.896',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4355885567',
      },
      {
        quote_price: '0.89',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5211658763',
      },
      {
        quote_price: '0.887',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5779377583',
      },
      {
        quote_price: '0.878',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '7188981872',
      },
      {
        quote_price: '0.87',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8584900682',
      },
      {
        quote_price: '0.858',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.857',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.855',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1000000000',
      },
      {
        quote_price: '0.854',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.853',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '11336471413',
      },
      {
        quote_price: '0.851',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.85',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.849',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.829',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.8',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '110000000',
      },
      {
        quote_price: '0.789',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.783',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.762',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '26795296069',
      },
      {
        quote_price: '0.738',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.699',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.666',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.634',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.599',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4',
      },
      {
        quote_price: '0.5',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '113000008',
      },
      {
        quote_price: '0.424',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.422',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.418',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.41',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.4',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000001',
      },
      {
        quote_price: '0.3',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000',
      },
      {
        quote_price: '0.21',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.17',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '93114000',
      },
      {
        quote_price: '0.16',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8000000000',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1031069000',
      },
      {
        quote_price: '0.055',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.01',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.005',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '107987001',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Order books Get all order books"]`,
  {
    base: [
      {
        quote_price: '5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7738151',
      },
      {
        quote_price: '11',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000',
      },
    ],
    quote: [
      {
        quote_price: '0.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '327231702',
      },
      {
        quote_price: '0.816',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '455963209',
      },
      {
        quote_price: '0.808',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '635156750',
      },
      {
        quote_price: '0.796',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '901015219',
      },
      {
        quote_price: '0.781',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1338007600',
      },
      {
        quote_price: '0.758',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1757249982',
      },
      {
        quote_price: '0.728',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2152631228',
      },
      {
        quote_price: '0.692',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3358104715',
      },
      {
        quote_price: '0.639',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '4835670790',
      },
      {
        quote_price: '0.57',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '490310000',
      },
      {
        quote_price: '0.567',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.56',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.229',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.15',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2353453444',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1100000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Order books Get all order books"]`,
  {
    base: [
      {
        quote_price: '11.221',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24790063',
      },
      {
        quote_price: '11.222',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.227',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.232',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.237',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.242',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.243',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24765273',
      },
      {
        quote_price: '11.246',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.251',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.258',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.259',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '49481016',
      },
      {
        quote_price: '11.291',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.296',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.312',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24691027',
      },
      {
        quote_price: '11.315',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.32',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.325',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.344',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.351',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.38',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '123331680',
      },
      {
        quote_price: '11.553',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '245430043',
      },
      {
        quote_price: '11.909',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '485951486',
      },
      {
        quote_price: '12.088',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '12.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '238116228',
      },
      {
        quote_price: '13.056',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1178675331',
      },
      {
        quote_price: '15.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2239483129',
      },
      {
        quote_price: '24.274',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '6046604448',
      },
      {
        quote_price: '9999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2000000',
      },
    ],
    quote: [
      {
        quote_price: '10.979',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '10.978',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '275148478',
      },
      {
        quote_price: '10.956',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274873330',
      },
      {
        quote_price: '10.923',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '549196914',
      },
      {
        quote_price: '10.89',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274049260',
      },
      {
        quote_price: '10.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1368876054',
      },
      {
        quote_price: '10.662',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2724063348',
      },
      {
        quote_price: '10.343',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '5393645429',
      },
      {
        quote_price: '10.033',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2642886260',
      },
      {
        quote_price: '9.435',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '13082286989',
      },
      {
        quote_price: '8.063',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '24856345279',
      },
      {
        quote_price: '5.074',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '67112132254',
      },
      {
        quote_price: '1.333',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11923296614',
      },
      {
        quote_price: '1.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11996500000',
      },
      {
        quote_price: '1.161',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '839000',
      },
      {
        quote_price: '1.133',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '844308',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Tickers Get ticker from market 1 by id"]`,
  {
    base: [
      {
        quote_price: '0.924',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '318968047',
      },
      {
        quote_price: '0.925',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.926',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '637299432',
      },
      {
        quote_price: '0.928',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '954996058',
      },
      {
        quote_price: '0.93',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1272059823',
      },
      {
        quote_price: '0.932',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1588492615',
      },
      {
        quote_price: '0.936',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2219472800',
      },
      {
        quote_price: '0.941',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3161257580',
      },
      {
        quote_price: '0.945',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3786012043',
      },
      {
        quote_price: '0.951',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4718527324',
      },
      {
        quote_price: '0.953',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.956',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5645546445',
      },
      {
        quote_price: '0.96',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6260529718',
      },
      {
        quote_price: '0.964',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.969',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7787488186',
      },
      {
        quote_price: '0.97',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.979',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9299621815',
      },
      {
        quote_price: '0.984',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.985',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.988',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '12280269833',
      },
      {
        quote_price: '1',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '1.117',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '29026092332',
      },
      {
        quote_price: '1.2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '1.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '3',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '4',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '199',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7499952127',
      },
      {
        quote_price: '200',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1241705675',
      },
      {
        quote_price: '210.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3000000',
      },
      {
        quote_price: '298',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '340',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '348',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '600000001',
      },
      {
        quote_price: '349',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '950346001',
      },
      {
        quote_price: '350',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '78004798',
      },
      {
        quote_price: '358',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '372',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '21000000',
      },
      {
        quote_price: '380',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '396',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '398',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '399',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '34000000',
      },
      {
        quote_price: '400',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '193852001',
      },
      {
        quote_price: '420',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14556000',
      },
      {
        quote_price: '480',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8311000',
      },
      {
        quote_price: '500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '47905000',
      },
      {
        quote_price: '600',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '749',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '800',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '62000',
      },
      {
        quote_price: '890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14400000',
      },
      {
        quote_price: '1500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1583',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '80000',
      },
      {
        quote_price: '1889',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '712757000',
      },
      {
        quote_price: '1890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '1900',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '140613000',
      },
      {
        quote_price: '1999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9010000',
      },
      {
        quote_price: '2500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '2990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '300000000',
      },
      {
        quote_price: '4500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '38000000',
      },
      {
        quote_price: '5000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '31000000',
      },
      {
        quote_price: '9000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4991000',
      },
      {
        quote_price: '9998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7180000',
      },
      {
        quote_price: '9999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200490002',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100',
      },
      {
        quote_price: '10000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8000000',
      },
      {
        quote_price: '24500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '29500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '41000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '70000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '77777',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '85000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '92000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '98000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000000',
      },
      {
        quote_price: '100000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2540000',
      },
      {
        quote_price: '150000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '186000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '200000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '225000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '400000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000',
      },
      {
        quote_price: '500000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '550550',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '650000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7000000',
      },
      {
        quote_price: '770000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '880000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '900000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '201000000',
      },
      {
        quote_price: '973007',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '35000000',
      },
      {
        quote_price: '990990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '999998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '1000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '368020000',
      },
      {
        quote_price: '5000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '10000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '30000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '80000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '90000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '95000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '1000000000000000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '22226974000',
      },
    ],
    quote: [
      {
        quote_price: '0.921',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '294453803',
      },
      {
        quote_price: '0.92',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.919',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '588319874',
      },
      {
        quote_price: '0.918',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.917',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '881599970',
      },
      {
        quote_price: '0.915',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1174295843',
      },
      {
        quote_price: '0.913',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1466409237',
      },
      {
        quote_price: '0.91',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2048895528',
      },
      {
        quote_price: '0.904',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2918299571',
      },
      {
        quote_price: '0.901',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '3495038617',
      },
      {
        quote_price: '0.896',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4355885567',
      },
      {
        quote_price: '0.89',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5211658763',
      },
      {
        quote_price: '0.887',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5779377583',
      },
      {
        quote_price: '0.878',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '7188981872',
      },
      {
        quote_price: '0.87',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8584900682',
      },
      {
        quote_price: '0.858',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.857',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.855',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1000000000',
      },
      {
        quote_price: '0.854',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.853',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '11336471413',
      },
      {
        quote_price: '0.851',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.85',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.849',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.829',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.8',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '110000000',
      },
      {
        quote_price: '0.789',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.783',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.762',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '26795296069',
      },
      {
        quote_price: '0.738',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.699',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.666',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.634',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.599',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4',
      },
      {
        quote_price: '0.5',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '113000008',
      },
      {
        quote_price: '0.424',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.422',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.418',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.41',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.4',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000001',
      },
      {
        quote_price: '0.3',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000',
      },
      {
        quote_price: '0.21',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.17',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '93114000',
      },
      {
        quote_price: '0.16',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8000000000',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1031069000',
      },
      {
        quote_price: '0.055',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.01',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.005',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '107987001',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]",null]`,
  {
    base: [
      {
        quote_price: '0.924',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '318968047',
      },
      {
        quote_price: '0.925',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.926',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '637299432',
      },
      {
        quote_price: '0.928',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '954996058',
      },
      {
        quote_price: '0.93',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1272059823',
      },
      {
        quote_price: '0.932',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1588492615',
      },
      {
        quote_price: '0.936',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2219472800',
      },
      {
        quote_price: '0.941',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3161257580',
      },
      {
        quote_price: '0.945',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3786012043',
      },
      {
        quote_price: '0.951',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4718527324',
      },
      {
        quote_price: '0.953',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.956',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5645546445',
      },
      {
        quote_price: '0.96',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6260529718',
      },
      {
        quote_price: '0.964',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.969',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7787488186',
      },
      {
        quote_price: '0.97',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.979',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9299621815',
      },
      {
        quote_price: '0.984',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.985',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.988',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '12280269833',
      },
      {
        quote_price: '1',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '1.117',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '29026092332',
      },
      {
        quote_price: '1.2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '1.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '3',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '4',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '199',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7499952127',
      },
      {
        quote_price: '200',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1241705675',
      },
      {
        quote_price: '210.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3000000',
      },
      {
        quote_price: '298',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '340',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '348',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '600000001',
      },
      {
        quote_price: '349',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '950346001',
      },
      {
        quote_price: '350',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '78004798',
      },
      {
        quote_price: '358',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '372',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '21000000',
      },
      {
        quote_price: '380',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '396',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '398',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '399',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '34000000',
      },
      {
        quote_price: '400',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '193852001',
      },
      {
        quote_price: '420',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14556000',
      },
      {
        quote_price: '480',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8311000',
      },
      {
        quote_price: '500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '47905000',
      },
      {
        quote_price: '600',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '749',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '800',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '62000',
      },
      {
        quote_price: '890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14400000',
      },
      {
        quote_price: '1500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1583',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '80000',
      },
      {
        quote_price: '1889',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '712757000',
      },
      {
        quote_price: '1890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '1900',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '140613000',
      },
      {
        quote_price: '1999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9010000',
      },
      {
        quote_price: '2500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '2990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '300000000',
      },
      {
        quote_price: '4500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '38000000',
      },
      {
        quote_price: '5000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '31000000',
      },
      {
        quote_price: '9000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4991000',
      },
      {
        quote_price: '9998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7180000',
      },
      {
        quote_price: '9999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200490002',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100',
      },
      {
        quote_price: '10000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8000000',
      },
      {
        quote_price: '24500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '29500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '41000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '70000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '77777',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '85000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '92000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '98000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000000',
      },
      {
        quote_price: '100000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2540000',
      },
      {
        quote_price: '150000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '186000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '200000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '225000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '400000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000',
      },
      {
        quote_price: '500000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '550550',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '650000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7000000',
      },
      {
        quote_price: '770000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '880000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '900000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '201000000',
      },
      {
        quote_price: '973007',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '35000000',
      },
      {
        quote_price: '990990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '999998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '1000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '368020000',
      },
      {
        quote_price: '5000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '10000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '30000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '80000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '90000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '95000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '1000000000000000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '22226974000',
      },
    ],
    quote: [
      {
        quote_price: '0.921',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '294453803',
      },
      {
        quote_price: '0.92',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.919',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '588319874',
      },
      {
        quote_price: '0.918',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.917',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '881599970',
      },
      {
        quote_price: '0.915',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1174295843',
      },
      {
        quote_price: '0.913',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1466409237',
      },
      {
        quote_price: '0.91',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2048895528',
      },
      {
        quote_price: '0.904',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2918299571',
      },
      {
        quote_price: '0.901',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '3495038617',
      },
      {
        quote_price: '0.896',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4355885567',
      },
      {
        quote_price: '0.89',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5211658763',
      },
      {
        quote_price: '0.887',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5779377583',
      },
      {
        quote_price: '0.878',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '7188981872',
      },
      {
        quote_price: '0.87',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8584900682',
      },
      {
        quote_price: '0.858',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.857',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.855',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1000000000',
      },
      {
        quote_price: '0.854',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.853',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '11336471413',
      },
      {
        quote_price: '0.851',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.85',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.849',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.829',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.8',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '110000000',
      },
      {
        quote_price: '0.789',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.783',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.762',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '26795296069',
      },
      {
        quote_price: '0.738',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.699',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.666',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.634',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.599',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4',
      },
      {
        quote_price: '0.5',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '113000008',
      },
      {
        quote_price: '0.424',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.422',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.418',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.41',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.4',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000001',
      },
      {
        quote_price: '0.3',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000',
      },
      {
        quote_price: '0.21',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.17',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '93114000',
      },
      {
        quote_price: '0.16',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8000000000',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1031069000',
      },
      {
        quote_price: '0.055',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.01',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.005',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '107987001',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Tickers Get tickers from markets 2 and 3 by ids"]`,
  {
    base: [
      {
        quote_price: '5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7738151',
      },
      {
        quote_price: '11',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000',
      },
    ],
    quote: [
      {
        quote_price: '0.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '327231702',
      },
      {
        quote_price: '0.816',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '455963209',
      },
      {
        quote_price: '0.808',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '635156750',
      },
      {
        quote_price: '0.796',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '901015219',
      },
      {
        quote_price: '0.781',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1338007600',
      },
      {
        quote_price: '0.758',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1757249982',
      },
      {
        quote_price: '0.728',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2152631228',
      },
      {
        quote_price: '0.692',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3358104715',
      },
      {
        quote_price: '0.639',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '4835670790',
      },
      {
        quote_price: '0.57',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '490310000',
      },
      {
        quote_price: '0.567',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.56',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.229',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.15',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2353453444',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1100000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Tickers Get tickers from markets 2 and 3 by ids"]`,
  {
    base: [
      {
        quote_price: '11.221',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24790063',
      },
      {
        quote_price: '11.222',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.227',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.232',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.237',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.242',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.243',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24765273',
      },
      {
        quote_price: '11.246',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.251',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.258',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.259',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '49481016',
      },
      {
        quote_price: '11.291',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.296',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.312',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24691027',
      },
      {
        quote_price: '11.315',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.32',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.325',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.344',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.351',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.38',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '123331680',
      },
      {
        quote_price: '11.553',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '245430043',
      },
      {
        quote_price: '11.909',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '485951486',
      },
      {
        quote_price: '12.088',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '12.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '238116228',
      },
      {
        quote_price: '13.056',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1178675331',
      },
      {
        quote_price: '15.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2239483129',
      },
      {
        quote_price: '24.274',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '6046604448',
      },
      {
        quote_price: '9999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2000000',
      },
    ],
    quote: [
      {
        quote_price: '10.979',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '10.978',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '275148478',
      },
      {
        quote_price: '10.956',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274873330',
      },
      {
        quote_price: '10.923',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '549196914',
      },
      {
        quote_price: '10.89',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274049260',
      },
      {
        quote_price: '10.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1368876054',
      },
      {
        quote_price: '10.662',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2724063348',
      },
      {
        quote_price: '10.343',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '5393645429',
      },
      {
        quote_price: '10.033',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2642886260',
      },
      {
        quote_price: '9.435',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '13082286989',
      },
      {
        quote_price: '8.063',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '24856345279',
      },
      {
        quote_price: '5.074',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '67112132254',
      },
      {
        quote_price: '1.333',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11923296614',
      },
      {
        quote_price: '1.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11996500000',
      },
      {
        quote_price: '1.161',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '839000',
      },
      {
        quote_price: '1.133',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '844308',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]",null]`,
  {
    base: [
      {
        quote_price: '5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7738151',
      },
      {
        quote_price: '11',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000',
      },
    ],
    quote: [
      {
        quote_price: '0.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '327231702',
      },
      {
        quote_price: '0.816',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '455963209',
      },
      {
        quote_price: '0.808',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '635156750',
      },
      {
        quote_price: '0.796',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '901015219',
      },
      {
        quote_price: '0.781',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1338007600',
      },
      {
        quote_price: '0.758',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1757249982',
      },
      {
        quote_price: '0.728',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2152631228',
      },
      {
        quote_price: '0.692',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3358104715',
      },
      {
        quote_price: '0.639',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '4835670790',
      },
      {
        quote_price: '0.57',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '490310000',
      },
      {
        quote_price: '0.567',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.56',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.229',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.15',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2353453444',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1100000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]",null]`,
  {
    base: [
      {
        quote_price: '11.221',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24790063',
      },
      {
        quote_price: '11.222',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.227',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.232',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.237',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.242',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.243',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24765273',
      },
      {
        quote_price: '11.246',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.251',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.258',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.259',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '49481016',
      },
      {
        quote_price: '11.291',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.296',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.312',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24691027',
      },
      {
        quote_price: '11.315',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.32',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.325',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.344',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.351',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.38',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '123331680',
      },
      {
        quote_price: '11.553',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '245430043',
      },
      {
        quote_price: '11.909',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '485951486',
      },
      {
        quote_price: '12.088',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '12.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '238116228',
      },
      {
        quote_price: '13.056',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1178675331',
      },
      {
        quote_price: '15.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2239483129',
      },
      {
        quote_price: '24.274',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '6046604448',
      },
      {
        quote_price: '9999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2000000',
      },
    ],
    quote: [
      {
        quote_price: '10.979',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '10.978',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '275148478',
      },
      {
        quote_price: '10.956',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274873330',
      },
      {
        quote_price: '10.923',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '549196914',
      },
      {
        quote_price: '10.89',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274049260',
      },
      {
        quote_price: '10.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1368876054',
      },
      {
        quote_price: '10.662',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2724063348',
      },
      {
        quote_price: '10.343',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '5393645429',
      },
      {
        quote_price: '10.033',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2642886260',
      },
      {
        quote_price: '9.435',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '13082286989',
      },
      {
        quote_price: '8.063',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '24856345279',
      },
      {
        quote_price: '5.074',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '67112132254',
      },
      {
        quote_price: '1.333',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11923296614',
      },
      {
        quote_price: '1.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11996500000',
      },
      {
        quote_price: '1.161',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '839000',
      },
      {
        quote_price: '1.133',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '844308',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Tickers Get all tickers"]`,
  {
    base: [
      {
        quote_price: '0.924',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '318968047',
      },
      {
        quote_price: '0.925',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.926',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '637299432',
      },
      {
        quote_price: '0.928',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '954996058',
      },
      {
        quote_price: '0.93',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1272059823',
      },
      {
        quote_price: '0.932',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1588492615',
      },
      {
        quote_price: '0.936',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2219472800',
      },
      {
        quote_price: '0.941',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3161257580',
      },
      {
        quote_price: '0.945',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3786012043',
      },
      {
        quote_price: '0.951',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4718527324',
      },
      {
        quote_price: '0.953',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.956',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5645546445',
      },
      {
        quote_price: '0.96',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6260529718',
      },
      {
        quote_price: '0.964',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.969',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7787488186',
      },
      {
        quote_price: '0.97',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.979',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9299621815',
      },
      {
        quote_price: '0.984',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.985',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.988',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '12280269833',
      },
      {
        quote_price: '1',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '1.117',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '29026092332',
      },
      {
        quote_price: '1.2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '1.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '3',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '4',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '199',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7499952127',
      },
      {
        quote_price: '200',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1241705675',
      },
      {
        quote_price: '210.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3000000',
      },
      {
        quote_price: '298',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '340',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '348',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '600000001',
      },
      {
        quote_price: '349',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '950346001',
      },
      {
        quote_price: '350',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '78004798',
      },
      {
        quote_price: '358',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '372',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '21000000',
      },
      {
        quote_price: '380',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '396',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '398',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '399',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '34000000',
      },
      {
        quote_price: '400',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '193852001',
      },
      {
        quote_price: '420',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14556000',
      },
      {
        quote_price: '480',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8311000',
      },
      {
        quote_price: '500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '47905000',
      },
      {
        quote_price: '600',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '749',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '800',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '62000',
      },
      {
        quote_price: '890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14400000',
      },
      {
        quote_price: '1500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1583',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '80000',
      },
      {
        quote_price: '1889',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '712757000',
      },
      {
        quote_price: '1890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '1900',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '140613000',
      },
      {
        quote_price: '1999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9010000',
      },
      {
        quote_price: '2500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '2990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '300000000',
      },
      {
        quote_price: '4500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '38000000',
      },
      {
        quote_price: '5000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '31000000',
      },
      {
        quote_price: '9000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4991000',
      },
      {
        quote_price: '9998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7180000',
      },
      {
        quote_price: '9999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200490002',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100',
      },
      {
        quote_price: '10000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8000000',
      },
      {
        quote_price: '24500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '29500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '41000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '70000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '77777',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '85000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '92000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '98000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000000',
      },
      {
        quote_price: '100000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2540000',
      },
      {
        quote_price: '150000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '186000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '200000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '225000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '400000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000',
      },
      {
        quote_price: '500000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '550550',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '650000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7000000',
      },
      {
        quote_price: '770000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '880000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '900000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '201000000',
      },
      {
        quote_price: '973007',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '35000000',
      },
      {
        quote_price: '990990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '999998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '1000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '368020000',
      },
      {
        quote_price: '5000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '10000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '30000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '80000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '90000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '95000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '1000000000000000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '22226974000',
      },
    ],
    quote: [
      {
        quote_price: '0.921',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '294453803',
      },
      {
        quote_price: '0.92',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.919',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '588319874',
      },
      {
        quote_price: '0.918',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.917',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '881599970',
      },
      {
        quote_price: '0.915',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1174295843',
      },
      {
        quote_price: '0.913',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1466409237',
      },
      {
        quote_price: '0.91',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2048895528',
      },
      {
        quote_price: '0.904',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2918299571',
      },
      {
        quote_price: '0.901',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '3495038617',
      },
      {
        quote_price: '0.896',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4355885567',
      },
      {
        quote_price: '0.89',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5211658763',
      },
      {
        quote_price: '0.887',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5779377583',
      },
      {
        quote_price: '0.878',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '7188981872',
      },
      {
        quote_price: '0.87',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8584900682',
      },
      {
        quote_price: '0.858',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.857',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.855',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1000000000',
      },
      {
        quote_price: '0.854',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.853',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '11336471413',
      },
      {
        quote_price: '0.851',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.85',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.849',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.829',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.8',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '110000000',
      },
      {
        quote_price: '0.789',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.783',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.762',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '26795296069',
      },
      {
        quote_price: '0.738',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.699',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.666',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.634',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.599',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4',
      },
      {
        quote_price: '0.5',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '113000008',
      },
      {
        quote_price: '0.424',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.422',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.418',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.41',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.4',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000001',
      },
      {
        quote_price: '0.3',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000',
      },
      {
        quote_price: '0.21',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.17',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '93114000',
      },
      {
        quote_price: '0.16',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8000000000',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1031069000',
      },
      {
        quote_price: '0.055',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.01',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.005',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '107987001',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Tickers Get all tickers"]`,
  {
    base: [
      {
        quote_price: '5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7738151',
      },
      {
        quote_price: '11',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000',
      },
    ],
    quote: [
      {
        quote_price: '0.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '327231702',
      },
      {
        quote_price: '0.816',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '455963209',
      },
      {
        quote_price: '0.808',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '635156750',
      },
      {
        quote_price: '0.796',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '901015219',
      },
      {
        quote_price: '0.781',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1338007600',
      },
      {
        quote_price: '0.758',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1757249982',
      },
      {
        quote_price: '0.728',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2152631228',
      },
      {
        quote_price: '0.692',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3358104715',
      },
      {
        quote_price: '0.639',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '4835670790',
      },
      {
        quote_price: '0.57',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '490310000',
      },
      {
        quote_price: '0.567',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.56',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.229',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.15',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2353453444',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1100000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Tickers Get all tickers"]`,
  {
    base: [
      {
        quote_price: '11.221',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24790063',
      },
      {
        quote_price: '11.222',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.227',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.232',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.237',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.242',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.243',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24765273',
      },
      {
        quote_price: '11.246',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.251',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.258',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.259',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '49481016',
      },
      {
        quote_price: '11.291',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.296',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.312',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24691027',
      },
      {
        quote_price: '11.315',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.32',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.325',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.344',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.351',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.38',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '123331680',
      },
      {
        quote_price: '11.553',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '245430043',
      },
      {
        quote_price: '11.909',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '485951486',
      },
      {
        quote_price: '12.088',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '12.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '238116228',
      },
      {
        quote_price: '13.056',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1178675331',
      },
      {
        quote_price: '15.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2239483129',
      },
      {
        quote_price: '24.274',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '6046604448',
      },
      {
        quote_price: '9999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2000000',
      },
    ],
    quote: [
      {
        quote_price: '10.979',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '10.978',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '275148478',
      },
      {
        quote_price: '10.956',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274873330',
      },
      {
        quote_price: '10.923',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '549196914',
      },
      {
        quote_price: '10.89',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274049260',
      },
      {
        quote_price: '10.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1368876054',
      },
      {
        quote_price: '10.662',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2724063348',
      },
      {
        quote_price: '10.343',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '5393645429',
      },
      {
        quote_price: '10.033',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2642886260',
      },
      {
        quote_price: '9.435',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '13082286989',
      },
      {
        quote_price: '8.063',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '24856345279',
      },
      {
        quote_price: '5.074',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '67112132254',
      },
      {
        quote_price: '1.333',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11923296614',
      },
      {
        quote_price: '1.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11996500000',
      },
      {
        quote_price: '1.161',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '839000',
      },
      {
        quote_price: '1.133',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '844308',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraStargateClientGetAllBalances","[[\"1\"],\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get balance of token 1 by id"]`,
  [
    {
      denom: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
      amount: '79969779797',
    },
    {
      denom:
        'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
      amount: '75303684605',
    },
    { denom: 'ukuji', amount: '2277739107' },
  ]
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get balance of token 1 by id"]`,
  {
    orders: [
      {
        idx: '178130',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685657537247716078',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get balance of token 1 by id"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get balance of token 1 by id"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira User Get balance of token 1 by id"]`,
  {
    base: [
      {
        quote_price: '0.924',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '318968047',
      },
      {
        quote_price: '0.925',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.926',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '637299432',
      },
      {
        quote_price: '0.928',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '954996058',
      },
      {
        quote_price: '0.93',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1272059823',
      },
      {
        quote_price: '0.932',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1588492615',
      },
      {
        quote_price: '0.936',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2219472800',
      },
      {
        quote_price: '0.941',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3161257580',
      },
      {
        quote_price: '0.945',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3786012043',
      },
      {
        quote_price: '0.951',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4718527324',
      },
      {
        quote_price: '0.953',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.956',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5645546445',
      },
      {
        quote_price: '0.96',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6260529718',
      },
      {
        quote_price: '0.964',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.969',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7787488186',
      },
      {
        quote_price: '0.97',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.979',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9299621815',
      },
      {
        quote_price: '0.984',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.985',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.988',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '12280269833',
      },
      {
        quote_price: '1',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '1.117',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '29026092332',
      },
      {
        quote_price: '1.2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '1.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '3',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '4',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '199',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7499952127',
      },
      {
        quote_price: '200',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1241705675',
      },
      {
        quote_price: '210.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3000000',
      },
      {
        quote_price: '298',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '340',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '348',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '600000001',
      },
      {
        quote_price: '349',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '950346001',
      },
      {
        quote_price: '350',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '78004798',
      },
      {
        quote_price: '358',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '372',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '21000000',
      },
      {
        quote_price: '380',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '396',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '398',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '399',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '34000000',
      },
      {
        quote_price: '400',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '193852001',
      },
      {
        quote_price: '420',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14556000',
      },
      {
        quote_price: '480',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8311000',
      },
      {
        quote_price: '500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '47905000',
      },
      {
        quote_price: '600',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '749',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '800',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '62000',
      },
      {
        quote_price: '890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14400000',
      },
      {
        quote_price: '1500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1583',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '80000',
      },
      {
        quote_price: '1889',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '712757000',
      },
      {
        quote_price: '1890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '1900',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '140613000',
      },
      {
        quote_price: '1999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9010000',
      },
      {
        quote_price: '2500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '2990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '300000000',
      },
      {
        quote_price: '4500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '38000000',
      },
      {
        quote_price: '5000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '31000000',
      },
      {
        quote_price: '9000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4991000',
      },
      {
        quote_price: '9998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7180000',
      },
      {
        quote_price: '9999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200490002',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100',
      },
      {
        quote_price: '10000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8000000',
      },
      {
        quote_price: '24500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '29500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '41000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '70000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '77777',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '85000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '92000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '98000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000000',
      },
      {
        quote_price: '100000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2540000',
      },
      {
        quote_price: '150000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '186000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '200000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '225000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '400000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000',
      },
      {
        quote_price: '500000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '550550',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '650000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7000000',
      },
      {
        quote_price: '770000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '880000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '900000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '201000000',
      },
      {
        quote_price: '973007',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '35000000',
      },
      {
        quote_price: '990990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '999998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '1000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '368020000',
      },
      {
        quote_price: '5000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '10000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '30000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '80000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '90000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '95000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '1000000000000000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '22226974000',
      },
    ],
    quote: [
      {
        quote_price: '0.921',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '294453803',
      },
      {
        quote_price: '0.92',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.919',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '588319874',
      },
      {
        quote_price: '0.918',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.917',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '881599970',
      },
      {
        quote_price: '0.915',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1174295843',
      },
      {
        quote_price: '0.913',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1466409237',
      },
      {
        quote_price: '0.91',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2048895528',
      },
      {
        quote_price: '0.904',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2918299571',
      },
      {
        quote_price: '0.901',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '3495038617',
      },
      {
        quote_price: '0.896',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4355885567',
      },
      {
        quote_price: '0.89',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5211658763',
      },
      {
        quote_price: '0.887',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5779377583',
      },
      {
        quote_price: '0.878',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '7188981872',
      },
      {
        quote_price: '0.87',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8584900682',
      },
      {
        quote_price: '0.858',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.857',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.855',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1000000000',
      },
      {
        quote_price: '0.854',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.853',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '11336471413',
      },
      {
        quote_price: '0.851',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.85',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.849',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.829',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.8',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '110000000',
      },
      {
        quote_price: '0.789',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.783',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.762',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '26795296069',
      },
      {
        quote_price: '0.738',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.699',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.666',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.634',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.599',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4',
      },
      {
        quote_price: '0.5',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '113000008',
      },
      {
        quote_price: '0.424',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.422',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.418',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.41',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.4',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000001',
      },
      {
        quote_price: '0.3',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000',
      },
      {
        quote_price: '0.21',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.17',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '93114000',
      },
      {
        quote_price: '0.16',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8000000000',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1031069000',
      },
      {
        quote_price: '0.055',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.01',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.005',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '107987001',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira User Get balance of token 1 by id"]`,
  {
    base: [
      {
        quote_price: '5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7738151',
      },
      {
        quote_price: '11',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000',
      },
    ],
    quote: [
      {
        quote_price: '0.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '327231702',
      },
      {
        quote_price: '0.816',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '455963209',
      },
      {
        quote_price: '0.808',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '635156750',
      },
      {
        quote_price: '0.796',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '901015219',
      },
      {
        quote_price: '0.781',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1338007600',
      },
      {
        quote_price: '0.758',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1757249982',
      },
      {
        quote_price: '0.728',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2152631228',
      },
      {
        quote_price: '0.692',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3358104715',
      },
      {
        quote_price: '0.639',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '4835670790',
      },
      {
        quote_price: '0.57',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '490310000',
      },
      {
        quote_price: '0.567',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.56',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.229',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.15',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2353453444',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1100000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira User Get balance of token 1 by id"]`,
  {
    base: [
      {
        quote_price: '11.221',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24790063',
      },
      {
        quote_price: '11.222',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.227',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.232',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.237',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.242',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.243',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24765273',
      },
      {
        quote_price: '11.246',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.251',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.258',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.259',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '49481016',
      },
      {
        quote_price: '11.291',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.296',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.312',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24691027',
      },
      {
        quote_price: '11.315',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.32',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.325',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.344',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.351',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.38',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '123331680',
      },
      {
        quote_price: '11.553',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '245430043',
      },
      {
        quote_price: '11.909',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '485951486',
      },
      {
        quote_price: '12.088',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '12.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '238116228',
      },
      {
        quote_price: '13.056',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1178675331',
      },
      {
        quote_price: '15.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2239483129',
      },
      {
        quote_price: '24.274',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '6046604448',
      },
      {
        quote_price: '9999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2000000',
      },
    ],
    quote: [
      {
        quote_price: '10.979',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '10.978',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '275148478',
      },
      {
        quote_price: '10.956',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274873330',
      },
      {
        quote_price: '10.923',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '549196914',
      },
      {
        quote_price: '10.89',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274049260',
      },
      {
        quote_price: '10.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1368876054',
      },
      {
        quote_price: '10.662',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2724063348',
      },
      {
        quote_price: '10.343',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '5393645429',
      },
      {
        quote_price: '10.033',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2642886260',
      },
      {
        quote_price: '9.435',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '13082286989',
      },
      {
        quote_price: '8.063',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '24856345279',
      },
      {
        quote_price: '5.074',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '67112132254',
      },
      {
        quote_price: '1.333',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11923296614',
      },
      {
        quote_price: '1.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11996500000',
      },
      {
        quote_price: '1.161',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '839000',
      },
      {
        quote_price: '1.133',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '844308',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraStargateClientGetAllBalances","[[\"1\"],\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get balance of token 1 by symbol"]`,
  [
    {
      denom: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
      amount: '79969779797',
    },
    {
      denom:
        'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
      amount: '75303684605',
    },
    { denom: 'ukuji', amount: '2277739107' },
  ]
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get balance of token 1 by symbol"]`,
  {
    orders: [
      {
        idx: '178130',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685657537247716078',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get balance of token 1 by symbol"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get balance of token 1 by symbol"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira User Get balance of token 1 by symbol"]`,
  {
    base: [
      {
        quote_price: '0.924',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '318968047',
      },
      {
        quote_price: '0.925',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.926',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '637299432',
      },
      {
        quote_price: '0.928',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '954996058',
      },
      {
        quote_price: '0.93',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1272059823',
      },
      {
        quote_price: '0.932',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1588492615',
      },
      {
        quote_price: '0.936',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2219472800',
      },
      {
        quote_price: '0.941',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3161257580',
      },
      {
        quote_price: '0.945',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3786012043',
      },
      {
        quote_price: '0.951',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4718527324',
      },
      {
        quote_price: '0.953',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.956',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5645546445',
      },
      {
        quote_price: '0.96',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6260529718',
      },
      {
        quote_price: '0.964',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.969',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7787488186',
      },
      {
        quote_price: '0.97',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.979',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9299621815',
      },
      {
        quote_price: '0.984',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.985',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.988',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '12280269833',
      },
      {
        quote_price: '1',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '1.117',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '29026092332',
      },
      {
        quote_price: '1.2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '1.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '3',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '4',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '199',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7499952127',
      },
      {
        quote_price: '200',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1241705675',
      },
      {
        quote_price: '210.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3000000',
      },
      {
        quote_price: '298',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '340',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '348',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '600000001',
      },
      {
        quote_price: '349',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '950346001',
      },
      {
        quote_price: '350',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '78004798',
      },
      {
        quote_price: '358',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '372',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '21000000',
      },
      {
        quote_price: '380',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '396',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '398',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '399',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '34000000',
      },
      {
        quote_price: '400',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '193852001',
      },
      {
        quote_price: '420',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14556000',
      },
      {
        quote_price: '480',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8311000',
      },
      {
        quote_price: '500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '47905000',
      },
      {
        quote_price: '600',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '749',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '800',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '62000',
      },
      {
        quote_price: '890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14400000',
      },
      {
        quote_price: '1500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1583',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '80000',
      },
      {
        quote_price: '1889',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '712757000',
      },
      {
        quote_price: '1890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '1900',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '140613000',
      },
      {
        quote_price: '1999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9010000',
      },
      {
        quote_price: '2500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '2990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '300000000',
      },
      {
        quote_price: '4500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '38000000',
      },
      {
        quote_price: '5000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '31000000',
      },
      {
        quote_price: '9000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4991000',
      },
      {
        quote_price: '9998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7180000',
      },
      {
        quote_price: '9999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200490002',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100',
      },
      {
        quote_price: '10000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8000000',
      },
      {
        quote_price: '24500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '29500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '41000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '70000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '77777',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '85000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '92000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '98000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000000',
      },
      {
        quote_price: '100000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2540000',
      },
      {
        quote_price: '150000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '186000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '200000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '225000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '400000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000',
      },
      {
        quote_price: '500000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '550550',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '650000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7000000',
      },
      {
        quote_price: '770000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '880000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '900000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '201000000',
      },
      {
        quote_price: '973007',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '35000000',
      },
      {
        quote_price: '990990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '999998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '1000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '368020000',
      },
      {
        quote_price: '5000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '10000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '30000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '80000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '90000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '95000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '1000000000000000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '22226974000',
      },
    ],
    quote: [
      {
        quote_price: '0.921',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '294453803',
      },
      {
        quote_price: '0.92',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.919',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '588319874',
      },
      {
        quote_price: '0.918',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.917',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '881599970',
      },
      {
        quote_price: '0.915',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1174295843',
      },
      {
        quote_price: '0.913',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1466409237',
      },
      {
        quote_price: '0.91',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2048895528',
      },
      {
        quote_price: '0.904',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2918299571',
      },
      {
        quote_price: '0.901',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '3495038617',
      },
      {
        quote_price: '0.896',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4355885567',
      },
      {
        quote_price: '0.89',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5211658763',
      },
      {
        quote_price: '0.887',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5779377583',
      },
      {
        quote_price: '0.878',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '7188981872',
      },
      {
        quote_price: '0.87',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8584900682',
      },
      {
        quote_price: '0.858',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.857',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.855',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1000000000',
      },
      {
        quote_price: '0.854',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.853',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '11336471413',
      },
      {
        quote_price: '0.851',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.85',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.849',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.829',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.8',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '110000000',
      },
      {
        quote_price: '0.789',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.783',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.762',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '26795296069',
      },
      {
        quote_price: '0.738',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.699',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.666',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.634',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.599',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4',
      },
      {
        quote_price: '0.5',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '113000008',
      },
      {
        quote_price: '0.424',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.422',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.418',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.41',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.4',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000001',
      },
      {
        quote_price: '0.3',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000',
      },
      {
        quote_price: '0.21',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.17',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '93114000',
      },
      {
        quote_price: '0.16',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8000000000',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1031069000',
      },
      {
        quote_price: '0.055',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.01',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.005',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '107987001',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira User Get balance of token 1 by symbol"]`,
  {
    base: [
      {
        quote_price: '5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7738151',
      },
      {
        quote_price: '11',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000',
      },
    ],
    quote: [
      {
        quote_price: '0.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '327231702',
      },
      {
        quote_price: '0.816',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '455963209',
      },
      {
        quote_price: '0.808',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '635156750',
      },
      {
        quote_price: '0.796',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '901015219',
      },
      {
        quote_price: '0.781',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1338007600',
      },
      {
        quote_price: '0.758',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1757249982',
      },
      {
        quote_price: '0.728',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2152631228',
      },
      {
        quote_price: '0.692',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3358104715',
      },
      {
        quote_price: '0.639',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '4835670790',
      },
      {
        quote_price: '0.57',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '490310000',
      },
      {
        quote_price: '0.567',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.56',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.229',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.15',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2353453444',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1100000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira User Get balance of token 1 by symbol"]`,
  {
    base: [
      {
        quote_price: '11.221',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24790063',
      },
      {
        quote_price: '11.222',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.227',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.232',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.237',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.242',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.243',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24765273',
      },
      {
        quote_price: '11.246',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.251',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.258',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.259',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '49481016',
      },
      {
        quote_price: '11.291',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.296',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.312',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24691027',
      },
      {
        quote_price: '11.315',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.32',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.325',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.344',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.351',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.38',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '123331680',
      },
      {
        quote_price: '11.553',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '245430043',
      },
      {
        quote_price: '11.909',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '485951486',
      },
      {
        quote_price: '12.088',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '12.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '238116228',
      },
      {
        quote_price: '13.056',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1178675331',
      },
      {
        quote_price: '15.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2239483129',
      },
      {
        quote_price: '24.274',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '6046604448',
      },
      {
        quote_price: '9999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2000000',
      },
    ],
    quote: [
      {
        quote_price: '10.979',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '10.978',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '275148478',
      },
      {
        quote_price: '10.956',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274873330',
      },
      {
        quote_price: '10.923',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '549196914',
      },
      {
        quote_price: '10.89',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274049260',
      },
      {
        quote_price: '10.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1368876054',
      },
      {
        quote_price: '10.662',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2724063348',
      },
      {
        quote_price: '10.343',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '5393645429',
      },
      {
        quote_price: '10.033',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2642886260',
      },
      {
        quote_price: '9.435',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '13082286989',
      },
      {
        quote_price: '8.063',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '24856345279',
      },
      {
        quote_price: '5.074',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '67112132254',
      },
      {
        quote_price: '1.333',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11923296614',
      },
      {
        quote_price: '1.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11996500000',
      },
      {
        quote_price: '1.161',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '839000',
      },
      {
        quote_price: '1.133',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '844308',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraStargateClientGetAllBalances","[[\"1\"],\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get balances of tokens 2 and 3 by ids"]`,
  [
    {
      denom: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
      amount: '79969779797',
    },
    {
      denom:
        'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
      amount: '75303684605',
    },
    { denom: 'ukuji', amount: '2277739107' },
  ]
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get balances of tokens 2 and 3 by ids"]`,
  {
    orders: [
      {
        idx: '178130',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685657537247716078',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get balances of tokens 2 and 3 by ids"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get balances of tokens 2 and 3 by ids"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira User Get balances of tokens 2 and 3 by ids"]`,
  {
    base: [
      {
        quote_price: '0.924',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '318968047',
      },
      {
        quote_price: '0.925',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.926',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '637299432',
      },
      {
        quote_price: '0.928',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '954996058',
      },
      {
        quote_price: '0.93',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1272059823',
      },
      {
        quote_price: '0.932',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1588492615',
      },
      {
        quote_price: '0.936',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2219472800',
      },
      {
        quote_price: '0.941',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3161257580',
      },
      {
        quote_price: '0.945',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3786012043',
      },
      {
        quote_price: '0.951',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4718527324',
      },
      {
        quote_price: '0.953',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.956',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5645546445',
      },
      {
        quote_price: '0.96',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6260529718',
      },
      {
        quote_price: '0.964',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.969',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7787488186',
      },
      {
        quote_price: '0.97',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.979',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9299621815',
      },
      {
        quote_price: '0.984',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.985',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.988',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '12280269833',
      },
      {
        quote_price: '1',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '1.117',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '29026092332',
      },
      {
        quote_price: '1.2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '1.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '3',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '4',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '199',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7499952127',
      },
      {
        quote_price: '200',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1241705675',
      },
      {
        quote_price: '210.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3000000',
      },
      {
        quote_price: '298',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '340',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '348',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '600000001',
      },
      {
        quote_price: '349',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '950346001',
      },
      {
        quote_price: '350',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '78004798',
      },
      {
        quote_price: '358',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '372',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '21000000',
      },
      {
        quote_price: '380',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '396',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '398',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '399',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '34000000',
      },
      {
        quote_price: '400',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '193852001',
      },
      {
        quote_price: '420',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14556000',
      },
      {
        quote_price: '480',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8311000',
      },
      {
        quote_price: '500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '47905000',
      },
      {
        quote_price: '600',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '749',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '800',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '62000',
      },
      {
        quote_price: '890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14400000',
      },
      {
        quote_price: '1500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1583',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '80000',
      },
      {
        quote_price: '1889',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '712757000',
      },
      {
        quote_price: '1890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '1900',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '140613000',
      },
      {
        quote_price: '1999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9010000',
      },
      {
        quote_price: '2500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '2990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '300000000',
      },
      {
        quote_price: '4500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '38000000',
      },
      {
        quote_price: '5000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '31000000',
      },
      {
        quote_price: '9000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4991000',
      },
      {
        quote_price: '9998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7180000',
      },
      {
        quote_price: '9999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200490002',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100',
      },
      {
        quote_price: '10000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8000000',
      },
      {
        quote_price: '24500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '29500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '41000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '70000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '77777',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '85000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '92000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '98000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000000',
      },
      {
        quote_price: '100000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2540000',
      },
      {
        quote_price: '150000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '186000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '200000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '225000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '400000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000',
      },
      {
        quote_price: '500000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '550550',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '650000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7000000',
      },
      {
        quote_price: '770000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '880000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '900000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '201000000',
      },
      {
        quote_price: '973007',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '35000000',
      },
      {
        quote_price: '990990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '999998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '1000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '368020000',
      },
      {
        quote_price: '5000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '10000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '30000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '80000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '90000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '95000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '1000000000000000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '22226974000',
      },
    ],
    quote: [
      {
        quote_price: '0.921',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '294453803',
      },
      {
        quote_price: '0.92',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.919',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '588319874',
      },
      {
        quote_price: '0.918',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.917',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '881599970',
      },
      {
        quote_price: '0.915',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1174295843',
      },
      {
        quote_price: '0.913',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1466409237',
      },
      {
        quote_price: '0.91',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2048895528',
      },
      {
        quote_price: '0.904',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2918299571',
      },
      {
        quote_price: '0.901',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '3495038617',
      },
      {
        quote_price: '0.896',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4355885567',
      },
      {
        quote_price: '0.89',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5211658763',
      },
      {
        quote_price: '0.887',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5779377583',
      },
      {
        quote_price: '0.878',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '7188981872',
      },
      {
        quote_price: '0.87',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8584900682',
      },
      {
        quote_price: '0.858',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.857',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.855',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1000000000',
      },
      {
        quote_price: '0.854',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.853',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '11336471413',
      },
      {
        quote_price: '0.851',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.85',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.849',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.829',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.8',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '110000000',
      },
      {
        quote_price: '0.789',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.783',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.762',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '26795296069',
      },
      {
        quote_price: '0.738',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.699',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.666',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.634',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.599',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4',
      },
      {
        quote_price: '0.5',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '113000008',
      },
      {
        quote_price: '0.424',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.422',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.418',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.41',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.4',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000001',
      },
      {
        quote_price: '0.3',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000',
      },
      {
        quote_price: '0.21',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.17',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '93114000',
      },
      {
        quote_price: '0.16',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8000000000',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1031069000',
      },
      {
        quote_price: '0.055',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.01',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.005',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '107987001',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira User Get balances of tokens 2 and 3 by ids"]`,
  {
    base: [
      {
        quote_price: '5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7738151',
      },
      {
        quote_price: '11',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000',
      },
    ],
    quote: [
      {
        quote_price: '0.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '327231702',
      },
      {
        quote_price: '0.816',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '455963209',
      },
      {
        quote_price: '0.808',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '635156750',
      },
      {
        quote_price: '0.796',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '901015219',
      },
      {
        quote_price: '0.781',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1338007600',
      },
      {
        quote_price: '0.758',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1757249982',
      },
      {
        quote_price: '0.728',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2152631228',
      },
      {
        quote_price: '0.692',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3358104715',
      },
      {
        quote_price: '0.639',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '4835670790',
      },
      {
        quote_price: '0.57',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '490310000',
      },
      {
        quote_price: '0.567',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.56',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.229',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.15',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2353453444',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1100000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira User Get balances of tokens 2 and 3 by ids"]`,
  {
    base: [
      {
        quote_price: '11.221',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24790063',
      },
      {
        quote_price: '11.222',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.227',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.232',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.237',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.242',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.243',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24765273',
      },
      {
        quote_price: '11.246',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.251',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.258',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.259',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '49481016',
      },
      {
        quote_price: '11.291',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.296',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.312',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24691027',
      },
      {
        quote_price: '11.315',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.32',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.325',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.344',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.351',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.38',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '123331680',
      },
      {
        quote_price: '11.553',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '245430043',
      },
      {
        quote_price: '11.909',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '485951486',
      },
      {
        quote_price: '12.088',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '12.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '238116228',
      },
      {
        quote_price: '13.056',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1178675331',
      },
      {
        quote_price: '15.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2239483129',
      },
      {
        quote_price: '24.274',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '6046604448',
      },
      {
        quote_price: '9999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2000000',
      },
    ],
    quote: [
      {
        quote_price: '10.979',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '10.978',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '275148478',
      },
      {
        quote_price: '10.956',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274873330',
      },
      {
        quote_price: '10.923',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '549196914',
      },
      {
        quote_price: '10.89',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274049260',
      },
      {
        quote_price: '10.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1368876054',
      },
      {
        quote_price: '10.662',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2724063348',
      },
      {
        quote_price: '10.343',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '5393645429',
      },
      {
        quote_price: '10.033',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2642886260',
      },
      {
        quote_price: '9.435',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '13082286989',
      },
      {
        quote_price: '8.063',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '24856345279',
      },
      {
        quote_price: '5.074',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '67112132254',
      },
      {
        quote_price: '1.333',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11923296614',
      },
      {
        quote_price: '1.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11996500000',
      },
      {
        quote_price: '1.161',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '839000',
      },
      {
        quote_price: '1.133',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '844308',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraStargateClientGetAllBalances","[[\"1\"],\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get balances of tokens 2 and 3 by symbols"]`,
  [
    {
      denom: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
      amount: '79969779797',
    },
    {
      denom:
        'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
      amount: '75303684605',
    },
    { denom: 'ukuji', amount: '2277739107' },
  ]
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get balances of tokens 2 and 3 by symbols"]`,
  {
    orders: [
      {
        idx: '178130',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685657537247716078',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get balances of tokens 2 and 3 by symbols"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get balances of tokens 2 and 3 by symbols"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira User Get balances of tokens 2 and 3 by symbols"]`,
  {
    base: [
      {
        quote_price: '0.924',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '318968047',
      },
      {
        quote_price: '0.925',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.926',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '637299432',
      },
      {
        quote_price: '0.928',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '954996058',
      },
      {
        quote_price: '0.93',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1272059823',
      },
      {
        quote_price: '0.932',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1588492615',
      },
      {
        quote_price: '0.936',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2219472800',
      },
      {
        quote_price: '0.941',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3161257580',
      },
      {
        quote_price: '0.945',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3786012043',
      },
      {
        quote_price: '0.951',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4718527324',
      },
      {
        quote_price: '0.953',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.956',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5645546445',
      },
      {
        quote_price: '0.96',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6260529718',
      },
      {
        quote_price: '0.964',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.969',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7787488186',
      },
      {
        quote_price: '0.97',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.979',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9299621815',
      },
      {
        quote_price: '0.984',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.985',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.988',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '12280269833',
      },
      {
        quote_price: '1',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '1.117',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '29026092332',
      },
      {
        quote_price: '1.2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '1.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '3',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '4',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '199',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7499952127',
      },
      {
        quote_price: '200',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1241705675',
      },
      {
        quote_price: '210.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3000000',
      },
      {
        quote_price: '298',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '340',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '348',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '600000001',
      },
      {
        quote_price: '349',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '950346001',
      },
      {
        quote_price: '350',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '78004798',
      },
      {
        quote_price: '358',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '372',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '21000000',
      },
      {
        quote_price: '380',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '396',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '398',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '399',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '34000000',
      },
      {
        quote_price: '400',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '193852001',
      },
      {
        quote_price: '420',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14556000',
      },
      {
        quote_price: '480',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8311000',
      },
      {
        quote_price: '500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '47905000',
      },
      {
        quote_price: '600',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '749',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '800',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '62000',
      },
      {
        quote_price: '890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14400000',
      },
      {
        quote_price: '1500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1583',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '80000',
      },
      {
        quote_price: '1889',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '712757000',
      },
      {
        quote_price: '1890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '1900',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '140613000',
      },
      {
        quote_price: '1999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9010000',
      },
      {
        quote_price: '2500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '2990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '300000000',
      },
      {
        quote_price: '4500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '38000000',
      },
      {
        quote_price: '5000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '31000000',
      },
      {
        quote_price: '9000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4991000',
      },
      {
        quote_price: '9998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7180000',
      },
      {
        quote_price: '9999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200490002',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100',
      },
      {
        quote_price: '10000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8000000',
      },
      {
        quote_price: '24500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '29500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '41000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '70000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '77777',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '85000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '92000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '98000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000000',
      },
      {
        quote_price: '100000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2540000',
      },
      {
        quote_price: '150000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '186000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '200000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '225000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '400000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000',
      },
      {
        quote_price: '500000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '550550',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '650000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7000000',
      },
      {
        quote_price: '770000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '880000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '900000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '201000000',
      },
      {
        quote_price: '973007',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '35000000',
      },
      {
        quote_price: '990990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '999998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '1000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '368020000',
      },
      {
        quote_price: '5000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '10000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '30000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '80000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '90000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '95000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '1000000000000000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '22226974000',
      },
    ],
    quote: [
      {
        quote_price: '0.921',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '294453803',
      },
      {
        quote_price: '0.92',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.919',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '588319874',
      },
      {
        quote_price: '0.918',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.917',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '881599970',
      },
      {
        quote_price: '0.915',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1174295843',
      },
      {
        quote_price: '0.913',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1466409237',
      },
      {
        quote_price: '0.91',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2048895528',
      },
      {
        quote_price: '0.904',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2918299571',
      },
      {
        quote_price: '0.901',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '3495038617',
      },
      {
        quote_price: '0.896',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4355885567',
      },
      {
        quote_price: '0.89',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5211658763',
      },
      {
        quote_price: '0.887',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5779377583',
      },
      {
        quote_price: '0.878',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '7188981872',
      },
      {
        quote_price: '0.87',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8584900682',
      },
      {
        quote_price: '0.858',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.857',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.855',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1000000000',
      },
      {
        quote_price: '0.854',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.853',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '11336471413',
      },
      {
        quote_price: '0.851',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.85',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.849',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.829',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.8',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '110000000',
      },
      {
        quote_price: '0.789',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.783',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.762',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '26795296069',
      },
      {
        quote_price: '0.738',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.699',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.666',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.634',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.599',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4',
      },
      {
        quote_price: '0.5',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '113000008',
      },
      {
        quote_price: '0.424',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.422',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.418',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.41',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.4',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000001',
      },
      {
        quote_price: '0.3',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000',
      },
      {
        quote_price: '0.21',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.17',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '93114000',
      },
      {
        quote_price: '0.16',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8000000000',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1031069000',
      },
      {
        quote_price: '0.055',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.01',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.005',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '107987001',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira User Get balances of tokens 2 and 3 by symbols"]`,
  {
    base: [
      {
        quote_price: '5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7738151',
      },
      {
        quote_price: '11',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000',
      },
    ],
    quote: [
      {
        quote_price: '0.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '327231702',
      },
      {
        quote_price: '0.816',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '455963209',
      },
      {
        quote_price: '0.808',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '635156750',
      },
      {
        quote_price: '0.796',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '901015219',
      },
      {
        quote_price: '0.781',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1338007600',
      },
      {
        quote_price: '0.758',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1757249982',
      },
      {
        quote_price: '0.728',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2152631228',
      },
      {
        quote_price: '0.692',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3358104715',
      },
      {
        quote_price: '0.639',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '4835670790',
      },
      {
        quote_price: '0.57',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '490310000',
      },
      {
        quote_price: '0.567',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.56',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.229',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.15',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2353453444',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1100000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira User Get balances of tokens 2 and 3 by symbols"]`,
  {
    base: [
      {
        quote_price: '11.221',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24790063',
      },
      {
        quote_price: '11.222',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.227',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.232',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.237',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.242',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.243',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24765273',
      },
      {
        quote_price: '11.246',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.251',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.258',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.259',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '49481016',
      },
      {
        quote_price: '11.291',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.296',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.312',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24691027',
      },
      {
        quote_price: '11.315',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.32',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.325',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.344',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.351',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.38',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '123331680',
      },
      {
        quote_price: '11.553',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '245430043',
      },
      {
        quote_price: '11.909',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '485951486',
      },
      {
        quote_price: '12.088',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '12.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '238116228',
      },
      {
        quote_price: '13.056',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1178675331',
      },
      {
        quote_price: '15.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2239483129',
      },
      {
        quote_price: '24.274',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '6046604448',
      },
      {
        quote_price: '9999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2000000',
      },
    ],
    quote: [
      {
        quote_price: '10.979',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '10.978',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '275148478',
      },
      {
        quote_price: '10.956',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274873330',
      },
      {
        quote_price: '10.923',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '549196914',
      },
      {
        quote_price: '10.89',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274049260',
      },
      {
        quote_price: '10.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1368876054',
      },
      {
        quote_price: '10.662',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2724063348',
      },
      {
        quote_price: '10.343',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '5393645429',
      },
      {
        quote_price: '10.033',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2642886260',
      },
      {
        quote_price: '9.435',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '13082286989',
      },
      {
        quote_price: '8.063',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '24856345279',
      },
      {
        quote_price: '5.074',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '67112132254',
      },
      {
        quote_price: '1.333',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11923296614',
      },
      {
        quote_price: '1.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11996500000',
      },
      {
        quote_price: '1.161',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '839000',
      },
      {
        quote_price: '1.133',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '844308',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraStargateClientGetAllBalances","[[\"1\"],\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get all balances"]`,
  [
    {
      denom: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
      amount: '79969779797',
    },
    {
      denom:
        'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
      amount: '75303684605',
    },
    { denom: 'ukuji', amount: '2277739107' },
  ]
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get all balances"]`,
  {
    orders: [
      {
        idx: '178130',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685657537247716078',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get all balances"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira User Get all balances"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira User Get all balances"]`,
  {
    base: [
      {
        quote_price: '0.924',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '318968047',
      },
      {
        quote_price: '0.925',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.926',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '637299432',
      },
      {
        quote_price: '0.928',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '954996058',
      },
      {
        quote_price: '0.93',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1272059823',
      },
      {
        quote_price: '0.932',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1588492615',
      },
      {
        quote_price: '0.936',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2219472800',
      },
      {
        quote_price: '0.941',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3161257580',
      },
      {
        quote_price: '0.945',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3786012043',
      },
      {
        quote_price: '0.951',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4718527324',
      },
      {
        quote_price: '0.953',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.956',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5645546445',
      },
      {
        quote_price: '0.96',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6260529718',
      },
      {
        quote_price: '0.964',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.969',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7787488186',
      },
      {
        quote_price: '0.97',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.979',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9299621815',
      },
      {
        quote_price: '0.984',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.985',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.988',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '12280269833',
      },
      {
        quote_price: '1',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '1.117',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '29026092332',
      },
      {
        quote_price: '1.2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '1.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '3',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '4',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '199',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7499952127',
      },
      {
        quote_price: '200',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1241705675',
      },
      {
        quote_price: '210.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3000000',
      },
      {
        quote_price: '298',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '340',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '348',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '600000001',
      },
      {
        quote_price: '349',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '950346001',
      },
      {
        quote_price: '350',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '78004798',
      },
      {
        quote_price: '358',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '372',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '21000000',
      },
      {
        quote_price: '380',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '396',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '398',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '399',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '34000000',
      },
      {
        quote_price: '400',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '193852001',
      },
      {
        quote_price: '420',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14556000',
      },
      {
        quote_price: '480',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8311000',
      },
      {
        quote_price: '500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '47905000',
      },
      {
        quote_price: '600',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '749',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '800',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '62000',
      },
      {
        quote_price: '890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14400000',
      },
      {
        quote_price: '1500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1583',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '80000',
      },
      {
        quote_price: '1889',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '712757000',
      },
      {
        quote_price: '1890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '1900',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '140613000',
      },
      {
        quote_price: '1999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9010000',
      },
      {
        quote_price: '2500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '2990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '300000000',
      },
      {
        quote_price: '4500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '38000000',
      },
      {
        quote_price: '5000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '31000000',
      },
      {
        quote_price: '9000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4991000',
      },
      {
        quote_price: '9998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7180000',
      },
      {
        quote_price: '9999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200490002',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100',
      },
      {
        quote_price: '10000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8000000',
      },
      {
        quote_price: '24500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '29500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '41000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '70000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '77777',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '85000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '92000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '98000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000000',
      },
      {
        quote_price: '100000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2540000',
      },
      {
        quote_price: '150000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '186000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '200000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '225000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '400000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000',
      },
      {
        quote_price: '500000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '550550',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '650000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7000000',
      },
      {
        quote_price: '770000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '880000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '900000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '201000000',
      },
      {
        quote_price: '973007',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '35000000',
      },
      {
        quote_price: '990990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '999998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '1000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '368020000',
      },
      {
        quote_price: '5000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '10000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '30000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '80000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '90000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '95000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '1000000000000000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '22226974000',
      },
    ],
    quote: [
      {
        quote_price: '0.921',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '294453803',
      },
      {
        quote_price: '0.92',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.919',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '588319874',
      },
      {
        quote_price: '0.918',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.917',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '881599970',
      },
      {
        quote_price: '0.915',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1174295843',
      },
      {
        quote_price: '0.913',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1466409237',
      },
      {
        quote_price: '0.91',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2048895528',
      },
      {
        quote_price: '0.904',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2918299571',
      },
      {
        quote_price: '0.901',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '3495038617',
      },
      {
        quote_price: '0.896',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4355885567',
      },
      {
        quote_price: '0.89',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5211658763',
      },
      {
        quote_price: '0.887',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5779377583',
      },
      {
        quote_price: '0.878',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '7188981872',
      },
      {
        quote_price: '0.87',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8584900682',
      },
      {
        quote_price: '0.858',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.857',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.855',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1000000000',
      },
      {
        quote_price: '0.854',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.853',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '11336471413',
      },
      {
        quote_price: '0.851',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.85',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.849',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.829',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.8',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '110000000',
      },
      {
        quote_price: '0.789',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.783',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.762',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '26795296069',
      },
      {
        quote_price: '0.738',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.699',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.666',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.634',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.599',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4',
      },
      {
        quote_price: '0.5',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '113000008',
      },
      {
        quote_price: '0.424',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.422',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.418',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.41',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.4',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000001',
      },
      {
        quote_price: '0.3',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000',
      },
      {
        quote_price: '0.21',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.17',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '93114000',
      },
      {
        quote_price: '0.16',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8000000000',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1031069000',
      },
      {
        quote_price: '0.055',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.01',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.005',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '107987001',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira User Get all balances"]`,
  {
    base: [
      {
        quote_price: '5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7738151',
      },
      {
        quote_price: '11',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000',
      },
    ],
    quote: [
      {
        quote_price: '0.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '327231702',
      },
      {
        quote_price: '0.816',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '455963209',
      },
      {
        quote_price: '0.808',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '635156750',
      },
      {
        quote_price: '0.796',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '901015219',
      },
      {
        quote_price: '0.781',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1338007600',
      },
      {
        quote_price: '0.758',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1757249982',
      },
      {
        quote_price: '0.728',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2152631228',
      },
      {
        quote_price: '0.692',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3358104715',
      },
      {
        quote_price: '0.639',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '4835670790',
      },
      {
        quote_price: '0.57',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '490310000',
      },
      {
        quote_price: '0.567',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.56',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.229',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.15',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2353453444',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1100000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira User Get all balances"]`,
  {
    base: [
      {
        quote_price: '11.221',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24790063',
      },
      {
        quote_price: '11.222',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.227',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.232',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.237',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.242',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.243',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24765273',
      },
      {
        quote_price: '11.246',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.251',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.258',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.259',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '49481016',
      },
      {
        quote_price: '11.291',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.296',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.312',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24691027',
      },
      {
        quote_price: '11.315',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.32',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.325',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.344',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.351',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.38',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '123331680',
      },
      {
        quote_price: '11.553',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '245430043',
      },
      {
        quote_price: '11.909',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '485951486',
      },
      {
        quote_price: '12.088',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '12.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '238116228',
      },
      {
        quote_price: '13.056',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1178675331',
      },
      {
        quote_price: '15.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2239483129',
      },
      {
        quote_price: '24.274',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '6046604448',
      },
      {
        quote_price: '9999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2000000',
      },
    ],
    quote: [
      {
        quote_price: '10.979',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '10.978',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '275148478',
      },
      {
        quote_price: '10.956',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274873330',
      },
      {
        quote_price: '10.923',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '549196914',
      },
      {
        quote_price: '10.89',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274049260',
      },
      {
        quote_price: '10.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1368876054',
      },
      {
        quote_price: '10.662',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2724063348',
      },
      {
        quote_price: '10.343',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '5393645429',
      },
      {
        quote_price: '10.033',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2642886260',
      },
      {
        quote_price: '9.435',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '13082286989',
      },
      {
        quote_price: '8.063',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '24856345279',
      },
      {
        quote_price: '5.074',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '67112132254',
      },
      {
        quote_price: '1.333',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11923296614',
      },
      {
        quote_price: '1.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11996500000',
      },
      {
        quote_price: '1.161',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '839000',
      },
      {
        quote_price: '1.133',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '844308',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraStargateClientGetTx","[[\"1\"],\"D5C9B4FBD06482C1B40CEA3B1D10E445049F1F19CA5531265FC523973CC65EF9\"]",null]`,
  {
    height: 13248211,
    txIndex: 0,
    hash: 'D5C9B4FBD06482C1B40CEA3B1D10E445049F1F19CA5531265FC523973CC65EF9',
    code: 0,
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '273ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '273ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '273ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '273ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/1827',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'zX2BIYwNp/+UNw+Iut+3NbKiQW9qMdsrISl3fV26+zgqIcthnaTvIFJeeN1Ad0Go4FDvRCcfz/yb+VRZnRr8/A==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'action', value: 'retract_orders' },
          {
            key: 'market',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'amount',
            value:
              '100000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '100000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'sender',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'amount',
            value:
              '100000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
    ],
    rawLog:
      '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1ukuji"},{"key":"receiver","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"100000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1ukuji"},{"key":"spender","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"100000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1ukuji"},{"key":"recipient","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"sender","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"100000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"action","value":"retract_orders"},{"key":"market","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"}]}]}]',
    tx: new Uint8Array(
      Object.values({
        '0': 10,
        '1': 216,
        '2': 1,
        '3': 10,
        '4': 213,
        '5': 1,
        '6': 10,
        '7': 36,
        '8': 47,
        '9': 99,
        '10': 111,
        '11': 115,
        '12': 109,
        '13': 119,
        '14': 97,
        '15': 115,
        '16': 109,
        '17': 46,
        '18': 119,
        '19': 97,
        '20': 115,
        '21': 109,
        '22': 46,
        '23': 118,
        '24': 49,
        '25': 46,
        '26': 77,
        '27': 115,
        '28': 103,
        '29': 69,
        '30': 120,
        '31': 101,
        '32': 99,
        '33': 117,
        '34': 116,
        '35': 101,
        '36': 67,
        '37': 111,
        '38': 110,
        '39': 116,
        '40': 114,
        '41': 97,
        '42': 99,
        '43': 116,
        '44': 18,
        '45': 172,
        '46': 1,
        '47': 10,
        '48': 45,
        '49': 107,
        '50': 117,
        '51': 106,
        '52': 105,
        '53': 114,
        '54': 97,
        '55': 49,
        '56': 100,
        '57': 54,
        '58': 108,
        '59': 100,
        '60': 55,
        '61': 115,
        '62': 48,
        '63': 101,
        '64': 100,
        '65': 115,
        '66': 104,
        '67': 53,
        '68': 113,
        '69': 115,
        '70': 109,
        '71': 116,
        '72': 51,
        '73': 108,
        '74': 113,
        '75': 52,
        '76': 116,
        '77': 110,
        '78': 114,
        '79': 113,
        '80': 103,
        '81': 118,
        '82': 120,
        '83': 99,
        '84': 51,
        '85': 106,
        '86': 100,
        '87': 114,
        '88': 107,
        '89': 57,
        '90': 122,
        '91': 51,
        '92': 107,
        '93': 109,
        '94': 18,
        '95': 65,
        '96': 107,
        '97': 117,
        '98': 106,
        '99': 105,
        '100': 114,
        '101': 97,
        '102': 49,
        '103': 115,
        '104': 117,
        '105': 104,
        '106': 103,
        '107': 102,
        '108': 53,
        '109': 115,
        '110': 118,
        '111': 104,
        '112': 117,
        '113': 52,
        '114': 117,
        '115': 115,
        '116': 114,
        '117': 117,
        '118': 114,
        '119': 118,
        '120': 120,
        '121': 122,
        '122': 108,
        '123': 103,
        '124': 110,
        '125': 53,
        '126': 52,
        '127': 107,
        '128': 115,
        '129': 120,
        '130': 109,
        '131': 110,
        '132': 56,
        '133': 103,
        '134': 108,
        '135': 106,
        '136': 97,
        '137': 114,
        '138': 106,
        '139': 116,
        '140': 120,
        '141': 113,
        '142': 110,
        '143': 97,
        '144': 112,
        '145': 118,
        '146': 56,
        '147': 107,
        '148': 106,
        '149': 110,
        '150': 112,
        '151': 52,
        '152': 110,
        '153': 114,
        '154': 115,
        '155': 113,
        '156': 113,
        '157': 52,
        '158': 106,
        '159': 106,
        '160': 104,
        '161': 26,
        '162': 44,
        '163': 123,
        '164': 34,
        '165': 114,
        '166': 101,
        '167': 116,
        '168': 114,
        '169': 97,
        '170': 99,
        '171': 116,
        '172': 95,
        '173': 111,
        '174': 114,
        '175': 100,
        '176': 101,
        '177': 114,
        '178': 115,
        '179': 34,
        '180': 58,
        '181': 123,
        '182': 34,
        '183': 111,
        '184': 114,
        '185': 100,
        '186': 101,
        '187': 114,
        '188': 95,
        '189': 105,
        '190': 100,
        '191': 120,
        '192': 115,
        '193': 34,
        '194': 58,
        '195': 91,
        '196': 34,
        '197': 49,
        '198': 52,
        '199': 49,
        '200': 54,
        '201': 56,
        '202': 48,
        '203': 34,
        '204': 93,
        '205': 125,
        '206': 125,
        '207': 42,
        '208': 10,
        '209': 10,
        '210': 5,
        '211': 117,
        '212': 107,
        '213': 117,
        '214': 106,
        '215': 105,
        '216': 18,
        '217': 1,
        '218': 49,
        '219': 18,
        '220': 103,
        '221': 10,
        '222': 81,
        '223': 10,
        '224': 70,
        '225': 10,
        '226': 31,
        '227': 47,
        '228': 99,
        '229': 111,
        '230': 115,
        '231': 109,
        '232': 111,
        '233': 115,
        '234': 46,
        '235': 99,
        '236': 114,
        '237': 121,
        '238': 112,
        '239': 116,
        '240': 111,
        '241': 46,
        '242': 115,
        '243': 101,
        '244': 99,
        '245': 112,
        '246': 50,
        '247': 53,
        '248': 54,
        '249': 107,
        '250': 49,
        '251': 46,
        '252': 80,
        '253': 117,
        '254': 98,
        '255': 75,
        '256': 101,
        '257': 121,
        '258': 18,
        '259': 35,
        '260': 10,
        '261': 33,
        '262': 3,
        '263': 253,
        '264': 54,
        '265': 183,
        '266': 121,
        '267': 145,
        '268': 22,
        '269': 101,
        '270': 139,
        '271': 40,
        '272': 36,
        '273': 57,
        '274': 209,
        '275': 207,
        '276': 206,
        '277': 77,
        '278': 228,
        '279': 17,
        '280': 251,
        '281': 84,
        '282': 194,
        '283': 242,
        '284': 236,
        '285': 76,
        '286': 218,
        '287': 59,
        '288': 183,
        '289': 230,
        '290': 224,
        '291': 55,
        '292': 204,
        '293': 165,
        '294': 110,
        '295': 18,
        '296': 4,
        '297': 10,
        '298': 2,
        '299': 8,
        '300': 1,
        '301': 24,
        '302': 163,
        '303': 14,
        '304': 18,
        '305': 18,
        '306': 10,
        '307': 12,
        '308': 10,
        '309': 5,
        '310': 117,
        '311': 107,
        '312': 117,
        '313': 106,
        '314': 105,
        '315': 18,
        '316': 3,
        '317': 50,
        '318': 55,
        '319': 51,
        '320': 16,
        '321': 129,
        '322': 169,
        '323': 13,
        '324': 26,
        '325': 64,
        '326': 205,
        '327': 125,
        '328': 129,
        '329': 33,
        '330': 140,
        '331': 13,
        '332': 167,
        '333': 255,
        '334': 148,
        '335': 55,
        '336': 15,
        '337': 136,
        '338': 186,
        '339': 223,
        '340': 183,
        '341': 53,
        '342': 178,
        '343': 162,
        '344': 65,
        '345': 111,
        '346': 106,
        '347': 49,
        '348': 219,
        '349': 43,
        '350': 33,
        '351': 41,
        '352': 119,
        '353': 125,
        '354': 93,
        '355': 186,
        '356': 251,
        '357': 56,
        '358': 42,
        '359': 33,
        '360': 203,
        '361': 97,
        '362': 157,
        '363': 164,
        '364': 239,
        '365': 32,
        '366': 82,
        '367': 94,
        '368': 120,
        '369': 221,
        '370': 64,
        '371': 119,
        '372': 65,
        '373': 168,
        '374': 224,
        '375': 80,
        '376': 239,
        '377': 68,
        '378': 39,
        '379': 31,
        '380': 207,
        '381': 252,
        '382': 155,
        '383': 249,
        '384': 84,
        '385': 89,
        '386': 157,
        '387': 26,
        '388': 252,
        '389': 252,
      })
    ),
    gasUsed: 186481,
    gasWanted: 218241,
  }
);
data.set(
  `["kujira","kujiraStargateClientGetTx","[[\"1\"],\"50F44E09A0617E7506B4F78886C4828A05FC84141A6BB57DA1B87A03EF4ADB91\"]","Kujira Transactions Get transactions 2 and 3"]`,
  {
    height: 13248197,
    txIndex: 4,
    hash: '50F44E09A0617E7506B4F78886C4828A05FC84141A6BB57DA1B87A03EF4ADB91',
    code: 0,
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '3613ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '3613ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '3613ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '3613ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/1826',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              '3B1dNdOFYX0PrMFsGpU4efgLsrzbyx2KdRcRA+0mr5tzzH5ix6PMamze1xv8X3Xe8sE/bU0tMy0CCBU2lCxg2A==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '100000ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'amount', value: '100000ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '100000ukuji' },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'action', value: 'submit_order' },
          {
            key: 'market',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'order_idx', value: '141682' },
          { key: 'quote_price', value: '0.893' },
          { key: 'offer_amount', value: '100000' },
          { key: 'offer_denom', value: 'ukuji' },
        ],
      },
    ],
    rawLog:
      '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"100000ukuji"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"100000ukuji"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"100000ukuji"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"action","value":"submit_order"},{"key":"market","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"order_idx","value":"141682"},{"key":"quote_price","value":"0.893"},{"key":"offer_amount","value":"100000"},{"key":"offer_denom","value":"ukuji"}]}]}]',
    tx: new Uint8Array(
      Object.values({
        '0': 10,
        '1': 211,
        '2': 1,
        '3': 10,
        '4': 208,
        '5': 1,
        '6': 10,
        '7': 36,
        '8': 47,
        '9': 99,
        '10': 111,
        '11': 115,
        '12': 109,
        '13': 119,
        '14': 97,
        '15': 115,
        '16': 109,
        '17': 46,
        '18': 119,
        '19': 97,
        '20': 115,
        '21': 109,
        '22': 46,
        '23': 118,
        '24': 49,
        '25': 46,
        '26': 77,
        '27': 115,
        '28': 103,
        '29': 69,
        '30': 120,
        '31': 101,
        '32': 99,
        '33': 117,
        '34': 116,
        '35': 101,
        '36': 67,
        '37': 111,
        '38': 110,
        '39': 116,
        '40': 114,
        '41': 97,
        '42': 99,
        '43': 116,
        '44': 18,
        '45': 167,
        '46': 1,
        '47': 10,
        '48': 45,
        '49': 107,
        '50': 117,
        '51': 106,
        '52': 105,
        '53': 114,
        '54': 97,
        '55': 49,
        '56': 100,
        '57': 54,
        '58': 108,
        '59': 100,
        '60': 55,
        '61': 115,
        '62': 48,
        '63': 101,
        '64': 100,
        '65': 115,
        '66': 104,
        '67': 53,
        '68': 113,
        '69': 115,
        '70': 109,
        '71': 116,
        '72': 51,
        '73': 108,
        '74': 113,
        '75': 52,
        '76': 116,
        '77': 110,
        '78': 114,
        '79': 113,
        '80': 103,
        '81': 118,
        '82': 120,
        '83': 99,
        '84': 51,
        '85': 106,
        '86': 100,
        '87': 114,
        '88': 107,
        '89': 57,
        '90': 122,
        '91': 51,
        '92': 107,
        '93': 109,
        '94': 18,
        '95': 65,
        '96': 107,
        '97': 117,
        '98': 106,
        '99': 105,
        '100': 114,
        '101': 97,
        '102': 49,
        '103': 115,
        '104': 117,
        '105': 104,
        '106': 103,
        '107': 102,
        '108': 53,
        '109': 115,
        '110': 118,
        '111': 104,
        '112': 117,
        '113': 52,
        '114': 117,
        '115': 115,
        '116': 114,
        '117': 117,
        '118': 114,
        '119': 118,
        '120': 120,
        '121': 122,
        '122': 108,
        '123': 103,
        '124': 110,
        '125': 53,
        '126': 52,
        '127': 107,
        '128': 115,
        '129': 120,
        '130': 109,
        '131': 110,
        '132': 56,
        '133': 103,
        '134': 108,
        '135': 106,
        '136': 97,
        '137': 114,
        '138': 106,
        '139': 116,
        '140': 120,
        '141': 113,
        '142': 110,
        '143': 97,
        '144': 112,
        '145': 118,
        '146': 56,
        '147': 107,
        '148': 106,
        '149': 110,
        '150': 112,
        '151': 52,
        '152': 110,
        '153': 114,
        '154': 115,
        '155': 113,
        '156': 113,
        '157': 52,
        '158': 106,
        '159': 106,
        '160': 104,
        '161': 26,
        '162': 34,
        '163': 123,
        '164': 34,
        '165': 115,
        '166': 117,
        '167': 98,
        '168': 109,
        '169': 105,
        '170': 116,
        '171': 95,
        '172': 111,
        '173': 114,
        '174': 100,
        '175': 101,
        '176': 114,
        '177': 34,
        '178': 58,
        '179': 123,
        '180': 34,
        '181': 112,
        '182': 114,
        '183': 105,
        '184': 99,
        '185': 101,
        '186': 34,
        '187': 58,
        '188': 34,
        '189': 48,
        '190': 46,
        '191': 56,
        '192': 57,
        '193': 51,
        '194': 34,
        '195': 125,
        '196': 125,
        '197': 42,
        '198': 15,
        '199': 10,
        '200': 5,
        '201': 117,
        '202': 107,
        '203': 117,
        '204': 106,
        '205': 105,
        '206': 18,
        '207': 6,
        '208': 49,
        '209': 48,
        '210': 48,
        '211': 48,
        '212': 48,
        '213': 48,
        '214': 18,
        '215': 105,
        '216': 10,
        '217': 81,
        '218': 10,
        '219': 70,
        '220': 10,
        '221': 31,
        '222': 47,
        '223': 99,
        '224': 111,
        '225': 115,
        '226': 109,
        '227': 111,
        '228': 115,
        '229': 46,
        '230': 99,
        '231': 114,
        '232': 121,
        '233': 112,
        '234': 116,
        '235': 111,
        '236': 46,
        '237': 115,
        '238': 101,
        '239': 99,
        '240': 112,
        '241': 50,
        '242': 53,
        '243': 54,
        '244': 107,
        '245': 49,
        '246': 46,
        '247': 80,
        '248': 117,
        '249': 98,
        '250': 75,
        '251': 101,
        '252': 121,
        '253': 18,
        '254': 35,
        '255': 10,
        '256': 33,
        '257': 3,
        '258': 253,
        '259': 54,
        '260': 183,
        '261': 121,
        '262': 145,
        '263': 22,
        '264': 101,
        '265': 139,
        '266': 40,
        '267': 36,
        '268': 57,
        '269': 209,
        '270': 207,
        '271': 206,
        '272': 77,
        '273': 228,
        '274': 17,
        '275': 251,
        '276': 84,
        '277': 194,
        '278': 242,
        '279': 236,
        '280': 76,
        '281': 218,
        '282': 59,
        '283': 183,
        '284': 230,
        '285': 224,
        '286': 55,
        '287': 204,
        '288': 165,
        '289': 110,
        '290': 18,
        '291': 4,
        '292': 10,
        '293': 2,
        '294': 8,
        '295': 1,
        '296': 24,
        '297': 162,
        '298': 14,
        '299': 18,
        '300': 20,
        '301': 10,
        '302': 13,
        '303': 10,
        '304': 5,
        '305': 117,
        '306': 107,
        '307': 117,
        '308': 106,
        '309': 105,
        '310': 18,
        '311': 4,
        '312': 51,
        '313': 54,
        '314': 49,
        '315': 51,
        '316': 16,
        '317': 211,
        '318': 175,
        '319': 176,
        '320': 1,
        '321': 26,
        '322': 64,
        '323': 220,
        '324': 29,
        '325': 93,
        '326': 53,
        '327': 211,
        '328': 133,
        '329': 97,
        '330': 125,
        '331': 15,
        '332': 172,
        '333': 193,
        '334': 108,
        '335': 26,
        '336': 149,
        '337': 56,
        '338': 121,
        '339': 248,
        '340': 11,
        '341': 178,
        '342': 188,
        '343': 219,
        '344': 203,
        '345': 29,
        '346': 138,
        '347': 117,
        '348': 23,
        '349': 17,
        '350': 3,
        '351': 237,
        '352': 38,
        '353': 175,
        '354': 155,
        '355': 115,
        '356': 204,
        '357': 126,
        '358': 98,
        '359': 199,
        '360': 163,
        '361': 204,
        '362': 106,
        '363': 108,
        '364': 222,
        '365': 215,
        '366': 27,
        '367': 252,
        '368': 95,
        '369': 117,
        '370': 222,
        '371': 242,
        '372': 193,
        '373': 63,
        '374': 109,
        '375': 77,
        '376': 45,
        '377': 51,
        '378': 45,
        '379': 2,
        '380': 8,
        '381': 21,
        '382': 54,
        '383': 148,
        '384': 44,
        '385': 96,
        '386': 216,
      })
    ),
    gasUsed: 2238628,
    gasWanted: 2889683,
  }
);
data.set(
  `["kujira","kujiraStargateClientGetTx","[[\"1\"],\"66DBF37EAE15E28AD70E3292216DEE3D6B61E5C5913EBCE584E4971D2A6A2F2B\"]","Kujira Transactions Get transactions 2 and 3"]`,
  {
    height: 13248195,
    txIndex: 0,
    hash: '66DBF37EAE15E28AD70E3292216DEE3D6B61E5C5913EBCE584E4971D2A6A2F2B',
    code: 0,
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '534ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '534ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '534ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '534ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/1825',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'MfH4xgyVILp4SoWO7D+253T8x211yxez7SlKrmAo5/x3QjNFdU5Qz73IEbsCTaXdiggJ4F+qWZgoFRsK8s74AQ==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '100000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'amount',
            value:
              '100000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '100000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'action', value: 'submit_order' },
          {
            key: 'market',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'order_idx', value: '141680' },
          { key: 'quote_price', value: '0.808' },
          { key: 'offer_amount', value: '100000' },
          {
            key: 'offer_denom',
            value: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
    ],
    rawLog:
      '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"100000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"100000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"100000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"action","value":"submit_order"},{"key":"market","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"order_idx","value":"141680"},{"key":"quote_price","value":"0.808"},{"key":"offer_amount","value":"100000"},{"key":"offer_denom","value":"factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]}]}]',
    tx: new Uint8Array(
      Object.values({
        '0': 10,
        '1': 136,
        '2': 2,
        '3': 10,
        '4': 133,
        '5': 2,
        '6': 10,
        '7': 36,
        '8': 47,
        '9': 99,
        '10': 111,
        '11': 115,
        '12': 109,
        '13': 119,
        '14': 97,
        '15': 115,
        '16': 109,
        '17': 46,
        '18': 119,
        '19': 97,
        '20': 115,
        '21': 109,
        '22': 46,
        '23': 118,
        '24': 49,
        '25': 46,
        '26': 77,
        '27': 115,
        '28': 103,
        '29': 69,
        '30': 120,
        '31': 101,
        '32': 99,
        '33': 117,
        '34': 116,
        '35': 101,
        '36': 67,
        '37': 111,
        '38': 110,
        '39': 116,
        '40': 114,
        '41': 97,
        '42': 99,
        '43': 116,
        '44': 18,
        '45': 220,
        '46': 1,
        '47': 10,
        '48': 45,
        '49': 107,
        '50': 117,
        '51': 106,
        '52': 105,
        '53': 114,
        '54': 97,
        '55': 49,
        '56': 100,
        '57': 54,
        '58': 108,
        '59': 100,
        '60': 55,
        '61': 115,
        '62': 48,
        '63': 101,
        '64': 100,
        '65': 115,
        '66': 104,
        '67': 53,
        '68': 113,
        '69': 115,
        '70': 109,
        '71': 116,
        '72': 51,
        '73': 108,
        '74': 113,
        '75': 52,
        '76': 116,
        '77': 110,
        '78': 114,
        '79': 113,
        '80': 103,
        '81': 118,
        '82': 120,
        '83': 99,
        '84': 51,
        '85': 106,
        '86': 100,
        '87': 114,
        '88': 107,
        '89': 57,
        '90': 122,
        '91': 51,
        '92': 107,
        '93': 109,
        '94': 18,
        '95': 65,
        '96': 107,
        '97': 117,
        '98': 106,
        '99': 105,
        '100': 114,
        '101': 97,
        '102': 49,
        '103': 115,
        '104': 117,
        '105': 104,
        '106': 103,
        '107': 102,
        '108': 53,
        '109': 115,
        '110': 118,
        '111': 104,
        '112': 117,
        '113': 52,
        '114': 117,
        '115': 115,
        '116': 114,
        '117': 117,
        '118': 114,
        '119': 118,
        '120': 120,
        '121': 122,
        '122': 108,
        '123': 103,
        '124': 110,
        '125': 53,
        '126': 52,
        '127': 107,
        '128': 115,
        '129': 120,
        '130': 109,
        '131': 110,
        '132': 56,
        '133': 103,
        '134': 108,
        '135': 106,
        '136': 97,
        '137': 114,
        '138': 106,
        '139': 116,
        '140': 120,
        '141': 113,
        '142': 110,
        '143': 97,
        '144': 112,
        '145': 118,
        '146': 56,
        '147': 107,
        '148': 106,
        '149': 110,
        '150': 112,
        '151': 52,
        '152': 110,
        '153': 114,
        '154': 115,
        '155': 113,
        '156': 113,
        '157': 52,
        '158': 106,
        '159': 106,
        '160': 104,
        '161': 26,
        '162': 34,
        '163': 123,
        '164': 34,
        '165': 115,
        '166': 117,
        '167': 98,
        '168': 109,
        '169': 105,
        '170': 116,
        '171': 95,
        '172': 111,
        '173': 114,
        '174': 100,
        '175': 101,
        '176': 114,
        '177': 34,
        '178': 58,
        '179': 123,
        '180': 34,
        '181': 112,
        '182': 114,
        '183': 105,
        '184': 99,
        '185': 101,
        '186': 34,
        '187': 58,
        '188': 34,
        '189': 48,
        '190': 46,
        '191': 56,
        '192': 48,
        '193': 56,
        '194': 34,
        '195': 125,
        '196': 125,
        '197': 42,
        '198': 68,
        '199': 10,
        '200': 58,
        '201': 102,
        '202': 97,
        '203': 99,
        '204': 116,
        '205': 111,
        '206': 114,
        '207': 121,
        '208': 47,
        '209': 107,
        '210': 117,
        '211': 106,
        '212': 105,
        '213': 114,
        '214': 97,
        '215': 49,
        '216': 108,
        '217': 116,
        '218': 118,
        '219': 119,
        '220': 103,
        '221': 54,
        '222': 57,
        '223': 115,
        '224': 119,
        '225': 51,
        '226': 99,
        '227': 53,
        '228': 122,
        '229': 57,
        '230': 57,
        '231': 99,
        '232': 54,
        '233': 114,
        '234': 114,
        '235': 48,
        '236': 56,
        '237': 104,
        '238': 97,
        '239': 108,
        '240': 55,
        '241': 118,
        '242': 48,
        '243': 107,
        '244': 100,
        '245': 122,
        '246': 102,
        '247': 120,
        '248': 122,
        '249': 48,
        '250': 55,
        '251': 121,
        '252': 106,
        '253': 53,
        '254': 47,
        '255': 100,
        '256': 101,
        '257': 109,
        '258': 111,
        '259': 18,
        '260': 6,
        '261': 49,
        '262': 48,
        '263': 48,
        '264': 48,
        '265': 48,
        '266': 48,
        '267': 18,
        '268': 103,
        '269': 10,
        '270': 81,
        '271': 10,
        '272': 70,
        '273': 10,
        '274': 31,
        '275': 47,
        '276': 99,
        '277': 111,
        '278': 115,
        '279': 109,
        '280': 111,
        '281': 115,
        '282': 46,
        '283': 99,
        '284': 114,
        '285': 121,
        '286': 112,
        '287': 116,
        '288': 111,
        '289': 46,
        '290': 115,
        '291': 101,
        '292': 99,
        '293': 112,
        '294': 50,
        '295': 53,
        '296': 54,
        '297': 107,
        '298': 49,
        '299': 46,
        '300': 80,
        '301': 117,
        '302': 98,
        '303': 75,
        '304': 101,
        '305': 121,
        '306': 18,
        '307': 35,
        '308': 10,
        '309': 33,
        '310': 3,
        '311': 253,
        '312': 54,
        '313': 183,
        '314': 121,
        '315': 145,
        '316': 22,
        '317': 101,
        '318': 139,
        '319': 40,
        '320': 36,
        '321': 57,
        '322': 209,
        '323': 207,
        '324': 206,
        '325': 77,
        '326': 228,
        '327': 17,
        '328': 251,
        '329': 84,
        '330': 194,
        '331': 242,
        '332': 236,
        '333': 76,
        '334': 218,
        '335': 59,
        '336': 183,
        '337': 230,
        '338': 224,
        '339': 55,
        '340': 204,
        '341': 165,
        '342': 110,
        '343': 18,
        '344': 4,
        '345': 10,
        '346': 2,
        '347': 8,
        '348': 1,
        '349': 24,
        '350': 161,
        '351': 14,
        '352': 18,
        '353': 18,
        '354': 10,
        '355': 12,
        '356': 10,
        '357': 5,
        '358': 117,
        '359': 107,
        '360': 117,
        '361': 106,
        '362': 105,
        '363': 18,
        '364': 3,
        '365': 53,
        '366': 51,
        '367': 52,
        '368': 16,
        '369': 128,
        '370': 135,
        '371': 26,
        '372': 26,
        '373': 64,
        '374': 49,
        '375': 241,
        '376': 248,
        '377': 198,
        '378': 12,
        '379': 149,
        '380': 32,
        '381': 186,
        '382': 120,
        '383': 74,
        '384': 133,
        '385': 142,
        '386': 236,
        '387': 63,
        '388': 182,
        '389': 231,
        '390': 116,
        '391': 252,
        '392': 199,
        '393': 109,
        '394': 117,
        '395': 203,
        '396': 23,
        '397': 179,
        '398': 237,
        '399': 41,
        '400': 74,
        '401': 174,
        '402': 96,
        '403': 40,
        '404': 231,
        '405': 252,
        '406': 119,
        '407': 66,
        '408': 51,
        '409': 69,
        '410': 117,
        '411': 78,
        '412': 80,
        '413': 207,
        '414': 189,
        '415': 200,
        '416': 17,
        '417': 187,
        '418': 2,
        '419': 77,
        '420': 165,
        '421': 221,
        '422': 138,
        '423': 8,
        '424': 9,
        '425': 224,
        '426': 95,
        '427': 170,
        '428': 89,
        '429': 152,
        '430': 40,
        '431': 21,
        '432': 27,
        '433': 10,
        '434': 242,
        '435': 206,
        '436': 248,
        '437': 1,
      })
    ),
    gasUsed: 346972,
    gasWanted: 426880,
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Cancel all open orders - 1"]`,
  {
    orders: [
      {
        idx: '178130',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685657537247716078',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Cancel all open orders - 1"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Cancel all open orders - 1"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Cancel all open orders - 1"]`,
  {
    orders: [
      {
        idx: '178130',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685657537247716078',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Cancel all open orders - 1"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Cancel all open orders - 1"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraSigningStargateClientSignAndBroadcast","[[\"1\",\"2\",\"3\",\"4\",null],{\"tmClient\":\"5\",\"queryClient\":\"6\",\"registry\":\"7\",\"aminoTypes\":\"8\",\"signer\":\"9\",\"gasPrice\":\"10\"},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[\"11\"],\"auto\",{\"client\":\"12\"},{\"tmClient\":\"5\",\"auth\":\"13\",\"bank\":\"14\",\"staking\":\"15\",\"tx\":\"16\"},{\"types\":\"17\"},{\"register\":\"18\"},{\"secret\":\"19\",\"seed\":\"20\",\"accounts\":\"21\"},{\"amount\":\"22\",\"denom\":\"23\"},{\"typeUrl\":\"24\",\"value\":\"25\"},{\"url\":\"26\"},{},{},{},{},{},{\"/cosmos.authz.v1beta1.MsgGrant\":\"27\",\"/cosmos.authz.v1beta1.MsgExec\":\"27\",\"/cosmos.authz.v1beta1.MsgRevoke\":\"27\",\"/cosmos.bank.v1beta1.MsgSend\":\"28\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"29\",\"/cosmos.distribution.v1beta1.MsgFundCommunityPool\":\"30\",\"/cosmos.distribution.v1beta1.MsgSetWithdrawAddress\":\"31\",\"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward\":\"32\",\"/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission\":\"33\",\"/cosmos.gov.v1beta1.MsgDeposit\":\"34\",\"/cosmos.gov.v1beta1.MsgVote\":\"35\",\"/cosmos.gov.v1beta1.MsgVoteWeighted\":\"36\",\"/cosmos.gov.v1beta1.MsgSubmitProposal\":\"37\",\"/cosmos.staking.v1beta1.MsgBeginRedelegate\":\"38\",\"/cosmos.staking.v1beta1.MsgCreateValidator\":\"39\",\"/cosmos.staking.v1beta1.MsgDelegate\":\"40\",\"/cosmos.staking.v1beta1.MsgEditValidator\":\"41\",\"/cosmos.staking.v1beta1.MsgUndelegate\":\"42\",\"/ibc.applications.transfer.v1.MsgTransfer\":\"43\",\"/cosmos.feegrant.v1beta1.MsgGrantAllowance\":\"27\",\"/cosmos.feegrant.v1beta1.MsgRevokeAllowance\":\"27\",\"/cosmos.vesting.v1beta1.MsgCreateVestingAccount\":\"44\"},{\"data\":\"45\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"46\"],{\"data\":\"47\"},\"ukuji\",\"/cosmwasm.wasm.v1.MsgExecuteContract\",{\"sender\":\"2\",\"contract\":\"48\",\"msg\":\"49\",\"funds\":\"50\"},\"https://test-rpc-kujira.mintthemoon.xyz\",\"not_supported_by_chain\",{\"aminoType\":\"51\"},{\"aminoType\":\"52\"},{\"aminoType\":\"53\"},{\"aminoType\":\"54\"},{\"aminoType\":\"55\"},{\"aminoType\":\"56\"},{\"aminoType\":\"57\"},{\"aminoType\":\"58\"},{\"aminoType\":\"59\"},{\"aminoType\":\"60\"},{\"aminoType\":\"61\"},{\"aminoType\":\"62\"},{\"aminoType\":\"63\"},{\"aminoType\":\"64\"},{\"aminoType\":\"65\"},{\"aminoType\":\"66\"},{\"aminoType\":\"67\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"68\",\"prefix\":\"69\"},{\"atomics\":\"70\",\"fractionalDigits\":18},\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"type\":\"71\",\"data\":\"72\"},[\"73\"],\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",\"cosmos-sdk/MsgFundCommunityPool\",\"cosmos-sdk/MsgModifyWithdrawAddress\",\"cosmos-sdk/MsgWithdrawDelegationReward\",\"cosmos-sdk/MsgWithdrawValidatorCommission\",\"cosmos-sdk/MsgDeposit\",\"cosmos-sdk/MsgVote\",\"cosmos-sdk/MsgVoteWeighted\",\"cosmos-sdk/MsgSubmitProposal\",\"cosmos-sdk/MsgBeginRedelegate\",\"cosmos-sdk/MsgCreateValidator\",\"cosmos-sdk/MsgDelegate\",\"cosmos-sdk/MsgEditValidator\",\"cosmos-sdk/MsgUndelegate\",\"cosmos-sdk/MsgTransfer\",\"cosmos-sdk/MsgCreateVestingAccount\",[\"74\",\"75\",\"76\",\"77\",\"78\"],\"kujira\",\"0470de4df82000\",\"Buffer\",[123,34,114,101,116,114,97,99,116,95,111,114,100,101,114,115,34,58,123,34,111,114,100,101,114,95,105,100,120,115,34,58,91,34,49,55,56,49,51,48,34,93,125,125],{\"denom\":\"23\",\"amount\":\"79\"},{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0},\"1\"]","Kujira Orders Cancel all open orders - 1"]`,
  {
    code: 0,
    height: 13875928,
    txIndex: 0,
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '274ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '274ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '274ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '274ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2106',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'rmicnDCsiC6V7uLmUTtyAaR2is/jrdg8t4bePmoQzMIYBLeO+un93W4DEUwYT4C4YrI/ESeUjvhWRwEJfnbHkg==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'action', value: 'retract_orders' },
          {
            key: 'market',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'sender',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
    ],
    rawLog:
      '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1ukuji"},{"key":"receiver","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1ukuji"},{"key":"spender","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1ukuji"},{"key":"recipient","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"sender","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"action","value":"retract_orders"},{"key":"market","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"}]}]}]',
    transactionHash:
      'CEF3189417B30151D478352DBA83302F9C284CD29245F00F4480C199FF6A0A39',
    gasUsed: 186873,
    gasWanted: 218752,
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for all markets - 1"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for all markets - 1"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for all markets - 1"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraFinClientWithdrawOrders","[[\"1\",\"2\",\"3\",null,null],{\"client\":\"4\",\"contractAddress\":\"5\",\"sender\":\"6\"},{\"orderIdxs\":\"7\"},\"auto\",{\"codesCache\":\"8\",\"tmClient\":\"9\",\"queryClient\":\"10\",\"registry\":\"11\",\"aminoTypes\":\"12\",\"signer\":\"13\",\"gasPrice\":\"14\"},\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[],{},{\"client\":\"15\"},{\"tmClient\":\"9\",\"auth\":\"16\",\"bank\":\"17\",\"wasm\":\"18\",\"tx\":\"19\"},{\"types\":\"20\"},{\"register\":\"21\"},{\"secret\":\"22\",\"seed\":\"23\",\"accounts\":\"24\"},{\"amount\":\"25\",\"denom\":\"26\"},{\"url\":\"27\"},{},{},{},{},{},{\"/cosmwasm.wasm.v1.MsgStoreCode\":\"28\",\"/cosmwasm.wasm.v1.MsgInstantiateContract\":\"29\",\"/cosmwasm.wasm.v1.MsgUpdateAdmin\":\"30\",\"/cosmwasm.wasm.v1.MsgClearAdmin\":\"31\",\"/cosmwasm.wasm.v1.MsgExecuteContract\":\"32\",\"/cosmwasm.wasm.v1.MsgMigrateContract\":\"33\",\"/cosmos.bank.v1beta1.MsgSend\":\"34\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"35\"},{\"data\":\"36\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"37\"],{\"data\":\"38\"},\"ukuji\",\"https://test-rpc-kujira.mintthemoon.xyz\",{\"aminoType\":\"39\"},{\"aminoType\":\"40\"},{\"aminoType\":\"41\"},{\"aminoType\":\"42\"},{\"aminoType\":\"43\"},{\"aminoType\":\"44\"},{\"aminoType\":\"45\"},{\"aminoType\":\"46\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"47\",\"prefix\":\"48\"},{\"atomics\":\"49\",\"fractionalDigits\":18},\"wasm/MsgStoreCode\",\"wasm/MsgInstantiateContract\",\"wasm/MsgUpdateAdmin\",\"wasm/MsgClearAdmin\",\"wasm/MsgExecuteContract\",\"wasm/MsgMigrateContract\",\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",[\"50\",\"51\",\"52\",\"53\",\"54\"],\"kujira\",\"0470de4df82000\",{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0}]","Kujira Orders Settle funds for all markets - 1"]`,
  {
    logs: [
      {
        msg_index: 0,
        log: '',
        events: [
          {
            type: 'execute',
            attributes: [
              {
                key: '_contract_address',
                value:
                  'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
              },
            ],
          },
          {
            type: 'message',
            attributes: [
              { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
              { key: 'module', value: 'wasm' },
              {
                key: 'sender',
                value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
              },
            ],
          },
          {
            type: 'wasm',
            attributes: [
              {
                key: '_contract_address',
                value:
                  'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
              },
              { key: 'action', value: 'withdraw_orders' },
              {
                key: 'market',
                value:
                  'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
              },
            ],
          },
        ],
      },
    ],
    height: 13875932,
    transactionHash:
      'AE7FF60F0DC944F08BAA2A79A0663CC3A6B867A7CA0752A43BEF7C22062EEC03',
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '183ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '183ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '183ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '183ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2107',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'o8BknFFQnsTjFE1iyMrUgdAqlFQ7m3hIW4OGnh4fsaF8BsZDFoJSUBZ4GS0TlpLkYirsydff13gpstIdi/jakw==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'action', value: 'withdraw_orders' },
          {
            key: 'market',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
    ],
    gasWanted: 145978,
    gasUsed: 130894,
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for all markets - 1"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for all markets - 1"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for all markets - 1"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraFinClientWithdrawOrders","[[\"1\",\"2\",\"3\",null,null],{\"client\":\"4\",\"contractAddress\":\"5\",\"sender\":\"6\"},{\"orderIdxs\":\"7\"},\"auto\",{\"codesCache\":\"8\",\"tmClient\":\"9\",\"queryClient\":\"10\",\"registry\":\"11\",\"aminoTypes\":\"12\",\"signer\":\"13\",\"gasPrice\":\"14\",\"chainId\":\"15\"},\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[],{},{\"client\":\"16\"},{\"tmClient\":\"9\",\"auth\":\"17\",\"bank\":\"18\",\"wasm\":\"19\",\"tx\":\"20\"},{\"types\":\"21\"},{\"register\":\"22\"},{\"secret\":\"23\",\"seed\":\"24\",\"accounts\":\"25\"},{\"amount\":\"26\",\"denom\":\"27\"},\"harpoon-4\",{\"url\":\"28\"},{},{},{},{},{},{\"/cosmwasm.wasm.v1.MsgStoreCode\":\"29\",\"/cosmwasm.wasm.v1.MsgInstantiateContract\":\"30\",\"/cosmwasm.wasm.v1.MsgUpdateAdmin\":\"31\",\"/cosmwasm.wasm.v1.MsgClearAdmin\":\"32\",\"/cosmwasm.wasm.v1.MsgExecuteContract\":\"33\",\"/cosmwasm.wasm.v1.MsgMigrateContract\":\"34\",\"/cosmos.bank.v1beta1.MsgSend\":\"35\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"36\"},{\"data\":\"37\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"38\"],{\"data\":\"39\"},\"ukuji\",\"https://test-rpc-kujira.mintthemoon.xyz\",{\"aminoType\":\"40\"},{\"aminoType\":\"41\"},{\"aminoType\":\"42\"},{\"aminoType\":\"43\"},{\"aminoType\":\"44\"},{\"aminoType\":\"45\"},{\"aminoType\":\"46\"},{\"aminoType\":\"47\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"48\",\"prefix\":\"49\"},{\"atomics\":\"50\",\"fractionalDigits\":18},\"wasm/MsgStoreCode\",\"wasm/MsgInstantiateContract\",\"wasm/MsgUpdateAdmin\",\"wasm/MsgClearAdmin\",\"wasm/MsgExecuteContract\",\"wasm/MsgMigrateContract\",\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",[\"51\",\"52\",\"53\",\"54\",\"55\"],\"kujira\",\"0470de4df82000\",{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0}]","Kujira Orders Settle funds for all markets - 1"]`,
  {
    logs: [
      {
        msg_index: 0,
        log: '',
        events: [
          {
            type: 'execute',
            attributes: [
              {
                key: '_contract_address',
                value:
                  'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
              },
            ],
          },
          {
            type: 'message',
            attributes: [
              { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
              { key: 'module', value: 'wasm' },
              {
                key: 'sender',
                value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
              },
            ],
          },
          {
            type: 'wasm',
            attributes: [
              {
                key: '_contract_address',
                value:
                  'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
              },
              { key: 'action', value: 'withdraw_orders' },
              {
                key: 'market',
                value:
                  'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
              },
            ],
          },
        ],
      },
    ],
    height: 13875935,
    transactionHash:
      'F776D9E4539E4A0A6740519B7FEBCA9CEAC9FD8AE383746B5F8962E3DD5C3760',
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '184ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '184ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '184ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '184ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2108',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'P8u1eM2vHpIUdczepSeOzDbHiUFXzW5RlgWLhia5NINVWngw89pTpi+ptAMFKpuYAglSV3mBFi1FZ0JWfCca5A==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'action', value: 'withdraw_orders' },
          {
            key: 'market',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
        ],
      },
    ],
    gasWanted: 146476,
    gasUsed: 131277,
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for all markets - 1"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for all markets - 1"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for all markets - 1"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraFinClientWithdrawOrders","[[\"1\",\"2\",\"3\",null,null],{\"client\":\"4\",\"contractAddress\":\"5\",\"sender\":\"6\"},{\"orderIdxs\":\"7\"},\"auto\",{\"codesCache\":\"8\",\"tmClient\":\"9\",\"queryClient\":\"10\",\"registry\":\"11\",\"aminoTypes\":\"12\",\"signer\":\"13\",\"gasPrice\":\"14\",\"chainId\":\"15\"},\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[],{},{\"client\":\"16\"},{\"tmClient\":\"9\",\"auth\":\"17\",\"bank\":\"18\",\"wasm\":\"19\",\"tx\":\"20\"},{\"types\":\"21\"},{\"register\":\"22\"},{\"secret\":\"23\",\"seed\":\"24\",\"accounts\":\"25\"},{\"amount\":\"26\",\"denom\":\"27\"},\"harpoon-4\",{\"url\":\"28\"},{},{},{},{},{},{\"/cosmwasm.wasm.v1.MsgStoreCode\":\"29\",\"/cosmwasm.wasm.v1.MsgInstantiateContract\":\"30\",\"/cosmwasm.wasm.v1.MsgUpdateAdmin\":\"31\",\"/cosmwasm.wasm.v1.MsgClearAdmin\":\"32\",\"/cosmwasm.wasm.v1.MsgExecuteContract\":\"33\",\"/cosmwasm.wasm.v1.MsgMigrateContract\":\"34\",\"/cosmos.bank.v1beta1.MsgSend\":\"35\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"36\"},{\"data\":\"37\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"38\"],{\"data\":\"39\"},\"ukuji\",\"https://test-rpc-kujira.mintthemoon.xyz\",{\"aminoType\":\"40\"},{\"aminoType\":\"41\"},{\"aminoType\":\"42\"},{\"aminoType\":\"43\"},{\"aminoType\":\"44\"},{\"aminoType\":\"45\"},{\"aminoType\":\"46\"},{\"aminoType\":\"47\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"48\",\"prefix\":\"49\"},{\"atomics\":\"50\",\"fractionalDigits\":18},\"wasm/MsgStoreCode\",\"wasm/MsgInstantiateContract\",\"wasm/MsgUpdateAdmin\",\"wasm/MsgClearAdmin\",\"wasm/MsgExecuteContract\",\"wasm/MsgMigrateContract\",\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",[\"51\",\"52\",\"53\",\"54\",\"55\"],\"kujira\",\"0470de4df82000\",{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0}]","Kujira Orders Settle funds for all markets - 1"]`,
  {
    logs: [
      {
        msg_index: 0,
        log: '',
        events: [
          {
            type: 'execute',
            attributes: [
              {
                key: '_contract_address',
                value:
                  'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
              },
            ],
          },
          {
            type: 'message',
            attributes: [
              { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
              { key: 'module', value: 'wasm' },
              {
                key: 'sender',
                value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
              },
            ],
          },
          {
            type: 'wasm',
            attributes: [
              {
                key: '_contract_address',
                value:
                  'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
              },
              { key: 'action', value: 'withdraw_orders' },
              {
                key: 'market',
                value:
                  'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
              },
            ],
          },
        ],
      },
    ],
    height: 13875938,
    transactionHash:
      '1BFE8BFF33072FE1FA7538490D35605C9330FBC9403CC215B09935AE6CACF8B0',
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '183ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '183ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '183ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '183ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2109',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'q1ZXOIGPJg+fLn8ojt1kzCMkoZzgntha4dv6fe+st8ArVNzRmx5WhVIuphshlg83q2ko9yEAkI5iawkZW2f8hA==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          { key: 'action', value: 'withdraw_orders' },
          {
            key: 'market',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
        ],
      },
    ],
    gasWanted: 146272,
    gasUsed: 131119,
  }
);
data.set(
  `["kujira","kujiraStargateClientGetAllBalances","[[\"1\"],\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get the wallet balances from the tokens 1, 2, and 3"]`,
  [
    {
      denom: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
      amount: '79970779797',
    },
    {
      denom:
        'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
      amount: '75303684605',
    },
    { denom: 'ukuji', amount: '2277738282' },
  ]
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get the wallet balances from the tokens 1, 2, and 3"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get the wallet balances from the tokens 1, 2, and 3"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get the wallet balances from the tokens 1, 2, and 3"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Orders Get the wallet balances from the tokens 1, 2, and 3"]`,
  {
    base: [
      {
        quote_price: '0.924',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '318968047',
      },
      {
        quote_price: '0.925',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.926',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '637299432',
      },
      {
        quote_price: '0.928',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '954996058',
      },
      {
        quote_price: '0.93',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1272059823',
      },
      {
        quote_price: '0.932',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1588492615',
      },
      {
        quote_price: '0.936',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2219472800',
      },
      {
        quote_price: '0.941',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3161257580',
      },
      {
        quote_price: '0.945',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3786012043',
      },
      {
        quote_price: '0.951',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4718527324',
      },
      {
        quote_price: '0.953',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.956',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5645546445',
      },
      {
        quote_price: '0.96',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6260529718',
      },
      {
        quote_price: '0.964',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.969',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7787488186',
      },
      {
        quote_price: '0.97',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.979',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9299621815',
      },
      {
        quote_price: '0.984',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.985',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.988',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '12280269833',
      },
      {
        quote_price: '1',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '1.117',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '29026092332',
      },
      {
        quote_price: '1.2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '1.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '3',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '4',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '199',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7499952127',
      },
      {
        quote_price: '200',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1241705675',
      },
      {
        quote_price: '210.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3000000',
      },
      {
        quote_price: '298',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '340',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '348',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '600000001',
      },
      {
        quote_price: '349',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '950346001',
      },
      {
        quote_price: '350',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '78004798',
      },
      {
        quote_price: '358',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '372',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '21000000',
      },
      {
        quote_price: '380',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '396',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '398',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '399',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '34000000',
      },
      {
        quote_price: '400',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '193852001',
      },
      {
        quote_price: '420',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14556000',
      },
      {
        quote_price: '480',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8311000',
      },
      {
        quote_price: '500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '47905000',
      },
      {
        quote_price: '600',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '749',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '800',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '62000',
      },
      {
        quote_price: '890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14400000',
      },
      {
        quote_price: '1500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1583',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '80000',
      },
      {
        quote_price: '1889',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '712757000',
      },
      {
        quote_price: '1890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '1900',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '140613000',
      },
      {
        quote_price: '1999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9010000',
      },
      {
        quote_price: '2500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '2990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '300000000',
      },
      {
        quote_price: '4500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '38000000',
      },
      {
        quote_price: '5000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '31000000',
      },
      {
        quote_price: '9000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4991000',
      },
      {
        quote_price: '9998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7180000',
      },
      {
        quote_price: '9999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200490002',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100',
      },
      {
        quote_price: '10000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8000000',
      },
      {
        quote_price: '24500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '29500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '41000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '70000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '77777',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '85000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '92000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '98000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000000',
      },
      {
        quote_price: '100000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2540000',
      },
      {
        quote_price: '150000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '186000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '200000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '225000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '400000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000',
      },
      {
        quote_price: '500000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '550550',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '650000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7000000',
      },
      {
        quote_price: '770000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '880000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '900000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '201000000',
      },
      {
        quote_price: '973007',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '35000000',
      },
      {
        quote_price: '990990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '999998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '1000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '368020000',
      },
      {
        quote_price: '5000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '10000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '30000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '80000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '90000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '95000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '1000000000000000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '22226974000',
      },
    ],
    quote: [
      {
        quote_price: '0.921',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '294453803',
      },
      {
        quote_price: '0.92',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.919',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '588319874',
      },
      {
        quote_price: '0.918',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.917',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '881599970',
      },
      {
        quote_price: '0.915',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1174295843',
      },
      {
        quote_price: '0.913',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1466409237',
      },
      {
        quote_price: '0.91',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2048895528',
      },
      {
        quote_price: '0.904',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2918299571',
      },
      {
        quote_price: '0.901',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '3495038617',
      },
      {
        quote_price: '0.896',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4355885567',
      },
      {
        quote_price: '0.89',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5211658763',
      },
      {
        quote_price: '0.887',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5779377583',
      },
      {
        quote_price: '0.878',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '7188981872',
      },
      {
        quote_price: '0.87',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8584900682',
      },
      {
        quote_price: '0.858',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.857',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.855',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1000000000',
      },
      {
        quote_price: '0.854',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.853',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '11336471413',
      },
      {
        quote_price: '0.851',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.85',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.849',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.829',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.8',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '110000000',
      },
      {
        quote_price: '0.789',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.783',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.762',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '26795296069',
      },
      {
        quote_price: '0.738',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.699',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.666',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.634',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.599',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4',
      },
      {
        quote_price: '0.5',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '113000008',
      },
      {
        quote_price: '0.424',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.422',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.418',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.41',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.4',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000001',
      },
      {
        quote_price: '0.3',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000',
      },
      {
        quote_price: '0.21',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.17',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '93114000',
      },
      {
        quote_price: '0.16',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8000000000',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1031069000',
      },
      {
        quote_price: '0.055',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.01',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.005',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '106987001',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Orders Get the wallet balances from the tokens 1, 2, and 3"]`,
  {
    base: [
      {
        quote_price: '5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7738151',
      },
      {
        quote_price: '11',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000',
      },
    ],
    quote: [
      {
        quote_price: '0.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '327231702',
      },
      {
        quote_price: '0.816',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '455963209',
      },
      {
        quote_price: '0.808',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '635156750',
      },
      {
        quote_price: '0.796',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '901015219',
      },
      {
        quote_price: '0.781',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1338007600',
      },
      {
        quote_price: '0.758',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1757249982',
      },
      {
        quote_price: '0.728',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2152631228',
      },
      {
        quote_price: '0.692',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3358104715',
      },
      {
        quote_price: '0.639',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '4835670790',
      },
      {
        quote_price: '0.57',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '490310000',
      },
      {
        quote_price: '0.567',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.56',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.229',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.15',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2353453444',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1100000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Orders Get the wallet balances from the tokens 1, 2, and 3"]`,
  {
    base: [
      {
        quote_price: '11.221',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24790063',
      },
      {
        quote_price: '11.222',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.227',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.232',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.237',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.242',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.243',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24765273',
      },
      {
        quote_price: '11.246',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.251',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.258',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.259',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '49481016',
      },
      {
        quote_price: '11.291',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.296',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.312',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24691027',
      },
      {
        quote_price: '11.315',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.32',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.325',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.344',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.351',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.38',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '123331680',
      },
      {
        quote_price: '11.553',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '245430043',
      },
      {
        quote_price: '11.909',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '485951486',
      },
      {
        quote_price: '12.088',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '12.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '238116228',
      },
      {
        quote_price: '13.056',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1178675331',
      },
      {
        quote_price: '15.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2239483129',
      },
      {
        quote_price: '24.274',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '6046604448',
      },
      {
        quote_price: '9999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2000000',
      },
    ],
    quote: [
      {
        quote_price: '10.979',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '10.978',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '275148478',
      },
      {
        quote_price: '10.956',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274873330',
      },
      {
        quote_price: '10.923',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '549196914',
      },
      {
        quote_price: '10.89',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274049260',
      },
      {
        quote_price: '10.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1368876054',
      },
      {
        quote_price: '10.662',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2724063348',
      },
      {
        quote_price: '10.343',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '5393645429',
      },
      {
        quote_price: '10.033',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2642886260',
      },
      {
        quote_price: '9.435',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '13082286989',
      },
      {
        quote_price: '8.063',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '24856345279',
      },
      {
        quote_price: '5.074',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '67112132254',
      },
      {
        quote_price: '1.333',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11923296614',
      },
      {
        quote_price: '1.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11996500000',
      },
      {
        quote_price: '1.161',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '839000',
      },
      {
        quote_price: '1.133',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '844308',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraSigningStargateClientSignAndBroadcast","[[\"1\",\"2\",\"3\",\"4\",null],{\"tmClient\":\"5\",\"queryClient\":\"6\",\"registry\":\"7\",\"aminoTypes\":\"8\",\"signer\":\"9\",\"gasPrice\":\"10\",\"chainId\":\"11\"},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[\"12\"],\"auto\",{\"client\":\"13\"},{\"tmClient\":\"5\",\"auth\":\"14\",\"bank\":\"15\",\"staking\":\"16\",\"tx\":\"17\"},{\"types\":\"18\"},{\"register\":\"19\"},{\"secret\":\"20\",\"seed\":\"21\",\"accounts\":\"22\"},{\"amount\":\"23\",\"denom\":\"24\"},\"harpoon-4\",{\"typeUrl\":\"25\",\"value\":\"26\"},{\"url\":\"27\"},{},{},{},{},{},{\"/cosmos.authz.v1beta1.MsgGrant\":\"28\",\"/cosmos.authz.v1beta1.MsgExec\":\"28\",\"/cosmos.authz.v1beta1.MsgRevoke\":\"28\",\"/cosmos.bank.v1beta1.MsgSend\":\"29\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"30\",\"/cosmos.distribution.v1beta1.MsgFundCommunityPool\":\"31\",\"/cosmos.distribution.v1beta1.MsgSetWithdrawAddress\":\"32\",\"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward\":\"33\",\"/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission\":\"34\",\"/cosmos.gov.v1beta1.MsgDeposit\":\"35\",\"/cosmos.gov.v1beta1.MsgVote\":\"36\",\"/cosmos.gov.v1beta1.MsgVoteWeighted\":\"37\",\"/cosmos.gov.v1beta1.MsgSubmitProposal\":\"38\",\"/cosmos.staking.v1beta1.MsgBeginRedelegate\":\"39\",\"/cosmos.staking.v1beta1.MsgCreateValidator\":\"40\",\"/cosmos.staking.v1beta1.MsgDelegate\":\"41\",\"/cosmos.staking.v1beta1.MsgEditValidator\":\"42\",\"/cosmos.staking.v1beta1.MsgUndelegate\":\"43\",\"/ibc.applications.transfer.v1.MsgTransfer\":\"44\",\"/cosmos.feegrant.v1beta1.MsgGrantAllowance\":\"28\",\"/cosmos.feegrant.v1beta1.MsgRevokeAllowance\":\"28\",\"/cosmos.vesting.v1beta1.MsgCreateVestingAccount\":\"45\"},{\"data\":\"46\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"47\"],{\"data\":\"48\"},\"ukuji\",\"/cosmwasm.wasm.v1.MsgExecuteContract\",{\"sender\":\"2\",\"contract\":\"49\",\"msg\":\"50\",\"funds\":\"51\"},\"https://test-rpc-kujira.mintthemoon.xyz\",\"not_supported_by_chain\",{\"aminoType\":\"52\"},{\"aminoType\":\"53\"},{\"aminoType\":\"54\"},{\"aminoType\":\"55\"},{\"aminoType\":\"56\"},{\"aminoType\":\"57\"},{\"aminoType\":\"58\"},{\"aminoType\":\"59\"},{\"aminoType\":\"60\"},{\"aminoType\":\"61\"},{\"aminoType\":\"62\"},{\"aminoType\":\"63\"},{\"aminoType\":\"64\"},{\"aminoType\":\"65\"},{\"aminoType\":\"66\"},{\"aminoType\":\"67\"},{\"aminoType\":\"68\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"69\",\"prefix\":\"70\"},{\"atomics\":\"71\",\"fractionalDigits\":18},\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"type\":\"72\",\"data\":\"73\"},[\"74\"],\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",\"cosmos-sdk/MsgFundCommunityPool\",\"cosmos-sdk/MsgModifyWithdrawAddress\",\"cosmos-sdk/MsgWithdrawDelegationReward\",\"cosmos-sdk/MsgWithdrawValidatorCommission\",\"cosmos-sdk/MsgDeposit\",\"cosmos-sdk/MsgVote\",\"cosmos-sdk/MsgVoteWeighted\",\"cosmos-sdk/MsgSubmitProposal\",\"cosmos-sdk/MsgBeginRedelegate\",\"cosmos-sdk/MsgCreateValidator\",\"cosmos-sdk/MsgDelegate\",\"cosmos-sdk/MsgEditValidator\",\"cosmos-sdk/MsgUndelegate\",\"cosmos-sdk/MsgTransfer\",\"cosmos-sdk/MsgCreateVestingAccount\",[\"75\",\"76\",\"77\",\"78\",\"79\"],\"kujira\",\"0470de4df82000\",\"Buffer\",[123,34,115,117,98,109,105,116,95,111,114,100,101,114,34,58,123,34,112,114,105,99,101,34,58,34,48,46,48,48,49,34,125,125],{\"denom\":\"80\",\"amount\":\"81\"},{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0},\"factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo\",\"1000000\"]","Kujira Orders Create a limit buy order 1 for market 1"]`,
  {
    code: 0,
    height: 13875942,
    txIndex: 0,
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '280ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '280ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '280ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '280ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2110',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'RdnzS/eORuc4DNVSi0kaYM+ZRM/o+ZUE+TDMMu4pSKJzlh1IlxH2XrX9KTL2iOk83owvJkoPhI6wjkxkr/6jhA==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'action', value: 'submit_order' },
          {
            key: 'market',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'order_idx', value: '178131' },
          { key: 'quote_price', value: '0.001' },
          { key: 'offer_amount', value: '1000000' },
          {
            key: 'offer_denom',
            value: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
    ],
    rawLog:
      '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"action","value":"submit_order"},{"key":"market","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"order_idx","value":"178131"},{"key":"quote_price","value":"0.001"},{"key":"offer_amount","value":"1000000"},{"key":"offer_denom","value":"factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]}]}]',
    transactionHash:
      '120A7F00083E26911D0E35B7087076D2D084D95D308E22E48401AC1B1FCF9055',
    gasUsed: 190340,
    gasWanted: 223258,
  }
);
data.set(
  `["kujira","kujiraStargateClientGetAllBalances","[[\"1\"],\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Check the available wallet balances from the tokens 1 and 2"]`,
  [
    {
      denom: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
      amount: '79969779797',
    },
    {
      denom:
        'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
      amount: '75303684605',
    },
    { denom: 'ukuji', amount: '2277738002' },
  ]
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Check the available wallet balances from the tokens 1 and 2"]`,
  {
    orders: [
      {
        idx: '178131',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658720665827343',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Check the available wallet balances from the tokens 1 and 2"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Check the available wallet balances from the tokens 1 and 2"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Orders Check the available wallet balances from the tokens 1 and 2"]`,
  {
    base: [
      {
        quote_price: '0.924',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '318968047',
      },
      {
        quote_price: '0.925',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.926',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '637299432',
      },
      {
        quote_price: '0.928',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '954996058',
      },
      {
        quote_price: '0.93',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1272059823',
      },
      {
        quote_price: '0.932',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1588492615',
      },
      {
        quote_price: '0.936',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2219472800',
      },
      {
        quote_price: '0.941',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3161257580',
      },
      {
        quote_price: '0.945',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3786012043',
      },
      {
        quote_price: '0.951',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4718527324',
      },
      {
        quote_price: '0.953',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.956',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5645546445',
      },
      {
        quote_price: '0.96',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6260529718',
      },
      {
        quote_price: '0.964',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.969',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7787488186',
      },
      {
        quote_price: '0.97',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.979',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9299621815',
      },
      {
        quote_price: '0.984',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.985',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.988',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '12280269833',
      },
      {
        quote_price: '1',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '1.117',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '29026092332',
      },
      {
        quote_price: '1.2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '1.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '3',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '4',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '199',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7499952127',
      },
      {
        quote_price: '200',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1241705675',
      },
      {
        quote_price: '210.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3000000',
      },
      {
        quote_price: '298',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '340',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '348',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '600000001',
      },
      {
        quote_price: '349',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '950346001',
      },
      {
        quote_price: '350',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '78004798',
      },
      {
        quote_price: '358',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '372',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '21000000',
      },
      {
        quote_price: '380',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '396',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '398',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '399',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '34000000',
      },
      {
        quote_price: '400',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '193852001',
      },
      {
        quote_price: '420',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14556000',
      },
      {
        quote_price: '480',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8311000',
      },
      {
        quote_price: '500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '47905000',
      },
      {
        quote_price: '600',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '749',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '800',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '62000',
      },
      {
        quote_price: '890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14400000',
      },
      {
        quote_price: '1500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1583',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '80000',
      },
      {
        quote_price: '1889',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '712757000',
      },
      {
        quote_price: '1890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '1900',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '140613000',
      },
      {
        quote_price: '1999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9010000',
      },
      {
        quote_price: '2500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '2990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '300000000',
      },
      {
        quote_price: '4500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '38000000',
      },
      {
        quote_price: '5000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '31000000',
      },
      {
        quote_price: '9000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4991000',
      },
      {
        quote_price: '9998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7180000',
      },
      {
        quote_price: '9999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200490002',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100',
      },
      {
        quote_price: '10000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8000000',
      },
      {
        quote_price: '24500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '29500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '41000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '70000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '77777',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '85000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '92000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '98000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000000',
      },
      {
        quote_price: '100000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2540000',
      },
      {
        quote_price: '150000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '186000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '200000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '225000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '400000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000',
      },
      {
        quote_price: '500000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '550550',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '650000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7000000',
      },
      {
        quote_price: '770000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '880000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '900000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '201000000',
      },
      {
        quote_price: '973007',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '35000000',
      },
      {
        quote_price: '990990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '999998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '1000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '368020000',
      },
      {
        quote_price: '5000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '10000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '30000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '80000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '90000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '95000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '1000000000000000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '22226974000',
      },
    ],
    quote: [
      {
        quote_price: '0.921',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '294453803',
      },
      {
        quote_price: '0.92',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.919',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '588319874',
      },
      {
        quote_price: '0.918',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.917',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '881599970',
      },
      {
        quote_price: '0.915',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1174295843',
      },
      {
        quote_price: '0.913',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1466409237',
      },
      {
        quote_price: '0.91',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2048895528',
      },
      {
        quote_price: '0.904',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2918299571',
      },
      {
        quote_price: '0.901',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '3495038617',
      },
      {
        quote_price: '0.896',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4355885567',
      },
      {
        quote_price: '0.89',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5211658763',
      },
      {
        quote_price: '0.887',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5779377583',
      },
      {
        quote_price: '0.878',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '7188981872',
      },
      {
        quote_price: '0.87',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8584900682',
      },
      {
        quote_price: '0.858',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.857',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.855',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1000000000',
      },
      {
        quote_price: '0.854',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.853',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '11336471413',
      },
      {
        quote_price: '0.851',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.85',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.849',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.829',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.8',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '110000000',
      },
      {
        quote_price: '0.789',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.783',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.762',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '26795296069',
      },
      {
        quote_price: '0.738',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.699',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.666',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.634',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.599',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4',
      },
      {
        quote_price: '0.5',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '113000008',
      },
      {
        quote_price: '0.424',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.422',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.418',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.41',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.4',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000001',
      },
      {
        quote_price: '0.3',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000',
      },
      {
        quote_price: '0.21',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.17',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '93114000',
      },
      {
        quote_price: '0.16',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8000000000',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1031069000',
      },
      {
        quote_price: '0.055',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.01',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.005',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '107987001',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Orders Check the available wallet balances from the tokens 1 and 2"]`,
  {
    base: [
      {
        quote_price: '5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7738151',
      },
      {
        quote_price: '11',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000',
      },
    ],
    quote: [
      {
        quote_price: '0.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '327231702',
      },
      {
        quote_price: '0.816',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '455963209',
      },
      {
        quote_price: '0.808',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '635156750',
      },
      {
        quote_price: '0.796',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '901015219',
      },
      {
        quote_price: '0.781',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1338007600',
      },
      {
        quote_price: '0.758',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1757249982',
      },
      {
        quote_price: '0.728',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2152631228',
      },
      {
        quote_price: '0.692',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3358104715',
      },
      {
        quote_price: '0.639',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '4835670790',
      },
      {
        quote_price: '0.57',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '490310000',
      },
      {
        quote_price: '0.567',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.56',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.229',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.15',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2353453444',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1100000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Orders Check the available wallet balances from the tokens 1 and 2"]`,
  {
    base: [
      {
        quote_price: '11.221',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24790063',
      },
      {
        quote_price: '11.222',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.227',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.232',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.237',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.242',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.243',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24765273',
      },
      {
        quote_price: '11.246',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.251',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.258',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.259',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '49481016',
      },
      {
        quote_price: '11.291',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.296',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.312',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24691027',
      },
      {
        quote_price: '11.315',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.32',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.325',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.344',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.351',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.38',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '123331680',
      },
      {
        quote_price: '11.553',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '245430043',
      },
      {
        quote_price: '11.909',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '485951486',
      },
      {
        quote_price: '12.088',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '12.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '238116228',
      },
      {
        quote_price: '13.056',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1178675331',
      },
      {
        quote_price: '15.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2239483129',
      },
      {
        quote_price: '24.274',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '6046604448',
      },
      {
        quote_price: '9999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2000000',
      },
    ],
    quote: [
      {
        quote_price: '10.979',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '10.978',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '275148478',
      },
      {
        quote_price: '10.956',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274873330',
      },
      {
        quote_price: '10.923',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '549196914',
      },
      {
        quote_price: '10.89',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274049260',
      },
      {
        quote_price: '10.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1368876054',
      },
      {
        quote_price: '10.662',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2724063348',
      },
      {
        quote_price: '10.343',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '5393645429',
      },
      {
        quote_price: '10.033',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2642886260',
      },
      {
        quote_price: '9.435',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '13082286989',
      },
      {
        quote_price: '8.063',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '24856345279',
      },
      {
        quote_price: '5.074',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '67112132254',
      },
      {
        quote_price: '1.333',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11923296614',
      },
      {
        quote_price: '1.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11996500000',
      },
      {
        quote_price: '1.161',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '839000',
      },
      {
        quote_price: '1.133',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '844308',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get the open order 1"]`,
  {
    orders: [
      {
        idx: '178131',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658720665827343',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Orders Create a limit sell order 2 for market 2 (slightly better than the market price)"]`,
  {
    base: [
      {
        quote_price: '5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7738151',
      },
      {
        quote_price: '11',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000',
      },
    ],
    quote: [
      {
        quote_price: '0.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '327231702',
      },
      {
        quote_price: '0.816',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '455963209',
      },
      {
        quote_price: '0.808',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '635156750',
      },
      {
        quote_price: '0.796',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '901015219',
      },
      {
        quote_price: '0.781',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1338007600',
      },
      {
        quote_price: '0.758',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1757249982',
      },
      {
        quote_price: '0.728',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2152631228',
      },
      {
        quote_price: '0.692',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3358104715',
      },
      {
        quote_price: '0.639',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '4835670790',
      },
      {
        quote_price: '0.57',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '490310000',
      },
      {
        quote_price: '0.567',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.56',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.229',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.15',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2353453444',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1100000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraSigningStargateClientSignAndBroadcast","[[\"1\",\"2\",\"3\",\"4\",null],{\"tmClient\":\"5\",\"queryClient\":\"6\",\"registry\":\"7\",\"aminoTypes\":\"8\",\"signer\":\"9\",\"gasPrice\":\"10\",\"chainId\":\"11\"},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[\"12\"],\"auto\",{\"client\":\"13\"},{\"tmClient\":\"5\",\"auth\":\"14\",\"bank\":\"15\",\"staking\":\"16\",\"tx\":\"17\"},{\"types\":\"18\"},{\"register\":\"19\"},{\"secret\":\"20\",\"seed\":\"21\",\"accounts\":\"22\"},{\"amount\":\"23\",\"denom\":\"24\"},\"harpoon-4\",{\"typeUrl\":\"25\",\"value\":\"26\"},{\"url\":\"27\"},{},{},{},{},{},{\"/cosmos.authz.v1beta1.MsgGrant\":\"28\",\"/cosmos.authz.v1beta1.MsgExec\":\"28\",\"/cosmos.authz.v1beta1.MsgRevoke\":\"28\",\"/cosmos.bank.v1beta1.MsgSend\":\"29\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"30\",\"/cosmos.distribution.v1beta1.MsgFundCommunityPool\":\"31\",\"/cosmos.distribution.v1beta1.MsgSetWithdrawAddress\":\"32\",\"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward\":\"33\",\"/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission\":\"34\",\"/cosmos.gov.v1beta1.MsgDeposit\":\"35\",\"/cosmos.gov.v1beta1.MsgVote\":\"36\",\"/cosmos.gov.v1beta1.MsgVoteWeighted\":\"37\",\"/cosmos.gov.v1beta1.MsgSubmitProposal\":\"38\",\"/cosmos.staking.v1beta1.MsgBeginRedelegate\":\"39\",\"/cosmos.staking.v1beta1.MsgCreateValidator\":\"40\",\"/cosmos.staking.v1beta1.MsgDelegate\":\"41\",\"/cosmos.staking.v1beta1.MsgEditValidator\":\"42\",\"/cosmos.staking.v1beta1.MsgUndelegate\":\"43\",\"/ibc.applications.transfer.v1.MsgTransfer\":\"44\",\"/cosmos.feegrant.v1beta1.MsgGrantAllowance\":\"28\",\"/cosmos.feegrant.v1beta1.MsgRevokeAllowance\":\"28\",\"/cosmos.vesting.v1beta1.MsgCreateVestingAccount\":\"45\"},{\"data\":\"46\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"47\"],{\"data\":\"48\"},\"ukuji\",\"/cosmwasm.wasm.v1.MsgExecuteContract\",{\"sender\":\"2\",\"contract\":\"49\",\"msg\":\"50\",\"funds\":\"51\"},\"https://test-rpc-kujira.mintthemoon.xyz\",\"not_supported_by_chain\",{\"aminoType\":\"52\"},{\"aminoType\":\"53\"},{\"aminoType\":\"54\"},{\"aminoType\":\"55\"},{\"aminoType\":\"56\"},{\"aminoType\":\"57\"},{\"aminoType\":\"58\"},{\"aminoType\":\"59\"},{\"aminoType\":\"60\"},{\"aminoType\":\"61\"},{\"aminoType\":\"62\"},{\"aminoType\":\"63\"},{\"aminoType\":\"64\"},{\"aminoType\":\"65\"},{\"aminoType\":\"66\"},{\"aminoType\":\"67\"},{\"aminoType\":\"68\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"69\",\"prefix\":\"70\"},{\"atomics\":\"71\",\"fractionalDigits\":18},\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"type\":\"72\",\"data\":\"73\"},[\"74\"],\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",\"cosmos-sdk/MsgFundCommunityPool\",\"cosmos-sdk/MsgModifyWithdrawAddress\",\"cosmos-sdk/MsgWithdrawDelegationReward\",\"cosmos-sdk/MsgWithdrawValidatorCommission\",\"cosmos-sdk/MsgDeposit\",\"cosmos-sdk/MsgVote\",\"cosmos-sdk/MsgVoteWeighted\",\"cosmos-sdk/MsgSubmitProposal\",\"cosmos-sdk/MsgBeginRedelegate\",\"cosmos-sdk/MsgCreateValidator\",\"cosmos-sdk/MsgDelegate\",\"cosmos-sdk/MsgEditValidator\",\"cosmos-sdk/MsgUndelegate\",\"cosmos-sdk/MsgTransfer\",\"cosmos-sdk/MsgCreateVestingAccount\",[\"75\",\"76\",\"77\",\"78\",\"79\"],\"kujira\",\"0470de4df82000\",\"Buffer\",[123,34,115,117,98,109,105,116,95,111,114,100,101,114,34,58,123,34,112,114,105,99,101,34,58,34,48,46,56,49,54,34,125,125],{\"denom\":\"24\",\"amount\":\"80\"},{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0},\"1000000\"]","Kujira Orders Create a limit sell order 2 for market 2 (slightly better than the market price)"]`,
  {
    code: 0,
    height: 13875948,
    txIndex: 0,
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '376ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '376ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '376ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '376ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2111',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'qDN+NTG/9jU0AaZT70epjVku07axvrmcxL3Ms5BMo3obLNmYxp4GrvjtL/mi6PBRW22a2BNjEIrA2vlB4kuTOQ==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'action', value: 'submit_order' },
          {
            key: 'market',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'order_idx', value: '5621' },
          { key: 'quote_price', value: '0.816' },
          { key: 'offer_amount', value: '1000000' },
          { key: 'offer_denom', value: 'ukuji' },
        ],
      },
      {
        type: 'wasm-trade',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          {
            key: 'market',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'base_amount', value: '1000000' },
          { key: 'quote_amount', value: '824000' },
          { key: 'type', value: 'sell' },
        ],
      },
    ],
    rawLog:
      '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"amount","value":"1000000ukuji"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000ukuji"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000ukuji"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"action","value":"submit_order"},{"key":"market","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"order_idx","value":"5621"},{"key":"quote_price","value":"0.816"},{"key":"offer_amount","value":"1000000"},{"key":"offer_denom","value":"ukuji"}]},{"type":"wasm-trade","attributes":[{"key":"_contract_address","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"market","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"base_amount","value":"1000000"},{"key":"quote_amount","value":"824000"},{"key":"type","value":"sell"}]}]}]',
    transactionHash:
      'D39D4BE6F0CE039784910E360F34607BF881077B68874C49E7D2F78BF7134F88',
    gasUsed: 249496,
    gasWanted: 300161,
  }
);
data.set(
  `["kujira","kujiraStargateClientGetAllBalances","[[\"1\"],\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Check the available wallet balances from the tokens 1 and 3"]`,
  [
    {
      denom: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
      amount: '79969779797',
    },
    {
      denom:
        'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
      amount: '75303684605',
    },
    { denom: 'ukuji', amount: '2276737626' },
  ]
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Check the available wallet balances from the tokens 1 and 3"]`,
  {
    orders: [
      {
        idx: '178131',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658720665827343',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Check the available wallet balances from the tokens 1 and 3"]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Check the available wallet balances from the tokens 1 and 3"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Orders Check the available wallet balances from the tokens 1 and 3"]`,
  {
    base: [
      {
        quote_price: '0.924',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '318968047',
      },
      {
        quote_price: '0.925',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.926',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '637299432',
      },
      {
        quote_price: '0.928',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '954996058',
      },
      {
        quote_price: '0.93',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1272059823',
      },
      {
        quote_price: '0.932',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1588492615',
      },
      {
        quote_price: '0.936',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2219472800',
      },
      {
        quote_price: '0.941',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3161257580',
      },
      {
        quote_price: '0.945',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3786012043',
      },
      {
        quote_price: '0.951',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4718527324',
      },
      {
        quote_price: '0.953',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.956',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5645546445',
      },
      {
        quote_price: '0.96',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6260529718',
      },
      {
        quote_price: '0.964',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.969',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7787488186',
      },
      {
        quote_price: '0.97',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.979',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9299621815',
      },
      {
        quote_price: '0.984',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.985',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.988',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '12280269833',
      },
      {
        quote_price: '1',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '1.117',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '29026092332',
      },
      {
        quote_price: '1.2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '1.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '3',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '4',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '199',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7499952127',
      },
      {
        quote_price: '200',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1241705675',
      },
      {
        quote_price: '210.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3000000',
      },
      {
        quote_price: '298',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '340',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '348',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '600000001',
      },
      {
        quote_price: '349',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '950346001',
      },
      {
        quote_price: '350',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '78004798',
      },
      {
        quote_price: '358',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '372',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '21000000',
      },
      {
        quote_price: '380',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '396',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '398',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '399',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '34000000',
      },
      {
        quote_price: '400',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '193852001',
      },
      {
        quote_price: '420',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14556000',
      },
      {
        quote_price: '480',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8311000',
      },
      {
        quote_price: '500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '47905000',
      },
      {
        quote_price: '600',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '749',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '800',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '62000',
      },
      {
        quote_price: '890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14400000',
      },
      {
        quote_price: '1500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1583',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '80000',
      },
      {
        quote_price: '1889',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '712757000',
      },
      {
        quote_price: '1890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '1900',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '140613000',
      },
      {
        quote_price: '1999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9010000',
      },
      {
        quote_price: '2500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '2990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '300000000',
      },
      {
        quote_price: '4500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '38000000',
      },
      {
        quote_price: '5000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '31000000',
      },
      {
        quote_price: '9000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4991000',
      },
      {
        quote_price: '9998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7180000',
      },
      {
        quote_price: '9999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200490002',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100',
      },
      {
        quote_price: '10000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8000000',
      },
      {
        quote_price: '24500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '29500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '41000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '70000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '77777',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '85000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '92000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '98000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000000',
      },
      {
        quote_price: '100000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2540000',
      },
      {
        quote_price: '150000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '186000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '200000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '225000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '400000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000',
      },
      {
        quote_price: '500000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '550550',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '650000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7000000',
      },
      {
        quote_price: '770000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '880000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '900000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '201000000',
      },
      {
        quote_price: '973007',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '35000000',
      },
      {
        quote_price: '990990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '999998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '1000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '368020000',
      },
      {
        quote_price: '5000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '10000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '30000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '80000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '90000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '95000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '1000000000000000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '22226974000',
      },
    ],
    quote: [
      {
        quote_price: '0.921',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '294453803',
      },
      {
        quote_price: '0.92',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.919',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '588319874',
      },
      {
        quote_price: '0.918',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.917',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '881599970',
      },
      {
        quote_price: '0.915',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1174295843',
      },
      {
        quote_price: '0.913',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1466409237',
      },
      {
        quote_price: '0.91',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2048895528',
      },
      {
        quote_price: '0.904',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2918299571',
      },
      {
        quote_price: '0.901',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '3495038617',
      },
      {
        quote_price: '0.896',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4355885567',
      },
      {
        quote_price: '0.89',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5211658763',
      },
      {
        quote_price: '0.887',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5779377583',
      },
      {
        quote_price: '0.878',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '7188981872',
      },
      {
        quote_price: '0.87',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8584900682',
      },
      {
        quote_price: '0.858',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.857',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.855',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1000000000',
      },
      {
        quote_price: '0.854',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.853',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '11336471413',
      },
      {
        quote_price: '0.851',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.85',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.849',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.829',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.8',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '110000000',
      },
      {
        quote_price: '0.789',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.783',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.762',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '26795296069',
      },
      {
        quote_price: '0.738',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.699',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.666',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.634',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.599',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4',
      },
      {
        quote_price: '0.5',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '113000008',
      },
      {
        quote_price: '0.424',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.422',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.418',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.41',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.4',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000001',
      },
      {
        quote_price: '0.3',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000',
      },
      {
        quote_price: '0.21',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.17',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '93114000',
      },
      {
        quote_price: '0.16',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8000000000',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1031069000',
      },
      {
        quote_price: '0.055',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.01',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.005',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '107987001',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Orders Check the available wallet balances from the tokens 1 and 3"]`,
  {
    base: [
      {
        quote_price: '5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7738151',
      },
      {
        quote_price: '11',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000',
      },
    ],
    quote: [
      {
        quote_price: '0.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '326407702',
      },
      {
        quote_price: '0.816',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '455963209',
      },
      {
        quote_price: '0.808',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '635156750',
      },
      {
        quote_price: '0.796',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '901015219',
      },
      {
        quote_price: '0.781',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1338007600',
      },
      {
        quote_price: '0.758',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1757249982',
      },
      {
        quote_price: '0.728',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2152631228',
      },
      {
        quote_price: '0.692',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3358104715',
      },
      {
        quote_price: '0.639',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '4835670790',
      },
      {
        quote_price: '0.57',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '490310000',
      },
      {
        quote_price: '0.567',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.56',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.229',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.15',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2353453444',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1100000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Orders Check the available wallet balances from the tokens 1 and 3"]`,
  {
    base: [
      {
        quote_price: '11.221',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24790063',
      },
      {
        quote_price: '11.222',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.227',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.232',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.237',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.242',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.243',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24765273',
      },
      {
        quote_price: '11.246',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.251',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.258',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.259',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '49481016',
      },
      {
        quote_price: '11.291',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.296',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.312',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24691027',
      },
      {
        quote_price: '11.315',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.32',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.325',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.344',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.351',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.38',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '123331680',
      },
      {
        quote_price: '11.553',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '245430043',
      },
      {
        quote_price: '11.909',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '485951486',
      },
      {
        quote_price: '12.088',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '12.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '238116228',
      },
      {
        quote_price: '13.056',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1178675331',
      },
      {
        quote_price: '15.277',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2239483129',
      },
      {
        quote_price: '24.274',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '6046604448',
      },
      {
        quote_price: '9999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2000000',
      },
    ],
    quote: [
      {
        quote_price: '10.979',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '10.978',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '275148478',
      },
      {
        quote_price: '10.956',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274873330',
      },
      {
        quote_price: '10.923',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '549196914',
      },
      {
        quote_price: '10.89',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274049260',
      },
      {
        quote_price: '10.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1368876054',
      },
      {
        quote_price: '10.662',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2724063348',
      },
      {
        quote_price: '10.343',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '5393645429',
      },
      {
        quote_price: '10.033',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2642886260',
      },
      {
        quote_price: '9.435',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '13082286989',
      },
      {
        quote_price: '8.063',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '24856345279',
      },
      {
        quote_price: '5.074',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '67112132254',
      },
      {
        quote_price: '1.333',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11923296614',
      },
      {
        quote_price: '1.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11996500000',
      },
      {
        quote_price: '1.161',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '839000',
      },
      {
        quote_price: '1.133',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '844308',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get the filled order 2"]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraSigningStargateClientSignAndBroadcast","[[\"1\",\"2\",\"3\",\"4\",null],{\"tmClient\":\"5\",\"queryClient\":\"6\",\"registry\":\"7\",\"aminoTypes\":\"8\",\"signer\":\"9\",\"gasPrice\":\"10\",\"chainId\":\"11\"},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[\"12\"],\"auto\",{\"client\":\"13\"},{\"tmClient\":\"5\",\"auth\":\"14\",\"bank\":\"15\",\"staking\":\"16\",\"tx\":\"17\"},{\"types\":\"18\"},{\"register\":\"19\"},{\"secret\":\"20\",\"seed\":\"21\",\"accounts\":\"22\"},{\"amount\":\"23\",\"denom\":\"24\"},\"harpoon-4\",{\"typeUrl\":\"25\",\"value\":\"26\"},{\"url\":\"27\"},{},{},{},{},{},{\"/cosmos.authz.v1beta1.MsgGrant\":\"28\",\"/cosmos.authz.v1beta1.MsgExec\":\"28\",\"/cosmos.authz.v1beta1.MsgRevoke\":\"28\",\"/cosmos.bank.v1beta1.MsgSend\":\"29\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"30\",\"/cosmos.distribution.v1beta1.MsgFundCommunityPool\":\"31\",\"/cosmos.distribution.v1beta1.MsgSetWithdrawAddress\":\"32\",\"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward\":\"33\",\"/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission\":\"34\",\"/cosmos.gov.v1beta1.MsgDeposit\":\"35\",\"/cosmos.gov.v1beta1.MsgVote\":\"36\",\"/cosmos.gov.v1beta1.MsgVoteWeighted\":\"37\",\"/cosmos.gov.v1beta1.MsgSubmitProposal\":\"38\",\"/cosmos.staking.v1beta1.MsgBeginRedelegate\":\"39\",\"/cosmos.staking.v1beta1.MsgCreateValidator\":\"40\",\"/cosmos.staking.v1beta1.MsgDelegate\":\"41\",\"/cosmos.staking.v1beta1.MsgEditValidator\":\"42\",\"/cosmos.staking.v1beta1.MsgUndelegate\":\"43\",\"/ibc.applications.transfer.v1.MsgTransfer\":\"44\",\"/cosmos.feegrant.v1beta1.MsgGrantAllowance\":\"28\",\"/cosmos.feegrant.v1beta1.MsgRevokeAllowance\":\"28\",\"/cosmos.vesting.v1beta1.MsgCreateVestingAccount\":\"45\"},{\"data\":\"46\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"47\"],{\"data\":\"48\"},\"ukuji\",\"/cosmwasm.wasm.v1.MsgExecuteContract\",{\"sender\":\"2\",\"contract\":\"49\",\"msg\":\"50\",\"funds\":\"51\"},\"https://test-rpc-kujira.mintthemoon.xyz\",\"not_supported_by_chain\",{\"aminoType\":\"52\"},{\"aminoType\":\"53\"},{\"aminoType\":\"54\"},{\"aminoType\":\"55\"},{\"aminoType\":\"56\"},{\"aminoType\":\"57\"},{\"aminoType\":\"58\"},{\"aminoType\":\"59\"},{\"aminoType\":\"60\"},{\"aminoType\":\"61\"},{\"aminoType\":\"62\"},{\"aminoType\":\"63\"},{\"aminoType\":\"64\"},{\"aminoType\":\"65\"},{\"aminoType\":\"66\"},{\"aminoType\":\"67\"},{\"aminoType\":\"68\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"69\",\"prefix\":\"70\"},{\"atomics\":\"71\",\"fractionalDigits\":18},\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"type\":\"72\",\"data\":\"73\"},[\"74\"],\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",\"cosmos-sdk/MsgFundCommunityPool\",\"cosmos-sdk/MsgModifyWithdrawAddress\",\"cosmos-sdk/MsgWithdrawDelegationReward\",\"cosmos-sdk/MsgWithdrawValidatorCommission\",\"cosmos-sdk/MsgDeposit\",\"cosmos-sdk/MsgVote\",\"cosmos-sdk/MsgVoteWeighted\",\"cosmos-sdk/MsgSubmitProposal\",\"cosmos-sdk/MsgBeginRedelegate\",\"cosmos-sdk/MsgCreateValidator\",\"cosmos-sdk/MsgDelegate\",\"cosmos-sdk/MsgEditValidator\",\"cosmos-sdk/MsgUndelegate\",\"cosmos-sdk/MsgTransfer\",\"cosmos-sdk/MsgCreateVestingAccount\",[\"75\",\"76\",\"77\",\"78\",\"79\"],\"kujira\",\"0470de4df82000\",\"Buffer\",[123,34,115,119,97,112,34,58,123,125,125],{\"denom\":\"80\",\"amount\":\"81\"},{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0},\"factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo\",\"1000000\"]","Kujira Orders Create a market sell order 3 for market 3"]`,
  {
    code: 0,
    height: 13875953,
    txIndex: 0,
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1537ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '1537ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1537ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '1537ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2112',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'm/GBFcZi/wgiWInfFyAGC8RB1ylBYkc3TM2PMJfI2tNpnsd9fq6CoF4JICWGUcH6SAG2vDmFL+RGD9fh91K9cw==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          { key: 'action', value: 'swap' },
          {
            key: 'market',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          { key: 'offer_amount', value: '1000000' },
          {
            key: 'offer_denom',
            value: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'wasm-trade',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'market',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          { key: 'base_amount', value: '0' },
          { key: 'quote_amount', value: '1' },
          { key: 'type', value: 'sell' },
        ],
      },
      {
        type: 'wasm-trade',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'market',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          { key: 'base_amount', value: '999999' },
          { key: 'quote_amount', value: '10978000' },
          { key: 'type', value: 'sell' },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'amount',
            value:
              '10961534factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '10961534factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'sender',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'amount',
            value:
              '10961534factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'amount',
            value:
              '16467factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'amount',
            value:
              '16467factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'amount',
            value:
              '16467factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
    ],
    rawLog:
      '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"},{"key":"receiver","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"10961534factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"},{"key":"receiver","value":"kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh"},{"key":"amount","value":"16467factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"},{"key":"spender","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"amount","value":"10961534factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"},{"key":"spender","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"amount","value":"16467factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"},{"key":"recipient","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"sender","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"amount","value":"10961534factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"},{"key":"recipient","value":"kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh"},{"key":"sender","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"amount","value":"16467factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"action","value":"swap"},{"key":"market","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"offer_amount","value":"1000000"},{"key":"offer_denom","value":"factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"wasm-trade","attributes":[{"key":"_contract_address","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"market","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"base_amount","value":"0"},{"key":"quote_amount","value":"1"},{"key":"type","value":"sell"},{"key":"_contract_address","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"market","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"base_amount","value":"999999"},{"key":"quote_amount","value":"10978000"},{"key":"type","value":"sell"}]}]}]',
    transactionHash:
      'F1442E11376397F43D579D79F61E0D1E54A58595E4C005666360CA014B5224F5',
    gasUsed: 964287,
    gasWanted: 1229337,
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Orders Create 8 orders at once"]`,
  {
    base: [
      {
        quote_price: '11.22',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24791062',
      },
      {
        quote_price: '11.222',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.227',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.232',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.237',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.242',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.243',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24766271',
      },
      {
        quote_price: '11.246',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.251',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.258',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.259',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.276',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '49483010',
      },
      {
        quote_price: '11.291',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.296',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.311',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '24692022',
      },
      {
        quote_price: '11.315',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.32',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.325',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.344',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.351',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '11.379',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '123336651',
      },
      {
        quote_price: '11.552',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '245439936',
      },
      {
        quote_price: '11.908',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '485971074',
      },
      {
        quote_price: '12.088',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '12.276',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '238125826',
      },
      {
        quote_price: '13.054',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1178722841',
      },
      {
        quote_price: '15.276',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2239573399',
      },
      {
        quote_price: '24.272',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '6046848178',
      },
      {
        quote_price: '9999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2000000',
      },
    ],
    quote: [
      {
        quote_price: '10.977',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '275137500',
      },
      {
        quote_price: '10.955',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274862363',
      },
      {
        quote_price: '10.922',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '549175001',
      },
      {
        quote_price: '10.889',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '274038325',
      },
      {
        quote_price: '10.824',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1368821438',
      },
      {
        quote_price: '10.661',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2723954662',
      },
      {
        quote_price: '10.342',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '5393430231',
      },
      {
        quote_price: '10.032',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '2642780813',
      },
      {
        quote_price: '9.434',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '13081765026',
      },
      {
        quote_price: '8.062',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '24855353549',
      },
      {
        quote_price: '5.074',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '67109454584',
      },
      {
        quote_price: '1.333',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11923296614',
      },
      {
        quote_price: '1.2',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '11996500000',
      },
      {
        quote_price: '1.161',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '839000',
      },
      {
        quote_price: '1.133',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '3',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        total_offer_amount: '844308',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"book\":\"3\"},{\"offset\":0,\"limit\":255}]","Kujira Orders Create 8 orders at once"]`,
  {
    base: [
      {
        quote_price: '0.924',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '318968047',
      },
      {
        quote_price: '0.925',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.926',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '637299432',
      },
      {
        quote_price: '0.928',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '954996058',
      },
      {
        quote_price: '0.93',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1272059823',
      },
      {
        quote_price: '0.932',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1588492615',
      },
      {
        quote_price: '0.936',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2219472800',
      },
      {
        quote_price: '0.941',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3161257580',
      },
      {
        quote_price: '0.945',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3786012043',
      },
      {
        quote_price: '0.951',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4718527324',
      },
      {
        quote_price: '0.953',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.956',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5645546445',
      },
      {
        quote_price: '0.96',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6260529718',
      },
      {
        quote_price: '0.964',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.969',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7787488186',
      },
      {
        quote_price: '0.97',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.979',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9299621815',
      },
      {
        quote_price: '0.984',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.985',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.988',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '12280269833',
      },
      {
        quote_price: '1',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '6',
      },
      {
        quote_price: '1.117',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '29026092332',
      },
      {
        quote_price: '1.2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '1.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2',
      },
      {
        quote_price: '2',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '3',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '4',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '199',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7499952127',
      },
      {
        quote_price: '200',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1241705675',
      },
      {
        quote_price: '210.5',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '3000000',
      },
      {
        quote_price: '298',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '340',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1',
      },
      {
        quote_price: '348',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '600000001',
      },
      {
        quote_price: '349',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '950346001',
      },
      {
        quote_price: '350',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '78004798',
      },
      {
        quote_price: '358',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '372',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '21000000',
      },
      {
        quote_price: '380',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '396',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '398',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '399',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '34000000',
      },
      {
        quote_price: '400',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '193852001',
      },
      {
        quote_price: '420',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14556000',
      },
      {
        quote_price: '480',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8311000',
      },
      {
        quote_price: '500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '47905000',
      },
      {
        quote_price: '600',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '749',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '800',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '62000',
      },
      {
        quote_price: '890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '14400000',
      },
      {
        quote_price: '1500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2500000',
      },
      {
        quote_price: '1583',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '80000',
      },
      {
        quote_price: '1889',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '712757000',
      },
      {
        quote_price: '1890',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '1900',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '140613000',
      },
      {
        quote_price: '1999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '9010000',
      },
      {
        quote_price: '2500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '2990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '300000000',
      },
      {
        quote_price: '4500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '38000000',
      },
      {
        quote_price: '5000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '31000000',
      },
      {
        quote_price: '9000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '4991000',
      },
      {
        quote_price: '9998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7180000',
      },
      {
        quote_price: '9999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '200490002',
      },
      {
        quote_price: '9999.999',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '100',
      },
      {
        quote_price: '10000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '8000000',
      },
      {
        quote_price: '24500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '50000000',
      },
      {
        quote_price: '29500',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '41000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '70000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '77777',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '85000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '92000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '98000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2000000',
      },
      {
        quote_price: '100000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '2540000',
      },
      {
        quote_price: '150000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '186000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '200000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '500000',
      },
      {
        quote_price: '225000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '400000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000',
      },
      {
        quote_price: '500000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '550550',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '650000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '7000000',
      },
      {
        quote_price: '770000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '880000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '5000000',
      },
      {
        quote_price: '900000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '201000000',
      },
      {
        quote_price: '973007',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '35000000',
      },
      {
        quote_price: '990990',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '999998',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '1000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '368020000',
      },
      {
        quote_price: '5000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '10000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '30000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '80000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '20000000',
      },
      {
        quote_price: '90000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '10000000',
      },
      {
        quote_price: '95000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '1000000',
      },
      {
        quote_price: '1000000000000000000',
        offer_denom: { native: 'ukuji' },
        total_offer_amount: '22226974000',
      },
    ],
    quote: [
      {
        quote_price: '0.921',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '294453803',
      },
      {
        quote_price: '0.92',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.919',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '588319874',
      },
      {
        quote_price: '0.918',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.917',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '881599970',
      },
      {
        quote_price: '0.915',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1174295843',
      },
      {
        quote_price: '0.913',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1466409237',
      },
      {
        quote_price: '0.91',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2048895528',
      },
      {
        quote_price: '0.904',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2918299571',
      },
      {
        quote_price: '0.901',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '3495038617',
      },
      {
        quote_price: '0.896',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4355885567',
      },
      {
        quote_price: '0.89',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5211658763',
      },
      {
        quote_price: '0.887',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5779377583',
      },
      {
        quote_price: '0.878',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '7188981872',
      },
      {
        quote_price: '0.87',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8584900682',
      },
      {
        quote_price: '0.858',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.857',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.855',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1000000000',
      },
      {
        quote_price: '0.854',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.853',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '11336471413',
      },
      {
        quote_price: '0.851',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.85',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.849',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.829',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.8',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '110000000',
      },
      {
        quote_price: '0.789',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.783',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.762',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '26795296069',
      },
      {
        quote_price: '0.738',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.699',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.666',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.634',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.599',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '4',
      },
      {
        quote_price: '0.5',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '113000008',
      },
      {
        quote_price: '0.424',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '2',
      },
      {
        quote_price: '0.422',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.418',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.41',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1',
      },
      {
        quote_price: '0.4',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000001',
      },
      {
        quote_price: '0.3',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000',
      },
      {
        quote_price: '0.21',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.2',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '200000000',
      },
      {
        quote_price: '0.17',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '93114000',
      },
      {
        quote_price: '0.16',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '8000000000',
      },
      {
        quote_price: '0.1',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '1031069000',
      },
      {
        quote_price: '0.055',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.01',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '5000000000',
      },
      {
        quote_price: '0.005',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '100000000',
      },
      {
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        total_offer_amount: '107987001',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraSigningStargateClientSignAndBroadcast","[[\"1\",\"2\",\"3\",\"4\",null],{\"tmClient\":\"5\",\"queryClient\":\"6\",\"registry\":\"7\",\"aminoTypes\":\"8\",\"signer\":\"9\",\"gasPrice\":\"10\",\"chainId\":\"11\"},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\"],\"auto\",{\"client\":\"20\"},{\"tmClient\":\"5\",\"auth\":\"21\",\"bank\":\"22\",\"staking\":\"23\",\"tx\":\"24\"},{\"types\":\"25\"},{\"register\":\"26\"},{\"secret\":\"27\",\"seed\":\"28\",\"accounts\":\"29\"},{\"amount\":\"30\",\"denom\":\"31\"},\"harpoon-4\",{\"typeUrl\":\"32\",\"value\":\"33\"},{\"typeUrl\":\"32\",\"value\":\"34\"},{\"typeUrl\":\"32\",\"value\":\"35\"},{\"typeUrl\":\"32\",\"value\":\"36\"},{\"typeUrl\":\"32\",\"value\":\"37\"},{\"typeUrl\":\"32\",\"value\":\"38\"},{\"typeUrl\":\"32\",\"value\":\"39\"},{\"typeUrl\":\"32\",\"value\":\"40\"},{\"url\":\"41\"},{},{},{},{},{},{\"/cosmos.authz.v1beta1.MsgGrant\":\"42\",\"/cosmos.authz.v1beta1.MsgExec\":\"42\",\"/cosmos.authz.v1beta1.MsgRevoke\":\"42\",\"/cosmos.bank.v1beta1.MsgSend\":\"43\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"44\",\"/cosmos.distribution.v1beta1.MsgFundCommunityPool\":\"45\",\"/cosmos.distribution.v1beta1.MsgSetWithdrawAddress\":\"46\",\"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward\":\"47\",\"/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission\":\"48\",\"/cosmos.gov.v1beta1.MsgDeposit\":\"49\",\"/cosmos.gov.v1beta1.MsgVote\":\"50\",\"/cosmos.gov.v1beta1.MsgVoteWeighted\":\"51\",\"/cosmos.gov.v1beta1.MsgSubmitProposal\":\"52\",\"/cosmos.staking.v1beta1.MsgBeginRedelegate\":\"53\",\"/cosmos.staking.v1beta1.MsgCreateValidator\":\"54\",\"/cosmos.staking.v1beta1.MsgDelegate\":\"55\",\"/cosmos.staking.v1beta1.MsgEditValidator\":\"56\",\"/cosmos.staking.v1beta1.MsgUndelegate\":\"57\",\"/ibc.applications.transfer.v1.MsgTransfer\":\"58\",\"/cosmos.feegrant.v1beta1.MsgGrantAllowance\":\"42\",\"/cosmos.feegrant.v1beta1.MsgRevokeAllowance\":\"42\",\"/cosmos.vesting.v1beta1.MsgCreateVestingAccount\":\"59\"},{\"data\":\"60\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"61\"],{\"data\":\"62\"},\"ukuji\",\"/cosmwasm.wasm.v1.MsgExecuteContract\",{\"sender\":\"2\",\"contract\":\"63\",\"msg\":\"64\",\"funds\":\"65\"},{\"sender\":\"2\",\"contract\":\"66\",\"msg\":\"67\",\"funds\":\"68\"},{\"sender\":\"2\",\"contract\":\"69\",\"msg\":\"70\",\"funds\":\"71\"},{\"sender\":\"2\",\"contract\":\"63\",\"msg\":\"72\",\"funds\":\"73\"},{\"sender\":\"2\",\"contract\":\"66\",\"msg\":\"74\",\"funds\":\"75\"},{\"sender\":\"2\",\"contract\":\"69\",\"msg\":\"76\",\"funds\":\"77\"},{\"sender\":\"2\",\"contract\":\"63\",\"msg\":\"78\",\"funds\":\"79\"},{\"sender\":\"2\",\"contract\":\"66\",\"msg\":\"80\",\"funds\":\"81\"},\"https://test-rpc-kujira.mintthemoon.xyz\",\"not_supported_by_chain\",{\"aminoType\":\"82\"},{\"aminoType\":\"83\"},{\"aminoType\":\"84\"},{\"aminoType\":\"85\"},{\"aminoType\":\"86\"},{\"aminoType\":\"87\"},{\"aminoType\":\"88\"},{\"aminoType\":\"89\"},{\"aminoType\":\"90\"},{\"aminoType\":\"91\"},{\"aminoType\":\"92\"},{\"aminoType\":\"93\"},{\"aminoType\":\"94\"},{\"aminoType\":\"95\"},{\"aminoType\":\"96\"},{\"aminoType\":\"97\"},{\"aminoType\":\"98\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"99\",\"prefix\":\"100\"},{\"atomics\":\"101\",\"fractionalDigits\":18},\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"type\":\"102\",\"data\":\"103\"},[\"104\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"type\":\"102\",\"data\":\"105\"},[\"106\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"type\":\"102\",\"data\":\"107\"},[\"108\"],{\"type\":\"102\",\"data\":\"109\"},[\"110\"],{\"type\":\"102\",\"data\":\"111\"},[\"112\"],{\"type\":\"102\",\"data\":\"113\"},[\"114\"],{\"type\":\"102\",\"data\":\"115\"},[\"116\"],{\"type\":\"102\",\"data\":\"117\"},[\"118\"],\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",\"cosmos-sdk/MsgFundCommunityPool\",\"cosmos-sdk/MsgModifyWithdrawAddress\",\"cosmos-sdk/MsgWithdrawDelegationReward\",\"cosmos-sdk/MsgWithdrawValidatorCommission\",\"cosmos-sdk/MsgDeposit\",\"cosmos-sdk/MsgVote\",\"cosmos-sdk/MsgVoteWeighted\",\"cosmos-sdk/MsgSubmitProposal\",\"cosmos-sdk/MsgBeginRedelegate\",\"cosmos-sdk/MsgCreateValidator\",\"cosmos-sdk/MsgDelegate\",\"cosmos-sdk/MsgEditValidator\",\"cosmos-sdk/MsgUndelegate\",\"cosmos-sdk/MsgTransfer\",\"cosmos-sdk/MsgCreateVestingAccount\",[\"119\",\"120\",\"121\",\"122\",\"123\"],\"kujira\",\"0470de4df82000\",\"Buffer\",[123,34,115,117,98,109,105,116,95,111,114,100,101,114,34,58,123,34,112,114,105,99,101,34,58,34,48,46,48,48,49,34,125,125],{\"denom\":\"124\",\"amount\":\"125\"},[123,34,115,117,98,109,105,116,95,111,114,100,101,114,34,58,123,34,112,114,105,99,101,34,58,34,57,57,57,46,57,57,57,34,125,125],{\"denom\":\"31\",\"amount\":\"125\"},[123,34,115,117,98,109,105,116,95,111,114,100,101,114,34,58,123,34,112,114,105,99,101,34,58,34,49,49,46,52,52,52,34,125,125],{\"denom\":\"126\",\"amount\":\"125\"},[123,34,115,117,98,109,105,116,95,111,114,100,101,114,34,58,123,34,112,114,105,99,101,34,58,34,48,46,57,48,51,34,125,125],{\"denom\":\"31\",\"amount\":\"125\"},[123,34,115,117,98,109,105,116,95,111,114,100,101,114,34,58,123,34,112,114,105,99,101,34,58,34,48,46,48,48,49,34,125,125],{\"denom\":\"126\",\"amount\":\"125\"},[123,34,115,117,98,109,105,116,95,111,114,100,101,114,34,58,123,34,112,114,105,99,101,34,58,34,57,57,57,46,57,57,57,34,125,125],{\"denom\":\"124\",\"amount\":\"125\"},[123,34,115,119,97,112,34,58,123,125,125],{\"denom\":\"124\",\"amount\":\"125\"},[123,34,115,119,97,112,34,58,123,125,125],{\"denom\":\"31\",\"amount\":\"125\"},{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0},\"factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo\",\"1000000\",\"factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk\"]","Kujira Orders Create 8 orders at once"]`,
  {
    code: 0,
    height: 13875957,
    txIndex: 0,
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '12136ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '12136ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '12136ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '12136ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2113',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'JkbsbsnmOHYBe0gWBlG8mUnl1J0Bh1IVmBT4k25LgeNIln4m8YGjXk8hbjkj/QiPjRTPG3ULMjt+pKAWjOt/ZQ==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'action', value: 'submit_order' },
          {
            key: 'market',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'order_idx', value: '178132' },
          { key: 'quote_price', value: '0.001' },
          { key: 'offer_amount', value: '1000000' },
          {
            key: 'offer_denom',
            value: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'action', value: 'submit_order' },
          {
            key: 'market',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'order_idx', value: '5622' },
          { key: 'quote_price', value: '999.999' },
          { key: 'offer_amount', value: '1000000' },
          { key: 'offer_denom', value: 'ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          { key: 'action', value: 'submit_order' },
          {
            key: 'market',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          { key: 'order_idx', value: '25037' },
          { key: 'quote_price', value: '11.444' },
          { key: 'offer_amount', value: '1000000' },
          {
            key: 'offer_denom',
            value:
              'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'wasm-trade',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'market',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          { key: 'base_amount', value: '89126' },
          { key: 'quote_amount', value: '1000000' },
          { key: 'type', value: 'buy' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'action', value: 'submit_order' },
          {
            key: 'market',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'order_idx', value: '178133' },
          { key: 'quote_price', value: '0.903' },
          { key: 'offer_amount', value: '1000000' },
          { key: 'offer_denom', value: 'ukuji' },
        ],
      },
      {
        type: 'wasm-trade',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'market',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'base_amount', value: '1000000' },
          { key: 'quote_amount', value: '921000' },
          { key: 'type', value: 'sell' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'action', value: 'submit_order' },
          {
            key: 'market',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'order_idx', value: '5623' },
          { key: 'quote_price', value: '0.001' },
          { key: 'offer_amount', value: '1000000' },
          {
            key: 'offer_denom',
            value:
              'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          { key: 'action', value: 'submit_order' },
          {
            key: 'market',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          { key: 'order_idx', value: '25038' },
          { key: 'quote_price', value: '999.999' },
          { key: 'offer_amount', value: '1000000' },
          {
            key: 'offer_denom',
            value: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'action', value: 'swap' },
          {
            key: 'market',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'offer_amount', value: '1000000' },
          {
            key: 'offer_denom',
            value: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'wasm-trade',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'market',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'base_amount', value: '1080628' },
          { key: 'quote_amount', value: '1000000' },
          { key: 'type', value: 'buy' },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'amount', value: '1080628ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1080628ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'sender',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'amount', value: '1080628ukuji' },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'amount', value: '1623ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '1623ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'amount', value: '1623ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'action', value: 'swap' },
          {
            key: 'market',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'offer_amount', value: '1000000' },
          { key: 'offer_denom', value: 'ukuji' },
        ],
      },
      {
        type: 'wasm-trade',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          {
            key: 'market',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'base_amount', value: '999999' },
          { key: 'quote_amount', value: '824000' },
          { key: 'type', value: 'sell' },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          {
            key: 'amount',
            value:
              '821528factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '821528factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'sender',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          {
            key: 'amount',
            value:
              '821528factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          {
            key: 'amount',
            value:
              '2472factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'amount',
            value:
              '2472factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          {
            key: 'amount',
            value:
              '2472factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
    ],
    rawLog:
      '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"action","value":"submit_order"},{"key":"market","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"order_idx","value":"178132"},{"key":"quote_price","value":"0.001"},{"key":"offer_amount","value":"1000000"},{"key":"offer_denom","value":"factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]}]},{"msg_index":1,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"amount","value":"1000000ukuji"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000ukuji"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000ukuji"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"action","value":"submit_order"},{"key":"market","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"order_idx","value":"5622"},{"key":"quote_price","value":"999.999"},{"key":"offer_amount","value":"1000000"},{"key":"offer_denom","value":"ukuji"}]}]},{"msg_index":2,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"amount","value":"1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"action","value":"submit_order"},{"key":"market","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"order_idx","value":"25037"},{"key":"quote_price","value":"11.444"},{"key":"offer_amount","value":"1000000"},{"key":"offer_denom","value":"factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"wasm-trade","attributes":[{"key":"_contract_address","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"market","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"base_amount","value":"89126"},{"key":"quote_amount","value":"1000000"},{"key":"type","value":"buy"}]}]},{"msg_index":3,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1000000ukuji"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000ukuji"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000ukuji"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"action","value":"submit_order"},{"key":"market","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"order_idx","value":"178133"},{"key":"quote_price","value":"0.903"},{"key":"offer_amount","value":"1000000"},{"key":"offer_denom","value":"ukuji"}]},{"type":"wasm-trade","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"market","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"base_amount","value":"1000000"},{"key":"quote_amount","value":"921000"},{"key":"type","value":"sell"}]}]},{"msg_index":4,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"amount","value":"1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"action","value":"submit_order"},{"key":"market","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"order_idx","value":"5623"},{"key":"quote_price","value":"0.001"},{"key":"offer_amount","value":"1000000"},{"key":"offer_denom","value":"factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]}]},{"msg_index":5,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"action","value":"submit_order"},{"key":"market","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"order_idx","value":"25038"},{"key":"quote_price","value":"999.999"},{"key":"offer_amount","value":"1000000"},{"key":"offer_denom","value":"factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]}]},{"msg_index":6,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"},{"key":"receiver","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1080628ukuji"},{"key":"receiver","value":"kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh"},{"key":"amount","value":"1623ukuji"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"},{"key":"spender","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1080628ukuji"},{"key":"spender","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1623ukuji"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"},{"key":"recipient","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"sender","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1080628ukuji"},{"key":"recipient","value":"kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh"},{"key":"sender","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1623ukuji"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"action","value":"swap"},{"key":"market","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"offer_amount","value":"1000000"},{"key":"offer_denom","value":"factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"wasm-trade","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"market","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"base_amount","value":"1080628"},{"key":"quote_amount","value":"1000000"},{"key":"type","value":"buy"}]}]},{"msg_index":7,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"amount","value":"1000000ukuji"},{"key":"receiver","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"821528factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"},{"key":"receiver","value":"kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh"},{"key":"amount","value":"2472factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000ukuji"},{"key":"spender","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"amount","value":"821528factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"},{"key":"spender","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"amount","value":"2472factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000ukuji"},{"key":"recipient","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"sender","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"amount","value":"821528factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"},{"key":"recipient","value":"kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh"},{"key":"sender","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"amount","value":"2472factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"action","value":"swap"},{"key":"market","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"offer_amount","value":"1000000"},{"key":"offer_denom","value":"ukuji"}]},{"type":"wasm-trade","attributes":[{"key":"_contract_address","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"market","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"base_amount","value":"999999"},{"key":"quote_amount","value":"824000"},{"key":"type","value":"sell"}]}]}]',
    transactionHash:
      '293EADE6890C5104CF958A1827397B85D014C67C66D9A27C7CE391CEC8B845D3',
    gasUsed: 7483686,
    gasWanted: 9708154,
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get the open orders 8 and 9"]`,
  {
    orders: [
      {
        idx: '178131',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658720665827343',
        original_offer_amount: '1000000',
      },
      {
        idx: '178132',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get the open orders 8 and 9"]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
      {
        idx: '5622',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.999',
        offer_denom: { native: 'ukuji' },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '5623',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get the open orders 8 and 9"]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '25038',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all open orders and check that the orders 2, 3, 6, 7, 10, and 11 are missing"]`,
  {
    orders: [
      {
        idx: '178131',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658720665827343',
        original_offer_amount: '1000000',
      },
      {
        idx: '178132',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all open orders and check that the orders 2, 3, 6, 7, 10, and 11 are missing"]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
      {
        idx: '5622',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.999',
        offer_denom: { native: 'ukuji' },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '5623',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all open orders and check that the orders 2, 3, 6, 7, 10, and 11 are missing"]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '25038',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Cancel the order 1"]`,
  {
    orders: [
      {
        idx: '178131',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658720665827343',
        original_offer_amount: '1000000',
      },
      {
        idx: '178132',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Cancel the order 1"]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
      {
        idx: '5622',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.999',
        offer_denom: { native: 'ukuji' },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '5623',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Cancel the order 1"]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '25038',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraSigningStargateClientSignAndBroadcast","[[\"1\",\"2\",\"3\",\"4\",null],{\"tmClient\":\"5\",\"queryClient\":\"6\",\"registry\":\"7\",\"aminoTypes\":\"8\",\"signer\":\"9\",\"gasPrice\":\"10\",\"chainId\":\"11\"},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[\"12\"],\"auto\",{\"client\":\"13\"},{\"tmClient\":\"5\",\"auth\":\"14\",\"bank\":\"15\",\"staking\":\"16\",\"tx\":\"17\"},{\"types\":\"18\"},{\"register\":\"19\"},{\"secret\":\"20\",\"seed\":\"21\",\"accounts\":\"22\"},{\"amount\":\"23\",\"denom\":\"24\"},\"harpoon-4\",{\"typeUrl\":\"25\",\"value\":\"26\"},{\"url\":\"27\"},{},{},{},{},{},{\"/cosmos.authz.v1beta1.MsgGrant\":\"28\",\"/cosmos.authz.v1beta1.MsgExec\":\"28\",\"/cosmos.authz.v1beta1.MsgRevoke\":\"28\",\"/cosmos.bank.v1beta1.MsgSend\":\"29\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"30\",\"/cosmos.distribution.v1beta1.MsgFundCommunityPool\":\"31\",\"/cosmos.distribution.v1beta1.MsgSetWithdrawAddress\":\"32\",\"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward\":\"33\",\"/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission\":\"34\",\"/cosmos.gov.v1beta1.MsgDeposit\":\"35\",\"/cosmos.gov.v1beta1.MsgVote\":\"36\",\"/cosmos.gov.v1beta1.MsgVoteWeighted\":\"37\",\"/cosmos.gov.v1beta1.MsgSubmitProposal\":\"38\",\"/cosmos.staking.v1beta1.MsgBeginRedelegate\":\"39\",\"/cosmos.staking.v1beta1.MsgCreateValidator\":\"40\",\"/cosmos.staking.v1beta1.MsgDelegate\":\"41\",\"/cosmos.staking.v1beta1.MsgEditValidator\":\"42\",\"/cosmos.staking.v1beta1.MsgUndelegate\":\"43\",\"/ibc.applications.transfer.v1.MsgTransfer\":\"44\",\"/cosmos.feegrant.v1beta1.MsgGrantAllowance\":\"28\",\"/cosmos.feegrant.v1beta1.MsgRevokeAllowance\":\"28\",\"/cosmos.vesting.v1beta1.MsgCreateVestingAccount\":\"45\"},{\"data\":\"46\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"47\"],{\"data\":\"48\"},\"ukuji\",\"/cosmwasm.wasm.v1.MsgExecuteContract\",{\"sender\":\"2\",\"contract\":\"49\",\"msg\":\"50\",\"funds\":\"51\"},\"https://test-rpc-kujira.mintthemoon.xyz\",\"not_supported_by_chain\",{\"aminoType\":\"52\"},{\"aminoType\":\"53\"},{\"aminoType\":\"54\"},{\"aminoType\":\"55\"},{\"aminoType\":\"56\"},{\"aminoType\":\"57\"},{\"aminoType\":\"58\"},{\"aminoType\":\"59\"},{\"aminoType\":\"60\"},{\"aminoType\":\"61\"},{\"aminoType\":\"62\"},{\"aminoType\":\"63\"},{\"aminoType\":\"64\"},{\"aminoType\":\"65\"},{\"aminoType\":\"66\"},{\"aminoType\":\"67\"},{\"aminoType\":\"68\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"69\",\"prefix\":\"70\"},{\"atomics\":\"71\",\"fractionalDigits\":18},\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"type\":\"72\",\"data\":\"73\"},[\"74\"],\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",\"cosmos-sdk/MsgFundCommunityPool\",\"cosmos-sdk/MsgModifyWithdrawAddress\",\"cosmos-sdk/MsgWithdrawDelegationReward\",\"cosmos-sdk/MsgWithdrawValidatorCommission\",\"cosmos-sdk/MsgDeposit\",\"cosmos-sdk/MsgVote\",\"cosmos-sdk/MsgVoteWeighted\",\"cosmos-sdk/MsgSubmitProposal\",\"cosmos-sdk/MsgBeginRedelegate\",\"cosmos-sdk/MsgCreateValidator\",\"cosmos-sdk/MsgDelegate\",\"cosmos-sdk/MsgEditValidator\",\"cosmos-sdk/MsgUndelegate\",\"cosmos-sdk/MsgTransfer\",\"cosmos-sdk/MsgCreateVestingAccount\",[\"75\",\"76\",\"77\",\"78\",\"79\"],\"kujira\",\"0470de4df82000\",\"Buffer\",[123,34,114,101,116,114,97,99,116,95,111,114,100,101,114,115,34,58,123,34,111,114,100,101,114,95,105,100,120,115,34,58,91,34,49,55,56,49,51,49,34,93,125,125],{\"denom\":\"24\",\"amount\":\"80\"},{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0},\"1\"]","Kujira Orders Cancel the order 1"]`,
  {
    code: 0,
    height: 13875962,
    txIndex: 0,
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '274ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '274ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '274ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '274ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2114',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              '092sfuH/DWjTusNoFSZjoEnbj6bE72kwDPWF1BloM+c5FuDV497jK6n7NJAEphKDa/b4DrfCJesKfMfAts4X+g==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'action', value: 'retract_orders' },
          {
            key: 'market',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'sender',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
    ],
    rawLog:
      '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1ukuji"},{"key":"receiver","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1ukuji"},{"key":"spender","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1ukuji"},{"key":"recipient","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"sender","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"action","value":"retract_orders"},{"key":"market","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"}]}]}]',
    transactionHash:
      'F6A59BD74B38EBB6E62C0708F010B057F4D16F7818433205B8FF6EAE164EF51F',
    gasUsed: 186873,
    gasWanted: 218752,
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Check that it's not possible to get the cancelled order 1"]`,
  {
    orders: [
      {
        idx: '178132',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all open orders and check that orders 1, 2, 3, 6, 7, 10, and 11 are missing"]`,
  {
    orders: [
      {
        idx: '178132',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all open orders and check that orders 1, 2, 3, 6, 7, 10, and 11 are missing"]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
      {
        idx: '5622',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.999',
        offer_denom: { native: 'ukuji' },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '5623',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all open orders and check that orders 1, 2, 3, 6, 7, 10, and 11 are missing"]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '25038',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Cancel the orders 4 and 5"]`,
  {
    orders: [
      {
        idx: '178132',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Cancel the orders 4 and 5"]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
      {
        idx: '5622',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.999',
        offer_denom: { native: 'ukuji' },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '5623',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Cancel the orders 4 and 5"]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '25038',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Cancel the orders 4 and 5"]`,
  {
    orders: [
      {
        idx: '178132',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Cancel the orders 4 and 5"]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
      {
        idx: '5622',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.999',
        offer_denom: { native: 'ukuji' },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '5623',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Cancel the orders 4 and 5"]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '25038',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraSigningStargateClientSignAndBroadcast","[[\"1\",\"2\",\"3\",\"4\",null],{\"tmClient\":\"5\",\"queryClient\":\"6\",\"registry\":\"7\",\"aminoTypes\":\"8\",\"signer\":\"9\",\"gasPrice\":\"10\",\"chainId\":\"11\"},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[\"12\"],\"auto\",{\"client\":\"13\"},{\"tmClient\":\"5\",\"auth\":\"14\",\"bank\":\"15\",\"staking\":\"16\",\"tx\":\"17\"},{\"types\":\"18\"},{\"register\":\"19\"},{\"secret\":\"20\",\"seed\":\"21\",\"accounts\":\"22\"},{\"amount\":\"23\",\"denom\":\"24\"},\"harpoon-4\",{\"typeUrl\":\"25\",\"value\":\"26\"},{\"url\":\"27\"},{},{},{},{},{},{\"/cosmos.authz.v1beta1.MsgGrant\":\"28\",\"/cosmos.authz.v1beta1.MsgExec\":\"28\",\"/cosmos.authz.v1beta1.MsgRevoke\":\"28\",\"/cosmos.bank.v1beta1.MsgSend\":\"29\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"30\",\"/cosmos.distribution.v1beta1.MsgFundCommunityPool\":\"31\",\"/cosmos.distribution.v1beta1.MsgSetWithdrawAddress\":\"32\",\"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward\":\"33\",\"/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission\":\"34\",\"/cosmos.gov.v1beta1.MsgDeposit\":\"35\",\"/cosmos.gov.v1beta1.MsgVote\":\"36\",\"/cosmos.gov.v1beta1.MsgVoteWeighted\":\"37\",\"/cosmos.gov.v1beta1.MsgSubmitProposal\":\"38\",\"/cosmos.staking.v1beta1.MsgBeginRedelegate\":\"39\",\"/cosmos.staking.v1beta1.MsgCreateValidator\":\"40\",\"/cosmos.staking.v1beta1.MsgDelegate\":\"41\",\"/cosmos.staking.v1beta1.MsgEditValidator\":\"42\",\"/cosmos.staking.v1beta1.MsgUndelegate\":\"43\",\"/ibc.applications.transfer.v1.MsgTransfer\":\"44\",\"/cosmos.feegrant.v1beta1.MsgGrantAllowance\":\"28\",\"/cosmos.feegrant.v1beta1.MsgRevokeAllowance\":\"28\",\"/cosmos.vesting.v1beta1.MsgCreateVestingAccount\":\"45\"},{\"data\":\"46\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"47\"],{\"data\":\"48\"},\"ukuji\",\"/cosmwasm.wasm.v1.MsgExecuteContract\",{\"sender\":\"2\",\"contract\":\"49\",\"msg\":\"50\",\"funds\":\"51\"},\"https://test-rpc-kujira.mintthemoon.xyz\",\"not_supported_by_chain\",{\"aminoType\":\"52\"},{\"aminoType\":\"53\"},{\"aminoType\":\"54\"},{\"aminoType\":\"55\"},{\"aminoType\":\"56\"},{\"aminoType\":\"57\"},{\"aminoType\":\"58\"},{\"aminoType\":\"59\"},{\"aminoType\":\"60\"},{\"aminoType\":\"61\"},{\"aminoType\":\"62\"},{\"aminoType\":\"63\"},{\"aminoType\":\"64\"},{\"aminoType\":\"65\"},{\"aminoType\":\"66\"},{\"aminoType\":\"67\"},{\"aminoType\":\"68\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"69\",\"prefix\":\"70\"},{\"atomics\":\"71\",\"fractionalDigits\":18},\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"type\":\"72\",\"data\":\"73\"},[\"74\"],\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",\"cosmos-sdk/MsgFundCommunityPool\",\"cosmos-sdk/MsgModifyWithdrawAddress\",\"cosmos-sdk/MsgWithdrawDelegationReward\",\"cosmos-sdk/MsgWithdrawValidatorCommission\",\"cosmos-sdk/MsgDeposit\",\"cosmos-sdk/MsgVote\",\"cosmos-sdk/MsgVoteWeighted\",\"cosmos-sdk/MsgSubmitProposal\",\"cosmos-sdk/MsgBeginRedelegate\",\"cosmos-sdk/MsgCreateValidator\",\"cosmos-sdk/MsgDelegate\",\"cosmos-sdk/MsgEditValidator\",\"cosmos-sdk/MsgUndelegate\",\"cosmos-sdk/MsgTransfer\",\"cosmos-sdk/MsgCreateVestingAccount\",[\"75\",\"76\",\"77\",\"78\",\"79\"],\"kujira\",\"0470de4df82000\",\"Buffer\",[123,34,114,101,116,114,97,99,116,95,111,114,100,101,114,115,34,58,123,34,111,114,100,101,114,95,105,100,120,115,34,58,91,34,49,55,56,49,51,50,34,93,125,125],{\"denom\":\"24\",\"amount\":\"80\"},{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0},\"1\"]","Kujira Orders Cancel the orders 4 and 5"]`,
  {
    code: 0,
    height: 13875968,
    txIndex: 0,
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '274ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '274ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '274ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '274ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2115',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              '8xMNn8ouu82b5itpflXlkx5QgqgmSxN0rq4yaaqJw61NuFBjrq15MpGCvGWy3xrBDkgsK1PCR1XjdyUJIDJbag==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'action', value: 'retract_orders' },
          {
            key: 'market',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'sender',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
    ],
    rawLog:
      '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1ukuji"},{"key":"receiver","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1ukuji"},{"key":"spender","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1ukuji"},{"key":"recipient","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"sender","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"action","value":"retract_orders"},{"key":"market","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"}]}]}]',
    transactionHash:
      'F839F86723F58BF71E57523B168B02C415697BA5F30104283D28EA79AE30C3BA',
    gasUsed: 186873,
    gasWanted: 218752,
  }
);
data.set(
  `["kujira","kujiraSigningStargateClientSignAndBroadcast","[[\"1\",\"2\",\"3\",\"4\",null],{\"tmClient\":\"5\",\"queryClient\":\"6\",\"registry\":\"7\",\"aminoTypes\":\"8\",\"signer\":\"9\",\"gasPrice\":\"10\",\"chainId\":\"11\"},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[\"12\"],\"auto\",{\"client\":\"13\"},{\"tmClient\":\"5\",\"auth\":\"14\",\"bank\":\"15\",\"staking\":\"16\",\"tx\":\"17\"},{\"types\":\"18\"},{\"register\":\"19\"},{\"secret\":\"20\",\"seed\":\"21\",\"accounts\":\"22\"},{\"amount\":\"23\",\"denom\":\"24\"},\"harpoon-4\",{\"typeUrl\":\"25\",\"value\":\"26\"},{\"url\":\"27\"},{},{},{},{},{},{\"/cosmos.authz.v1beta1.MsgGrant\":\"28\",\"/cosmos.authz.v1beta1.MsgExec\":\"28\",\"/cosmos.authz.v1beta1.MsgRevoke\":\"28\",\"/cosmos.bank.v1beta1.MsgSend\":\"29\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"30\",\"/cosmos.distribution.v1beta1.MsgFundCommunityPool\":\"31\",\"/cosmos.distribution.v1beta1.MsgSetWithdrawAddress\":\"32\",\"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward\":\"33\",\"/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission\":\"34\",\"/cosmos.gov.v1beta1.MsgDeposit\":\"35\",\"/cosmos.gov.v1beta1.MsgVote\":\"36\",\"/cosmos.gov.v1beta1.MsgVoteWeighted\":\"37\",\"/cosmos.gov.v1beta1.MsgSubmitProposal\":\"38\",\"/cosmos.staking.v1beta1.MsgBeginRedelegate\":\"39\",\"/cosmos.staking.v1beta1.MsgCreateValidator\":\"40\",\"/cosmos.staking.v1beta1.MsgDelegate\":\"41\",\"/cosmos.staking.v1beta1.MsgEditValidator\":\"42\",\"/cosmos.staking.v1beta1.MsgUndelegate\":\"43\",\"/ibc.applications.transfer.v1.MsgTransfer\":\"44\",\"/cosmos.feegrant.v1beta1.MsgGrantAllowance\":\"28\",\"/cosmos.feegrant.v1beta1.MsgRevokeAllowance\":\"28\",\"/cosmos.vesting.v1beta1.MsgCreateVestingAccount\":\"45\"},{\"data\":\"46\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"47\"],{\"data\":\"48\"},\"ukuji\",\"/cosmwasm.wasm.v1.MsgExecuteContract\",{\"sender\":\"2\",\"contract\":\"49\",\"msg\":\"50\",\"funds\":\"51\"},\"https://test-rpc-kujira.mintthemoon.xyz\",\"not_supported_by_chain\",{\"aminoType\":\"52\"},{\"aminoType\":\"53\"},{\"aminoType\":\"54\"},{\"aminoType\":\"55\"},{\"aminoType\":\"56\"},{\"aminoType\":\"57\"},{\"aminoType\":\"58\"},{\"aminoType\":\"59\"},{\"aminoType\":\"60\"},{\"aminoType\":\"61\"},{\"aminoType\":\"62\"},{\"aminoType\":\"63\"},{\"aminoType\":\"64\"},{\"aminoType\":\"65\"},{\"aminoType\":\"66\"},{\"aminoType\":\"67\"},{\"aminoType\":\"68\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"69\",\"prefix\":\"70\"},{\"atomics\":\"71\",\"fractionalDigits\":18},\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"type\":\"72\",\"data\":\"73\"},[\"74\"],\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",\"cosmos-sdk/MsgFundCommunityPool\",\"cosmos-sdk/MsgModifyWithdrawAddress\",\"cosmos-sdk/MsgWithdrawDelegationReward\",\"cosmos-sdk/MsgWithdrawValidatorCommission\",\"cosmos-sdk/MsgDeposit\",\"cosmos-sdk/MsgVote\",\"cosmos-sdk/MsgVoteWeighted\",\"cosmos-sdk/MsgSubmitProposal\",\"cosmos-sdk/MsgBeginRedelegate\",\"cosmos-sdk/MsgCreateValidator\",\"cosmos-sdk/MsgDelegate\",\"cosmos-sdk/MsgEditValidator\",\"cosmos-sdk/MsgUndelegate\",\"cosmos-sdk/MsgTransfer\",\"cosmos-sdk/MsgCreateVestingAccount\",[\"75\",\"76\",\"77\",\"78\",\"79\"],\"kujira\",\"0470de4df82000\",\"Buffer\",[123,34,114,101,116,114,97,99,116,95,111,114,100,101,114,115,34,58,123,34,111,114,100,101,114,95,105,100,120,115,34,58,91,34,53,54,50,50,34,93,125,125],{\"denom\":\"24\",\"amount\":\"80\"},{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0},\"1\"]","Kujira Orders Cancel the orders 4 and 5"]`,
  {
    code: 0,
    height: 13875970,
    txIndex: 0,
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '262ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '262ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '262ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '262ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2116',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'mid2EfousoV9jaxFYljKSkSAH+C+8yrLFjc+wHIwLWwoSTh70UTuPwLFtRmnrAD/d5dHUUOg2SzWE8+KThfKvQ==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'action', value: 'retract_orders' },
          {
            key: 'market',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'sender',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
    ],
    rawLog:
      '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"amount","value":"1ukuji"},{"key":"receiver","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000ukuji"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1ukuji"},{"key":"spender","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"amount","value":"1000000ukuji"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1ukuji"},{"key":"recipient","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"sender","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"amount","value":"1000000ukuji"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"action","value":"retract_orders"},{"key":"market","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"}]}]}]',
    transactionHash:
      '3F7102049D462350B9FA8C4F8641F30A8BFEEA3B35ECB592038D62D2BEA7D085',
    gasUsed: 179296,
    gasWanted: 208901,
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Check that it's not possible to get the cancelled orders 4 and 5"]`,
  {
    orders: [
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Check that it's not possible to get the cancelled orders 4 and 5"]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
      {
        idx: '5623',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Check that it's not possible to get the cancelled orders 4 and 5"]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '25038',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all open orders and check that the orders 1, 2, 3, 4, 5, 6, 7, 10, and 11 are missing"]`,
  {
    orders: [
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all open orders and check that the orders 1, 2, 3, 4, 5, 6, 7, 10, and 11 are missing"]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
      {
        idx: '5623',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all open orders and check that the orders 1, 2, 3, 4, 5, 6, 7, 10, and 11 are missing"]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '25038',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all filled orders and check that the orders 2, 6, and 7 are present"]`,
  {
    orders: [
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all filled orders and check that the orders 2, 6, and 7 are present"]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
      {
        idx: '5623',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all filled orders and check that the orders 2, 6, and 7 are present"]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '25038',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all orders (open or filled) and check that the orders 2, 3, 6, 7, 10, and 11 are present and the orders 1, 4, 5 are missing"]`,
  {
    orders: [
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all orders (open or filled) and check that the orders 2, 3, 6, 7, 10, and 11 are present and the orders 1, 4, 5 are missing"]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
      {
        idx: '5623',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all orders (open or filled) and check that the orders 2, 3, 6, 7, 10, and 11 are present and the orders 1, 4, 5 are missing"]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '25038',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]",null]`,
  {
    orders: [
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]",null]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
      {
        idx: '5623',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]",null]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '25038',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]",null]`,
  {
    orders: [
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]",null]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
      {
        idx: '5623',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]",null]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '25038',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]",null]`,
  {
    orders: [
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]",null]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
      {
        idx: '5623',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]",null]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '25038',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.999',
        offer_denom: {
          native: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraSigningStargateClientSignAndBroadcast","[[\"1\",\"2\",\"3\",\"4\",null],{\"tmClient\":\"5\",\"queryClient\":\"6\",\"registry\":\"7\",\"aminoTypes\":\"8\",\"signer\":\"9\",\"gasPrice\":\"10\",\"chainId\":\"11\"},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[\"12\"],\"auto\",{\"client\":\"13\"},{\"tmClient\":\"5\",\"auth\":\"14\",\"bank\":\"15\",\"staking\":\"16\",\"tx\":\"17\"},{\"types\":\"18\"},{\"register\":\"19\"},{\"secret\":\"20\",\"seed\":\"21\",\"accounts\":\"22\"},{\"amount\":\"23\",\"denom\":\"24\"},\"harpoon-4\",{\"typeUrl\":\"25\",\"value\":\"26\"},{\"url\":\"27\"},{},{},{},{},{},{\"/cosmos.authz.v1beta1.MsgGrant\":\"28\",\"/cosmos.authz.v1beta1.MsgExec\":\"28\",\"/cosmos.authz.v1beta1.MsgRevoke\":\"28\",\"/cosmos.bank.v1beta1.MsgSend\":\"29\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"30\",\"/cosmos.distribution.v1beta1.MsgFundCommunityPool\":\"31\",\"/cosmos.distribution.v1beta1.MsgSetWithdrawAddress\":\"32\",\"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward\":\"33\",\"/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission\":\"34\",\"/cosmos.gov.v1beta1.MsgDeposit\":\"35\",\"/cosmos.gov.v1beta1.MsgVote\":\"36\",\"/cosmos.gov.v1beta1.MsgVoteWeighted\":\"37\",\"/cosmos.gov.v1beta1.MsgSubmitProposal\":\"38\",\"/cosmos.staking.v1beta1.MsgBeginRedelegate\":\"39\",\"/cosmos.staking.v1beta1.MsgCreateValidator\":\"40\",\"/cosmos.staking.v1beta1.MsgDelegate\":\"41\",\"/cosmos.staking.v1beta1.MsgEditValidator\":\"42\",\"/cosmos.staking.v1beta1.MsgUndelegate\":\"43\",\"/ibc.applications.transfer.v1.MsgTransfer\":\"44\",\"/cosmos.feegrant.v1beta1.MsgGrantAllowance\":\"28\",\"/cosmos.feegrant.v1beta1.MsgRevokeAllowance\":\"28\",\"/cosmos.vesting.v1beta1.MsgCreateVestingAccount\":\"45\"},{\"data\":\"46\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"47\"],{\"data\":\"48\"},\"ukuji\",\"/cosmwasm.wasm.v1.MsgExecuteContract\",{\"sender\":\"2\",\"contract\":\"49\",\"msg\":\"50\",\"funds\":\"51\"},\"https://test-rpc-kujira.mintthemoon.xyz\",\"not_supported_by_chain\",{\"aminoType\":\"52\"},{\"aminoType\":\"53\"},{\"aminoType\":\"54\"},{\"aminoType\":\"55\"},{\"aminoType\":\"56\"},{\"aminoType\":\"57\"},{\"aminoType\":\"58\"},{\"aminoType\":\"59\"},{\"aminoType\":\"60\"},{\"aminoType\":\"61\"},{\"aminoType\":\"62\"},{\"aminoType\":\"63\"},{\"aminoType\":\"64\"},{\"aminoType\":\"65\"},{\"aminoType\":\"66\"},{\"aminoType\":\"67\"},{\"aminoType\":\"68\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"69\",\"prefix\":\"70\"},{\"atomics\":\"71\",\"fractionalDigits\":18},\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"type\":\"72\",\"data\":\"73\"},[\"74\"],\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",\"cosmos-sdk/MsgFundCommunityPool\",\"cosmos-sdk/MsgModifyWithdrawAddress\",\"cosmos-sdk/MsgWithdrawDelegationReward\",\"cosmos-sdk/MsgWithdrawValidatorCommission\",\"cosmos-sdk/MsgDeposit\",\"cosmos-sdk/MsgVote\",\"cosmos-sdk/MsgVoteWeighted\",\"cosmos-sdk/MsgSubmitProposal\",\"cosmos-sdk/MsgBeginRedelegate\",\"cosmos-sdk/MsgCreateValidator\",\"cosmos-sdk/MsgDelegate\",\"cosmos-sdk/MsgEditValidator\",\"cosmos-sdk/MsgUndelegate\",\"cosmos-sdk/MsgTransfer\",\"cosmos-sdk/MsgCreateVestingAccount\",[\"75\",\"76\",\"77\",\"78\",\"79\"],\"kujira\",\"0470de4df82000\",\"Buffer\",[123,34,114,101,116,114,97,99,116,95,111,114,100,101,114,115,34,58,123,34,111,114,100,101,114,95,105,100,120,115,34,58,91,34,53,54,50,51,34,93,125,125],{\"denom\":\"24\",\"amount\":\"80\"},{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0},\"1\"]",null]`,
  {
    code: 0,
    height: 13875979,
    txIndex: 0,
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '292ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '292ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '292ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '292ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2117',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'AEe0pTLUTtvmDil1pE3MZBrLn4+7d8q6XcttVsZWLREBSNWYyZvEipCbmLoLLGLMRRYk8bEehs8TphL90C/NiQ==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'action', value: 'retract_orders' },
          {
            key: 'market',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'sender',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
    ],
    rawLog:
      '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"amount","value":"1ukuji"},{"key":"receiver","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1ukuji"},{"key":"spender","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"amount","value":"1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1ukuji"},{"key":"recipient","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"sender","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"amount","value":"1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"},{"key":"action","value":"retract_orders"},{"key":"market","value":"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6"}]}]}]',
    transactionHash:
      'ECE679D2843B0EAD12430F7DC07C33CDA1108BBC758CD3C66C592574E55F28DE',
    gasUsed: 198111,
    gasWanted: 233360,
  }
);
data.set(
  `["kujira","kujiraSigningStargateClientSignAndBroadcast","[[\"1\",\"2\",\"3\",\"4\",null],{\"tmClient\":\"5\",\"queryClient\":\"6\",\"registry\":\"7\",\"aminoTypes\":\"8\",\"signer\":\"9\",\"gasPrice\":\"10\",\"chainId\":\"11\"},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[\"12\"],\"auto\",{\"client\":\"13\"},{\"tmClient\":\"5\",\"auth\":\"14\",\"bank\":\"15\",\"staking\":\"16\",\"tx\":\"17\"},{\"types\":\"18\"},{\"register\":\"19\"},{\"secret\":\"20\",\"seed\":\"21\",\"accounts\":\"22\"},{\"amount\":\"23\",\"denom\":\"24\"},\"harpoon-4\",{\"typeUrl\":\"25\",\"value\":\"26\"},{\"url\":\"27\"},{},{},{},{},{},{\"/cosmos.authz.v1beta1.MsgGrant\":\"28\",\"/cosmos.authz.v1beta1.MsgExec\":\"28\",\"/cosmos.authz.v1beta1.MsgRevoke\":\"28\",\"/cosmos.bank.v1beta1.MsgSend\":\"29\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"30\",\"/cosmos.distribution.v1beta1.MsgFundCommunityPool\":\"31\",\"/cosmos.distribution.v1beta1.MsgSetWithdrawAddress\":\"32\",\"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward\":\"33\",\"/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission\":\"34\",\"/cosmos.gov.v1beta1.MsgDeposit\":\"35\",\"/cosmos.gov.v1beta1.MsgVote\":\"36\",\"/cosmos.gov.v1beta1.MsgVoteWeighted\":\"37\",\"/cosmos.gov.v1beta1.MsgSubmitProposal\":\"38\",\"/cosmos.staking.v1beta1.MsgBeginRedelegate\":\"39\",\"/cosmos.staking.v1beta1.MsgCreateValidator\":\"40\",\"/cosmos.staking.v1beta1.MsgDelegate\":\"41\",\"/cosmos.staking.v1beta1.MsgEditValidator\":\"42\",\"/cosmos.staking.v1beta1.MsgUndelegate\":\"43\",\"/ibc.applications.transfer.v1.MsgTransfer\":\"44\",\"/cosmos.feegrant.v1beta1.MsgGrantAllowance\":\"28\",\"/cosmos.feegrant.v1beta1.MsgRevokeAllowance\":\"28\",\"/cosmos.vesting.v1beta1.MsgCreateVestingAccount\":\"45\"},{\"data\":\"46\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"47\"],{\"data\":\"48\"},\"ukuji\",\"/cosmwasm.wasm.v1.MsgExecuteContract\",{\"sender\":\"2\",\"contract\":\"49\",\"msg\":\"50\",\"funds\":\"51\"},\"https://test-rpc-kujira.mintthemoon.xyz\",\"not_supported_by_chain\",{\"aminoType\":\"52\"},{\"aminoType\":\"53\"},{\"aminoType\":\"54\"},{\"aminoType\":\"55\"},{\"aminoType\":\"56\"},{\"aminoType\":\"57\"},{\"aminoType\":\"58\"},{\"aminoType\":\"59\"},{\"aminoType\":\"60\"},{\"aminoType\":\"61\"},{\"aminoType\":\"62\"},{\"aminoType\":\"63\"},{\"aminoType\":\"64\"},{\"aminoType\":\"65\"},{\"aminoType\":\"66\"},{\"aminoType\":\"67\"},{\"aminoType\":\"68\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"69\",\"prefix\":\"70\"},{\"atomics\":\"71\",\"fractionalDigits\":18},\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"type\":\"72\",\"data\":\"73\"},[\"74\"],\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",\"cosmos-sdk/MsgFundCommunityPool\",\"cosmos-sdk/MsgModifyWithdrawAddress\",\"cosmos-sdk/MsgWithdrawDelegationReward\",\"cosmos-sdk/MsgWithdrawValidatorCommission\",\"cosmos-sdk/MsgDeposit\",\"cosmos-sdk/MsgVote\",\"cosmos-sdk/MsgVoteWeighted\",\"cosmos-sdk/MsgSubmitProposal\",\"cosmos-sdk/MsgBeginRedelegate\",\"cosmos-sdk/MsgCreateValidator\",\"cosmos-sdk/MsgDelegate\",\"cosmos-sdk/MsgEditValidator\",\"cosmos-sdk/MsgUndelegate\",\"cosmos-sdk/MsgTransfer\",\"cosmos-sdk/MsgCreateVestingAccount\",[\"75\",\"76\",\"77\",\"78\",\"79\"],\"kujira\",\"0470de4df82000\",\"Buffer\",[123,34,114,101,116,114,97,99,116,95,111,114,100,101,114,115,34,58,123,34,111,114,100,101,114,95,105,100,120,115,34,58,91,34,50,53,48,51,56,34,93,125,125],{\"denom\":\"80\",\"amount\":\"81\"},{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0},\"factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo\",\"1\"]",null]`,
  {
    code: 0,
    height: 13875982,
    txIndex: 0,
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '280ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '280ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '280ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '280ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2118',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'TPpaYWdfX387rNpYu1tIznnIFzzXxnct0QHiGBw+4hopooH7kkz7dLq7Uz28IwcA12ayIFqZtBFr7HIshINAgQ==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'amount',
            value:
              '1factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          { key: 'action', value: 'retract_orders' },
          {
            key: 'market',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'sender',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
    ],
    rawLog:
      '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"amount","value":"1factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"},{"key":"receiver","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"},{"key":"spender","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"},{"key":"recipient","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"sender","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"amount","value":"1000000factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"action","value":"retract_orders"},{"key":"market","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"}]}]}]',
    transactionHash:
      'F6B24D09621D2C8EF69CCFEB09F77454D732EE5483D21FC6602CE02474F15A15',
    gasUsed: 190777,
    gasWanted: 223826,
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all open orders and check that there are no open orders"]`,
  {
    orders: [
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all open orders and check that there are no open orders"]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all open orders and check that there are no open orders"]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all orders (open or filled) and check that the orders 2, 3, 6, 7, 10, and 11 are present"]`,
  {
    orders: [
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all orders (open or filled) and check that the orders 2, 3, 6, 7, 10, and 11 are present"]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all orders (open or filled) and check that the orders 2, 3, 6, 7, 10, and 11 are present"]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraSigningStargateClientSignAndBroadcast","[[\"1\",\"2\",\"3\",\"4\",null],{\"tmClient\":\"5\",\"queryClient\":\"6\",\"registry\":\"7\",\"aminoTypes\":\"8\",\"signer\":\"9\",\"gasPrice\":\"10\",\"chainId\":\"11\"},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[\"12\",\"13\"],\"auto\",{\"client\":\"14\"},{\"tmClient\":\"5\",\"auth\":\"15\",\"bank\":\"16\",\"staking\":\"17\",\"tx\":\"18\"},{\"types\":\"19\"},{\"register\":\"20\"},{\"secret\":\"21\",\"seed\":\"22\",\"accounts\":\"23\"},{\"amount\":\"24\",\"denom\":\"25\"},\"harpoon-4\",{\"typeUrl\":\"26\",\"value\":\"27\"},{\"typeUrl\":\"26\",\"value\":\"28\"},{\"url\":\"29\"},{},{},{},{},{},{\"/cosmos.authz.v1beta1.MsgGrant\":\"30\",\"/cosmos.authz.v1beta1.MsgExec\":\"30\",\"/cosmos.authz.v1beta1.MsgRevoke\":\"30\",\"/cosmos.bank.v1beta1.MsgSend\":\"31\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"32\",\"/cosmos.distribution.v1beta1.MsgFundCommunityPool\":\"33\",\"/cosmos.distribution.v1beta1.MsgSetWithdrawAddress\":\"34\",\"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward\":\"35\",\"/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission\":\"36\",\"/cosmos.gov.v1beta1.MsgDeposit\":\"37\",\"/cosmos.gov.v1beta1.MsgVote\":\"38\",\"/cosmos.gov.v1beta1.MsgVoteWeighted\":\"39\",\"/cosmos.gov.v1beta1.MsgSubmitProposal\":\"40\",\"/cosmos.staking.v1beta1.MsgBeginRedelegate\":\"41\",\"/cosmos.staking.v1beta1.MsgCreateValidator\":\"42\",\"/cosmos.staking.v1beta1.MsgDelegate\":\"43\",\"/cosmos.staking.v1beta1.MsgEditValidator\":\"44\",\"/cosmos.staking.v1beta1.MsgUndelegate\":\"45\",\"/ibc.applications.transfer.v1.MsgTransfer\":\"46\",\"/cosmos.feegrant.v1beta1.MsgGrantAllowance\":\"30\",\"/cosmos.feegrant.v1beta1.MsgRevokeAllowance\":\"30\",\"/cosmos.vesting.v1beta1.MsgCreateVestingAccount\":\"47\"},{\"data\":\"48\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"49\"],{\"data\":\"50\"},\"ukuji\",\"/cosmwasm.wasm.v1.MsgExecuteContract\",{\"sender\":\"2\",\"contract\":\"51\",\"msg\":\"52\",\"funds\":\"53\"},{\"sender\":\"2\",\"contract\":\"54\",\"msg\":\"55\",\"funds\":\"56\"},\"https://test-rpc-kujira.mintthemoon.xyz\",\"not_supported_by_chain\",{\"aminoType\":\"57\"},{\"aminoType\":\"58\"},{\"aminoType\":\"59\"},{\"aminoType\":\"60\"},{\"aminoType\":\"61\"},{\"aminoType\":\"62\"},{\"aminoType\":\"63\"},{\"aminoType\":\"64\"},{\"aminoType\":\"65\"},{\"aminoType\":\"66\"},{\"aminoType\":\"67\"},{\"aminoType\":\"68\"},{\"aminoType\":\"69\"},{\"aminoType\":\"70\"},{\"aminoType\":\"71\"},{\"aminoType\":\"72\"},{\"aminoType\":\"73\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"74\",\"prefix\":\"75\"},{\"atomics\":\"76\",\"fractionalDigits\":18},\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"type\":\"77\",\"data\":\"78\"},[\"79\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"type\":\"77\",\"data\":\"80\"},[\"81\"],\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",\"cosmos-sdk/MsgFundCommunityPool\",\"cosmos-sdk/MsgModifyWithdrawAddress\",\"cosmos-sdk/MsgWithdrawDelegationReward\",\"cosmos-sdk/MsgWithdrawValidatorCommission\",\"cosmos-sdk/MsgDeposit\",\"cosmos-sdk/MsgVote\",\"cosmos-sdk/MsgVoteWeighted\",\"cosmos-sdk/MsgSubmitProposal\",\"cosmos-sdk/MsgBeginRedelegate\",\"cosmos-sdk/MsgCreateValidator\",\"cosmos-sdk/MsgDelegate\",\"cosmos-sdk/MsgEditValidator\",\"cosmos-sdk/MsgUndelegate\",\"cosmos-sdk/MsgTransfer\",\"cosmos-sdk/MsgCreateVestingAccount\",[\"82\",\"83\",\"84\",\"85\",\"86\"],\"kujira\",\"0470de4df82000\",\"Buffer\",[123,34,115,117,98,109,105,116,95,111,114,100,101,114,34,58,123,34,112,114,105,99,101,34,58,34,48,46,48,48,49,34,125,125],{\"denom\":\"87\",\"amount\":\"88\"},[123,34,115,117,98,109,105,116,95,111,114,100,101,114,34,58,123,34,112,114,105,99,101,34,58,34,57,57,57,46,57,57,34,125,125],{\"denom\":\"25\",\"amount\":\"88\"},{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0},\"factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk\",\"1000000\"]","Kujira Orders Create orders 12 and 13 at once"]`,
  {
    code: 0,
    height: 13875986,
    txIndex: 1,
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '648ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '648ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '648ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '648ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2119',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'Yws93iufF68GICOlRVBZb4Z1zkXt2zabzEOBnnWgrkRRh66LCu2fRrf5INJaBNJGZJvtB5UAZOmNxv/j5h5bIA==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          { key: 'action', value: 'submit_order' },
          {
            key: 'market',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          { key: 'order_idx', value: '25061' },
          { key: 'quote_price', value: '0.001' },
          { key: 'offer_amount', value: '1000000' },
          {
            key: 'offer_denom',
            value:
              'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'action', value: 'submit_order' },
          {
            key: 'market',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'order_idx', value: '178164' },
          { key: 'quote_price', value: '999.99' },
          { key: 'offer_amount', value: '1000000' },
          { key: 'offer_denom', value: 'ukuji' },
        ],
      },
    ],
    rawLog:
      '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"amount","value":"1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"action","value":"submit_order"},{"key":"market","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"order_idx","value":"25061"},{"key":"quote_price","value":"0.001"},{"key":"offer_amount","value":"1000000"},{"key":"offer_denom","value":"factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]}]},{"msg_index":1,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1000000ukuji"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000ukuji"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000ukuji"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"action","value":"submit_order"},{"key":"market","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"order_idx","value":"178164"},{"key":"quote_price","value":"999.99"},{"key":"offer_amount","value":"1000000"},{"key":"offer_denom","value":"ukuji"}]}]}]',
    transactionHash:
      'C539EED12336E7F3DC5A8E61D06269526FAE79DD067C16A1C2D360A9AF1FFFFD',
    gasUsed: 414145,
    gasWanted: 517923,
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all open orders and check that the orders 12 and 13 are present"]`,
  {
    orders: [
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '178164',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.99',
        offer_denom: { native: 'ukuji' },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658805883247532',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all open orders and check that the orders 12 and 13 are present"]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all open orders and check that the orders 12 and 13 are present"]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '25061',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658805883247532',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all orders (open or filled) and check that the orders 2, 3, 6, 7, 10, 11, 12, and 13 are present"]`,
  {
    orders: [
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '178164',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.99',
        offer_denom: { native: 'ukuji' },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658805883247532',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all orders (open or filled) and check that the orders 2, 3, 6, 7, 10, 11, 12, and 13 are present"]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all orders (open or filled) and check that the orders 2, 3, 6, 7, 10, 11, 12, and 13 are present"]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '25061',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658805883247532',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]",null]`,
  {
    orders: [
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '178164',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.99',
        offer_denom: { native: 'ukuji' },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658805883247532',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]",null]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]",null]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '25061',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658805883247532',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]",null]`,
  {
    orders: [
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '178164',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.99',
        offer_denom: { native: 'ukuji' },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658805883247532',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]",null]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]",null]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '25061',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658805883247532',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]",null]`,
  {
    orders: [
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '178164',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '999.99',
        offer_denom: { native: 'ukuji' },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658805883247532',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]",null]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]",null]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
      {
        idx: '25061',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.001',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '1000000',
        filled_amount: '0',
        created_at: '1685658805883247532',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraSigningStargateClientSignAndBroadcast","[[\"1\",\"2\",\"3\",\"4\",null],{\"tmClient\":\"5\",\"queryClient\":\"6\",\"registry\":\"7\",\"aminoTypes\":\"8\",\"signer\":\"9\",\"gasPrice\":\"10\",\"chainId\":\"11\"},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[\"12\"],\"auto\",{\"client\":\"13\"},{\"tmClient\":\"5\",\"auth\":\"14\",\"bank\":\"15\",\"staking\":\"16\",\"tx\":\"17\"},{\"types\":\"18\"},{\"register\":\"19\"},{\"secret\":\"20\",\"seed\":\"21\",\"accounts\":\"22\"},{\"amount\":\"23\",\"denom\":\"24\"},\"harpoon-4\",{\"typeUrl\":\"25\",\"value\":\"26\"},{\"url\":\"27\"},{},{},{},{},{},{\"/cosmos.authz.v1beta1.MsgGrant\":\"28\",\"/cosmos.authz.v1beta1.MsgExec\":\"28\",\"/cosmos.authz.v1beta1.MsgRevoke\":\"28\",\"/cosmos.bank.v1beta1.MsgSend\":\"29\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"30\",\"/cosmos.distribution.v1beta1.MsgFundCommunityPool\":\"31\",\"/cosmos.distribution.v1beta1.MsgSetWithdrawAddress\":\"32\",\"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward\":\"33\",\"/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission\":\"34\",\"/cosmos.gov.v1beta1.MsgDeposit\":\"35\",\"/cosmos.gov.v1beta1.MsgVote\":\"36\",\"/cosmos.gov.v1beta1.MsgVoteWeighted\":\"37\",\"/cosmos.gov.v1beta1.MsgSubmitProposal\":\"38\",\"/cosmos.staking.v1beta1.MsgBeginRedelegate\":\"39\",\"/cosmos.staking.v1beta1.MsgCreateValidator\":\"40\",\"/cosmos.staking.v1beta1.MsgDelegate\":\"41\",\"/cosmos.staking.v1beta1.MsgEditValidator\":\"42\",\"/cosmos.staking.v1beta1.MsgUndelegate\":\"43\",\"/ibc.applications.transfer.v1.MsgTransfer\":\"44\",\"/cosmos.feegrant.v1beta1.MsgGrantAllowance\":\"28\",\"/cosmos.feegrant.v1beta1.MsgRevokeAllowance\":\"28\",\"/cosmos.vesting.v1beta1.MsgCreateVestingAccount\":\"45\"},{\"data\":\"46\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"47\"],{\"data\":\"48\"},\"ukuji\",\"/cosmwasm.wasm.v1.MsgExecuteContract\",{\"sender\":\"2\",\"contract\":\"49\",\"msg\":\"50\",\"funds\":\"51\"},\"https://test-rpc-kujira.mintthemoon.xyz\",\"not_supported_by_chain\",{\"aminoType\":\"52\"},{\"aminoType\":\"53\"},{\"aminoType\":\"54\"},{\"aminoType\":\"55\"},{\"aminoType\":\"56\"},{\"aminoType\":\"57\"},{\"aminoType\":\"58\"},{\"aminoType\":\"59\"},{\"aminoType\":\"60\"},{\"aminoType\":\"61\"},{\"aminoType\":\"62\"},{\"aminoType\":\"63\"},{\"aminoType\":\"64\"},{\"aminoType\":\"65\"},{\"aminoType\":\"66\"},{\"aminoType\":\"67\"},{\"aminoType\":\"68\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"69\",\"prefix\":\"70\"},{\"atomics\":\"71\",\"fractionalDigits\":18},\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"type\":\"72\",\"data\":\"73\"},[\"74\"],\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",\"cosmos-sdk/MsgFundCommunityPool\",\"cosmos-sdk/MsgModifyWithdrawAddress\",\"cosmos-sdk/MsgWithdrawDelegationReward\",\"cosmos-sdk/MsgWithdrawValidatorCommission\",\"cosmos-sdk/MsgDeposit\",\"cosmos-sdk/MsgVote\",\"cosmos-sdk/MsgVoteWeighted\",\"cosmos-sdk/MsgSubmitProposal\",\"cosmos-sdk/MsgBeginRedelegate\",\"cosmos-sdk/MsgCreateValidator\",\"cosmos-sdk/MsgDelegate\",\"cosmos-sdk/MsgEditValidator\",\"cosmos-sdk/MsgUndelegate\",\"cosmos-sdk/MsgTransfer\",\"cosmos-sdk/MsgCreateVestingAccount\",[\"75\",\"76\",\"77\",\"78\",\"79\"],\"kujira\",\"0470de4df82000\",\"Buffer\",[123,34,114,101,116,114,97,99,116,95,111,114,100,101,114,115,34,58,123,34,111,114,100,101,114,95,105,100,120,115,34,58,91,34,49,55,56,49,54,52,34,93,125,125],{\"denom\":\"24\",\"amount\":\"80\"},{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0},\"1\"]",null]`,
  {
    code: 0,
    height: 13875992,
    txIndex: 0,
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '262ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '262ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '262ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '262ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2120',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'l09lWrimIZpkEYYmKQncSdF/eDDSod1WnfLtclzn0BwZl9AxAhp2Z7198GCAtkovQuOAHcmt2MsCQlzYQA6/ow==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1ukuji' },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'action', value: 'retract_orders' },
          {
            key: 'market',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'sender',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'amount', value: '1000000ukuji' },
        ],
      },
    ],
    rawLog:
      '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1ukuji"},{"key":"receiver","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000ukuji"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1ukuji"},{"key":"spender","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1000000ukuji"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1ukuji"},{"key":"recipient","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"sender","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"amount","value":"1000000ukuji"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"},{"key":"action","value":"retract_orders"},{"key":"market","value":"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"}]}]}]',
    transactionHash:
      '7918F382E9D7F0FD470C7908514A0EE470CE0DC83574737C12F827BF6B302A24',
    gasUsed: 179379,
    gasWanted: 209009,
  }
);
data.set(
  `["kujira","kujiraSigningStargateClientSignAndBroadcast","[[\"1\",\"2\",\"3\",\"4\",null],{\"tmClient\":\"5\",\"queryClient\":\"6\",\"registry\":\"7\",\"aminoTypes\":\"8\",\"signer\":\"9\",\"gasPrice\":\"10\",\"chainId\":\"11\"},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[\"12\"],\"auto\",{\"client\":\"13\"},{\"tmClient\":\"5\",\"auth\":\"14\",\"bank\":\"15\",\"staking\":\"16\",\"tx\":\"17\"},{\"types\":\"18\"},{\"register\":\"19\"},{\"secret\":\"20\",\"seed\":\"21\",\"accounts\":\"22\"},{\"amount\":\"23\",\"denom\":\"24\"},\"harpoon-4\",{\"typeUrl\":\"25\",\"value\":\"26\"},{\"url\":\"27\"},{},{},{},{},{},{\"/cosmos.authz.v1beta1.MsgGrant\":\"28\",\"/cosmos.authz.v1beta1.MsgExec\":\"28\",\"/cosmos.authz.v1beta1.MsgRevoke\":\"28\",\"/cosmos.bank.v1beta1.MsgSend\":\"29\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"30\",\"/cosmos.distribution.v1beta1.MsgFundCommunityPool\":\"31\",\"/cosmos.distribution.v1beta1.MsgSetWithdrawAddress\":\"32\",\"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward\":\"33\",\"/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission\":\"34\",\"/cosmos.gov.v1beta1.MsgDeposit\":\"35\",\"/cosmos.gov.v1beta1.MsgVote\":\"36\",\"/cosmos.gov.v1beta1.MsgVoteWeighted\":\"37\",\"/cosmos.gov.v1beta1.MsgSubmitProposal\":\"38\",\"/cosmos.staking.v1beta1.MsgBeginRedelegate\":\"39\",\"/cosmos.staking.v1beta1.MsgCreateValidator\":\"40\",\"/cosmos.staking.v1beta1.MsgDelegate\":\"41\",\"/cosmos.staking.v1beta1.MsgEditValidator\":\"42\",\"/cosmos.staking.v1beta1.MsgUndelegate\":\"43\",\"/ibc.applications.transfer.v1.MsgTransfer\":\"44\",\"/cosmos.feegrant.v1beta1.MsgGrantAllowance\":\"28\",\"/cosmos.feegrant.v1beta1.MsgRevokeAllowance\":\"28\",\"/cosmos.vesting.v1beta1.MsgCreateVestingAccount\":\"45\"},{\"data\":\"46\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"47\"],{\"data\":\"48\"},\"ukuji\",\"/cosmwasm.wasm.v1.MsgExecuteContract\",{\"sender\":\"2\",\"contract\":\"49\",\"msg\":\"50\",\"funds\":\"51\"},\"https://test-rpc-kujira.mintthemoon.xyz\",\"not_supported_by_chain\",{\"aminoType\":\"52\"},{\"aminoType\":\"53\"},{\"aminoType\":\"54\"},{\"aminoType\":\"55\"},{\"aminoType\":\"56\"},{\"aminoType\":\"57\"},{\"aminoType\":\"58\"},{\"aminoType\":\"59\"},{\"aminoType\":\"60\"},{\"aminoType\":\"61\"},{\"aminoType\":\"62\"},{\"aminoType\":\"63\"},{\"aminoType\":\"64\"},{\"aminoType\":\"65\"},{\"aminoType\":\"66\"},{\"aminoType\":\"67\"},{\"aminoType\":\"68\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"69\",\"prefix\":\"70\"},{\"atomics\":\"71\",\"fractionalDigits\":18},\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"type\":\"72\",\"data\":\"73\"},[\"74\"],\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",\"cosmos-sdk/MsgFundCommunityPool\",\"cosmos-sdk/MsgModifyWithdrawAddress\",\"cosmos-sdk/MsgWithdrawDelegationReward\",\"cosmos-sdk/MsgWithdrawValidatorCommission\",\"cosmos-sdk/MsgDeposit\",\"cosmos-sdk/MsgVote\",\"cosmos-sdk/MsgVoteWeighted\",\"cosmos-sdk/MsgSubmitProposal\",\"cosmos-sdk/MsgBeginRedelegate\",\"cosmos-sdk/MsgCreateValidator\",\"cosmos-sdk/MsgDelegate\",\"cosmos-sdk/MsgEditValidator\",\"cosmos-sdk/MsgUndelegate\",\"cosmos-sdk/MsgTransfer\",\"cosmos-sdk/MsgCreateVestingAccount\",[\"75\",\"76\",\"77\",\"78\",\"79\"],\"kujira\",\"0470de4df82000\",\"Buffer\",[123,34,114,101,116,114,97,99,116,95,111,114,100,101,114,115,34,58,123,34,111,114,100,101,114,95,105,100,120,115,34,58,91,34,50,53,48,54,49,34,93,125,125],{\"denom\":\"80\",\"amount\":\"81\"},{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0},\"factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo\",\"1\"]",null]`,
  {
    code: 0,
    height: 13875995,
    txIndex: 0,
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '285ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '285ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '285ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '285ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2121',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'KqUhg7JmJYfNtHxcXixqYKhsBWJnu3oYdo/YoqH0YsgHQo6AggrEHQVkPNllAf+jOfe+KBBlMpYsTvb6Gd2C+w==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'amount',
            value:
              '1factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          { key: 'action', value: 'retract_orders' },
          {
            key: 'market',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'sender',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'amount',
            value:
              '1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
    ],
    rawLog:
      '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"amount","value":"1factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"},{"key":"receiver","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"},{"key":"spender","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"amount","value":"1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"sender","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"amount","value":"1factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"},{"key":"recipient","value":"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km"},{"key":"sender","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"amount","value":"1000000factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"},{"key":"action","value":"retract_orders"},{"key":"market","value":"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg"}]}]}]',
    transactionHash:
      '3E29373D0C17804EE5AF4A0DB65E1ACC490A4CA35362AC8FCA28C44F7AEDA0A1',
    gasUsed: 193673,
    gasWanted: 227591,
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all open orders and check that there are no open orders"]`,
  {
    orders: [
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all open orders and check that there are no open orders"]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Get all open orders and check that there are no open orders"]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for market 1"]`,
  {
    orders: [
      {
        idx: '178133',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.903',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '921000',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for market 1"]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for market 1"]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraFinClientWithdrawOrders","[[\"1\",\"2\",\"3\",null,null],{\"client\":\"4\",\"contractAddress\":\"5\",\"sender\":\"6\"},{\"orderIdxs\":\"7\"},\"auto\",{\"codesCache\":\"8\",\"tmClient\":\"9\",\"queryClient\":\"10\",\"registry\":\"11\",\"aminoTypes\":\"12\",\"signer\":\"13\",\"gasPrice\":\"14\",\"chainId\":\"15\"},\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[\"16\",\"17\",\"18\"],{},{\"client\":\"19\"},{\"tmClient\":\"9\",\"auth\":\"20\",\"bank\":\"21\",\"wasm\":\"22\",\"tx\":\"23\"},{\"types\":\"24\"},{\"register\":\"25\"},{\"secret\":\"26\",\"seed\":\"27\",\"accounts\":\"28\"},{\"amount\":\"29\",\"denom\":\"30\"},\"harpoon-4\",\"178133\",\"5621\",\"25037\",{\"url\":\"31\"},{},{},{},{},{},{\"/cosmwasm.wasm.v1.MsgStoreCode\":\"32\",\"/cosmwasm.wasm.v1.MsgInstantiateContract\":\"33\",\"/cosmwasm.wasm.v1.MsgUpdateAdmin\":\"34\",\"/cosmwasm.wasm.v1.MsgClearAdmin\":\"35\",\"/cosmwasm.wasm.v1.MsgExecuteContract\":\"36\",\"/cosmwasm.wasm.v1.MsgMigrateContract\":\"37\",\"/cosmos.bank.v1beta1.MsgSend\":\"38\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"39\"},{\"data\":\"40\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"41\"],{\"data\":\"42\"},\"ukuji\",\"https://test-rpc-kujira.mintthemoon.xyz\",{\"aminoType\":\"43\"},{\"aminoType\":\"44\"},{\"aminoType\":\"45\"},{\"aminoType\":\"46\"},{\"aminoType\":\"47\"},{\"aminoType\":\"48\"},{\"aminoType\":\"49\"},{\"aminoType\":\"50\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"51\",\"prefix\":\"52\"},{\"atomics\":\"53\",\"fractionalDigits\":18},\"wasm/MsgStoreCode\",\"wasm/MsgInstantiateContract\",\"wasm/MsgUpdateAdmin\",\"wasm/MsgClearAdmin\",\"wasm/MsgExecuteContract\",\"wasm/MsgMigrateContract\",\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",[\"54\",\"55\",\"56\",\"57\",\"58\"],\"kujira\",\"0470de4df82000\",{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0}]","Kujira Orders Settle funds for market 1"]`,
  {
    logs: [
      {
        msg_index: 0,
        log: '',
        events: [
          {
            type: 'coin_received',
            attributes: [
              {
                key: 'receiver',
                value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
              },
              {
                key: 'amount',
                value:
                  '920310factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
              },
              {
                key: 'receiver',
                value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
              },
              {
                key: 'amount',
                value:
                  '690factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
              },
            ],
          },
          {
            type: 'coin_spent',
            attributes: [
              {
                key: 'spender',
                value:
                  'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
              },
              {
                key: 'amount',
                value:
                  '920310factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
              },
              {
                key: 'spender',
                value:
                  'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
              },
              {
                key: 'amount',
                value:
                  '690factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
              },
            ],
          },
          {
            type: 'execute',
            attributes: [
              {
                key: '_contract_address',
                value:
                  'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
              },
            ],
          },
          {
            type: 'message',
            attributes: [
              { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
              { key: 'module', value: 'wasm' },
              {
                key: 'sender',
                value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
              },
            ],
          },
          {
            type: 'transfer',
            attributes: [
              {
                key: 'recipient',
                value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
              },
              {
                key: 'sender',
                value:
                  'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
              },
              {
                key: 'amount',
                value:
                  '920310factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
              },
              {
                key: 'recipient',
                value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
              },
              {
                key: 'sender',
                value:
                  'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
              },
              {
                key: 'amount',
                value:
                  '690factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
              },
            ],
          },
          {
            type: 'wasm',
            attributes: [
              {
                key: '_contract_address',
                value:
                  'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
              },
              { key: 'action', value: 'withdraw_orders' },
              {
                key: 'market',
                value:
                  'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
              },
            ],
          },
        ],
      },
    ],
    height: 13875999,
    transactionHash:
      '4D4F63B8F243AFB6A2BFD66F6B36F2F86C32B4E0BC620A0791455C0F13221FD3',
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '270ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '270ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '270ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '270ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2122',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'PvT/Gu/LhzmXaMXJKVc9E/7lQQ+oKQ4tz/xMocZu/6t/ruGBMu582xz5H5sDyhL3KjQKlLzAbug8ck4FoMtghQ==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'action', value: 'withdraw_orders' },
          {
            key: 'market',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'amount',
            value:
              '920310factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '920310factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'sender',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'amount',
            value:
              '920310factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'amount',
            value:
              '690factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'amount',
            value:
              '690factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          {
            key: 'amount',
            value:
              '690factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
    ],
    gasWanted: 215452,
    gasUsed: 184335,
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for markets 2 and 3"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for markets 2 and 3"]`,
  {
    orders: [
      {
        idx: '5621',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '0.816',
        offer_denom: { native: 'ukuji' },
        offer_amount: '0',
        filled_amount: '824000',
        created_at: '1685658732301602031',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for markets 2 and 3"]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraFinClientWithdrawOrders","[[\"1\",\"2\",\"3\",null,null],{\"client\":\"4\",\"contractAddress\":\"5\",\"sender\":\"6\"},{\"orderIdxs\":\"7\"},\"auto\",{\"codesCache\":\"8\",\"tmClient\":\"9\",\"queryClient\":\"10\",\"registry\":\"11\",\"aminoTypes\":\"12\",\"signer\":\"13\",\"gasPrice\":\"14\",\"chainId\":\"15\"},\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[\"16\",\"17\"],{},{\"client\":\"18\"},{\"tmClient\":\"9\",\"auth\":\"19\",\"bank\":\"20\",\"wasm\":\"21\",\"tx\":\"22\"},{\"types\":\"23\"},{\"register\":\"24\"},{\"secret\":\"25\",\"seed\":\"26\",\"accounts\":\"27\"},{\"amount\":\"28\",\"denom\":\"29\"},\"harpoon-4\",\"5621\",\"25037\",{\"url\":\"30\"},{},{},{},{},{},{\"/cosmwasm.wasm.v1.MsgStoreCode\":\"31\",\"/cosmwasm.wasm.v1.MsgInstantiateContract\":\"32\",\"/cosmwasm.wasm.v1.MsgUpdateAdmin\":\"33\",\"/cosmwasm.wasm.v1.MsgClearAdmin\":\"34\",\"/cosmwasm.wasm.v1.MsgExecuteContract\":\"35\",\"/cosmwasm.wasm.v1.MsgMigrateContract\":\"36\",\"/cosmos.bank.v1beta1.MsgSend\":\"37\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"38\"},{\"data\":\"39\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"40\"],{\"data\":\"41\"},\"ukuji\",\"https://test-rpc-kujira.mintthemoon.xyz\",{\"aminoType\":\"42\"},{\"aminoType\":\"43\"},{\"aminoType\":\"44\"},{\"aminoType\":\"45\"},{\"aminoType\":\"46\"},{\"aminoType\":\"47\"},{\"aminoType\":\"48\"},{\"aminoType\":\"49\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"50\",\"prefix\":\"51\"},{\"atomics\":\"52\",\"fractionalDigits\":18},\"wasm/MsgStoreCode\",\"wasm/MsgInstantiateContract\",\"wasm/MsgUpdateAdmin\",\"wasm/MsgClearAdmin\",\"wasm/MsgExecuteContract\",\"wasm/MsgMigrateContract\",\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",[\"53\",\"54\",\"55\",\"56\",\"57\"],\"kujira\",\"0470de4df82000\",{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0}]","Kujira Orders Settle funds for markets 2 and 3"]`,
  {
    logs: [
      {
        msg_index: 0,
        log: '',
        events: [
          {
            type: 'coin_received',
            attributes: [
              {
                key: 'receiver',
                value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
              },
              {
                key: 'amount',
                value:
                  '823382factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
              },
              {
                key: 'receiver',
                value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
              },
              {
                key: 'amount',
                value:
                  '618factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
              },
            ],
          },
          {
            type: 'coin_spent',
            attributes: [
              {
                key: 'spender',
                value:
                  'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
              },
              {
                key: 'amount',
                value:
                  '823382factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
              },
              {
                key: 'spender',
                value:
                  'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
              },
              {
                key: 'amount',
                value:
                  '618factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
              },
            ],
          },
          {
            type: 'execute',
            attributes: [
              {
                key: '_contract_address',
                value:
                  'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
              },
            ],
          },
          {
            type: 'message',
            attributes: [
              { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
              { key: 'module', value: 'wasm' },
              {
                key: 'sender',
                value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
              },
            ],
          },
          {
            type: 'transfer',
            attributes: [
              {
                key: 'recipient',
                value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
              },
              {
                key: 'sender',
                value:
                  'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
              },
              {
                key: 'amount',
                value:
                  '823382factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
              },
              {
                key: 'recipient',
                value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
              },
              {
                key: 'sender',
                value:
                  'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
              },
              {
                key: 'amount',
                value:
                  '618factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
              },
            ],
          },
          {
            type: 'wasm',
            attributes: [
              {
                key: '_contract_address',
                value:
                  'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
              },
              { key: 'action', value: 'withdraw_orders' },
              {
                key: 'market',
                value:
                  'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
              },
            ],
          },
        ],
      },
    ],
    height: 13876002,
    transactionHash:
      '3D26420302FB0F0A518F217EBEA5DE5F453E81FC7A205055D439392D28F4BB9B',
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '278ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '278ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '278ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '278ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2123',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'esYDFRGuqQqmudCtTNMpmV79sxo92uOkjpp+RdG7vtAqXnn65ywg+lXD+clPf6I7Ys5ZLmj6nOzw4EA7wNYNIQ==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'action', value: 'withdraw_orders' },
          {
            key: 'market',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          {
            key: 'amount',
            value:
              '823382factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '823382factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'sender',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          {
            key: 'amount',
            value:
              '823382factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          {
            key: 'amount',
            value:
              '618factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'amount',
            value:
              '618factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          {
            key: 'amount',
            value:
              '618factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
          },
        ],
      },
    ],
    gasWanted: 221789,
    gasUsed: 189210,
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for markets 2 and 3"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for markets 2 and 3"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for markets 2 and 3"]`,
  {
    orders: [
      {
        idx: '25037',
        owner: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
        quote_price: '11.444',
        offer_denom: {
          native:
            'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
        },
        offer_amount: '0',
        filled_amount: '89126',
        created_at: '1685658749637530608',
        original_offer_amount: '1000000',
      },
    ],
  }
);
data.set(
  `["kujira","kujiraFinClientWithdrawOrders","[[\"1\",\"2\",\"3\",null,null],{\"client\":\"4\",\"contractAddress\":\"5\",\"sender\":\"6\"},{\"orderIdxs\":\"7\"},\"auto\",{\"codesCache\":\"8\",\"tmClient\":\"9\",\"queryClient\":\"10\",\"registry\":\"11\",\"aminoTypes\":\"12\",\"signer\":\"13\",\"gasPrice\":\"14\",\"chainId\":\"15\"},\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[\"16\"],{},{\"client\":\"17\"},{\"tmClient\":\"9\",\"auth\":\"18\",\"bank\":\"19\",\"wasm\":\"20\",\"tx\":\"21\"},{\"types\":\"22\"},{\"register\":\"23\"},{\"secret\":\"24\",\"seed\":\"25\",\"accounts\":\"26\"},{\"amount\":\"27\",\"denom\":\"28\"},\"harpoon-4\",\"25037\",{\"url\":\"29\"},{},{},{},{},{},{\"/cosmwasm.wasm.v1.MsgStoreCode\":\"30\",\"/cosmwasm.wasm.v1.MsgInstantiateContract\":\"31\",\"/cosmwasm.wasm.v1.MsgUpdateAdmin\":\"32\",\"/cosmwasm.wasm.v1.MsgClearAdmin\":\"33\",\"/cosmwasm.wasm.v1.MsgExecuteContract\":\"34\",\"/cosmwasm.wasm.v1.MsgMigrateContract\":\"35\",\"/cosmos.bank.v1beta1.MsgSend\":\"36\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"37\"},{\"data\":\"38\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"39\"],{\"data\":\"40\"},\"ukuji\",\"https://test-rpc-kujira.mintthemoon.xyz\",{\"aminoType\":\"41\"},{\"aminoType\":\"42\"},{\"aminoType\":\"43\"},{\"aminoType\":\"44\"},{\"aminoType\":\"45\"},{\"aminoType\":\"46\"},{\"aminoType\":\"47\"},{\"aminoType\":\"48\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"49\",\"prefix\":\"50\"},{\"atomics\":\"51\",\"fractionalDigits\":18},\"wasm/MsgStoreCode\",\"wasm/MsgInstantiateContract\",\"wasm/MsgUpdateAdmin\",\"wasm/MsgClearAdmin\",\"wasm/MsgExecuteContract\",\"wasm/MsgMigrateContract\",\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",[\"52\",\"53\",\"54\",\"55\",\"56\"],\"kujira\",\"0470de4df82000\",{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0}]","Kujira Orders Settle funds for markets 2 and 3"]`,
  {
    logs: [
      {
        msg_index: 0,
        log: '',
        events: [
          {
            type: 'coin_received',
            attributes: [
              {
                key: 'receiver',
                value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
              },
              {
                key: 'amount',
                value:
                  '89060factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
              },
              {
                key: 'receiver',
                value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
              },
              {
                key: 'amount',
                value:
                  '66factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
              },
            ],
          },
          {
            type: 'coin_spent',
            attributes: [
              {
                key: 'spender',
                value:
                  'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
              },
              {
                key: 'amount',
                value:
                  '89060factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
              },
              {
                key: 'spender',
                value:
                  'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
              },
              {
                key: 'amount',
                value:
                  '66factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
              },
            ],
          },
          {
            type: 'execute',
            attributes: [
              {
                key: '_contract_address',
                value:
                  'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
              },
            ],
          },
          {
            type: 'message',
            attributes: [
              { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
              { key: 'module', value: 'wasm' },
              {
                key: 'sender',
                value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
              },
            ],
          },
          {
            type: 'transfer',
            attributes: [
              {
                key: 'recipient',
                value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
              },
              {
                key: 'sender',
                value:
                  'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
              },
              {
                key: 'amount',
                value:
                  '89060factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
              },
              {
                key: 'recipient',
                value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
              },
              {
                key: 'sender',
                value:
                  'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
              },
              {
                key: 'amount',
                value:
                  '66factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
              },
            ],
          },
          {
            type: 'wasm',
            attributes: [
              {
                key: '_contract_address',
                value:
                  'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
              },
              { key: 'action', value: 'withdraw_orders' },
              {
                key: 'market',
                value:
                  'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
              },
            ],
          },
        ],
      },
    ],
    height: 13876005,
    transactionHash:
      '446ACDDCA08807B3D02D5252E239090B555BA0E907E51F4DBB7DA1A53C143149',
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '265ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '265ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '265ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '265ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2124',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              '43lxUj3sbrxu4AAhz1AASRB/mL9d3boPtLl4YVhqn8kC11IyhpKvzlDnIZd/JagCwOyPborB1i1pbULssmxEzg==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          { key: 'action', value: 'withdraw_orders' },
          {
            key: 'market',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'amount',
            value:
              '89060factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'amount',
            value:
              '89060factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          {
            key: 'sender',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'amount',
            value:
              '89060factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'amount',
            value:
              '66factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'amount',
            value:
              '66factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          {
            key: 'amount',
            value:
              '66factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
          },
        ],
      },
    ],
    gasWanted: 211237,
    gasUsed: 185514,
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for all markets - 2"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for all markets - 2"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for all markets - 2"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraFinClientWithdrawOrders","[[\"1\",\"2\",\"3\",null,null],{\"client\":\"4\",\"contractAddress\":\"5\",\"sender\":\"6\"},{\"orderIdxs\":\"7\"},\"auto\",{\"codesCache\":\"8\",\"tmClient\":\"9\",\"queryClient\":\"10\",\"registry\":\"11\",\"aminoTypes\":\"12\",\"signer\":\"13\",\"gasPrice\":\"14\",\"chainId\":\"15\"},\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[],{},{\"client\":\"16\"},{\"tmClient\":\"9\",\"auth\":\"17\",\"bank\":\"18\",\"wasm\":\"19\",\"tx\":\"20\"},{\"types\":\"21\"},{\"register\":\"22\"},{\"secret\":\"23\",\"seed\":\"24\",\"accounts\":\"25\"},{\"amount\":\"26\",\"denom\":\"27\"},\"harpoon-4\",{\"url\":\"28\"},{},{},{},{},{},{\"/cosmwasm.wasm.v1.MsgStoreCode\":\"29\",\"/cosmwasm.wasm.v1.MsgInstantiateContract\":\"30\",\"/cosmwasm.wasm.v1.MsgUpdateAdmin\":\"31\",\"/cosmwasm.wasm.v1.MsgClearAdmin\":\"32\",\"/cosmwasm.wasm.v1.MsgExecuteContract\":\"33\",\"/cosmwasm.wasm.v1.MsgMigrateContract\":\"34\",\"/cosmos.bank.v1beta1.MsgSend\":\"35\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"36\"},{\"data\":\"37\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"38\"],{\"data\":\"39\"},\"ukuji\",\"https://test-rpc-kujira.mintthemoon.xyz\",{\"aminoType\":\"40\"},{\"aminoType\":\"41\"},{\"aminoType\":\"42\"},{\"aminoType\":\"43\"},{\"aminoType\":\"44\"},{\"aminoType\":\"45\"},{\"aminoType\":\"46\"},{\"aminoType\":\"47\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"48\",\"prefix\":\"49\"},{\"atomics\":\"50\",\"fractionalDigits\":18},\"wasm/MsgStoreCode\",\"wasm/MsgInstantiateContract\",\"wasm/MsgUpdateAdmin\",\"wasm/MsgClearAdmin\",\"wasm/MsgExecuteContract\",\"wasm/MsgMigrateContract\",\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",[\"51\",\"52\",\"53\",\"54\",\"55\"],\"kujira\",\"0470de4df82000\",{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0}]","Kujira Orders Settle funds for all markets - 2"]`,
  {
    logs: [
      {
        msg_index: 0,
        log: '',
        events: [
          {
            type: 'execute',
            attributes: [
              {
                key: '_contract_address',
                value:
                  'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
              },
            ],
          },
          {
            type: 'message',
            attributes: [
              { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
              { key: 'module', value: 'wasm' },
              {
                key: 'sender',
                value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
              },
            ],
          },
          {
            type: 'wasm',
            attributes: [
              {
                key: '_contract_address',
                value:
                  'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
              },
              { key: 'action', value: 'withdraw_orders' },
              {
                key: 'market',
                value:
                  'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
              },
            ],
          },
        ],
      },
    ],
    height: 13876008,
    transactionHash:
      '7DE595370C7314D2B5AC5ED4B7CC639870BD29BF06C09FFC3D6DF0819CDD95DA',
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '183ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '183ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '183ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '183ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2125',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'cHPRP/i3DA4jOil/Kq9yoE989223PzVtEF2rGoaBdXQNDgelBT1yCBh+waN3YFFCKhyzk/CqSxvn6YdrwaLf/Q==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
          { key: 'action', value: 'withdraw_orders' },
          {
            key: 'market',
            value:
              'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
          },
        ],
      },
    ],
    gasWanted: 145978,
    gasUsed: 130894,
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for all markets - 2"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for all markets - 2"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for all markets - 2"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraFinClientWithdrawOrders","[[\"1\",\"2\",\"3\",null,null],{\"client\":\"4\",\"contractAddress\":\"5\",\"sender\":\"6\"},{\"orderIdxs\":\"7\"},\"auto\",{\"codesCache\":\"8\",\"tmClient\":\"9\",\"queryClient\":\"10\",\"registry\":\"11\",\"aminoTypes\":\"12\",\"signer\":\"13\",\"gasPrice\":\"14\",\"chainId\":\"15\"},\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[],{},{\"client\":\"16\"},{\"tmClient\":\"9\",\"auth\":\"17\",\"bank\":\"18\",\"wasm\":\"19\",\"tx\":\"20\"},{\"types\":\"21\"},{\"register\":\"22\"},{\"secret\":\"23\",\"seed\":\"24\",\"accounts\":\"25\"},{\"amount\":\"26\",\"denom\":\"27\"},\"harpoon-4\",{\"url\":\"28\"},{},{},{},{},{},{\"/cosmwasm.wasm.v1.MsgStoreCode\":\"29\",\"/cosmwasm.wasm.v1.MsgInstantiateContract\":\"30\",\"/cosmwasm.wasm.v1.MsgUpdateAdmin\":\"31\",\"/cosmwasm.wasm.v1.MsgClearAdmin\":\"32\",\"/cosmwasm.wasm.v1.MsgExecuteContract\":\"33\",\"/cosmwasm.wasm.v1.MsgMigrateContract\":\"34\",\"/cosmos.bank.v1beta1.MsgSend\":\"35\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"36\"},{\"data\":\"37\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"38\"],{\"data\":\"39\"},\"ukuji\",\"https://test-rpc-kujira.mintthemoon.xyz\",{\"aminoType\":\"40\"},{\"aminoType\":\"41\"},{\"aminoType\":\"42\"},{\"aminoType\":\"43\"},{\"aminoType\":\"44\"},{\"aminoType\":\"45\"},{\"aminoType\":\"46\"},{\"aminoType\":\"47\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"48\",\"prefix\":\"49\"},{\"atomics\":\"50\",\"fractionalDigits\":18},\"wasm/MsgStoreCode\",\"wasm/MsgInstantiateContract\",\"wasm/MsgUpdateAdmin\",\"wasm/MsgClearAdmin\",\"wasm/MsgExecuteContract\",\"wasm/MsgMigrateContract\",\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",[\"51\",\"52\",\"53\",\"54\",\"55\"],\"kujira\",\"0470de4df82000\",{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0}]","Kujira Orders Settle funds for all markets - 2"]`,
  {
    logs: [
      {
        msg_index: 0,
        log: '',
        events: [
          {
            type: 'execute',
            attributes: [
              {
                key: '_contract_address',
                value:
                  'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
              },
            ],
          },
          {
            type: 'message',
            attributes: [
              { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
              { key: 'module', value: 'wasm' },
              {
                key: 'sender',
                value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
              },
            ],
          },
          {
            type: 'wasm',
            attributes: [
              {
                key: '_contract_address',
                value:
                  'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
              },
              { key: 'action', value: 'withdraw_orders' },
              {
                key: 'market',
                value:
                  'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
              },
            ],
          },
        ],
      },
    ],
    height: 13876011,
    transactionHash:
      '82D2DB48F9592F1B39BC37BABA21164F77A78F51806C42AB6735F5DDCDDA74DD',
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '184ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '184ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '184ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '184ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2126',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              '31ZXEArzPo4s2hWYi8MWCgA7tFnHKAavVS0AMx9AzDZsKPqoDBU3mZq1kgpn2gKmta9yR16ngGdhLVj8QYcxOg==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
          { key: 'action', value: 'withdraw_orders' },
          {
            key: 'market',
            value:
              'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
          },
        ],
      },
    ],
    gasWanted: 146476,
    gasUsed: 131277,
  }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for all markets - 2"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for all markets - 2"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraQueryClientWasmQueryContractSmart","[[\"1\",\"2\"],\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",{\"orders_by_user\":\"3\"},{\"address\":\"4\",\"limit\":255,\"start_after\":null},\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\"]","Kujira Orders Settle funds for all markets - 2"]`,
  { orders: [] }
);
data.set(
  `["kujira","kujiraFinClientWithdrawOrders","[[\"1\",\"2\",\"3\",null,null],{\"client\":\"4\",\"contractAddress\":\"5\",\"sender\":\"6\"},{\"orderIdxs\":\"7\"},\"auto\",{\"codesCache\":\"8\",\"tmClient\":\"9\",\"queryClient\":\"10\",\"registry\":\"11\",\"aminoTypes\":\"12\",\"signer\":\"13\",\"gasPrice\":\"14\",\"chainId\":\"15\"},\"kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg\",\"kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km\",[],{},{\"client\":\"16\"},{\"tmClient\":\"9\",\"auth\":\"17\",\"bank\":\"18\",\"wasm\":\"19\",\"tx\":\"20\"},{\"types\":\"21\"},{\"register\":\"22\"},{\"secret\":\"23\",\"seed\":\"24\",\"accounts\":\"25\"},{\"amount\":\"26\",\"denom\":\"27\"},\"harpoon-4\",{\"url\":\"28\"},{},{},{},{},{},{\"/cosmwasm.wasm.v1.MsgStoreCode\":\"29\",\"/cosmwasm.wasm.v1.MsgInstantiateContract\":\"30\",\"/cosmwasm.wasm.v1.MsgUpdateAdmin\":\"31\",\"/cosmwasm.wasm.v1.MsgClearAdmin\":\"32\",\"/cosmwasm.wasm.v1.MsgExecuteContract\":\"33\",\"/cosmwasm.wasm.v1.MsgMigrateContract\":\"34\",\"/cosmos.bank.v1beta1.MsgSend\":\"35\",\"/cosmos.bank.v1beta1.MsgMultiSend\":\"36\"},{\"data\":\"37\"},{\"0\":59,\"1\":85,\"2\":219,\"3\":151,\"4\":225,\"5\":165,\"6\":174,\"7\":133,\"8\":197,\"9\":41,\"10\":72,\"11\":203,\"12\":152,\"13\":190,\"14\":216,\"15\":241,\"16\":57,\"17\":91,\"18\":73,\"19\":48,\"20\":152,\"21\":40,\"22\":174,\"23\":57,\"24\":232,\"25\":46,\"26\":106,\"27\":195,\"28\":86,\"29\":218,\"30\":145,\"31\":10,\"32\":217,\"33\":163,\"34\":243,\"35\":25,\"36\":130,\"37\":150,\"38\":143,\"39\":104,\"40\":117,\"41\":11,\"42\":150,\"43\":38,\"44\":239,\"45\":189,\"46\":247,\"47\":103,\"48\":3,\"49\":210,\"50\":94,\"51\":139,\"52\":49,\"53\":22,\"54\":226,\"55\":17,\"56\":237,\"57\":207,\"58\":208,\"59\":202,\"60\":109,\"61\":92,\"62\":165,\"63\":15},[\"38\"],{\"data\":\"39\"},\"ukuji\",\"https://test-rpc-kujira.mintthemoon.xyz\",{\"aminoType\":\"40\"},{\"aminoType\":\"41\"},{\"aminoType\":\"42\"},{\"aminoType\":\"43\"},{\"aminoType\":\"44\"},{\"aminoType\":\"45\"},{\"aminoType\":\"46\"},{\"aminoType\":\"47\"},\"bus royal under pet clog disease before speed mention boil stable media vacuum gasp today gravity marriage version game parrot emerge craft allow floor\",{\"hdPath\":\"48\",\"prefix\":\"49\"},{\"atomics\":\"50\",\"fractionalDigits\":18},\"wasm/MsgStoreCode\",\"wasm/MsgInstantiateContract\",\"wasm/MsgUpdateAdmin\",\"wasm/MsgClearAdmin\",\"wasm/MsgExecuteContract\",\"wasm/MsgMigrateContract\",\"cosmos-sdk/MsgSend\",\"cosmos-sdk/MsgMultiSend\",[\"51\",\"52\",\"53\",\"54\",\"55\"],\"kujira\",\"0470de4df82000\",{\"data\":2147483692},{\"data\":2147483766},{\"data\":2147483648},{\"data\":0},{\"data\":0}]","Kujira Orders Settle funds for all markets - 2"]`,
  {
    logs: [
      {
        msg_index: 0,
        log: '',
        events: [
          {
            type: 'execute',
            attributes: [
              {
                key: '_contract_address',
                value:
                  'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
              },
            ],
          },
          {
            type: 'message',
            attributes: [
              { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
              { key: 'module', value: 'wasm' },
              {
                key: 'sender',
                value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
              },
            ],
          },
          {
            type: 'wasm',
            attributes: [
              {
                key: '_contract_address',
                value:
                  'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
              },
              { key: 'action', value: 'withdraw_orders' },
              {
                key: 'market',
                value:
                  'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
              },
            ],
          },
        ],
      },
    ],
    height: 13876014,
    transactionHash:
      '721F6AB06671D9FBF7B6A105FE6A76E1794D656F455A0B4F5FE1791F2D341AD6',
    events: [
      {
        type: 'coin_spent',
        attributes: [
          {
            key: 'spender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '183ukuji' },
        ],
      },
      {
        type: 'coin_received',
        attributes: [
          {
            key: 'receiver',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          { key: 'amount', value: '183ukuji' },
        ],
      },
      {
        type: 'transfer',
        attributes: [
          {
            key: 'recipient',
            value: 'kujira17xpfvakm2amg962yls6f84z3kell8c5lp3pcxh',
          },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
          { key: 'amount', value: '183ukuji' },
        ],
      },
      {
        type: 'message',
        attributes: [
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          { key: 'fee', value: '183ukuji' },
          {
            key: 'fee_payer',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'acc_seq',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km/2127',
          },
        ],
      },
      {
        type: 'tx',
        attributes: [
          {
            key: 'signature',
            value:
              'm6nENW8c+iVvfean9J7ULHfKbzfkOIWKmcIOJNUfKyhCVIf50vRmHGkMa2u3E1fbgEU4kzlATTYBxcdaCAPPng==',
          },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'action', value: '/cosmwasm.wasm.v1.MsgExecuteContract' },
        ],
      },
      {
        type: 'message',
        attributes: [
          { key: 'module', value: 'wasm' },
          {
            key: 'sender',
            value: 'kujira1d6ld7s0edsh5qsmt3lq4tnrqgvxc3jdrk9z3km',
          },
        ],
      },
      {
        type: 'execute',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
        ],
      },
      {
        type: 'wasm',
        attributes: [
          {
            key: '_contract_address',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
          { key: 'action', value: 'withdraw_orders' },
          {
            key: 'market',
            value:
              'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
          },
        ],
      },
    ],
    gasWanted: 146272,
    gasUsed: 131119,
  }
);

export default data;
