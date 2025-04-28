import { useEffect, useRef } from "react";
import * as qrCode from "qrcode";
import { converter, formatHex } from "culori";

export function QRCode({ url }: { url: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    const rgb = converter("rgb");
    const color = rgb(styles.getPropertyValue("--color-purple-800"));

    qrCode.toCanvas(canvasRef.current, url, {
      color: {
        dark: formatHex(color),
      },
      width: 80,
      margin: 1,
    });
  }, [url]);

  return (
    <div className="rounded border-4 border-purple-800 hidden md:block">
      <canvas ref={canvasRef} />
      <div className="bg-purple-800 text-white text-sm text-center pt-1">
        Contact
      </div>
    </div>
  );
}
