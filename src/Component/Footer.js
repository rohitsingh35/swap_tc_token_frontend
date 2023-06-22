import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faDiscord,
  faTelegram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="our-cmt">
          <h1>
            Our Community
          </h1>
          <p>
            Join our social media channels as they will be the only source for
            factual and informative information.
          </p>
        </div>
        <div className="footer-social-icon">
          <ul>
            <li>
              <Link>
                <span className="twittericon">
                  {" "}
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </span>
              </Link>
            </li>
            <li>
              <Link>
                <span className="discordicon">
                  {" "}
                  <FontAwesomeIcon icon={faDiscord} size="2x" />
                </span>
              </Link>
            </li>
            <li>
              <Link>
                <span className="telegramicon">
                  {" "}
                  <FontAwesomeIcon icon={faTelegram} size="2x" />
                </span>
              </Link>
            </li>
            <li>
              <Link>
                <span className="youtubeicon">
                  {" "}
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </span>
              </Link>
            </li>
            <li>
              <Link>
                <span className="githubicon">
                  {" "}
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="ft-copyright">
        <div className="container">
          <p>Swap Tc Finance v22.12.STC.SF(FinTrack)</p>
          <p>Copyright @2022 Swap TC Inc. All rights reserved</p>
          </div>
        </div>
    </div>
  );
};
export default Footer;
