
document.addEventListener('DOMContentLoaded', function () {
    // --- Data for charts ---
    const ventasPorProductoCSV = `NOMBRE,VENTAS
Camisa Polo,90
Pantalón Jeans,100
Zapatos Deportivos,405
Cinturón Cuero,24`;

    const ventaMesCSV = `CIUDAD,INGRESOS
Managua,315
León,197
Granada,107`;

    const totalVentasTrimestreCSV = `NOMBRE,TOTAL_VENDIDOS
Zapatos Deportivos,5
Zapatos Deportivos,4
Camisa Polo,3
Pantalón Jeans,2
Cinturón Cuero,1
Cinturón Cuero,1`;

    // Helper function to parse CSV
    function parseCSV(csvString) {
        const lines = csvString.trim().split('\n');
        const headers = lines[0].split(',').map(header => header.trim());
        return lines.slice(1).map(line => {
            const values = line.split(',').map(value => value.trim());
            return headers.reduce((obj, header, index) => {
                obj[header] = values[index];
                return obj;
            }, {});
        });
    }

    const ventasPorProductoData = parseCSV(ventasPorProductoCSV);
    const ventaMesData = parseCSV(ventaMesCSV);
    const totalVentasTrimestreData = parseCSV(totalVentasTrimestreCSV);

    // --- Gráfico 1: Ventas por Producto ---
    const labelsVentasProducto = ventasPorProductoData.map(item => item.NOMBRE);
    const dataVentasProducto = ventasPorProductoData.map(item => parseFloat(item.VENTAS));

    const ctxVentasProducto = document.getElementById('ventasPorProductoChart').getContext('2d');
    new Chart(ctxVentasProducto, {
        type: 'bar',
        data: {
            labels: labelsVentasProducto,
            datasets: [{
                label: 'Ventas por Producto',
                data: dataVentasProducto,
                backgroundColor: [
                    '#A2D2FF', // Light Blue
                    '#BDE0FE', // Lighter Blue
                    '#FFC7EA', // Pink
                    '#FFD1DC'  // Light Pink
                ],
                borderColor: [
                    '#A2D2FF',
                    '#BDE0FE',
                    '#FFC7EA',
                    '#FFD1DC'
                ],
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

    // --- Gráfico 2: Ingresos por Ciudad ---
    const labelsIngresosCiudad = ventaMesData.map(item => item.CIUDAD);
    const dataIngresosCiudad = ventaMesData.map(item => parseFloat(item.INGRESOS));

    const ctxIngresosCiudad = document.getElementById('ingresosPorCiudadChart').getContext('2d');
    new Chart(ctxIngresosCiudad, {
        type: 'bar',
        data: {
            labels: labelsIngresosCiudad,
            datasets: [{
                label: 'Ingresos por Ciudad',
                data: dataIngresosCiudad,
                backgroundColor: [
                    '#A2D2FF', // Light Blue
                    '#BDE0FE', // Lighter Blue
                    '#FFC7EA'  // Pink
                ],
                borderColor: [
                    '#A2D2FF',
                    '#BDE0FE',
                    '#FFC7EA'
                ],
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

    // --- Gráfico 3: Total de Ventas por Producto ---
    // Aggregate data as there are duplicate product names
    const aggregatedVentasProducto = totalVentasTrimestreData.reduce((acc, item) => {
        const nombre = item.NOMBRE;
        const totalVendidos = parseFloat(item.TOTAL_VENDIDOS);
        acc[nombre] = (acc[nombre] || 0) + totalVendidos;
        return acc;
    }, {});

    const labelsTotalVentasProducto = Object.keys(aggregatedVentasProducto);
    const dataTotalVentasProducto = Object.values(aggregatedVentasProducto);

    const ctxTotalVentasProducto = document.getElementById('totalVentasPorProductoChart').getContext('2d');
    new Chart(ctxTotalVentasProducto, {
        type: 'bar',
        data: {
            labels: labelsTotalVentasProducto,
            datasets: [{
                label: 'Total de Unidades Vendidas por Producto',
                data: dataTotalVentasProducto,
                backgroundColor: [
                    '#A2D2FF', // Light Blue
                    '#BDE0FE', // Lighter Blue
                    '#FFC7EA', // Pink
                    '#FFD1DC'  // Light Pink
                ],
                borderColor: [
                    '#A2D2FF',
                    '#BDE0FE',
                    '#FFC7EA',
                    '#FFD1DC'
                ],
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
});
