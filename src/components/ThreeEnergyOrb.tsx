import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeEnergyOrbProps {
  activeSection: string;
  heroProgress: number;
  storyProgress: number;
  journeyProgress: number;
  entersProgress: number;
  isMobile: boolean;
}

export default function ThreeEnergyOrb({
  activeSection,
  heroProgress,
  storyProgress,
  journeyProgress,
  entersProgress,
  isMobile,
}: ThreeEnergyOrbProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const rimMaterialRef = useRef<THREE.ShaderMaterial | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const rimMeshRef = useRef<THREE.Mesh | null>(null);
  
  // Ref to hold animated target parameters for high-fidelity physics lerping
  const paramsRef = useRef({
    time: 0,
    speed: 0.5,
    deform: 0.15,
    colorCore: new THREE.Color('#FFFFFF'),
    colorMid: new THREE.Color('#A78BFA'),
    colorEdge: new THREE.Color('#4C1D95'),
    fresnelPower: 3.5,
    fresnelScale: 1.5,
    coreSize: 2.2,
    
    // Lerping current values
    currentSpeed: 0.5,
    currentDeform: 0.15,
    currentColorCore: new THREE.Color('#FFFFFF'),
    currentColorMid: new THREE.Color('#A78BFA'),
    currentColorEdge: new THREE.Color('#4C1D95'),
    currentFresnelPower: 3.5,
    currentFresnelScale: 1.5,
    currentCoreSize: 2.2,
  });

  // Calculate target properties based on narrative state page positions
  useEffect(() => {
    const params = paramsRef.current;
    
    if (activeSection === 'hero') {
      // 1. Initial State: Centered, quiet, breathing with potentialenergy
      params.speed = 0.45 + heroProgress * 0.1;
      params.deform = 0.14;
      params.fresnelPower = 3.6;
      params.fresnelScale = 1.3;
      params.coreSize = 2.4;
      params.colorCore.set('#FFFFFF');
      params.colorMid.set('#8B5CF6'); // royal violet
      params.colorEdge.set('#2E1065'); // extremely dark deep purple
    } 
    else if (activeSection === 'story') {
      // 2. Story Sequence (Exploration -> Growth & Sweep -> Dominate integration)
      if (storyProgress < 0.33) {
        // Phase 2a - Exploration (Imagine/Create)
        // Starts swelling, softer boundaries
        params.speed = 0.7;
        params.deform = 0.22;
        params.fresnelPower = 3.2;
        params.fresnelScale = 1.5;
        params.coreSize = 2.0;
        params.colorCore.set('#FDF4FF'); // soft lilac core
        params.colorMid.set('#9333EA'); // vibrant purple
        params.colorEdge.set('#3B0764'); // deep dark purple
      } 
      else if (storyProgress < 0.39) {
        // Dynamic Retention Hold (Suspense pause)
        params.speed = 0.5;
        params.deform = 0.18;
        params.fresnelPower = 3.5;
        params.fresnelScale = 1.6;
        params.colorCore.set('#FFFFFF');
        params.colorMid.set('#8B5CF6');
        params.colorEdge.set('#4C1D95');
      }
      else if (storyProgress < 0.76) {
        // Phase 2b - Majestic Sweeping Growth / Momentum (Build/Scale/Lead)
        // High speed turbulence, maximum plasma deformation, ultra hot bright whites/pinks
        const p = (storyProgress - 0.39) / 0.37;
        params.speed = 1.7 + p * 0.4;
        params.deform = 0.45 + p * 0.15; // heavily displaced, liquid energy feel
        params.fresnelPower = 2.2; // wider bloom ring
        params.fresnelScale = 2.0;
        params.coreSize = 1.5; // larger radiant core
        params.colorCore.set('#FFF5FF');
        params.colorMid.set('#D946EF'); // glowing neon fuchsia
        params.colorEdge.set('#5B21B6'); // bright violet accent
      } 
      else {
        // Phase 2c - Clarity & Balance (Dominate)
        // Settling, crystal clear, organized, premium platinum accents
        const p = (storyProgress - 0.76) / 0.24;
        params.speed = 0.6;
        params.deform = 0.15;
        params.fresnelPower = 4.0; // tight razor-sharp energy edge
        params.fresnelScale = 1.4;
        params.coreSize = 2.6; // focused bright compact core
        params.colorCore.set('#FFFFFF');
        params.colorMid.set('#7C3AED');
        params.colorEdge.set('#2E1065');
      }
    } 
    else if (activeSection === 'journey') {
      // 3. Environmental Atmosphere (Grid Problem stage)
      // Small, dim, extremely slow, very dark purple backlighting to avoid distraction
      params.speed = 0.2;
      params.deform = 0.08;
      params.fresnelPower = 4.5;
      params.fresnelScale = 0.8;
      params.coreSize = 3.5; // faint tiny core
      params.colorCore.set('#CCCCCC');
      params.colorMid.set('#4C1D95');
      params.colorEdge.set('#1E1B4B'); // dark night blue-violet
    } 
    else if (activeSection === 'enters') {
      // 4. GBA Enters Engine Lock
      // Revved turbine engine: extreme vibrational frequency but with controlled scale limits
      const p = Math.min(entersProgress * 1.5, 1.0);
      params.speed = 1.4 + p * 0.5;
      params.deform = 0.2 + p * 0.12; 
      params.fresnelPower = 2.8;
      params.fresnelScale = 1.8;
      params.coreSize = 1.8;
      params.colorCore.set('#FFFFFF');
      params.colorMid.set('#8B5CF6');
      params.colorEdge.set('#3B0764');
    }
  }, [activeSection, heroProgress, storyProgress, journeyProgress, entersProgress]);

  // Set up WebGL Scene
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Create WebGL Renderer with optimized profiles
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;
    
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      premultipliedAlpha: false,
    });
    
    // Set cap ratio on pixelRatio to secure perfect 60fps on high-density screens
    const cappedRatio = Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2.0);
    renderer.setPixelRatio(cappedRatio);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 2. Create Scene & Perspective Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.5;

    // 3. custom Vertex & Fragment shaders for energy deformation & Fresnel glow
    const vertexShader = `
      uniform float uTime;
      uniform float uSpeed;
      uniform float uDeform;

      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vPosition;

      // Sinusoidal displacement for organic plasma mechanics
      // Evaluates waves across three dimensions
      float getWaveDisplacement(vec3 p, float time) {
        float d = sin(p.x * 2.0 + time) * cos(p.y * 2.3 + time * 1.1) * sin(p.z * 1.8 - time * 0.9);
        d += sin(p.y * 3.8 - time * 1.5) * cos(p.z * 3.1 + time * 1.3) * 0.35;
        d += sin(p.z * 6.0 + time * 2.1) * sin(p.x * 5.2 - time * 1.7) * 0.15;
        return d;
      }

      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        
        float deformation = getWaveDisplacement(position, uTime * uSpeed) * uDeform;
        vec3 displacedPos = position + normal * deformation;
        
        vec4 mvPosition = modelViewMatrix * vec4(displacedPos, 1.0);
        vViewPosition = -mvPosition.xyz;
        
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      uniform vec3 uColorCore;
      uniform vec3 uColorMid;
      uniform vec3 uColorEdge;
      uniform float uFresnelPower;
      uniform float uFresnelScale;
      uniform float uCoreSize;

      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vPosition;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        
        // Fresnel calculation: intensity flares along tangents of the viewing angle
        float r = dot(viewDir, normal);
        float fresnel = pow(1.0 - max(r, 0.0), uFresnelPower) * uFresnelScale;
        
        // Swirling internal neon currents driven by time
        float noise = sin(vPosition.x * 3.5 + uTime * 0.7) * cos(vPosition.y * 3.0 - uTime * 0.9) * sin(vPosition.z * 2.8 + uTime * 0.5);
        noise = (noise + 1.0) * 0.5;
        
        // Centered core gradient mask
        float centerGlow = pow(max(r, 0.0), uCoreSize);
        
        // Plasma base blending
        vec3 rimColor = uColorEdge;
        vec3 centralColors = mix(uColorMid, vec3(1.0, 0.7, 1.0), noise * 0.22);
        vec3 colorResult = mix(rimColor, centralColors, r);
        
        // Superimpose luminous engine cores and fresnel edge flares
        colorResult += uColorCore * centerGlow * 1.4;
        colorResult += rimColor * fresnel * 2.0;
        
        // Soft transparency mask to feather object boundaries natively
        float alphaFactor = mix(fresnel * 1.3, 1.0, r * 0.9);
        alphaFactor = clamp(alphaFactor, 0.0, 1.0);
        
        gl_FragColor = vec4(colorResult, alphaFactor);
      }
    `;

    // Outer auxiliary core rim shader (Creates a misty deep layered glow volume)
    const rimVertexShader = `
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position * 1.1, 1.0); // scaled slightly bigger
        vViewPosition = -mvPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const rimFragmentShader = `
      uniform vec3 uColorEdge;
      uniform float uFresnelPower;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        float r = dot(viewDir, normal);
        float edgeGlow = pow(1.0 - max(r, 0.0), uFresnelPower);
        gl_FragColor = vec4(uColorEdge, edgeGlow * 0.4);
      }
    `;

    // 4. Instantiate Material Uniforms
    const uniforms = {
      uTime: { value: 0 },
      uSpeed: { value: 0.5 },
      uDeform: { value: 0.15 },
      uColorCore: { value: new THREE.Color() },
      uColorMid: { value: new THREE.Color() },
      uColorEdge: { value: new THREE.Color() },
      uFresnelPower: { value: 3.5 },
      uFresnelScale: { value: 1.5 },
      uCoreSize: { value: 2.2 },
    };

    const rimUniforms = {
      uColorEdge: { value: new THREE.Color() },
      uFresnelPower: { value: 4.5 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    materialRef.current = material;

    const rimMaterial = new THREE.ShaderMaterial({
      vertexShader: rimVertexShader,
      fragmentShader: rimFragmentShader,
      uniforms: rimUniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    rimMaterialRef.current = rimMaterial;

    // 5. Generate high detail geo
    // Mobile optimized detail parameter
    const segments = isMobile ? 24 : 48;
    const geometry = new THREE.SphereGeometry(1.6, segments, segments);

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    meshRef.current = mesh;

    const rimMesh = new THREE.Mesh(geometry, rimMaterial);
    scene.add(rimMesh);
    rimMeshRef.current = rimMesh;

    // 6. Real-time rendering animation loop
    let lastTime = performance.now();
    let runtime = 0;
    let animationFrameId = 0;

    const animate = (now: number) => {
      animationFrameId = requestAnimationFrame(animate);
      
      const delta = Math.min((now - lastTime) / 1000, 0.1); // clamp delta
      lastTime = now;
      
      const params = paramsRef.current;
      runtime += delta * params.currentSpeed;
      
      // Perform weighted inertia lerping (lerp factor = 4.0 * delta)
      const t = Math.min(delta * 4.0, 1.0);
      
      params.currentSpeed += (params.speed - params.currentSpeed) * t;
      params.currentDeform += (params.deform - params.currentDeform) * t;
      params.currentFresnelPower += (params.fresnelPower - params.currentFresnelPower) * t;
      params.currentFresnelScale += (params.fresnelScale - params.currentFresnelScale) * t;
      params.currentCoreSize += (params.coreSize - params.currentCoreSize) * t;
      
      params.currentColorCore.lerp(params.colorCore, t);
      params.currentColorMid.lerp(params.colorMid, t);
      params.currentColorEdge.lerp(params.colorEdge, t);

      // Update shader uniforms
      uniforms.uTime.value = runtime;
      uniforms.uSpeed.value = params.currentSpeed;
      uniforms.uDeform.value = params.currentDeform;
      uniforms.uFresnelPower.value = params.currentFresnelPower;
      uniforms.uFresnelScale.value = params.currentFresnelScale;
      uniforms.uCoreSize.value = params.currentCoreSize;
      uniforms.uColorCore.value.copy(params.currentColorCore);
      uniforms.uColorMid.value.copy(params.currentColorMid);
      uniforms.uColorEdge.value.copy(params.currentColorEdge);
      
      rimUniforms.uColorEdge.value.copy(params.currentColorEdge);

      // Spin the meshes slowly in alternate directions
      mesh.rotation.y += delta * 0.28;
      mesh.rotation.x += delta * 0.12;
      
      rimMesh.rotation.y -= delta * 0.15;
      rimMesh.rotation.z += delta * 0.08;

      // Dynamic resize check
      const currentWidth = container.clientWidth;
      const currentHeight = container.clientHeight;
      if (currentWidth && currentHeight && (renderer.domElement.width !== currentWidth * cappedRatio || renderer.domElement.height !== currentHeight * cappedRatio)) {
        renderer.setSize(currentWidth, currentHeight, false);
        camera.aspect = currentWidth / currentHeight;
        camera.updateProjectionMatrix();
      }

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      
      // Release resources cleanly for garbage collector
      geometry.dispose();
      material.dispose();
      rimMaterial.dispose();
      renderer.dispose();
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isMobile]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full relative" 
      style={{ overflow: 'hidden' }}
    />
  );
}
