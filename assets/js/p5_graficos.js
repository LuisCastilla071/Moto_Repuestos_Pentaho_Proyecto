document.addEventListener('DOMContentLoaded', function () {
    const vibrantPalette = [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
        '#FF9F40', '#8AC926', '#E75480', '#1982C4', '#F4A261'
    ];

    // --- Data for charts ---
    const ventasData = {
      "data": [
        { "mes": "enero", "Venta de enero": 30.5 }
      ]
    };

    const ventasCategoriaData = {
        "data": [
            { "Cantidad_Venta": 1, "categoria": "Herramientas" },
            { "Cantidad_Venta": 10, "categoria": "Abrasivos" },
            { "Cantidad_Venta": 2, "categoria": "Herramientas" }
        ]
    };

    const ventasTiendaData = {
        "data": [
            { "Monta_Venta": 25.5, "nombre_tienda": "Ferreteria Central" },
            { "Monta_Venta": 5.0, "nombre_tienda": "Ferreteria Norte" },
            { "Monta_Venta": 120.0, "nombre_tienda": "Ferreteria Sur" },
            { "Monta_Venta": 150.0, "nombre_tienda": "Ferreteria Este" }
        ]
    };

    // --- Gráfico de Ventas por Mes ---
    const labelsVentas = ventasData.data.map(item => item.mes);
    const ventas = ventasData.data.map(item => parseFloat(item[Object.keys(item).find(k => k.startsWith('Venta'))]));

    const ctxVentas = document.getElementById('ventasPorMesChart').getContext('2d');
    new Chart(ctxVentas, {
        type: 'bar',
        data: {
            labels: labelsVentas,
            datasets: [{
                label: 'Ventas por Mes ($)',
                data: ventas,
                backgroundColor: vibrantPalette,
                borderColor: vibrantPalette,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // --- Gráfico de Ventas por Categoría ---
    const ventasPorCategoria = {};
    ventasCategoriaData.data.forEach(item => {
        const categoria = item.categoria;
        const cantidad = parseFloat(item.Cantidad_Venta);
        ventasPorCategoria[categoria] = (ventasPorCategoria[categoria] || 0) + cantidad;
    });

    const labelsCategoria = Object.keys(ventasPorCategoria);
    const ventasCategoria = Object.values(ventasPorCategoria);

    const ctxCategoria = document.getElementById('ventasPorCategoriaChart').getContext('2d');
    new Chart(ctxCategoria, {
        type: 'bar',
        data: {
            labels: labelsCategoria,
            datasets: [{
                label: 'Cantidad Vendida',
                data: ventasCategoria,
                backgroundColor: vibrantPalette,
                borderColor: vibrantPalette,
                borderWidth: 1
            }]
        }
    });

    // --- Gráfico de Ventas por Tienda ---
    const labelsTienda = ventasTiendaData.data.map(item => item.nombre_tienda);
    const ventasTienda = ventasTiendaData.data.map(item => parseFloat(item['Monta_Venta']));

    const ctxTienda = document.getElementById('ventasPorTiendaChart').getContext('2d');
    new Chart(ctxTienda, {
        type: 'bar',
        data: {
            labels: labelsTienda,
            datasets: [{
                label: 'Monto de Venta ($)',
                data: ventasTienda,
                backgroundColor: vibrantPalette,
                borderColor: vibrantPalette,
                borderWidth: 1
            }]
        }
    });
});