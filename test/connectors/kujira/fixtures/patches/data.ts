import { IMap } from '../../../../../src/connectors/kujira/kujira.types';
import { printStackTrace } from '../../../helpers';

const data = IMap<string, any>().asMutable();

data.setIn(['global', 'fetch'], () => {
  printStackTrace();

  throw new Error(
    'Trying to use internet while running unit tests is forbidden.'
  );
});

data.setIn(
  [
    'kujira',
    'kujiraGetBasicMarkets',
    '[{"name":"1","type":"2","category":"2","value":"3","class":"4"},"root","object",{},"Array"]',
    '1',
  ],
  IMap({
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
  })
);

data.setIn(
  [
    'kujira',
    'kujiraGetBasicTokens',
    '[{"name":"1","type":"2","category":"2","value":"3","class":"4"},"root","object",{},"Array"]',
    '1',
  ],
  IMap({
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
  })
);

export default data;
