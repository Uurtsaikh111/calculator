import React from "react";
import Card from "./Card";
import "../style/cards.css";

const DummyData = [
  {
    title: Number("1"),
  },
  {
    title: Number("2"),
  },
  {
    title: Number("3"),
  },
  {
    title: Number("4"),
  },
  {
    title: Number("5"),
  },
  {
    title: Number("6"),
  },
  {
    title: Number("7"),
  },
  {
    title: Number("8"),
  },
  {
    title: Number("9"),
  },
  {
    title: "+",
  },
  {
    title: "-",
  },
  {
    title: "*",
  },
  {
    title: "/",
  },
  {
    title: "=",
  },
  {
    title: "AC",
  },
];

export default function Cards() {
  //console.log(DummyData[0]);

  return (
    <div className="cards">
      <Card data={DummyData[0]} />
      <Card data={DummyData[1]} />
      <Card data={DummyData[2]} />
      <Card data={DummyData[3]} />
      <Card data={DummyData[4]} />
      <Card data={DummyData[5]} />
      <Card data={DummyData[6]} />
      <Card data={DummyData[7]} />
      <Card data={DummyData[8]} />
      <Card data={DummyData[9]} />
      <Card data={DummyData[10]} />
      <Card data={DummyData[11]} />
      <Card data={DummyData[12]} />
      <Card data={DummyData[13]} />
      <Card data={DummyData[14]} />
      
    </div>
  );
}
