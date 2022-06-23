import React from 'react'
import TableControlBtns from '../TableControlBtns/TableControlBtns'
import TableHeader from '../TableHeader/TableHeader'
import TableBodyRow from '../TableBodyRow/TableBodyRow'
import JhinImg from '../../../../../../public/assets/new-images/Profile/Jhin.png'
import ZiggsImg from '../../../../../../public/assets/new-images/Profile/Ziggs.png'



const Table = () => {

  const tableData = [
    {
      rank: 1,
      role: 'adc',
      champion: [{
        img: JhinImg,
        name: 'jhin',
        games: 214
      }],
      wr: 57.21,
      kda: 2.14,
      kdaThunk: 1,
      csMin: 6.7,
      goldMin: 421,
      damageDealt: 20901
    },
    {
      rank: 2,
      role: 'bdg',
      champion: [{
        img: ZiggsImg,
        name: 'jhin',
        games: 114
      }],
      wr: 31.21,
      kda: 2.14,
      kdaThunk: 1,
      csMin: 6.7,
      goldMin: 421,
      damageDealt: 20101
    },
    {
      rank: 1,
      role: 'adc',
      champion: [{
        img: JhinImg,
        name: 'jhin',
        games: 214
      }],
      wr: 57.21,
      kda: 2.14,
      kdaThunk: 1,
      csMin: 6.7,
      goldMin: 421,
      damageDealt: 20901
    },
    {
      rank: 2,
      role: 'bdg',
      champion: [{
        img: ZiggsImg,
        name: 'jhin',
        games: 114
      }],
      wr: 31.21,
      kda: 2.14,
      kdaThunk: 1,
      csMin: 6.7,
      goldMin: 421,
      damageDealt: 20101
    },
    {
      rank: 1,
      role: 'adc',
      champion: [{
        img: JhinImg,
        name: 'jhin',
        games: 214
      }],
      wr: 57.21,
      kda: 2.14,
      kdaThunk: 1,
      csMin: 6.7,
      goldMin: 421,
      damageDealt: 20901
    },
    {
      rank: 2,
      role: 'bdg',
      champion: [{
        img: ZiggsImg,
        name: 'jhin',
        games: 114
      }],
      wr: 31.21,
      kda: 2.14,
      kdaThunk: 1,
      csMin: 6.7,
      goldMin: 421,
      damageDealt: 20101
    },
    {
      rank: 1,
      role: 'adc',
      champion: [{
        img: JhinImg,
        name: 'jhin',
        games: 214
      }],
      wr: 57.21,
      kda: 2.14,
      kdaThunk: 1,
      csMin: 6.7,
      goldMin: 421,
      damageDealt: 20901
    },
    {
      rank: 2,
      role: 'bdg',
      champion: [{
        img: ZiggsImg,
        name: 'jhin',
        games: 114
      }],
      wr: 31.21,
      kda: 2.14,
      kdaThunk: 1,
      csMin: 6.7,
      goldMin: 421,
      damageDealt: 20101
    },
    
  ]


  return (
    <section className=' mt-[100px] mb-[300px] '>
      <div className="container">
        <TableControlBtns />
        <TableHeader className=" mt-10 " />
        {/* table row  */}
        <div className=' mt-[25px] '>
          {
            tableData.map((row, index) => {
              return (
                <TableBodyRow key={index} {...row} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Table