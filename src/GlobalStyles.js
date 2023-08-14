import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
    margin:0 ;
    padding:0 ;
    box-sizing:border-box ;
}

body{
    background: #F2ECF9;
    color: #111115;
    width:100vw ;
    height:auto ;
    overflow-x:hidden ;
    font-family: 'Poppins', sans-serif;
    font-weight:400 ;
    cursor:default ;
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