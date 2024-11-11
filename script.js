const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});


// Datos de pedidos
const orders = [
    { id: "1185638557", customer: "Flor Debenedetti", channel: "Online", total: "s/. 952.00", status: "Entregado" },
    { id: "1185321722", customer: "Myriam Yanez", channel: "Tienda", total: "s/. 434.90", status: "Pendiente" },
    { id: "1183884236", customer: "Vania Vera", channel: "Tienda", total: "s/. 20.00", status: "Cancelado" },
    { id: "1183698274", customer: "Leopoldo Poletti", channel: "Online", total: "s/. 140.00", status: "Entregado" },
    { id: "1183693976", customer: "Franklin Boccia", channel: "Online", total: "s/. 570.00", status: "Entregado" },
    { id: "1183636498", customer: "Carol Kuo", channel: "Tienda", total: "s/. 176.40", status: "Pendiente" },
  ];
  
  // Mapeo de estado a clase de estilo
  const statusClassMap = {
    "Entregado": "status-entregado",
    "Pendiente": "status-pendiente",
    "Cancelado": "status-cancelado"
  };
  
  // Llenar la tabla con los pedidos
  const tableBody = document.getElementById("order-table-body");
  
  orders.forEach(order => {
    const row = document.createElement("tr");
    
    row.innerHTML = `
      <td>${order.id}</td>
      <td>${order.customer}</td>
      <td>${order.channel}</td>
      <td>${order.total}</td>
      <td><span class="${statusClassMap[order.status]}">${order.status}</span></td>
    `;
  
    tableBody.appendChild(row);
  });
