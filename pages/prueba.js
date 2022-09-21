import React from 'react'
import { useEffect } from 'react'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

const Prueba = () => {
  // SE OBTIENE LA CARD DEL OBJETO
  useEffect(() => {
    if (typeof window !== 'undefined') {
      //  Card 3d
      const card3D = document.querySelector('.card')
      // Dimensiones de la Card
      const card3DWidth = document.querySelector('.card').clientWidth
      const card3DHeight = document.querySelector('.card').clientHeight

      // console.log(card3DWidth, card3DHeight)
      //creating scene
      var scene = new THREE.Scene()
      scene.background = new THREE.Color(0xffffff)

      //add camera
      var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )

      //renderer
      var renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      card3D.appendChild(renderer.domElement)

      // const texturaFloor = new THREE.TextureLoader().load('/floor/piso3.webp')
      // console.log('/floor/piso3.webp')
      // texturaFloor.wrapS = THREE.RepeatWrapping
      // texturaFloor.wrapT = THREE.RepeatWrapping
      // texturaFloor.repeat.set(4, 4)

      //add geometry
      let floorTexture = new THREE.TextureLoader().load('/floor/piso3.webp')
      floorTexture.wrapS = THREE.RepeatWrapping
      floorTexture.wrapT = THREE.RepeatWrapping
      floorTexture.repeat.set(4, 4)
      let paredTexture = new THREE.TextureLoader().load('/floor/piso3.webp')
      paredTexture.wrapS = THREE.RepeatWrapping
      paredTexture.wrapT = THREE.RepeatWrapping
      paredTexture.repeat.set(4, 4)

      const planoFloor = new THREE.PlaneGeometry(10, 10)
      let materialFloor = new THREE.MeshBasicMaterial({
        map: floorTexture,
        side: THREE.DoubleSide
      })
      var floor = new THREE.Mesh(planoFloor, materialFloor)
      floor.rotation.x = Math.PI / 2
      floor.position.y = -0.5

      // const planoPared = new THREE.PlaneGeometry(100, 100)

      // const materialPared = new THREE.MeshBasicMaterial({
      //   map: paredTexture,
      //   side: THREE.DoubleSide
      // })
      scene.add(floor)

      camera.position.z = 5

      // RENDER DEL  TENIS

      const loader = new OBJLoader()

      loader.load('/figure3d/converse2.obj', function (object) {
        console.log(object)
        scene.add(object)
        // ///textura de los telas de los tennis
        // const telajeannegra = new THREE.TextureLoader().load(
        //   '/textura/bump.jpg'
        // )
        // const telajeanazul = new THREE.TextureLoader().load(
        //   '/textura/converse.jpg'
        // )
        // // THREE.MeshPhongMaterial({color:0xffffff, map:texture1}));
        // object = new THREE.MeshPhongMaterial({
        //   map: telajeannegra
        // })
      })

      // loader.setPath('/figure3d/')
      // loader.load('figure3d/converse.obj', function (object) {
      //   object.position.y = -0.5
      //   scene.add(object)
      //   const telajeanazul = new THREE.TextureLoader().load(
      //     '/textura/conversetelaamarilla.png'
      //   )
      //   let material1 = new THREE.MeshPhongMaterial({
      //     map: telajeanazul,
      //     side: THREE.DoubleSide
      //   })
      //   object = new THREE.Mesh(planoFloor, material1)
      //   scene.add(object)
      // })
      // // var loader = new THREE.OBJLoader()
      // // loader.load('/figure3d/supastarOBJ.obj', (root) => {
      // //   scene.add(root)
      // // })

      //animation
      var animate = function () {
        requestAnimationFrame(animate)

        // cube.rotation.x += 0.01
        // cube.rotation.y += 0.01

        renderer.render(scene, camera)
      }

      animate()
    }
  }, [])

  return <div className="card"></div>
}

export default Prueba
