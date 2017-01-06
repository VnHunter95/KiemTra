function changeColor()
{
	document.getElementById("changeColorDiv").style.backgroundColor = "red";
	
}

function cau2()
{
	var x = document.getElementById("cau2").getElementsByTagName("p");
	for(var i = 0 ; i <= x.length-1;i++)
	{
		x.item(i).className="myclass";
		
	}
}

function cau3()
{
	var error1 = document.getElementById("error1");
	var error2 = document.getElementById("error2");
	var error3 = document.getElementById("error3");
	var a = document.getElementById("inputNumber1").value;
	var b = document.getElementById("inputNumber2").value;
	var c = document.getElementById("inputNumber3").value;
	error1.innerHTML = "";
	if(a.length==0)
	{
		error1.innerHTML = "A number is required";

	}
	if(b.length==0)
	{
		error2.innerHTML = "A number is required";

	}
	if(c.length==0)
	{
		error3.innerHTML = "A number is required";

	}
	if(10%b!=0)
	{
		error2.innerHTML = "The number should be divisible by 10";	

	}
	if(c.length<7)
	{
		error3.innerHTML = "The number should be atleast 7 digits";	

	}
	return false;
}

function cau4(){

	var table = document.getElementById("TABLE");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var select = document.getElementById("option");
	cell1.innerHTML = select.options[select.selectedIndex].value;
	cell2.innerHTML = document.getElementById("input1").value;
	cell3.innerHTML = document.getElementById("input2").value;
	document.getElementById("input1").value = "";
	document.getElementById("input2").value = "";
	
}

