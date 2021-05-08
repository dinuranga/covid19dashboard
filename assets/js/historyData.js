const history_api_url = "https://hpb.health.gov.lk/api/get-statistical-history-data";

var previousDates = [];
var deaths = [];
var cases_count = [];
var recoveries_count = [];

async function GET_HISTORY_DATA() {

  const response = await fetch(history_api_url);
  const data = await response.json();

  min = data["data"].length-14;
  max = data["data"].length;

  for (var i = 13; i >= 0; i--) {
    previousDates.push(data["data"][i].date);
    deaths.push(data["data"][i].deaths_count);
    cases_count.push(data["data"][i].cases_count);
    recoveries_count.push(data["data"][i].recoveries_count);
  }

  var deathsChartOptions = {
    chart: {
      type: 'area',
      height:300,
    },
    series: [{
      name: 'Deaths',
      data: deaths,
    }],
    noData: {
      text: 'Loading...'
    },
    xaxis: {
      categories: previousDates
    },
    grid: {
      padding: {
        left: 30,
        right: 30
      }
    },
    colors: ['#ed5564'],
    title: {
      text: "Deaths (Sri Lanka)",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '18px',
        fontWeight:  'bold',
        fontFamily:  undefined,
        color:  '#263238'
      },
    },
    subtitle: {
      text: "Last 14days",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 25,
      floating: false,
      style: {
        fontSize:  '12px',
        fontWeight:  'normal',
        fontFamily:  undefined,
        color:  '#9699a2'
      },
    }
  }

  var casesChartOptions = {
    chart: {
      type: 'area',
      height:300,
    },
    series: [{
        name: 'New Cases',
        data: cases_count
    }],
    noData: {
      text: 'Loading...'
    },
    xaxis: {
      categories: previousDates
    },
    grid: {
      padding: {
        left: 30,
        right: 30
      }
    },
    colors: ['#f6bb43'],
    title: {
      text: "New Cases (Sri Lanka)",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '18px',
        fontWeight:  'bold',
        fontFamily:  undefined,
        color:  '#263238'
      },
    },
    subtitle: {
      text: "Last 14days",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 25,
      floating: false,
      style: {
        fontSize:  '12px',
        fontWeight:  'normal',
        fontFamily:  undefined,
        color:  '#9699a2'
      },
    }
  }

  var recoveriesChartOptions = {
    chart: {
      type: 'area',
      height:300,
    },
    series: [
      {
        name: 'Recovered',
        data: recoveries_count,
      }],
    noData: {
      text: 'Loading...'
    },
    xaxis: {
      categories: previousDates
    },
    grid: {
      padding: {
        left: 30,
        right: 30
      }
    },
    colors: ['#00E396'],
    title: {
      text: "Recovered (Sri Lanka)",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '18px',
        fontWeight:  'bold',
        fontFamily:  undefined,
        color:  '#444'
      },
    },
    subtitle: {
      text: "Last 14days",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 25,
      floating: false,
      style: {
        fontSize:  '12px',
        fontWeight:  'normal',
        fontFamily:  undefined,
        color:  '#9699a2'
      },
    }
  }

    
    
  var deathsChart = new ApexCharts(document.querySelector("#deathsChart"), deathsChartOptions); 
  deathsChart.render();
  var casesChart = new ApexCharts(document.querySelector("#casesChart"), casesChartOptions); 
  casesChart.render(); 
  var recoveriesChart = new ApexCharts(document.querySelector("#recoveriesChart"), recoveriesChartOptions); 
  recoveriesChart.render(); 
}

GET_HISTORY_DATA();