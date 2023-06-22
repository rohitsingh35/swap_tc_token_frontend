import React, { useEffect, useState, useCallback } from "react";
import MaterialReactTable from "material-react-table";
import { Button, InputGroup, Form } from "react-bootstrap";
import { MdSearch } from "react-icons/md";
import {
  REACT_APP_BACKEND_URL,
  REACT_APP_TOKEN_ICON,
} from "../constant/environment";
import Chart from "./Chart";
import io from "socket.io-client"
import i18n from "i18next";
import Loader from "../Component/Loader";
import { useTranslation, initReactI18next } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Web3Modal from "web3modal";
import En from "../Languages/en.json";
import Fr from "../Languages/fr.json";
import Sp from "../Languages/span.json";
import providerOptions from "../constant/web3ProviderOptions"
import { toast } from "react-toastify"
import { providers, utils } from 'ethers'
import { useDispatch, useSelector } from "react-redux";
import { CONNECTED_WALLET_DETAILS } from "../store/types/wallet";

const socket = io(REACT_APP_BACKEND_URL)

const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions
});

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: En,
    },
    fr: {
      translation: Fr,
    },
    sp: {
      translation: Sp,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

// const element = document.getElementById("scroll", function (event) {
//   if (scrollLeft !== element.scrollLeft) {

//     scrollLeft = element.scrollLeft();
//     console.log("classchanges");
//   }

//   if (scrollTop !== element.scrollTop) {

//     scrollTop = element.scrollRight();
//     console.log("classchanges");
//   }
// });

const FinanceTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const { t } = useTranslation();
  const [options, setOptions] = useState("");
  const [change, setChange] = useState(false);
  const walletState = useSelector((state) => state.Wallet.accountInfo)

  const changeLang = (e) => {
    let l = e.target.value;
    setOptions(l);
    const var1 = i18n.changeLanguage(l);
    const var2 = localStorage.setItem("lang", l);
    return { var1, var2 };
  };

  useEffect(() => {
    socket.on("InitialTableListing", (data) => setTableData(data))
    socket.on("TableListing", (data) => setTableData(data))
  }, []);

  const fetch = useCallback((containerRefElement) => {
    if (containerRefElement) {
      const { scrollLeft } = containerRefElement;
      if (scrollLeft > 0) {
        setChange(true);
      } else if (scrollLeft == 0) {
        setChange(false);
      }
    }
  }, []);

  useEffect(() => {
    let currentLang = localStorage.getItem("lang");
    i18n.changeLanguage(currentLang);
    setOptions(currentLang);
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScroll(window.scrollX > 50);
  //   });
  // }, []);
  const columns = [
    {
      accessorKey: "id",
      header: "",
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
      size: 30,
    },
    {
      accessorFn: (row) => row.symbol,
      id: "symbol",
      header: "",
      size: 30,
      Cell: ({ cell }) => (
        <img
          src={`${REACT_APP_TOKEN_ICON}/${cell.row.original.symbol.toLowerCase()}.png`}
          alt={cell.row.original.symbol}
          onClick={() => navigate(`/matrics/${cell.row.original.symbol}`)}
        />
      ),
    },
    {
      id: "name",
      header: t("Name"),
      size: 160,
      Cell: ({ cell }) => (<span onClick={() => navigate(`/matrics/${cell.row.original.symbol}`)}>{cell.row.original.name}</span>)
    },
    {
      accessorFn: (row) => row.price,
      id: "Price",
      header: t("Price"),
    },
    {
      accessorFn: (row) => row.marketCap,
      id: "marketCap",
      header: t("Market_Cap"),
    },
    {
      accessorFn: (row) => row.volume,
      id: "volume",
      header: t("Volume"),
      size: 160,
    },
    {
      accessorFn: (row) => row.circulating,
      id: "Circulating",
      header: t("Circulating_Supply"),
      size: 200,
    },
    {
      accessorFn: (row) => row.percentagePerDay,
      id: "percentagePerDay",
      header: t("24"),
      size: 100,
    },
    {
      accessorFn: (row) => row.percentagePerWeek,
      id: "percentagePerWeek",
      header: "7d",
      size: 100,
    },
    {
      accessorFn: (row) => row.percentagePerMonth,
      id: "percentagePerHour",
      header: "30d",
      size: 100,
    },
    {
      accessorFn: (row) => row.chart,
      id: "chart",
      header: t("Chart"),
      size: 100,
      Cell: (cell) => <Chart labels={cell?.row?.original?.last7daysGraph} />,
    },
  ];

  const connectWallet = async () => {
    try {
      const web3Provider = new providers.Web3Provider(await web3Modal.connect());
      const signer = web3Provider.getSigner()
      const address = await signer.getAddress();
      const balance = await signer.getBalance();
      const payload = {
        web3Provider,
        signer,
        address,
        balance: utils.formatEther(balance)
      }

      dispatch({ type: CONNECTED_WALLET_DETAILS, payload })
    } catch (error) {
      toast.error(error.message, { toastId: error.message })
    }
  };

  useEffect(() => {
    if (!walletState.address) return;
    if (+walletState.balance === 0) socket.emit("RefreshTimeAfter", { refreshTimeAfter: 15000 })
    else socket.emit("RefreshTimeAfter", { refreshTimeAfter: 2000 })
  }, [walletState])

  useEffect(() => {
    if (web3Modal && web3Modal.cachedProvider)
      connectWallet()

  }, [])

  const truncatedWalletAddress = () => {
    const addressLength = walletState.address.length;
    const firstFiveCharactersofAddress = walletState.address.substring(0, 5);
    const lastFiveCharactersofAddress = walletState.address.substring(addressLength - 5, addressLength);
    return `${firstFiveCharactersofAddress}...${lastFiveCharactersofAddress}`
  }

  return (
    <div className="Finance-wrapper">
      <div className="container">
        
          {/* <Button onClick={connectWallet}>{!walletState.address ? "connect" : truncatedWalletAddress()}</Button> */}
        
       
        <div className="fn-searchbar">
          <h1>
            {t("swap")}
            <b>{t("Finance")}</b>
          </h1>
          <div className="searchbar">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <MdSearch />
              </InputGroup.Text>
              <Form.Control
                placeholder={t("input")}
                aria-label="token"
                aria-describedby="basic-addon1"
              />
              <Button className="main-search">{t("search")}</Button>
            </InputGroup>
            <div className="search-btn">
              <Button>{t("explode")}</Button>
              <Button className="spc-btn">{t("coin")}</Button>
            </div>
          </div>
        </div>
      </div>
        <div className="fn-table-box">
          <div id="scroll">
            <div className={change ? "rvn-table-wrap2" : "rvn-table-wrap"}>
              {
                tableData?.length === 0 || typeof tableData === "undefined" ? <Loader /> :
                  <MaterialReactTable
                    data={tableData}
                    columns={columns}
                    pageSize={20}
                    enableStickyHeader
                    muiTableContainerProps={
                      {
                        sx: { maxHeight: "100vh" },
                        onScroll: (event) => fetch(event.target),
                      }
                    }
                    enablePagination={false}
                    enableRowSelection={false}
                    enableColumnActions={false}
                    enableSorting={false}
                    enableTopToolbar={false}
                  />
              }
            </div>
          </div>
        </div>
    </div>
  );
};
export default FinanceTable;
