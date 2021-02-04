function reqListener(){
    var liste = document.getElementById('liste');
    var item1 = document.createElement('li');
    var item2 = document.createElement('li');
    var item3 = document.createElement('li');
    item1.textContent = this.response.bpi.USD.rate;
    item2.textContent = this.response.bpi.GBP.rate;
    item3.textContent = this.response.bpi.EUR.rate;
    liste.appendChild(item1);
    liste.appendChild(item2);
    liste.appendChild(item3);
    var time = document.getElementById('time')
    time.textContent = this.response.time.updated;
}


var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "https://api.coindesk.com/v1/bpi/currentprice.json", true);
oReq.responseType='json';
oReq.send()





