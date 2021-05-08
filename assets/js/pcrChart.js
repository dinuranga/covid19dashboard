const pcr_api_url = "https://hpb.health.gov.lk/en/pcr-testing-data";

var date = [];
var tests = [];

async function GET_PCR_DATA() {

    const response = await fetch(pcr_api_url);
    const data = await response.json();

    min = data["data"]["pcr_testing_data"].length-14;
    max = data["data"]["pcr_testing_data"].length;
    for (var i = min; i < max; i++) {
        date.push(data["data"]["pcr_testing_data"][i].date);
        tests.push(data["data"]["pcr_testing_data"][i].count);
    }

    var options = {
        chart: {
          type: 'bar',
          height:300,
          // width:500,
          // width:'50%'
        },
        series: [{
          name: 'PCR Tests',
          data: tests,
        //   data: [30,40,35,50,49,60,70,91,125],
        }],
        noData: {
            text: 'Loading...'
          },
        xaxis: {
          categories: date
        //   categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
        },
        grid: {
            padding: {
              left: 30,
              right: 30
            }
        },
        
        // colors: ['#2E93fA']
        // colors==='#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'
    
    
        title: {
            text: "Daily PCR Tests (Sri Lanka)",
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
        },
        plotOptions: {
          bar: {
            borderRadius: 3,
            dataLabels: {
              position: 'center',
              orientation: 'vertical',// top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
        },
      }
      
      var pcrChart = new ApexCharts(document.querySelector("#pcrChart"), options);
      
      pcrChart.render();
      

}

GET_PCR_DATA();