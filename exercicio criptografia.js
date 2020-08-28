//let Element_body= document.body
//let ol= document.createElement('ol')
//Element_body.appendChild(ol)
let ol= document.getElementById ('ol')
let ol1 = document.getElementById('ol1')
let ol2 = document.getElementById('ol2')
let ol3 = document.getElementById ('ol3')
let i2 = ''
let i1= ''

function criptografar() {
     
     let Palavra = document.getElementById('caixa').value;
     let lista= document.createElement('li')
     let PalavraCifrada=[]
     let PalavraFinal= ''
     let PontosEsimbolos= ''
 
     for( i=0;i<Palavra.length;i++){

          if( Palavra.charCodeAt(i) <= 65 ) {
              PontosEsimbolos= Palavra.charCodeAt(i)
              PalavraCifrada [i] = String.fromCharCode(PontosEsimbolos)
          }else{

               let contadora=(Palavra.charCodeAt(i)+3) 
               if(contadora >=123 ){
        
                   PalavraCifrada [i] = String.fromCharCode(contadora - 26)
                   //document.getElementById('valor').innerHTML= PalavraCifrada.replace('#',' ')
               }else{
                
                    PalavraCifrada [i] = String.fromCharCode(contadora)
                    //document.getElementById('valor').innerHTML= PalavraCifrada.replace('#',' ')
                       
               }

          }

          
 }
      
          PalavraFinal = PalavraCifrada.join('')
          lista.textContent = PalavraFinal
          let botao = document.createElement('button')
          ol.appendChild(lista)
          ol.appendChild(botao)
          botao.textContent = 'decifrar texto'
          botao.value = PalavraFinal
          botao.addEventListener('click', ()=>{
               let Palavra3= botao.value
               return descriptografarPalavra(Palavra3)
          })
          
           
  
}



function descriptografar() {
     
     let Palavra = document.getElementById('caixa2').value;
     let lista= document.createElement('li')
     let PalavraCifrada=[]
     let PalavraFinal= ''
     let PontosEsimbolos= ''
 
     for( i=0;i<Palavra.length;i++){

          if( Palavra.charCodeAt(i) <= 65 ) {
              PontosEsimbolos= Palavra.charCodeAt(i)
              PalavraCifrada [i] = String.fromCharCode(PontosEsimbolos)
          }else{

               let contadora=(Palavra.charCodeAt(i)-3) 
               if(contadora <=96 ){
        
                   PalavraCifrada [i] = String.fromCharCode(contadora + 26)
                   //document.getElementById('valor').innerHTML= PalavraCifrada.replace('#',' ')
               }else{
                
                    PalavraCifrada [i] = String.fromCharCode(contadora)
                    //document.getElementById('valor').innerHTML= PalavraCifrada.replace('#',' ')
                       
               }

          }

 }
      
          PalavraFinal = PalavraCifrada.join('')
          lista.textContent = PalavraFinal
          let botao = document.createElement('button')
          ol1.appendChild(lista)
          ol1.appendChild(botao)
          botao.textContent = 'cifrar texto'
          botao.value = PalavraFinal
          botao.addEventListener('click', ()=>{
               let Palavra3= botao.value
               return criptografarPalavra(Palavra3)
          })
          
}


function criptografarPalavra(Palavra) {
     
     let lista= document.createElement('li')
     let lista2= document.createElement('p')
     let linha= document.createElement('hr')
     let excluir = document.createElement('button')
     ol2.appendChild(lista)
     ol2.appendChild(lista2)
     ol2.appendChild(excluir)
     ol2.appendChild(linha)
     let PalavraCifrada=[]
     let PalavraFinal= ''
     let PontosEsimbolos= ''
 
     for( i=0;i<Palavra.length;i++){

          if( Palavra.charCodeAt(i) <= 65 ) {
              PontosEsimbolos= Palavra.charCodeAt(i)
              PalavraCifrada [i] = String.fromCharCode(PontosEsimbolos)
          }else{

               let contadora=(Palavra.charCodeAt(i)+3) 
               if(contadora >=123 ){
        
                   PalavraCifrada [i] = String.fromCharCode(contadora - 26)
                   //document.getElementById('valor').innerHTML= PalavraCifrada.replace('#',' ')
               }else{
                
                    PalavraCifrada [i] = String.fromCharCode(contadora)
                    //document.getElementById('valor').innerHTML= PalavraCifrada.replace('#',' ')
                       
               }

          }
         
 }
          i1++
          PalavraFinal = PalavraCifrada.join('')
          lista.textContent = PalavraFinal
          lista2.textContent= Palavra
          excluir.textContent = 'Excluir item'
          lista.id = ` tag${i1}`
          lista2.id= ` tag${i1}`
          excluir.id = ` tag${i1}`
          linha.id = ` tag${i1}`
          excluir.addEventListener('click' , ()=>{ 

              let excluirTD= document.getElementById (lista.id)
              excluirTD.parentNode.removeChild (excluirTD)

              let excluirTD1= document.getElementById (lista2.id)
              excluirTD1.parentNode.removeChild (excluirTD1)

              let excluirTD2= document.getElementById (excluir.id)
              excluirTD2.parentNode.removeChild (excluirTD2)

              let excluirTD3= document.getElementById (linha.id)
              excluirTD3.parentNode.removeChild (excluirTD3)
               
               
 
          
          }
          )
          //let botao = document.createElement('button')
         

}



function descriptografarPalavra(Palavra) {
     
     let lista= document.createElement('li')
     let lista2= document.createElement('p')
     let linha = document.createElement('hr')
     let excluir = document.createElement('button')
     ol3.appendChild(lista)
     ol3.appendChild(lista2)
     ol3.appendChild(excluir)
     ol3.appendChild(linha)
     let PalavraCifrada=[]
     let PalavraFinal= ''
     let PontosEsimbolos= ''
 
     for( i=0;i<Palavra.length;i++){

          if( Palavra.charCodeAt(i) <= 65 ) {
              PontosEsimbolos= Palavra.charCodeAt(i)
              PalavraCifrada [i] = String.fromCharCode(PontosEsimbolos)
          }else{

               let contadora=(Palavra.charCodeAt(i)-3) 
               if(contadora <=96 ){
        
                   PalavraCifrada [i] = String.fromCharCode(contadora + 26)
                   //document.getElementById('valor').innerHTML= PalavraCifrada.replace('#',' ')
                   
          
               }else{
                
                    PalavraCifrada [i] = String.fromCharCode(contadora)
                    //document.getElementById('valor').innerHTML= PalavraCifrada.replace('#',' ')
                       
               }

          }

          
 }
          i2++
          PalavraFinal = PalavraCifrada.join('')
         // PalavraFinal.replace ('#', ' ')
          lista.textContent = PalavraFinal
          lista2.textContent = Palavra
          excluir.textContent = 'Excluir item'
          lista.id = ` tag${i2}`
          lista2.id= ` tag${i2}`
          excluir.id = ` tag${i2}`
          linha.id = ` tag${i2}`
          excluir.addEventListener('click' , ()=>{ 

              let excluirTD= document.getElementById (lista.id)
              excluirTD.parentNode.removeChild (excluirTD)

              let excluirTD1= document.getElementById (lista2.id)
              excluirTD1.parentNode.removeChild (excluirTD1)

              let excluirTD2= document.getElementById (excluir.id)
              excluirTD2.parentNode.removeChild (excluirTD2)

              let excluirTD3= document.getElementById (linha.id)
              excluirTD3.parentNode.removeChild (excluirTD3)
               
               
 

          }
          )
          
}



          
          

     
     



/*function criptografar(Palavra){

    
    for( i=0;i<Palavra.length;i++){

       let contadora=(Palavra.charCodeAt(i)+3) 
       if(contadora >=123 ){

            let PalavraCifrada = String.fromCharCode(contadora - 26)
           alert(PalavraCifrada.replace('#',' '))

       }else{
        
        let PalavraCifrada = String.fromCharCode(contadora)
        alert(PalavraCifrada.replace('#',' '))

       }
        
       }
        
    }

//criptografar('Bruno')
//resultado= fvyrs


//console.log("*****************************************************************")



/*function descriptografar(Palavra){

    
    for( i=0;i<Palavra2.length;i++){
       let contadora=Palavra2.charCodeAt(i)-3
       
      if(contadora <= 96 ){

           let PalavraDeciifrada = String.fromCharCode(contadora + 26)
           console.log(PalavraDeciifrada)
      }

       else{

            let PalavraDecifrada = String.fromCharCode(contadora)
            console.log(PalavraDecifrada)
    

        
       
       }
        
}
}



descriptografar()*/



   



//alert("deu certo")