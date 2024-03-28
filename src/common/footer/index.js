import React from "react";
import "./footer.scss";
import { FacebookSharp, Twitter, YouTube } from "@mui/icons-material";

export default function Footer() {
  
  return (
    <div className="footFull">
      <div className="container">
        <div className="mainFooter">
          <div className="footer-links">
            <div className="menuFooter">
              <p>ABOUT</p>
              <div className="about">
                <a href="/about">Contact Us</a>
                <a href="/about">About Us</a>
                <a href="/about">Careers</a>
                <a href="/about">Flipkart Stories</a>
                <a href="/help">Press</a>
                <a href="/help">Corporate Information</a>
              </div>
            </div>
            <div className="menuFooter">
              <p>GROUP COMPANIES</p>
              <div className="employees">
                <a href="/myntra.com" target="_blank">
                  Myntra
                </a>
                <a href="/flipkart-wholesale" target="_blank">
                  Flipkart Wholesale
                </a>
                <a href="/www.cleartrip.com/" target="_blank">
                  Cleartrip
                </a>
                <a href="/shopsy.in/">Shopsy</a>
              </div>
            </div>
            <div className="menuFooter">
              <p>HELP</p>
              <div className="moneyReq">
                <a href="/payment">Payments</a>
                <a href="/shipping">Shippings</a>
                <a href="/cancle-return">Cancellation & Returns</a>
                <a href="/faq">FAQ</a>
                <a href="/report">Report Infringement</a>
              </div>
            </div>
            <div className="menuFooter">
              <p>CONSUMER POLICY</p>
              <div className="returnItem">
                <a href="/cancle-return">Cancellation & Returns</a>
                <a href="/returnPolicy">Terms Of Use</a>
                <a href="/returnPolicy">Security</a>
                <a href="/returnPolicy">Privacy</a>
                <a href="/returnPolicy">SiteMap</a>
                <a href="/returnPolicy">Grievance Redressal</a>
                <a href="/returnPolicy">EPR Compliance</a>
              </div>
            </div>
            <div className="menuFooter">
              <p>MAIL Us:</p>
              <p className="address">
                Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
                Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
                Village, Bengaluru, 560103, Karnataka, India
              </p>
              <div className="social">
                <p>Social</p>
                <div className="socialMedia">
                  <a href="/www.facebook.com">
                    <FacebookSharp className="iconFace" />
                  </a>
                  <a href="www.twitter.com">
                    <Twitter className="iconTwit" href="www.twitter.com" />
                  </a>
                  <a href="www.youtube.com">
                    <YouTube className="iconYT" />
                  </a>
                </div>
              </div>
            </div>
            <div className="menuFooter">
              <p>Registered Office Address:</p>
              <p className="address">
                Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
                Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
                Village, Bengaluru, 560103, Karnataka, India.
              </p>
              <p className="address">CIN : U51109KA2012PTC066107</p>
              <p className="address">
                Telephone: <a href="tel.com">044-45614700</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
