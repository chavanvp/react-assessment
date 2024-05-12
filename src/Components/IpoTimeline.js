import React from "react";
import "react-step-progress-bar/styles.css";
import "../Assets/css/IpoDetails.css";

import { ProgressBar, Step } from "react-step-progress-bar";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { Height } from "@mui/icons-material";
export default function IpoTimeline(props) {
  const companydetails = props.companyDetails;
  return (
    <div style={{ height: "10vh", padding: 10 }}>
      <div style={{width:'90%', margin:'auto'}}>
        <ProgressBar percent={75} filledBackground="#52b056">
          <Step transition="scale">
            {({ accomplished }) => (
              <DoneOutlinedIcon
                sx={{ color: "white" }}
                style={{
                  backgroundColor: "#52b056",
                  fontSize: 28,
                  borderRadius: "50%",
                  padding: 5,
                }}
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <DoneOutlinedIcon
                sx={{ color: "white" }}
                style={{
                  backgroundColor: "#52b056",
                  fontSize: 28,
                  borderRadius: "50%",
                  padding: 5,
                }}
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <DoneOutlinedIcon
                sx={{ color: "white" }}
                style={{
                  backgroundColor: "#52b056",
                  fontSize: 28,
                  borderRadius: "50%",
                  padding: 5,
                }}
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <DoneOutlinedIcon
                sx={{ color: "white" }}
                style={{
                  backgroundColor: "#52b056",
                  fontSize: 28,
                  borderRadius: "50%",
                  padding: 5,
                }}
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <DoneOutlinedIcon
                sx={{ color: "white" }}
                style={{
                  backgroundColor: "#52b056",
                  fontSize: 28,
                  borderRadius: "50%",
                  padding: 5,
                }}
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <DoneOutlinedIcon
                sx={{ color: "white" }}
                style={{
                  backgroundColor: "#52b056",
                  fontSize: 28,
                  borderRadius: "50%",
                  padding: 5,
                }}
              />
            )}
          </Step>
          {/* <Step transition="scale">
        {({ accomplished }) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="30"
            src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
          />
        )}
      </Step> */}
        </ProgressBar>
      </div>
      <div>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div className="item-value-ipo-timeline">{"Bidding"}</div>
            <div className="item-value-ipo-timeline">{"starts"}</div>
            <div className="item-name">
              {companydetails.ipoTimeline.biddingStarts}
            </div>
          </div>
          <div>
            <div className="item-value-ipo-timeline">{"Bidding"}</div>
            <div className="item-value-ipo-timeline">{"ends"}</div>
            <div className="item-name">
              {companydetails.ipoTimeline.biddingEnds}
            </div>
          </div>
          <div>
            <div className="item-value-ipo-timeline">{"Allotment"}</div>
            <div className="item-value-ipo-timeline">{"finalization"}</div>
            <div className="item-name">
              {companydetails.ipoTimeline.AllotmentFinalisation}
            </div>
          </div>
          <div>
            <div className="item-value-ipo-timeline">{"Refund"}</div>
            <div className="item-value-ipo-timeline">{"initiation"}</div>
            <div className="item-name">
              {companydetails.ipoTimeline.RefundInitiation}
            </div>
          </div>
          <div>
            <div className="item-value-ipo-timeline">{"Demat"}</div>
            <div className="item-value-ipo-timeline">{"transfer"}</div>
            <div className="item-name">
              {companydetails.ipoTimeline.DematTransfer}
            </div>
          </div>
          <div>
            <div className="item-value-ipo-timeline">{"Listing"}</div>
            <div className="item-value-ipo-timeline">{"date"}</div>
            <div className="item-name">
              {companydetails.ipoTimeline.ListingDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
