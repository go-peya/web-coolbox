// Get the canvas element
const myChartCanvas = document.getElementById('myChart');
const myChartCanvas2 = document.getElementById('myChart2');

const myChartCanvas3 = document.getElementById('myChart3');
const myChartCanvas4 = document.getElementById('myChart4');
const myChartCanvas5 = document.getElementById('myChart5');
// Crear el contexto para el degradado
const ctx = myChartCanvas.getContext('2d');

// Crear un degradado lineal para el borde de la línea
const gradientBorder = ctx.createLinearGradient(0, 0, 0, 400); // Degradado vertical
gradientBorder.addColorStop(0, 'rgba(42, 232, 181, 0.3)'); // Color de inicio
gradientBorder.addColorStop(1, 'rgba(255, 255, 255, 0.4)'); // Color final

// Crear un degradado lineal para el borde de la línea
const gradientBorder2 = ctx.createLinearGradient(0, 0, 0, 400); // Degradado vertical
gradientBorder2.addColorStop(0, 'rgba(0, 136, 255, 0.2)'); // Color de inicio
gradientBorder2.addColorStop(1, 'rgba(255, 255, 255, 0.4)'); // Color final

// Configuración de Chart.js
const myChart = new Chart(myChartCanvas, {
  type: 'line', // Tipo de gráfico 'line' que actúa como un área
  data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'],
    datasets: [
      {
        label: 'Análisis Excel', // Segunda línea
        data: [680, 760, 890, 820, 950, 980, 960, 950],
        borderColor: '#2ae8b5',
        backgroundColor: gradientBorder, // Fondo con transparencia para el área
        borderWidth: 2,
        fill: true, // Rellenar el área debajo de la línea
        tension: 0.4 // Suavizar la curva
      },
      {
        label: 'Integración Web', // Primera línea
        data: [740, 772, 901, 934, 1290, 1330, 1320, 1330],
        borderColor: '#0088ff',
        backgroundColor: gradientBorder2, // Fondo con transparencia para el área
        borderWidth: 2,
        fill: true, // Rellenar el área debajo de la línea
        tension: 0.4 // Suavizar la curva
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    maintainAspectRatio: false,
    responsive: true
  }
});
// Configuración para un gráfico de tipo 'radar'
const myChart2 = new Chart(myChartCanvas5, {
  type: 'radar', // Tipo de gráfico: radar
  data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'], // Meses
    datasets: [
      {
        label: 'Integración Web', // Primer conjunto de datos
        data: [820, 932, 901, 934, 1290, 1330, 1320, 1330], // Datos para Análisis Excel
        borderColor: '#0088ff', // Color del borde
        backgroundColor: 'rgba(0, 136, 255, 0.3)', // Color de fondo con transparencia
        borderWidth: 2, // Grosor del borde
        fill: true, // Rellenar el área bajo la línea
      },
      {
        label: 'Análisis Excel', // Segundo conjunto de datos
        data: [780, 910, 950, 900, 1000, 1250, 1390, 1400], // Datos para Integración Web
        borderColor: '#2ae8b5', // Color del borde
        backgroundColor: 'rgba(42, 232, 181, 0.3)', // Color de fondo con transparencia
        borderWidth: 2, // Grosor del borde
        fill: true, // Rellenar el área bajo la línea
      }
    ]
  },
  options: {
    responsive: true, // Respuesta al cambiar el tamaño de la ventana
    maintainAspectRatio: false, // Desactiva la relación de aspecto fija
    scales: {
      r: {
        min: 0, // Establecer el valor mínimo en el radar
        max: 1500, // Establecer el valor máximo en el radar
        ticks: {
          stepSize: 250, // Espaciado entre los valores en el radar
        }
      }
    },
    plugins: {
      legend: {
        position: 'top', // Posición de la leyenda
      }
    },
    elements: {
      line: {
        tension: 0.4, // Curvatura de las líneas
      }
    }
  }
});

// Configuración para un gráfico polar comparativo
const myChart3 = new Chart(myChartCanvas3, {
  type: 'polarArea', // Usamos 'polarArea' para gráficos circulares comparativos
  data: {
    //labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'], // Días de la semana
    datasets: [
      {
        label: 'Distribución Semanal 2',
        data: [780, 802, 901, 934, 1000, 1150, 1120], // Segundo conjunto de datos
        backgroundColor: [
          '#ccffea', '#9dfdda', '#5ff6c9', '#2ae8b5', '#00ce9c', '#00a880', '#00876a'
        ],
        borderColor: '#ffffff',
        borderWidth: 1
      },
      {
        label: 'Distribución Semanal 1',
        data: [800, 890, 990, 980, 1200, 1330, 1390], // Primer conjunto de datos
        backgroundColor: [
          
          '#edfbff', '#d6f4ff', '#b5eeff', '#83e6ff', '#48d5ff', '#1eb8ff', '#069cff'
        ],
        borderColor: '#ffffff',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scale: {
      ticks: {
        beginAtZero: true
      }
    },
    // Añadir animación para resaltar el gráfico con mayor valor
    animation: {
      animateRotate: true,
      animateScale: true
    }
  }
});

// Configuración para un gráfico de barras horizontales (en filas) de "Análisis Excel" e "Integración Web"
const myChart4 = new Chart(myChartCanvas4, {
  type: 'bar', // Tipo de gráfico: barras
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Días de la semana
    datasets: [
      {
        label: 'Integración Web', // Segundo conjunto de datos
        data: [740, 772, 901, 934, 1290, 1330, 1320], // Datos para "Integración Web"
        backgroundColor: '#069cff', // Color de fondo
        borderColor: '#ffffff', // Color de borde
        borderWidth: 1,
        barThickness: 10 // Ancho de las barras
      },
      {
        label: 'Análisis Excel', // Primer conjunto de datos
        data: [680, 760, 890, 820, 950, 980, 960], // Datos para "Análisis Excel"
        backgroundColor: '#2ae8b5', // Color de fondo
        borderColor: '#ffffff', // Color de borde
        borderWidth: 1,
        barThickness: 10 // Ancho de las barras
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y', // Configuración para barras horizontales
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    },
    // Opciones para mejorar la visualización y la interactividad
    tooltips: {
      enabled: true
    },
    legend: {
      position: 'top'
    },
    animation: {
      animateScale: true, // Habilitar animación al cargar el gráfico
      animateRotate: true
    }
  }
});

// Configuración de Chart.js
const myChart5 = new Chart(myChartCanvas2, {
  type: 'bar', // Cambia a 'bar' para gráfico de barras
  data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'],
    datasets: [
      {
        label: 'Análisis Excel',
        data: [820, 932, 901, 934, 1290, 1330, 1320, 1330],
        borderColor: '#2ae8b5',
        backgroundColor: '#2ae8b5',
        borderWidth: 1,
        fill: true
      },
      {
        label: 'Integración Web',
        data: [780, 910, 950, 900, 1000, 1250, 1390, 1400],
        borderColor: '#0088ff',
        backgroundColor: '#0088ff',
        borderWidth: 1,
        fill: true
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        stacked: true // Activar apilamiento en el eje Y
      },
      x: {
        stacked: true // Activar apilamiento en el eje X
      }
    },
    maintainAspectRatio: false,
    responsive: true
  }
});


/* Nueva Orden - New Order */
document.addEventListener('DOMContentLoaded', () => {
    const orderItems = [
      { id: 1, name: 'Headset Run S...', price: 46.00, quantity: 2 },
      { id: 2, name: 'Shoes Colorful...', price: 70.00, quantity: 2 },
    ];
  
    const discount = 58.00;
    const tbody = document.getElementById('order-items');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');
  
    function updateOrderSummary() {
      let subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      let total = subtotal - discount;
  
      subtotalEl.textContent = `S/.${subtotal.toFixed(2)}`;
      totalEl.textContent = `S/.${total.toFixed(2)}`;
    }
  
    function renderOrderItems() {
      tbody.innerHTML = '';
      orderItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td><div class="w-12 h-12 bg-gray-200 rounded-md"></div></td>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>S/.${item.price.toFixed(2)}</td>
          <td>S/.${(item.price * item.quantity).toFixed(2)}</td>
          <td><button class="btn btn-delete">Eliminar</button></td>
        `;
        tbody.appendChild(row);
      });
    }
  
    renderOrderItems();
    updateOrderSummary();
  });
  
