let printData=()=>{
    let basicPay=parseInt(document.getElementById("bpay").value);
    let hra=document.getElementById("hra").value=basicPay*(10/100);
    let da=document.getElementById("da").value=basicPay*(5/100);
    let travel=document.getElementById("travelling").value=basicPay*(15/100);
    let pf=document.getElementById("pf").value=basicPay*(15/100);
    let gross=document.getElementById("gsal").value=basicPay+hra+da+travel+pf;
    let netSalary=document.getElementById("net").value=gross-pf;

    hra=parseInt(hra);
    da=parseInt(da);
    travel=parseInt(travel);
    pf=parseInt(pf);
    gross=parseInt(gross);
    netSalary=parseInt(netSalary)
  }
document.getElementById("bpay").addEventListener("keyup",printData);

let sno=0;
let print=()=>{
    let basicPay=parseInt(document.getElementById("bpay").value);
    let hra=document.getElementById("hra").value=basicPay*(10/100);
    let da=document.getElementById("da").value=basicPay*(5/100);
    let travel=document.getElementById("travelling").value=basicPay*(15/100);
    let pf=document.getElementById("pf").value=basicPay*(15/100);
    let gross=document.getElementById("gsal").value=basicPay+hra+da+travel+pf;
    let netSalary=document.getElementById("net").value=gross-pf;

document.getElementById("pri").innerHTML += `
            <tr>
                <td>${sno+=1}</td>
                <td>${basicPay}</td>
                <td>${hra}</td>
                <td>${da}</td>
                <td>${travel}</td>
                <td>${pf}</td>
                <td>${gross}</td>
                <td>${netSalary}</td>
            </tr>
        `;
}
        document.getElementById("btnid3").addEventListener('click',print);
