'use client';

import { useEffect, useRef, useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { createAnimationLoop } from '@/lib/animation-loop';

/** A deferred WebGL scene. Content and navigation never depend on its availability. */
export function Sculpture() {
  const mount = useRef<HTMLDivElement>(null);
  const control = useRef({ paused: false, reset: () => {}, sync: () => {} });
  const [paused, setPaused] = useState(false);
  const [state, setState] = useState<'loading' | 'ready' | 'fallback'>('loading');

  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    control.current.paused = media.matches;
    setPaused(media.matches);
    const changeMotion = () => { control.current.paused = media.matches; setPaused(media.matches); control.current.sync(); };
    media.addEventListener('change', changeMotion);

    async function setup() {
      const THREE = await import('three');
      const { OrbitControls } = await import('three/addons/controls/OrbitControls.js');
      if (disposed || !mount.current) return;
      const host = mount.current;
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('webgl2', { alpha: true, antialias: true });
      if (!context) { setState('fallback'); return; }
      const renderer = new THREE.WebGLRenderer({ canvas, context, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.3;
      host.appendChild(canvas);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 50);
      camera.position.set(0, 0.3, 8.8);
      const controls = new OrbitControls(camera, canvas);
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableDamping = false;
      controls.minPolarAngle = Math.PI * 0.22;
      controls.maxPolarAngle = Math.PI * 0.78;
      // Keep vertical touch gestures available for scrolling the page.
      controls.touches.ONE = THREE.TOUCH.ROTATE;
      canvas.style.touchAction = 'pan-y';
      const sculpture = new THREE.Group();
      sculpture.rotation.set(0.3, 0.1, -0.35);
      scene.add(sculpture);
      scene.add(new THREE.HemisphereLight(0xf5eee5, 0x242333, 2.4));
      const key = new THREE.DirectionalLight(0xffffff, 5);
      key.position.set(-3, 4, 5); scene.add(key);
      const rim = new THREE.PointLight(0xff8c59, 100, 18);
      rim.position.set(3, 1, -1); scene.add(rim);
      const fill = new THREE.PointLight(0xb1bdff, 45, 15);
      fill.position.set(-4, -1, 2); scene.add(fill);

      const metal = new THREE.MeshStandardMaterial({ color: 0xb1aaa2, metalness: 0.82, roughness: 0.27 });
      const inner = new THREE.MeshStandardMaterial({ color: 0x25262b, metalness: 0.62, roughness: 0.32 });
      const accent = new THREE.MeshStandardMaterial({ color: 0xffa16d, emissive: 0xb4481a, emissiveIntensity: 0.8, metalness: 0.4, roughness: 0.3 });
      const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(1.22, 0.29, 180, 24, 2, 3), metal);
      sculpture.add(knot);
      const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.56, 0), inner);
      sculpture.add(core);
      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(core.geometry), new THREE.LineBasicMaterial({ color: 0xe4a47c, transparent: true, opacity: 0.55 }));
      core.add(edges);
      const orbit = new THREE.Group();
      orbit.rotation.set(0.9, -0.4, 0.2);
      sculpture.add(orbit);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.04, 0.012, 8, 128), accent);
      orbit.add(ring);
      const satelliteGeometry = new THREE.IcosahedronGeometry(0.09, 1);
      for (let i = 0; i < 3; i++) {
        const angle = i * Math.PI * 2 / 3;
        const satellite = new THREE.Mesh(satelliteGeometry, accent);
        satellite.position.set(Math.cos(angle) * 2.04, Math.sin(angle) * 2.04, 0);
        orbit.add(satellite);
      }
      const points = new Float32Array(90 * 3);
      for (let i = 0; i < 90; i++) {
        const angle = i * 2.39996;
        const radius = 2.5 + (i % 7) / 6;
        points[i * 3] = Math.cos(angle) * radius;
        points[i * 3 + 1] = Math.sin(angle) * radius * 0.7;
        points[i * 3 + 2] = -1.5 - (i % 5) * 0.4;
      }
      const dustGeometry = new THREE.BufferGeometry();
      dustGeometry.setAttribute('position', new THREE.BufferAttribute(points, 3));
      const dust = new THREE.Points(dustGeometry, new THREE.PointsMaterial({ color: 0xb7a898, size: 0.015, transparent: true, opacity: 0.6 }));
      scene.add(dust);
      let visible = false;
      let contextLost = false;
      const render = () => renderer.render(scene, camera);
      const resize = () => {
        const width = host.clientWidth; const height = host.clientHeight;
        if (!width || !height) return;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix(); render();
      };
      const loop = createAnimationLoop(requestAnimationFrame, cancelAnimationFrame, delta => {
        sculpture.rotation.y += delta * 0.16;
        orbit.rotation.z -= delta * 0.1;
        core.rotation.y -= delta * 0.24;
        render();
      });
      const sync = () => loop.setActive(visible && !document.hidden && !control.current.paused && !contextLost);
      control.current.sync = sync;
      document.addEventListener('visibilitychange', sync);
      control.current.reset = () => { controls.reset(); sculpture.rotation.set(0.3, 0.1, -0.35); render(); };
      controls.addEventListener('change', render);
      const observer = new ResizeObserver(resize); observer.observe(host);
      const visibility = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
      visibility.observe(host);
      const lost = (event: Event) => { event.preventDefault(); contextLost = true; sync(); setState('fallback'); };
      canvas.addEventListener('webglcontextlost', lost);
      cleanup = () => {
        loop.dispose(); observer.disconnect(); visibility.disconnect();
        document.removeEventListener('visibilitychange', sync);
        control.current.sync = () => {}; control.current.reset = () => {};
        controls.dispose(); canvas.removeEventListener('webglcontextlost', lost);
        const geometries = new Set<import('three').BufferGeometry>();
        const materials = new Set<import('three').Material>();
        scene.traverse(object => {
          const mesh = object as import('three').Mesh;
          if (mesh.geometry) geometries.add(mesh.geometry);
          if (mesh.material) (Array.isArray(mesh.material) ? mesh.material : [mesh.material]).forEach(m => materials.add(m));
        });
        geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose());
        renderer.dispose(); canvas.remove();
      };
      resize(); setState('ready');
    }
    setup().catch(() => { cleanup(); if (!disposed) setState('fallback'); });
    return () => { disposed = true; cleanup(); media.removeEventListener('change', changeMotion); };
  }, []);

  return <div className="sculpture-stage" data-state={state}>
    <div className="sculpture-fallback" aria-hidden="true"><i/><i/><i/></div>
    <div ref={mount} className="sculpture-canvas" aria-hidden="true" />
    <div className="scene-controls">
      <span>{state === 'ready' ? 'DRAG TO EXPLORE' : state === 'loading' ? 'LOADING SCULPTURE' : 'STILL PERSPECTIVE'}</span>
      {state === 'ready' && <><button aria-label={paused ? 'Play sculpture animation' : 'Pause sculpture animation'} aria-pressed={paused} onClick={() => { control.current.paused = !paused; setPaused(!paused); control.current.sync(); }}>{paused ? <Play size={13}/> : <Pause size={13}/>}</button><button aria-label="Reset sculpture view" onClick={() => control.current.reset()}><RotateCcw size={13}/></button></>}
    </div>
  </div>;
}
