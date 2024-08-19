const initialState = [
  {
    header: "CSPM Executive Dashboard",
    headerOption: "CSPM",
    graphType: "Doughnut",
    dataCollection: [
      {
        title: "Cloud Accounts",
        removed: false,
        labels: ["Connected(2)", "Not Connected(2)"],
        datasets: [
          {
            label: ["Connected", "Not Connected"],
            data: [2, 2],
            backgroundColor: ["rgba(225,235,255,255)", "rgba(85,120,255,255)"],
          },
        ],
      },
      {
        title: "Cloud Account Risk Assessment",
        removed: false,
        labels: [
          "Failed(1689)",
          "Warning(681)",
          "Not Available(36)",
          "Passed(7253)",
        ],
        //   labels: ["Passed", "Not Available", "Warning", "Failed"],

        datasets: [
          {
            // label: ["Failed", "Warning", "Not Available", "Passed"],
            label: ["Passed", "Not Available", "Warning", "Failed"].reverse(),
            data: [7253, 36, 681, 1689].reverse(),
            backgroundColor: [
              "rgba(25,165,90,255)",
              "rgba(200,205,220,255)",
              "rgba(250,215,50,255)",
              "rgba(185,20,15,255)",
            ].reverse(),
          },
        ],
      },
    ],
  },
  {
    header: "CWPP Dashboard:",
    headerOption: "CWPP",
    graphType: "no_graph",
    dataCollection: [
      {
        title: "Top 5 Namespace Specific Alerts",
        removed: false,
      },
      {
        title: "Workload Alerts",
        removed: false,
      },
    ],
  },
  {
    header: "Registry Scan",
    headerOption: "Image",
    graphType: "Bar",
    dataCollection: [
      {
        title: "Image Risk Assessment",
        removed: false,
        labels: ["1470"],
        datasets: [
          {
            label: "Critical (9)",
            data: [9],
            backgroundColor: ["rgba(110,18,11,255)"],
            barThickness: 10, // <<<<<<<<<<<<   bar / column size
          },
          {
            label: "High (150)",
            data: [150],
            backgroundColor: ["rgba(202,43,29,255)"],
            barThickness: 10, // <<<<<<<<<<<<   bar / column size
          },
          {
            label: "Medium (838)",
            data: [838],
            backgroundColor: "rgba(238,150,62,255)",
            barThickness: 10, // <<<<<<<<<<<<   bar / column size
          },
          {
            label: "Low (400)",
            data: [400],
            backgroundColor: "rgba(244,200,77,255)",
            barThickness: 10, // <<<<<<<<<<<<   bar / column size
          },
          {
            label: "Negligible (34)",
            data: [34],
            backgroundColor: "rgba(170,170,170,255)",
            barThickness: 10, // <<<<<<<<<<<<   bar / column size
          },
        ],
      },
      {
        title: "Image Critical Issues",
        removed: false,
        labels: [""],
        datasets: [
          {
            label: "Critical (2)",
            data: [2],
            backgroundColor: ["rgba(110,18,11,255)"],
            barThickness: 10, // <<<<<<<<<<<<   bar / column size
          },
          {
            label: "High (2)",
            data: [2],
            backgroundColor: ["rgba(202,43,29,255)"],
            barThickness: 10, // <<<<<<<<<<<<   bar / column size
          },
          {
            label: "Medium (2)",
            data: [2],
            backgroundColor: "rgba(238,150,62,255)",
            barThickness: 10, // <<<<<<<<<<<<   bar / column size
          },
          {
            label: "Low (1)",
            data: [1],
            backgroundColor: "rgba(244,200,77,255)",
            barThickness: 10, // <<<<<<<<<<<<   bar / column size
          },
          {
            label: "Negligible (1)",
            data: [1],
            backgroundColor: "rgba(170,170,170,255)",
            barThickness: 10, // <<<<<<<<<<<<   bar / column size
          },
        ],
      },
    ],
  },
];

export const dashReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_WIDGET":
      const newState = state.map((dashboard) => ({
        ...dashboard,
        dataCollection: dashboard.dataCollection.map((item) =>
          item.title === action.payload
            ? { ...item, removed: !item.removed }
            : item
        ),
      }));
      return newState;
    default:
      return state;
  }
};
