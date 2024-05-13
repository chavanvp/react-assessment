import React from "react";
import "react-step-progress-bar/styles.css";
import "../Assets/css/IpoDetails.css";

import { Steps } from 'antd';

export default function IpoTimeline(props) {
  const companydetails = props.companyDetails;
const items = [
  {
    title: 'Bidding starts',
    description : "",
    label:'biddingStarts',
  },
  {
    title: 'Bidding ends' ,
    description : "",
    label:'biddingEnds'
  },
  {
    title: 'Allotment Finalisation',
    description : "",
    label:'AllotmentFinalisation'
  },
  {
    title: 'Refund initialisation',
    description : "",
    label:'RefundInitiation'
  },
  {
    title: 'Demat transfer',
    description : "",
    label:'DematTransfer'
  },
  {
    title: 'listing date',
    description : "",
    label:'ListingDate'
  },
];
items.forEach(ele=>{
  ele.description = companydetails.ipoTimeline[ele.label]
})
console.log(items)
  return (
    <>
    <Steps current={5} labelPlacement="vertical" items={items} />
  </>
  );
}
