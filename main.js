const ctx = document.getElementById('myChart').getContext('2d');
const data = {
	labels: [],
	datasets: [
		{
			type: 'line',
			label: 'temperature',
			data: [],
			borderColor: 'red',
		},
		{
			type: 'line',
			label: 'humidity',
			data: [],
			borderColor: 'blue',
		},
		{
			type: 'line',
			label: 'light',
			data: [],
			borderColor: 'yellow',
		},
	],
};

const wuysChart = new Chart(ctx, {
	type: 'scatter',
	data: data,
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});
function random(wuysChart) {
	var nhietdo = Math.round(Math.random() * 50);
  var doam = Math.round(Math.random() * 60) + 40;
  var anhsang = Math.round(Math.random() * 120) + 40;
	var time = new Date().toLocaleString();//trả về thời gian dạng chuỗi
	// Push data to chart: thêm mục mới vào cuối
	wuysChart.data.labels.push(time);
	wuysChart.data.datasets[0].data.push(nhietdo);
	wuysChart.data.datasets[1].data.push(doam);
	wuysChart.data.datasets[2].data.push(anhsang);
	wuysChart.update();
	if (nhietdo >= 0 && nhietdo < 25){
          document.getElementById("temperature").style.backgroundColor = "lightsalmon";
      } else if (nhietdo < 37){
          document.getElementById("temperature").style.backgroundColor = "indianred";
      } else {
          document.getElementById("temperature").style.backgroundColor = "red";
      } 
	if (doam > 0 && doam < 40){
          document.getElementById("humidity").style.backgroundColor = "lightskyblue";
      } else if (doam < 80){
          document.getElementById("humidity").style.backgroundColor = "darkslateblue";
      } else {
          document.getElementById("humidity").style.backgroundColor = "blue";
      }
	  if (anhsang < 70){
          document.getElementById("light").style.backgroundColor = "lemonchiffon";
      } else if (anhsang < 110){
          document.getElementById("light").style.backgroundColor = "peachpuff";
      } else {
          document.getElementById("light").style.backgroundColor = "yellow";
      }
      document.getElementById("temperature").innerHTML = "NHIỆT ĐỘ" + "<br>"+ nhietdo + "°C";
      document.getElementById("humidity").innerHTML = "ĐỘ ẨM" + "<br>"+ doam + "%";
      document.getElementById("light").innerHTML = "ÁNH SÁNG" + "<br>"+ anhsang + "Lux";
}
random(wuysChart);
setInterval(function() {
	random(wuysChart);
}, 2000);

function led1On(){
  const note = confirm('Bạn có muốn bật đèn 1 không?')
  if(note){
    document.getElementById("myImage1").src= "bongdensang.jpg";
    document.getElementById('led1').style.backgroundColor = "blue";
  }
}
function led1Off(){ 
  const note = confirm('Bạn có muốn tắt led 1 không?')
  if(note){
    document.getElementById("myImage1").src= "bongden.jpg";
    document.getElementById("led1").style.backgroundColor = "red";
}
}
function led2(){
  var btn = document.getElementById('btn');
  if(btn.checked == true){
    const note = confirm('Bạn có muốn tắt led 2 không?')
    if(note){
      document.getElementById("myImage2").src= "bongden.jpg";
      document.getElementById('led2').style.backgroundColor = "red";
    }
  }else{
    const note = confirm('Bạn có muốn bật đèn 2 không?')
    if(note){
      document.getElementById("myImage2").src= "bongdensang.jpg";
      document.getElementById('led2').style.backgroundColor = "blue";
    }
  }
}  
