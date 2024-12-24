"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

// Constants from original code
const CAMERA_SPEED = 0.00015;
const LIGHT_SPEED = 0.001;
const TUBULAR_SEGMENTS = 1000;
const RADIAL_SEGMENTS = 3;
const TUBE_RADIUS = 2;
const AMBIENT_LIGHT = 0x222222;
const LIGHT_COLOR = 0xffffff;
const LIGHT_INTENSITY = 1;
const LIGHT_DISTANCE = 20;
const HUE_START = 180;
const HUE_END = 200;

// Original path points
const p = [
  [389, 246, 0],
  [410, 255, 20],
  [413, 268, 7],
  [431, 261, 12],
  [418, 244, 30],
  [416, 217, 25],
  [420, 205, 8],
  [427, 227, -20],
  [432, 236, 5],
  [444, 228, 12],
  [451, 232, 41],
  [446, 246, 72],
  [443, 264, 96],
  [446, 278, 65],
  [463, 267, 20],
  [460, 258, -10],
  [464, 243, -20],
  [459, 233, 0],
  [475, 225, 22],
  [484, 225, 29],
  [490, 214, 51],
  [476, 202, 55],
  [462, 202, 55],
  [446, 205, 42],
  [440, 192, 42],
  [430, 183, 72],
  [413, 184, 58],
  [406, 191, 32],
  [406, 207, 0],
  [402, 220, 0],
  [390, 222, 20],
  [385, 228, 10],
  [389, 246, 0],
];

export default function Scene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Setup
    const w = window.innerWidth;
    const h = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.001, 1000);

    // Post processing
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(w, h),
      2.5,
      0.5,
      0.85
    );
    composer.addPass(bloomPass);

    // Create starfield using BufferGeometry
    const starsGeometry = new THREE.BufferGeometry();
    const starsVertices = new Float32Array(5000 * 3);

    for (let i = 0; i < 5000; i++) {
      starsVertices[i * 3] = THREE.MathUtils.randFloatSpread(2000);
      starsVertices[i * 3 + 1] = THREE.MathUtils.randFloatSpread(2000);
      starsVertices[i * 3 + 2] = THREE.MathUtils.randFloatSpread(2000);
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starsVertices, 3)
    );
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2,
      transparent: true,
      opacity: 1,
    });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // Create tube path
    const points = p.map(([x, y, z]) => new THREE.Vector3(x, y, z));
    const path = new THREE.CatmullRomCurve3(points);
    const geometry = new THREE.TubeGeometry(
      path,
      TUBULAR_SEGMENTS,
      TUBE_RADIUS,
      RADIAL_SEGMENTS,
      true
    );

    // Apply colors to vertices
    const colors = new Float32Array(geometry.attributes.position.count * 3);
    let hue = HUE_START;
    let hup = true;
    for (let i = 0; i < geometry.attributes.position.count; i++) {
      hup ? hue++ : hue--;
      if (hue === HUE_END) hup = false;
      else if (hue === HUE_START) hup = true;
      const color = new THREE.Color(`hsl(${hue},100%,50%)`);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Create tube mesh with thicker lines
    const material = new THREE.MeshBasicMaterial({
      side: THREE.BackSide,
      vertexColors: true,
      wireframe: true,
      wireframeLinewidth: 3,
    });
    const tube = new THREE.Mesh(geometry, material);
    scene.add(tube);

    // Add lights with increased intensity
    const light = new THREE.PointLight(0xffffff, 3, 50);
    scene.add(light);
    const light2 = new THREE.AmbientLight(AMBIENT_LIGHT);
    scene.add(light2);

    const lights = [
      new THREE.PointLight(LIGHT_COLOR, LIGHT_INTENSITY * 3, LIGHT_DISTANCE),
      new THREE.PointLight(LIGHT_COLOR, LIGHT_INTENSITY * 3, LIGHT_DISTANCE),
      new THREE.PointLight(LIGHT_COLOR, LIGHT_INTENSITY * 3, LIGHT_DISTANCE),
      new THREE.PointLight(LIGHT_COLOR, LIGHT_INTENSITY * 3, LIGHT_DISTANCE),
      new THREE.PointLight(LIGHT_COLOR, LIGHT_INTENSITY * 3, LIGHT_DISTANCE),
    ];
    lights.forEach((l) => scene.add(l));

    // Handle window resize
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      composer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation
    let pct = 0;
    let pct2 = 0;
    function render() {
      pct += CAMERA_SPEED;
      pct2 += LIGHT_SPEED;

      const pt1 = path.getPointAt(pct % 1);
      const pt2 = path.getPointAt((pct + 0.01) % 1);
      camera.position.set(pt1.x, pt1.y, pt1.z);
      camera.lookAt(pt2);
      light.position.set(pt2.x, pt2.y, pt2.z);

      lights[0].position.set(
        path.getPointAt((pct2 + 0.0) % 1).x,
        path.getPointAt((pct2 + 0.0) % 1).y,
        path.getPointAt((pct2 + 0.0) % 1).z
      );
      lights[1].position.set(
        path.getPointAt((pct2 + 0.2) % 1).x,
        path.getPointAt((pct2 + 0.2) % 1).y,
        path.getPointAt((pct2 + 0.2) % 1).z
      );
      lights[2].position.set(
        path.getPointAt((pct2 + 0.4) % 1).x,
        path.getPointAt((pct2 + 0.4) % 1).y,
        path.getPointAt((pct2 + 0.4) % 1).z
      );
      lights[3].position.set(
        path.getPointAt((pct2 + 0.6) % 1).x,
        path.getPointAt((pct2 + 0.6) % 1).y,
        path.getPointAt((pct2 + 0.6) % 1).z
      );
      lights[4].position.set(
        path.getPointAt((pct2 + 0.8) % 1).x,
        path.getPointAt((pct2 + 0.8) % 1).y,
        path.getPointAt((pct2 + 0.8) % 1).z
      );

      composer.render();
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      composer.dispose();
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />
  );
}
