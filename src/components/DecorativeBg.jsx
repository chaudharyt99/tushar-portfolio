import { useEffect, useRef } from 'react'
import { createNoise3D } from 'simplex-noise'

export default function DecorativeBg () {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const THREE = window.THREE
    const TweenMax = window.TweenMax
    const Power0 = window.Power0

    if (!canvas || !THREE || !TweenMax || !Power0) {
      console.warn('DecorativeBg: missing required globals (THREE/GSAP).')
      return undefined
    }

    const container = canvas.parentElement || document.body
    let width = container.clientWidth || window.innerWidth
    let height = container.clientHeight || window.innerHeight

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true
    })
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1)
    renderer.setSize(width, height)
    renderer.setClearColor(0x0f1617)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(0, 0, 100)

    const geometry = new THREE.BoxGeometry(49, 49, 49, 7, 7, 7)
    if (!geometry.vertices || !geometry.faces) {
      console.warn('DecorativeBg: THREE build lacks classic Geometry support.')
      renderer.dispose()
      return undefined
    }

    for (let i = 0; i < geometry.faces.length; i++) {
      const face = geometry.faces[i]
      const v1 = geometry.vertices[face.a]
      const v2 = geometry.vertices[face.b]
      const v3 = geometry.vertices[face.c]
      const center = new THREE.Vector3()
      center.add(v1).add(v2).add(v3).divideScalar(3)

      face.materialIndex = Math.floor(center.y + 25) % 14 < 7 ? 0 : 1
      if (center.y === 24.5) face.materialIndex = 0

      if (face.materialIndex === 0) {
        face.materialIndex = Math.floor(center.x + 25) % 14 < 7 ? 0 : 1
        if (center.x === 24.5) face.materialIndex = 0
      }
    }

    geometry.vertices.forEach(vertex => {
      vertex._o = vertex.clone()
    })

    const material = [
      new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0
      }),
      new THREE.MeshBasicMaterial({
        color: 0x13756a,
        side: THREE.DoubleSide,
        wireframe: true
      })
    ]

    const mesh = new THREE.Mesh(geometry, material)
    const rotationTween = TweenMax.to(mesh.rotation, 80, {
      y: Math.PI * 2,
      x: Math.PI * 2,
      ease: Power0.easeNone,
      repeat: -1
    })
    scene.add(mesh)

    const noise3D = createNoise3D()
    let animationFrame

    const render = time => {
      animationFrame = requestAnimationFrame(render)
      geometry.vertices.forEach(vertex => {
        const ratio = noise3D(
          vertex._o.x * 0.01,
          vertex._o.y * 0.01 + time * 0.0005,
          vertex._o.z * 0.01
        )
        vertex.copy(vertex._o)
        vertex.multiplyScalar(1 + ratio * 0.1)
      })

      geometry.verticesNeedUpdate = true
      renderer.render(scene, camera)
    }

    animationFrame = requestAnimationFrame(render)

    const syncSize = () => {
      width = container.clientWidth || window.innerWidth
      height = container.clientHeight || window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    const resizeObserver = new ResizeObserver(syncSize)
    resizeObserver.observe(container)
    window.addEventListener('resize', syncSize)

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
      resizeObserver.disconnect()
      window.removeEventListener('resize', syncSize)
      rotationTween?.kill?.()
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id='scene'
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1
      }}
    />
  )
}
