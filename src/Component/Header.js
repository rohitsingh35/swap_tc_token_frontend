import React, { useEffect, useState, useCallback } from "react";
import MaterialReactTable from "material-react-table";
import { Button, InputGroup, Form } from "react-bootstrap";

import Logo from "../assets/img/w-logo.png";
import i18n from "i18next";
import Web3Modal from "web3modal";
import { providers, utils } from 'ethers'
import providerOptions from "../constant/web3ProviderOptions"
import {
  REACT_APP_BACKEND_URL,
  REACT_APP_TOKEN_ICON,
} from "../constant/environment";
import io from "socket.io-client"
import { toast } from "react-toastify"
import { CONNECTED_WALLET_DETAILS } from "../store/types/wallet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation, initReactI18next } from "react-i18next";



const socket = io(REACT_APP_BACKEND_URL)

const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions
});



const Header = () => {
  const [options, setOptions] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const { t } = useTranslation();
  const [change, setChange] = useState(false);
  const walletState = useSelector((state) => state.Wallet.accountInfo)

  

  const changeLang = (e) => {
    let l = e.target.value;
    setOptions(l);
    const var1 = i18n.changeLanguage(l);
    const var2 = localStorage.setItem("lang", l);
    return { var1, var2 };
  };

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
    <div className="headerbar-wrapper">
          <div className="container">
              <div className="main-header">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="wallet-btn">
                <div className="connect-btn">
          <Button onClick={connectWallet}>{!walletState.address ? "connect" : truncatedWalletAddress()}</Button>
          <Form.Select
            aria-label="Default select example"
            onChange={changeLang}
            value={options}
          >
            {/* <option value="">Languages</option> */}
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="sp">Spanish</option>
          </Form.Select>
        </div>
                </div>
              </div>
          </div>
    </div>
  );
};
export default Header;
