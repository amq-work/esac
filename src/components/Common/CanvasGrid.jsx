import React, { useEffect, useRef } from 'react';

export const CanvasGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Grid particles
    const cols = Math.floor(width / 60);
    const rows = Math.floor(height / 60);
    const gridNodes = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        gridNodes.push({
          x: c * 60 + 30,
          y: r * 60 + 30,
          originX: c * 60 + 30,
          originY: r * 60 + 30,
        });
      }
    }

    let animId;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint grid lines
      ctx.strokeStyle = 'rgba(197, 160, 89, 0.04)';
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += 60) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += 60) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw interactive nodes
      gridNodes.forEach((node) => {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 180;

        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 15;
          const angle = Math.atan2(dy, dx);
          node.x = node.originX - Math.cos(angle) * force;
          node.y = node.originY - Math.sin(angle) * force;

          // Draw connector to mouse
          ctx.strokeStyle = `rgba(197, 160, 89, ${0.15 * (1 - dist / maxDist)})`;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        } else {
          node.x += (node.originX - node.x) * 0.1;
          node.y += (node.originY - node.y) * 0.1;
        }

        ctx.fillStyle = dist < maxDist ? 'rgba(197, 160, 89, 0.6)' : 'rgba(255, 255, 255, 0.12)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, dist < maxDist ? 2.5 : 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
};
