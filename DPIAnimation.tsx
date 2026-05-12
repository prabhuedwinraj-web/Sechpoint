import { useEffect, useRef } from "react"
import { addPropertyControls, ControlType } from "framer"

interface Props {
    accentColor: string
    amberColor: string
    redColor: string
    packetRateMs: number
    laneCount: number
    showTicker: boolean
    showStats: boolean
    inspectorPosition: number
}

export default function DPIAnimation({
    accentColor,
    amberColor,
    redColor,
    packetRateMs,
    laneCount,
    showTicker,
    showStats,
    inspectorPosition,
}: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const stateRef = useRef<{
        rafId: number
        intervalId: ReturnType<typeof setInterval>
        statsIntervalId: ReturnType<typeof setInterval>
        ticker: number
        pkts: any[]
        gbps: number
        flows: number
        apps: number
    }>({
        rafId: 0,
        intervalId: undefined,
        statsIntervalId: undefined,
        ticker: 0,
        pkts: [],
        gbps: 187.4,
        flows: 2.0,
        apps: 412,
    })

    const gbpsRef = useRef(187.4)
    const flowsRef = useRef(2.0)
    const appsRef = useRef(412)

    useEffect(() => {
        const canvas = canvasRef.current
        const container = containerRef.current
        if (!canvas || !container) return

        const ctx = canvas.getContext("2d")!
        const dpr = Math.min(window.devicePixelRatio || 1, 2)
        let W = 0,
            H = 0

        function resize() {
            const r = container!.getBoundingClientRect()
            W = r.width
            H = r.height
            canvas!.width = W * dpr
            canvas!.height = H * dpr
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        }
        resize()
        const ro = new ResizeObserver(resize)
        ro.observe(container)

        const LANES = laneCount
        const IX = inspectorPosition / 100
        const ACCENT = accentColor
        const ACCENT_DIM = accentColor.replace(/[\d.]+\)$/, "0.14)")
        const AMBER = amberColor
        const RED = redColor
        const MUTED = "rgba(90,97,104,0.40)"
        const LINE = "rgba(14,18,23,0.07)"
        const LABEL = "rgba(90,97,104,0.55)"
        const LANE_LABELS = ["HTTPS", "QUIC", "TLS", "DNS", "RTP"].slice(0, LANES)
        const TICKER_LINES = [
            "flow_id=2af7c · proto=QUIC · class=video · risk=0.02",
            "flow_id=2af7d · proto=TLS1.3 · class=saas · risk=0.04",
            "flow_id=2af7e · proto=HTTPS · class=cdn · risk=0.01",
            "flow_id=2af7f · proto=DNS · class=resolve · risk=0.00",
            "flow_id=2af80 · proto=HTTPS · class=c2? · risk=0.91 ⚠",
            "flow_id=2af81 · proto=RTP · class=voip · risk=0.03",
        ]

        const s = stateRef.current

        function spawn() {
            const lane = Math.floor(Math.random() * LANES)
            const cls = Math.random()
            let color = MUTED,
                glow = false
            if (cls > 0.93) {
                color = RED
                glow = true
            } else if (cls > 0.78) {
                color = AMBER
                glow = true
            }
            s.pkts.push({
                lane,
                x: -0.04,
                w: 0.012 + Math.random() * 0.018,
                v: 0.0018 + Math.random() * 0.0015,
                color,
                glow,
                inspected: false,
                flash: 0,
            })
        }

        s.intervalId = setInterval(spawn, packetRateMs)

        function roundRect(
            ctx: CanvasRenderingContext2D,
            x: number,
            y: number,
            w: number,
            h: number,
            r: number
        ) {
            ctx.beginPath()
            ctx.moveTo(x + r, y)
            ctx.arcTo(x + w, y, x + w, y + h, r)
            ctx.arcTo(x + w, y + h, x, y + h, r)
            ctx.arcTo(x, y + h, x, y, r)
            ctx.arcTo(x, y, x + w, y, r)
            ctx.closePath()
        }

        function draw() {
            ctx.clearRect(0, 0, W, H)

            // Lane lines + labels
            for (let i = 0; i < LANES; i++) {
                const y = H * ((i + 1) / (LANES + 1))
                ctx.strokeStyle = LINE
                ctx.lineWidth = 1
                ctx.beginPath()
                ctx.setLineDash([3, 5])
                ctx.moveTo(20, y)
                ctx.lineTo(W - 20, y)
                ctx.stroke()
                ctx.setLineDash([])
                ctx.fillStyle = LABEL
                ctx.font = '10px "JetBrains Mono", ui-monospace, monospace'
                ctx.fillText(LANE_LABELS[i] || `L${i + 1}`, 24, y - 6)
            }

            // Inspector glow + line
            const ix = W * IX
            const grd = ctx.createLinearGradient(ix - 30, 0, ix + 30, 0)
            grd.addColorStop(0, "transparent")
            grd.addColorStop(0.5, ACCENT_DIM)
            grd.addColorStop(1, "transparent")
            ctx.fillStyle = grd
            ctx.fillRect(ix - 30, 0, 60, H)
            ctx.strokeStyle = ACCENT
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(ix, 10)
            ctx.lineTo(ix, H - 10)
            ctx.stroke()

            // Packets
            for (let i = s.pkts.length - 1; i >= 0; i--) {
                const p = s.pkts[i]
                p.x += p.v
                const x = p.x * W
                const y = H * ((p.lane + 1) / (LANES + 1))
                if (!p.inspected && x > ix) {
                    p.inspected = true
                    p.flash = 1
                }
                const pw = p.w * W
                ctx.fillStyle = p.color
                ctx.globalAlpha = p.glow ? 1 : 0.6
                roundRect(ctx, x, y - 3, pw, 6, 1)
                ctx.fill()
                const trail = ctx.createLinearGradient(x - pw * 3, 0, x, 0)
                trail.addColorStop(0, "transparent")
                trail.addColorStop(1, p.color)
                ctx.globalAlpha = 0.2
                ctx.fillStyle = trail
                ctx.fillRect(x - pw * 3, y - 1, pw * 3, 2)
                ctx.globalAlpha = 1
                if (p.flash && p.flash > 0) {
                    ctx.beginPath()
                    ctx.arc(ix, y, 14 * p.flash, 0, Math.PI * 2)
                    ctx.strokeStyle = p.color
                    ctx.globalAlpha = p.flash * 0.7
                    ctx.lineWidth = 1.4
                    ctx.stroke()
                    ctx.globalAlpha = 1
                    p.flash *= 0.92
                    if (p.flash < 0.05) p.flash = 0
                }
                if (x > W + 50) s.pkts.splice(i, 1)
            }

            // Ticker
            if (showTicker) {
                s.ticker += 0.5
                ctx.font = '10px "JetBrains Mono", ui-monospace, monospace'
                const start = Math.floor(s.ticker / 30) % TICKER_LINES.length
                for (let i = 0; i < 3; i++) {
                    const ln = TICKER_LINES[(start + i) % TICKER_LINES.length]
                    ctx.fillStyle = ln.includes("risk=0.91") ? RED : LABEL
                    ctx.fillText(ln, 24, H - 22 - i * 14)
                }
            }

            s.rafId = requestAnimationFrame(draw)
        }

        draw()

        // Stats wobble
        if (showStats) {
            s.statsIntervalId = setInterval(() => {
                gbpsRef.current = 180 + Math.random() * 20
                flowsRef.current = 1.85 + Math.random() * 0.3
                appsRef.current = 405 + Math.floor(Math.random() * 15)
            }, 1500)
        }

        return () => {
            cancelAnimationFrame(s.rafId)
            clearInterval(s.intervalId)
            clearInterval(s.statsIntervalId)
            ro.disconnect()
            s.pkts = []
            s.ticker = 0
        }
    }, [
        accentColor,
        amberColor,
        redColor,
        packetRateMs,
        laneCount,
        showTicker,
        showStats,
        inspectorPosition,
    ])

    return (
        <div
            ref={containerRef}
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                fontFamily:
                    '"JetBrains Mono", ui-monospace, monospace',
            }}
        >
            {/* Tag */}
            <div
                style={{
                    position: "absolute",
                    left: 16,
                    top: 16,
                    zIndex: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 10.5,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(90,97,104,0.8)",
                }}
            >
                <span
                    style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#1f9d55",
                        boxShadow: "0 0 0 3px rgba(31,157,85,0.2)",
                        animation: "dpi-pulse 1.6s infinite",
                    }}
                />
                DPI · LIVE INSPECTION
            </div>

            {/* Stats */}
            {showStats && (
                <div
                    style={{
                        position: "absolute",
                        right: 16,
                        top: 16,
                        zIndex: 3,
                        display: "flex",
                        gap: 18,
                    }}
                >
                    {[
                        { id: "gbps", label: "Gbps", ref: gbpsRef, format: (v: number) => v.toFixed(1) },
                        { id: "flows", label: "flows", ref: flowsRef, format: (v: number) => v.toFixed(1) + "M" },
                        { id: "apps", label: "apps", ref: appsRef, format: (v: number) => Math.round(v).toString() },
                    ].map(({ id, label, ref, format }) => (
                        <div
                            key={id}
                            style={{
                                textAlign: "right",
                                fontSize: 10.5,
                                color: "rgba(90,97,104,0.7)",
                                letterSpacing: "0.04em",
                            }}
                        >
                            <div
                                style={{
                                    display: "block",
                                    color: "#0e1217",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    letterSpacing: 0,
                                    fontFamily: "inherit",
                                }}
                            >
                                {format(ref.current)}
                            </div>
                            {label}
                        </div>
                    ))}
                </div>
            )}

            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                }}
            />

            <style>{`
                @keyframes dpi-pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.4; }
                }
            `}</style>
        </div>
    )
}

addPropertyControls(DPIAnimation, {
    accentColor: {
        type: ControlType.Color,
        defaultValue: "rgba(0,186,235,1)",
        title: "Accent",
    },
    amberColor: {
        type: ControlType.Color,
        defaultValue: "rgba(197,138,27,1)",
        title: "Warning",
    },
    redColor: {
        type: ControlType.Color,
        defaultValue: "rgba(217,67,61,1)",
        title: "Threat",
    },
    packetRateMs: {
        type: ControlType.Number,
        defaultValue: 120,
        min: 40,
        max: 500,
        step: 10,
        title: "Packet Rate",
        description: "Milliseconds between packets",
    },
    laneCount: {
        type: ControlType.Number,
        defaultValue: 5,
        min: 2,
        max: 5,
        step: 1,
        title: "Lanes",
    },
    inspectorPosition: {
        type: ControlType.Number,
        defaultValue: 62,
        min: 30,
        max: 80,
        step: 1,
        title: "Inspector X (%)",
    },
    showTicker: {
        type: ControlType.Boolean,
        defaultValue: true,
        title: "Flow Ticker",
    },
    showStats: {
        type: ControlType.Boolean,
        defaultValue: true,
        title: "Live Stats",
    },
})
