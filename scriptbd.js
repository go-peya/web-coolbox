// Get the canvas element
const myChartCanvas = document.getElementById('myChart');
const myChartCanvas2 = document.getElementById('myChart2');

// Chart.js configuration
const myChart = new Chart(myChartCanvas, {
  type: 'line', // You can change the type to bar, pie, etc.
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'My Data', // Label for the dataset
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      borderColor: '#2ae8b5', // Border color
      backgroundColor: '#2ae8b5',
      borderWidth: 1, // Border width
      fill: false // Fill the area under the line
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    // Añade las opciones de respuesta
    maintainAspectRatio: false, // Desactiva la relación de aspecto fija
    responsive: true // Habilita la respuesta del gráfico 
  }
});

// Chart.js configuration
const myChart2 = new Chart(myChartCanvas2, {
  type: 'bar', // Cambia a 'bar' para gráfico de barras
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'My Data', 
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      borderColor: '#2ae8b5',
      backgroundColor: '#2ae8b5',
      borderWidth: 1,
      fill: true // Rellena las barras
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    // Añade las opciones de respuesta
    maintainAspectRatio: false, // Desactiva la relación de aspecto fija
    responsive: true // Habilita la respuesta del gráfico 
  }
});