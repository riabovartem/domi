function customizeTooltipHTML(tooltipData) {
  // Customize the HTML of the tooltip based on the tooltipData
  let html = `<div class="custom-tooltip">
                <h3>${tooltipData.title}</h3>
                <p>${tooltipData.content}</p>
              </div>`;
  
  return html;
}
