import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NewReviews() {
  return (
    <div className="bg-gray-50 ">
    <div className="container mx-auto grid-rows-2 grid-cols-1 py-12">
      <h1 className='mx-8 text-3xl'>New Reviews</h1>
      <div>
        <div
          className="grid gap-14 mt-8 mx-4"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(18.8rem, 1fr)",
          }}
        >
          <div className="p-0">
            <Link href={``} >
              <div className="m-3">
                <Image
                  height={80}
                  width={80}
                  src={""}
                  alt=""
                  style={{
                    maxHeight: "200px",
                  }}
                />
              </div>
              <div>
                <div className="text-ellipsis  overflow-hidden h-20">
                  The Library Reviews en Santa Marta, Magdalena me ayudó a
                  mejorar mis habilidades literarias y a encontrar las
                  mejores opciones de lectura. También me proporcionaron un
                  servicio profesional y atento para mejorar mi currículum.
                  Agradezco sinceramente a The Library Reviews por su
                  dedicación y ayuda en mi carrera y en mi vida como lector.
                </div>
                <div>Autor: Daizai</div>
                <div>Libro: Principito</div>
              </div>
            </Link>
          </div>
          <div className="p-0">
            <Link href={``} passHref>
              <div className="m-3">
                <Image
                  height={80}
                  width={80}
                  src={""}
                  alt=""
                  style={{
                    maxHeight: "200px",
                  }}
                />
              </div>
              <div>
                <div className="text-ellipsis  overflow-hidden h-20">
                  The Library Reviews en Santa Marta, Magdalena me ayudó a
                  mejorar mis habilidades literarias y a encontrar las
                  mejores opciones de lectura. También me proporcionaron un
                  servicio profesional y atento para mejorar mi currículum.
                  Agradezco sinceramente a The Library Reviews por su
                  dedicación y ayuda en mi carrera y en mi vida como lector.
                </div>
                <div>Autor: Daizai</div>
                <div>Libro: Principito</div>
              </div>
            </Link>
          </div>
          <div className="p-0">
            <Link href={``} passHref>
              <div className="m-3">
                <Image
                  height={80}
                  width={80}
                  src={""}
                  alt=""
                  style={{
                    maxHeight: "200px",
                  }}
                />
              </div>
              <div>
                <div className="text-ellipsis  overflow-hidden h-20">
                  The Library Reviews en Santa Marta, Magdalena me ayudó a
                  mejorar mis habilidades literarias y a encontrar las
                  mejores opciones de lectura. También me proporcionaron un
                  servicio profesional y atento para mejorar mi currículum.
                  Agradezco sinceramente a The Library Reviews por su
                  dedicación y ayuda en mi carrera y en mi vida como lector.
                </div>
                <div>Autor: Daizai</div>
                <div>Libro: Principito</div>
              </div>
            </Link>
          </div>
          <div className="p-0">
            <Link href={``} passHref>
              <div className="m-3">
                <Image
                  height={80}
                  width={80}
                  src={""}
                  alt=""
                  style={{
                    maxHeight: "200px",
                  }}
                />
              </div>
              <div>
                <div className="text-ellipsis  overflow-hidden h-20">
                  The Library Reviews en Santa Marta, Magdalena me ayudó a
                  mejorar mis habilidades literarias y a encontrar las
                  mejores opciones de lectura. También me proporcionaron un
                  servicio profesional y atento para mejorar mi currículum.
                  Agradezco sinceramente a The Library Reviews por su
                  dedicación y ayuda en mi carrera y en mi vida como lector.
                </div>
                <div>Autor: Daizai</div>
                <div>Libro: Principito</div>
              </div>
            </Link>
          </div>
          <div className='hidden'/>
          <div className='hidden' />
          <div className='hidden' />
          <div className='hidden' />
        </div>
      </div>
    </div>
  </div>
  )
}
