
import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge';




export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  orbitDuration,
  shouldSpin = false,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string;
  orbitDuration?: string;
}>) => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div
        className={twMerge(shouldOrbit === true && 'animate-spin')}
        style={{
          animationDuration: orbitDuration,
        }}
      >
        <div
          className='flex items-start justify-start'
          style={{
            transform: `rotate(${rotation}deg)`, // Lo que este dentro rota alrededor de su centro
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div 
            className={twMerge(shouldSpin===true && 'animate-spin [animation-duration:10s]')}
            style={{
              animationDuration: spinDuration
            }}  
          >
            <div
              className='inline-flex'
              style={{
                transform: `rotate(${rotation * -1}deg)`, // Cuando se aplica una rotación negativa = rotación + del contenedorppal se cancela el efecto de rotación
              }}                                          // lo que resulta en una orientación final de 0 grados. Las estrellas apuntan hacia arriba.
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

