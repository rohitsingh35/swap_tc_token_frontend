import React from "react";
import { Button, Col, Container, Form, Select, Row } from "react-bootstrap";
import ApexCharts from "react-apexcharts";
import Smalllogo from "../assets/img/smalllogo.png";
import { MdRepeat } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Marketicon from "../assets/img/safemark.png";
import Smartchainicon from "../assets/img/smartchainicon.png";
import Ricon from "../assets/img/ricon.png";
import Reflexicon from "../assets/img/Reflex.png";
import Cicon from "../assets/img/cicon.png";
const Matricsview = () => {
  const series = [
    {
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24],
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47],
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31],
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02],
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02],
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01],
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02],
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91],
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612],
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612],
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95],
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67],
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4],
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9],
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45],
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35],
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53],
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19],
        },
      ],
    },
  ];
  const options = {
    chart: {
      stackType: "normal",
      type: "candlestick",
      height: 200,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: false,
      },
    },
    stroke: {
      show: true,
      width: 1,
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    title: {
      text: undefined,
    },

    xaxis: {
      type: "datetime",
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      show: false,
      tooltip: {
        enabled: false,
      },
    },
  };
  const swapseries = [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ];
  const swapoption = {
    chart: {
      stackType: "normal",
      type: "line",
      height: 200,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: undefined,
    },
    grid: {
      row: {
        colors: ["transparent", "#000000"],
        opacity: 0.5,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      tooltip: {
        enabled: false,
      },
    },
  };
  console.log("options", options);
  console.log("series", series);

  return (
    <div className="matricsview-layout">
      <Container>
        <Row>
          <Col xs={7}>
            <div className="metadata-viewer">
              <h2 className="heading">
                <b>Swap TC</b>Live Metadata<b>Viewer</b>
              </h2>

              <div className="heading-view">
                <ul className="d-flex">
                  <li className="safemark">
                    <img src={Marketicon} alt="icon" />
                    <span>Safemarketcap</span>
                  </li>
                  <li>
                    <img src={Reflexicon} alt="icon" />
                    <span>Reflex Finance</span>
                  </li>
                  <li>
                    <img src={Smartchainicon} alt="icon" />
                    <span>Binance Smartchain</span>
                  </li>
                </ul>
              </div>
              <div className="mt-chart-view">
                {/*  finance chart box start */}
                <div className="chart-box">
                  <div className="swap-chart-view">
                    <div className="chart-view">
                      <div className="swap-chart">
                        <div id="chart">
                          <ApexCharts
                            options={options}
                            series={series}
                            type="candlestick"
                            height={200}
                          />
                        </div>
                      </div>
                      <h2>
                        Historical <br />
                        Price Chart
                      </h2>
                    </div>
                  </div>
                  <div className="swap-chart-view">
                    <div className="chart-view">
                      <div className="swap-chart">
                        <div id="chart">
                          <ApexCharts
                            options={options}
                            series={series}
                            type="candlestick"
                            height={200}
                          />
                        </div>
                      </div>
                      <h2>
                        Circulating
                        <br /> Supply
                      </h2>
                    </div>
                  </div>
                  <div className="swap-chart-view">
                    <div className="chart-view">
                      <div className="swap-chart">
                        <div id="chart">
                          <ApexCharts
                            options={options}
                            series={series}
                            type="candlestick"
                            height={200}
                          />
                        </div>
                      </div>
                      <h2>
                        Total <br />
                        Burned
                      </h2>
                    </div>
                  </div>
                  <div className="swap-chart-view">
                    <div className="chart-view">
                      <div className="swap-chart">
                        <div id="chart">
                          <ApexCharts
                            options={options}
                            series={series}
                            type="candlestick"
                            height={200}
                          />
                        </div>
                      </div>
                      <h2>
                        Global <br />
                        Reflections
                      </h2>
                    </div>
                  </div>
                </div>
                {/*  finance chart box end */}

                {/*  finance chart value section start */}
                <div className="fcv-box-wrapper">
                  <div className="fcv-box">
                    <div className="fcv-swap-field">
                      <div className="fcv-swap-box">
                        <div className="fcv-text-field">
                          <img src={Smalllogo} alt="icon" />
                          <h2>Swap TC</h2>
                          <p>Harness the power of real-time cryto metrics</p>
                          <Button>Learn More</Button>
                        </div>
                      </div>
                    </div>

                    <div className="fcv-chart-value-field">
                      <ul>
                        <li>
                          <span className="name">Token Price</span>
                          <span className="cht-value">$0.22222222</span>
                        </li>
                        <li>
                          <span className="name">market cap</span>
                          <span className="cht-value">$634k</span>
                        </li>
                        <li>
                          <span className="name">starting supply</span>
                          <span className="cht-value">1 Trillion</span>
                        </li>
                        <li>
                          <span className="name">Remaining Supply</span>
                          <span className="cht-value">
                            482,142,519,710,5712548
                          </span>
                        </li>
                        <li>
                          <span className="name">Circulating Supply</span>
                          <span className="cht-value">
                            482,142,519,710,5712548
                          </span>
                        </li>
                        <li>
                          <span className="name">USD Volume</span>
                          <span className="cht-value">$21.6k</span>
                        </li>
                        <li>
                          <span className="name">Volume</span>
                          <span className="cht-value">301,245,185.74</span>
                        </li>
                        <li>
                          <span className="name">Liquidity</span>
                          <span className="cht-value">$105,817.16</span>
                        </li>
                        <li>
                          <span className="name">Holder Count</span>
                          <span className="cht-value">400</span>
                        </li>
                        <li>
                          <span className="name">Decimals</span>
                          <span className="cht-value">9</span>
                        </li>
                        <li>
                          <span className="name">Tax: Buy and sell</span>
                          <span className="cht-value">(5%)(30% to 10%)</span>
                        </li>
                      </ul>
                      <Button className="repeat-btn">
                        <MdRepeat />
                      </Button>
                    </div>
                  </div>
                </div>

                {/*  finance chart value section end */}
              </div>
            </div>
          </Col>
          <Col xs={5}>
            <div className="swap-data-view">
              {/*  Swap token column section start */}
              <div className="swap-token-box">
                <div className="heading">
                  <h3>Swap TC Token Contract</h3>
                  <p>oxjksjdnkkksjdsjdik281sdsdsjkjks</p>
                </div>
                <Button className="cicon">
                  <img src={Cicon} alt="icon" />
                </Button>
                <div className="copyc">
                  <BsFillInfoCircleFill />
                  Copy Contract address to clipboard
                </div>
                <div className="tck-icon">
                  <Button>
                    <img src={Ricon} alt="icon" />
                  </Button>
                  <Button>
                    <img src={Smartchainicon} alt="icon" />
                  </Button>
                </div>
              </div>
              {/*  Swap token column  end */}
              <div className="swap-tc-value">
                <div className="swap-tc-heading">
                  <div className="swtc-profile">
                    <img src={Smalllogo} alt="logo" />
                    <div className="swtc-title">
                      <h2>Swap TC</h2>
                      <h3>SWAPTC/USD</h3>
                    </div>
                  </div>
                  <div className="swtc-value">
                    <h4>24h</h4>
                    <h3>$0.0000014821945</h3>
                    <h2>-1.85%</h2>
                  </div>
                </div>
                <div className="swap-tc-chart">
                  <ApexCharts
                    options={swapoption}
                    series={swapseries}
                    type="line"
                    height={200}
                  />
                </div>

                <div className="swap-tc-chart-value">
                  <ul>
                    <li>
                      <span className="name">Week</span>
                      <span className="weekvalue">16.53%</span>
                    </li>
                    <li>
                      <span className="name">Month</span>
                      <span className="weekvalue">150.3%</span>
                    </li>
                    <li>
                      <span className="name">year</span>
                      <span className="weekvalue">150.3%</span>
                    </li>
                    <li>
                      <span className="name">Rank</span>
                      <span className="value">#5522</span>
                    </li>
                    <li>
                      <span className="name">Transp. Vol</span>
                      <span className="value">$7.99k</span>
                    </li>
                    <li>
                      <span className="name">Volume</span>
                      <span className="value">$7.99k</span>
                    </li>
                    <li>
                      <span className="name">ATH</span>
                      <span className="value">86%</span>
                    </li>
                    <li>
                      <span className="name">Mkt Cap</span>
                      <span className="value">-</span>
                    </li>
                  </ul>
                </div>

                <div className="swap-ftitle">
                  <p>Swap TC Price by Nomics(A Crypto Market Cap Provider)</p>
                </div>
              </div>

              <div className="matrics-sidebar-value">
                <div className="mtr-swap-value">
                  <ul>
                    <li>
                      <span className="name">Token/symbol</span>
                      <span className="value">Swap TC/SSWAPTC</span>
                    </li>
                    <li>
                      <span className="name">Network</span>
                      <span className="value">Binance Smart Chain (BSC)</span>
                    </li>
                    <li>
                      <span className="name">Exchange</span>
                      <span className="value">pancakeswap V2</span>
                    </li>
                    <li>
                      <span className="name">Total Supply</span>
                      <span className="value">1 Trillion</span>
                    </li>
                    <li>
                      <span className="name">Reflections</span>
                      <span className="value">BNB BEP-20</span>
                    </li>
                    <li>
                      <span className="name">Current Stage</span>
                      <span className="value">Trading as of 20 Aug 22</span>
                    </li>
                  </ul>
                </div>
                {/*  Swap tc tax info column start */}
                <div className="matrics-tax-value">
                  <h3>Swap TC Tax Info</h3>
                  <div className="mtc-tax-field">
                    <div className="tax-field">
                      <h3>Week</h3>
                      <div className="tax-value-field">
                        <Form.Select aria-label="Default select example">
                          <option value="19%">19%</option>
                          <option value="25%">25%</option>
                          <option value="30%">30%</option>
                        </Form.Select>
                      </div>
                    </div>
                    <div className="tax-field">
                      <h3>BNB Redistribution</h3>
                      <div className="tax-value-field">
                        <Form.Control type="text" placeholder="5%" />
                      </div>
                    </div>
                    <div className="tax-field">
                      <h3>Liquidity Pool</h3>
                      <div className="tax-value-field">
                        <Form.Control type="text" placeholder="1%" />
                      </div>
                    </div>
                    <div className="tax-field">
                      <h3>Auto Burn</h3>
                      <div className="tax-value-field">
                        <Form.Control type="text" placeholder="4%" />
                      </div>
                    </div>
                    <div className="tax-field">
                      <h3>Total</h3>
                      <div className="tax-value-field">
                        <Form.Control type="text" placeholder="10%" />
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Swap tc tax info column end */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Matricsview;
