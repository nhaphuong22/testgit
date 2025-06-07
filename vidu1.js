function tinhtong(){
    try{
        const a = parseFloat(document.getElementById("num1").value);
        const b = parseFloat(document.getElementById("num2").value);

        const tong = a + b
        document.getElementById("result").textContent = "kết quả: " + tong
        if(isNaN(a) || isNaN(b)){
            throw new Error("nhap lai");
        }
    }catch (err){
        document.getElementById("result").textContent = "loi "  + err
        
    }
}