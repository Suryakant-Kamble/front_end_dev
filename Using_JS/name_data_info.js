
var data = [
    { name: "SK", tel: "022-562582" },
    { name: "NJ", tel: "020-562582" },
    { name: "PS", tel: "500-562582" },
	{ name: "SJ", tel: "010-562582" },
	{ name: "KK", tel: "032-562582" },
]

function genTable(){
	var gentdata = document.getElementById("list_data");
	var head_str= "<tr> <th>Name</th> <th>Phone Number</th></tr>";
	for(var temp of data){
		head_str = head_str + "<tr><td>" + temp.name + "</td> <td>"+ temp.tel+ "</td></tr>";
		
		
		
	}
	gentdata.innerHTML = head_str;
}