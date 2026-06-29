"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Points, PointMaterial, Ring } from "@react-three/drei";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 280;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.2 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.elapsedTime * 0.06;
    ref.current.rotation.x = clock.elapsedTime * 0.03;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#7CFF6B"
        size={0.028}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  );
}

function OrbitRing({ radius, speed, tilt }: { radius: number; speed: number; tilt: number }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.elapsedTime * speed;
  });

  return (
    <Ring ref={ref} args={[radius, radius + 0.012, 128]} rotation={[tilt, 0, 0]}>
      <meshBasicMaterial color="#7CFF6B" transparent opacity={0.12} side={THREE.DoubleSide} />
    </Ring>
  );
}

function CoreSphere() {
  const outerRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    outerRef.current.rotation.y = clock.elapsedTime * 0.08;
    outerRef.current.rotation.z = clock.elapsedTime * 0.04;
  });

  return (
    <Float speed={1.8} floatIntensity={0.4} rotationIntensity={0.3}>
      {/* Core distorted sphere */}
      <Sphere args={[1, 80, 80]}>
        <MeshDistortMaterial
          color="#1a2e1a"
          distort={0.38}
          speed={1.6}
          roughness={0.05}
          metalness={1}
          emissive="#7CFF6B"
          emissiveIntensity={0.28}
        />
      </Sphere>

      {/* Wireframe shell */}
      <Sphere ref={outerRef} args={[1.28, 18, 18]}>
        <meshBasicMaterial color="#7CFF6B" wireframe transparent opacity={0.07} />
      </Sphere>

      {/* Glow halo — large faint sphere */}
      <Sphere args={[1.55, 32, 32]}>
        <meshBasicMaterial color="#7CFF6B" transparent opacity={0.025} side={THREE.BackSide} />
      </Sphere>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[4, 4, 4]} intensity={2.5} color="#7CFF6B" />
      <pointLight position={[-4, -3, -4]} intensity={0.8} color="#4ade80" />
      <pointLight position={[0, 0, 6]} intensity={0.4} color="#ffffff" />

      <CoreSphere />
      <Particles />

      <OrbitRing radius={1.85} speed={0.4} tilt={Math.PI / 6} />
      <OrbitRing radius={2.05} speed={-0.28} tilt={Math.PI / 3} />
      <OrbitRing radius={1.65} speed={0.22} tilt={Math.PI / 2.2} />
    </>
  );
}

export default function HeroScene() {
  return (
    <div style={{ width: "100%", height: 420 }} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 48 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
