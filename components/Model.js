import React from 'react'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const Model = ({ color, colorCordones }) => {
  // declaro la figura
  const { nodes, materials } = useGLTF('/figure3d/converse.glb')
  // =====================

  // Preloder de las texturas
  var textureManager = new THREE.LoadingManager()
  textureManager.onProgress = function (item, loaded, total) {
    // this gets called after any item has been loaded
  }

  textureManager.onLoad = function () {
    // all textures are loaded
    // ...
  }

  var textureLoader = new THREE.ImageLoader(textureManager)
  var myTextureArray = [
    '/textura/conversetelaverder.webp',
    '/textura/conversetelaazul.webp',
    '/textura/conversetelablanco.webp',
    '/textura/conversetelanegra.webp',
    '/textura/tample.webp',
    '/textura/conversetelaamarilla.webp'
  ]
  var myTexture = new THREE.Texture()
  myTextureArray.push(myTexture)

  textureLoader.load(myTextureArray[0], function (image) {
    myTexture.image = image
  })

  // capturo la textura
  const newColor = myTextureArray.find(
    (image) => image === `/textura/${color}.webp`
  )

  // const obj = useLoader(OBJLoader, '/figure3d/converse2.obj')

  // ESTILOS DE LOS ZAPATOS
  const templa = new THREE.TextureLoader().load(newColor)

  nodes.converse001.children[1].material = new THREE.MeshPhongMaterial({
    map: templa
  })
  // ESTILOS DE LOS CORDONES
  const cordones = new THREE.TextureLoader().load(
    `/cordones/${colorCordones}.webp`
  )
  nodes.converse001.children[2].material = new THREE.MeshPhongMaterial({
    map: cordones
  })

  // ESTILOS DE LOS EVILLAS
  const evillas = new THREE.TextureLoader().load('/evillas/evillas.webp')

  nodes.converse001.children[0].material = new THREE.MeshPhongMaterial({
    map: evillas
  })

  return (
    <primitive
      object={nodes.converse001}
      position={[0, -1, 0]}
      args={[2, 2, 2]}
    />
  )
}

export default Model
// export default Suzi
