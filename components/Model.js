import React from 'react'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Model = ({ color }) => {
  // =====================
  var textureManager = new THREE.LoadingManager()
  textureManager.onProgress = function (item, loaded, total) {
    // this gets called after any item has been loaded
    console.log(item, loaded, total)
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
  const newColor = myTextureArray.find(
    (image) => image === `/textura/${color}.webp`
  )

  // const texture = new THREE.TextureLoader().load('/floor/piso1.webp')
  // const material = new THREE.MeshBasicMaterial({ map: texture })
  const obj = useLoader(OBJLoader, '/figure3d/converse2.obj')
  // const colorTexture = useTexture('/textura/converse.jpg')
  const templa = new THREE.TextureLoader().load(newColor)
  obj.children[0].material = new THREE.MeshPhongMaterial({
    map: templa
  })

  return <primitive object={obj} position={[0, -1, 0]} args={[2, 2, 2]} />
}

export default Model
// export default Suzi
