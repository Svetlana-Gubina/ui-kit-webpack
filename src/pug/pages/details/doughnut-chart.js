import Chart from 'chart.js';

const chartDiv = document.querySelector('.details__info-chart');
const canvas = document.createElement(`canvas`);
canvas. width = 120;
canvas. height = 120;
chartDiv.appendChild(canvas);
const ctx = canvas.getContext(`2d`);

const gradientOrange = ctx.createLinearGradient(0, 0, 0, 120);
gradientOrange.addColorStop(0, '#FFE39C');
gradientOrange.addColorStop(1, '#FFBA9C');

const gradientPurple = ctx.createLinearGradient(0, 0, 0, 120);
gradientPurple.addColorStop(0, '#BC9CFF');
gradientPurple.addColorStop(1, '#8BA4F9');

const gradientGreen = ctx.createLinearGradient(0, 0, 0, 120);
gradientGreen.addColorStop(0, '#6FCF97');
gradientGreen.addColorStop(1, '#66D2EA');

const doughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Разочарован', 'Удовлетворительно', 'Хорошо', 'Великолепно'],
    datasets: [{
      data: [0, 65, 65, 130],
      backgroundColor: [
        '#919191',
        gradientPurple,
        '#6FCF97',
        gradientOrange,
      ],
    }],
  },
  options: {
    cutoutPercentage: 90,
    legend: {
      display: false
    },
    elements: {
      center: {
        text: '260 голосов',
        color: ' #BC9CFF', // Default is #000000
        fontStyle: 'Montserrat', // Default is Arial
        sidePadding: 20, // Default is 20 (as a percentage)
        minFontSize: 18, // Default is 20 (in px), set to false and text will not wrap.
        lineHeight: 22 // Default is 25 (in px), used for when text wraps
      },
    }
  }
});

Chart.pluginService.register({
  beforeDraw: function(chart) {
    if (chart.config.options.elements.center) {
    // Get ctx from string
    var ctx = chart.chart.ctx;

    // Get options from the center object in options
    var centerConfig = chart.config.options.elements.center;
    var fontStyle = centerConfig.fontStyle || 'Arial';
    var txt = centerConfig.text;
    var color = centerConfig.color || '#000';
    var maxFontSize = centerConfig.maxFontSize || 75;
    var sidePadding = centerConfig.sidePadding || 20;
    var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
    // Start with a base font of 30px
    ctx.font = "30px " + fontStyle;

    // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
    var stringWidth = ctx.measureText(txt).width;
    var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

    // Find out how much the font can grow in width.
    var widthRatio = elementWidth / stringWidth;
    var newFontSize = Math.floor(30 * widthRatio);
    var elementHeight = (chart.innerRadius * 2);

    // Pick a new font size so it will not be larger than the height of label.
    var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
    var minFontSize = centerConfig.minFontSize;
    var lineHeight = centerConfig.lineHeight || 25;
    var wrapText = false;

    if (minFontSize === undefined) {
      minFontSize = 20;
    }

    if (minFontSize && fontSizeToUse < minFontSize) {
      fontSizeToUse = minFontSize;
      wrapText = true;
    }

    // Set font settings to draw it correctly.
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
    var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
    ctx.font = "bold 20px Montserrat Bold"; // fontSizeToUse + "px " + fontStyle;
    ctx.fillStyle = color;

    if (!wrapText) {
      ctx.fillText(txt, centerX, centerY);
      return;
    }

    var words = txt.split(' ');
    var line = '';
    var lines = [];

    // Break words up into multiple lines if necessary
    for (var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = ctx.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > elementWidth && n > 0) {
        lines.push(line);
        line = words[n] + ' ';
      } else {
        line = testLine;
      }
    }
    // Move the center up depending on line height and number of lines
    centerY -= (lines.length / 2) * lineHeight;
    for (var n = 0; n < lines.length; n++) {
      ctx.fillText(lines[n], centerX, centerY);
      centerY += lineHeight;
    }
    //Draw text in center
    ctx.fillText(line, centerX, centerY);
  }
 }
});
