require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index reflect mad assume good opera flat gift'; 
let testAccounts = [
"0x9683e588846650ad5c285263fedc46706d18c038d5f0247462c50812b72f5f6d",
"0x7d430cebf0f6b4b8873cf9c7a0eca1582403840d5d4192eb290eb08a699d7c8d",
"0x6bd9d4cfff742888f1710c39038a54fc841af6fc4c5b0bdb7cf1915ad392f827",
"0xfcde6ecb1a2adc4c73a2740c55cf4ef807a452f1a4813daae6c05123cbf97524",
"0x41d674266d73e70bb3aa095cd52c7629fa379bbd72a213f1632e717b6c85442c",
"0x2c5e9a1b75e0b90a4ead12f3ec1897e94f13b47f844d82c0acfd08e4798dd711",
"0x45870810607b47609dd8f88886240c8a3bc5c86f0287674bafbbccdf83a8149d",
"0x67167a15d903637089a39d744d9d9cbddaca5e8cec6bb99fabe9a8c8c27bae5a",
"0xa75efa01c5d3fa250cf03518a54dd9028063f56fbab4ccd18829a9fb61b13283",
"0xb7f6575cc2a340cd7f94d565bdc3c24db70edf254d108c163fff43a7109dab3b"
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


