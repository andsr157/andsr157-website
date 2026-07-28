declare module 'three/examples/jsm/loaders/GLTFLoader' {
  import type { Group, Loader } from 'three'

  export interface GLTF {
    scene: Group
    animations: unknown[]
    asset: unknown
  }

  export class GLTFLoader extends Loader {
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void,
    ): void
    setDRACOLoader(dracoLoader: unknown): void
  }
}

declare module 'three/examples/jsm/loaders/DRACOLoader' {
  import type { Loader } from 'three'

  export class DRACOLoader extends Loader {
    setDecoderPath(path: string): void
  }
}

declare module 'three/examples/jsm/controls/OrbitControls' {
  import type { Camera, Renderer } from 'three'

  export class OrbitControls {
    constructor(camera: Camera, domElement: HTMLElement)
    enableDamping: boolean
    dampingFactor: number
    screenSpacePanning: boolean
    maxPolarAngle: number
    enableZoom: boolean
    update(): void
  }
}
