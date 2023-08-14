import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
    margin:0 ;
    padding:0 ;
    box-sizing:border-box ;
}

body{
    color: #111115;
    width:100vw ;
    height:auto ;
    overflow-x:hidden ;
    font-family: 'Poppins', sans-serif;
    font-weight:400 ;
    &::-webkit-scrollbar {
    display: none;
}
}

a{
    text-decoration:none ;
}

ul{
    list-style:none ;
}
`

export default GlobalStyles;