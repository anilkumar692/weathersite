import React from 'react'
import Layot from '../Components/Layout/Layot'
import { Box, Typography } from '@mui/material'

function About() {
  return (
    <Layot >
      <Box sx={{
        my:15,
        backgroundColor:'#FFE5E5',
        textAlign:"center",
        "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize:"2rem",
          
          
        },
        "& p":{
          textAlign:"justify",
          p:3,fontSize:'2 rem'
        },
        "@media (max-width:600px)":{
           mt:"0px",
           "& h4":{fontSize:"1.6 rem"}
        }

      }}>
        <Typography variant='h4'>
          welcome to restaurent
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quis suscipit facere natus aut pariatur maiores in,
          sequi, dolorem repellat inventore quasi voluptas. Quod eligendi, libero provident iste suscipit soluta? Deleniti
          eveniet ipsa minus sed laudantium eos omnis. Eveniet vitae soluta maiores eligendi "excepturi porro. Vero tempore
          nam fuga ipsum neque suscipit nemo deserunt, ullam sequi officiis dolorum temporibus eligendi fugit soluta
          reiciendis sed consequuntur pariatur minima quasi? Reprehenderit animi doloribus obcaecati. Facere placeat eveniet
          soluta non repellendus repudiandae at cupiditate blanditiis consequuntur excepturi quibusdam eum, officiis, quasi
          laboriosam sed quia tempore! Maiores asperiores sit officiis velit inventore, necessitatibus quidem.
        </p>
        <br />
        <p style={{textAlign:'justify'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reiciendis modi ea ab sequi deserunt natus explicabo?
          Velit laudantium nam reprehenderit consequatur?
          Perspiciatis laudantium dicta facere porro, quam
          fugiat animi consequatur, rem velit, odio ad assumenda et
          esse ipsa ullam. Enim tenetur laborum tempora excepturi molestiae in autem aperiam blanditiis sunt aliquid eos facere,
          perspiciatis quod ipsa saepe ex officiis, fugit reiciendis incidunt corporis molestias. Pariatur sapiente doloremque
          omnis perspiciatis nihil deserunt quis, dignissimos nemo obcaecati placeat ipsum distinctio qui numquam aspernatur?
          Magnam distinctio laboriosam veniam nam reiciendis voluptatem facilis.
        </p>
      </Box>
    </Layot>
  )
}

export default About