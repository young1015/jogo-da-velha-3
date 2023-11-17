"use client"

import Image from 'next/image'

export default function Home() {
  
  let jogador = "X"

  function marcar(celula : any) {

    if(celula.innerHTML != "") {
      return
    }

    celula.innerHTML = jogador

    if(jogador == "X") {
      jogador = "O"
    } else {
      jogador = "X"
    }
  }

  return (
    <>
      <header>
        <div className='bg-slate-950 h-[100px] text-white text-5xl text-center'>Jogo da Velha</div>
      </header>
      <table className='flex justify-center text-center text-white text-5xl mt-20'>
        <tbody className=''>
          <tr>
            <td onClick={(celula)=> marcar(celula.target)}  className='w-[100px] h-[100px] border-2 hover:bg-slate-900 transition duration-500'></td>
            <td onClick={(celula)=> marcar(celula.target)}  className='w-[100px] h-[100px] border-2 hover:bg-slate-900 transition duration-500'></td>
            <td onClick={(celula)=> marcar(celula.target)}  className='w-[100px] h-[100px] border-2 hover:bg-slate-900 transition duration-500'></td>
          </tr>
          <tr>
            <td onClick={(celula)=> marcar(celula.target)}  className='w-[100px] h-[100px] border-2 hover:bg-slate-900 transition duration-500'></td>
            <td onClick={(celula)=> marcar(celula.target)}  className='w-[100px] h-[100px] border-2 hover:bg-slate-900 transition duration-500'></td>
            <td onClick={(celula)=> marcar(celula.target)}  className='w-[100px] h-[100px] border-2 hover:bg-slate-900 transition duration-500'></td>
          </tr>
          <tr>
            <td onClick={(celula)=> marcar(celula.target)}  className='w-[100px] h-[100px] border-2 hover:bg-slate-900 transition duration-500'></td>
            <td onClick={(celula)=> marcar(celula.target)}  className='w-[100px] h-[100px] border-2 hover:bg-slate-900 transition duration-500'></td>
            <td onClick={(celula)=> marcar(celula.target)}  className='w-[100px] h-[100px] border-2 hover:bg-slate-900 transition duration-500'></td>
          </tr>
        </tbody>
      </table>
    </>

  )
}
