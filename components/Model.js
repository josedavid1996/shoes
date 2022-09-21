import React from 'react'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Model = ({ color }) => {
  // const texture = new THREE.TextureLoader().load('/floor/piso1.webp')
  // const material = new THREE.MeshBasicMaterial({ map: texture })
  const obj = useLoader(OBJLoader, '/figure3d/converse2.obj')
  // const colorTexture = useTexture('/textura/converse.jpg')
  const templa = new THREE.TextureLoader().load(`/textura/${color}.webp`)
  obj.children[0].material = new THREE.MeshPhongMaterial({
    map: templa
  })

  return <primitive object={obj} position={[0, -1, 0]} args={[2, 2, 2]} />
}

export default Model
// export default Suzi
