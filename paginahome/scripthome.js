
/*Script formulario*/


const f_data = document.querySelector('#f_data')
const f_number = document.querySelector('#f_number')
const f_btn = document.querySelector('#f_btn')
const res= document.querySelector('#res')



f_btn.addEventListener('click',(evt)=>{

    let d=f_data.value
    let n= Number(f_number.value)
    let resul= n*30
      res.innerHTML=""
     let item=document.createElement('option')
     let item2=document.createElement('p')
     let link = document.createElement('a')
     link.innerText='Pagar'
     link.setAttribute('href','#')     
     item.innerHTML +=`Data ${d}, ${n} pessoas, ${resul} R$ `
        item2.appendChild(link)
        res.appendChild(item)
        res.appendChild(item2)
      
      
        
    })

    const direcionar = (url) => {
      window.open(url, "if_home")
  }

    const iframeVideo =document.querySelector('#iframeVideo')
    iframeVideo.addEventListener('click',(evt)=>{
      direcionar("/paginavideo/videos.html")
    })
    const galeria =document.querySelector('.galeria')
    galeria.addEventListener('click',(evt)=>{
      direcionar("/paginafotos/fotos.html")
    })
    const iframemap=document.querySelector('.iframe-map')
    iframemap.addEventListener('click',(evt)=>{
      direcionar("/paginaexposicoes/exposicoes.html")
    })
   
   
