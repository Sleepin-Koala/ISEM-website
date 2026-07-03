import { useEffect, useRef } from "react";

export default function NeuralNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const NODE_COUNT = 50;
    const MAX_DISTANCE = 100;

    const nodes = [];

    class Node {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;

        this.baseRadius = 2;
        this.radius = 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 180) {
          this.x += dx * 0.01;
          this.y += dy * 0.01;

          this.radius = this.baseRadius + (180 - dist) / 60;
        } else {
          this.radius += (this.baseRadius - this.radius) * 0.1;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        ctx.fillStyle = "#55d9ff";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#55d9ff";

        ctx.fill();
      }
    }

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push(new Node());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let node of nodes) {
        node.update();
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < MAX_DISTANCE) {
            const opacity = 1 - d / MAX_DISTANCE;

            let color = `rgba(85,217,255,${opacity * 0.3})`;

            const mx = (a.x + b.x) / 2;
            const my = (a.y + b.y) / 2;

            const mdx = mouse.x - mx;
            const mdy = mouse.y - my;

            if (Math.sqrt(mdx * mdx + mdy * mdy) < 140) {
              color = `rgba(255,255,255,${opacity})`;
            }

            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;

            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (let node of nodes) {
        node.draw();
      }

      requestAnimationFrame(animate);
    }

    animate();

    const move = (e) => {
      const rect = canvas.getBoundingClientRect();

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const leave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;

      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", move);
    canvas.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", move);
      canvas.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <canvas 
      className="hidden lg:block" 
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    />
  );
}