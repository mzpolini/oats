var request = require('request');

bcToken = 4eb1e48b0c88b8d3220adf101289c743;

createNewAddress();

function IssueAsset(token) {

  //create new address with token

  //fund new address, for testnet on blockcypher we will
  //use the faucet
  

  //using now funded address, issue # amount of assets


};


function createNewAddress() {
request(
    { method: 'POST'
    , uri: 'https://api.blockcypher.com/v1/btc/test3/addrs'
    }
  , function (error, response, body) {
      if(response.statusCode == 201){
        var info = JSON.parse(body);
        console.log("PK :" + info.private);
        console.log("public :" + info.public);
        console.log("address :" + info.address);
        console.log("wif :" + info.wif);
      } else {
        console.log('error: '+ response.statusCode)
        console.log(body)
      }
    }
  )
};
