import { AfterViewInit, Component } from '@angular/core';


declare var TradingView: any;


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {


  ngAfterViewInit() {
    // Initialize the TradingView widget here
    new TradingView.widget({
      // Configuration options go here
      container_id: 'tradingview-widget-container',
      symbol: 'AAPL',
      interval: 'D', // Daily interval, adjust as needed
      timezone: 'Etc/UTC', // Set timezone accordingly
      theme: 'light', // or 'dark'
      style: '1', // or '2' for bars/candles
      enable_publishing: false, // Allow publishing chart data
      withdateranges: true, // Show date range picker
      hide_side_toolbar: false, // Show side toolbar
      allow_symbol_change: true, // Allow changing symbols
      save_image: false, // Allow saving chart images
      gridColor: "rgba(251, 247, 240, 1)",
    });
  }

}
