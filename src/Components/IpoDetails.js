import React, { useContext } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IpoContext from "../Utilities/IpoContext";
import { Link, useParams } from "react-router-dom";
import img from "../Assets/images/file.png";
import "../Assets/css/IpoDetails.css";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import IpoTimeline from "./IpoTimeline";




export default function IpoDetails() {
  const { id } = useParams();
  const ipoData = useContext(IpoContext);
  const company = ipoData.find((ele) => ele.id === id);
  console.log(company);
  return (
    <div>
      <div className="nevigation"> Home &nbsp;&nbsp;&nbsp;{ '>'}&nbsp;&nbsp;&nbsp;Market watch</div>
      <div style={{ display: "flex", flexDirection: "row", height:'100px' }}>
        <Link className="reset-a" style={{display:'flex',alignItems:'center'}} to = {'/'}>
        <div className="back-arrow" style={{ width: "10%", display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div className="arrow"> 
          <ArrowBackIosNewOutlinedIcon/>
          </div>
        </div>
        </Link>
        
        <div className="company-container"style={{ display: "flex", flexDirection: "row", width: "60%" ,alignItems:"center"}}>
          <img className="details-logo" alt="logo" src={company.logoURI}></img>
          <div className="company-details">
            <div className="text-bold-detail text-color">{company.name}</div>
            <div className="org-name"style={{color:'gray'}}>{company.fullName}</div>
          </div>
        </div>
        <div className="download-utility "style={{ display: "flex", flexDirection: "row", width: "30%", alignItems:'center', justifyContent:'space-around'}}>
          <img alt="download" style={{height:'40%'  }}src={img}></img>
          <button className="btn-apply"> Apply Now</button>
        </div>
      </div>
      <div>
        <div className='ipo-details-container'>
          <div className="heading-text">IPO Details</div>
          <div className="inner-details-container">
            <div className="ipo-details">
              <div className="detail-box">
                <div className='item-name'>Issue Size</div>
                <div className='item-value'>{company.ipoDetails.issueSize}</div>
              </div>
              <div className="detail-box">
                <div className='item-name'>Price Range</div>
                <div className='item-value'>{company.ipoDetails.priceRange}</div>
              </div>
              <div className="detail-box">
                <div className='item-name'>Minimum Amount</div>
                <div className='item-value'>{company.ipoDetails.mimimumAmount}</div>
              </div>
              <div className="detail-box">
                <div className='item-name'>Lot Size</div>
                <div className='item-value'>{company.ipoDetails.lotSize}</div>
              </div>
            </div>
            <div className="ipo-details">
              <div className="detail-box">
                <div className='item-name'>Issue Dates</div>
                <div className='item-value'>{company.ipoDetails.issueDates}</div>
              </div>
              <div className="detail-box">
                <div className='item-name'>Listed On</div>
                <div className='item-value'>{company.ipoDetails.listedOn}</div>
              </div>
              <div className="detail-box">
                <div className='item-name'>Listed Price</div>
                <div className='item-value'>{company.ipoDetails.listedPrice}</div>
              </div>
              <div className="detail-box">
                <div className='item-name'>Listing gains</div>
                <div className='item-value'>{company.ipoDetails.listingGains}&nbsp;<span style={{color:"#ee7065"}}>({company.ipoDetails.listingGainPercentage})</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ipo-details-container" >
        <div className="heading-text">IPO Timeline</div>
        <div style={{width:'95%', margin:'auto'}}>
          <IpoTimeline companyDetails={company}></IpoTimeline>
        </div>
        </div>
      <div className="ipo-details-container">
        <div className="heading-text">About the company</div>
        <div className='item-name' style={{lineHeight:1.4,padding:'10px'}}>{company.companyInfo.toString()}</div>
      </div>
    </div>
  );
}
