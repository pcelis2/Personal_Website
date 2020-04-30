///////////////////////////////////////////
// SkillSet Chart

var ctx = document.getElementById('skillset-chart');
var yLabels = {
    1: 'Starting',
    2: 'Novice',
    3: 'Competent',
    4: 'Proficient',
    5: 'Expert',
}
var chart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['C/C++', 'Java', 'Dart', 'Flutter', 'HTML', 'CSS', 'JS', 'Angular'],
        datasets: [{
            label: 'Current Mastery',
            data: [4, 4, 3, 3, 2, 2, 2, 1],
            backgroundColor: ['#ba6b57', '#ba6b57', '#ba6b57', '#ba6b57', '#ba6b57', '#ba6b57', '#ba6b57', '#ba6b57', ],
            borderColor: [],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false,
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 5,
                    callback: function(value) {
                        if (value % 1 === 0) {
                            return value;
                        }
                    },
                    callback: function(value, index, values) {

                        return yLabels[value];

                    }
                }
            }]
        }
    }
});
///////////////////////////////////////////
// Timeline Chart
var ctx = document.getElementById('full-stack-web-dev-chart');
var yLabels = {
    1: 'Starting',
    2: 'HTML',
    3: 'CSS',
    4: 'BootStrap 4',
    5: 'JavaScript',
    6: 'JQuery',
    7: 'Node.js',
    8: 'Angular',
    9: 'Backend Solution',
    10: 'Connect Ends'
}
var chart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: [''],
        datasets: [{
            label: 'Current Stage',
            data: [8],
            backgroundColor: ['#ba6b57'],
            borderColor: [],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false,
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 10,
                    callback: function(value) {
                        if (value % 1 === 0) {
                            return value;
                        }
                    },
                    callback: function(value, index, values) {

                        return yLabels[value];

                    }
                }
            }]
        }
    }
});