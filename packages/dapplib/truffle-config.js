require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet razor snow common hover cloth equal general'; 
let testAccounts = [
"0x0a4fc016a6d50901828883b2d4bb3d438d980edc87c64666939d80de2889406e",
"0x27b2f7442dffa70159e825dd525224537f481b5bd3f105dcd29f0dabeb22f487",
"0xda840f10cfc4ebfd51d214d178f4bca6add4c0dbd9a9569b077fa2694808eff5",
"0xac9cb1e62e41cd2e9f4b11c407035cc970acf7658ffd3142ed85acb44d936946",
"0x82f478067d0a54863c275307fef18e5ed43ed985b1a32570c5939e8f66592b3c",
"0x3d812484be2a1051fac7c862427cf8a9512f06214e93ff5c94c181a6f98a4217",
"0x7161f5fbbb134c88f4f4e51a8459f1b1ca9f9874872beb184a48a527320d5ebc",
"0x2c5516869c18b23f826fa8c8c97bdfb7046b59ee38623d9de7aed03779959cd8",
"0x22ca3a557101af8c108f5c0e862b3bd64dbc5f58dac69c4e692470f7af188080",
"0x6a131bc32927c1a442398bdc7be44f51f782b7c09f15a50ddb5485188a8d83e3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


