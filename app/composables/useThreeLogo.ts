import { useWindowSize } from '@vueuse/core'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  Fog,
  Quaternion,
  Euler,
  AmbientLight,
  DirectionalLight,
  type Group,
} from 'three'
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export const useThreeLogo = () => {
  const experience = ref<HTMLCanvasElement | null>(null)
  const { width, height } = useWindowSize()
  const aspectRatio = computed(() => width.value / height.value)

  const bgColor = new Color('#000')
  const scene = new Scene()
  scene.fog = new Fog(bgColor, 0.1, 75)
  scene.background = bgColor

  const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000)
  camera.position.set(0, 0, 10)
  scene.add(camera)

  const gltfLoader = new GLTFLoader()
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')
  gltfLoader.setDRACOLoader(dracoLoader)

  let object: GLTF | null = null
  let renderer: WebGLRenderer | null = null
  let controls: OrbitControls | null = null
  let hovered = false
  let rafId: number | null = null

  const updateCamera = () => {
    if (camera && experience.value) {
      const canvasWidth = experience.value.clientWidth
      const canvasHeight = experience.value.clientHeight
      camera.aspect = canvasWidth / canvasHeight
      camera.updateProjectionMatrix()
    }
  }

  const updateRenderer = () => {
    if (renderer) {
      renderer.setSize(width.value, height.value)
      renderer.render(scene, camera)
    }
  }

  const addLights = () => {
    const ambientLight = new AmbientLight(0x6e6d6d)
    scene.add(ambientLight)

    const directionalLight = new DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(1, 1, 1).normalize()
    scene.add(directionalLight)
  }

  const addControls = () => {
    if (experience.value && renderer) {
      controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.dampingFactor = 0.25
      controls.screenSpacePanning = false
      controls.maxPolarAngle = Math.PI / 2
      controls.enableZoom = false
    }
  }

  const loop = () => {
    if (object && object.scene) {
      if (!hovered) {
        const deltaRotationQuaternion = new Quaternion().setFromEuler(
          new Euler(0, 0.005, 0),
        )
        object.scene.quaternion.multiplyQuaternions(
          deltaRotationQuaternion,
          object.scene.quaternion,
        )
      }
    }

    updateCamera()
    updateRenderer()
    controls?.update()
    rafId = requestAnimationFrame(loop)
  }

  const handleMouseEnter = () => {
    hovered = false
  }

  const handleMouseLeave = () => {
    hovered = true
  }

  const setRenderer = () => {
    if (experience.value) {
      renderer = new WebGLRenderer({ canvas: experience.value, alpha: true })
      experience.value.addEventListener('mouseenter', handleMouseEnter)
      experience.value.addEventListener('mouseleave', handleMouseLeave)
    }
  }

  onMounted(() => {
    gltfLoader.load(
      '/himsi.gltf',
      (gltf) => {
        gltf.scene.scale.set(0.35, 0.35, 0.35)
        gltf.scene.position.set(0, 0, 0)
        scene.add(gltf.scene)
        object = gltf
        setRenderer()
        addLights()
        addControls()
        loop()
      },
      undefined,
    )
  })

  onBeforeUnmount(() => {
    if (rafId) {
      cancelAnimationFrame(rafId)
    }
    if (experience.value) {
      experience.value.removeEventListener('mouseenter', handleMouseEnter)
      experience.value.removeEventListener('mouseleave', handleMouseLeave)
    }
    renderer?.dispose()
  })

  watch([width, height], () => {
    updateCamera()
    updateRenderer()
  })

  return {
    experience,
  }
}
