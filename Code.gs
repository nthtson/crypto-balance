function getETHBalance(ethaddress){
  try {
    var obj = JSON.parse (UrlFetchApp.fetch("https://blockscout.com/eth/mainnet/api?module=account&action=eth_get_balance&address="+ethaddress));
    return (Number(eval ("obj.result")) / 1000000000000000000);
  }catch (e) {
    // Logs an ERROR message.
    console.error('getETHBalance() yielded an error: ' + e);
  }
    return 0;
}

function getBTCBalance(address){
  try {
    var balance = JSON.parse (UrlFetchApp.fetch("https://blockchain.info/q/addressbalance/"+address));
    return balance;
  } catch (e) {
    // Logs an ERROR message.
    console.error('getBTCBalance() yielded an error: ' + e);
  }

  return 0;
}

function getXRPBalance(address){
  try {
    var obj = JSON.parse (UrlFetchApp.fetch("https://data.ripple.com/v2/accounts/"+address+"/balances?currency=XRP"));
    return eval ("obj.balances[0].value");
  } catch (e) {
    // Logs an ERROR message.
    console.error('getXRPBalance() yielded an error: ' + e);
  }

  return 0;
}
