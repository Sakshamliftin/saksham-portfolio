"use client"

import { useEffect, useRef } from "react"

export default function Chart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    // Chart data
    const data = [
      10, 15, 8, 12, 18, 22, 16, 20, 25, 23, 28, 30, 26, 32, 35, 30, 38, 42, 36, 40, 45, 48, 50, 45, 55, 60, 58, 65, 60,
      70,
    ]

    // Chart settings
    const padding = 20
    const chartWidth = rect.width - padding * 2
    const chartHeight = rect.height - padding * 2
    const dataPointCount = data.length
    const maxValue = Math.max(...data)
    const minValue = Math.min(...data)
    const range = maxValue - minValue
    const pointSpacing = chartWidth / (dataPointCount - 1)

    // Draw gradient background
    const gradient = ctx.createLinearGradient(0, padding, 0, chartHeight + padding)
    gradient.addColorStop(0, "rgba(124, 58, 237, 0.1)")
    gradient.addColorStop(1, "rgba(124, 58, 237, 0)")

    // Draw line
    ctx.beginPath()
    ctx.moveTo(padding, chartHeight + padding - ((data[0] - minValue) / range) * chartHeight)

    for (let i = 1; i < dataPointCount; i++) {
      const x = padding + i * pointSpacing
      const y = chartHeight + padding - ((data[i] - minValue) / range) * chartHeight

      // Use bezier curves for smooth lines
      if (i === 1) {
        ctx.lineTo(x, y)
      } else {
        const prevX = padding + (i - 1) * pointSpacing
        const prevY = chartHeight + padding - ((data[i - 1] - minValue) / range) * chartHeight

        const cpX1 = prevX + pointSpacing / 3
        const cpX2 = x - pointSpacing / 3

        ctx.bezierCurveTo(cpX1, prevY, cpX2, y, x, y)
      }
    }

    // Complete the path for the gradient fill
    ctx.lineTo(padding + (dataPointCount - 1) * pointSpacing, chartHeight + padding)
    ctx.lineTo(padding, chartHeight + padding)
    ctx.closePath()

    // Fill with gradient
    ctx.fillStyle = gradient
    ctx.fill()

    // Draw the line again for the stroke
    ctx.beginPath()
    ctx.moveTo(padding, chartHeight + padding - ((data[0] - minValue) / range) * chartHeight)

    for (let i = 1; i < dataPointCount; i++) {
      const x = padding + i * pointSpacing
      const y = chartHeight + padding - ((data[i] - minValue) / range) * chartHeight

      if (i === 1) {
        ctx.lineTo(x, y)
      } else {
        const prevX = padding + (i - 1) * pointSpacing
        const prevY = chartHeight + padding - ((data[i - 1] - minValue) / range) * chartHeight

        const cpX1 = prevX + pointSpacing / 3
        const cpX2 = x - pointSpacing / 3

        ctx.bezierCurveTo(cpX1, prevY, cpX2, y, x, y)
      }
    }

    // Style and stroke the line
    ctx.strokeStyle = "rgb(124, 58, 237)"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw data points
    for (let i = 0; i < dataPointCount; i += Math.ceil(dataPointCount / 8)) {
      const x = padding + i * pointSpacing
      const y = chartHeight + padding - ((data[i] - minValue) / range) * chartHeight

      ctx.beginPath()
      ctx.arc(x, y, 3, 0, Math.PI * 2)
      ctx.fillStyle = "rgb(124, 58, 237)"
      ctx.fill()
      ctx.strokeStyle = "white"
      ctx.lineWidth = 1
      ctx.stroke()
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
