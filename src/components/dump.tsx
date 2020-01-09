import React from "react";

interface Props {
  data: any;
}

const Dump: React.FC<Props> = props => (
  <div
    style={{
      fontSize: 20,
      border: "1px solid #efefef",
      padding: 10,
      background: "white"
    }}
  >
    {Object.entries(props).map(([key, val]) => (
      <pre key={key}>
        <strong style={{ color: "white", background: "red" }}>{key} 💩</strong>
        {JSON.stringify(val, "", " ")}
      </pre>
    ))}
  </div>
);

export default Dump;
