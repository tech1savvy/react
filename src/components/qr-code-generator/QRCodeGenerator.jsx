import QRCode from "react-qr-code";
import styles from "./QRCodeGenerator.module.css";
import { useState } from "react";

export default function QRCodeGenerator() {
  const [value, setValue] = useState("");
  const [input, setInput] = useState("");

  function handleClick() {
    setValue(input.trim());
  }

  return (
    <div className={styles.qrCodeWrapper}>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="enter text here"
        />
        <button
          disabled={!(input && input.trim() !== "")}
          onClick={handleClick}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode
          className={styles.qrCode}
          id="qr-code-value"
          value={value}
          size={310}
        />
      </div>
    </div>
  );
}
