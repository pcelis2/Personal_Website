///////////////////////////////////////////
// SkillSet Chart

var ctx = document.getElementById("skillset-chart");
var yLabels = {
  1: "Starting",
  2: "Novice",
  3: "Competent",
  4: "Proficient",
  5: "Expert",
};
var chart = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    labels: [
      "C/C++",
      "Java",
      "Dart",
      "Flutter",
      "HTML",
      "CSS",
      "JS",
      "Angular",
    ],
    datasets: [
      {
        label: "Current Mastery",
        data: [4, 4, 3, 3, 2, 2, 3, 2],
        backgroundColor: [
          "#ba6b57",
          "#ba6b57",
          "#ba6b57",
          "#ba6b57",
          "#ba6b57",
          "#ba6b57",
          "#ba6b57",
          "#ba6b57",
        ],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            suggestedMax: 5,
            callback: function (value) {
              if (value % 1 === 0) {
                return value;
              }
            },
            callback: function (value, index, values) {
              return yLabels[value];
            },
          },
        },
      ],
    },
  },
});
///////////////////////////////////////////
// Timeline Chart
var ctx = document.getElementById("full-stack-web-dev-chart");
var yLabels = {
  1: "Starting",
  2: "HTML",
  3: "CSS",
  4: "BootStrap 4",
  5: "JavaScript",
  6: "JQuery",
  7: "Node.js",
  8: "Angular",
  9: "Backend Solution",
  10: "Connect Ends",
};
var chart = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    labels: [""],
    datasets: [
      {
        label: "Current Stage",
        data: [8],
        backgroundColor: ["#ba6b57"],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            suggestedMax: 10,
            callback: function (value) {
              if (value % 1 === 0) {
                return value;
              }
            },
            callback: function (value, index, values) {
              return yLabels[value];
            },
          },
        },
      ],
    },
  },
});
///////////////////////////////////////////
// Angular Chart
var ctx = document.getElementById("angular-dev-chart");
// ctx.height = document.getElementById("full-stack-web-dev-chart").offsetHeight;
var yLabels = {
  0: "Starting",
  1: "File Structure",
  2: "Components",
  3: "Template Syntax",
  4: "Events and Forms",
  5: "Service and HTTP",
  6: "Input and Output",
  7: "Angular Routing",
  8: "Personal Projects",
};
var chart = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    labels: [""],
    datasets: [
      {
        label: "Current Stage",
        data: [7],
        backgroundColor: ["#ba6b57"],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  },
  options: {
    // responsive: true,
    // maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            suggestedMax: 8,
            callback: function (value) {
              if (value % 1 === 0) {
                return value;
              }
            },
            callback: function (value, index, values) {
              return yLabels[value];
            },
          },
        },
      ],
    },
  },
});
///////////////////////////////////////////
// SpringBoot Chart
var ctx = document.getElementById("spring-boot-dev-chart");
// ctx.height = document.getElementById("full-stack-web-dev-chart").offsetHeight;
var yLabels = {
  0: "Starting",
  1: "File Structure",
  2: "Components",
  3: "Template Syntax",
  4: "Events and Forms",
  5: "Service and HTTP",
  6: "Input and Output",
  7: "Angular Routing",
  8: "Personal Projects",
};
var chart = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    labels: [""],
    datasets: [
      {
        label: "Current Stage",
        data: [7],
        backgroundColor: ["#ba6b57"],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  },
  options: {
    // responsive: true,
    // maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            suggestedMax: 8,
            callback: function (value) {
              if (value % 1 === 0) {
                return value;
              }
            },
            callback: function (value, index, values) {
              return yLabels[value];
            },
          },
        },
      ],
    },
  },
});
