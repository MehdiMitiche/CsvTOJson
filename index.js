const fs = require('fs');


const csvToJson = (fileName)=>{
    try{
        const csv=fs.readFileSync(fileName,"utf8")
        let result = []
        let lines=csv.split("\n");
        const headers = lines[0].split(';');
        
        for(let i = 1;i<lines.length;i++){
            var column = lines[i].split(";")
            var trip = {}
            headers.map((header,index)=>{
                trip[header] = column[index]
            })
            result.push(trip)
        }
        return result
    }catch(err){
        return('There is a problem With your file name')
    }

}

//Usage
//*    const JsonResult = csvToJson("tripResultTest3.0.csv");
//     console.log(JsonResult);

