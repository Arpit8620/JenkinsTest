
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <div><h1>USER DATA</h1></div>
        <div><button id="clickbutton">SHOW DATA</button></div>
    </div>
    <div>
        <ul class="unorderedList" id="UlList">
        </ul>
    </div>
    <script>
        var displayList=[];
        var dataButton = document.getElementById("clickbutton");
        var x=0;
        var dataList = document.getElementById('UlList');
        var newData=[];

        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            newData = data;
            console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })


        dataButton.addEventListener('click',()=>{
            let y=x;
            for(x=y;x<(y+8) && x<newData.length;x++)
            {
                displayList.push(newData[x]);
                let newText=`${newData[x].id} is the ID and has the name ${newData[x].name} and she is from ${newData[x].address.city}`
                dataList.innerHTML += `<li>${newText}</li>`
            }
        })
    </script>
</body>
</html>
