import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"


export default component$(()=> {
  return (
    <div class="bg-gray-50 ">
    <div class="container mx-auto grid-rows-2 grid-cols-1 py-12">
      <h1 class='mx-8 text-3xl'>New Reviews</h1>
      <div>
        <div
          class="grid gap-14 mt-8 mx-4"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(18.8rem, 1fr)",
          }}
        >
          <div class="p-0">
            <Link href={``} >
              <div>
                <div class="text-ellipsis  overflow-hidden h-20">
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
          <div class="p-0">
            <Link href={``}>
              <div>
                <div class="text-ellipsis  overflow-hidden h-20">
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
          <div class="p-0">
            <Link href={``} >

              <div>
                <div class="text-ellipsis  overflow-hidden h-20">
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
          <div class="p-0">
            <Link href={``} >

              <div>
                <div class="text-ellipsis  overflow-hidden h-20">
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
          <div class='hidden'/>
          <div class='hidden' />
          <div class='hidden' />
          <div class='hidden' />
        </div>
      </div>
    </div>
  </div>
  )
})
