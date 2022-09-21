import Head from 'next/head'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import TheeScene from '../components/TheeScene'
import { OrbitControls, Stars } from '@react-three/drei'
import Model from '../components/Model'
import IconStar from '../icons/IconStar'
import { useFormik } from 'formik'

const MyInput = ({ field, form, ...props }) => {
  return <input {...field} {...props} />
}
export default function Home() {
  // const [nameColor, setNameColor] = useState('Amarillo')
  // const [modal, setmodal] = useState(false)
  console.log('hola')
  // console.log(initialValues)
  // const { values, setFieldValue, setValues, ...form } = useFormik({
  //   onSubmit: () => {},
  //   initialValues: {
  //     color: 'conversetelaamarilla',
  //     talla: '32'
  //   }
  // })
  const [values, setValues] = useState({
    color: 'conversetelaamarilla',
    talla: '32',
    nameColor: 'Amarillo'
  })

  // useEffect(() => {
  //   switch (values.color) {
  //     case 'conversetelaamarilla':
  //       setNameColor('Amarillo')
  //       return
  //     case 'conversetelaazul':
  //       setNameColor('Azul')
  //       return
  //     case 'conversetelablanco':
  //       setNameColor('Blanco')
  //       return
  //     case 'conversetelanegra':
  //       setNameColor('Negro')
  //       return
  //     case 'conversetelaroja':
  //       setNameColor('Rojo')
  //       return
  //     case 'conversetelaverder':
  //       setNameColor('Verde')
  //       return
  //     case 'tample':
  //       setNameColor('Tample')
  //       return
  //   }
  // }, [values.color])
  // console.log(nameColor)
  const handleSubmit = (e) => {
    e.preventDefault()
    // setmodal(true)
    // setTimeout(() => {
    //   setmodal(false)
    // }, 3000)
  }
  return (
    <>
      <Head>
        <title>Shoes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* MODAL */}

      {/* <div
        className={`${
          modal ? 'opacity-1' : 'opacity-0'
        } absolute w-64 h-64 bg-[#FF7733] top-0 right-0 m-4 p-2 rounded-lg  transition-all duration-700`}
      >
        <h3 className="text-[22px] mb-2 text-center text-white font-semibold">
          Converse All Star en Zapatos para Hombre y Mujer
        </h3>
        <p className="text-[20px] text-center font-[500]">Precio : $90.000</p>
        <p className="text-[20px] text-center font-[500]">
          Color : {nameColor}
        </p>
        <p className="text-[20px] text-center font-[500]">
          Talla : {values.talla}
        </p>
      </div> */}

      <div className=" flex justify-center items-center min-h-screen">
        <div className="w-[90%] h-[90vh] grid grid-cols-2 rounded-lg shadow-2xl">
          <div className="3d card">
            <TheeScene>
              <color attach="background" args={['#161c24']} />
              <Suspense fallback={null}>
                {useMemo(
                  () => (
                    <Model color={values.color} />
                  ),
                  [values.color]
                )}
              </Suspense>
              <ambientLight />
              <OrbitControls autoRotate />
              <Stars />
            </TheeScene>
          </div>
          <div className="description p-8">
            <h1 className="font-semibold text-3xl mb-4">
              Converse All Star en Zapatos para Hombre y Mujer
            </h1>
            <div className="flex gap-2 items-center mb-4">
              <IconStar className="text-[#3483FA]" />
              <IconStar className="text-[#3483FA]" />
              <IconStar className="text-[#3483FA]" />
              <IconStar className="text-[#3483FA]" />
              <IconStar className="text-[#3483FA]" />
              <span className="text-[#3483FA]">(35)</span>
            </div>
            <div className="flex items-center gap-3">
              <p className="bg-[#FF7733] font-semibold text-white text-xs p-1 rounded-sm">
                MAS VENDIDO
              </p>
              <span className="text-xs text-[#3483FA]">1° en Tenis</span>
            </div>
            {/* PRECIO */}
            <p className="font-light text-[36px]">$90.000</p>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-2">
                <label className="mb-1">Color:</label>
                <select
                  value={values.color}
                  onChange={(e) => {
                    setValues({
                      ...values,
                      color: e.target.value,
                      nameColor: e.target.name
                    })
                  }}
                  className="p-2 border border-[#00000080] rounded-md"
                >
                  <option value="conversetelaamarilla">Amarillo</option>
                  <option value="conversetelaazul">Azul</option>
                  <option value="conversetelablanco">Blanco</option>
                  <option value="conversetelanegra">Negro</option>
                  <option value="conversetelaroja">Rojo</option>
                  <option value="conversetelaverder">Verde</option>
                  <option value="tample">Tample</option>
                </select>
              </div>
              <div className="flex flex-col mb-2">
                <label className="mb-1">Talla:</label>
                <select
                  value={values.talla}
                  className="p-2 border border-[#00000080] rounded-md"
                  onChange={(e) =>
                    setValues({
                      ...values,
                      talla: e.target.value
                    })
                  }
                >
                  <option value="32">32</option>
                  <option value="34">34</option>
                  <option value="36">36</option>
                  <option value="38">38</option>
                  <option value="40">40</option>
                </select>
              </div>
              {/* <div className="flex flex-col mb-8">
                <label className="mb-1">Color de Cordones:</label>
                <select className="p-2 border border-[#00000080] rounded-md">
                  <option>Verde</option>
                </select>
              </div> */}
              <button
                type="submit"
                className="bg-[#FF7733] font-semibold text-white text-base rounded-lg text-center p-3 mx-auto"
              >
                Agregar al carrito
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
