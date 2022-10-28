import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public article:Article[]=[];
  public saludo:any[]= [
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "David Faber, Jonathan Vanian",
        "title": "Elon Musk now in charge of Twitter, CEO and CFO have left, sources say - CNBC",
        "description": "Tesla CEO Elon Musk has taken control of Twitter, which he agreed to purchase for $44 billion.",
        "url": "https://www.cnbc.com/2022/10/27/elon-musk-now-in-charge-of-twitter-ceo-and-cfo-have-left-sources-say.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107111240-1661865566264-musk5.jpg?v=1666916581&w=1920&h=1080",
        "publishedAt": "2022-10-28T00:23:00Z",
        "content": "Tesla CEO Elon Musk is now in charge of Twitter, CNBC has learned.\r\nTwitter CEO Parag Agrawal and finance chief Ned Segal have left the company's San Francisco headquarters and will not be returning,… [+2259 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Krystal Hur",
        "title": "Cramer's lightning round: Stay with Vertex Pharmaceuticals - CNBC",
        "description": "\"Mad Money\" host Jim Cramer rings the lightning round bell, which means he's giving his answers to callers' stock questions at rapid speed.",
        "url": "https://www.cnbc.com/2022/10/27/cramers-lightning-round-stay-with-vertex-pharmaceuticals.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/102079128-1539342565979105501689.jpg?v=1666912181&w=1920&h=1080",
        "publishedAt": "2022-10-27T23:09:41Z",
        "content": "Warner Bros Discovery Inc: \"I need to see them make some money. ... I'm not recommending stocks that are losing money.\"\r\nGetty Images Holdings Inc: \"I think down here at $4, I'm not a SPAC guy, okay,… [+268 chars]"
    },
    {
        "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
        },
        "author": "Sebastian Herrera",
        "title": "Amazon Shares Skid After It Gives Weak Outlook Amid Recession Fears - The Wall Street Journal",
        "description": "E-commerce giant says economic concerns and inflation could weigh on future sales",
        "url": "https://www.wsj.com/articles/amazon-amzn-q3-earnings-report-2022-11666832188",
        "urlToImage": "https://images.wsj.net/im-652791/social",
        "publishedAt": "2022-10-27T22:25:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Ian King",
        "title": "Intel Pledges More Cost Cuts as Sales Forecast Misses Estimates - Yahoo Finance",
        "description": "(Bloomberg) -- Intel Corp. shares climbed in late trading after the chipmaker pledged to slash costs, an effort to weather a persistent slump in computer...",
        "url": "https://finance.yahoo.com/news/intel-pledges-more-cost-cuts-202308220.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/9AaaMWS5mXHZVIY.Qlwdig--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/611e79b36a3da32f07cf9b6d24899740",
        "publishedAt": "2022-10-27T22:19:49Z",
        "content": "(Bloomberg) -- Intel Corp. shares climbed in late trading after the chipmaker pledged to slash costs, an effort to weather a persistent slump in computer demand that is dragging down sales and profit… [+4824 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Fox Business"
        },
        "author": "Adam Sabes",
        "title": "Biden says the price of gas was 'over five dollars' when he took office, data shows it was $2.39 - Fox Business",
        "description": "President Biden said that the price of gasoline was “over five dollars” when he first took office in January 2021, but the actual price was less than half of what he claimed.",
        "url": "https://www.foxbusiness.com/politics/biden-says-the-price-gas-over-five-dollars-when-office-data-shows",
        "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/10/0/0/Untitled-design-244.png?ve=1&tl=1",
        "publishedAt": "2022-10-27T22:04:28Z",
        "content": "President Biden said during a Thursday speech that the price of gasoline was \"over five dollars\" when he took office, despite the actual average price of regular gasoline being $2.39.\r\nBiden made the… [+2588 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Barron's"
        },
        "author": "Eric J. Savitz",
        "title": "Apple Earnings Are Decent in Otherwise Terrible Week for Tech - Barron's",
        "description": "Apple's latest quarterly results were slightly better than expected, but sales in its key iPhone segment were a bit disappointing.",
        "url": "https://www.barrons.com/articles/apple-earnings-stock-price-iphone-sales-51666741543",
        "urlToImage": "https://images.barrons.com/im-651619/social",
        "publishedAt": "2022-10-27T21:45:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": null,
        "title": "Stock Market Mixed After Meta Meltdown; Recent Breakouts Trigger Sell Signals | Investor's Business Daily - Investor's Business Daily",
        "description": null,
        "url": "https://news.google.com/__i/rss/rd/articles/CBMihgFodHRwczovL3d3dy5pbnZlc3RvcnMuY29tL21hcmtldC10cmVuZC90aGUtYmlnLXBpY3R1cmUvc3RvY2stbWFya2V0LW1peGVkLWFmdGVyLW1ldGEtbWVsdGRvd24tMy1yZWNlbnQtYnJlYWtvdXRzLXRyaWdnZXItc2VsbC1zaWduYWxzL9IBAA?oc=5",
        "urlToImage": null,
        "publishedAt": "2022-10-27T21:44:00Z",
        "content": null
    },
    {
        "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
        },
        "author": "Veronica Dagher",
        "title": "Treasury Says Orders for I Bonds With 9.62% Rate Might Not Be Completed by Deadline - The Wall Street Journal",
        "description": "Investors rushing to purchase I Bonds with a six-month return of 9.62% are taxing the government website",
        "url": "https://www.wsj.com/articles/as-investors-scramble-to-buy-i-bonds-treasurydirect-site-has-outages-11666817951",
        "urlToImage": "https://images.wsj.net/im-652613/social",
        "publishedAt": "2022-10-27T20:41:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Leslie Josephs",
        "title": "American Airlines offers pilots higher raises in new contract proposal - CNBC",
        "description": "The biggest U.S. carriers have been in negotiations for new contracts for months.",
        "url": "https://www.cnbc.com/2022/10/27/american-airlines-offers-pilots-higher-raises-in-new-contract-proposal.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/106946898-16324868402021-09-08t111603z_82644664_rc2nlp94h9d3_rtrmadp_0_american-airline-unions-strike.jpeg?v=1666900891&w=1920&h=1080",
        "publishedAt": "2022-10-27T20:01:31Z",
        "content": "American Airlines' pilots union is weighing an offer for higher raises in a new two-year contract proposal, the latest attempt to seal up a labor deal at the country's largest airline.\r\nIf approved b… [+1220 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "MarketWatch"
        },
        "author": "Tomi Kilgore",
        "title": "Big 4 tech stocks erasing a total of more than $190 billion in market cap - MarketWatch",
        "description": "A big reason why technology-heavy Nasdaq Composite undefined is dropping 1.5% in afternoon trading Thursday while the Dow Jones Industrial Averageundefined...",
        "url": "https://www.marketwatch.com/story/big-4-tech-stocks-erasing-a-total-of-more-than-190-billion-in-market-cap-2022-10-27",
        "urlToImage": "https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg",
        "publishedAt": "2022-10-27T19:12:00Z",
        "content": "A big reason why technology-heavy Nasdaq Composite \r\n COMP,\r\n -1.63%\r\nis dropping 1.5% in afternoon trading Thursday while the Dow Jones Industrial AverageDJIA,\r\n +0.61%\r\nis rallying 292 points, or 0… [+886 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Meta and Alphabet are too big to avoid a global advertising slowdown, says Ritholtz's Brown - CNBC Television",
        "description": "CNBC's Halftime Report Investment Committee discusses Josh Brown's purchase of Meta stock, what's fixable for the company and Brad Gerstner's comments on Met...",
        "url": "https://www.youtube.com/watch?v=xphKCh34q9Q",
        "urlToImage": "https://i.ytimg.com/vi/xphKCh34q9Q/maxresdefault.jpg",
        "publishedAt": "2022-10-27T18:06:29Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Michelle Fox",
        "title": "Josh Brown buys Facebook parent Meta shares, betting on a turnaround - CNBC",
        "description": "Ritholtz Wealth Management CEO Josh Brown is taking advantage of Meta's stock plunge.",
        "url": "https://www.cnbc.com/2022/10/27/josh-brown-buys-meta-shares-betting-zuckerberg-doesnt-want-to-burn-his-own-house-down.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107083784-1656683081294-gettyimages-1241064689-RAFAPRESS_01062022-00979.jpeg?v=1666893069&w=1920&h=1080",
        "publishedAt": "2022-10-27T17:51:09Z",
        "content": null
    },
    {
        "source": {
            "id": "business-insider",
            "name": "Business Insider"
        },
        "author": "Samantha Delouya, Kali Hays",
        "title": "Young tech workers are in for a rude awakening as companies make cuts - Business Insider",
        "description": "The days of sky-high pay, moonshot projects and endless perks at big tech companies is evaporating. \"Winter is coming,\" said one analyst.",
        "url": "https://www.businessinsider.com/silicon-valley-workers-rude-awakening-meta-google-budget-cuts-2022-10",
        "urlToImage": "https://i.insider.com/6359638cfc29ff001a5f8acd?width=1200&format=jpeg",
        "publishedAt": "2022-10-27T17:49:24Z",
        "content": "The days of Big Tech excess are coming to an end.\r\nAmid a streak of disappointing financial results, inflation, and international turmoil leading to battered tech stocks, companies like Meta, Google,… [+3281 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Danielle Wiener-Bronner",
        "title": "As prices soar, consumers turn to McDonald's - CNN",
        "description": "Inflation is relentlessly high and food prices in particular are soaring. In this environment, customers are turning to McDonald's — even as the burger chain raises its own prices.",
        "url": "https://www.cnn.com/2022/10/27/business/mcdonalds-prices/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221027111841-mcdonalds-us-restaurant-1015.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2022-10-27T17:45:00Z",
        "content": "Inflation is relentlessly high and food prices in particular are soaring. In this environment, customers are turning to McDonalds even as the burger chain raises its own prices. \r\nIn the third quarte… [+3734 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Annie Palmer",
        "title": "Amazon will open 172,000-square-foot Project Kuiper internet satellite factory - CNBC",
        "description": "Project Kuiper is Amazon's plan to launch 3,000-plus internet satellites into low Earth orbit to extend high-speed broadband internet access around the globe.",
        "url": "https://www.cnbc.com/2022/10/27/amazon-to-open-kuiper-internet-satellite-factory.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/106870221-1618839940004-AmazonInSpace.jpg?v=1666892498&w=1920&h=1080",
        "publishedAt": "2022-10-27T17:41:38Z",
        "content": "Amazon said Thursday it will open a new plant in a Seattle suburb to build satellites for Project Kuiper.\r\nUnveiled in 2019, Project Kuiper, is Amazon's plan to build a network of 3,236 satellites in… [+2211 chars]"
    },
    {
        "source": {
            "id": "usa-today",
            "name": "USA Today"
        },
        "author": "Paul Davidson, USA TODAY",
        "title": "Latest GDP report shows US economy grew 2.6%, but recession risks loom - USA TODAY",
        "description": "An economic report showed growth of  2.6% in Q3, a rebound from the first half of 2022. But inflation, Fed rate hikes will likely spur recession.",
        "url": "https://www.usatoday.com/story/money/2022/10/27/gdp-report-us-economy-grew-recession-fears-loom/10610432002/",
        "urlToImage": "https://www.gannett-cdn.com/-mm-/9e1f6e2ee20f44aa1f3be4f71e9f3e52b6ae2c7e/c=0-110-2121-1303/local/-/media/2022/07/19/USATODAY/usatsports/MotleyFool-TMOT-5d01a65c-recession-getty.jpeg.jpg?auto=webp&format=pjpg&width=1200",
        "publishedAt": "2022-10-27T17:26:15Z",
        "content": "Call it the calm before the storm.\r\nAfter shrinking the first half of the year, the U.S. economy rebounded from July through September despite inflation that has hovered near a 40-year high and sharp… [+8325 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Terrapower.com"
        },
        "author": "TerraPower Media",
        "title": "TerraPower and PacifiCorp Announce Efforts to Expand Natrium Technology Deployment - TerraPower",
        "description": "TerraPower and PacifiCorp announced a study to evaluate the feasibility of deploying up to five additional Natrium reactor and integrated energy storage systems.",
        "url": "https://www.terrapower.com/terrapower-and-pacificorp-announce-efforts-to-expand-natrium-technology-deployment/",
        "urlToImage": "https://www.terrapower.com/wp-content/uploads/2022/08/Natrium-Rendering-June-2022-2-1024x576.png",
        "publishedAt": "2022-10-27T17:19:31Z",
        "content": "The companies are exploring the potential for deployment of 5 additional NatriumTM reactors\r\nBELLEVUE, Washington October 27, 2022 TerraPower, a nuclear innovation company, and PacifiCorp, a regulate… [+4345 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Deadline"
        },
        "author": "Dade Hayes",
        "title": "NBCUniversal Is Becoming “Fairly Indifferent” As To Whether Programming Goes On Streaming Or Linear TV, CEO Jeff Shell Says; Theme Park Success “Defies Logic A Little Bit” - Deadline",
        "description": "At 15 million paid subscribers, Peacock isn’t on the same level as other streaming services, but NBCUniversal CEO Jeff Shell says that’s no accident. “Our long-term aspiration for Peacock is to balance out our overall media business,” Shell said during NBCU p…",
        "url": "https://deadline.com/2022/10/nbcuniversal-indifferent-programming-streaming-peacock-linear-tv-ceo-jeff-shell-theme-parks-1235156322/",
        "urlToImage": "https://deadline.com/wp-content/uploads/2022/10/NBCUniversal-bldg.jpg?w=1024",
        "publishedAt": "2022-10-27T17:14:00Z",
        "content": "At 15 million paid subscribers, Peacock isn’t on the same level as other streaming services, but NBCUniversal CEO Jeff Shell says that’s no accident. \r\n“Our long-term aspiration for Peacock is to bal… [+3490 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Barron's"
        },
        "author": "Eric J. Savitz",
        "title": "Shopify Stock Spikes as Earnings Top Estimates - Barron's",
        "description": "The stock is still down 75% for the year. The e-commerce software company was a pandemic-era star but growth slowed as the economy reopened.",
        "url": "https://www.barrons.com/articles/shopify-stock-earnings-51666884393",
        "urlToImage": "https://images.barrons.com/im-653024/social",
        "publishedAt": "2022-10-27T16:50:00Z",
        "content": "Shopify\r\nstock is trading sharply higher after the e-commerce software company posted better-than-expected September quarter results.\r\nFor the quarter, Shopify (ticker: SHOP) reported revenue of $1.3… [+337 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Guardian"
        },
        "author": "Kalyeena Makortoff",
        "title": "Credit Suisse to cut 9,000 jobs and seek billions in new investment - The Guardian",
        "description": "Shake-up aims to draw line under series of scandals and new £3.5bn loss at Swiss bank",
        "url": "https://www.theguardian.com/business/2022/oct/27/credit-suisse-to-cut-9000-jobs-and-seek-billions-in-new-investment",
        "urlToImage": "https://i.guim.co.uk/img/media/6c645218a4a25ee2bdf3c04a318de0264f4b06d9/0_47_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=771896faa3efbf43e57f71f7f9a343f1",
        "publishedAt": "2022-10-27T15:47:00Z",
        "content": "Credit Suisse has disclosed sweeping plans to cut 9,000 jobs and raise billions of pounds from investors in a Saudi-led funding round, as part of a company-wide overhaul meant to draw a line under a … [+4392 chars]"
    }
]


  constructor(private newService:NewsService) {}

  ngOnInit(){
    this.newService.getTopHeadLines()
    .subscribe(articles => {
      console.log(articles)
      this.article.push(...articles)
    });
  }

}
