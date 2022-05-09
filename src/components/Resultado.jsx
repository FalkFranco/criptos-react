import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #fff;
    font-family: 'lato',sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Logo = styled.img`
    display: block;
    width: 150px;
    
`

const Texto = styled.p`
     font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }

`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCTDAY, IMAGEURL, LASTUPDATE} = resultado
  return (
      <Contenedor>
            <Logo 
                src={`https://www.cryptocompare.com/${IMAGEURL}`} 
                alt="logo crypto" 
            />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>El precio mas alto del dia fue: <span>{HIGHDAY}</span></Texto>
                <Texto>El precio mas bajo del dia fue: <span>{LOWDAY}</span></Texto>
                <Texto>Variacion ultimas 24hs: <span>{CHANGEPCTDAY}%</span></Texto>
                <Texto>Ultima actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        

      </Contenedor>
   
  )
} 

export default Resultado