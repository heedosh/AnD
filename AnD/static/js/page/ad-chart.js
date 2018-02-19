$(window).on('load',function () {
    Morris.Area({
        element: 'line-area-example',
        data: [
            { y: '2009', a: 10, b: 3 },
            { y: '2010', a: 14, b: 5 },
            { y: '2011', a: 8, b: 2 },
            { y: '2012', a: 20, b: 15 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors: ['#746c9f', '#ababab'],
        lineWidth: '0',
        grid: false,
    });

    // Morris bar chart

    Morris.Bar({
        element: 'bar-example',
        data: [
            { y: '2009', a: 75, b: 65 },
            { y: '2010', a: 50, b: 40 },
            { y: '2011', a: 75, b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        barColors: ['#2ec7c9', '#b6a2de']
    });

    // Morris donut chart

    Morris.Donut({
        element: 'donut-example',
        data: [
            { label: "Download Sales", value: 10, color: '#5e90b5' },
            { label: "In-Store Sales", value: 32, color: '#66cd7d' },
            { label: "Mail-Order Sales", value: 21, color: '#aa9bff' }
        ]
    });

    // Easy-pie charts
    var charts = $('.easypiechart');

    //update instance every 5 sec
    window.setInterval(function () {

        // refresh easy pie chart
        charts.each(function () {
            $(this).data('easyPieChart').update(Math.floor(100 * Math.random()));
        });

    }, 5000);
    // Initialize Line Chart
    var data1 = [{
        data: [[1, 5.3], [2, 5.9], [3, 7.2], [4, 8], [5, 7], [6, 6.5], [7, 6.2], [8, 6.7], [9, 7.2], [10, 7], [11, 6.8], [12, 7]],
        label: 'In-Bound',
        points: {
            show: true,
            radius: 6
        },
        splines: {
            show: true,
            tension: 0.45,
            lineWidth: 5,
            fill: 0
        }
    }, {
        data: [[1, 6.6], [2, 7.4], [3, 8.6], [4, 9.4], [5, 8.3], [6, 7.9], [7, 7.2], [8, 7.7], [9, 8.9], [10, 8.4], [11, 8], [12, 8.3]],
        label: 'M/H 내방',
        points: {
            show: true,
            radius: 6
        },
        splines: {
            show: true,
            tension: 0.45,
            lineWidth: 5,
            fill: 0
        }
    }];

    var data2 = [{
        data: [[1, 5.3], [2, 5.9], [3, 7.2], [4, 8], [5, 7], [6, 6.5], [7, 6.2], [8, 6.7], [9, 7.2], [10, 7], [11, 6.8], [12, 7]],
        label: 'In-Bound',
        points: {
            show: true,
            radius: 6
        },
        splines: {
            show: true,
            tension: 0.45,
            lineWidth: 5,
            fill: 0
        }
    }, {
        data: [[1, 6.6], [2, 7.4], [3, 8.6], [4, 9.4], [5, 8.3], [6, 7.9], [7, 7.2], [8, 7.7], [9, 8.9], [10, 8.4], [11, 8], [12, 8.3]],
        label: 'M/H 내방',
        points: {
            show: true,
            radius: 6
        },
        splines: {
            show: true,
            tension: 0.45,
            lineWidth: 5,
            fill: 0
        }
    }];

    var options1 = {
        colors: ['#a2d200', '#cd97eb'],
        series: {
            shadowSize: 0
        },
        xaxis: {
            font: {
                color: '#3d4c5a'
            },
            position: 'bottom',
            ticks: [
                [1, 'D+1'], [2, 'D+2'], [3, 'D+3'], [4, 'D+4'], [5, 'D+5'], [6, 'D+6'], [7, 'D+7'], [8, 'D+8'], [9, 'D+9'], [10, 'D+10'], [11, 'D+11'], [12, 'D+12']
            ]
        },
        yaxis: {
            font: {
                color: '#3d4c5a'
            }
        },
        grid: {
            hoverable: true,
            clickable: true,
            borderWidth: 0,
            color: '#ccc'
        },
        tooltip: true,
        tooltipOpts: {
            content: '%s: %y.4',
            defaultTheme: false,
            shifts: {
                x: 0,
                y: 20
            }
        }
    };

    var options2 = {
        colors: ['#a2d200', '#cd97eb'],
        series: {
            shadowSize: 0
        },
        xaxis: {
            font: {
                color: '#3d4c5a'
            },
            position: 'bottom',
            ticks: [
                [1, 'D+1'], [2, 'D+2'], [3, 'D+3'], [4, 'D+4'], [5, 'D+5'], [6, 'D+6'], [7, 'D+7'], [8, 'D+8'], [9, 'D+9'], [10, 'D+10'], [11, 'D+11'], [12, 'D+12']
            ]
        },
        yaxis: {
            font: {
                color: '#3d4c5a'
            }
        },
        grid: {
            hoverable: true,
            clickable: true,
            borderWidth: 0,
            color: '#ccc'
        },
        tooltip: true,
        tooltipOpts: {
            content: '%s: %y.4',
            defaultTheme: false,
            shifts: {
                x: 0,
                y: 20
            }
        }
    };

    var plot1 = $.plot($("#line-chart1"), data1, options1);
    var plot1 = $.plot($("#line-chart2"), data2, options2);

    $(window).resize(function () {
        // redraw the graph in the correctly sized div
        plot1.resize();
        plot1.setupGrid();
        plot1.draw();
    });
    // * Initialize Line Chart

    // Initialize Pie Chart
    var data101 = [
        { label: 'A등급', data: 40 },
        { label: 'B등급', data: 35 },
        { label: 'C등급', data: 17 },
        { label: 'D등급', data: 09 },
    ];
    var data102 = [
        { label: 'A등급', data: 40 },
        { label: 'B등급', data: 35 },
        { label: 'C등급', data: 17 },
        { label: 'D등급', data: 09 },
    ];

    var options101 = {
        series: {
            pie: {
                show: true,
                innerRadius: 0,
                stroke: {
                    width: 0
                },
                label: {
                    show: true,
                    threshold: 0.02
                }
            }
        },
        colors: ['#46bc9f', '#e56b6b', '#ecc755', '#9bbd5a', '#a994cd', '#46add4'],
        grid: {
            hoverable: true,
            clickable: true,
            borderWidth: 0,
            color: '#3d4c5a'
        },
        tooltip: true,
        tooltipOpts: { content: '%s: %p.0%' }
    };

    var options102 = {
        series: {
            pie: {
                show: true,
                innerRadius: 0,
                stroke: {
                    width: 0
                },
                label: {
                    show: true,
                    threshold: 0.02
                }
            }
        },
        colors: ['#46bc9f', '#e56b6b', '#ecc755', '#9bbd5a', '#a994cd', '#46add4'],
        grid: {
            hoverable: true,
            clickable: true,
            borderWidth: 0,
            color: '#3d4c5a'
        },
        tooltip: true,
        tooltipOpts: { content: '%s: %p.0%' }
    };

    var plot101 = $.plot($("#pie-chart1"), data101, options101);
    var plot102 = $.plot($("#pie-chart2"), data102, options102);

    $(window).resize(function () {
        // redraw the graph in the correctly sized div
        plot101.resize();
        plot101.setupGrid();
        plot101.draw();
    });
    // * Initialize Pie Chart


    // Initialize Bar Chart



    setInterval(function () {
        random.removeData(seriesData);
        random.addData(seriesData);
        graph2.update();

    }, updateInterval);
    // *Rickshaw Realtime Chart
});
