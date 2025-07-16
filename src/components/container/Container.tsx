import { CSSProperties } from "react"

export default function Container({children}: {readonly children: React.ReactNode}) {
  const style: CSSProperties = {
      margin: '0 auto',
      width: '90vw',
      minWidth: 640,
      maxWidth: 1024,
      background: 'rgba(255, 255, 255, 0.15)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.3)',
      backdropFilter: 'blur(3px)',
      borderRadius: 10,
      border: '1px solid rgba(255, 255, 255, 0.18)',
      padding: 20,
    }
  return <div style={style}>{children}</div>
};
