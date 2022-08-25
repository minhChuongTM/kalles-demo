const LayoutDefault = ({children}) => {
   
    return(
        <div>
            <header>header</header>
            <main>{children}</main>
            <footer>footer</footer>
        </div>
    )
}

export default LayoutDefault;